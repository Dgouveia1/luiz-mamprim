import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import LoadingScreen from "./components/LoadingScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Areas from "./components/Areas";
import About from "./components/About";
import Process from "./components/Process";
import BlogPreview from "./components/BlogPreview";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Chatbot from "./components/Chatbot";
import LinkTree from "./components/LinkTree";
import BlogIndexPage from "./pages/BlogIndexPage";
import BlogArticlePage from "./pages/BlogArticlePage";
import BioPage from "./pages/BioPage";
import { WhatsAppIcon } from "./components/WhatsAppIcon";

const WHATSAPP_URL =
  "https://wa.me/5517996324627?text=Ol%C3%A1%20Dr.%20Luiz%2C%20gostaria%20de%20agendar%20uma%20consulta.";

function LandingPage({ isLoading }: { isLoading: boolean }) {
  return (
    <div className="bg-[var(--bg)] min-h-screen text-[var(--text)] selection:bg-[var(--accent)] selection:text-[var(--bg)]">
      <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Header />
          <main>
            <Hero />
            <Marquee />
            <Areas />
            <About />
            <Process />
            <BlogPreview />
            <FAQ />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </div>
  );
}

function ContatoPage() {
  return (
    <div className="bg-[var(--bg)] min-h-screen text-[var(--text)] selection:bg-[var(--accent)] selection:text-[var(--bg)]">
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
              <a href="#" className="hover:text-[var(--accent)] transition-colors">
                Início
              </a>
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

function useHashRoute() {
  const [hash, setHash] = useState<string>(() => window.location.hash || "#");

  useEffect(() => {
    const onChange = () => setHash(window.location.hash || "#");
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  // Strip query/fragment beyond the route part
  const cleaned = hash.split("?")[0] || "#";
  return cleaned;
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const route = useHashRoute();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  // Always scroll to top on route change (except for in-page anchors handled separately)
  useEffect(() => {
    if (
      route === "#contato" ||
      route === "#bio" ||
      route === "#blog" ||
      route.startsWith("#blog/")
    ) {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [route]);

  const isBio = route === "#bio";

  let page: React.ReactNode;
  if (isBio) {
    page = <BioPage />;
  } else if (route === "#contato") {
    page = <ContatoPage />;
  } else if (route === "#blog") {
    page = <BlogIndexPage />;
  } else if (route.startsWith("#blog/")) {
    const slug = route.slice("#blog/".length);
    page = <BlogArticlePage slug={slug} />;
  } else {
    page = <LandingPage isLoading={isLoading} />;
  }

  return (
    <>
      {page}

      {/* Floating WhatsApp + Chatbot ficam fora da página /bio (a /bio já é só botões) */}
      {!isLoading && !isBio && (
        <>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
            className="fixed bottom-6 left-6 z-40 bg-[#25d366] hover:bg-[#2cea73] text-[#0a1f10] p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center justify-center"
          >
            <WhatsAppIcon className="w-6 h-6" />
          </a>
          <Chatbot />
        </>
      )}
    </>
  );
}
