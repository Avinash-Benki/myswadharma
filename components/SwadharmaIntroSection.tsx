"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";
import type { LegacyRef, RefObject } from "react";

const PARAS = [
  "Swadharma is the Dharma that becomes personal — shaped by one’s family tradition, stage of life, community, sampradaya, duties, temperament and sincere spiritual aspiration.",
  "For a practicing Hindu family, it is expressed through daily discipline, sacred observances, rituals, learning, temple visits, seva and the values passed to the next generation.",
  "mySwadharma exists because many families want to practice sincerely, but face scattered guidance, commercialized services and contradictory information. The platform brings authentic knowledge, sacred calendars, trusted practitioners, curated resources and verified giving opportunities into one clear ecosystem.",
] as const;

const TITLE = "Your own rightful way of living Dharma";
const QUESTION = "What is Swadharma?";

/** Scroll share used for word reveal; remainder keeps copy fully visible before section unpins */
const REVEAL_COMPLETE = 0.78;

const SWADHARMA_SCROLL = (() => {
  const blocks: { el: "h3" | "h2" | "p"; words: string[] }[] = [
    { el: "h3", words: QUESTION.split(/\s+/).filter(Boolean) },
    { el: "h2", words: TITLE.split(/\s+/).filter(Boolean) },
    ...PARAS.map((p) => ({
      el: "p" as const,
      words: p.split(/\s+/).filter(Boolean),
    })),
  ];
  let idx = 0;
  const indexed = blocks.map((b) => ({
    el: b.el,
    items: b.words.map((word) => ({ word, index: idx++ })),
  }));
  return { indexed, totalWords: Math.max(1, idx) };
})();

function AnimatedWord({
  word,
  index,
  total,
  revealProgress,
}: {
  word: string;
  index: number;
  total: number;
  revealProgress: MotionValue<number>;
}) {
  const start = index / total;
  const end = Math.min(1, (index + 1) / total + 0.035);
  const opacity = useTransform(revealProgress, [start, end], [0.32, 1]);

  return (
    <motion.span
      style={{ opacity, display: "inline-block" }}
      className="swadharma-intro__word"
    >
      {word}
    </motion.span>
  );
}

export function SwadharmaIntroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <section
        ref={sectionRef}
        id="swadharma"
        className="section section-soft swadharma-intro"
      >
        <div className="container swadharma-intro__wrap">
          <div className="swadharma-intro__content">
            <h3 className="swadharma-intro__question">{QUESTION}</h3>
            <h2 className="swadharma-intro__title">{TITLE}</h2>
            <div className="swadharma-intro__body">
              {PARAS.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return <SwadharmaIntroScrollReveal sectionRef={sectionRef} />;
}

function SwadharmaIntroScrollReveal({
  sectionRef,
}: {
  sectionRef: RefObject<HTMLElement | null>;
}) {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const revealProgress = useTransform(
    scrollYProgress,
    [0, REVEAL_COMPLETE, 1],
    [0, 1, 1]
  );
  const { indexed, totalWords } = SWADHARMA_SCROLL;

  return (
    <section
      ref={sectionRef as LegacyRef<HTMLElement>}
      id="swadharma"
      className="section section-soft swadharma-intro swadharma-intro--scroll-reveal"
    >
      <div className="swadharma-intro__sticky">
        <div className="container swadharma-intro__wrap">
          <div className="swadharma-intro__content">
            {indexed.map((block, bi) => {
              const inner = block.items.map(({ word, index }) => (
                <AnimatedWord
                  key={`${bi}-${index}`}
                  word={word}
                  index={index}
                  total={totalWords}
                  revealProgress={revealProgress}
                />
              ));

              if (block.el === "h3") {
                return (
                  <h3 key={bi} className="swadharma-intro__question">
                    {inner}
                  </h3>
                );
              }
              if (block.el === "h2") {
                return (
                  <h2 key={bi} className="swadharma-intro__title">
                    {inner}
                  </h2>
                );
              }
              return (
                <p key={bi} className="swadharma-intro__body-text">
                  {inner}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
