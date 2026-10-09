import { confirmPayment, verifyWebhook } from "@/lib/payments";
import { clientKey, rateLimit } from "@/lib/rate-limit";
import { queueWhatsAppEvent } from "@/lib/whatsapp";
import { z } from "zod";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const webhookSchema = z.object({
  paymentId: z.string().min(8),
  status: z.enum(["paid", "failed"]),
  gatewayTransactionId: z.string().min(2).max(120).optional(),
  amount: z.number().int().positive().optional(),
});

export async function POST(request: Request) {
  const limit = rateLimit(clientKey(request, "webhook"), 60, 60 * 1000);
  if (!limit.ok) return Response.json({ ok: false }, { status: 429 });

  const raw = await request.text();
  if (!verifyWebhook(raw, request.headers.get("x-markex-signature"))) {
    return Response.json({ ok: false, message: "Invalid signature." }, { status: 401 });
  }

  let json: unknown;
  try {
    json = JSON.parse(raw);
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }

  const parsed = webhookSchema.safeParse(json);
  if (!parsed.success) return Response.json({ ok: false }, { status: 422 });

  const result = await confirmPayment(parsed.data);
  if (!result.ok) return Response.json(result, { status: 400 });

  const student = "student" in result ? result.student : undefined;
  if (parsed.data.status === "paid" && student) {
    await queueWhatsAppEvent(
      student.status === "FULLY PAID" ? "payment_confirmation" : "admission_confirmation",
      student.phone,
    );
  }

  return Response.json({ ok: true, status: result.payment.status });
}
