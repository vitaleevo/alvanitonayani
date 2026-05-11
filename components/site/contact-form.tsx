"use client";

import { useState } from "react";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
          Nome
          <Input name="name" placeholder="O seu nome" required />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
          Telefone
          <Input name="phone" placeholder="+244 ..." required />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
        Email
        <Input type="email" name="email" placeholder="email@empresa.com" required />
      </label>
      <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
        Serviço pretendido
        <Input name="service" placeholder="Consultoria jurídica, contratação pública..." />
      </label>
      <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
        Mensagem
        <Textarea
          name="message"
          placeholder="Descreva brevemente o assunto, prazos e documentos existentes."
          rows={6}
          required
        />
      </label>
      <Button className="h-11 bg-navy text-white hover:bg-navy/90" size="lg" type="submit">
        <Send data-icon="inline-start" />
        Enviar pedido
      </Button>
      {sent ? (
        <p className="rounded-lg border border-gold/30 bg-gold/10 px-4 py-3 text-sm text-gold-foreground">
          Pedido registado localmente. Ligue ou envie WhatsApp para concluir o contacto comercial.
        </p>
      ) : null}
    </form>
  );
}
