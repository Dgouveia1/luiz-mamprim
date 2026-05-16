import { motion } from "motion/react";
import { blogPosts } from "../data/blog";
import SmartLink from "./SmartLink";

export default function BlogPreview() {
  return (
    <section id="blog-preview" className="py-20 sm:py-28 lg:py-36 bg-[var(--bg-elev)]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-8 md:gap-12 items-end mb-12 lg:mb-16">
          <div>
            <span className="eyebrow">Conteúdo</span>
            <h2 className="font-[var(--font-display)] text-[clamp(36px,4.6vw,64px)] leading-[1.05] mt-4 max-w-[14ch]">
              <em>Saber</em> também é defesa.
            </h2>
          </div>
          <p className="text-[var(--text-soft)] text-[16.5px] max-w-[56ch] leading-relaxed">
            Conteúdo informativo e atualizado para você entender seus direitos antes que precise
            deles. Sem promessas, sem captação — apenas explicação clara, com base na lei e na
            experiência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <SmartLink
                to={`/blog/${post.slug}`}
                className="flex flex-col gap-3.5 p-7 bg-[var(--bg)] border border-[var(--border-soft)] rounded-[var(--radius-md)] transition-all hover:border-[var(--accent)] hover:-translate-y-0.5 h-full"
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
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <SmartLink
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-[var(--border-strong)] text-[var(--text)] font-medium transition-all hover:bg-[var(--bg-elev-2)] hover:border-[var(--accent)]"
          >
            Ver todos os artigos
            <span aria-hidden="true">→</span>
          </SmartLink>
        </div>
      </div>
    </section>
  );
}
