import { Logo } from "@/components/ui/Logo";
import { Section } from "@/components/layout/Section";

export function Experience() {
  return (
    <Section id="about">
      <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="panel max-w-sm p-6">
          <Logo className="logo-float" />
        </div>
        <div>
          <p className="text-xs tracking-[0.28em] text-accent">10</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] uppercase md:text-6xl">
            Experience builds perspective.
          </h2>
          <p className="mt-8 text-5xl font-semibold tracking-tight">6+</p>
          <p className="mt-2 text-xs tracking-[0.2em] text-muted uppercase">Years of experience</p>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            MARKEX is built around a simple principle: traders improve when knowledge becomes practice and practice becomes discipline.
          </p>
        </div>
      </div>
    </Section>
  );
}
