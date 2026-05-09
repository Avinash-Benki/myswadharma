"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Books,
  CalendarStar,
  CheckFat,
  Fire,
  HandHeart,
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

const PILLAR_ICONS = {
  shastra: Books,
  dharma: CalendarStar,
  karma: Fire,
  daana: HandHeart,
} as const;

type PillarId = keyof typeof PILLAR_ICONS;

const PILLARS: readonly {
  id: PillarId;
  tab: string;
  want: string;
  sub: string;
  desc: string;
  bullets: readonly string[];
  href: string;
  cta: string;
  imageUrl: string;
  imageAlt: string;
}[] = [
  {
    id: "shastra",
    tab: "Shastra",
    want: "I want to learn",
    sub: "Sacred Knowledge",
    desc: "For families who want reliable sources before they practice.",
    bullets: ["Bhakti music and chanting", "Pravachanas and books", "Children’s learning"],
    href: "/shastra",
    cta: "Explore Shastra",
    imageUrl: "/section_images/Shastra_4.jpg",
    imageAlt: "Shastra — study, music, and sacred learning across generations",
  },
  {
    id: "dharma",
    tab: "Dharma",
    want: "I want to observe",
    sub: "Sacred Observance",
    desc: "For families who want to know what to observe and when.",
    bullets: ["Daily Panchanga", "Upcoming festivals and events", "Vrata, temples and teertha yatra"],
    href: "/dharma",
    cta: "Explore Dharma",
    imageUrl: "/section_images/Dharma_4.jpg",
    imageAlt: "Dharma — observance, care, and living in rhythm with sacred time",
  },
  {
    id: "karma",
    tab: "Karma",
    want: "I want to perform",
    sub: "Sacred Ritual Action",
    desc: "For families who need the right person, ritual or item.",
    bullets: ["11 Homas in your name", "Book poojas and Purohitas", "Consult Jyotishya experts"],
    href: "/karma#annual-homa",
    cta: "Explore Karma",
    imageUrl: "/section_images/karma_4.jpg",
    imageAlt: "Karma — sacred fire, discipline, and ritual action",
  },
  {
    id: "daana",
    tab: "Daana",
    want: "I want to give",
    sub: "Sacred Giving",
    desc: "For families who want giving to be meaningful and transparent.",
    bullets: ["Temple and goshala support", "Vidyadana and annadana", "Dharmic institutions"],
    href: "/daana",
    cta: "Explore Daana",
    imageUrl: "/section_images/Daana_4.jpg",
    imageAlt: "Daana — giving, seva, and mindful offerings",
  },
] as const;

/** High-contrast stack for readability over photography (21st-style editorial cards) */
const textLift = "[text-shadow:0_2px_24px_rgba(0,0,0,0.92),0_1px_3px_rgba(0,0,0,0.85)]";

export function PillarsExpandingCards() {
  return (
    <div
      className="ld-pillars-stack mx-auto flex max-w-6xl flex-col gap-6 md:gap-8"
      role="list"
      aria-label="Four aspects"
    >
      {PILLARS.map((pillar, i) => {
        const PIcon = PILLAR_ICONS[pillar.id];
        return (
          <article
            key={pillar.id}
            role="listitem"
            className={cn(
              "ld-pillars-stack__card group relative isolate min-h-[min(88vw,420px)] overflow-hidden rounded-2xl border border-[rgba(110,31,23,0.14)] shadow-[0_20px_50px_rgba(63,16,13,0.12)]",
              "md:min-h-[400px] lg:min-h-[440px]"
            )}
          >
            <Image
              src={pillar.imageUrl}
              alt={pillar.imageAlt}
              fill
              sizes="(min-width: 1200px) 1120px, 100vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              priority={i === 0}
            />
            {/* Layered scrim: corner depth + strong bottom lift for type */}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/55 via-transparent to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black from-[18%] via-black/82 via-[48%] to-black/30"
              aria-hidden
            />

            <div className="relative z-[1] flex h-full min-h-[inherit] flex-col justify-end p-5 sm:p-6 md:p-8">
              <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-10">
                <div className="min-w-0 flex-1 text-left">
                  <div className="mb-4 flex items-start gap-3 md:gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/45 bg-black/45 shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-md md:h-14 md:w-14">
                      <PIcon
                        className="text-white"
                        size={26}
                        weight="duotone"
                        aria-hidden
                      />
                    </span>
                    <div className="min-w-0">
                      <span className="mb-2 inline-flex max-w-full rounded-full border border-white/45 bg-black/40 px-3 py-1.5 text-[0.62rem] font-bold uppercase leading-none tracking-[0.16em] text-white shadow-[0_4px_20px_rgba(0,0,0,0.4)] backdrop-blur-md">
                        {pillar.want}
                      </span>
                      <h3
                        className={cn(
                          "mt-2 font-display text-2xl font-semibold leading-tight text-white md:text-3xl lg:text-[2rem]",
                          textLift
                        )}
                      >
                        {pillar.tab}
                      </h3>
                      <p
                        className={cn(
                          "mt-1 text-sm font-semibold text-white md:text-base",
                          textLift
                        )}
                      >
                        {pillar.sub}
                      </p>
                    </div>
                  </div>
                  <p
                    className={cn(
                      "mb-4 max-w-2xl text-sm font-medium leading-relaxed text-white md:text-[1.05rem]",
                      textLift
                    )}
                  >
                    {pillar.desc}
                  </p>
                  <ul className="flex max-w-2xl flex-col gap-2 sm:flex-row sm:flex-wrap">
                    {pillar.bullets.map((b) => (
                      <li key={b} className="max-w-full sm:max-w-none">
                        <span
                          className={cn(
                            "inline-flex w-full items-center gap-2.5 rounded-full border border-white/40",
                            "bg-white/18 px-3.5 py-2 text-sm font-semibold text-white",
                            "shadow-[0_6px_28px_rgba(0,0,0,0.45)] backdrop-blur-md sm:w-auto",
                            textLift
                          )}
                        >
                          <CheckFat
                            className="shrink-0 text-amber-200"
                            size={18}
                            weight="fill"
                            aria-hidden
                          />
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex shrink-0 flex-col items-stretch md:items-end md:justify-end">
                  <p
                    className={cn(
                      "mb-2 hidden text-right text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-white/80 md:mb-3 md:block",
                      "md:opacity-0 md:transition-opacity md:duration-300 md:group-hover:opacity-100",
                      textLift
                    )}
                  >
                    Hover to explore
                  </p>
                  <Link
                    href={pillar.href}
                    className={cn(
                      "btn btn-primary inline-flex justify-center shadow-lg",
                      "w-full max-md:mt-1 md:w-auto md:min-w-[200px] md:justify-center",
                      "max-md:opacity-100 max-md:translate-y-0",
                      "md:translate-y-2 md:opacity-0 md:transition-all md:duration-300 md:ease-out",
                      "md:group-hover:translate-y-0 md:group-hover:opacity-100",
                      "md:group-focus-within:translate-y-0 md:group-focus-within:opacity-100",
                      "focus-visible:translate-y-0 focus-visible:opacity-100"
                    )}
                  >
                    {pillar.cta}
                  </Link>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
