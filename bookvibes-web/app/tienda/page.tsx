import { Shop } from "./shop";
import { SiteFooter, SiteHeader } from "@/components/site-header";

export default function TiendaPage() {
  return (
    <div className="bg-home-gradient min-h-dvh text-fg">
      <SiteHeader />
      <Shop />
      <SiteFooter />
    </div>
  );
}
