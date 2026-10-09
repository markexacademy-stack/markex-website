"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/site";
import { useCountUp } from "@/hooks/useCountUp";

export function TrustStrip() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setActive(true);
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="trust" ref={ref} aria-label="MARKEX at a glance" className="border-y border-line bg-ink-2">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-white/10 lg:grid-cols-4 lg:divide-y-0">
        {stats.map((stat) => (
          <Stat key={stat.id} stat={stat} active={active} />
        ))}
      </div>
    </section>
  );
}

function Stat({
  stat,
  active,
}: {
  stat: (typeof stats)[number];
  active: boolean;
}) {
  const count = useCountUp(stat.value ?? 0, active && stat.value !== null);
  const figure = stat.value === null ? stat.text : `${count}${stat.suffix}`;

  return (
    <div className="px-5 py-9 md:px-8 md:py-11">
      <p className="text-3xl font-semibold tracking-tight text-paper md:text-5xl">{figure}</p>
      <p className="mt-3 text-[11px] tracking-[0.2em] text-muted uppercase">{stat.label}</p>
    </div>
  );
}
