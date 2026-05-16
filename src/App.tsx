import { Outlet, useLocation } from "react-router-dom";
import type { RouteRecord } from "vite-react-ssg";
import { ClientOnly } from "vite-react-ssg";
import ScrollToHash from "./components/ScrollToHash";
import { servicePages } from "./data/services";
import { cityPages } from "./data/cities";
import { blogPosts } from "./data/blog";
import Chatbot from "./components/Chatbot";
import { WhatsAppIcon } from "./components/WhatsAppIcon";

import HomePage from "./pages/HomePage";
import ContatoPage from "./pages/ContatoPage";
import BioPage from "./pages/BioPage";
import BlogIndexPage from "./pages/BlogIndexPage";
import BlogArticlePage from "./pages/BlogArticlePage";
import ServicePage from "./pages/ServicePage";
import CityPage from "./pages/CityPage";
import NotFoundPage from "./pages/NotFoundPage";

const WHATSAPP_URL =
  "https://wa.me/5517996324627?text=Ol%C3%A1%20Dr.%20Luiz%2C%20gostaria%20de%20agendar%20uma%20consulta.";

function FloatingActions() {
  const { pathname } = useLocation();
  if (pathname.startsWith("/bio")) return null;
  return (
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
      <ClientOnly>{() => <Chatbot />}</ClientOnly>
    </>
  );
}

export default function Layout() {
  return (
    <>
      <ScrollToHash />
      <Outlet />
      <FloatingActions />
    </>
  );
}

export const routes: RouteRecord[] = [
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage, entry: "src/pages/HomePage.tsx" },
      { path: "contato", Component: ContatoPage, entry: "src/pages/ContatoPage.tsx" },
      { path: "bio", Component: BioPage, entry: "src/pages/BioPage.tsx" },
      { path: "blog", Component: BlogIndexPage, entry: "src/pages/BlogIndexPage.tsx" },
      {
        path: "blog/:slug",
        Component: BlogArticlePage,
        entry: "src/pages/BlogArticlePage.tsx",
        getStaticPaths: () => blogPosts.map((p) => `blog/${p.slug}`),
      },
      ...servicePages.map(
        (s): RouteRecord => ({
          path: s.slug,
          Component: ServicePage,
          entry: "src/pages/ServicePage.tsx",
        })
      ),
      ...cityPages.map(
        (c): RouteRecord => ({
          path: c.slug,
          Component: CityPage,
          entry: "src/pages/CityPage.tsx",
        })
      ),
      { path: "*", Component: NotFoundPage, entry: "src/pages/NotFoundPage.tsx" },
    ],
  },
];
