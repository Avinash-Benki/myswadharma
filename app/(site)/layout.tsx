import { IslandNav } from "@/components/IslandNav";
import { MegaFooter } from "@/components/landing/MegaFooter";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <IslandNav />
      <div className="landing-redesign">
        <main>{children}</main>
        <MegaFooter />
      </div>
    </>
  );
}
