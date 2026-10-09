"use client";

import { motion } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { EnrollButton } from "@/components/ui/EnrollButton";
import { MarketChart } from "@/components/charts/MarketChart";
import { useCanAnimate } from "@/hooks/useCanAnimate";
import Link from "next/link";

const fade = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
};

export function Hero() {
  const animate = useCanAnimate();

  return (
    <section id="hero" className="relative flex min-h-[100svh] items-center overflow-hidden pt-24">
      <div className="market-grid pointer-events-none absolute inset-0" />
      <div className="glow-drift pointer-events-none absolute top-[-10%] right-[-10%] h-[520px] w-[520px] bg-[radial-gradient(circle,rgba(27,201,138,0.16),transparent_68%)]" />
      {Array.from({ length: 8 }, (_, index) => (
        <span
          key={index}
          className="float-particle pointer-events-none absolute h-1 w-1 rounded-full bg-accent/70"
          style={{ left: `${12 + index * 10}%`, top: `${18 + (index % 4) * 16}%`, animationDelay: `${index * 0.6}s` }}
        />
      ))}
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-16 md:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div key={animate ? "enter" : "ready"} initial={animate ? "hidden" : false} animate="show" variants={{ show: { transition: { staggerChildren: 0.12 } } }}>
          <motion.div variants={fade} className="mb-8 flex w-full justify-center lg:justify-start">
            <Logo priority className="logo-float" />
          </motion.div>
          <motion.p variants={fade} className="eyebrow">
            Forex trading academy
          </motion.p>
          <motion.h1 variants={fade} className="mt-4 text-5xl leading-[0.92] font-semibold tracking-[-0.05em] uppercase sm:text-6xl lg:text-7xl">
            Master the market.
            <span className="mt-2 block text-accent">Trade with knowledge.</span>
          </motion.h1>
          <motion.p variants={fade} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Build the knowledge, discipline and confidence to approach the forex market with a structured trading system.
          </motion.p>
          <motion.div variants={fade} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <EnrollButton>Start your MARKEX journey</EnrollButton>
            <Link
              href="/#program"
              className="inline-flex min-h-12 items-center justify-center border border-white/15 px-5 text-xs font-semibold tracking-[0.18em] uppercase hover:border-accent"
            >
              Explore the program
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          key={animate ? "chart-enter" : "chart-ready"}
          initial={animate ? { opacity: 0, y: 24 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="chart-drift panel p-4 md:p-6"
        >
          <div className="mb-4 flex items-center justify-between text-[11px] tracking-[0.2em] text-muted uppercase">
            <span>Structure</span>
            <span>Risk / reward</span>
          </div>
          <MarketChart active="all" animate />
          <p className="mt-3 text-[11px] tracking-[0.18em] text-muted uppercase">Illustrative market visualization</p>
        </motion.div>
      </div>
    </section>
  );
}
