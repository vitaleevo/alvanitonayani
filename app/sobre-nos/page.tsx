import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { site, values } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Sobre nós",
  description:
    "Conheça a missão, visão, valores e filosofia institucional da Alvanito Nayani.",
  alternates: {
    canonical: "/sobre-nos",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="container-site grid items-center gap-12 py-16 lg:grid-cols-[1fr_0.9fr] lg:py-24">
          <Reveal className="flex flex-col gap-7">
            <h1 className="font-serif text-4xl leading-tight font-semibold text-balance sm:text-5xl lg:text-6xl">
              Uma consultoria jurídica construída sobre confiança, método e compromisso.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-navy-muted">
              A Alvanito Nayani posiciona-se como parceira estratégica de instituições e
              empresas que exigem segurança jurídica, qualidade documental e acompanhamento
              profissional em matérias sensíveis.
            </p>
            <Link
              href="/contacto"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 w-fit bg-gold px-5 text-gold-foreground hover:bg-gold/90"
              )}
            >
              Solicitar reunião institucional
              <ArrowRight data-icon="inline-end" />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-white/8 p-3 premium-shadow">
              <Image
                src="/images/reuniao-consultoria-legal.jpg"
                alt="Consultoria jurídica em ambiente corporativo"
                width={900}
                height={1180}
                className="aspect-[4/5] rounded-xl object-cover"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <SectionHeading
              title="História e filosofia institucional"
              description="A atuação nasce da necessidade de oferecer orientação jurídica tecnicamente robusta, mas compreensível para decisores que precisam agir com rapidez e segurança."
            />
          </Reveal>
          <Reveal delay={0.08} className="flex flex-col gap-6 text-base leading-8 text-muted-foreground">
            <p>
              A empresa trabalha com uma abordagem consultiva, organizada e preventiva. Cada
              projeto começa pela compreensão do contexto institucional, dos riscos envolvidos e
              dos documentos que sustentam a decisão do cliente.
            </p>
            <p>
              O compromisso é entregar soluções jurídicas com clareza, sigilo, fundamentação e
              aplicabilidade prática, especialmente em contratação pública, contratos, compliance
              e assessoria administrativa.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Atuação orientada a resultados",
                "Comunicação executiva e objetiva",
                "Rastreabilidade documental",
                "Confidencialidade profissional",
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-xl bg-mist p-4 text-foreground">
                  <CheckCircle2 className="mt-0.5 text-gold" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-mist">
        <div className="container-site grid gap-5 lg:grid-cols-3">
          <Reveal>
            <Card className="premium-card h-full rounded-xl bg-white">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-navy">Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-7 text-muted-foreground">
                  Prestar serviços jurídicos e de contratação pública com excelência, ética e
                  compromisso, oferecendo soluções estratégicas que garantam segurança e eficiência
                  aos nossos clientes.
                </p>
              </CardContent>
            </Card>
          </Reveal>
          <Reveal delay={0.05}>
            <Card className="premium-card h-full rounded-xl bg-white">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-navy">Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-7 text-muted-foreground">
                  Ser referência nacional em consultoria jurídica e contratação pública, reconhecida
                  pela qualidade técnica, integridade e inovação.
                </p>
              </CardContent>
            </Card>
          </Reveal>
          <Reveal delay={0.1}>
            <Card className="h-full rounded-xl bg-navy text-white">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-white">
                  Compromisso institucional
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-7 text-navy-muted">
                  Atuar com prudência, disciplina técnica e proximidade, protegendo cada relação
                  jurídica como um ativo estratégico do cliente.
                </p>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-site flex flex-col gap-12">
          <Reveal>
            <SectionHeading
              align="center"
              title="Valores que sustentam a nossa atuação."
              description="Princípios simples, mas indispensáveis para relações jurídicas de alto padrão."
            />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <Reveal key={value.title} delay={index * 0.04}>
                  <div className="premium-card flex h-full flex-col gap-4 rounded-xl p-6">
                    <div className="premium-icon flex size-12 items-center justify-center rounded-xl bg-gold/12 text-gold ring-1 ring-gold/20">
                      <Icon aria-hidden="true" />
                    </div>
                    <h2 className="font-serif text-2xl font-semibold text-navy">{value.title}</h2>
                    <p className="text-sm leading-7 text-muted-foreground">{value.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 text-white">
        <div className="container-site flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl font-semibold text-balance sm:text-4xl">
              Uma relação jurídica segura começa com diagnóstico correto.
            </h2>
            <p className="mt-4 text-base leading-8 text-navy-muted">
              Marque uma conversa com a equipa e organize os próximos passos do seu processo.
            </p>
          </div>
          <Link
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 bg-gold px-5 text-gold-foreground hover:bg-gold/90"
            )}
          >
            Falar no WhatsApp
          </Link>
        </div>
      </section>
    </>
  );
}
