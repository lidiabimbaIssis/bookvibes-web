import Link from "next/link";
import { Mail, ArrowLeft } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-header";

export default function ContactoPage() {
  return (
    <div className="bg-home-gradient min-h-dvh text-fg">
      <SiteHeader />

      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[13px] font-semibold text-muted no-underline hover:text-fg"
        >
          <ArrowLeft className="size-4" />
          Volver a BookVibes
        </Link>

        <section className="mt-10">
          <p className="text-[11px] font-extrabold tracking-[0.22em] text-copper uppercase">
            Contacto
          </p>

          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            ¿Hablamos?
          </h1>

          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
            ¿Tienes una pregunta, una propuesta o quieres colaborar con
            BookVibes? Escríbenos directamente por email.
          </p>
        </section>

        <section className="mt-8 rounded-[24px] border border-white/10 bg-surface p-5 sm:p-7">
          <div className="flex items-start gap-4">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-brass/20 bg-brass/10 text-brass">
              <Mail className="size-5" />
            </div>

            <div>
              <p className="text-[12px] font-extrabold tracking-[0.12em] text-muted uppercase">
                Escríbenos
              </p>

              <a
                href="mailto:bookvibes.app@gmail.com"
                className="mt-1 inline-block text-[16px] font-bold text-brass no-underline hover:text-copper"
              >
                bookvibes.app@gmail.com
              </a>

              <p className="mt-2 text-[13px] leading-relaxed text-muted">
                Se abrirá tu aplicación de correo para que puedas escribirnos
                directamente.
              </p>
            </div>
          </div>

          <a
            href="mailto:bookvibes.app@gmail.com"
            className="btn-outline-brand mt-6 flex items-center justify-center gap-2 px-5 py-3 text-[13px] font-extrabold no-underline"
          >
            <Mail className="size-4" />
            Escribir un email
          </a>
        </section>

        <p className="mt-6 text-center text-[11px] leading-relaxed text-muted">
          BookVibes es un espacio para descubrir historias, autores y nuevas
          lecturas.
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}