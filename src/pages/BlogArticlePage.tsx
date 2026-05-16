import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import SmartLink from "../components/SmartLink";
import { getPostBySlug, type BlogBlock } from "../data/blog";
import NotFoundPage from "./NotFoundPage";

const SITE_URL = "https://luizmamprin.adv.br";

function renderBlock(block: BlogBlock, i: number) {
  switch (block.kind) {
    case "h2":
      return <h2 key={i}>{block.text}</h2>;
    case "h3":
      return <h3 key={i}>{block.text}</h3>;
    case "p":
      return <p key={i}>{block.text}</p>;
    case "ul":
      return (
        <ul key={i}>
          {block.items.map((it, j) => (
            <li key={j}>{it}</li>
          ))}
        </ul>
      );
    case "quote":
      return <blockquote key={i}>{block.text}</blockquote>;
    case "hr":
      return <hr key={i} />;
    default:
      return null;
  }
}

export type BlogArticlePageProps = { slug?: string };

export default function BlogArticlePage({ slug: slugProp }: BlogArticlePageProps) {
  const params = useParams();
  const slug = slugProp || params.slug || "";
  const post = getPostBySlug(slug);

  if (!post) return <NotFoundPage />;

  const summary = post.body
    .filter((b): b is { kind: "p"; text: string } => b.kind === "p")
    .map((b) => b.text)
    .join(" ")
    .slice(0, 200);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${post.slug}`,
      datePublished: post.publishedAt,
      dateModified: post.publishedAt,
      author: { "@id": `${SITE_URL}/#person` },
      publisher: { "@id": `${SITE_URL}/#attorney` },
      mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
      articleSection: post.category === "Penal" ? "Direito Penal" : "Direito de Família",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
      ],
    },
  ];

  return (
    <div className="bg-[var(--bg)] min-h-screen text-[var(--text)] selection:bg-[var(--accent)] selection:text-[var(--bg)]">
      <Seo
        title={`${post.title} | Blog — Dr. Luiz Mamprin`}
        description={post.excerpt || summary}
        canonicalPath={`/blog/${post.slug}`}
        type="article"
        publishedAt={post.publishedAt}
        jsonLd={jsonLd}
      />
      <Header />

      <main className="pt-32 pb-20">
        <section className="relative overflow-hidden pb-10">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 80% 0%, rgba(212,165,116,0.18), transparent 60%)",
            }}
          />
          <div className="relative max-w-[760px] mx-auto px-5 sm:px-8">
            <nav
              className="flex gap-2 items-center font-[var(--font-mono)] text-[11px] text-[var(--text-muted)] tracking-[0.1em] uppercase mb-6 flex-wrap"
              aria-label="Breadcrumb"
            >
              <SmartLink to="/" className="hover:text-[var(--accent)] transition-colors">
                Início
              </SmartLink>
              <span className="opacity-50">/</span>
              <SmartLink to="/blog" className="hover:text-[var(--accent)] transition-colors">
                Blog
              </SmartLink>
              <span className="opacity-50">/</span>
              <span className="text-[var(--accent)]">{post.category}</span>
            </nav>
            <span className="eyebrow">{post.category}</span>
            <h1 className="font-[var(--font-display)] text-[clamp(36px,5vw,68px)] leading-[1.05] mt-5 mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap gap-4 items-center font-[var(--font-mono)] text-[11px] text-[var(--text-muted)] tracking-[0.08em] uppercase">
              <span>{post.readTime}</span>
              <span>·</span>
              <span>Publicado em {formatDate(post.publishedAt)}</span>
            </div>
          </div>
        </section>

        <article className="px-5 sm:px-8">
          <div className="prose">{post.body.map(renderBlock)}</div>
        </article>

        <section className="mt-20 px-5 sm:px-8">
          <div className="max-w-[680px] mx-auto pt-10 border-t border-[var(--border-soft)] flex flex-wrap justify-between items-center gap-4">
            <SmartLink
              to="/blog"
              className="inline-flex items-center gap-2 text-[var(--text-soft)] text-sm hover:text-[var(--accent)] transition-colors"
            >
              <span aria-hidden="true">←</span>
              Voltar para o blog
            </SmartLink>
            <a
              href="https://wa.me/5517996324627?text=Ol%C3%A1%20Dr.%20Luiz%2C%20li%20o%20artigo%20no%20site%20e%20gostaria%20de%20conversar."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[var(--accent)] text-[#1a1408] text-sm font-medium hover:bg-[var(--accent-bright)] transition-colors"
            >
              Falar sobre meu caso →
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function formatDate(iso: string): string {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}
