import { riskStatements } from "@/data/site";
import { Section, SectionHeading } from "@/components/layout/Section";

export function RiskDisclosure() {
  return (
    <Section id="disclosure">
      <SectionHeading index="18" title="Risk disclosure" />
      <ul className="mt-8 max-w-3xl space-y-3">
        {riskStatements.map((statement) => (
          <li key={statement} className="text-sm leading-relaxed text-muted">
            {statement}
          </li>
        ))}
      </ul>
    </Section>
  );
}
