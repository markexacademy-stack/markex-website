import type { Metadata } from "next";
import Link from "next/link";
import { FinalCta } from "@/components/layout/FinalCta";
import { PageHero } from "@/components/layout/PageHero";
import { Logo } from "@/components/ui/Logo";
import { site, values, weeks } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "MARKEX Trading Academy provides structured educational programs on financial markets, technical analysis, risk management and trading discipline.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="MARKEX Trading Academy."
        text="An educational platform focused on helping learners understand financial markets and trading concepts through structured learning programs."
      />
      <section className="mx-auto grid w-full max-w-7xl items-start gap-12 px-5 py-16 md:px-8 lg:grid-cols-2">
        <div className="max-w-sm">
          <Logo priority className="logo-float" />
          <p className="mt-8 text-sm leading-relaxed text-muted">{site.operatorStatement}</p>
        </div>
        <div className="space-y-4 text-muted leading-relaxed">
          <p>
            MARKEX Trading Academy provides structured educational programs covering forex market fundamentals, technical analysis, price action, trading strategies, trading psychology, risk management and trading discipline.
          </p>
          <p>
            The academy offers a two-week intensive educational program and a separately described advanced membership. MARKEX is an educational service. It is not a broker, bank, investment firm, fund manager or licensed financial adviser.
          </p>
          <p>
            Financial markets involve risk. Participation in an educational program does not guarantee profits, trading success or any particular financial outcome.
          </p>
        </div>
      </section>
      <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-semibold tracking-tight uppercase">Who the program is for</h2>
        <ul className="mt-6 grid gap-3 text-muted md:grid-cols-3">
          <li className="border border-line p-5">Beginners who want a structured start in market education.</li>
          <li className="border border-line p-5">Developing learners who want a clearer study and review process.</li>
          <li className="border border-line p-5">Anyone seeking organised education on market concepts and risk awareness.</li>
        </ul>

        <h2 className="mt-14 text-3xl font-semibold tracking-tight uppercase">How students enroll</h2>
        <ol className="mt-6 max-w-3xl list-decimal space-y-3 pl-5 text-muted">
          <li>Submit an enquiry or enrollment form with accurate contact details.</li>
          <li>Complete the initial ₹5,000 payment for the two-week intensive program.</li>
          <li>Receive access and schedule information after the payment is verified.</li>
          <li>After the learning review, decide whether to continue with the ₹10,000 advanced membership.</li>
        </ol>

        <h2 className="mt-14 text-3xl font-semibold tracking-tight uppercase">Intensive program and advanced membership</h2>
        <div className="mt-6 grid gap-8 lg:grid-cols-2">
          <article className="border border-line p-6">
            <h3 className="text-lg uppercase">Two-week intensive · ₹5,000</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Enrollment in the two-week educational program. This payment does not automatically purchase advanced-membership benefits.
            </p>
            <div className="mt-6 grid gap-6">
              {weeks.map((week) => (
                <div key={week.id}>
                  <p className="text-xs tracking-[0.16em] text-accent uppercase">
                    {week.label} · {week.title}
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted">
                    {week.topics.map((topic) => (
                      <li key={topic}>{topic}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
          <article className="border border-line p-6">
            <h3 className="text-lg uppercase">Advanced membership · ₹10,000</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              A separate educational step after the intensive program and learning review. Total advertised program fee: ₹15,000.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted">
              {values.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              Community access and continuing education may be included as described on the pricing page. Profits are not guaranteed.
            </p>
          </article>
        </div>

        <h2 className="mt-14 text-3xl font-semibold tracking-tight uppercase">Customer support</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-muted">
          Contact {site.email} or {site.phoneLabel}. Support and grievance messages are acknowledged {site.supportResponseTarget}.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/program" className="inline-flex min-h-12 items-center justify-center bg-accent px-5 text-xs font-semibold tracking-[0.16em] text-ink uppercase">
            Course details
          </Link>
          <Link href="/pricing" className="inline-flex min-h-12 items-center justify-center border border-line px-5 text-xs tracking-[0.16em] uppercase">
            Pricing
          </Link>
          <Link href="/contact" className="inline-flex min-h-12 items-center justify-center border border-line px-5 text-xs tracking-[0.16em] uppercase">
            Contact Us
          </Link>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
