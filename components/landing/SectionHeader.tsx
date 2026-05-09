import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeader({
  kicker,
  title,
  intro,
  id,
  className,
}: {
  kicker: string;
  title: string;
  intro?: ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <div className={cn("ld-section-head", className)} id={id}>
      <div>
        <div className="section-kicker">{kicker}</div>
        <h2 className="ld-h2">{title}</h2>
      </div>
      {intro ? (
        typeof intro === "string" ? (
          <p className="ld-section-intro">{intro}</p>
        ) : (
          intro
        )
      ) : null}
    </div>
  );
}
