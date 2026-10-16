import { resultsDisclosure } from "@/data/site";
import { Section, SectionHeading } from "@/components/layout/Section";

export function ResultsGallery({ showHeader = true }: { showHeader?: boolean }) {
  return (
    <Section id="results">
      {showHeader ? (
        <SectionHeading
          index="11"
          title="Education first."
          text="MARKEX publishes educational program information, not income claims or trading-profit promises."
        />
      ) : null}
      <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted">{resultsDisclosure}</p>
    </Section>
  );
}
