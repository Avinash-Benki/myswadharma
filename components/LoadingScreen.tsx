"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const WORDS = ["Shastra", "Dharma", "Karma", "Daana"] as const;
const COUNTER_MS = 2700;
const WORD_INTERVAL_MS = 900;
const COMPLETE_DELAY_MS = 400;

/** Easing aligned with site motion (smooth deceleration) */
const easeOut = [0.22, 1, 0.36, 1] as const;

export type LoadingScreenProps = {
  onComplete: () => void;
};

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  const [wordIndex, setWordIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const completedRef = useRef(false);
  const completeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((prev) => {
        if (prev >= WORDS.length - 1) {
          clearInterval(id);
          return prev;
        }
        return prev + 1;
      });
    }, WORD_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const p = Math.min(100, (elapsed / COUNTER_MS) * 100);
      setProgress(p);

      if (p >= 100) {
        if (!completedRef.current) {
          completedRef.current = true;
          completeTimeoutRef.current = setTimeout(() => {
            onCompleteRef.current();
          }, COMPLETE_DELAY_MS);
        }
        return;
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      if (completeTimeoutRef.current) {
        clearTimeout(completeTimeoutRef.current);
      }
    };
  }, []);

  const displayProgress = Math.round(progress);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] overflow-hidden font-sans"
      style={{
        background: `
          radial-gradient(circle at top left, rgba(217, 133, 24, 0.14), transparent 32%),
          radial-gradient(circle at top right, rgba(110, 31, 23, 0.12), transparent 36%),
          var(--ivory)`,
      }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.01 }}
      transition={{ duration: 0.55, ease: easeOut }}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(180, 39, 31, 0.06), transparent 55%)",
        }}
      />

      <motion.div
        className="brand-text absolute left-8 top-8 text-xs font-semibold text-[var(--muted)] md:left-12 md:top-12 md:text-sm"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.08, ease: easeOut }}
      >
        mySwadharma
      </motion.div>

      <div className="absolute inset-0 flex items-center justify-center px-6">
        <AnimatePresence mode="wait">
          <motion.span
            key={wordIndex}
            className="text-center text-4xl font-semibold leading-tight tracking-[-0.02em] text-[var(--maroon-dark)] md:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.38, ease: easeOut }}
          >
            {WORDS[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      <motion.div
        className="absolute bottom-8 right-8 text-6xl tabular-nums text-[var(--maroon-dark)] md:bottom-12 md:right-12 md:text-8xl lg:text-9xl"
        style={{ fontFamily: "var(--font-display), Georgia, serif" }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.08, ease: easeOut }}
      >
        {displayProgress.toString().padStart(3, "0")}
      </motion.div>

      <div
        className="absolute bottom-0 left-0 right-0 h-[3px]"
        style={{ background: "var(--line)" }}
      >
        <motion.div
          className="h-full origin-left rounded-none"
          style={{
            background:
              "linear-gradient(90deg, var(--saffron) 0%, var(--maroon) 55%, var(--copper) 100%)",
            boxShadow: "0 0 12px rgba(147, 75, 0, 0.25)",
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: progress / 100 }}
          transition={{ duration: 0.08, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
}
