"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { results, resultsDisclosure } from "@/data/site";
import { Section, SectionHeading } from "@/components/layout/Section";

export function ResultsGallery({ showHeader = true }: { showHeader?: boolean }) {
  const [index, setIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    if (index === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIndex(null);
      if (event.key === "ArrowRight") setIndex((current) => (current === null ? current : (current + 1) % results.length));
      if (event.key === "ArrowLeft") setIndex((current) => (current === null ? current : (current - 1 + results.length) % results.length));
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [index]);

  const active = index === null ? null : results[index];

  return (
    <Section id="results">
      {showHeader ? (
        <SectionHeading
          index="11"
          title="Real results. Real journeys."
          text="These payout certificates were supplied by MARKEX. Figures, names and dates are shown as printed. They are historical examples."
        />
      ) : null}
      <div className="gallery-scroll mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4">
        {results.map((item, itemIndex) => (
          <button
            key={item.id}
            type="button"
            onClick={() => {
              setZoom(1);
              setIndex(itemIndex);
            }}
            className="panel min-w-[78%] snap-start text-left transition duration-300 hover:-translate-y-1 hover:border-accent/60 sm:min-w-[46%] lg:min-w-[32%]"
          >
            <Image src={item.src} alt={item.alt} width={item.width} height={item.height} className="h-auto w-full" />
            <span className="block px-4 py-4">
              <span className="block text-sm">{item.presentedTo}</span>
              <span className="mt-1 block text-xs tracking-[0.14em] text-muted uppercase">
                {item.resultType} {item.amount} · {item.date}
              </span>
            </span>
          </button>
        ))}
      </div>
      <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted">{resultsDisclosure}</p>

      {active && index !== null ? (
        <div
          className="fixed inset-0 z-[65] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onTouchStart={(event) => {
            const start = event.changedTouches[0]?.clientX ?? 0;
            const target = event.currentTarget;
            target.dataset.swipe = String(start);
          }}
          onTouchEnd={(event) => {
            const start = Number(event.currentTarget.dataset.swipe ?? 0);
            const end = event.changedTouches[0]?.clientX ?? start;
            if (end - start > 40) setIndex((index - 1 + results.length) % results.length);
            if (start - end > 40) setIndex((index + 1) % results.length);
          }}
        >
          <div className="flex max-h-[92svh] w-full max-w-3xl flex-col">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-muted">
                {active.presentedTo} · {active.resultType} {active.amount} · {active.date}
              </p>
              <div className="flex gap-2">
                <button type="button" className="min-h-11 border border-line px-3 text-xs uppercase" onClick={() => setZoom((value) => (value === 1 ? 1.8 : 1))}>
                  {zoom === 1 ? "Zoom" : "Fit"}
                </button>
                <button type="button" className="min-h-11 border border-line px-3 text-xs uppercase" onClick={() => setIndex((index - 1 + results.length) % results.length)}>
                  Previous
                </button>
                <button type="button" className="min-h-11 border border-line px-3 text-xs uppercase" onClick={() => setIndex((index + 1) % results.length)}>
                  Next
                </button>
                <button type="button" className="min-h-11 bg-paper px-3 text-xs text-ink uppercase" onClick={() => setIndex(null)}>
                  Close
                </button>
              </div>
            </div>
            <div className="overflow-auto">
              <Image
                src={active.src}
                alt={active.alt}
                width={active.width}
                height={active.height}
                className="mx-auto h-auto max-w-none"
                style={{ width: `${Math.round(zoom * 100)}%` }}
              />
            </div>
          </div>
        </div>
      ) : null}
    </Section>
  );
}
