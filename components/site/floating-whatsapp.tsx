import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { site } from "@/lib/site-data";

export function FloatingWhatsApp() {
  return (
    <Link
      href={`https://wa.me/${site.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      className="fixed right-5 bottom-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-gold text-gold-foreground shadow-2xl shadow-gold/25 transition hover:-translate-y-0.5 hover:bg-gold/90"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle aria-hidden="true" />
    </Link>
  );
}
