"use client";

import { useEffect, useRef, useState } from "react";
import { frameworkStages } from "@/data/site";
import { Section, SectionHeading } from "@/components/layout/Section";
import { MarketChart } from "@/components/charts/MarketChart";

export function Strategy() {
  const paused = useRef(false);
  const [active, setActive] = useState<(typeof frameworkStages)[number]["id"]>("context");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      if (paused.current) return;
      setActive((current) => {
        const index = frameworkStages.findIndex((stage) => stage.id === current);
        return frameworkStages[(index + 1) % frameworkStages.length].id;
      });
    }, 1800);
    return () => window.clearInterval(id);
  }, []);

  return (
    <Section id="strategy">
      <SectionHeading
        index="06"
        eyebrow="Trading framework"
        title="A strategy is more than an entry."
        text="The sequence below is a way to study a trade. It is not a secret indicator and it is not a claimed win rate."
      />
      <div className="mt-12 grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <ol
          className="grid"
          onMouseEnter={() => {
            paused.current = true;
          }}
          onMouseLeave={() => {
            paused.current = false;
          }}
        >
          {frameworkStages.map((stage, index) => (
            <li key={stage.id}>
              <button
                type="button"
                onMouseEnter={() => setActive(stage.id)}
                onFocus={() => setActive(stage.id)}
                className={`flex w-full items-start gap-4 border-b border-line px-2 py-4 text-left ${active === stage.id ? "text-accent" : "text-paper"}`}
              >
                <span className="w-8 text-xs tracking-[0.16em] text-muted">0{index + 1}</span>
                <span>
                  <span className="block text-sm tracking-[0.16em] uppercase">{stage.label}</span>
                  <span className={`mt-1 block text-sm ${active === stage.id ? "text-paper" : "text-muted"}`}>{stage.note}</span>
                </span>
              </button>
            </li>
          ))}
        </ol>
        <div className="panel p-4 md:p-6">
          <MarketChart active={active} />
          <p className="mt-3 text-[11px] tracking-[0.18em] text-muted uppercase">Illustrative market visualization</p>
        </div>
      </div>
    </Section>
  );
}
