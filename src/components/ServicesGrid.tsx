import { motion } from "motion/react";
import SmartLink from "./SmartLink";
import { servicePages } from "../data/services";

export default function ServicesGrid() {
  const penal = servicePages.filter((s) => s.area === "penal");
  const familia = servicePages.filter((s) => s.area === "familia");

  return (
    <section id="servicos" className="py-20 sm:py-28 lg:py-32 bg-[#070707]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="mb-12 lg:mb-16">
          <span className="eyebrow">Páginas de serviço</span>
          <h2 className="font-[var(--font-display)] text-[clamp(36px,4.6vw,64px)] leading-[1.05] mt-4 max-w-[24ch]">
            Saiba <em>exatamente</em> o que esperar.
          </h2>
          <p className="text-[var(--text-soft)] text-[16.5px] max-w-[56ch] leading-relaxed mt-5">
            Cada área tem suas particularidades — prazos, documentos, riscos, custos. Escolha o
            assunto e leia em detalhe antes de marcar a consulta.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          <ServiceColumn
            label="Direito Penal"
            tagColor="#c46a5b"
            services={penal}
          />
          <ServiceColumn
            label="Direito de Família"
            tagColor="#7a9a6e"
            services={familia}
          />
        </div>
      </div>
    </section>
  );
}

function ServiceColumn({
  label,
  tagColor,
  services,
}: {
  label: string;
  tagColor: string;
  services: typeof servicePages;
}) {
  return (
    <div>
      <div
        className="flex items-center gap-3 mb-6 pb-4 border-b border-[var(--border-soft)]"
      >
        <span
          className="w-2 h-2 rounded-full"
          style={{ background: tagColor }}
          aria-hidden="true"
        />
        <span className="font-[var(--font-mono)] text-[11px] tracking-[0.14em] uppercase text-[var(--text-soft)]">
          {label}
        </span>
        <span className="font-[var(--font-mono)] text-[11px] tracking-[0.1em] text-[var(--text-muted)] ml-auto">
          {services.length} páginas
        </span>
      </div>
      <ul className="list-none p-0 grid gap-2">
        {services.map((s, i) => (
          <motion.li
            key={s.slug}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
          >
            <SmartLink
              to={`/${s.slug}/`}
              className="group flex items-start gap-4 p-5 rounded-[var(--radius-md)] border border-transparent hover:border-[var(--border)] hover:bg-[var(--bg-elev)] transition-all"
            >
              <span className="font-[var(--font-mono)] text-[10px] text-[var(--text-muted)] tracking-[0.1em] pt-1 shrink-0 w-6">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 min-w-0">
                <span className="block font-[var(--font-display)] text-[20px] leading-[1.2] text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                  {s.navLabel}
                </span>
                <span className="block text-[13.5px] text-[var(--text-soft)] mt-1.5 leading-[1.5]">
                  {s.metaDescription.split(".")[0]}.
                </span>
              </span>
              <span
                className="shrink-0 text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 transition-all pt-1"
                aria-hidden="true"
              >
                →
              </span>
            </SmartLink>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
