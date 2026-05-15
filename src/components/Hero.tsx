import { motion } from "motion/react";
import perfilImg from "../public/perfil.png";

const WHATSAPP_URL =
  "https://wa.me/5517996324627?text=Ol%C3%A1%20Dr.%20Luiz%2C%20gostaria%20de%20agendar%20uma%20consulta.";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] pt-32 pb-20 lg:pt-40 lg:pb-24 flex items-center overflow-hidden">
      <div
        className="absolute -top-[200px] -right-[300px] w-[800px] h-[800px] rounded-full blur-3xl pointer-events-none bg-accent-glow"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div className="flex flex-wrap items-center gap-4 mb-7">
              <span className="inline-flex items-center gap-2 font-[var(--font-mono)] text-[11px] tracking-[0.14em] uppercase text-[var(--text-muted)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                Fernandópolis · SP
              </span>
              <span className="font-[var(--font-mono)] text-[11px] tracking-[0.14em] uppercase text-[var(--text-muted)]">
                OAB/SP 486.984
              </span>
              <span className="font-[var(--font-mono)] text-[11px] tracking-[0.14em] uppercase text-[var(--text-muted)] hidden sm:inline">
                Atendimento humanizado
              </span>
            </div>

            <h1 className="font-[var(--font-display)] text-[clamp(44px,6.6vw,100px)] leading-[1.05] mb-7 text-[var(--text)]">
              Defesa <em>técnica</em>,<br /> decisão <em>humana.</em>
            </h1>

            <p className="text-[clamp(17px,1.3vw,19px)] text-[var(--text-soft)] leading-[1.55] max-w-[52ch] mb-8">
              Advocacia especializada em{" "}
              <strong className="text-[var(--text)] font-medium">Direito Penal</strong> e{" "}
              <strong className="text-[var(--text)] font-medium">Direito de Família</strong> em
              Fernandópolis e toda a região noroeste paulista. Você não está sozinho neste momento —
              e cada passo será explicado, planejado e defendido com seriedade.
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-[var(--accent)] text-[#1a1408] font-medium transition-all hover:bg-[var(--accent-bright)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-10px_rgba(212,165,116,0.4)]"
              >
                Agendar consulta no WhatsApp
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="#areas"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-[var(--border-strong)] text-[var(--text)] font-medium transition-all hover:bg-[var(--bg-elev)] hover:border-[var(--accent)]"
              >
                Conhecer áreas de atuação
              </a>
            </div>

            <div className="flex gap-6 sm:gap-10 pt-7 border-t border-[var(--border-soft)]">
              <Stat
                num="2"
                label={
                  <>
                    Áreas com<br />atuação especializada
                  </>
                }
              />
              <Stat
                num="100%"
                label={
                  <>
                    Sigilo<br />e ética profissional
                  </>
                }
              />
              <Stat
                num={
                  <>
                    5.0<span className="text-[var(--accent)] text-[0.6em]">★</span>
                  </>
                }
                label={
                  <>
                    Nota dos<br />clientes
                  </>
                }
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none rounded-[var(--radius-lg)] overflow-hidden bg-[var(--bg-elev)]"
          >
            <img
              src={perfilImg}
              alt="Dr. Luiz Henrique Mamprin, advogado em Fernandópolis"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 18%", filter: "contrast(1.05) saturate(0.92)" }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, transparent 40%, rgba(10,10,10,0.45) 100%)",
              }}
            />
            <div className="absolute bottom-5 left-5 right-5 px-4 py-4 flex justify-between items-end gap-4 bg-[rgba(10,10,10,0.6)] backdrop-blur-md border border-white/[0.07] rounded-[var(--radius-md)]">
              <div>
                <div className="font-[var(--font-display)] text-[22px] leading-[1.1] text-[var(--text)]">
                  Dr. Luiz Mamprin
                </div>
                <div className="font-[var(--font-mono)] text-[10.5px] text-[var(--accent)] tracking-[0.12em] mt-1">
                  OAB/SP 486.984
                </div>
              </div>
              <div className="font-[var(--font-mono)] text-[10px] text-[var(--text-muted)] tracking-[0.12em] text-right leading-[1.4]">
                Advocacia<br />Fernandópolis · SP
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ num, label }: { num: React.ReactNode; label: React.ReactNode }) {
  return (
    <div>
      <div className="font-[var(--font-display)] text-[clamp(28px,3vw,40px)] leading-none text-[var(--text)] mb-1.5">
        {num}
      </div>
      <div className="text-[12px] text-[var(--text-muted)] leading-[1.4] max-w-[18ch]">
        {label}
      </div>
    </div>
  );
}
