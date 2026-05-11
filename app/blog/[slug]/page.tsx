import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { blogPosts, getBlogPost, site } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Artigo não encontrado",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${site.url}/blog/${post.slug}`,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <article className="bg-white">
        <section className="bg-navy text-white">
          <div className="container-site py-14 lg:py-20">
            <Reveal className="flex max-w-4xl flex-col gap-6">
              <Link
                href="/blog"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "h-9 w-fit border-white/20 bg-white/8 text-white hover:bg-white hover:text-navy"
                )}
              >
                <ArrowLeft data-icon="inline-start" />
                Voltar ao blog
              </Link>
              <Badge className="w-fit rounded-md bg-gold text-gold-foreground">
                {post.category}
              </Badge>
              <h1 className="font-serif text-4xl leading-tight font-semibold text-balance sm:text-5xl lg:text-6xl">
                {post.title}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-navy-muted">{post.excerpt}</p>
              <div className="flex flex-wrap gap-3 text-sm text-navy-muted">
                <span>{new Intl.DateTimeFormat("pt-AO", { dateStyle: "long" }).format(new Date(post.date))}</span>
                <span>•</span>
                <span>{post.readTime}</span>
                <span>•</span>
                <span>{post.author}</span>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section-y">
          <div className="container-site max-w-4xl">
            <Reveal>
              <Image
                src={post.image}
                alt={post.title}
                width={1200}
                height={760}
                className="aspect-[16/9] rounded-2xl object-cover premium-shadow"
                priority
              />
            </Reveal>
            <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-7">
              {post.content.map((paragraph) => (
                <Reveal key={paragraph}>
                  <p className="text-lg leading-9 text-foreground">{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
