import Header from "../components/Header";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import SmartLink from "../components/SmartLink";

export default function NotFoundPage() {
  return (
    <div className="bg-[var(--bg)] min-h-screen text-[var(--text)]">
      <Seo
        title="Página não encontrada — Dr. Luiz Mamprin"
        description="A página que você procurou não existe ou foi movida."
        canonicalPath="/404"
        noindex
      />
      <Header />
      <main className="pt-40 pb-24">
        <div className="max-w-[680px] mx-auto px-5 text-center">
          <span className="eyebrow no-rule">404</span>
          <h1 className="font-[var(--font-display)] text-[clamp(36px,5vw,56px)] mt-4 mb-6">
            Página não encontrada.
          </h1>
          <p className="text-[var(--text-soft)] mb-8">
            A página que você procurou não existe ou foi movida.
          </p>
          <SmartLink
            to="/"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-[var(--accent)] text-[#1a1408] font-medium"
          >
            Voltar para o início →
          </SmartLink>
        </div>
      </main>
      <Footer />
    </div>
  );
}
