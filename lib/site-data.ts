import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  BookOpenText,
  BriefcaseBusiness,
  Building2,
  ClipboardCheck,
  FileCheck2,
  Gavel,
  Handshake,
  Landmark,
  LockKeyhole,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
} from "lucide-react";

export const site = {
  name: "Alvanito Nayani",
  legalName: "Alvanito Nayani - Consultoria e Prestação de Serviços",
  description:
    "Consultoria jurídica, contratação pública, assessoria empresarial, compliance e gestão contratual para instituições e empresas.",
  url: "https://www.alvanitonayani.com",
  email: "geral@alvanitonayani.com",
  phone: "+244 936 080 173",
  phoneAlt: "+244 936 079 317",
  whatsapp: "244936080173",
  address: "Av. 4 de Fevereiro, Nº 23, Ingombota, Luanda",
  instagram: "https://www.instagram.com/",
  linkedin: "https://www.linkedin.com/",
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Sobre nós", href: "/sobre-nos" },
  { label: "Serviços", href: "/servicos" },
  { label: "Contratação pública", href: "/contratacao-publica" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
];

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  points: string[];
};

export const services: Service[] = [
  {
    title: "Consultoria Jurídica",
    description:
      "Orientação técnica para decisões empresariais, pareceres, prevenção de riscos e estruturação de soluções legais.",
    icon: Scale,
    points: ["Pareceres jurídicos", "Direito administrativo", "Direito contratual"],
  },
  {
    title: "Contratação Pública",
    description:
      "Assessoria em procedimentos concursais, documentação, análise de cadernos de encargos e acompanhamento jurídico.",
    icon: Landmark,
    points: ["Licitações", "Concursos públicos", "Compliance público"],
  },
  {
    title: "Licitações",
    description:
      "Preparação estratégica de propostas, verificação de requisitos, recursos e apoio técnico durante o processo.",
    icon: FileCheck2,
    points: ["Análise documental", "Submissões", "Recursos administrativos"],
  },
  {
    title: "Compliance",
    description:
      "Políticas, rotinas e controlos internos para reduzir exposição jurídica e melhorar a governação institucional.",
    icon: ShieldCheck,
    points: ["Mapeamento de riscos", "Normas internas", "Auditoria documental"],
  },
  {
    title: "Assessoria Empresarial",
    description:
      "Apoio legal para operações societárias, regularização documental, negociação e decisões de gestão.",
    icon: BriefcaseBusiness,
    points: ["Regularização", "Gestão documental", "Negociação empresarial"],
  },
  {
    title: "Gestão Contratual",
    description:
      "Elaboração, revisão e monitorização de contratos, prazos, obrigações, aditamentos e garantias.",
    icon: ClipboardCheck,
    points: ["Minutas", "Renovações", "Acompanhamento de obrigações"],
  },
  {
    title: "Contencioso Administrativo",
    description:
      "Estratégia e acompanhamento em matérias administrativas, impugnações, reclamações e recursos.",
    icon: Gavel,
    points: ["Defesa administrativa", "Impugnações", "Gestão de prazos"],
  },
  {
    title: "Pareceres Jurídicos",
    description:
      "Produção de pareceres claros, fundamentados e orientados à tomada de decisão institucional.",
    icon: BookOpenText,
    points: ["Análise normativa", "Risco legal", "Recomendações executivas"],
  },
];

export const differentiators = [
  {
    title: "Rigor jurídico",
    description:
      "Cada documento é tratado com método, fundamentação legal e revisão técnica adequada ao nível de risco.",
    icon: Gavel,
  },
  {
    title: "Atendimento personalizado",
    description:
      "O acompanhamento é ajustado à realidade de cada cliente, com comunicação clara e prioridades definidas.",
    icon: UsersRound,
  },
  {
    title: "Soluções estratégicas",
    description:
      "A intervenção jurídica é integrada ao objetivo empresarial, institucional e contratual do cliente.",
    icon: Target,
  },
  {
    title: "Confidencialidade",
    description:
      "A informação é gerida com discrição, segurança, ética profissional e controlo de acesso.",
    icon: LockKeyhole,
  },
];

export const stats = [
  { value: "12+", label: "anos de experiência combinada" },
  { value: "180+", label: "clientes e entidades acompanhadas" },
  { value: "340+", label: "processos e pareceres técnicos" },
  { value: "96%", label: "índice de retenção de clientes" },
];

export const values = [
  {
    title: "Ética",
    description: "Atuar com integridade, transparência e respeito pelo interesse legítimo de cada cliente.",
    icon: BadgeCheck,
  },
  {
    title: "Excelência",
    description: "Buscar qualidade técnica elevada, precisão documental e melhoria contínua em cada entrega.",
    icon: Sparkles,
  },
  {
    title: "Compromisso",
    description: "Priorizar resultados, cumprimento de prazos e satisfação institucional do cliente.",
    icon: Handshake,
  },
  {
    title: "Responsabilidade",
    description: "Assumir uma atuação prudente, fundamentada e orientada à segurança jurídica.",
    icon: Building2,
  },
];

export const testimonials = [
  {
    quote:
      "A equipa apresentou uma leitura jurídica objetiva e conduziu o processo com serenidade, método e domínio técnico.",
    author: "Direção Administrativa",
    role: "Grupo empresarial privado",
  },
  {
    quote:
      "Recebemos acompanhamento completo desde a análise documental até à fase de esclarecimentos e resposta.",
    author: "Unidade de Contratação",
    role: "Instituição pública",
  },
  {
    quote:
      "O trabalho trouxe previsibilidade aos contratos e reduziu significativamente os riscos operacionais.",
    author: "Conselho de Gerência",
    role: "Empresa de serviços",
  },
];

export const partners = [
  "Instituto Horizonte",
  "Grupo Atlântico",
  "Nova Gestão",
  "Fundação Prisma",
  "Banco Corporativo",
  "Consórcio Luanda",
];

export const procurementSteps = [
  {
    title: "Diagnóstico do procedimento",
    description:
      "Leitura do anúncio, programa do concurso, caderno de encargos, prazos e requisitos obrigatórios.",
  },
  {
    title: "Preparação documental",
    description:
      "Organização de certidões, declarações, propostas, garantias, procurações e anexos exigidos.",
  },
  {
    title: "Estratégia jurídica",
    description:
      "Identificação de riscos, fundamentos legais, oportunidades de esclarecimento e critérios de avaliação.",
  },
  {
    title: "Submissão e acompanhamento",
    description:
      "Apoio no cumprimento de prazos, pedidos de esclarecimento, reclamações e recursos administrativos.",
  },
  {
    title: "Gestão contratual",
    description:
      "Acompanhamento de adjudicação, assinatura, execução, aditamentos, garantias e obrigações posteriores.",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "seguranca-juridica-na-contratacao-publica",
    title: "Segurança jurídica na contratação pública: onde começam os riscos",
    category: "Contratação pública",
    excerpt:
      "Uma visão prática sobre requisitos documentais, prazos críticos e controlos que evitam exclusões evitáveis.",
    date: "2026-05-02",
    readTime: "6 min",
    image: "/images/contratacao-publica-documentos.jpg",
    author: "Equipa Jurídica",
    content: [
      "A segurança jurídica em contratação pública começa antes da submissão da proposta. A leitura técnica do programa do concurso, dos critérios de avaliação e dos documentos de habilitação define o nível de risco do procedimento.",
      "Empresas que tratam a documentação como uma simples formalidade ficam mais expostas a exclusões, esclarecimentos mal respondidos e recursos sem base suficiente. O controlo deve incluir prazos, poderes de representação, validade de certidões e consistência entre proposta técnica e proposta financeira.",
      "Uma abordagem preventiva permite decidir se vale a pena concorrer, que documentos precisam de reforço e como estruturar uma resposta que proteja o cliente em todas as fases do procedimento.",
    ],
  },
  {
    slug: "parecer-juridico-como-ferramenta-de-decisao",
    title: "O parecer jurídico como ferramenta de decisão empresarial",
    category: "Consultoria jurídica",
    excerpt:
      "Pareceres eficazes não são apenas textos legais: traduzem risco, alternativas e recomendações executivas.",
    date: "2026-04-18",
    readTime: "5 min",
    image: "/images/assinatura-documentos-juridicos.jpg",
    author: "Consultoria Legal",
    content: [
      "Um parecer jurídico deve responder a uma decisão concreta. Para além da interpretação normativa, precisa de apontar cenários, consequências prováveis e medidas de mitigação.",
      "Quando o parecer é estruturado com linguagem clara, ele ajuda a administração, a direção financeira e as equipas operacionais a agirem com maior segurança. A fundamentação técnica continua essencial, mas deve ser acompanhada de orientação prática.",
      "A boa consultoria jurídica aproxima o direito da gestão: reduz incerteza, organiza prioridades e permite que decisões sensíveis sejam tomadas com rastreabilidade.",
    ],
  },
  {
    slug: "compliance-documental-em-instituicoes",
    title: "Compliance documental em instituições: método antes da urgência",
    category: "Compliance",
    excerpt:
      "Como rotinas de arquivo, revisão e controlo documental reduzem riscos legais e atrasos administrativos.",
    date: "2026-03-27",
    readTime: "7 min",
    image: "/images/reuniao-consultoria-legal.jpg",
    author: "Área de Compliance",
    content: [
      "A ausência de método documental cria risco silencioso. Contratos sem controlo de prazo, certidões vencidas, poderes de assinatura desatualizados e arquivos dispersos comprometem decisões importantes.",
      "Um programa de compliance documental deve estabelecer responsáveis, ciclos de revisão, classificação de documentos críticos e indicadores simples de cumprimento. O objetivo é garantir que a organização responda rapidamente sem sacrificar segurança.",
      "Com rotinas bem definidas, a instituição ganha previsibilidade e reduz a dependência de ações urgentes quando surgem auditorias, concursos, fiscalizações ou negociações relevantes.",
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
