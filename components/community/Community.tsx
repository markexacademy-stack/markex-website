import { communityFeatures } from "@/data/site";
import { Section, SectionHeading } from "@/components/layout/Section";

export function Community() {
  return (
    <Section id="community">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading index="12" title="You don't have to trade alone." />
          <p className="mt-8 text-5xl font-semibold">150+</p>
          <p className="mt-2 text-xs tracking-[0.2em] text-muted uppercase">Students</p>
          <ul className="mt-8 grid gap-2 sm:grid-cols-2">
            {communityFeatures.map((feature) => (
              <li key={feature} className="panel px-3 py-3 text-sm">
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="panel p-4 md:p-6" aria-hidden>
          <p className="text-[11px] tracking-[0.18em] text-muted uppercase">Illustrative interface</p>
          <div className="mt-4 grid gap-3">
            {["Discussion", "Analysis", "Learning"].map((panel) => (
              <div key={panel} className="border border-line p-4">
                <p className="text-xs tracking-[0.16em] uppercase">{panel}</p>
                <div className="mt-3 h-2 w-3/4 bg-line" />
                <div className="mt-2 h-2 w-1/2 bg-line" />
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs leading-relaxed text-muted">
            An interface concept. Not a capture of the live community.
          </p>
        </div>
      </div>
    </Section>
  );
}
