import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { services } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Serviços de consultoria jurídica, contratação pública, licitações, compliance, assessoria empresarial e gestão contratual.",
  alternates: {
    canonical: "/servicos",
  },
};

const serviceGroups = [
  {
    title: "Serviços Jurídicos",
    items: ["Assessoria jurídica", "Pareceres", "Direito administrativo", "Direito contratual"],
  },
  {
    title: "Contratação Pública",
    items: ["Licitações", "Concursos públicos", "Elaboração documental", "Compliance público"],
  },
  {
    title: "Consultoria Empresarial",
    items: ["Gestão documental", "Regularização empresarial", "Análise contratual", "Negociação"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="container-site grid items-center gap-12 py-16 lg:grid-cols-[1fr_0.9fr] lg:py-24">
          <Reveal className="flex flex-col gap-7">
            <h1 className="font-serif text-4xl leading-tight font-semibold text-balance sm:text-5xl lg:text-6xl">
              Serviços jurídicos para empresas, instituições e processos críticos.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-navy-muted">
              Uma oferta integrada para consultoria jurídica, contratação pública, compliance,
              gestão contratual e regularização empresarial.
            </p>
            <Link
              href="/contacto"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 w-fit bg-gold px-5 text-gold-foreground hover:bg-gold/90"
              )}
            >
              Pedir proposta
              <ArrowRight data-icon="inline-end" />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <Image
              src="/images/assinatura-documentos-juridicos.jpg"
              alt="Documentos legais em assinatura"
              width={1000}
              height={680}
              className="aspect-[4/3] rounded-2xl object-cover premium-shadow"
              priority
            />
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-site flex flex-col gap-12">
          <Reveal>
            <SectionHeading
              align="center"
              title="Atuação completa, linguagem clara e foco na decisão do cliente."
              description="Cada serviço inclui diagnóstico, orientação técnica, documentos necessários e acompanhamento até à conclusão da etapa definida."
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
                      <div className="flex flex-wrap gap-2">
                        {service.points.map((point) => (
                          <Badge key={point} variant="secondary" className="rounded-md">
                            {point}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-y bg-mist">
        <div className="container-site grid gap-6 lg:grid-cols-3">
          {serviceGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.05}>
              <div className="premium-card flex h-full flex-col gap-5 rounded-2xl p-7">
                <h2 className="font-serif text-2xl font-semibold text-navy">{group.title}</h2>
                <div className="flex flex-col gap-3">
                  {group.items.map((item) => (
                    <div key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                      <Check className="mt-0.5 text-gold" aria-hidden="true" />
                      {item}
                    </div>
                  ))}
                </div>
                <Link href="/contacto" className="mt-auto font-ui text-sm font-semibold text-gold hover:text-navy">
                  Solicitar este serviço
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
