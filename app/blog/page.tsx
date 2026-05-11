import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { blogPosts } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Blog e Artigos",
  description:
    "Artigos, notícias, legislação e análises jurídicas sobre consultoria legal, compliance e contratação pública.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  const [featured, ...posts] = blogPosts;

  return (
    <>
      <section className="bg-navy text-white">
        <div className="container-site py-16 lg:py-24">
          <Reveal className="max-w-4xl">
            <h1 className="font-serif text-4xl leading-tight font-semibold text-balance sm:text-5xl lg:text-6xl">
              Análises jurídicas, contratação pública e gestão de risco institucional.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-navy-muted">
              Conteúdo editorial para gestores, equipas administrativas e decisores que precisam de
              clareza sobre processos jurídicos e contratação pública.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_20rem]">
          <div className="flex flex-col gap-8">
            <Reveal>
              <Link
                href={`/blog/${featured.slug}`}
                className="grid overflow-hidden rounded-2xl border bg-background transition hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10 lg:grid-cols-[0.9fr_1.1fr]"
              >
                <Image
                  src={featured.image}
                  alt={featured.title}
                  width={900}
                  height={620}
                  className="h-full min-h-72 object-cover"
                  priority
                />
                <div className="flex flex-col gap-5 p-6 sm:p-8">
                  <Badge className="w-fit rounded-md bg-gold text-gold-foreground">
                    {featured.category}
                  </Badge>
                  <h2 className="font-serif text-3xl leading-tight font-semibold text-navy text-balance">
                    {featured.title}
                  </h2>
                  <p className="text-sm leading-7 text-muted-foreground">{featured.excerpt}</p>
                  <div className="mt-auto flex items-center gap-2 font-ui text-sm font-semibold text-gold">
                    Ler artigo
                    <ArrowRight aria-hidden="true" />
                  </div>
                </div>
              </Link>
            </Reveal>

            <div className="grid gap-5 md:grid-cols-2">
              {posts.map((post, index) => (
                <Reveal key={post.slug} delay={index * 0.05}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="premium-card flex h-full flex-col overflow-hidden rounded-xl"
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={700}
                      height={460}
                      className="aspect-[16/10] object-cover"
                    />
                    <div className="flex flex-1 flex-col gap-4 p-5">
                      <div className="flex items-center justify-between gap-3">
                        <Badge variant="secondary" className="rounded-md">
                          {post.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{post.readTime}</span>
                      </div>
                      <h2 className="font-serif text-2xl leading-snug font-semibold text-navy">
                        {post.title}
                      </h2>
                      <p className="text-sm leading-7 text-muted-foreground">{post.excerpt}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>

          <aside className="flex flex-col gap-6">
            <Reveal>
              <div className="rounded-xl border bg-background p-5">
                <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
                  Pesquisar
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
                    <Input className="pl-10" placeholder="Tema, legislação, artigo..." />
                  </div>
                </label>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="rounded-xl border bg-background p-5">
                <SectionHeading
                  title="Categorias"
                  description="Linhas editoriais principais."
                  className="gap-3"
                />
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Artigos", "Notícias", "Legislação", "Análises jurídicas", "Contratação pública"].map(
                    (category) => (
                      <Badge key={category} variant="secondary" className="rounded-md">
                        {category}
                      </Badge>
                    )
                  )}
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
