import type { Metadata } from "next";
import { Cinzel, Fraunces, Manrope } from "next/font/google";
import { AppWrapper } from "@/components/AppWrapper";
import "./globals.css";
import "./design-system.css";
import "./ds-legacy-tokens.css";
import "./landing-page.css";
import "./landing-redesign.css";
import "./marketing-ds-authority.css";
import { cn } from "@/lib/utils";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

export const metadata: Metadata = {
  title: "mySwadharma | Shastra Dharma Karma Daana",
  description:
    "mySwadharma helps Hindu families learn, observe, perform and give with authenticity, clarity and trust.",
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        manrope.variable,
        fraunces.variable,
        cinzel.variable,
        "font-sans"
      )}
    >
      <body className="antialiased">
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
