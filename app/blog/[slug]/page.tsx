import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/data/blog";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Insight" };
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
    },
  };
}

export default async function BlogArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto w-full max-w-3xl px-5 pt-32 pb-20 md:px-8">
      <p className="text-xs tracking-[0.16em] text-muted uppercase">
        {post.category} · {post.author} · {post.date}
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">{post.title}</h1>
      <p className="mt-4 text-lg text-muted">{post.description}</p>
      <div className="mt-10 space-y-5">
        {post.content.map((paragraph) => (
          <p key={paragraph} className="leading-relaxed text-paper/90">
            {paragraph}
          </p>
        ))}
      </div>
      <p className="mt-10 border border-line p-4 text-sm leading-relaxed text-muted">
        Educational content does not constitute personalized investment advice. MARKEX does not guarantee profits, returns or trading outcomes.
      </p>
      <Link href="/blog" className="mt-8 inline-flex text-sm text-accent">
        All insights
      </Link>
    </article>
  );
}
