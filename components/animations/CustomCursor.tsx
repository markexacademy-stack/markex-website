"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);
    document.documentElement.classList.add("has-cursor");

    const move = (event: MouseEvent) => {
      if (!dot.current) return;
      dot.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    };
    const over = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const hot = Boolean(target?.closest("a, button, input, textarea, select, summary"));
      dot.current?.classList.toggle("is-hot", hot);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      document.documentElement.classList.remove("has-cursor");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  if (!enabled) return null;
  return <div ref={dot} className="cursor-dot" aria-hidden />;
}
