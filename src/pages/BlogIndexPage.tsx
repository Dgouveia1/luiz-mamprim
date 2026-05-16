import Header from "../components/Header";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import SmartLink from "../components/SmartLink";
import { blogPosts } from "../data/blog";

const SITE_URL = "https://luizmamprin.adv.br";

export default function BlogIndexPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      "@id": `${SITE_URL}/blog`,
      url: `${SITE_URL}/blog`,
      name: "Blog jurídico — Dr. Luiz Mamprin",
      description:
        "Artigos sobre Direito Penal e Direito de Família escritos para serem entendidos.",
      publisher: { "@id": `${SITE_URL}/#attorney` },
      blogPost: blogPosts.map((p) => ({
        "@type": "BlogPosting",
        headline: p.title,
        url: `${SITE_URL}/blog/${p.slug}`,
        datePublished: p.publishedAt,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      ],
    },
  ];

  return (
    <div className="bg-[var(--bg)] min-h-screen text-[var(--text)] selection:bg-[var(--accent)] selection:text-[var(--bg)]">
      <Seo
        title="Blog jurídico — Dr. Luiz Mamprin | Direito Penal e Família"
        description="Artigos sobre Direito Penal e Direito de Família em Fernandópolis e região. Flagrante, divórcio, guarda, pensão, inventário e mais."
        canonicalPath="/blog"
        jsonLd={jsonLd}
      />
      <Header />

      <main className="pt-32 pb-20">
        <section className="relative overflow-hidden pb-12 sm:pb-16">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 80% 0%, rgba(212,165,116,0.18), transparent 60%)",
            }}
          />
          <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
            <nav
              className="flex gap-2 items-center font-[var(--font-mono)] text-[11px] text-[var(--text-muted)] tracking-[0.1em] uppercase mb-6"
              aria-label="Breadcrumb"
            >
              <SmartLink to="/" className="hover:text-[var(--accent)] transition-colors">
                Início
              </SmartLink>
              <span className="opacity-50">/</span>
              <span>Blog</span>
            </nav>
            <span className="eyebrow">Conteúdo jurídico</span>
            <h1 className="font-[var(--font-display)] text-[clamp(44px,6vw,84px)] leading-[1.05] mt-5">
              <em>Saber</em> também é defesa.
            </h1>
            <p className="text-[clamp(17px,1.3vw,21px)] text-[var(--text)] leading-[1.55] mt-6 max-w-[60ch]">
              Artigos sobre Direito Penal e Direito de Família — escritos para serem entendidos.
              Conhecimento que protege antes da necessidade.
            </p>
          </div>
        </section>

        <section className="pt-4 pb-10">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
            <SmartLink
              to={`/blog/${featured.slug}`}
              className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12 items-center p-6 sm:p-8 bg-[var(--bg-elev)] border border-[var(--border-soft)] rounded-[var(--radius-lg)] transition-colors hover:border-[var(--accent)]"
            >
              <div>
                <div className="flex gap-3 items-center font-[var(--font-mono)] text-[11px] text-[var(--text-muted)] tracking-[0.06em] uppercase mb-4">
                  <span className="text-[var(--accent)]">Destaque</span>
                  <span>·</span>
                  <span>{featured.category}</span>
                  <span>·</span>
                  <span>{featured.tag}</span>
                </div>
                <h2 className="font-[var(--font-display)] text-[clamp(28px,3.4vw,46px)] leading-[1.1]">
                  {featured.title}
                </h2>
                <p className="mt-5 text-[17px] leading-[1.6] text-[var(--text-soft)] max-w-[60ch]">
                  {featured.excerpt}
                </p>
                <div className="mt-7 flex gap-3.5 items-center flex-wrap">
                  <span className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[var(--accent)] text-[#1a1408] text-sm font-medium">
                    Ler artigo completo
                    <span aria-hidden="true">→</span>
                  </span>
                  <span className="font-[var(--font-mono)] text-[11px] text-[var(--text-muted)] tracking-[0.08em] uppercase">
                    {featured.readTime}
                  </span>
                </div>
              </div>
              <div
                className="aspect-[4/5] rounded-[var(--radius-md)] flex items-center justify-center relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(160deg, #1c1c1c 0%, #2a1f12 100%)",
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(180deg, transparent 0, transparent 8px, rgba(212,165,116,.08) 8px, rgba(212,165,116,.08) 9px)",
                  }}
                />
                <div className="relative text-center p-6">
                  <div className="font-[var(--font-display)] text-[80px] leading-none text-[var(--accent)]">
                    §
                  </div>
                  <div className="mt-3 font-[var(--font-mono)] text-[10px] tracking-[0.18em] uppercase text-[var(--text-muted)]">
                    Direito {featured.category}
                  </div>
                </div>
              </div>
            </SmartLink>
          </div>
        </section>

        <section className="py-10">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {rest.map((post) => (
                <SmartLink
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="flex flex-col gap-3.5 p-7 bg-[var(--bg-elev)] border border-[var(--border-soft)] rounded-[var(--radius-md)] transition-all hover:border-[var(--accent)] hover:-translate-y-0.5 h-full"
                >
                  <div className="flex gap-3 items-center font-[var(--font-mono)] text-[11px] text-[var(--text-muted)] tracking-[0.06em] uppercase">
                    <span className="text-[var(--accent)]">{post.category}</span>
                    <span>·</span>
                    <span>{post.tag}</span>
                  </div>
                  <h3 className="font-[var(--font-display)] text-[22px] leading-[1.2] text-[var(--text)]">
                    {post.title}
                  </h3>
                  <p className="text-[14.5px] leading-[1.55] text-[var(--text-soft)] flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center pt-3.5 border-t border-[var(--border-soft)] font-[var(--font-mono)] text-[11px] text-[var(--text-muted)] tracking-[0.08em]">
                    <span>{post.readTime}</span>
                    <span aria-hidden="true">→</span>
                  </div>
                </SmartLink>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
