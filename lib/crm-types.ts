import type { Lead, PaymentRecord, ReceiptRecord, StudentRecord } from "@/types";

export type CrmStore = {
  leads: Lead[];
  payments: PaymentRecord[];
  students: StudentRecord[];
  receipts: ReceiptRecord[];
};
