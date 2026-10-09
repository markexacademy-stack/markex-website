import { disciplineLoop, psychologyLoop } from "@/data/site";
import { Section, SectionHeading } from "@/components/layout/Section";

export function Psychology() {
  return (
    <Section id="psychology">
      <SectionHeading
        index="08"
        title="The biggest trade is often the one between your ears."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <article className="panel p-6 md:p-8">
          <p className="text-xs tracking-[0.2em] text-muted uppercase">Without a process</p>
          <ol className="mt-6 space-y-4">
            {psychologyLoop.map((step, index) => (
              <li key={step} className="flex items-center gap-4 text-2xl font-semibold tracking-tight uppercase md:text-3xl">
                <span className="text-xs text-muted">0{index + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </article>
        <article className="panel border-accent/50 p-6 md:p-8">
          <p className="text-xs tracking-[0.2em] text-accent uppercase">With a process</p>
          <ol className="mt-6 space-y-4">
            {disciplineLoop.map((step, index) => (
              <li key={step} className="flex items-center gap-4 text-2xl font-semibold tracking-tight uppercase md:text-3xl">
                <span className="text-xs text-accent">0{index + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </article>
      </div>
    </Section>
  );
}
