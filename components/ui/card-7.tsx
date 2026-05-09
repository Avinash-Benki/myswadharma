import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface TravelCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  imageAlt: string;
  logo?: React.ReactNode;
  title: string;
  location: string;
  overview: string;
  /** When true (default), shows price + CTA. Set false for explore-style cards without pricing. */
  showPrice?: boolean;
  price?: number;
  pricePeriod?: string;
  /** Label for the primary action (default: Book Now). */
  ctaLabel?: string;
  onBookNow: () => void;
}

const TravelCard = React.forwardRef<HTMLDivElement, TravelCardProps>(
  (
    {
      className,
      imageUrl,
      imageAlt,
      logo,
      title,
      location,
      overview,
      showPrice = true,
      price = 0,
      pricePeriod = "",
      ctaLabel = "Book Now",
      onBookNow,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative flex min-h-[28rem] w-full max-w-sm flex-col overflow-hidden rounded-xl border border-border bg-card shadow-lg",
          "transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl",
          className
        )}
        {...props}
      >
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/58 to-black/18" />
        <div className="absolute inset-0 backdrop-blur-[1.2px]" />

        <div className="relative flex min-h-[28rem] flex-1 flex-col justify-between p-6 text-card-foreground">
          <div className="flex h-40 items-start">
            {logo ? (
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/50 bg-black/20 backdrop-blur-sm">
                {logo}
              </div>
            ) : null}
          </div>

          <div className="space-y-4 rounded-lg bg-black/28 p-4 backdrop-blur-sm transition-transform duration-500 ease-in-out group-hover:-translate-y-16">
            <div>
              <h3 className="text-3xl font-bold text-white">{title}</h3>
              <p className="text-sm text-white/90">{location}</p>
            </div>
            <div>
              <h4 className="font-semibold text-white/90">OVERVIEW</h4>
              <p className="whitespace-pre-line text-sm leading-relaxed text-white/90">
                {overview}
              </p>
            </div>
          </div>

          <div className="absolute -bottom-20 left-0 w-full p-6 opacity-0 transition-all duration-500 ease-in-out group-hover:bottom-0 group-hover:opacity-100">
            <div
              className={cn(
                "flex items-end gap-4",
                showPrice ? "justify-between" : "justify-end"
              )}
            >
              {showPrice ? (
                <div>
                  <span className="text-4xl font-bold text-white">${price}</span>
                  {pricePeriod ? (
                    <span className="text-white/80"> {pricePeriod}</span>
                  ) : null}
                </div>
              ) : null}
              <Button
                type="button"
                onClick={onBookNow}
                size="lg"
                className={cn(
                  "h-11 shrink-0 bg-white px-8 text-black hover:bg-white/90",
                  !showPrice && "w-full"
                )}
              >
                {ctaLabel} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
TravelCard.displayName = "TravelCard";

export { TravelCard };
