import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { ContactForm } from "@/components/site/contact-form";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Entre em contacto com a Alvanito Nayani para consultoria jurídica, contratação pública e assessoria empresarial.",
  alternates: {
    canonical: "/contacto",
  },
};

const contactItems = [
  {
    title: "Telefone",
    value: site.phone,
    href: `tel:${site.phone.replaceAll(" ", "")}`,
    icon: Phone,
  },
  {
    title: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
  },
  {
    title: "WhatsApp",
    value: "Atendimento comercial",
    href: `https://wa.me/${site.whatsapp}`,
    icon: MessageCircle,
  },
  {
    title: "Endereço",
    value: site.address,
    href: "https://www.google.com/maps/search/?api=1&query=Av.+4+de+Fevereiro,+Ingombota,+Luanda,+Angola",
    icon: MapPin,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="container-site py-16 lg:py-24">
          <Reveal className="max-w-4xl">
            <h1 className="font-serif text-4xl leading-tight font-semibold text-balance sm:text-5xl lg:text-6xl">
              Fale com uma equipa preparada para orientar o seu próximo passo jurídico.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-navy-muted">
              Envie o seu pedido, partilhe o contexto do processo e receba uma orientação inicial
              sobre documentos, prazos e forma de acompanhamento.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-site grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="flex flex-col gap-6">
            <SectionHeading
              title="Canais de atendimento"
              description="Contacto empresarial direto para consultoria jurídica, contratação pública e assessoria contratual."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="premium-card flex gap-4 rounded-xl p-5"
                  >
                    <span className="premium-icon flex size-12 items-center justify-center rounded-xl bg-gold/12 text-gold ring-1 ring-gold/20">
                      <Icon aria-hidden="true" />
                    </span>
                    <span className="flex flex-col gap-1">
                      <strong className="font-serif text-xl text-navy">{item.title}</strong>
                      <span className="text-sm leading-6 text-muted-foreground">{item.value}</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="rounded-2xl bg-background">
              <CardHeader>
                <CardTitle className="font-serif text-3xl text-navy">
                  Solicitar consultoria
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist pb-16 sm:pb-20 lg:pb-24">
        <div className="container-site">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border bg-white premium-shadow">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,31,58,0.06)_1px,transparent_1px),linear-gradient(0deg,rgba(11,31,58,0.06)_1px,transparent_1px)] bg-[size:44px_44px]" />
              <div className="absolute left-6 bottom-6 z-10 rounded-xl bg-white/95 p-4 shadow-xl shadow-navy/10 ring-1 ring-border">
                <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  Localização
                </p>
                <p className="mt-1 font-serif text-xl font-semibold text-navy">{site.address}</p>
              </div>
              <iframe
                title="Mapa de localização em Luanda, Angola"
                src="https://maps.google.com/maps?q=Av.+4+de+Fevereiro,+Ingombota,+Luanda,+Angola&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="relative h-[360px] w-full border-0 opacity-70 mix-blend-multiply"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
