/**
 * Time-bounded homepage promos (static export safe: evaluated in the browser).
 * Adjust dates when the campaign ends; no redeploy is required for the *end* date
 * if you use client checks — but the site must be loaded after the end date.
 * For static hosting, visitors with old cached HTML still run client JS with `new Date()`.
 */

/** Fired on `window` when the visitor dismisses a seasonal strip (same-tab sync). */
export const SEASONAL_PROMO_DISMISS_EVENT = "myswadharma-seasonal-promo-dismiss";

export type SeasonalPromoWindow = {
  /** Unique id for analytics / future use */
  id: string;
  href: string;
  /** localStorage key when visitor dismisses the campaign strip */
  dismissStorageKey: string;
  /** Inclusive start, local calendar day YYYY-MM-DD */
  activeFrom: string;
  /** Inclusive end, local calendar day YYYY-MM-DD */
  activeUntil: string;
};

/**
 * Shani Jayanthi Sankalpa campaign.
 * `activeFrom` must be on or before “today” for promos to appear (browser local time).
 * Widen the start date for pre-event marketing; tighten `activeUntil` after the last day you want it shown.
 */
export const SHANI_JAYANTHI_SANKALPA_2026: SeasonalPromoWindow = {
  id: "shani-jayanthi-sankalpa-2026",
  href: "/shani-jayanthi-sankalpa-seva-2026",
  dismissStorageKey: "myswadharma-dismiss-shani-jayanthi-ribbon-2026",
  activeFrom: "2025-01-01",
  /** Homepage ribbon / hero teaser hide after this day (grace period after Jayanthi). */
  activeUntil: "2026-06-30",
};

/** Public calendar date: Shani Jayanthi 2026. */
export const SHANI_JAYANTHI_2026_OBSERVANCE_ISO = "2026-05-16";

/** e.g. "Saturday, May 16, 2026" in en-US */
export function formatShaniJayanthi2026Observance(
  locale: string = "en-US"
): string {
  const d = parseLocalDay(SHANI_JAYANTHI_2026_OBSERVANCE_ISO);
  return d.toLocaleDateString(locale, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function parseLocalDay(ymd: string): Date {
  const [y, m, d] = ymd.split("-").map(Number);
  return new Date(y, m - 1, d, 0, 0, 0, 0);
}

export function isPromoWindowActive(
  promo: SeasonalPromoWindow,
  now: Date = new Date()
): boolean {
  if (
    typeof process !== "undefined" &&
    process.env.NEXT_PUBLIC_FORCE_SEASONAL_PROMOS === "1"
  ) {
    return true;
  }

  if (
    typeof process !== "undefined" &&
    process.env.NEXT_PUBLIC_SEASONAL_PROMOS_OFF === "1"
  ) {
    return false;
  }

  const start = parseLocalDay(promo.activeFrom);
  const end = parseLocalDay(promo.activeUntil);
  end.setHours(23, 59, 59, 999);
  return now >= start && now <= end;
}

export function formatPromoEndLabel(promo: SeasonalPromoWindow): string {
  const end = parseLocalDay(promo.activeUntil);
  return end.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
