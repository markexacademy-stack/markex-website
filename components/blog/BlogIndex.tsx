"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { blogCategories, posts } from "@/data/blog";

export function BlogIndex() {
  const [category, setCategory] = useState("All");
  const visible = useMemo(
    () => (category === "All" ? posts : posts.filter((post) => post.category === category)),
    [category],
  );

  return (
    <section className="mx-auto w-full max-w-7xl px-5 pt-32 pb-20 md:px-8">
      <p className="eyebrow">MARKEX market insights</p>
      <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight uppercase md:text-6xl">Education, not predictions.</h1>
      <p className="mt-5 max-w-2xl text-lg text-muted">
        Notes on forex foundations, structure, risk and review. Nothing here is a market call or personal financial advice.
      </p>
      <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
        {["All", ...blogCategories].map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className={`min-h-11 shrink-0 border px-3 text-[11px] tracking-[0.14em] uppercase ${category === item ? "border-accent text-accent" : "border-line text-muted"}`}
          >
            {item}
          </button>
        ))}
      </div>
      {visible.length === 0 ? (
        <p className="mt-12 border border-line p-6 text-muted">No notes in this category yet.</p>
      ) : (
        <ul className="mt-10 grid gap-4">
          {visible.map((post) => (
            <li key={post.slug} className="border border-line p-6">
              <p className="text-xs tracking-[0.16em] text-muted uppercase">
                {post.category} · {post.date}
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                <Link href={`/blog/${post.slug}`} className="hover:text-accent">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{post.description}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
