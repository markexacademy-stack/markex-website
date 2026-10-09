import { forwardLead } from "@/lib/crm";
import { leadId } from "@/lib/ids";
import { clientKey, rateLimit } from "@/lib/rate-limit";
import { updateStore } from "@/lib/store";
import { cleanText } from "@/lib/utils";
import { leadSchema } from "@/lib/validation";
import type { Lead } from "@/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const limit = rateLimit(clientKey(request, "leads"));
  if (!limit.ok) {
    return Response.json(
      { ok: false, message: "Please wait a few minutes before sending another enquiry." },
      { status: 429, headers: { "retry-after": String(limit.retryAfter) } },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, message: "The enquiry could not be read." }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return Response.json(
      { ok: false, message: "Check the highlighted fields.", fieldErrors },
      { status: 422 },
    );
  }

  if (parsed.data.company) {
    return Response.json({
      ok: true,
      message: "Thank you. A MARKEX representative will contact you shortly.",
    });
  }

  const now = new Date().toISOString();
  const lead: Lead = {
    id: leadId(),
    fullName: cleanText(parsed.data.fullName, 80),
    phone: cleanText(parsed.data.phone, 20),
    whatsapp: cleanText(parsed.data.whatsapp ?? "", 20),
    email: cleanText(parsed.data.email, 120),
    tradingExperience: cleanText(parsed.data.tradingExperience ?? "", 500),
    experienceLevel: parsed.data.experienceLevel,
    interestedProgram: parsed.data.interestedProgram,
    preferredContact: parsed.data.preferredContact,
    message: cleanText(parsed.data.message ?? "", 1000),
    intent: parsed.data.intent ?? "enroll",
    stage: "NEW LEAD",
    createdAt: now,
    updatedAt: now,
  };

  await updateStore((store) => {
    store.leads.push(lead);
  });
  await forwardLead(lead);

  return Response.json({
    ok: true,
    leadId: lead.id,
    message: "Thank you. A MARKEX representative will contact you shortly.",
  });
}
