import type { Metadata } from "next";
import { FinalCta } from "@/components/layout/FinalCta";
import { PageHero } from "@/components/layout/PageHero";
import { ResultsGallery } from "@/components/results/ResultsGallery";

export const metadata: Metadata = {
  title: "Results",
  description:
    "Payout certificates supplied by MARKEX. Historical examples only. Trading involves substantial risk and results vary.",
  alternates: { canonical: "/results" },
};

export default function ResultsPage() {
  return (
    <>
      <PageHero
        eyebrow="Results"
        title="Proof of the journey."
        text="The certificates below were supplied by MARKEX. Names, amounts and dates are the ones printed on each document. They are historical examples, not a forecast."
      />
      <ResultsGallery showHeader={false} />
      <FinalCta />
    </>
  );
}
