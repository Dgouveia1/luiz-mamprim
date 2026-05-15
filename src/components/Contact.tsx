import { motion } from "motion/react";

const WHATSAPP_URL =
  "https://wa.me/5517996324627?text=Ol%C3%A1%20Dr.%20Luiz%2C%20gostaria%20de%20agendar%20uma%20consulta.";

export default function Contact() {
  return (
    <section id="contato" className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="relative border border-[var(--border)] rounded-[var(--radius-lg)] p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-end overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at top right, rgba(212,165,116,0.18), transparent 60%), var(--bg-elev)",
          }}
        >
          <div>
            <span className="eyebrow">Vamos conversar</span>
            <h2 className="font-[var(--font-display)] text-[clamp(36px,4.6vw,64px)] leading-[1.05] mt-4 max-w-[14ch]">
              Conte o que está <em>acontecendo</em>.
            </h2>
            <p className="text-[clamp(17px,1.3vw,21px)] text-[var(--text)] leading-[1.55] mt-5 mb-8 max-w-[58ch]">
              Uma conversa inicial não compromete você a nada. Você sai dela com mais clareza
              sobre o que pode (e o que não pode) ser feito — e decide com calma.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-[#25d366] text-[#0a1f10] font-medium transition-all hover:bg-[#2cea73] hover:-translate-y-0.5"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.6 14.2c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.1-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.7-1.7-2-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1.1-1.1 2.6 0 1.6 1.1 3.1 1.3 3.3.2.2 2.2 3.4 5.4 4.7.8.3 1.4.5 1.8.7.8.3 1.5.2 2 .1.6-.1 1.8-.7 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.6 1.4 5.1L2 22l5-1.3c1.5.8 3.2 1.3 5 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
                </svg>
                WhatsApp · (17) 99632-4627
              </a>
              <a
                href="https://www.instagram.com/drluizmamprin_adv/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-[var(--border-strong)] text-[var(--text)] font-medium transition-all hover:bg-[var(--bg-elev-2)] hover:border-[var(--accent)]"
              >
                Instagram
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <InfoRow
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 21s-7-7.5-7-12a7 7 0 1 1 14 0c0 4.5-7 12-7 12z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              }
              label="Escritório"
              value={
                <>
                  Av. Manoel Marquês Rosa, 1075
                  <br />
                  10º andar, sala 103 · Centro
                  <br />
                  Fernandópolis · SP · 15600-016
                </>
              }
            />
            <InfoRow
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
                </svg>
              }
              label="WhatsApp · Telefone"
              value="(17) 99632-4627"
            />
            <InfoRow
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              }
              label="Instagram"
              value="@drluizmamprin_adv"
            />
            <InfoRow
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              }
              label="Atendimento"
              value={
                <>
                  Seg–Sex · 08:30 às 18:00
                  <br />
                  Urgências penais · 24h
                </>
              }
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3.5 p-4 sm:p-5 border border-[var(--border-soft)] rounded-md bg-[rgba(10,10,10,0.4)]">
      <span className="w-[18px] h-[18px] shrink-0 text-[var(--accent)] mt-0.5">{icon}</span>
      <div>
        <div className="font-[var(--font-mono)] text-[10.5px] text-[var(--text-muted)] tracking-[0.12em] uppercase mb-1">
          {label}
        </div>
        <div className="text-[var(--text)] text-[14.5px] leading-[1.4]">{value}</div>
      </div>
    </div>
  );
}
