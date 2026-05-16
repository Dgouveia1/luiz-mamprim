import { Head } from "vite-react-ssg";

type Props = {
  title: string;
  description: string;
  canonicalPath: string;
  ogImage?: string;
  type?: "website" | "article" | "profile";
  jsonLd?: object | object[];
  publishedAt?: string;
  noindex?: boolean;
};

const SITE_URL = "https://luizmamprin.adv.br";
const DEFAULT_OG_IMAGE = `${SITE_URL}/perfil.png`;

export default function Seo({
  title,
  description,
  canonicalPath,
  ogImage,
  type = "website",
  jsonLd,
  publishedAt,
  noindex,
}: Props) {
  const fullCanonical = `${SITE_URL}${
    canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`
  }`;
  const image = ogImage || DEFAULT_OG_IMAGE;

  const ldArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {noindex ? (
        <meta name="robots" content="noindex, follow" />
      ) : (
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
      )}

      <link rel="canonical" href={fullCanonical} />

      <meta property="og:type" content={type} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="Dr. Luiz Mamprin — Advocacia" />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {publishedAt && <meta property="article:published_time" content={publishedAt} />}

      {ldArray.map((ld, i) => (
        <script key={`ld-${i}`} type="application/ld+json">
          {JSON.stringify(ld)}
        </script>
      ))}
    </Head>
  );
}

export { SITE_URL, DEFAULT_OG_IMAGE };
