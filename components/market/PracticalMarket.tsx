"use client";

import { useState } from "react";
import { practiceModes } from "@/data/site";
import { Section, SectionHeading } from "@/components/layout/Section";
import { MarketChart } from "@/components/charts/MarketChart";

const zone: Record<string, string> = {
  analysis: "context",
  study: "structure",
  planning: "setup",
  risk: "risk",
  review: "review",
};

export function PracticalMarket() {
  const [mode, setMode] = useState<(typeof practiceModes)[number]["id"]>("analysis");
  const current = practiceModes.find((item) => item.id === mode) ?? practiceModes[0];

  return (
    <Section id="practice">
      <SectionHeading index="09" title="Learn the market. Don't just watch it." text={current.note} />
      <div className="mt-10 flex gap-2 overflow-x-auto pb-2">
        {practiceModes.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setMode(item.id)}
            className={`min-h-11 shrink-0 border px-4 text-[11px] tracking-[0.16em] uppercase ${mode === item.id ? "border-accent text-accent" : "border-line text-muted"}`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="panel mt-6 p-4 md:p-6">
        <MarketChart active={zone[mode] ?? "structure"} />
        <p className="mt-3 text-[11px] tracking-[0.18em] text-muted uppercase">Illustrative market visualization</p>
      </div>
    </Section>
  );
}
