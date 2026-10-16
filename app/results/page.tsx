import type { Metadata } from "next";
import Link from "next/link";
import { FinalCta } from "@/components/layout/FinalCta";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Learning Outcomes",
  description:
    "MARKEX Trading Academy focuses on educational outcomes. Trading involves risk. Profits are not guaranteed.",
  alternates: { canonical: "/results" },
};

export default function ResultsPage() {
  return (
    <>
      <PageHero
        eyebrow="Learning"
        title="What students study."
        text="MARKEX Trading Academy sells educational programs. It does not promise profits, income, or investment returns."
      />
      <section className="mx-auto w-full max-w-3xl px-5 py-16 md:px-8">
        <p className="leading-relaxed text-muted">
          Students learn market fundamentals, chart reading, risk awareness, trading psychology and disciplined study habits through the two-week intensive program and, where purchased separately, the advanced membership.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          Financial-market trading involves substantial risk. Past market examples or educational illustrations are not forecasts. MARKEX does not execute trades for students and does not manage customer funds.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/program" className="inline-flex min-h-12 items-center justify-center bg-accent px-5 text-xs font-semibold tracking-[0.16em] text-ink uppercase">
            View program
          </Link>
          <Link href="/pricing" className="inline-flex min-h-12 items-center justify-center border border-line px-5 text-xs tracking-[0.16em] uppercase">
            View pricing
          </Link>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
