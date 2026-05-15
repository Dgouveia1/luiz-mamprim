import { useState } from "react";
import { faqItems } from "../data/faq";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-28 lg:py-36">
      <div className="max-w-[920px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="mb-12 lg:mb-16">
          <span className="eyebrow">Dúvidas frequentes</span>
          <h2 className="font-[var(--font-display)] text-[clamp(36px,4.6vw,64px)] leading-[1.05] mt-4">
            Antes de <em>nos falar</em>.
          </h2>
        </div>

        <div className="border-t border-[var(--border-soft)]">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`faq-item border-b border-[var(--border-soft)] py-6 sm:py-7 ${
                  isOpen ? "is-open" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex justify-between items-start gap-6 text-left font-[var(--font-display)] text-[clamp(20px,1.8vw,26px)] leading-[1.2] text-[var(--text)] transition-colors hover:text-[var(--accent)]"
                >
                  <span>{item.question}</span>
                  <span
                    className={`shrink-0 w-9 h-9 rounded-full border flex items-center justify-center relative transition-colors ${
                      isOpen
                        ? "bg-[var(--accent)] border-[var(--accent)]"
                        : "border-[var(--border)]"
                    }`}
                    aria-hidden="true"
                  >
                    <span
                      className={`absolute w-3 h-px ${
                        isOpen ? "bg-[var(--bg)]" : "bg-[var(--text)]"
                      }`}
                    />
                    <span
                      className={`absolute h-3 w-px transition-transform ${
                        isOpen ? "bg-[var(--bg)] scale-y-0" : "bg-[var(--text)]"
                      }`}
                    />
                  </span>
                </button>
                <div className="faq-answer">
                  <div className="pt-5 text-[15.5px] text-[var(--text-soft)] leading-[1.65] max-w-[72ch]">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
