import Header from "../components/Header";
import Footer from "../components/Footer";
import LinkTree from "../components/LinkTree";
import Seo from "../components/Seo";
import SmartLink from "../components/SmartLink";

const SITE_URL = "https://luizmamprin.adv.br";

export default function ContatoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: `${SITE_URL}/contato`,
    name: "Contato — Dr. Luiz Mamprin Advocacia",
    description:
      "Canais de contato com o escritório do Dr. Luiz Henrique Mamprin — WhatsApp, Instagram, endereço e horários.",
    publisher: { "@id": `${SITE_URL}/#attorney` },
  };

  return (
    <div className="bg-[var(--bg)] min-h-screen text-[var(--text)] selection:bg-[var(--accent)] selection:text-[var(--bg)]">
      <Seo
        title="Contato — Dr. Luiz Mamprin | Advogado em Fernandópolis"
        description="Canais de contato com o escritório do Dr. Luiz Mamprin em Fernandópolis. WhatsApp (17) 99632-4627, Instagram, endereço e horários."
        canonicalPath="/contato"
        jsonLd={jsonLd}
      />
      <Header />
      <main className="pt-32 pb-20">
        <section className="relative overflow-hidden pb-12">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 80% 0%, rgba(212,165,116,0.18), transparent 60%)",
            }}
          />
          <div className="relative max-w-[920px] mx-auto px-5 sm:px-8 lg:px-12">
            <nav
              className="flex gap-2 items-center font-[var(--font-mono)] text-[11px] text-[var(--text-muted)] tracking-[0.1em] uppercase mb-6"
              aria-label="Breadcrumb"
            >
              <SmartLink to="/" className="hover:text-[var(--accent)] transition-colors">
                Início
              </SmartLink>
              <span className="opacity-50">/</span>
              <span>Contato</span>
            </nav>
            <span className="eyebrow">Contato</span>
            <h1 className="font-[var(--font-display)] text-[clamp(44px,6vw,84px)] leading-[1.05] mt-5">
              Conte o que está <em>acontecendo</em>.
            </h1>
            <p className="text-[clamp(17px,1.3vw,21px)] text-[var(--text)] leading-[1.55] mt-6 max-w-[60ch]">
              Você pode escolher o canal que prefere. Mensagens recebem retorno no mesmo dia útil
              — em casos criminais urgentes, a resposta é imediata.
            </p>
          </div>
        </section>

        <section className="py-10">
          <LinkTree />
        </section>
      </main>
      <Footer />
    </div>
  );
}
