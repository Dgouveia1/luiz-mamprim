import { motion } from "motion/react";

const steps = [
  {
    n: 1,
    title: "Contato",
    desc: "Você escreve pelo WhatsApp ou fala diretamente. Em casos urgentes, a resposta é imediata, inclusive fora do horário.",
  },
  {
    n: 2,
    title: "Análise",
    desc: "Reunimos documentos e fatos do caso. Avaliamos viabilidade, riscos e melhores estratégias antes de qualquer ação.",
  },
  {
    n: 3,
    title: "Estratégia",
    desc: "Apresentamos um plano claro com etapas, prazos esperados e honorários transparentes. Você decide com informação.",
  },
  {
    n: 4,
    title: "Execução",
    desc: "Atuamos no processo com presença ativa. Você é informado em cada movimento — sem ficar perdido na sua própria causa.",
  },
];

export default function Process() {
  return (
    <section id="processo" className="py-20 sm:py-28 lg:py-36">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-8 md:gap-12 items-end mb-12 lg:mb-16">
          <div>
            <span className="eyebrow">Como funciona</span>
            <h2 className="font-[var(--font-display)] text-[clamp(36px,4.6vw,64px)] leading-[1.05] mt-4 max-w-[14ch]">
              Do <em>primeiro contato</em> à solução.
            </h2>
          </div>
          <p className="text-[var(--text-soft)] text-[16.5px] max-w-[56ch] leading-relaxed">
            Transparência desde o início. Você vai entender o que está em jogo, quais caminhos
            existem e o que será feito a cada etapa — sem juridiquês desnecessário e sem promessas
            de resultado.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="p-7 bg-[var(--bg-elev)] border border-[var(--border-soft)] rounded-[var(--radius-md)] transition-all hover:border-[var(--accent)] hover:-translate-y-0.5"
            >
              <div className="font-[var(--font-display)] text-[40px] leading-none text-[var(--accent)] mb-5 inline-flex items-baseline gap-1">
                <span className="opacity-35">0</span>
                {s.n}
              </div>
              <h4 className="font-[var(--font-body)] text-[16px] font-medium mb-2 text-[var(--text)]">
                {s.title}
              </h4>
              <p className="text-[14.5px] leading-[1.55] text-[var(--text-soft)]">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
