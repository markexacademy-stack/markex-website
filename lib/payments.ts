import { createHmac, timingSafeEqual } from "node:crypto";
import { pricing } from "@/data/site";
import { enrollmentId, receiptId, studentId } from "@/lib/ids";
import { updateStore } from "@/lib/store";
import type { PaymentPurpose, PaymentRecord, ReceiptRecord, StudentRecord } from "@/types";

export const paymentAmounts: Record<PaymentPurpose, number> = {
  initial_enrollment: pricing.initial,
  advanced_membership: pricing.membership,
};

export function gatewayConfigured() {
  return Boolean(process.env.PAYMENT_GATEWAY_KEY && process.env.PAYMENT_GATEWAY_SECRET);
}

export function verifyWebhook(rawBody: string, signature: string | null) {
  const secret = process.env.PAYMENT_WEBHOOK_SECRET;
  if (!secret || !signature) return false;
  const expected = createHmac("sha256", secret).update(rawBody).digest("hex");
  const a = Buffer.from(expected);
  const b = Buffer.from(signature.trim());
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export async function confirmPayment(input: {
  paymentId: string;
  status: "paid" | "failed";
  gatewayTransactionId?: string;
  amount?: number;
}) {
  return updateStore((store) => {
    const payment = store.payments.find((item) => item.id === input.paymentId);
    if (!payment) return { ok: false as const, error: "Payment not found" };
    if (payment.status === "paid") return { ok: true as const, payment, duplicate: true };
    if (input.amount !== undefined && input.amount !== payment.amount) {
      return { ok: false as const, error: "Amount does not match the payment record" };
    }

    const now = new Date().toISOString();
    payment.updatedAt = now;
    payment.status = input.status;
    if (input.gatewayTransactionId) payment.gatewayTransactionId = input.gatewayTransactionId;

    if (input.status !== "paid") return { ok: true as const, payment, duplicate: false };

    payment.paidAt = now;
    const lead = store.leads.find((item) => item.id === payment.leadId);
    const student = applyPaidPayment(store, payment, lead?.fullName ?? "Student", lead?.email ?? "", lead?.phone ?? "", now);
    if (lead) {
      lead.stage = student.status === "FULLY PAID" ? "FULL PAYMENT" : "₹5K PAID";
      lead.updatedAt = now;
    }
    return { ok: true as const, payment, student, duplicate: false };
  });
}

function applyPaidPayment(
  store: {
    students: StudentRecord[];
    receipts: ReceiptRecord[];
    payments: PaymentRecord[];
  },
  payment: PaymentRecord,
  name: string,
  email: string,
  phone: string,
  now: string,
) {
  let student = store.students.find((item) => item.leadId === payment.leadId);
  const previous = student?.paid ?? 0;

  if (!student) {
    student = {
      id: studentId(),
      leadId: payment.leadId,
      enrollmentId: enrollmentId(),
      fullName: name,
      email,
      phone,
      totalFee: pricing.total,
      paid: 0,
      balance: pricing.total,
      status: "ENROLLMENT PAID",
      stage: "₹5K PAID",
      createdAt: now,
      updatedAt: now,
    };
    store.students.push(student);
  }

  payment.studentId = student.id;
  student.paid = Math.min(pricing.total, previous + payment.amount);
  student.balance = Math.max(0, pricing.total - student.paid);
  student.updatedAt = now;
  student.status = student.balance === 0 ? "FULLY PAID" : "ENROLLMENT PAID";
  student.stage = student.status === "FULLY PAID" ? "ADVANCED MEMBER" : "2-WEEK PROGRAM ACTIVE";

  const receipt: ReceiptRecord = {
    id: receiptId(),
    studentId: student.id,
    enrollmentId: student.enrollmentId,
    paymentId: payment.id,
    studentName: student.fullName,
    program: "MARKEX Forex Trading Program",
    totalFee: pricing.total,
    currentPayment: payment.amount,
    previousPayment: previous,
    balance: student.balance,
    paymentMethod: process.env.PAYMENT_GATEWAY_PROVIDER || "Gateway",
    transactionId: payment.gatewayTransactionId || payment.id,
    status: student.status,
    issuedAt: now,
  };
  store.receipts.push(receipt);
  return student;
}
