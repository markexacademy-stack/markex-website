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
            Structured learning builds clarity.
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            MARKEX Trading Academy is built around a simple principle: learners improve when knowledge becomes practice and practice becomes discipline. The academy provides education. It does not guarantee trading profits.
          </p>
        </div>
      </div>
    </Section>
  );
}
