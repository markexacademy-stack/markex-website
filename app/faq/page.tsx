import type { Metadata } from "next";
import { Faq } from "@/components/faq/Faq";
import { PageHero } from "@/components/layout/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about the MARKEX forex program, fees, signals, funded-account preparation and whether profit is guaranteed.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd()} />
      <PageHero
        eyebrow="FAQ"
        title="Questions, answered plainly."
        text="Fees, the two-week program, signals and funded-account preparation. Profit is not guaranteed."
      />
      <Faq showHeader={false} />
    </>
  );
}
