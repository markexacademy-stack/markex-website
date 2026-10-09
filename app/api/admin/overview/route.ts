import { adminAuthorized } from "@/lib/admin";
import { updateStore } from "@/lib/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  if (!process.env.ADMIN_API_KEY) {
    return Response.json({ ok: false, message: "Admin API is not configured." }, { status: 503 });
  }
  if (!adminAuthorized(request)) {
    return Response.json({ ok: false, message: "Unauthorized." }, { status: 401 });
  }

  const overview = await updateStore((store) => ({
    leads: store.leads,
    payments: store.payments,
    students: store.students,
    receipts: store.receipts,
  }));

  return Response.json({ ok: true, ...overview });
}
