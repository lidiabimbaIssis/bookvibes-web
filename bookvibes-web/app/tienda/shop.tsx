"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/product-card";
import { PRODUCT_CATS, PRODUCTS } from "@/data/products";
import { cn } from "@/lib/utils";

export function Shop() {
  const [cat, setCat] = useState<(typeof PRODUCT_CATS)[number]>("Todos");
  const items = useMemo(
    () => PRODUCTS.filter((p) => cat === "Todos" || p.cat === cat),
    [cat],
  );

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <p className="text-[11px] font-extrabold tracking-[0.28em] text-brass uppercase">Afiliado Amazon</p>
      <h1 className="mt-3 text-3xl font-extrabold text-balance sm:text-4xl">El rincón del lector</h1>
      <p className="mt-3 max-w-lg text-[14px] leading-relaxed text-pretty text-muted">
        Pequeños objetos para disfrutar aún más de tus historias. Las compras en Amazon;
        BookVibes se lleva una comisión, a ti no te cuesta más.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {PRODUCT_CATS.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCat(c)}
            className={cn(
              "rounded-full border px-3 py-1.5 text-[12px] font-bold",
              cat === c
  ? "border-transparent bg-surface text-fg [background:linear-gradient(var(--color-surface),var(--color-surface))_padding-box,linear-gradient(90deg,var(--color-brass),var(--color-copper))_border-box]"
  : "border-white/10 bg-surface text-fg",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-6">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <p className="mt-10 max-w-xl text-[12px] leading-relaxed text-muted">
        Enlaces de afiliado de Amazon. Como asociada de Amazon, BookVibes obtiene ingresos
        por las compras adscritas. Elige siempre el producto que te convenga; nosotros no
        lo vendemos ni lo enviamos.
      </p>
    </section>
  );
}
