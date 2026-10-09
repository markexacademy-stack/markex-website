import { riskTopics } from "@/data/site";
import { Section, SectionHeading } from "@/components/layout/Section";

export function Risk() {
  return (
    <Section id="risk">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            index="07"
            title="Survive first. Scale with discipline."
            text="Trading is not only about identifying opportunities. It is also about understanding risk when a trade does not work."
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {riskTopics.map((topic) => (
              <li key={topic} className="panel px-4 py-3 text-sm">
                {topic}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">This is education, not personalized financial advice.</p>
        </div>
        <div className="panel p-6 md:p-8">
          <p className="text-[11px] tracking-[0.2em] text-muted uppercase">Illustrative risk / reward</p>
          <div className="mt-8 grid grid-cols-[80px_1fr] items-center gap-4">
            <span className="text-xs tracking-[0.16em] text-muted uppercase">Risk</span>
            <div className="h-10 bg-[#3a2424]" style={{ width: "34%" }} />
            <span className="text-xs tracking-[0.16em] text-accent uppercase">Reward</span>
            <div className="h-10 bg-accent/80" style={{ width: "68%" }} />
          </div>
          <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted">
            A plan can compare what is at risk with what the idea aims for. The comparison does not mean the reward will be reached.
          </p>
        </div>
      </div>
    </Section>
  );
}
