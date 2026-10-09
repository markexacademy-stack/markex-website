"use client";

import { useEffect, useState } from "react";
import { signatureBeats } from "@/data/site";
import { Logo } from "@/components/ui/Logo";
import { EnrollButton } from "@/components/ui/EnrollButton";
import { MarketChart } from "@/components/charts/MarketChart";
import { useCanAnimate } from "@/hooks/useCanAnimate";

export function FinalCta() {
  const animate = useCanAnimate();
  const [step, setStep] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setStep(signatureBeats.length - 1);
      return;
    }
    const timer = window.setInterval(() => {
      setStep((current) => (current + 1) % signatureBeats.length);
    }, 900);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="cta" className="relative overflow-hidden border-t border-line py-24 md:py-32">
      {animate ? (
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <MarketChart active="structure" />
        </div>
      ) : null}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
      <div className="relative mx-auto w-full max-w-7xl px-5 md:px-8">
        <Logo className="logo-float" />
        <p className="mt-8 text-xs tracking-[0.28em] text-accent">19</p>
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
          {signatureBeats.map((beat, index) => (
            <span key={beat} className={index === step ? "text-sm text-accent" : "text-sm text-muted"}>
              {beat}
            </span>
          ))}
        </div>
        <h2 className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.045em] uppercase md:text-6xl">
          Your trading journey starts with knowledge.
        </h2>
        <p className="mt-6 max-w-xl text-lg text-muted">
          Build the foundation. Develop the discipline. Learn to approach the market with a system.
        </p>
        <p className="mt-4 text-sm tracking-[0.2em] text-paper uppercase">Trade with knowledge.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <EnrollButton>Start your MARKEX journey</EnrollButton>
          <EnrollButton intent="mentor" variant="secondary">
            Talk to a mentor
          </EnrollButton>
        </div>
      </div>
    </section>
  );
}
