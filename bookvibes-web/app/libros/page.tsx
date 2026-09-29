import { Suspense } from "react";
import { Catalog } from "./catalog";
import { SiteFooter, SiteHeader } from "@/components/site-header";

export default function LibrosPage() {
  return (
    <div className="bg-home-gradient min-h-dvh text-fg">
      <SiteHeader />
      <Suspense>
        <Catalog />
      </Suspense>
      <SiteFooter />
    </div>
  );
}
