import { Section, SectionHeading } from "@/components/layout/Section";

export function FundedPrep() {
  return (
    <Section id="funded">
      <SectionHeading
        index="14"
        title="Prepare for the next level."
        text="MARKEX helps students develop the discipline, risk-management awareness and evaluation mindset required when preparing for third-party funded trading evaluations."
      />
      <p className="panel mt-8 max-w-3xl p-6 text-lg leading-relaxed md:p-8">
        Preparation for funded-account evaluations, including programs with capital levels of ₹5 lakh and above, subject to student eligibility and the rules of the relevant provider.
      </p>
      <p className="mt-4 max-w-3xl text-sm text-muted">
        MARKEX does not guarantee funding, approval or a specific capital allocation.
      </p>
    </Section>
  );
}
