"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type ParallaxFeatureItem = {
  id: string | number;
  title: string;
  description: string;
  imageUrl: string;
  reverse?: boolean;
  imageAlt?: string;
};

type ParallaxScrollFeatureSectionProps = {
  kicker: string;
  headline: string;
  items: ParallaxFeatureItem[];
  scrollHint?: string;
  className?: string;
};

function ParallaxFeatureRow({
  title,
  description,
  imageUrl,
  reverse,
  imageAlt,
}: {
  title: string;
  description: string;
  imageUrl: string;
  reverse?: boolean;
  imageAlt: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.65], [0, 1]);
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.65],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
  );
  const y = useTransform(scrollYProgress, [0, 1], [36, 0]);

  return (
    <div
      ref={ref}
      className={cn(
        "flex min-h-[min(88vh,920px)] max-w-[1120px] flex-col items-center justify-center gap-12 px-6 py-16 md:flex-row md:gap-20 md:py-24",
        reverse && "md:flex-row-reverse"
      )}
    >
      <motion.div className="max-w-md shrink-0 text-center md:text-left" style={{ y }}>
        <h3 className="font-display text-3xl font-semibold leading-tight text-[#3f1010] md:text-4xl">
          {title}
        </h3>
        <motion.p
          style={{ y }}
          className="mt-6 text-base leading-relaxed text-[#6c554d] md:text-lg"
        >
          {description}
        </motion.p>
      </motion.div>
      <motion.div
        className="relative w-full max-w-sm shrink-0"
        style={{ opacity, clipPath }}
      >
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={640}
          height={800}
          className="aspect-[4/5] w-full rounded-2xl border border-[rgba(110,31,23,0.12)] object-cover shadow-[0_20px_50px_rgba(63,16,13,0.08)]"
          sizes="(max-width: 768px) 100vw, 384px"
        />
      </motion.div>
    </div>
  );
}

export function ParallaxScrollFeatureSection({
  kicker,
  headline,
  items,
  scrollHint = "Scroll to explore",
  className,
}: ParallaxScrollFeatureSectionProps) {
  return (
    <section
      id="why-myswadharma"
      className={cn("relative w-full overflow-x-hidden", className)}
      aria-labelledby="why-parallax-heading"
    >
      <div className="mx-auto flex min-h-[min(52vh,560px)] max-w-3xl flex-col items-center justify-center px-6 pb-6 pt-10 text-center">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#b45309]">
          {kicker}
        </p>
        <h2
          id="why-parallax-heading"
          className="font-display text-3xl font-semibold leading-tight text-[#3f1010] md:text-5xl"
        >
          {headline}
        </h2>
        <p className="mt-10 flex items-center gap-2 text-sm text-[#6c554d]">
          {scrollHint}
          <ArrowDown className="size-4 shrink-0" aria-hidden />
        </p>
      </div>

      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center">
        {items.map((item, index) => (
          <ParallaxFeatureRow
            key={item.id}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            reverse={item.reverse ?? index % 2 === 1}
            imageAlt={item.imageAlt ?? item.title}
          />
        ))}
      </div>

      <div className="h-16" aria-hidden />
    </section>
  );
}

/** Registry / playground default */
export function Component() {
  return (
    <ParallaxScrollFeatureSection
      kicker="Why MySwadharma?"
      headline="Curated for trust, clarity and authentic practice"
      items={[
        {
          id: 1,
          title: "Verified practitioners",
          description:
            "Purohitas, astrologers and service providers are curated, not blindly listed.",
          imageUrl: "/section_images/Hero_1.jpg",
        },
        {
          id: 2,
          title: "No fear-based selling",
          description:
            "Guidance should be devotional and practical, not anxiety-driven.",
          imageUrl: "/section_images/dharma.jpg",
        },
        {
          id: 3,
          title: "Source-based content",
          description:
            "Shastra and knowledge resources are anchored in serious voices.",
          imageUrl: "/section_images/sashtra.jpg",
        },
      ]}
    />
  );
}
