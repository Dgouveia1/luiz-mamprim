import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Areas from "../components/Areas";
import ServicesGrid from "../components/ServicesGrid";
import CitiesStrip from "../components/CitiesStrip";
import About from "../components/About";
import Process from "../components/Process";
import BlogPreview from "../components/BlogPreview";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Seo from "../components/Seo";
import { faqItems } from "../data/faq";
import { servicePages } from "../data/services";
import { cityPages } from "../data/cities";

const SITE_URL = "https://luizmamprin.adv.br";

export default function HomePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": ["Attorney", "LegalService", "LocalBusiness"],
      "@id": `${SITE_URL}/#attorney`,
      name: "Dr. Luiz Henrique Mamprin — Advocacia",
      alternateName: "Dr. Luiz Mamprin Advogado",
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/src/public/logo.png`,
      image: `${SITE_URL}/perfil.png`,
      description:
        "Advocacia especializada em Direito Penal e Direito de Família em Fernandópolis/SP e região noroeste paulista. Atendimento humanizado, defesa estratégica e urgências penais 24h.",
      telephone: "+55-17-99632-4627",
      email: "contato@luizmamprin.adv.br",
      priceRange: "$$",
      currenciesAccepted: "BRL",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Manoel Marquês Rosa, 1075, 10º andar, sala 103",
        addressLocality: "Fernandópolis",
        addressRegion: "SP",
        postalCode: "15600-016",
        addressCountry: "BR",
      },
      geo: { "@type": "GeoCoordinates", latitude: -20.2839, longitude: -50.2466 },
      areaServed: cityPages
        .map((c) => ({ "@type": "City", name: c.name }))
        .concat([{ "@type": "City", name: "Fernandópolis" }] as any),
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:30",
          closes: "18:00",
        },
      ],
      knowsLanguage: ["pt-BR"],
      sameAs: ["https://www.instagram.com/drluizmamprin_adv/"],
      founder: { "@id": `${SITE_URL}/#person` },
      employee: { "@id": `${SITE_URL}/#person` },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        bestRating: "5",
        reviewCount: "8",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Áreas de atuação",
        itemListElement: servicePages.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.navLabel,
            url: `${SITE_URL}/${s.slug}`,
          },
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Luiz Henrique Mamprin",
      honorificPrefix: "Dr.",
      jobTitle: "Advogado",
      image: `${SITE_URL}/perfil.png`,
      url: `${SITE_URL}/`,
      telephone: "+55-17-99632-4627",
      worksFor: { "@id": `${SITE_URL}/#attorney` },
      alumniOf: { "@type": "CollegeOrUniversity", name: "Universidade Brasil (UB)" },
      memberOf: {
        "@type": "Organization",
        name: "Ordem dos Advogados do Brasil — Seccional São Paulo",
        alternateName: "OAB/SP",
      },
      identifier: "OAB/SP 486.984",
      knowsAbout: [
        "Direito Penal",
        "Direito de Família",
        "Habeas Corpus",
        "Tribunal do Júri",
        "Divórcio",
        "Guarda compartilhada",
        "Pensão alimentícia",
        "Inventário",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Fernandópolis",
        addressRegion: "SP",
        addressCountry: "BR",
      },
      sameAs: ["https://www.instagram.com/drluizmamprin_adv/"],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Dr. Luiz Mamprin — Advocacia",
      inLanguage: "pt-BR",
      publisher: { "@id": `${SITE_URL}/#attorney` },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((q) => ({
        "@type": "Question",
        name: q.question,
        acceptedAnswer: { "@type": "Answer", text: q.answer },
      })),
    },
  ];

  return (
    <div className="bg-[var(--bg)] min-h-screen text-[var(--text)] selection:bg-[var(--accent)] selection:text-[var(--bg)]">
      <Seo
        title="Advogado em Fernandópolis — Direito Penal e Família | Dr. Luiz Mamprin"
        description="Advogado criminalista e de família em Fernandópolis/SP. Atendimento em Votuporanga, Jales, Estrela d'Oeste, Meridiano, Pedranópolis, Macedônia e Mira Estrela. Agende pelo WhatsApp (17) 99632-4627."
        canonicalPath="/"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Areas />
        <ServicesGrid />
        <CitiesStrip />
        <About />
        <Process />
        <BlogPreview />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
