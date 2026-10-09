import { updateStore } from "@/lib/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(_request: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const payment = await updateStore((store) => store.payments.find((item) => item.id === id) ?? null);
  if (!payment) return Response.json({ ok: false }, { status: 404 });
  return Response.json({
    ok: true,
    paymentId: payment.id,
    status: payment.status,
    amount: payment.amount,
    currency: payment.currency,
    purpose: payment.purpose,
  });
}
