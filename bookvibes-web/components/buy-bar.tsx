import {
  ArrowRight,
  BookOpen,
  Globe,
  Heart,
  ShoppingBag,
  Smartphone,
  Truck,
} from "lucide-react";

import {
  amazonUrl,
  buscaUrl,
  casaUrl,
  koboUrl,
  type Book,
} from "@/data/books";

export function BuyBar({ book }: { book: Book }) {
  const stores = [
    {
      name: "Amazon",
      subtitle: "Entrega rápida",
      href: amazonUrl(book),
      logo: "/amazon.png",
    },
    {
      name: "Casa del Libro",
      subtitle: "Librería especializada",
      href: casaUrl(book),
      logo: "/casadellibro.png",
    },
    {
      name: "Buscalibre",
      subtitle: "Catálogo internacional",
      href: buscaUrl(book),
      logo: "/buscalibre.png",
    },
    {
      name: "Rakuten Kobo",
      subtitle: "Libros digitales",
      href: koboUrl(book),
      logo: "/kobo.png",
    },
  ];

  return (
    <aside className="rounded-[22px] border border-[#9a3cd1]/30 bg-surface p-5 shadow-[0_12px_40px_rgba(154,60,209,0.12)]">
      {/* CABECERA */}
      <div className="flex items-center gap-2">
        <ShoppingBag className="size-4 text-[#9a3cd1]" />

        <p className="text-[12px] font-extrabold tracking-[0.14em] text-fg uppercase">
          ¿Dónde puedes comprarlo?
        </p>
      </div>

      <p className="mt-2 text-[13px] text-muted">
        Encuéntralo en tu librería favorita.
      </p>

      {/* TIENDAS */}
      <div className="mt-5 flex flex-col gap-2.5">
        {stores.map((store) => (
          <a
            key={store.name}
            href={store.href}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 rounded-[16px] border border-white/10 bg-studio px-3 py-2.5 no-underline transition-all duration-200 hover:border-[#9a3cd1]/50 hover:bg-white/[0.04]"
          >
            {/* LOGO */}
            <div className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-[12px] bg-[#111126]">
              <img
                src={store.logo}
                alt={store.name}
                className="max-h-9 max-w-9 object-contain"
              />
            </div>

            {/* TEXTO */}
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-extrabold leading-tight text-fg">
                {store.name}
              </p>

              <div className="mt-1 flex items-center gap-1.5">
                {store.name === "Amazon" ? (
                  <Truck className="size-3.5 text-[#c86cff]" />
                ) : store.name === "Casa del Libro" ? (
                  <BookOpen className="size-3.5 text-[#c86cff]" />
                ) : store.name === "Buscalibre" ? (
                  <Globe className="size-3.5 text-[#c86cff]" />
                ) : (
                  <Smartphone className="size-3.5 text-[#c86cff]" />
                )}

                <p className="text-[10px] font-medium leading-tight text-muted">
                  {store.subtitle}
                </p>
              </div>
            </div>

            {/* FLECHA */}
            <div className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#171536] text-fg transition-all duration-200 group-hover:scale-105 group-hover:border-[#9a3cd1]/50">
              <ArrowRight className="size-4" />
            </div>
          </a>
        ))}
      </div>

      {/* AVISO AFILIACIÓN */}
      <div className="mt-4 flex items-start gap-2 border-t border-white/10 pt-4">
        <Heart className="mt-0.5 size-3.5 shrink-0 text-[#c86cff]" />

        <p className="text-[10px] leading-relaxed text-muted">
          Enlaces de afiliado. A ti no te cuesta más y ayudas a que BookVibes
          siga creciendo.
        </p>
      </div>
    </aside>
  );
}