import type { ReactNode } from "react";

type PageHeroProps = {
  kicker: string;
  title: string;
  children?: ReactNode;
};

export function PageHero({ kicker, title, children }: PageHeroProps) {
  return (
    <header className="ld-page-hero">
      <div className="container">
        <p className="section-kicker" style={{ color: "var(--maroon)" }}>
          {kicker}
        </p>
        <h1 className="ld-page-hero__title">{title}</h1>
        {children ? (
          <div className="ld-page-hero__body">{children}</div>
        ) : null}
      </div>
    </header>
  );
}
