import { z } from "zod";
import { contactMethods, experienceLevels, leadIntents, paymentPurposes, programOptions } from "@/types";

export const leadSchema = z
  .object({
    fullName: z.string().trim().min(2, "Enter your full name").max(80),
    phone: z.string().trim().min(8, "Enter a valid phone number").max(20),
    whatsapp: z.string().trim().max(20).optional().or(z.literal("")),
    email: z.string().trim().min(5).max(120).email("Enter a valid email"),
    tradingExperience: z.string().trim().max(500).optional().or(z.literal("")),
    experienceLevel: z.enum(experienceLevels, "Select your experience level"),
    interestedProgram: z.enum(programOptions, "Select a program"),
    preferredContact: z.enum(contactMethods, "Select a contact method"),
    message: z.string().trim().max(1000).optional().or(z.literal("")),
    intent: z.enum(leadIntents).optional(),
    company: z.string().max(200).optional().or(z.literal("")),
  })
  .superRefine((data, ctx) => {
    if (data.phone.replace(/\D/g, "").length < 8) {
      ctx.addIssue({ code: "custom", path: ["phone"], message: "Enter a valid phone number" });
    }
    if (data.preferredContact === "WhatsApp" && !(data.whatsapp ?? "").replace(/\D/g, "")) {
      ctx.addIssue({
        code: "custom",
        path: ["whatsapp"],
        message: "Enter a WhatsApp number",
      });
    }
  });

export const paymentCreateSchema = z.object({
  leadId: z.string().trim().min(8).max(40),
  purpose: z.enum(paymentPurposes),
});

export type LeadInput = z.infer<typeof leadSchema>;
