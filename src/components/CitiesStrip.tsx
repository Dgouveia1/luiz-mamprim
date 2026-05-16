import SmartLink from "./SmartLink";
import { cityPages } from "../data/cities";

export default function CitiesStrip() {
  return (
    <section
      id="cidades"
      className="py-16 sm:py-20 lg:py-24 border-t border-[var(--border-soft)] bg-[var(--bg)]"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-8 md:gap-12 items-end mb-10">
          <div>
            <span className="eyebrow">Cidades atendidas</span>
            <h2 className="font-[var(--font-display)] text-[clamp(30px,3.8vw,52px)] leading-[1.08] mt-4 max-w-[18ch]">
              Em <em>toda</em> a região noroeste paulista.
            </h2>
          </div>
          <p className="text-[var(--text-soft)] text-[16px] max-w-[56ch] leading-relaxed">
            Escritório em Fernandópolis e atuação direta nas comarcas vizinhas — com deslocamento
            imediato para urgências penais e suporte on-line contínuo.
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5">
          <span
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[var(--accent)] text-[#1a1408] font-medium text-sm"
            aria-label="Sede em Fernandópolis"
          >
            Fernandópolis · sede
          </span>
          {cityPages.map((c) => (
            <SmartLink
              key={c.slug}
              to={`/${c.slug}/`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[var(--border)] text-[var(--text-soft)] text-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              {c.name}
              <span className="text-[10px] opacity-60">{c.distance}</span>
            </SmartLink>
          ))}
        </div>
      </div>
    </section>
  );
}
