"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, Menu, Search, X } from "lucide-react";
import { Logo } from "@/components/logo";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-bg/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Logo size="sm" />

        {/* MENÚ ORDENADOR */}
        <nav className="hidden items-center gap-3 text-[13px] font-semibold text-muted sm:flex sm:gap-5">
          <a href="/#vibes" className="hover:text-fg">
            Vibes
          </a>

          <Link href="/libros" className="hover:text-fg">
            Libros
          </Link>

          <Link
            href="/favoritos"
            className="flex items-center gap-1.5 no-underline hover:text-fg"
          >
            <Heart className="size-4" />
            <span>Favoritos</span>
          </Link>

          <Link href="/tienda" className="hover:text-fg">
            Tienda
          </Link>

          <Link href="/sobre" className="hover:text-fg">
            Sobre BookVibes
          </Link>

          <Link href="/contacto" className="hover:text-fg">
            Contacto
          </Link>

          <Link
            href="/libros"
            className="hover:text-fg"
            aria-label="Buscar"
          >
            <Search className="size-4" />
          </Link>

          <a
            href="https://play.google.com/store/apps/details?id=com.lidiabimba.clickbook"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-brand flex items-center gap-2 px-4 py-2 text-[12px] font-extrabold no-underline"
          >
            <img
              src="/bookvibes-icon.png"
              alt=""
              className="size-5 object-contain"
            />
            Descargar la app
          </a>
        </nav>

        {/* MENÚ MÓVIL */}
        <div className="flex items-center gap-2 sm:hidden">
          <Link
            href="/libros"
            aria-label="Buscar"
            className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-surface text-muted"
          >
            <Search className="size-4" />
          </Link>

          <button
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-surface text-fg"
          >
            {menuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>
        </div>
      </div>

      {/* DESPLEGABLE MÓVIL */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-bg/95 px-4 pb-5 pt-3 backdrop-blur-xl sm:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 text-[14px] font-semibold">
            <a
              href="/#vibes"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-muted hover:bg-surface hover:text-fg"
            >
              Vibes
            </a>

            <Link
              href="/libros"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-muted hover:bg-surface hover:text-fg"
            >
              Libros
            </Link>

            <Link
              href="/favoritos"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 rounded-xl px-4 py-3 text-muted hover:bg-surface hover:text-fg"
            >
              <Heart className="size-4" />
              Favoritos
            </Link>

            <Link
              href="/tienda"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-muted hover:bg-surface hover:text-fg"
            >
              Tienda
            </Link>

            <Link
              href="/sobre"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-muted hover:bg-surface hover:text-fg"
            >
              Sobre BookVibes
            </Link>

            <Link
              href="/contacto"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-muted hover:bg-surface hover:text-fg"
            >
              Contacto
            </Link>

            <a
              href="https://play.google.com/store/apps/details?id=com.lidiabimba.clickbook"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="btn-outline-brand mt-2 flex items-center justify-center gap-2 px-4 py-3 text-[12px] font-extrabold no-underline"
            >
              <img
                src="/bookvibes-icon.png"
                alt=""
                className="size-5 object-contain"
              />
              Descargar la app
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-white/5 px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-[11px] tracking-[0.28em] text-muted uppercase">
          Descubre · Siente · Lee
        </p>

        <div className="flex gap-5 text-[12px] font-semibold text-muted">
          <Link href="/aviso-legal" className="hover:text-fg">
            Aviso legal
          </Link>

          <Link href="/privacidad" className="hover:text-fg">
            Privacidad
          </Link>

          <Link href="/cookies" className="hover:text-fg">
            Cookies
          </Link>

          <Link href="/contacto" className="hover:text-fg">
            Contacto
          </Link>
        </div>
      </div>
    </footer>
  );
}