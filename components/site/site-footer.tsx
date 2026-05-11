import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { navigation, services, site } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-site grid gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div className="flex flex-col gap-5">
          <Link href="/" className="flex items-center gap-3" aria-label="Alvanito Nayani">
            <span className="flex size-14 items-center justify-center overflow-hidden rounded-lg bg-white p-1.5">
              <Image
                src="/brand/alvanito-nayani-logo.png"
                alt="Alvanito Nayani"
                width={150}
                height={104}
                className="h-full w-full object-contain"
              />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-serif text-2xl font-semibold">Alvanito Nayani</span>
              <span className="mt-1 font-ui text-[0.68rem] font-medium uppercase tracking-[0.22em] text-gold">
                Consultoria e Serviços
              </span>
            </span>
          </Link>
          <p className="max-w-sm text-sm leading-7 text-navy-muted">
            Consultoria jurídica, contratação pública e assessoria empresarial para decisões
            seguras, processos organizados e relações contratuais mais fortes.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-ui text-sm font-semibold uppercase tracking-[0.18em] text-gold">
            Navegação
          </h3>
          <div className="flex flex-col gap-2">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-navy-muted hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-ui text-sm font-semibold uppercase tracking-[0.18em] text-gold">
            Serviços
          </h3>
          <div className="flex flex-col gap-2">
            {services.slice(0, 5).map((item) => (
              <Link key={item.title} href="/servicos" className="text-sm text-navy-muted hover:text-white">
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-ui text-sm font-semibold uppercase tracking-[0.18em] text-gold">
            Contactos
          </h3>
          <a href={`tel:${site.phone.replaceAll(" ", "")}`} className="flex gap-3 text-sm text-navy-muted hover:text-white">
            <Phone aria-hidden="true" />
            {site.phone}
          </a>
          <a href={`mailto:${site.email}`} className="flex gap-3 text-sm text-navy-muted hover:text-white">
            <Mail aria-hidden="true" />
            {site.email}
          </a>
          <div className="flex gap-3 text-sm text-navy-muted">
            <MapPin aria-hidden="true" />
            <span>{site.address}</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-3 py-6 text-sm text-navy-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.legalName}. Todos os direitos reservados.</p>
          <p>Website institucional preparado para produção.</p>
        </div>
      </div>
    </footer>
  );
}
