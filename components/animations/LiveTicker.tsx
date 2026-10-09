const items = [
  "Learn",
  "Analyze",
  "Trade",
  "Grow",
  "₹5,000 enrollment",
  "2-week program",
  "₹10,000 membership",
  "₹15,000 total",
  "Trade with Knowledge",
];

export function LiveTicker() {
  const loop = [...items, ...items];

  return (
    <div className="ticker-fade overflow-hidden border-y border-white/10 bg-ink-2" aria-hidden>
      <div className="ticker-track flex w-max gap-10 py-3.5">
        {loop.map((item, index) => (
          <span key={`${item}-${index}`} className="text-[11px] tracking-[0.22em] text-muted uppercase">
            <span className={item.includes("₹") ? "text-accent" : ""}>{item}</span>
            <span className="ml-8 text-line">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
