import Link from "next/link";
import { AppCtaBand } from "@/components/app-cta-band";
import { BookCard } from "@/components/book-card";
import { ProductCard } from "@/components/product-card";
import { SiteFooter, SiteHeader } from "@/components/site-header";
import { VibeGrid } from "@/components/vibe-grid";
import type { Book } from "@/data/books";
import { PRODUCTS } from "@/data/products";
import { getNovedades } from "@/lib/api";

function createSlug(title: string) {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default async function Home() {
  const data = await getNovedades();

  const featured = data.books
    .slice(0, 8)
    .map((book: Book) => ({
      ...book,
      slug: `${createSlug(book.title)}--${book.book_id}`,
    })) as Book[];

  return (
    <div className="bg-home-gradient min-h-dvh text-fg">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-4 pt-4 sm:px-6">
        <div className="hero-panel grid items-center gap-6 overflow-hidden rounded-[28px] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="px-6 py-10 sm:px-10 lg:py-10">
            <p className="text-[11px] font-extrabold tracking-[0.28em] text-brass uppercase">
              Siente lo que lees
            </p>

            <h1 className="mt-3 text-4xl leading-[1.08] font-extrabold text-balance sm:text-5xl lg:text-[56px]">
              Historias para cada
              <span className="text-copper"> versión de ti</span>
            </h1>

            <p className="mt-4 max-w-md text-[16px] leading-relaxed text-pretty text-muted">
              Descubre libros según lo que te apetece sentir. Un romance, algo
              épico, un buen llanto o una historia ligera para esta noche.
            </p>

            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-pretty text-muted">
              Esto es el escaparate: ojeas, te enamoras, lo compras. Si quieres
              quedarte dentro de la historia —oírla, palparla, hablar con quien
              la vive— eso te espera en la app.
            </p>

            <a
              href="#vibes"
              className="btn-outline-brand mt-7 inline-flex px-6 py-3 text-[14px] font-extrabold no-underline"
            >
              Explora los vibes →
            </a>
          </div>

          <div className="relative aspect-video overflow-hidden bg-bg">
            <img
              src="/hero-window.jpg"
              alt="Chica leyendo junto a la ventana, de noche"
              className="absolute inset-0 size-full scale-[1.10] object-contain object-center"
            />

            <p className="font-display pointer-events-none absolute right-4 bottom-4 text-right text-[15px] text-fg italic drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] sm:text-[17px]">
              Buenas historias.
              <br />
              Mejores días.
            </p>
          </div>
        </div>
      </section>

      <VibeGrid />

      <section className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="novedades-glow text-[30px] leading-[1.05] font-extrabold">
              Novedades
            </h2>

            <p className="mt-2 text-[15px] leading-relaxed text-muted">
              Cada día, nuevas historias para descubrir.
            </p>
          </div>

          <Link
            href="/libros"
            className="text-[13px] font-bold text-muted no-underline hover:text-fg"
          >
            Ver todos →
          </Link>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {featured.map((book) => (
            <BookCard key={book.book_id} book={book} />
          ))}
        </div>
      </section>

      {/* EL RINCÓN DEL LECTOR */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-gradient-to-br from-[#09051a] via-[#10082a] to-[#080b20] px-5 py-7 sm:px-7 sm:py-8">
          <div className="pointer-events-none absolute -right-16 -top-20 size-52 rounded-full bg-copper/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 left-1/3 size-52 rounded-full bg-brass/10 blur-3xl" />

          <div className="relative">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-[10px] font-extrabold tracking-[0.24em] text-brass uppercase">
                  BookVibes
                </p>

                <h2 className="mt-2 text-[30px] leading-[1.05] font-extrabold sm:text-[36px]">
                  El rincón del{" "}
                  <span className="text-[#9a3cd1]">lector</span>
                </h2>

                <p className="mt-2 max-w-lg text-[13px] leading-relaxed text-muted sm:text-[14px]">
                  Pequeños objetos para disfrutar aún más de tus historias.
                </p>
              </div>

              <Link
                href="/tienda"
                className="hidden text-[12px] font-bold text-muted no-underline transition hover:text-fg sm:block"
              >
                Ver tienda →
              </Link>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-6 sm:gap-4">
              {PRODUCTS.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <AppCtaBand />

      <SiteFooter />
    </div>
  );
}