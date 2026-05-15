import { motion } from "motion/react";
import {
  ArrowUpRight,
  BookOpen,
  Instagram,
  MapPin,
  Scale,
  Sparkles,
  Star,
} from "lucide-react";
import { WhatsAppIcon } from "../components/WhatsAppIcon";
import perfilImg from "../public/perfil.png";

type BioLink = {
  label: string;
  sub: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  external: boolean;
  featured?: boolean;
};

const bioLinks: BioLink[] = [
  {
    label: "WhatsApp · Falar agora",
    sub: "(17) 99632-4627 · resposta rápida",
    href: "https://wa.me/5517996324627?text=Ol%C3%A1%20Dr.%20Luiz%2C%20vim%20pelo%20Instagram.",
    icon: WhatsAppIcon,
    external: true,
    featured: true,
  },
  {
    label: "Conhecer o escritório",
    sub: "Site oficial · áreas, sobre, blog",
    href: "#",
    icon: Sparkles,
    external: false,
  },
  {
    label: "Áreas de atuação",
    sub: "Penal · Família · Sucessões",
    href: "#areas",
    icon: Scale,
    external: false,
  },
  {
    label: "Blog jurídico",
    sub: "Saber também é defesa",
    href: "#blog",
    icon: BookOpen,
    external: false,
  },
  {
    label: "Instagram",
    sub: "@drluizmamprin_adv",
    href: "https://instagram.com/drluizmamprin_adv",
    icon: Instagram,
    external: true,
  },
  {
    label: "Ver processos no Jusbrasil",
    sub: "Histórico público de atuação",
    href: "https://www.jusbrasil.com.br/processos/nome/618242007/luiz-henrique-mamprin",
    icon: Star,
    external: true,
  },
  {
    label: "Localização do escritório",
    sub: "Av. Manoel Marquês Rosa, 1075 · Fernandópolis",
    href: "https://maps.google.com/?q=Av.+Manoel+Marqu%C3%AAs+Rosa,+1075+-+10+andar,+sala+103+-+Centro,+Fernand%C3%B3polis+-+SP,+15600-016",
    icon: MapPin,
    external: true,
  },
];

export default function BioPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] selection:bg-[var(--accent)] selection:text-[var(--bg)] overflow-x-hidden">
      <div
        className="absolute top-0 inset-x-0 h-[400px] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212,165,116,0.18), transparent 70%)",
        }}
      />

      <main className="relative max-w-md mx-auto px-5 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="relative w-28 h-28 mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--accent)] via-[var(--accent-deep)] to-[var(--accent)] p-[2px]">
              <div className="w-full h-full rounded-full overflow-hidden bg-[var(--bg-elev)]">
                <img
                  src={perfilImg}
                  alt="Dr. Luiz Henrique Mamprin"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 18%" }}
                />
              </div>
            </div>
          </div>

          <h1 className="font-[var(--font-display)] text-[clamp(28px,7vw,36px)] leading-[1.1] mt-5">
            Dr. Luiz Henrique <em>Mamprin</em>
          </h1>
          <div className="font-[var(--font-mono)] text-[10.5px] tracking-[0.18em] uppercase text-[var(--accent)] mt-2">
            OAB/SP 486.984
          </div>
          <p className="text-[var(--text-soft)] text-sm mt-3 max-w-[34ch] mx-auto leading-relaxed">
            Advocacia em <strong className="text-[var(--text)] font-medium">Direito Penal</strong>{" "}
            e <strong className="text-[var(--text)] font-medium">Direito de Família</strong>.
            Fernandópolis e região noroeste de SP.
          </p>

          <div className="mt-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border-soft)] bg-[var(--bg-elev)] font-[var(--font-mono)] text-[10.5px] tracking-[0.1em] uppercase text-[var(--text-soft)]">
            <span className="text-[var(--accent)]">5.0 ★</span>
            <span>Avaliações Google</span>
          </div>
        </motion.div>

        <nav aria-label="Links" className="mt-9 space-y-3">
          {bioLinks.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
                className={`group flex items-center gap-3.5 p-4 rounded-[var(--radius-md)] border transition-all hover:-translate-y-0.5 ${
                  link.featured
                    ? "bg-[var(--accent)] border-[var(--accent)] text-[#1a1408] hover:bg-[var(--accent-bright)] hover:shadow-[0_12px_32px_-10px_rgba(212,165,116,0.4)]"
                    : "bg-[var(--bg-elev)] border-[var(--border-soft)] text-[var(--text)] hover:border-[var(--accent)]"
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 ${
                    link.featured
                      ? "bg-[#1a1408]/15 text-[#1a1408]"
                      : "bg-[var(--bg-elev-2)] border border-[var(--border-soft)] text-[var(--accent)]"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 text-left min-w-0">
                  <div
                    className={`font-medium text-[15px] leading-tight ${
                      link.featured ? "text-[#1a1408]" : "text-[var(--text)]"
                    }`}
                  >
                    {link.label}
                  </div>
                  <div
                    className={`text-[12px] mt-0.5 truncate ${
                      link.featured ? "text-[#1a1408]/70" : "text-[var(--text-muted)]"
                    }`}
                  >
                    {link.sub}
                  </div>
                </div>
                <ArrowUpRight
                  className={`w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                    link.featured ? "text-[#1a1408]/70" : "text-[var(--text-muted)] group-hover:text-[var(--accent)]"
                  }`}
                />
              </motion.a>
            );
          })}
        </nav>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="font-[var(--font-mono)] text-[10px] text-[var(--text-muted)] tracking-[0.12em] uppercase">
            © 2026 · Luiz Henrique Mamprin · OAB/SP 486.984
          </div>
          <p className="text-[11px] text-[var(--text-faint)] mt-2 max-w-[40ch] mx-auto leading-relaxed">
            Conteúdo informativo. Não constitui captação de clientes nos termos do
            Provimento 205/2021 OAB.
          </p>
        </motion.footer>
      </main>
    </div>
  );
}
