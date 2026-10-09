import { randomBytes } from "node:crypto";

const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

function token(length = 5) {
  const bytes = randomBytes(length);
  let out = "";
  for (const byte of bytes) out += alphabet[byte % alphabet.length];
  return out;
}

export function leadId() {
  return `MKX-LEAD-${new Date().getFullYear()}-${token()}`;
}

export function studentId() {
  return `MKX-${new Date().getFullYear().toString().slice(-2)}-${token()}`;
}

export function enrollmentId() {
  return `MKX-ENR-${new Date().getFullYear()}-${token()}`;
}

export function receiptId() {
  return `MKX-REC-${new Date().getFullYear()}-${token()}`;
}

export function paymentId() {
  return `MKX-PAY-${new Date().getFullYear()}-${token(8)}`;
}
