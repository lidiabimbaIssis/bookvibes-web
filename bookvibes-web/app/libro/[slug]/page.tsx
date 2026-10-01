import Link from "next/link";
import { notFound } from "next/navigation";
import { BookCover } from "@/components/book-cover";
import { BuyBar } from "@/components/buy-bar";
import { DownloadApp } from "@/components/download-app";
import { SiteFooter, SiteHeader } from "@/components/site-header";
import { getBooks } from "@/lib/api";

function createSlug(title: string) {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default async function BookPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const data = await getBooks();
  const books = data.books || [];

  const book = books.find(
    (item: any) =>
      item.book_id === slug ||
      createSlug(item.title) === slug,
  );

  if (!book) notFound();

  const tags = (book.vibe_tags || []).slice(0, 3);

  const bookForComponents = {
    ...book,
    slug: createSlug(book.title),
  };

  return (
    <div className="bg-home-gradient min-h-dvh text-fg">
      <SiteHeader />

      <article className="mx-auto grid max-w-5xl items-start gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[180px_minmax(0,1fr)_280px] lg:py-10">

        {/* PORTADA */}
        <div className="mx-auto w-full max-w-[180px] lg:mx-0">
          <div className="rounded-[14px] shadow-[0_0_35px_rgba(45,181,255,0.16),0_0_55px_rgba(176,38,255,0.12)]">
            <BookCover book={bookForComponents as any} />
          </div>
        </div>

        {/* INFORMACIÓN */}
        <div className="min-w-0">
          <h1 className="text-[1.95rem] leading-[1.12] font-extrabold text-balance sm:text-4xl">
            {book.title}
          </h1>

          <Link
  href={`/autor/${encodeURIComponent(createSlug(book.author))}`}
  className="mt-2 inline-flex items-center gap-1 text-[17px] text-copper no-underline transition-colors duration-150 hover:text-brass active:text-brass"
>
  <span>{book.author}</span>
  <span className="text-[14px]">→</span>
</Link>

          {/* DATOS DEL LIBRO */}
          <div className="mt-5 flex flex-wrap gap-2">
            {book.rating ? (
              <span className="rounded-full border border-yellow-400/20 bg-yellow-400/5 px-3 py-1.5 text-[12px] font-bold text-yellow-300">
                ⭐ {book.rating}
              </span>
            ) : null}

            {book.year ? (
              <span className="rounded-full border border-sky-400/20 bg-sky-400/5 px-3 py-1.5 text-[12px] font-bold text-sky-300">
                📅 {book.year}
              </span>
            ) : null}

            {book.pages ? (
              <span className="rounded-full border border-violet-400/25 bg-violet-400/5 px-3 py-1.5 text-[12px] font-bold text-violet-300">
                📖 {book.pages} pág.
              </span>
            ) : null}
          </div>

          {/* GÉNERO + SAGA */}
          {(book.genre || book.saga_info) ? (
            <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px]">
              {book.genre ? (
                <span className="font-extrabold uppercase tracking-wide text-fg">
                  {book.genre}
                </span>
              ) : null}

              {book.genre &&
              book.saga_info &&
              !book.saga_info.toLowerCase().includes("independiente") ? (
                <span className="px-1 text-muted">—</span>
              ) : null}

              {book.saga_info &&
              !book.saga_info.toLowerCase().includes("independiente") ? (
                <span className="text-muted">
                  {book.saga_info}
                </span>
              ) : null}
            </div>
          ) : null}

          {/* TAGS */}
{tags.length > 0 ? (
  <div className="mt-3 flex flex-wrap gap-2">
    {tags.map((tag: any, index: number) => (
      <span
        key={`${tag.label}-${index}`}
className="rounded-full border border-white/25 bg-copper/10 px-3 py-1 text-[12px] font-bold text-white"
>
        {tag.label}
      </span>
    ))}
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
                {Array.isArray(book.leer_si)
                  ? book.leer_si.map((item: any, index: number) => (
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
                  : (
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

          {/* APP */}
          <div className="mt-8">
            <DownloadApp compact />
          </div>
        </div>

        {/* COMPRA — SOLO ESCRITORIO */}
        <div className="flex flex-col gap-4">
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

      {/* FRASE FINAL */}
      <p className="font-display px-4 pb-6 text-center text-[15px] italic text-copper">
        Hay historias que se quedan contigo.
      </p>

      <SiteFooter />
    </div>
  );
}