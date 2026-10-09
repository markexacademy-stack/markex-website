"use client";

import { useState } from "react";
import { faqs } from "@/data/faq";
import { Section, SectionHeading } from "@/components/layout/Section";

export function Faq({ showHeader = true }: { showHeader?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq">
      {showHeader ? <SectionHeading index="17" title="Questions, answered plainly." /> : null}
      <div className="mt-10 border-t border-line">
        {faqs.map((item, index) => {
          const expanded = open === index;
          return (
            <div key={item.question} className="border-b border-line">
              <h3>
                <button
                  type="button"
                  aria-expanded={expanded}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left text-sm tracking-[0.08em] text-paper uppercase transition hover:text-accent md:text-base"
                  onClick={() => setOpen(expanded ? null : index)}
                >
                  {item.question}
                  <span aria-hidden className="text-accent">
                    {expanded ? "–" : "+"}
                  </span>
                </button>
              </h3>
              {expanded ? <p className="max-w-3xl pb-5 text-sm leading-relaxed text-muted md:text-base">{item.answer}</p> : null}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
