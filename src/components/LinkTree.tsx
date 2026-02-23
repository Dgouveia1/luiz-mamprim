import { ExternalLink, Instagram, MapPin, Scale } from "lucide-react";
import { motion } from "motion/react";
import { WhatsAppIcon } from "./WhatsAppIcon";


const links = [
  {
    title: "WhatsApp",
    subtitle: "Fale diretamente comigo",
    icon: WhatsAppIcon,
    url: "https://api.whatsapp.com/message/VOBV4YPWM7JPK1?autoload=1&app_absent=0&text=Vim%20atraves%20do%20site.%20Pode%20me%20tirar%20uma%20duvida",
    color: "bg-green-600 hover:bg-green-700", // ✅ Clássico do WhatsApp, mantém
  },

{
    title: "Instagram",
    subtitle: "@drluizmamprin_adv",
    icon: Instagram,
    url: "https://instagram.com/drluizmamprin_adv",
    color: "bg-blue-600 hover:bg-blue-700",
},

  {
    title: "Ver Processos",
    subtitle: "Jusbrasil",
    icon: Scale,
    url: "https://www.jusbrasil.com.br/processos/nome/618242007/luiz-henrique-mamprin",
    color: "bg-amber-600 hover:bg-amber-700", // 🟡 Laranja/Âmbar (combina com Jusbrasil e é neutro)
  },

  {
    title: "Localização",
    subtitle: "Google Maps",
    icon: MapPin,
    url: "https://maps.google.com/?q=Av.+Manoel+Marquês+Rosa,+1075+-+10+andar,+sala+103+-+Centro,+Fernandópolis+-+SP,+15600-016",
    color: "bg-red-600 hover:bg-red-700", // 🔴 Vermelho (cor oficial do Google Maps)
  }
];

export default function LinkTree() {
  return (
    <div className="w-full max-w-md mx-auto space-y-4 p-4">
      {links.map((link, index) => (
        <motion.a
          key={link.title}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`flex items-center p-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-1 ${link.color} group`}
        >
          <div className="bg-white/20 p-3 rounded-full mr-4 group-hover:bg-white/30 transition-colors">
            <link.icon className="text-white w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="text-white font-semibold text-lg">{link.title}</h3>
            <p className="text-white/80 text-sm">{link.subtitle}</p>
          </div>
          <ExternalLink className="text-white/50 w-5 h-5 group-hover:text-white transition-colors" />
        </motion.a>
      ))}
    </div>
  );
}
