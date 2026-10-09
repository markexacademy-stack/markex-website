export type WhatsAppEvent =
  | "payment_confirmation"
  | "admission_confirmation"
  | "session_reminder"
  | "follow_up_reminder"
  | "payment_reminder"
  | "community_onboarding"
  | "course_completion";

export function whatsappApiConfigured() {
  return Boolean(process.env.WHATSAPP_TOKEN && process.env.WHATSAPP_PHONE_NUMBER_ID);
}

/**
 * Future WhatsApp Business API hook.
 * Credentials stay on the server. No message is sent until a template name is configured.
 */
export async function queueWhatsAppEvent(event: WhatsAppEvent, to: string) {
  if (!whatsappApiConfigured()) {
    return { queued: false as const, reason: "not_configured" as const };
  }
  if (!process.env.WHATSAPP_TEMPLATE_NAME) {
    return { queued: false as const, reason: "template_not_configured" as const, event, to };
  }
  return { queued: false as const, reason: "sender_not_enabled" as const, event };
}
