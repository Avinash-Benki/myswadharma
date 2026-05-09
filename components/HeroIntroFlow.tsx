"use client";

import type { ReactNode } from "react";
import { GLSLHills } from "@/components/ui/glsl-hills";

/**
 * Shared canvas layer so the hero hills visually continue through the intro block below.
 */
export function HeroIntroFlow({ children }: { children: ReactNode }) {
  return (
    <div className="hero-intro-flow">
      <div className="hero-intro-flow__hills" aria-hidden>
        <GLSLHills
          cameraZ={118}
          planeSize={256}
          speed={0.42}
          width="100%"
          height="100%"
        />
      </div>
      {children}
    </div>
  );
}
