import type { Metadata } from "next";
import { Faq } from "@/components/faq/Faq";
import { PageHero } from "@/components/layout/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about MARKEX Trading Academy fees, the two-week program, refunds, support, signals and whether profit is guaranteed.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd()} />
      <PageHero
        eyebrow="FAQ"
        title="Questions, answered plainly."
        text="Enrollment, fees, delivery, refunds, support and risk. Profit and funded-account approval are not guaranteed."
      />
      <Faq showHeader={false} />
    </>
  );
}
