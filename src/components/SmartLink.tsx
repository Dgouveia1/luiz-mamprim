import { Link, useLocation } from "react-router-dom";

type Props = {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  ariaLabel?: string;
};

export default function SmartLink({
  to,
  children,
  className,
  onClick,
  target,
  rel,
  ariaLabel,
}: Props) {
  const location = useLocation();

  const isExternal = /^https?:\/\//.test(to) || to.startsWith("mailto:") || to.startsWith("tel:");
  if (isExternal) {
    return (
      <a href={to} className={className} onClick={onClick} target={target} rel={rel} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  const isAnchor = to.startsWith("#");
  if (isAnchor) {
    if (location.pathname === "/") {
      return (
        <a href={to} className={className} onClick={onClick} aria-label={ariaLabel}>
          {children}
        </a>
      );
    }
    const [path, hash] = ["/", to];
    return (
      <Link to={{ pathname: path, hash }} className={className} onClick={onClick} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  if (to.includes("#")) {
    const [path, hash] = to.split("#");
    return (
      <Link
        to={{ pathname: path || "/", hash: hash ? `#${hash}` : undefined }}
        className={className}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link to={to} className={className} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
