import { motion } from "motion/react";
import SmartLink from "./SmartLink";

type Area = {
  number: string;
  title: string;
  desc: string;
  tags: string[];
  glyph: React.ReactNode;
  to: string;
};

const areas: Area[] = [
  {
    number: "01 · Penal",
    title: "Direito Penal",
    desc: "Defesa em todas as fases do processo criminal — do flagrante ao Tribunal do Júri. Atuação imediata em prisões, audiências de custódia, habeas corpus e recursos. Foco em proteger seus direitos com clareza e estratégia.",
    tags: [
      "Flagrante",
      "Audiência de custódia",
      "Habeas Corpus",
      "Tribunal do Júri",
      "Recursos",
      "Execução penal",
    ],
    glyph: (
      <svg viewBox="0 0 64 64" className="w-full h-full stroke-[var(--accent)] fill-none" strokeWidth={0.8}>
        <path d="M32 4 L56 16 V32 C56 46 45 56 32 60 C19 56 8 46 8 32 V16 Z" />
        <path d="M22 32 L29 39 L42 26" />
      </svg>
    ),
    to: "/advogado-criminalista-fernandopolis/",
  },
  {
    number: "02 · Família",
    title: "Direito de Família",
    desc: "Casos que envolvem família exigem sensibilidade e técnica. Atuação em divórcio, guarda, pensão alimentícia, união estável, inventário e medidas protetivas — sempre com escuta e respeito ao momento que você está vivendo.",
    tags: [
      "Divórcio",
      "Guarda",
      "Pensão alimentícia",
      "União estável",
      "Inventário",
      "Maria da Penha",
    ],
    glyph: (
      <svg viewBox="0 0 64 64" className="w-full h-full stroke-[var(--accent)] fill-none" strokeWidth={0.8}>
        <circle cx="22" cy="22" r="8" />
        <circle cx="42" cy="22" r="8" />
        <path d="M10 56 C10 46 16 40 22 40 C28 40 34 46 34 56" />
        <path d="M30 56 C30 46 36 40 42 40 C48 40 54 46 54 56" />
      </svg>
    ),
    to: "/advogado-familia-fernandopolis/",
  },
];

export default function Areas() {
  return (
    <section id="areas" className="py-20 sm:py-28 lg:py-36">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-8 md:gap-12 items-end mb-12 lg:mb-16">
          <div>
            <span className="eyebrow">Áreas de atuação</span>
            <h2 className="font-[var(--font-display)] text-[clamp(36px,4.6vw,64px)] leading-[1.05] mt-4 max-w-[14ch]">
              Duas áreas. <em>Atenção</em> total.
            </h2>
          </div>
          <p className="text-[var(--text-soft)] text-[16.5px] max-w-[56ch] leading-relaxed">
            Em vez de oferecer tudo, escolhemos fazer bem o que importa. Atuação concentrada em
            Direito Penal e Direito de Família permite domínio técnico, estratégia personalizada
            e acompanhamento próximo de cada caso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--border-soft)] rounded-[var(--radius-lg)] overflow-hidden border border-[var(--border-soft)]">
          {areas.map((area, i) => (
            <motion.article
              key={area.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="bg-[var(--bg)] p-8 sm:p-10 lg:p-14 flex flex-col gap-5 transition-colors hover:bg-[var(--bg-elev)] relative overflow-hidden"
            >
              <div className="flex justify-between items-start gap-4">
                <span className="font-[var(--font-mono)] text-[11px] text-[var(--text-muted)] tracking-[0.14em]">
                  {area.number}
                </span>
                <div className="w-16 h-16 shrink-0 opacity-85">{area.glyph}</div>
              </div>
              <h3 className="font-[var(--font-display)] text-[clamp(28px,3vw,40px)] leading-[1.15] mb-1">
                {area.title}
              </h3>
              <p className="text-[var(--text-soft)] text-[15.5px] leading-[1.6] max-w-[52ch]">
                {area.desc}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {area.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1.5 bg-[var(--bg-elev-2)] border border-[var(--border-soft)] rounded-full text-[var(--text-soft)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-8 border-t border-dashed border-[var(--border)] flex justify-between items-end gap-4">
                <SmartLink
                  to={area.to}
                  className="inline-flex items-center gap-2 text-[var(--accent)] text-sm font-medium border-b border-transparent hover:border-[var(--accent)] transition-colors pb-0.5"
                >
                  Saber mais
                  <span aria-hidden="true">→</span>
                </SmartLink>
                <SmartLink
                  to="/contato/"
                  className="inline-flex items-center gap-2 text-[var(--text-soft)] text-xs hover:text-[var(--accent)] transition-colors"
                >
                  Falar sobre meu caso →
                </SmartLink>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
