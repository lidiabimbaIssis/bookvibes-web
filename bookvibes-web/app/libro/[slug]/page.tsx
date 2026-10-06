import Link from "next/link";

import { notFound } from "next/navigation";

import {
  ArrowRight,
  Headphones,
  Heart,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import { BookCover } from "@/components/book-cover";

import { BuyBar } from "@/components/buy-bar";

import { SiteFooter, SiteHeader } from "@/components/site-header";

import { FavoritesButton } from "@/components/FavoritesButton";

import { getFullBook } from "@/lib/catalog";

// Las fichas se generan la primera vez que alguien las abre y quedan
// cacheadas 24 h. Así funciona igual con 2.100 que con 3.000 libros.
export const revalidate = 86400;

export async function generateStaticParams() {
  return [];
}

function createSlug(title: string) {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

async function findBook(slug: string) {
  const id = slug.includes("--") ? slug.split("--").pop() || "" : slug;

  return getFullBook(id, slug);
}

export default async function BookPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const book = await findBook(slug);

  if (!book) notFound();

  const tags = (book.vibe_tags || []).slice(0, 3);

  const bookForComponents = {
    ...book,
    slug: `${createSlug(book.title)}--${book.book_id}`,
  };

  return (
    <div className="bg-home-gradient min-h-dvh text-fg">
      <SiteHeader />

      <article className="mx-auto grid max-w-6xl items-start gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[220px_minmax(0,1fr)_300px] lg:py-10">
        {/* PORTADA */}
        <div className="mx-auto w-full max-w-[360px] lg:mx-0">
          <div className="rounded-[14px] shadow-[0_0_35px_rgba(45,181,255,0.16),0_0_55px_rgba(176,38,255,0.12)]">
            <BookCover book={bookForComponents as any} />
          </div>
        </div>

        {/* INFORMACIÓN */}
        <div className="relative min-w-0">
          <div className="absolute right-0 top-0">
            <FavoritesButton
              book={bookForComponents as any}
            />
          </div>

          <h1 className="pr-10 text-[1.95rem] leading-[1.12] font-extrabold text-balance sm:text-4xl">
            {book.title}
          </h1>

          <Link
            href={`/autor/${encodeURIComponent(createSlug(book.author))}`}
            className="mt-0 inline-flex items-center gap-1 text-[17px] text-copper no-underline transition-colors duration-150 hover:text-brass active:text-brass"
          >
            <span>{book.author}</span>
            <span className="text-[14px]">→</span>
          </Link>

          {book.rating ? (
            <div className="mt-3 flex items-center gap-2">
              <span className="text-[13px] font-bold text-yellow-300">
                ⭐ {book.rating}
              </span>
            </div>
          ) : null}

          {/* DATOS DEL LIBRO */}
          <div className="mt-5 grid grid-cols-3 gap-2">
            {book.year ? (
              <div className="flex min-h-[105px] flex-col items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/5 px-2 py-3 text-center">
                <span className="text-[24px] leading-none">📅</span>

                <span className="mt-3 text-[10px] font-extrabold uppercase tracking-[0.12em] text-fg/80">
                  Año
                </span>

                <span className="mt-1 text-[17px] font-extrabold text-sky-300">
                  {book.year}
                </span>
              </div>
            ) : null}

            {book.pages ? (
              <div className="flex min-h-[105px] flex-col items-center justify-center rounded-2xl border border-violet-400/25 bg-violet-400/5 px-2 py-3 text-center">
                <span className="text-[24px] leading-none">📖</span>

                <span className="mt-3 text-[10px] font-extrabold uppercase tracking-[0.12em] text-fg/80">
                  Páginas
                </span>

                <span className="mt-1 text-[17px] font-extrabold text-violet-300">
                  {book.pages}
                </span>
              </div>
            ) : null}

            {book.genre ? (
              <div className="flex min-h-[105px] flex-col items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/5 px-2 py-3 text-center">
                <span className="text-[24px] leading-none">🚀</span>

                <span className="mt-3 text-[10px] font-extrabold uppercase tracking-[0.12em] text-fg/80">
                  Género
                </span>

                <span className="mt-1 text-[14px] font-extrabold text-sky-300">
                  {book.genre}
                </span>
              </div>
            ) : null}
          </div>

          {/* SAGA */}
          {book.saga_info &&
          !book.saga_info.toLowerCase().includes("independiente") ? (
            <div className="mt-5 text-[12px] text-muted">
              {book.saga_info}
            </div>
          ) : null}

         
            {/* TAGS */}
{tags.length > 0 ? (
  <div className="mt-4">
<p className="mb-3 mt-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-fg/70">
      Vibes del libro
    </p>

    <div className="flex flex-wrap gap-2">
      {tags.map((tag: any, index: number) => (
        <span
          key={`${tag.label}-${index}`}
          className="rounded-full border border-white/25 bg-copper/10 px-3 py-1 text-[12px] font-bold text-white"
        >
          {tag.label}
        </span>
      ))}
    </div>
  </div>
) : null}

          {/* SINOPSIS */}
          {book.sinopsis ? (
            <div className="mt-8">
              <h2 className="font-display text-xl font-extrabold">
                Sinopsis
              </h2>

              <p className="mt-3 text-[15px] leading-relaxed text-pretty text-fg/90">
                {book.sinopsis}
              </p>
            </div>
          ) : null}

          {/* LÉELO SI */}
          {book.leer_si ? (
            <div className="mt-8 rounded-2xl border border-white/10 bg-surface/60 p-5">
              <h2 className="font-display text-xl font-extrabold">
                Léelo si…
              </h2>

              <div className="mt-4 space-y-3">
                {Array.isArray(book.leer_si) ? (
                  book.leer_si.map((item: any, index: number) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 text-[14px] leading-relaxed text-fg/85"
                    >
                      <span className="shrink-0 text-base">
                        {item.emoji}
                      </span>

                      <span>{item.label}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-[14px] leading-relaxed text-fg/85">
                    {book.leer_si}
                  </p>
                )}
              </div>
            </div>
          ) : null}

          {/* COMPRA — SOLO MÓVIL */}
          <div className="mt-8 lg:hidden">
            <BuyBar book={bookForComponents as any} />
          </div>

          {/* CTA APP */}
          <div className="mt-8 rounded-2xl border border-violet-400/20 bg-surface/60 p-5 shadow-[0_0_35px_rgba(154,60,209,0.06)]">
            <h2 className="text-[18px] font-extrabold leading-tight">
              ¿Quieres sentir tu próxima historia antes de leerla?
            </h2>

            {/* FUNCIONES DE LA APP */}
<div className="grid grid-cols-2 gap-3">
  <div
    tabIndex={0}
    role="button"
    className="group relative flex cursor-pointer items-center gap-3 rounded-xl border border-violet-400/10 bg-violet-500/5 p-3 outline-none"
  >
    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-violet-300">
      <Headphones className="size-4" />
    </span>

    <span className="text-[13px] text-fg/90">
      Escucha el hook
    </span>

    <span className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-xl bg-[#111026]/95 px-3 text-center text-[12px] font-extrabold text-sky-300 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus:opacity-100">
      📱 Disponible en la app
    </span>
  </div>

  <div
    tabIndex={0}
    role="button"
    className="group relative flex cursor-pointer items-center gap-3 rounded-xl border border-violet-400/10 bg-violet-500/5 p-3 outline-none"
  >
    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-violet-300">
      <Heart className="size-4" />
    </span>

    <span className="text-[13px] text-fg/90">
      Descubre sus emociones
    </span>

    <span className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-xl bg-[#111026]/95 px-3 text-center text-[12px] font-extrabold text-sky-300 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus:opacity-100">
      📱 Disponible en la app
    </span>
  </div>

  <div
    tabIndex={0}
    role="button"
    className="group relative flex cursor-pointer items-center gap-3 rounded-xl border border-violet-400/10 bg-violet-500/5 p-3 outline-none"
  >
    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-violet-300">
      <Sparkles className="size-4" />
    </span>

    <span className="text-[13px] text-fg/90">
      Encuentra libros según tu Vibe
    </span>

    <span className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-xl bg-[#111026]/95 px-3 text-center text-[12px] font-extrabold text-sky-300 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus:opacity-100">
      📱 Disponible en la app
    </span>
  </div>

  <div
    tabIndex={0}
    role="button"
    className="group relative flex cursor-pointer items-center gap-3 rounded-xl border border-violet-400/10 bg-violet-500/5 p-3 outline-none"
  >
    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-violet-300">
      <MessageCircle className="size-4" />
    </span>

    <span className="text-[13px] text-fg/90">
      Habla con sus personajes
    </span>

    <span className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-xl bg-[#111026]/95 px-3 text-center text-[12px] font-extrabold text-sky-300 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus:opacity-100">
      📱 Disponible en la app
    </span>
  </div>
</div>
            

            {/* FRASE */}
            <p className="mt-5 text-center text-[16px] leading-relaxed font-semibold text-fg">
              La{" "}
              <span className="font-extrabold text-[#B026FF]">WEB</span>{" "}
              te ayuda a{" "}
              <span className="font-extrabold text-[#B026FF]">ELEGIR.</span>
              <br />
              La{" "}
              <span className="font-extrabold text-sky-300">APP</span>{" "}
              te ayuda a{" "}
              <span className="font-extrabold text-sky-300">
                DESCUBRIR.
              </span>
            </p>

            {/* BOTÓN APP */}
            <a
              href="https://play.google.com/store/apps/details?id=com.lidiabimba.clickbook"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-full border border-transparent bg-transparent px-5 py-3 text-[13px] font-extrabold text-fg no-underline transition-transform duration-200 hover:scale-[1.02]"
              style={{
                background:
                  "linear-gradient(#111026,#111026) padding-box, linear-gradient(90deg,#2db5ff,#b026ff) border-box",
                borderWidth: "2px",
              }}
            >
              <img
                src="/bookvibes-icon.png"
                alt=""
                className="size-5 object-contain"
              />

              <span>DESCUBRE BOOKVIBES</span>

              <ArrowRight className="size-4" />
            </a>

            <p className="mt-3 text-center text-[11px] text-muted">
              Android disponible · iPhone, en camino
            </p>
          </div>
        </div>

        {/* COMPRA — SOLO ESCRITORIO */}
        <div className="flex flex-col gap-4 lg:sticky lg:top-24">
          <Link
            href={`/libros?vibe=${encodeURIComponent(book.mood || "Todos")}`}
            className="self-end rounded-full border border-white/15 px-3 py-1.5 text-[12px] font-bold text-muted no-underline hover:text-fg"
          >
            ← Volver a la lista
          </Link>

          <div className="hidden lg:block">
            <BuyBar book={bookForComponents as any} />
          </div>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}