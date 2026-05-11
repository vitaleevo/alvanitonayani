import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileSearch, Landmark, Scale, ShieldCheck } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { procurementSteps } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contratação Pública",
  description:
    "Assessoria em licitações, concursos públicos, preparação documental, compliance público e gestão contratual.",
  alternates: {
    canonical: "/contratacao-publica",
  },
};

const highlights = [
  {
    title: "Análise jurídica",
    description: "Leitura do procedimento, riscos, critérios e fundamentos aplicáveis.",
    icon: Scale,
  },
  {
    title: "Preparação documental",
    description: "Organização de certidões, propostas, declarações e anexos obrigatórios.",
    icon: FileSearch,
  },
  {
    title: "Compliance público",
    description: "Verificação de conformidade, transparência, prazos e requisitos legais.",
    icon: ShieldCheck,
  },
  {
    title: "Gestão contratual",
    description: "Acompanhamento após adjudicação, execução, aditamentos e garantias.",
    icon: Landmark,
  },
];

export default function ProcurementPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="container-site grid items-center gap-12 py-16 lg:grid-cols-[1fr_0.95fr] lg:py-24">
          <Reveal className="flex flex-col gap-7">
            <h1 className="font-serif text-4xl leading-tight font-semibold text-balance sm:text-5xl lg:text-6xl">
              Contratação pública com estratégia, conformidade e controlo documental.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-navy-muted">
              Apoio técnico-jurídico em processos licitatórios, concursos, preparação documental,
              análise de legislação aplicável e acompanhamento até à gestão contratual.
            </p>
            <Link
              href="/contacto"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 w-fit bg-gold px-5 text-gold-foreground hover:bg-gold/90"
              )}
            >
              Avaliar procedimento
              <ArrowRight data-icon="inline-end" />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <Image
              src="/images/contratacao-publica-documentos.jpg"
              alt="Revisão de documentos num processo de contratação pública"
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
              title="Do anúncio à execução contratual."
              description="Uma metodologia visual e organizada para reduzir risco, evitar falhas formais e apoiar decisões em cada fase."
            />
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.04}>
                  <div className="premium-card flex h-full flex-col gap-4 rounded-xl p-6">
                    <div className="premium-icon flex size-12 items-center justify-center rounded-xl bg-gold/12 text-gold ring-1 ring-gold/20">
                      <Icon aria-hidden="true" />
                    </div>
                    <h2 className="font-serif text-2xl font-semibold text-navy">{item.title}</h2>
                    <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-y bg-mist">
        <div className="container-site grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <SectionHeading
              title="Timeline de acompanhamento jurídico."
              description="Fluxo pensado para dar visibilidade aos prazos, documentos, responsabilidades e riscos de cada procedimento."
            />
          </Reveal>
          <div className="relative flex flex-col gap-4">
            <div className="absolute left-5 top-4 hidden h-[calc(100%-2rem)] w-px bg-gold/40 sm:block" />
            {procurementSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.04}>
                <div className="relative grid gap-4 rounded-xl bg-white p-5 ring-1 ring-border sm:grid-cols-[3rem_1fr]">
                  <div className="flex size-10 items-center justify-center rounded-full bg-gold font-ui text-sm font-semibold text-gold-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="font-serif text-xl font-semibold text-navy">{step.title}</h2>
                    <p className="text-sm leading-7 text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-site">
          <Reveal>
            <div className="grid overflow-hidden rounded-2xl bg-navy text-white lg:grid-cols-[0.9fr_1.1fr]">
              <div className="flex flex-col gap-6 p-8 sm:p-10 lg:p-12">
                <h2 className="font-serif text-3xl font-semibold text-balance sm:text-4xl">
                  Infográfico de risco em procedimentos concursais.
                </h2>
                <p className="text-base leading-8 text-navy-muted">
                  A proposta é avaliada por três dimensões: conformidade documental, estratégia
                  jurídica e capacidade de execução contratual.
                </p>
                <Link
                  href="/contacto"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-12 w-fit border-white/20 bg-white/8 text-white hover:bg-white hover:text-navy"
                  )}
                >
                  Pedir diagnóstico
                </Link>
              </div>
              <div className="grid gap-4 bg-white/6 p-8 sm:p-10 lg:p-12">
                {[
                  ["Conformidade documental", "92%"],
                  ["Estratégia jurídica", "86%"],
                  ["Gestão de prazos", "94%"],
                  ["Execução contratual", "88%"],
                ].map(([label, value]) => (
                  <div key={label} className="flex flex-col gap-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>{label}</span>
                      <strong className="text-gold">{value}</strong>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/12">
                      <div className="h-full rounded-full bg-gold" style={{ width: value }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
