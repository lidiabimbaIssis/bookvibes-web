import Link from "next/link";

export default function CookiesPage() {
  return (
    <div className="min-h-dvh bg-home-gradient text-fg">
      <header className="border-b border-white/5">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-5 sm:px-6">
          <Link
            href="/"
            className="text-[18px] font-extrabold tracking-tight text-fg no-underline"
          >
            BookVibes
          </Link>

          <Link
            href="/"
            className="text-[12px] font-semibold text-muted no-underline hover:text-fg"
          >
            Volver
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <p className="text-[11px] font-extrabold tracking-[0.22em] text-copper uppercase">
          Cookies
        </p>

        <h1 className="mt-2 text-[22px] font-extrabold tracking-tight sm:text-[24px]">
          Política de cookies
        </h1>

        <section className="mt-8 space-y-7 text-[13px] leading-relaxed text-muted">
          <div>
            <h2 className="text-[16px] font-extrabold text-fg">
              1. ¿Qué son las cookies?
            </h2>

            <p className="mt-2">
              Las cookies son pequeños archivos o datos que una página web
              puede guardar en el navegador del usuario. Permiten, entre otras
              cosas, recordar determinadas preferencias o facilitar el
              funcionamiento técnico del sitio.
            </p>
          </div>

          <div>
            <h2 className="text-[16px] font-extrabold text-fg">
              2. ¿Qué cookies utiliza BookVibes?
            </h2>

            <p className="mt-2">
              BookVibes no utiliza actualmente cookies propias destinadas a
              publicidad personalizada, creación de perfiles o seguimiento
              comercial de los usuarios.
            </p>

            <p className="mt-2">
              Tampoco utilizamos actualmente herramientas propias de analítica
              publicitaria o sistemas similares destinados a rastrear la
              actividad del usuario con fines comerciales.
            </p>

            <p className="mt-2">
              El sitio puede utilizar mecanismos técnicos necesarios para su
              funcionamiento, incluyendo aquellos que puedan depender de la
              infraestructura tecnológica utilizada para prestar el servicio.
            </p>
          </div>

          <div>
            <h2 className="text-[16px] font-extrabold text-fg">
              3. Cookies de terceros
            </h2>

            <p className="mt-2">
              BookVibes incluye enlaces hacia sitios web de terceros, como
              tiendas y plataformas donde pueden adquirirse libros. Cuando
              accedes a esos sitios, sus propias políticas de cookies y
              privacidad pueden ser aplicables.
            </p>

            <p className="mt-2">
              BookVibes no controla las cookies que puedan utilizar esos
              terceros una vez que abandonas nuestro sitio web.
            </p>
          </div>

          <div>
            <h2 className="text-[16px] font-extrabold text-fg">
              4. ¿Cómo puedes gestionar las cookies?
            </h2>

            <p className="mt-2">
              Puedes configurar o eliminar las cookies desde las opciones de
              privacidad y configuración de tu navegador. Ten en cuenta que
              desactivar determinadas cookies técnicas puede afectar al
              funcionamiento de algunos sitios web.
            </p>
          </div>

          <div>
            <h2 className="text-[16px] font-extrabold text-fg">
              5. Actualizaciones
            </h2>

            <p className="mt-2">
              Esta política puede actualizarse si cambian las tecnologías,
              servicios o funcionalidades utilizadas en BookVibes.
            </p>
          </div>

          <div>
            <h2 className="text-[16px] font-extrabold text-fg">
              6. Contacto
            </h2>

            <p className="mt-2">
              Si tienes alguna duda sobre el uso de cookies en BookVibes,
              puedes escribirnos a{" "}
              <a
                href="mailto:bookvibes.app@gmail.com"
                className="font-semibold text-brass no-underline hover:text-copper"
              >
                bookvibes.app@gmail.com
              </a>
              .
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-5 gap-y-2 px-4 py-7 text-[11px] text-muted">
          <Link
            href="/aviso-legal"
            className="no-underline hover:text-fg"
          >
            Aviso legal
          </Link>

          <Link
            href="/privacidad"
            className="no-underline hover:text-fg"
          >
            Privacidad
          </Link>

          <Link
            href="/cookies"
            className="no-underline hover:text-fg"
          >
            Cookies
          </Link>

          <Link
            href="/contacto"
            className="no-underline hover:text-fg"
          >
            Contacto
          </Link>
        </div>
      </footer>
    </div>
  );
}