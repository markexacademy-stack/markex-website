import type { LegalDocument } from "@/types";

export function LegalPage({ doc }: { doc: LegalDocument }) {
  return (
    <article className="mx-auto w-full max-w-3xl px-5 pt-32 pb-20 md:px-8">
      <p className="eyebrow">Legal</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight uppercase md:text-5xl">{doc.title}</h1>
      <p className="mt-4 text-sm text-muted">Updated {doc.updated}</p>
      <div className="mt-10 space-y-10">
        {doc.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="border-b border-white/10 pb-3 text-xl font-semibold tracking-tight uppercase">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-3 leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>
    </article>
  );
}
