import { ShoppingBag } from "lucide-react";
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
      ready: true,
    },
    {
      name: "Casa del Libro",
      subtitle: "Librería especializada",
      href: casaUrl(book),
      ready: true,
    },
    {
      name: "Buscalibre",
      subtitle: "Catálogo internacional",
      href: buscaUrl(book),
      ready: true,
    },
    {
      name: "Rakuten Kobo",
      subtitle: "Libros digitales",
      href: koboUrl(book),
      ready: true,
    },
  ];

  return (
    <aside className="rounded-[22px] border border-[#9a3cd1]/30 bg-surface p-5 shadow-[0_12px_40px_rgba(154,60,209,0.12)]">
      <div className="flex items-center gap-2">
        <ShoppingBag className="size-4 text-[#9a3cd1]" />

        <p className="text-[12px] font-extrabold tracking-[0.14em] text-fg uppercase">
          ¿Dónde puedes comprarlo?
        </p>
      </div>

      <p className="mt-2 text-[13px] text-muted">
        Encuéntralo en tu librería favorita.
      </p>

      <div className="mt-4 grid grid-cols-2 gap-2">
        {stores.map((store) =>
          store.ready ? (
            <a
              key={store.name}
              href={store.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-[14px] border border-white/10 bg-studio px-3 py-3 no-underline transition-all duration-200 hover:border-[#9a3cd1]/50 hover:bg-white/[0.04]"
            >
              <p className="text-[13px] font-extrabold leading-tight text-fg">
                {store.name}
              </p>

              <p className="mt-2 text-[11px] font-bold leading-tight tracking-wide text-brass">
                {store.subtitle}
              </p>
            </a>
          ) : (
            <div
              key={store.name}
              className="rounded-[14px] border border-dashed border-white/10 px-3 py-3 opacity-60"
            >
              <p className="text-[13px] font-extrabold leading-tight">
                {store.name}
              </p>

              <p className="mt-2 text-[11px] leading-tight text-muted">
                Próximamente
              </p>
            </div>
          ),
        )}
      </div>

      <p className="mt-4 text-[11px] leading-relaxed text-muted">
        Enlaces de afiliado. A ti no te cuesta más y ayudas a que BookVibes
        siga creciendo.
      </p>
    </aside>
  );
}