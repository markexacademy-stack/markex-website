import Link from "next/link";
import { pricing } from "@/data/site";
import { formatInr } from "@/lib/utils";
import { Section, SectionHeading } from "@/components/layout/Section";
import { EnrollButton } from "@/components/ui/EnrollButton";

export function Pricing({ showHeader = true }: { showHeader?: boolean }) {
  return (
    <Section id="pricing">
      {showHeader ? <SectionHeading index="16" title="Start your MARKEX journey." /> : null}
      <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_auto_1fr]">
        <article className="price-a panel p-6 md:p-8">
          <p className="text-xs tracking-[0.2em] text-accent uppercase">Step 01</p>
          <p className="price-figure mt-4 text-4xl font-semibold md:text-5xl">{formatInr(pricing.initial)}</p>
          <h3 className="mt-2 text-lg uppercase">Initial enrollment</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted">2-week intensive program, followed by a performance review.</p>
        </article>
        <div className="flex items-center justify-center text-2xl text-accent">↓</div>
        <article className="price-b panel p-6 md:p-8">
          <p className="text-xs tracking-[0.2em] text-accent uppercase">Step 02</p>
          <p className="price-figure mt-4 text-4xl font-semibold md:text-5xl">{formatInr(pricing.membership)}</p>
          <h3 className="mt-2 text-lg uppercase">Advanced membership</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Community, continuing education, applicable signals or market updates, and funded-account preparation.
          </p>
        </article>
      </div>
      <div className="price-total panel mt-6 flex flex-col justify-between gap-6 border-accent/40 p-6 md:flex-row md:items-end md:p-8">
        <div>
          <p className="text-xs tracking-[0.2em] text-accent uppercase">Total program fee</p>
          <p className="price-figure mt-2 text-5xl font-semibold md:text-6xl">{formatInr(pricing.total)}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <EnrollButton>Enroll with MARKEX</EnrollButton>
          <EnrollButton intent="mentor" variant="secondary">
            Talk to a mentor
          </EnrollButton>
        </div>
      </div>
      <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted">
        Enrollment assurance may be available subject to the official MARKEX Refund Policy.{" "}
        <Link href="/refund-policy" className="text-paper underline decoration-line underline-offset-4">
          Read the refund policy
        </Link>
        .
      </p>
    </Section>
  );
}
