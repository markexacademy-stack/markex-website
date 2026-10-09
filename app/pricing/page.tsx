import type { Metadata } from "next";
import Link from "next/link";
import { Faq } from "@/components/faq/Faq";
import { FinalCta } from "@/components/layout/FinalCta";
import { PageHero } from "@/components/layout/PageHero";
import { RiskDisclosure } from "@/components/layout/RiskDisclosure";
import { Pricing } from "@/components/pricing/Pricing";
import { membershipFeatures, weeks } from "@/data/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "MARKEX program fee: ₹5,000 initial enrollment, ₹10,000 advanced membership, ₹15,000 total. No guaranteed returns.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="₹15,000. Two clear steps."
        text="₹5,000 begins the 2-week intensive program. After the performance review, ₹10,000 continues into the advanced membership."
      />
      <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-semibold uppercase">What is included</h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {weeks.map((week) => (
            <article key={week.id}>
              <h3 className="text-lg uppercase">
                {week.label} · {week.title}
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {week.topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <h3 className="mt-10 text-lg uppercase">Advanced membership</h3>
        <ul className="mt-3 grid gap-2 text-sm text-muted md:grid-cols-2">
          {membershipFeatures.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>
      <Pricing showHeader={false} />
      <p className="mx-auto w-full max-w-7xl px-5 text-sm text-muted md:px-8">
        <Link href="/refund-policy" className="underline decoration-line underline-offset-4">
          Refund policy
        </Link>
      </p>
      <RiskDisclosure />
      <Faq showHeader={false} />
      <FinalCta />
    </>
  );
}
