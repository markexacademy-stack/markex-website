import type { Metadata } from "next";
import { Faq } from "@/components/faq/Faq";
import { FinalCta } from "@/components/layout/FinalCta";
import { PageHero } from "@/components/layout/PageHero";
import { Membership } from "@/components/membership/Membership";
import { PracticalMarket } from "@/components/market/PracticalMarket";
import { ProgramTimeline } from "@/components/program/ProgramTimeline";
import { Psychology } from "@/components/psychology/Psychology";
import { Risk } from "@/components/risk/Risk";
import { JsonLd } from "@/components/seo/JsonLd";
import { courseJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Forex Trading Program",
  description:
    "The MARKEX 2-week intensive forex program covers foundations, practical trading, risk management, psychology and a performance review.",
  alternates: { canonical: "/program" },
};

export default function ProgramPage() {
  return (
    <>
      <JsonLd data={courseJsonLd()} />
      <PageHero
        eyebrow="Program"
        title="2 weeks. One structured trading journey."
        text="An intensive practical learning experience designed to help beginners build a structured understanding of the forex market."
      />
      <section className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-20 md:px-8 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight uppercase">Program overview</h2>
          <p className="mt-4 leading-relaxed text-muted">
            The first payment of ₹5,000 begins the intensive program. Week 01 builds foundations. Week 02 moves into planning, risk, psychology and review. A performance review follows the two weeks.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold tracking-tight uppercase">Who it is for</h2>
          <ul className="mt-4 space-y-3 text-muted">
            <li>Beginners who want a structured start in forex.</li>
            <li>Developing traders who want a clearer process.</li>
            <li>Students preparing for the discipline of third-party funded evaluations.</li>
          </ul>
        </div>
      </section>
      <ProgramTimeline showHeader={false} />
      <PracticalMarket />
      <Risk />
      <Psychology />
      <section className="mx-auto w-full max-w-7xl px-5 py-8 md:px-8">
        <h2 className="text-3xl font-semibold tracking-tight uppercase">Performance review</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-muted">
          After the intensive program, MARKEX reviews the student&apos;s learning and practice. That review is the step before the ₹10,000 advanced membership. It is not a promise of profit or of funded-account approval.
        </p>
      </section>
      <Membership />
      <Faq showHeader={false} />
      <FinalCta />
    </>
  );
}
