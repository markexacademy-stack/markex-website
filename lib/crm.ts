import { leadStages, type Lead, type LeadStage } from "@/types";

export { leadStages };

export const stageOrder: LeadStage[] = [...leadStages];

export async function forwardLead(lead: Lead) {
  const url = process.env.CRM_WEBHOOK_URL;
  if (!url) return { forwarded: false as const, reason: "not_configured" as const };
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${process.env.CRM_WEBHOOK_SECRET ?? ""}`,
      },
      body: JSON.stringify({ source: "markex-website", lead }),
    });
    return { forwarded: response.ok, reason: response.ok ? ("ok" as const) : ("rejected" as const) };
  } catch {
    return { forwarded: false as const, reason: "unreachable" as const };
  }
}
