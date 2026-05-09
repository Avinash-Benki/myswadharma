"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, type ReactNode } from "react";
import { LoadingScreen } from "./LoadingScreen";

const easeSmooth = [0.22, 1, 0.36, 1] as const;

export function AppWrapper({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen
            key="loading"
            onComplete={() => setIsLoading(false)}
          />
        )}
      </AnimatePresence>

      {/* Opacity only: transform on this wrapper breaks position:sticky (Swadharma scroll pin). */}
      <motion.div
        className="min-h-0 w-full"
        initial={false}
        animate={
          isLoading
            ? {
                opacity: 0,
              }
            : {
                opacity: 1,
              }
        }
        transition={{
          opacity: { duration: 0.72, ease: easeSmooth, delay: isLoading ? 0 : 0.06 },
        }}
        style={{
          pointerEvents: isLoading ? "none" : "auto",
          willChange: isLoading ? "opacity" : "auto",
        }}
      >
        {children}
      </motion.div>
    </>
  );
}
