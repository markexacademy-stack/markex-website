import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { refundPolicy } from "@/data/legal";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: refundPolicy.description,
  alternates: { canonical: "/refund-policy" },
};

export default function RefundPage() {
  return <LegalPage doc={refundPolicy} />;
}
