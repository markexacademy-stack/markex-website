import { leadStages } from "@/types";

export function adminAuthorized(request: Request) {
  const key = process.env.ADMIN_API_KEY;
  if (!key) return false;
  return request.headers.get("authorization") === `Bearer ${key}`;
}

export const adminModules = [
  "Dashboard",
  "Leads",
  "Counselling",
  "Admissions",
  "Students",
  "Courses",
  "Batches",
  "Payments",
  "Receipts",
  "Documents",
  "Attendance",
  "Community",
  "Signals and market updates",
  "Reports",
  "WhatsApp",
  "Settings",
] as const;

export const adminLeadStages = leadStages;
