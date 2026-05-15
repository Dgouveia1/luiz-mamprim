import { ExternalLink, Instagram, MapPin, Scale } from "lucide-react";
import { motion } from "motion/react";
import { WhatsAppIcon } from "./WhatsAppIcon";

const links = [
  {
    title: "WhatsApp",
    subtitle: "Fale diretamente comigo",
    icon: WhatsAppIcon,
    url: "https://api.whatsapp.com/message/VOBV4YPWM7JPK1?autoload=1&app_absent=0&text=Vim%20atraves%20do%20site.%20Pode%20me%20tirar%20uma%20duvida",
    accent: "Recomendado",
  },
  {
    title: "Instagram",
    subtitle: "@drluizmamprin_adv",
    icon: Instagram,
    url: "https://instagram.com/drluizmamprin_adv",
    accent: "Social",
  },
  {
    title: "Ver Processos",
    subtitle: "Jusbrasil",
    icon: Scale,
    url: "https://www.jusbrasil.com.br/processos/nome/618242007/luiz-henrique-mamprin",
    accent: "Histórico",
  },
  {
    title: "Localização",
    subtitle: "Google Maps · Fernandópolis",
    icon: MapPin,
    url: "https://maps.google.com/?q=Av.+Manoel+Marqu%C3%AAs+Rosa,+1075+-+10+andar,+sala+103+-+Centro,+Fernand%C3%B3polis+-+SP,+15600-016",
    accent: "Endereço",
  },
];

export default function LinkTree() {
  return (
    <div className="w-full max-w-xl mx-auto space-y-3 px-4">
      {links.map((link, index) => (
        <motion.a
          key={link.title}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 }}
          className="group flex items-center gap-4 p-5 rounded-[var(--radius-md)] bg-[var(--bg-elev)] border border-[var(--border-soft)] transition-all hover:border-[var(--accent)] hover:-translate-y-0.5"
        >
          <div className="w-11 h-11 rounded-full bg-[var(--bg-elev-2)] border border-[var(--border-soft)] flex items-center justify-center text-[var(--accent)] shrink-0">
            <link.icon className="w-5 h-5" />
          </div>
          <div className="flex-1 text-left min-w-0">
            <div className="font-[var(--font-mono)] text-[10.5px] tracking-[0.12em] uppercase text-[var(--text-muted)]">
              {link.accent}
            </div>
            <h3 className="font-[var(--font-display)] text-xl text-[var(--text)] mt-0.5">
              {link.title}
            </h3>
            <p className="text-[var(--text-soft)] text-sm mt-0.5 truncate">{link.subtitle}</p>
          </div>
          <ExternalLink className="text-[var(--text-muted)] w-4 h-4 group-hover:text-[var(--accent)] transition-colors shrink-0" />
        </motion.a>
      ))}
    </div>
  );
}
