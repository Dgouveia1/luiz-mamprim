import logoImg from "../public/logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-soft)] bg-[#060606] pt-20 pb-8 mt-16">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 pb-14 border-b border-[var(--border-soft)]">
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-3">
              <img src={logoImg} alt="" className="w-10 h-10 rounded-md object-cover" />
              <div>
                <div className="font-[var(--font-display)] text-[20px]">Luiz Mamprin</div>
                <div className="font-[var(--font-mono)] text-[10.5px] text-[var(--text-muted)] tracking-[0.1em] uppercase">
                  OAB/SP 486.984
                </div>
              </div>
            </div>
            <p className="text-[var(--text-soft)] text-sm max-w-[32ch] mt-4">
              Advocacia em Direito Penal e Direito de Família — Fernandópolis, SP e região.
            </p>
          </div>

          <FooterCol title="Áreas">
            <FooterLink href="#areas">Direito Penal</FooterLink>
            <FooterLink href="#areas">Direito de Família</FooterLink>
          </FooterCol>

          <FooterCol title="Site">
            <FooterLink href="#sobre">Sobre mim</FooterLink>
            <FooterLink href="#blog">Blog</FooterLink>
            <FooterLink href="#contato">Contato</FooterLink>
          </FooterCol>

          <FooterCol title="Contato">
            <FooterLink
              href="https://wa.me/5517996324627"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp · (17) 99632-4627
            </FooterLink>
            <FooterLink
              href="https://www.instagram.com/drluizmamprin_adv/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </FooterLink>
            <FooterLink href="#contato">Endereço · Fernandópolis</FooterLink>
          </FooterCol>
        </div>

        <div className="pt-7 flex flex-wrap justify-between items-center gap-4 font-[var(--font-mono)] text-[11px] text-[var(--text-muted)] tracking-[0.08em]">
          <div>© 2026 · Dr. Luiz Henrique Mamprin · OAB/SP 486.984</div>
          <div className="max-w-[60ch]">
            Conteúdo informativo. Não constitui captação de clientes nos termos do Provimento 205/2021 OAB.
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h5 className="font-[var(--font-mono)] text-[11px] text-[var(--text-muted)] tracking-[0.14em] uppercase mb-4 font-medium">
        {title}
      </h5>
      <ul className="list-none p-0 grid gap-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
  target,
  rel,
}: {
  href: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}) {
  return (
    <li>
      <a
        href={href}
        target={target}
        rel={rel}
        className="text-[var(--text-soft)] text-[14.5px] hover:text-[var(--accent)] transition-colors"
      >
        {children}
      </a>
    </li>
  );
}
