import { paymentId } from "@/lib/ids";
import { gatewayConfigured, paymentAmounts } from "@/lib/payments";
import { clientKey, rateLimit } from "@/lib/rate-limit";
import { updateStore } from "@/lib/store";
import { paymentCreateSchema } from "@/lib/validation";
import type { PaymentRecord } from "@/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const limit = rateLimit(clientKey(request, "payments"), 8);
  if (!limit.ok) {
    return Response.json({ ok: false, message: "Too many payment requests." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  const parsed = paymentCreateSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ ok: false, message: "Choose a valid enrollment step." }, { status: 422 });
  }

  const created = await updateStore((store) => {
    const lead = store.leads.find((item) => item.id === parsed.data.leadId);
    if (!lead) return null;
    const now = new Date().toISOString();
    const payment: PaymentRecord = {
      id: paymentId(),
      leadId: lead.id,
      purpose: parsed.data.purpose,
      amount: paymentAmounts[parsed.data.purpose],
      currency: "INR",
      status: "pending",
      createdAt: now,
      updatedAt: now,
    };
    store.payments.push(payment);
    lead.stage = parsed.data.purpose === "initial_enrollment" ? "PAYMENT PENDING" : "₹10K PAYMENT PENDING";
    lead.updatedAt = now;
    return payment;
  });

  if (!created) {
    return Response.json({ ok: false, message: "Enquiry not found." }, { status: 404 });
  }

  return Response.json({
    ok: true,
    paymentId: created.id,
    amount: created.amount,
    currency: created.currency,
    status: created.status,
    checkout: gatewayConfigured()
      ? { provider: process.env.PAYMENT_GATEWAY_PROVIDER || "configured" }
      : null,
    message: gatewayConfigured()
      ? "A payment session was created. Complete it only through the verified gateway. MARKEX confirms payment from the gateway webhook, not from this page."
      : "Your enrollment request is registered. A MARKEX representative will share the verified payment step. This page cannot mark a payment as successful.",
  });
}
