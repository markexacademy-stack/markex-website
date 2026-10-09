"use client";

import { useEffect, useRef, useState } from "react";
import { journeySteps } from "@/data/site";
import { Section, SectionHeading } from "@/components/layout/Section";

export function Journey() {
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);
  const pauseUntil = useRef(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      if (Date.now() < pauseUntil.current) return;
      setActive((current) => (current + 1) % journeySteps.length);
    }, 1600);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const nodes = itemRefs.current.filter((node): node is HTMLLIElement => Boolean(node));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const index = nodes.indexOf(visible[0]?.target as HTMLLIElement);
        if (index >= 0) {
          pauseUntil.current = Date.now() + 4000;
          setActive(index);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0.4 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <Section id="journey">
      <SectionHeading index="15" title="The student journey" text="From the first enquiry to continued education." />
      <ol className="mt-12 border-l border-line">
        {journeySteps.map((step, index) => (
          <li
            key={step}
            ref={(node) => {
              itemRefs.current[index] = node;
            }}
            className="relative py-5 pl-8"
          >
            <span className={`absolute top-7 -left-[5px] h-2.5 w-2.5 rounded-full ${index === active ? "bg-accent shadow-[0_0_14px_#1bc98a]" : "bg-line"}`} />
            <p className={`text-xl font-semibold tracking-tight uppercase md:text-3xl ${index === active ? "text-accent" : "text-paper"}`}>
              {step.split(/(₹[\d,]+)/).map((part, partIndex) =>
                part.startsWith("₹") ? (
                  <span key={partIndex} className="price-figure">
                    {part}
                  </span>
                ) : (
                  <span key={partIndex}>{part}</span>
                ),
              )}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
