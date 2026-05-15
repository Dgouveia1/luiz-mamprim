import Header from "../components/Header";
import Footer from "../components/Footer";
import { getPostBySlug, type BlogBlock } from "../data/blog";

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

export default function BlogArticlePage({ slug }: { slug: string }) {
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="bg-[var(--bg)] min-h-screen text-[var(--text)]">
        <Header />
        <main className="pt-40 pb-24">
          <div className="max-w-[680px] mx-auto px-5 text-center">
            <span className="eyebrow no-rule">404</span>
            <h1 className="font-[var(--font-display)] text-[clamp(36px,5vw,56px)] mt-4 mb-6">
              Artigo não encontrado.
            </h1>
            <p className="text-[var(--text-soft)] mb-8">
              O artigo que você procurou não existe ou foi movido.
            </p>
            <a
              href="#blog"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-[var(--accent)] text-[#1a1408] font-medium"
            >
              Ver todos os artigos →
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-[var(--bg)] min-h-screen text-[var(--text)] selection:bg-[var(--accent)] selection:text-[var(--bg)]">
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
              <a href="#" className="hover:text-[var(--accent)] transition-colors">
                Início
              </a>
              <span className="opacity-50">/</span>
              <a href="#blog" className="hover:text-[var(--accent)] transition-colors">
                Blog
              </a>
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
            <a
              href="#blog"
              className="inline-flex items-center gap-2 text-[var(--text-soft)] text-sm hover:text-[var(--accent)] transition-colors"
            >
              <span aria-hidden="true">←</span>
              Voltar para o blog
            </a>
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
