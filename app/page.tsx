import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  MessageCircle,
  Quote,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import {
  differentiators,
  partners,
  services,
  site,
  stats,
  testimonials,
} from "@/lib/site-data";
import { cn } from "@/lib/utils";

export default function Home() {
  const repeatedPartners = [...partners, ...partners];

  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy text-white">
        <Image
          src="/images/hero-consultoria-juridica.jpg"
          alt="Consultores jurídicos em reunião empresarial"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-[0.36]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,31,58,0.98)_0%,rgba(11,31,58,0.84)_48%,rgba(11,31,58,0.5)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy to-transparent" />
        <div className="container-site relative grid min-h-[calc(100svh-80px)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <Reveal className="flex max-w-3xl flex-col gap-8">
            <h1 className="font-serif text-4xl leading-[1.05] font-semibold text-balance sm:text-5xl lg:text-7xl">
              Excelência Jurídica e Soluções Estratégicas para Instituições e Empresas.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-navy-muted sm:text-xl">
              Especialistas em consultoria jurídica, contratação pública e assessoria empresarial
              de alto nível, com rigor técnico, confidencialidade e visão estratégica.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contacto"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 bg-gold px-5 text-gold-foreground hover:bg-gold/90"
                )}
              >
                Solicitar Consultoria
                <ArrowRight data-icon="inline-end" />
              </Link>
              <Link
                href="/contacto"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 border-white/20 bg-white/8 px-5 text-white hover:bg-white hover:text-navy"
                )}
              >
                <CalendarCheck data-icon="inline-start" />
                Agendar Reunião
              </Link>
              <Link
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "lg" }),
                  "h-12 px-5 text-white hover:bg-white/10"
                )}
              >
                <MessageCircle data-icon="inline-start" />
                Falar no WhatsApp
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="hidden lg:block">
            <div className="premium-shadow relative ml-auto max-w-md overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
              <Image
                src="/images/assinatura-documentos-juridicos.jpg"
                alt="Assinatura de documentos jurídicos"
                width={900}
                height={620}
                className="aspect-[4/3] rounded-xl object-cover"
              />
              <div className="mt-4 grid grid-cols-2 gap-3">
                {stats.slice(0, 2).map((item) => (
                  <div key={item.label} className="rounded-xl bg-white/10 p-4">
                    <strong className="font-serif text-3xl text-gold">{item.value}</strong>
                    <p className="mt-1 text-xs leading-5 text-navy-muted">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b bg-white">
        <div className="container-site grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <Reveal key={item.label}>
              <div className="flex flex-col gap-2 border-l border-gold/40 pl-5">
                <strong className="font-serif text-3xl font-semibold text-navy">{item.value}</strong>
                <span className="text-sm leading-6 text-muted-foreground">{item.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-y bg-background">
        <div className="container-site grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl bg-white p-3 premium-shadow">
              <Image
                src="/images/reuniao-consultoria-legal.jpg"
                alt="Reunião de consultoria legal em escritório moderno"
                width={900}
                height={1180}
                className="aspect-[4/5] rounded-xl object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.08} className="flex flex-col gap-8">
            <SectionHeading
              title="Consultoria jurídica com método, discrição e visão empresarial."
              description="A Alvanito Nayani atua ao lado de instituições, empresas e gestores que precisam de segurança jurídica para contratar, concorrer, negociar e decidir com confiança."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Experiência aplicada a processos sensíveis",
                "Pareceres claros para decisões executivas",
                "Gestão documental e contratual rigorosa",
                "Acompanhamento completo em contratação pública",
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-xl bg-white p-4 ring-1 ring-border">
                  <CheckCircle2 className="mt-0.5 text-gold" aria-hidden="true" />
                  <span className="text-sm leading-6 text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <Link
              href="/sobre-nos"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-11 w-fit")}
            >
              Conhecer a empresa
              <ArrowRight data-icon="inline-end" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-site flex flex-col gap-12">
          <Reveal>
            <SectionHeading
              align="center"
              title="Áreas de atuação para relações jurídicas mais seguras."
              description="Serviços desenhados para reduzir riscos, organizar processos e fortalecer decisões institucionais."
            />
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Reveal key={service.title} delay={index * 0.03}>
                  <Card className="premium-card h-full rounded-xl bg-white">
                    <CardHeader>
                      <div className="premium-icon mb-3 flex size-12 items-center justify-center rounded-xl bg-gold/12 text-gold ring-1 ring-gold/20">
                        <Icon aria-hidden="true" />
                      </div>
                      <CardTitle className="text-lg text-navy">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-5">
                      <p className="text-sm leading-7 text-muted-foreground">{service.description}</p>
                      <Link href="/servicos" className="font-ui text-sm font-semibold text-gold hover:text-navy">
                        Ver detalhes
                      </Link>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-y bg-mist">
        <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              title="Diferenciais que protegem o cliente antes, durante e depois da decisão."
              description="A atuação combina ética, rigor jurídico, leitura estratégica e acompanhamento próximo para cada etapa."
            />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {differentiators.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.05}>
                  <div className="premium-card flex h-full flex-col gap-4 rounded-xl p-6">
                    <div className="premium-icon flex size-12 items-center justify-center rounded-xl bg-gold/12 text-gold ring-1 ring-gold/20">
                      <Icon aria-hidden="true" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-navy">{item.title}</h3>
                    <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-y bg-navy text-white">
        <div className="container-site flex flex-col gap-12">
          <Reveal>
            <SectionHeading
              align="center"
              invert
              title="Depoimentos de clientes institucionais."
              description="Feedbacks fictícios realistas para representar a experiência pretendida no posicionamento institucional."
            />
          </Reveal>
          <div className="grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.author} delay={index * 0.05}>
                <div className="premium-card-dark flex h-full flex-col gap-6 rounded-xl p-6">
                  <Quote className="text-gold" aria-hidden="true" />
                  <p className="text-base leading-8 text-white/86">“{testimonial.quote}”</p>
                  <div>
                    <strong className="font-ui text-sm text-white">{testimonial.author}</strong>
                    <p className="mt-1 text-sm text-navy-muted">{testimonial.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white py-12">
        <div className="container-site flex flex-col gap-6">
          <p className="font-ui text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Parceiros e clientes institucionais
          </p>
          <div className="relative overflow-hidden">
            <div className="marquee-track flex w-max gap-4">
              {repeatedPartners.map((partner, index) => (
                <div
                  key={`${partner}-${index}`}
                  className="flex min-w-56 items-center justify-center rounded-xl border bg-background px-6 py-5 font-serif text-xl font-semibold text-navy"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 sm:pb-20 lg:pb-24">
        <div className="container-site">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl bg-navy px-6 py-12 text-white sm:px-10 lg:px-14 lg:py-16">
              <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_center,rgba(194,139,63,0.22),transparent_55%)] lg:block" />
              <div className="relative flex max-w-3xl flex-col gap-6">
                <h2 className="font-serif text-3xl leading-tight font-semibold text-balance sm:text-5xl">
                  Precisa de segurança jurídica para um processo, contrato ou concurso?
                </h2>
                <p className="text-base leading-8 text-navy-muted sm:text-lg">
                  Agende uma reunião de diagnóstico e receba orientação inicial sobre riscos,
                  documentos, prazos e próximos passos.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contacto"
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "h-12 bg-gold px-5 text-gold-foreground hover:bg-gold/90"
                    )}
                  >
                    Solicitar análise
                    <ArrowRight data-icon="inline-end" />
                  </Link>
                  <Link
                    href={`https://wa.me/${site.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "lg" }),
                      "h-12 border-white/20 bg-white/8 px-5 text-white hover:bg-white hover:text-navy"
                    )}
                  >
                    WhatsApp imediato
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
