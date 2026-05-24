import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { ClientOnly } from "vite-react-ssg";
import Seo from "../components/Seo";

export default function NotFoundPage() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.pathname !== "/") {
      window.location.replace("/");
    }
  }, []);

  return (
    <>
      <Seo
        title="Dr. Luiz Mamprin — Advogado em Fernandópolis"
        description="Redirecionando para a página inicial."
        canonicalPath="/"
        noindex
      />
      <ClientOnly>{() => <Navigate to="/" replace />}</ClientOnly>
    </>
  );
}
