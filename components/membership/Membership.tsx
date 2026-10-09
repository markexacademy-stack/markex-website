import { membershipFeatures, pricing } from "@/data/site";
import { formatInr } from "@/lib/utils";
import { Section, SectionHeading } from "@/components/layout/Section";

export function Membership() {
  return (
    <Section id="membership">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionHeading
            index="13"
            title="Keep building after the first 2 weeks."
            text="After the initial intensive program, students can continue with MARKEX through the advanced membership."
          />
          <ul className="mt-8 grid gap-2">
            {membershipFeatures.map((feature) => (
              <li key={feature} className="flex items-center gap-3 border-b border-white/10 py-3 text-sm">
                <span className="h-1 w-1 shrink-0 bg-accent" aria-hidden />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <aside className="price-total panel self-start p-8">
          <p className="text-xs tracking-[0.2em] text-accent uppercase">Advanced membership</p>
          <p className="price-figure mt-4 text-5xl font-semibold">{formatInr(pricing.membership)}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Updates or signals, where included, are educational and not guaranteed. Funded-account preparation does not guarantee approval.
          </p>
        </aside>
      </div>
    </Section>
  );
}
