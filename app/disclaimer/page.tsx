import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { disclaimer } from "@/data/legal";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: disclaimer.description,
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return <LegalPage doc={disclaimer} />;
}
