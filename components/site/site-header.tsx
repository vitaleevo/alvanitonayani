"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, PhoneCall } from "lucide-react";
import { useState } from "react";

import { navigation, site } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy/94 text-white backdrop-blur-xl">
      <div className="container-site flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Alvanito Nayani">
          <span className="flex size-12 items-center justify-center overflow-hidden rounded-lg bg-white p-1.5">
            <Image
              src="/brand/alvanito-nayani-logo.png"
              alt="Alvanito Nayani"
              width={150}
              height={104}
              priority
              className="h-full w-full object-contain"
            />
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-serif text-xl font-semibold tracking-[0.04em]">
              Alvanito Nayani
            </span>
            <span className="mt-1 font-ui text-[0.68rem] font-medium uppercase tracking-[0.22em] text-gold">
              Consultoria e Serviços
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {navigation.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-2 font-ui text-sm font-medium text-white/76 transition hover:bg-white/8 hover:text-white",
                  active && "bg-white/10 text-gold"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contacto"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-11 border-white/18 bg-white/8 px-4 text-white hover:bg-white hover:text-navy"
            )}
          >
            <PhoneCall data-icon="inline-start" />
            Agendar reunião
          </Link>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="inline-flex size-10 items-center justify-center rounded-lg border border-white/15 bg-white/8 text-white transition hover:bg-white/14 lg:hidden">
            <Menu aria-hidden="true" />
            <span className="sr-only">Abrir menu</span>
          </SheetTrigger>
          <SheetContent className="border-l border-border bg-white text-foreground" side="right">
            <SheetHeader>
              <SheetTitle>Alvanito Nayani</SheetTitle>
              <SheetDescription>Consultoria jurídica e contratação pública.</SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col gap-2 px-4" aria-label="Navegação móvel">
              {navigation.map((item) => {
                const active =
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-lg px-3 py-3 font-ui text-sm font-medium text-foreground transition hover:bg-muted",
                      active && "bg-muted text-navy"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-auto flex flex-col gap-3 p-4">
              <Link
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ size: "lg" }), "h-11 bg-navy text-white")}
              >
                Falar no WhatsApp
              </Link>
              <Link
                href="/contacto"
                onClick={() => setOpen(false)}
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-11")}
              >
                Solicitar consultoria
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
