type Props = {
  avif?: string;
  webp?: string;
  fallback: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  style?: React.CSSProperties;
  loading?: "eager" | "lazy";
  fetchPriority?: "auto" | "high" | "low";
  decoding?: "async" | "sync" | "auto";
  sizes?: string;
};

export default function Picture({
  avif,
  webp,
  fallback,
  alt,
  width,
  height,
  className,
  style,
  loading = "lazy",
  fetchPriority = "auto",
  decoding = "async",
  sizes,
}: Props) {
  return (
    <picture>
      {avif && <source type="image/avif" srcSet={avif} sizes={sizes} />}
      {webp && <source type="image/webp" srcSet={webp} sizes={sizes} />}
      <img
        src={fallback}
        alt={alt}
        width={width}
        height={height}
        className={className}
        style={style}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding={decoding}
      />
    </picture>
  );
}
