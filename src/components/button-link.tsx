import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  return (
    <Link className={`button-link button-link--${variant} ${className}`} href={href}>
      <span>{children}</span>
      <span aria-hidden="true" className="button-link__arrow">
        ↗
      </span>
    </Link>
  );
}
