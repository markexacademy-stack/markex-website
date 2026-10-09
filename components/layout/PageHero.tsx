import { EnrollButton } from "@/components/ui/EnrollButton";

export function PageHero({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <header className="relative overflow-hidden border-b border-line pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="market-grid pointer-events-none absolute inset-0" />
      <div className="glow-drift pointer-events-none absolute top-0 right-0 h-72 w-72 bg-[radial-gradient(circle,rgba(27,201,138,0.14),transparent_70%)]" />
      <div className="relative mx-auto w-full max-w-7xl px-5 md:px-8">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.045em] text-balance uppercase md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{text}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <EnrollButton>Start your MARKEX journey</EnrollButton>
          <EnrollButton intent="mentor" variant="secondary">
            Talk to a mentor
          </EnrollButton>
        </div>
      </div>
    </header>
  );
}
