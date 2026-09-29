import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AvisoLegalPage() {
  return (
    <div className="bg-home-gradient min-h-dvh text-fg">
      <header className="border-b border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <Link
            href="/"
            className="text-sm font-bold text-fg no-underline"
          >
            BookVibes
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[11px] font-medium text-muted no-underline hover:text-fg"
        >
          <ArrowLeft className="size-3.5" />
          Volver
        </Link>

        <section className="mt-7">
          <h1 className="text-2xl font-bold tracking-tight">
            Aviso legal
          </h1>

          <p className="mt-2 text-[12px] leading-relaxed text-muted">
            Información legal de BookVibes.
          </p>
        </section>

        <div className="mt-7 space-y-6 text-[12px] leading-relaxed text-muted">
          <section>
            <h2 className="text-[14px] font-bold text-fg">
              1. Titular
            </h2>

            <div className="mt-2 rounded-[14px] border border-white/5 bg-surface/60 p-4">
              <p>
                <strong className="text-fg">Lidia Egea Gutierrez</strong>
              </p>

              <p className="mt-1">
                08810 Sant Pere de Ribes, Barcelona, España
              </p>

              <p className="mt-1">
                <a
                  href="mailto:bookvibes.app@gmail.com"
                  className="text-brass no-underline hover:text-copper"
                >
                  bookvibes.app@gmail.com
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-[14px] font-bold text-fg">
              2. Objeto del sitio web
            </h2>

            <p className="mt-2">
              BookVibes es un sitio web destinado al descubrimiento y
              recomendación de libros. Ofrece información sobre obras,
              autores, géneros y características de lectura para ayudar a
              descubrir nuevas historias.
            </p>
          </section>

          <section>
            <h2 className="text-[14px] font-bold text-fg">
              3. Enlaces de terceros y afiliación
            </h2>

            <p className="mt-2">
              BookVibes puede incluir enlaces a plataformas y establecimientos
              de venta de libros. Algunos pueden ser enlaces de afiliación,
              mediante los cuales BookVibes puede recibir una comisión si se
              realiza una compra, sin coste adicional para la persona
              compradora.
            </p>

            <p className="mt-2">
              Las compras se realizan directamente en los sitios web de
              terceros. BookVibes no interviene en el proceso de compra,
              pago, envío, devolución ni atención al cliente.
            </p>
          </section>

          <section>
            <h2 className="text-[14px] font-bold text-fg">
              4. Propiedad intelectual
            </h2>

            <p className="mt-2">
              Los contenidos propios de BookVibes, incluyendo textos, diseño,
              logotipos y elementos gráficos originales, están protegidos por
              la normativa aplicable en materia de propiedad intelectual.
            </p>

            <p className="mt-2">
              Las portadas, nombres de libros, autores y demás elementos de
              terceros pertenecen a sus respectivos titulares.
            </p>
          </section>

          <section>
            <h2 className="text-[14px] font-bold text-fg">
              5. Responsabilidad
            </h2>

            <p className="mt-2">
              BookVibes procura mantener la información actualizada, pero no
              garantiza que los datos relativos a precios, disponibilidad,
              promociones o condiciones de terceros permanezcan inalterados.
            </p>

            <p className="mt-2">
              Las condiciones aplicables serán las que figuren en cada
              momento en el sitio web del tercero correspondiente.
            </p>
          </section>

          <section>
            <h2 className="text-[14px] font-bold text-fg">
              6. Sitios web de terceros
            </h2>

            <p className="mt-2">
              BookVibes puede enlazar con páginas web externas y no controla
              su contenido, funcionamiento, disponibilidad ni políticas de
              privacidad.
            </p>
          </section>

          <section>
            <h2 className="text-[14px] font-bold text-fg">
              7. Modificaciones
            </h2>

            <p className="mt-2">
              Este aviso legal podrá modificarse cuando sea necesario para
              adaptarlo a cambios en el sitio web o en la normativa aplicable.
            </p>
          </section>

          <section>
            <h2 className="text-[14px] font-bold text-fg">
              8. Contacto
            </h2>

            <p className="mt-2">
              Para cualquier consulta relacionada con BookVibes:
            </p>

            <a
              href="mailto:bookvibes.app@gmail.com"
              className="mt-1 inline-block font-semibold text-brass no-underline hover:text-copper"
            >
              bookvibes.app@gmail.com
            </a>
          </section>
        </div>
      </main>

      <footer className="mt-10 border-t border-white/5 px-4 py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-5 text-[11px] font-semibold text-muted">
          <Link href="/libros" className="hover:text-fg">
            Libros
          </Link>

          <Link href="/tienda" className="hover:text-fg">
            Tienda
          </Link>

          <Link href="/sobre" className="hover:text-fg">
            Sobre
          </Link>

          <Link href="/contacto" className="hover:text-fg">
            Contacto
          </Link>

          <Link href="/aviso-legal" className="hover:text-fg">
            Aviso legal
          </Link>
        </div>
      </footer>
    </div>
  );
}