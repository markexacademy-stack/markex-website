"use client";

import { motion } from "framer-motion";
import { useCanAnimate } from "@/hooks/useCanAnimate";

const candles = [
  { x: 28, body: 46, wick: 18, y: 168, up: false },
  { x: 58, body: 62, wick: 16, y: 132, up: true },
  { x: 88, body: 38, wick: 20, y: 148, up: false },
  { x: 118, body: 74, wick: 14, y: 96, up: true },
  { x: 148, body: 34, wick: 12, y: 112, up: true },
  { x: 178, body: 52, wick: 18, y: 86, up: false },
  { x: 208, body: 70, wick: 16, y: 48, up: true },
  { x: 238, body: 40, wick: 14, y: 64, up: false },
  { x: 268, body: 78, wick: 12, y: 22, up: true },
  { x: 298, body: 36, wick: 16, y: 40, up: true },
  { x: 328, body: 48, wick: 18, y: 58, up: false },
  { x: 358, body: 64, wick: 14, y: 18, up: true },
];

export function MarketChart({
  active = "structure",
  animate = false,
}: {
  active?: string;
  animate?: boolean;
}) {
  const canAnimate = useCanAnimate();
  const show = (id: string) => active === id || active === "all";

  return (
    <svg key={canAnimate ? "motion" : "still"} viewBox="0 0 420 250" className="h-auto w-full" role="img" aria-label="Illustrative market visualization">
      <rect width="420" height="250" fill="transparent" />
      {Array.from({ length: 6 }, (_, index) => (
        <line key={index} x1="16" x2="404" y1={30 + index * 36} y2={30 + index * 36} stroke="#202020" />
      ))}
      <line x1="24" x2="390" y1="198" y2="36" stroke={show("context") || show("structure") ? "#1bc98a" : "#3a3a3a"} strokeWidth="1.4" />
      <line x1="20" x2="400" y1="78" y2="78" stroke={show("structure") ? "#f5f5f5" : "#2a2a2a"} strokeDasharray="3 4" />
      <line x1="20" x2="400" y1="188" y2="188" stroke={show("structure") || show("stop") ? "#f5f5f5" : "#2a2a2a"} strokeDasharray="3 4" />
      <rect x="250" y="150" width="70" height="48" fill={show("risk") || show("stop") ? "rgba(240,180,180,0.16)" : "transparent"} />
      <rect x="250" y="46" width="70" height="90" fill={show("management") || show("exit") ? "rgba(27,201,138,0.12)" : "transparent"} />
      {candles.map((candle, index) => {
        const highlighted =
          (active === "setup" && index > 7 && index < 11) ||
          (active === "entry" && index === 9) ||
          active === "all" ||
          active === "context" ||
          active === "structure";
        const height = candle.body;
        return (
          <motion.g
            key={candle.x}
            initial={animate && canAnimate ? { opacity: 0, y: 12 } : false}
            animate={{ opacity: highlighted || active === "review" ? 1 : 0.35, y: 0 }}
            transition={{ duration: 0.45, delay: animate && canAnimate ? index * 0.05 : 0 }}
          >
            <line
              x1={candle.x + 6}
              x2={candle.x + 6}
              y1={candle.y - candle.wick}
              y2={candle.y + height + candle.wick}
              stroke={candle.up ? "#1bc98a" : "#d7d7d7"}
            />
            <rect x={candle.x} y={candle.y} width="12" height={height} fill={candle.up ? "#1bc98a" : "#f5f5f5"} />
          </motion.g>
        );
      })}
      <text x="24" y="72" fill="#a0a0a0" fontSize="10" letterSpacing="1.5">
        RESISTANCE
      </text>
      <text x="24" y="206" fill="#a0a0a0" fontSize="10" letterSpacing="1.5">
        SUPPORT
      </text>
    </svg>
  );
}
