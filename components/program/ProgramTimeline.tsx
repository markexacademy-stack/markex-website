"use client";

import { useEffect, useRef, useState } from "react";
import { weeks } from "@/data/site";
import { SectionHeading } from "@/components/layout/Section";

const days = Array.from({ length: 14 }, (_, index) => index + 1);

export function ProgramTimeline({ showHeader = true }: { showHeader?: boolean }) {
  const scroller = useRef<HTMLDivElement>(null);
  const paused = useRef(false);
  const auto = useRef(false);
  const resume = useRef<number | null>(null);
  const shownWeek = useRef(1);
  const [day, setDay] = useState(1);
  const week = day <= 7 ? weeks[0] : weeks[1];

  function hold() {
    paused.current = true;
    if (resume.current) window.clearTimeout(resume.current);
    resume.current = window.setTimeout(() => {
      paused.current = false;
    }, 6000);
  }

  function onScroll() {
    if (auto.current) return;
    const node = scroller.current;
    if (!node) return;
    hold();
    const progress = node.scrollLeft / Math.max(1, node.scrollWidth - node.clientWidth);
    setDay(Math.min(14, Math.max(1, Math.round(progress * 13) + 1)));
  }

  function focusDay(next: number) {
    hold();
    setDay(next);
    const node = scroller.current;
    if (!node) return;
    const target = next <= 7 ? 0 : node.scrollWidth;
    node.scrollTo({ left: target, behavior: "smooth" });
  }

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      if (paused.current) return;
      setDay((current) => (current % 14) + 1);
    }, 2200);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const nextWeek = day <= 7 ? 1 : 2;
    const node = scroller.current;
    if (!node || paused.current || shownWeek.current === nextWeek) {
      shownWeek.current = nextWeek;
      return;
    }
    shownWeek.current = nextWeek;
    auto.current = true;
    node.scrollTo({ left: nextWeek === 1 ? 0 : node.scrollWidth, behavior: "smooth" });
    const release = window.setTimeout(() => {
      auto.current = false;
    }, 1600);
    return () => window.clearTimeout(release);
  }, [day]);

  return (
    <section id="program" className="scroll-mt-24 border-t border-line py-24 md:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        {showHeader ? (
          <SectionHeading
            index="05"
            title="2 weeks. One structured trading journey."
            text="An intensive practical learning experience designed to help beginners build a structured understanding of the forex market."
          />
        ) : (
          <h2 className="text-3xl font-semibold tracking-tight uppercase md:text-4xl">Curriculum</h2>
        )}
        <p className="mt-8 text-sm tracking-[0.18em] text-accent uppercase">
          Day {String(day).padStart(2, "0")} of 14 · {week.label} · {week.title}
        </p>
        <div
          ref={scroller}
          onScroll={onScroll}
          className="gallery-scroll mt-6 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4"
        >
          {weeks.map((item) => (
            <article
              key={item.id}
              className={`panel min-w-[86%] snap-start p-6 md:min-w-[70%] md:p-8 lg:min-w-[48%] ${
                (day <= 7 && item.id === "week-1") || (day > 7 && item.id === "week-2")
                  ? "border-accent shadow-[0_0_28px_rgba(27,201,138,0.16)]"
                  : ""
              }`}
            >
              <p className="text-xs tracking-[0.22em] text-muted uppercase">{item.label}</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight uppercase">{item.title}</h3>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {item.topics.map((topic) => (
                  <li key={topic} className="border-b border-line py-2 text-sm text-paper">
                    {topic}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-4 flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Program days">
          {days.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={item === day}
              onClick={() => focusDay(item)}
              className={`min-h-11 min-w-14 border px-2 text-xs tracking-[0.14em] ${item === day ? "day-hot border-accent text-accent" : "border-line text-muted"}`}
            >
              {String(item).padStart(2, "0")}
            </button>
          ))}
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
          Days are progress markers inside the week module. MARKEX has not published a separate lesson title for each day, so the timeline stays at module level.
        </p>
      </div>
    </section>
  );
}
