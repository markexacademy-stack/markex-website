"use client";

import { useEffect, useRef, useState } from "react";
import { problemPoints, structureSteps } from "@/data/site";

const candles = [
  { h: 42, up: false },
  { h: 68, up: true },
  { h: 36, up: false },
  { h: 80, up: true },
  { h: 30, up: true },
  { h: 54, up: false },
  { h: 44, up: true },
  { h: 76, up: true },
  { h: 34, up: false },
  { h: 62, up: true },
  { h: 40, up: false },
  { h: 70, up: true },
  { h: 38, up: true },
  { h: 58, up: false },
];

const chaos = [
  [12, 30],
  [210, 160],
  [70, 200],
  [250, 18],
  [140, 80],
  [30, 140],
  [230, 210],
  [100, 16],
  [180, 120],
  [48, 230],
  [280, 90],
  [160, 190],
  [90, 100],
  [200, 50],
];

const orderY = [190, 160, 172, 128, 140, 108, 118, 78, 96, 52, 70, 28, 46, 22];

export function Problem() {
  const root = useRef<HTMLElement>(null);
  const nodes = useRef<Array<SVGGElement | null>>([]);
  const [phase, setPhase] = useState(0);
  const [staticView, setStaticView] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setPhase((current) => (current + 1) % structureSteps.length);
    }, 1400);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setStaticView(true);
      setPhase(structureSteps.length - 1);
      return;
    }

    let revert: (() => void) | undefined;
    let cancelled = false;

    (async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled || !root.current) return;
      gsap.registerPlugin(ScrollTrigger);
      const context = gsap.context(() => {
        nodes.current.forEach((node, index) => {
          if (!node) return;
          gsap.set(node, { x: chaos[index][0], y: chaos[index][1] });
        });
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6,
            onUpdate: (self) => {
              const next = Math.min(structureSteps.length - 1, Math.floor(self.progress * structureSteps.length));
              setPhase((current) => (current === next ? current : next));
            },
          },
        });
        nodes.current.forEach((node, index) => {
          if (!node) return;
          timeline.to(node, { x: 18 + index * 22, y: orderY[index], duration: 1, ease: "power2.inOut" }, 0);
        });
      }, root);
      revert = () => context.revert();
    })();

    return () => {
      cancelled = true;
      revert?.();
    };
  }, []);

  return (
    <section ref={root} id="problem" className={staticView ? "scroll-mt-24 border-t border-line" : "relative h-[230vh] scroll-mt-24 border-t border-line"}>
      <div className={staticView ? "py-24" : "sticky top-0 flex min-h-[100svh] items-center py-20"}>
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2">
          <div>
            <p className="text-xs tracking-[0.28em] text-accent">03</p>
            <p className="mt-3 text-xs tracking-[0.22em] text-muted uppercase">Market noise to structure</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-balance uppercase md:text-6xl">
              Trading without a system is just guesswork.
            </h2>
            <p className="mt-6 text-muted">Many beginners enter the market without understanding:</p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {problemPoints.map((point) => (
                <li key={point} className="border border-line px-3 py-2 text-sm text-paper">
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="panel p-4 md:p-6">
            <svg viewBox="0 0 360 300" className="h-auto w-full overflow-hidden" role="img" aria-label="Candles moving from disorder into market structure. Illustrative.">
              <line x1="16" x2="344" y1="70" y2="70" stroke={phase > 0 ? "#f5f5f5" : "#202020"} strokeDasharray="3 4" />
              <line x1="16" x2="344" y1="230" y2="230" stroke={phase > 1 ? "#1bc98a" : "#202020"} strokeDasharray="3 4" />
              {candles.map((candle, index) => (
                <g
                  key={index}
                  ref={(node) => {
                    nodes.current[index] = node;
                  }}
                  transform={staticView ? `translate(${18 + index * 22} ${orderY[index]})` : undefined}
                >
                  <line x1="6" x2="6" y1={-8} y2={candle.h + 8} stroke={candle.up ? "#1bc98a" : "#d7d7d7"} />
                  <rect width="12" height={candle.h} fill={candle.up ? "#1bc98a" : "#f5f5f5"} />
                </g>
              ))}
            </svg>
            <ol className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {structureSteps.map((step, index) => (
                <li key={step} className={`process-step text-sm ${index === phase ? "is-on" : index < phase ? "text-accent" : "text-muted"}`}>
                  0{index + 1} {step}
                </li>
              ))}
            </ol>
            <p className="mt-3 text-[11px] tracking-[0.18em] text-muted uppercase">Illustrative market visualization</p>
          </div>
        </div>
      </div>
    </section>
  );
}
