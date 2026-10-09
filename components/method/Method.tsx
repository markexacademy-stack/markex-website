import { BookOpen, LineChart, ScanSearch, TrendingUp } from "lucide-react";
import { methodPillars } from "@/data/site";
import { Section, SectionHeading } from "@/components/layout/Section";

const icons = [BookOpen, ScanSearch, LineChart, TrendingUp];

export function Method() {
  return (
    <Section id="method">
      <SectionHeading
        index="04"
        eyebrow="Learn. Analyze. Trade. Grow."
        title="The MARKEX method"
        text="A structured approach to building better trading habits."
      />
      <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {methodPillars.map((pillar, index) => {
          const Icon = icons[index] ?? BookOpen;
          return (
            <article
              key={pillar.title}
              tabIndex={0}
              className="auto-card panel group p-6 transition duration-500 hover:-translate-y-1 hover:border-accent/80 hover:shadow-[0_0_40px_rgba(27,201,138,0.12)] focus-within:-translate-y-1 focus-within:border-accent/80 md:p-7"
              style={{ animationDelay: `${index * 1.6}s` }}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs tracking-[0.22em] text-muted">{pillar.index}</span>
                <Icon className="h-5 w-5 text-muted transition duration-500 group-hover:-translate-y-0.5 group-hover:text-accent" aria-hidden />
              </div>
              <h3 className="mt-8 text-2xl font-semibold tracking-tight uppercase">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-paper">{pillar.summary}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted md:max-h-0 md:overflow-hidden md:opacity-0 md:transition-all md:duration-500 md:group-hover:max-h-24 md:group-hover:opacity-100 md:group-focus-within:max-h-24 md:group-focus-within:opacity-100">
                {pillar.detail}
              </p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
