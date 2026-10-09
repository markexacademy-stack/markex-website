import type { Metadata } from "next";
import { FinalCta } from "@/components/layout/FinalCta";
import { PageHero } from "@/components/layout/PageHero";
import { stats, values } from "@/data/site";
import { Logo } from "@/components/ui/Logo";

export const metadata: Metadata = {
  title: "About MARKEX",
  description:
    "MARKEX is a forex trading academy focused on knowledge, discipline, practice, risk awareness and continuous learning.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Why MARKEX?"
        text="MARKEX is focused on structured forex trading education."
      />
      <section className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-20 md:px-8 lg:grid-cols-2">
        <div className="max-w-sm">
          <Logo priority className="logo-float" />
        </div>
        <ul className="grid gap-3">
          {values.map((value) => (
            <li key={value} className="border-b border-line py-3 text-xl tracking-tight uppercase">
              {value}
            </li>
          ))}
        </ul>
      </section>
      <section className="border-y border-line">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="border-line px-5 py-8 md:px-8 lg:border-l first:lg:border-l-0">
              <dt className="text-3xl font-semibold">
                {stat.value === null ? stat.text : `${stat.value}${stat.suffix}`}
              </dt>
              <dd className="mt-2 text-xs tracking-[0.16em] text-muted uppercase">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="mx-auto w-full max-w-3xl px-5 py-16 md:px-8">
        <p className="text-lg leading-relaxed text-muted">
          MARKEX is built around a simple principle: traders improve when knowledge becomes practice and practice becomes discipline.
        </p>
      </section>
      <FinalCta />
    </>
  );
}
