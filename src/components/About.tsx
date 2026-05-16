import { motion } from "motion/react";
import ReviewsVerticalScroll from "./ReviewsVerticalScroll";
import SmartLink from "./SmartLink";

const WHATSAPP_URL =
  "https://wa.me/5517996324627?text=Ol%C3%A1%20Dr.%20Luiz%2C%20gostaria%20de%20agendar%20uma%20consulta.";

export default function About() {
  return (
    <section
      id="sobre"
      className="py-20 sm:py-28 lg:py-36 relative"
      style={{
        background:
          "linear-gradient(180deg, transparent, var(--bg-elev) 50%, transparent)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="eyebrow">Sobre mim</span>
            <h2 className="font-[var(--font-display)] text-[clamp(36px,4.6vw,64px)] leading-[1.05] mt-5">
              Quem está do <em>seu lado</em>.
            </h2>
            <p className="text-[clamp(17px,1.3vw,21px)] text-[var(--text)] leading-[1.55] mt-6 max-w-[60ch]">
              Sou Luiz Henrique Mamprin, advogado inscrito na OAB/SP sob o nº 486.984. Construí
              minha atuação na fronteira entre o Direito Penal e o Direito de Família — duas áreas
              que tratam de momentos delicados, onde quem nos procura precisa de explicação clara,
              presença próxima e técnica afiada.
            </p>
            <p className="text-[var(--text-soft)] text-[16px] leading-[1.6] mt-5 max-w-[60ch]">
              Pós-graduado em Direito Notarial e Registral Civil e cursando pós-graduação em
              Advocacia. Atendimento em Fernandópolis, Votuporanga, Jales e toda a região noroeste
              paulista — também on-line, com a mesma seriedade do presencial.
            </p>

            <div className="mt-8 flex gap-3 flex-wrap">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-[var(--accent)] text-[#1a1408] font-medium transition-all hover:bg-[var(--accent-bright)] hover:-translate-y-0.5"
              >
                Agendar conversa
                <span aria-hidden="true">→</span>
              </a>
              <SmartLink
                to="/contato/"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-[var(--border-strong)] text-[var(--text)] font-medium transition-all hover:bg-[var(--bg-elev)] hover:border-[var(--accent)]"
              >
                Onde atendo
              </SmartLink>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-[var(--font-mono)] text-[11px] tracking-[0.14em] uppercase text-[var(--text-muted)]">
                Avaliações do Google
              </span>
              <span className="font-[var(--font-mono)] text-[11px] tracking-[0.14em] uppercase text-[var(--accent)]">
                5.0 ★
              </span>
            </div>
            <ReviewsVerticalScroll />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
