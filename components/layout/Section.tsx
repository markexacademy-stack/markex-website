import { cn } from "@/lib/utils";

export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative scroll-mt-24 border-t border-line py-24 md:py-32", className)}>
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">{children}</div>
    </section>
  );
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  text,
}: {
  index?: string;
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="max-w-3xl">
      {index ? (
        <div className="flex items-center gap-3">
          <p className="text-[11px] tracking-[0.32em] text-accent">{index}</p>
          <span className="h-px w-12 bg-accent/70" aria-hidden />
        </div>
      ) : null}
      {eyebrow ? <p className="mt-3 text-[11px] tracking-[0.24em] text-muted uppercase">{eyebrow}</p> : null}
      <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-balance uppercase md:text-6xl">
        {title}
      </h2>
      {text ? <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">{text}</p> : null}
    </div>
  );
}
