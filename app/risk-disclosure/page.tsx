import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { riskDisclosure } from "@/data/legal";

export const metadata: Metadata = {
  title: "Risk Disclosure",
  description: riskDisclosure.description,
  alternates: { canonical: "/risk-disclosure" },
};

export default function RiskPage() {
  return <LegalPage doc={riskDisclosure} />;
}
