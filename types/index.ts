export const experienceLevels = [
  "BEGINNER",
  "SOME EXPERIENCE",
  "EXPERIENCED TRADER",
] as const;

export const contactMethods = ["Phone", "WhatsApp", "Email"] as const;

export const programOptions = [
  "2-Week Intensive Program",
  "Advanced Membership",
  "Full MARKEX Program",
  "Counselling first",
] as const;

export const leadIntents = ["enroll", "mentor", "whatsapp", "contact"] as const;

export const leadStages = [
  "NEW LEAD",
  "CONTACTED",
  "COUNSELLING",
  "INTERESTED",
  "PAYMENT PENDING",
  "₹5K PAID",
  "2-WEEK PROGRAM ACTIVE",
  "PERFORMANCE REVIEW",
  "₹10K PAYMENT PENDING",
  "FULL PAYMENT",
  "ADVANCED MEMBER",
  "COMMUNITY MEMBER",
] as const;

export const paymentPurposes = [
  "initial_enrollment",
  "advanced_membership",
] as const;

export const paymentStatuses = ["pending", "paid", "failed", "cancelled"] as const;

export type ExperienceLevel = (typeof experienceLevels)[number];
export type ContactMethod = (typeof contactMethods)[number];
export type ProgramOption = (typeof programOptions)[number];
export type LeadIntent = (typeof leadIntents)[number];
export type LeadStage = (typeof leadStages)[number];
export type PaymentPurpose = (typeof paymentPurposes)[number];
export type PaymentStatus = (typeof paymentStatuses)[number];

export type Lead = {
  id: string;
  fullName: string;
  phone: string;
  whatsapp: string;
  email: string;
  tradingExperience: string;
  experienceLevel: ExperienceLevel;
  interestedProgram: ProgramOption;
  preferredContact: ContactMethod;
  message: string;
  intent: LeadIntent;
  stage: LeadStage;
  createdAt: string;
  updatedAt: string;
};

export type PaymentRecord = {
  id: string;
  leadId: string;
  studentId?: string;
  purpose: PaymentPurpose;
  amount: number;
  currency: "INR";
  status: PaymentStatus;
  gatewayTransactionId?: string;
  createdAt: string;
  updatedAt: string;
  paidAt?: string;
};

export type StudentRecord = {
  id: string;
  leadId: string;
  enrollmentId: string;
  fullName: string;
  email: string;
  phone: string;
  totalFee: number;
  paid: number;
  balance: number;
  status: "ENROLLMENT PAID" | "FULLY PAID";
  stage: LeadStage;
  createdAt: string;
  updatedAt: string;
};

export type ReceiptRecord = {
  id: string;
  studentId: string;
  enrollmentId: string;
  paymentId: string;
  studentName: string;
  program: string;
  totalFee: number;
  currentPayment: number;
  previousPayment: number;
  balance: number;
  paymentMethod: string;
  transactionId: string;
  status: "ENROLLMENT PAID" | "FULLY PAID";
  issuedAt: string;
};

export type Testimonial = {
  id: string;
  name: string;
  quote: string;
  context?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  category: string;
  content: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type LegalDocument = {
  title: string;
  description: string;
  updated: string;
  sections: { heading: string; paragraphs: string[] }[];
};
