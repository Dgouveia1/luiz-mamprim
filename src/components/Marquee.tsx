const items = [
  "Defesa Criminal",
  "Habeas Corpus",
  "Tribunal do Júri",
  "Divórcio Consensual",
  "Guarda Compartilhada",
  "Pensão Alimentícia",
  "Inventário",
  "Medidas Protetivas",
  "Recursos Criminais",
];

function MarqueeRow() {
  return (
    <span className="inline-flex items-center gap-8 font-[var(--font-display)] text-[clamp(24px,3vw,40px)] text-[var(--text-muted)] pr-16">
      {items.map((item, i) => (
        <span key={i} className="inline-flex items-center gap-8">
          <span>{item}</span>
          <em className="italic text-[var(--accent)]">·</em>
        </span>
      ))}
    </span>
  );
}

export default function Marquee() {
  return (
    <div className="border-y border-[var(--border-soft)] py-7 overflow-hidden relative" aria-hidden="true">
      <div className="marquee-track">
        <MarqueeRow />
        <MarqueeRow />
      </div>
    </div>
  );
}
