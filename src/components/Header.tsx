import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import logoImg from "../public/logo.png";

const navLinks = [
  { href: "#", label: "Início" },
  { href: "#areas", label: "Áreas" },
  { href: "#sobre", label: "Sobre" },
  { href: "#blog", label: "Blog" },
  { href: "#faq", label: "Dúvidas" },
];

const WHATSAPP_URL =
  "https://wa.me/5517996324627?text=Ol%C3%A1%20Dr.%20Luiz%2C%20gostaria%20de%20agendar%20uma%20consulta.";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(10,10,10,0.78)] backdrop-blur-xl backdrop-saturate-150 border-b border-[var(--border-soft)] py-3"
            : "bg-gradient-to-b from-[rgba(10,10,10,0.85)] to-transparent py-4"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <nav className="flex items-center justify-between gap-6" aria-label="Principal">
            <a href="#" className="flex items-center gap-3 shrink-0">
              <img
                src={logoImg}
                alt=""
                className="w-9 h-9 rounded-md object-cover"
              />
              <span className="flex flex-col leading-tight">
                <span className="font-[var(--font-display)] text-[18px] tracking-tight text-[var(--text)] whitespace-nowrap">
                  Luiz Mamprin
                </span>
                <span className="font-[var(--font-mono)] text-[10px] text-[var(--text-muted)] tracking-[0.08em] uppercase">
                  OAB/SP 486.984
                </span>
              </span>
            </a>

            <ul className="hidden lg:flex gap-1 items-center list-none p-0">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="px-4 py-2.5 text-sm text-[var(--text-soft)] rounded-full transition-colors hover:text-[var(--text)]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex gap-2.5 items-center">
              <a
                href="#contato"
                className="hidden lg:inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[var(--border-strong)] text-[var(--text)] text-sm font-medium transition-all hover:bg-[var(--bg-elev)] hover:border-[var(--accent)]"
              >
                Contato
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[var(--accent)] text-[#1a1408] text-sm font-medium transition-all hover:bg-[var(--accent-bright)] hover:-translate-y-0.5"
              >
                Falar agora
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <button
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? "Fechar menu" : "Abrir menu"}
                aria-expanded={open}
                className="lg:hidden w-11 h-11 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--text)]"
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
            className="fixed inset-0 z-40 bg-[rgba(10,10,10,0.96)] backdrop-blur-xl pt-24 px-6 pb-8 flex flex-col gap-2 lg:hidden"
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-[var(--font-display)] py-3.5 border-b border-[var(--border-soft)] text-[var(--text)] hover:text-[var(--accent)] transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="text-2xl font-[var(--font-display)] py-3.5 border-b border-[var(--border-soft)] text-[var(--text)] hover:text-[var(--accent)] transition-colors"
            >
              Contato
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[var(--accent)] text-[#1a1408] font-medium"
            >
              Falar agora no WhatsApp →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
