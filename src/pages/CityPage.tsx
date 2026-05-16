import { useLocation, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import SmartLink from "../components/SmartLink";
import { getCityBySlug, cityPages } from "../data/cities";
import { servicePages } from "../data/services";
import NotFoundPage from "./NotFoundPage";

const SITE_URL = "https://luizmamprin.adv.br";
const WHATSAPP_URL =
  "https://wa.me/5517996324627?text=Ol%C3%A1%20Dr.%20Luiz%2C%20gostaria%20de%20agendar%20uma%20consulta.";

export type CityPageProps = { slug?: string };

export default function CityPage({ slug: slugProp }: CityPageProps) {
  const params = useParams();
  const location = useLocation();
  const pathSlug = location.pathname.replace(/^\/+|\/+$/g, "");
  const slug = slugProp || params.slug || pathSlug;
  const city = getCityBySlug(slug);

  if (!city) return <NotFoundPage />;

  const otherCities = cityPages.filter((c) => c.slug !== city.slug).slice(0, 4);
  const featuredServices = servicePages.slice(0, 6);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": ["Attorney", "LegalService"],
      name: `${city.name} — Dr. Luiz Mamprin Advocacia`,
      description: city.metaDescription,
      url: `${SITE_URL}/${city.slug}`,
      provider: { "@id": `${SITE_URL}/#attorney` },
      areaServed: { "@type": "City", name: city.name, address: { "@type": "PostalAddress", addressRegion: "SP", addressCountry: "BR" } },
      telephone: "+55-17-99632-4627",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Manoel Marquês Rosa, 1075",
        addressLocality: "Fernandópolis",
        addressRegion: "SP",
        addressCountry: "BR",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: `Advogado em ${city.name}`,
          item: `${SITE_URL}/${city.slug}`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: city.faq.map((q) => ({
        "@type": "Question",
        name: q.q,
        acceptedAnswer: { "@type": "Answer", text: q.a },
      })),
    },
  ];

  return (
    <div className="bg-[var(--bg)] min-h-screen text-[var(--text)] selection:bg-[var(--accent)] selection:text-[var(--bg)]">
      <Seo
        title={city.title}
        description={city.metaDescription}
        canonicalPath={`/${city.slug}`}
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
          <div className="relative max-w-[820px] mx-auto px-5 sm:px-8 lg:px-12">
            <nav
              className="flex gap-2 items-center font-[var(--font-mono)] text-[11px] text-[var(--text-muted)] tracking-[0.1em] uppercase mb-6 flex-wrap"
              aria-label="Breadcrumb"
            >
              <SmartLink to="/" className="hover:text-[var(--accent)] transition-colors">
                Início
              </SmartLink>
              <span className="opacity-50">/</span>
              <span className="text-[var(--accent)]">Advogado em {city.name}</span>
            </nav>
            <span className="eyebrow">
              {city.distance} · {city.comarca}
            </span>
            <h1 className="font-[var(--font-display)] text-[clamp(36px,5vw,68px)] leading-[1.05] mt-5">
              {city.h1}
            </h1>
            <div className="mt-7 space-y-4 text-[clamp(17px,1.3vw,19px)] text-[var(--text-soft)] leading-[1.6] max-w-[62ch]">
              {city.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-[var(--accent)] text-[#1a1408] font-medium transition-all hover:bg-[var(--accent-bright)] hover:-translate-y-0.5"
              >
                Falar pelo WhatsApp
                <span aria-hidden="true">→</span>
              </a>
              <SmartLink
                to="/contato"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-[var(--border-strong)] text-[var(--text)] font-medium transition-all hover:bg-[var(--bg-elev)] hover:border-[var(--accent)]"
              >
                Outros canais
              </SmartLink>
            </div>
          </div>
        </section>

        <article className="px-5 sm:px-8 py-10">
          <div className="prose">
            <h2>Atuação em {city.name}</h2>
            {city.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <h2>Áreas atendidas</h2>
            <ul>
              {city.attendance.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>

            <h2>Perguntas frequentes — {city.name}</h2>
            {city.faq.map((qa, i) => (
              <div key={i}>
                <h3>{qa.q}</h3>
                <p>{qa.a}</p>
              </div>
            ))}

            <hr />
            <p style={{ fontSize: "14px", color: "var(--text-muted)" }}>
              Conteúdo informativo. Não substitui orientação profissional. OAB/SP 486.984.
            </p>
          </div>
        </article>

        <section className="max-w-[1080px] mx-auto px-5 sm:px-8 lg:px-12 mt-12">
          <div className="border-t border-[var(--border-soft)] pt-12">
            <span className="eyebrow">Serviços oferecidos</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {featuredServices.map((s) => (
                <SmartLink
                  key={s.slug}
                  to={`/${s.slug}`}
                  className="block p-6 border border-[var(--border-soft)] rounded-[var(--radius-md)] bg-[var(--bg-elev)] hover:border-[var(--accent)] transition-colors"
                >
                  <div className="font-[var(--font-mono)] text-[10.5px] text-[var(--accent)] tracking-[0.12em] uppercase mb-2">
                    {s.area === "penal" ? "Penal" : "Família"}
                  </div>
                  <div className="font-[var(--font-display)] text-[20px] leading-[1.2] text-[var(--text)]">
                    {s.navLabel}
                  </div>
                </SmartLink>
              ))}
            </div>
          </div>
        </section>

        {otherCities.length > 0 && (
          <section className="max-w-[1080px] mx-auto px-5 sm:px-8 lg:px-12 mt-12">
            <div className="border-t border-[var(--border-soft)] pt-12">
              <span className="eyebrow">Outras cidades atendidas</span>
              <div className="flex flex-wrap gap-2.5 mt-6">
                {otherCities.map((c) => (
                  <SmartLink
                    key={c.slug}
                    to={`/${c.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border-soft)] text-[var(--text-soft)] text-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                  >
                    {c.name} →
                  </SmartLink>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
