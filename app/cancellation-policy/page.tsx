import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { cancellationPolicy } from "@/data/legal";

export const metadata: Metadata = {
  title: "Cancellation Policy",
  description: cancellationPolicy.description,
  alternates: { canonical: "/cancellation-policy" },
};

export default function CancellationPolicyPage() {
  return <LegalPage doc={cancellationPolicy} />;
}
