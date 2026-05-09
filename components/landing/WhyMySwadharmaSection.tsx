"use client";

import {
  ParallaxScrollFeatureSection,
  type ParallaxFeatureItem,
} from "@/components/ui/parallax-scroll-feature-section";

const PRINCIPLES = [
  {
    title: "Verified practitioners",
    body: "Purohitas, astrologers and service providers are curated, not blindly listed.",
    imageUrl: "/section_images/Hero_1.jpg",
    imageAlt: "Temple architecture and sacred space",
  },
  {
    title: "No fear-based selling",
    body: "Guidance should be devotional and practical, not anxiety-driven.",
    imageUrl: "/section_images/dharma.jpg",
    imageAlt: "Calm, contemplative moment",
  },
  {
    title: "Source-based content",
    body: "Shastra and knowledge resources are anchored in serious voices.",
    imageUrl: "/section_images/sashtra.jpg",
    imageAlt: "Books and learning",
  },
  {
    title: "Transparent Daana",
    body: "Clear purpose, beneficiary information, receipts and periodic updates.",
    imageUrl: "/section_images/daana.jpg",
    imageAlt: "Hands offering in a spirit of giving",
  },
  {
    title: "Regional sensitivity",
    body: "Respect for family tradition, sampradaya, language and local practice.",
    imageUrl: "/section_images/6_items.jpg",
    imageAlt: "Community gathering",
  },
  {
    title: "Family-first design",
    body: "Built for elders, parents, children and modern Hindu households.",
    imageUrl: "/section_images/karma.jpg",
    imageAlt: "Family together",
  },
] as const;

const ITEMS: ParallaxFeatureItem[] = PRINCIPLES.map((p, i) => ({
  id: p.title,
  title: p.title,
  description: p.body,
  imageUrl: p.imageUrl,
  imageAlt: p.imageAlt,
  reverse: i % 2 === 1,
}));

export function WhyMySwadharmaSection() {
  return (
    <ParallaxScrollFeatureSection
      kicker="Why MySwadharma?"
      headline="Curated for trust, clarity and authentic practice"
      items={ITEMS}
      scrollHint="Scroll to see each principle"
    />
  );
}
