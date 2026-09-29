import Link from "next/link";

export default function PrivacidadPage() {
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
          Privacidad
        </p>

        <h1 className="mt-2 text-[22px] font-extrabold tracking-tight sm:text-[24px]">
          Política de privacidad
        </h1>

        <section className="mt-8 space-y-7 text-[13px] leading-relaxed text-muted">
          <div>
            <h2 className="text-[16px] font-extrabold text-fg">
              1. Responsable del tratamiento
            </h2>

            <p className="mt-2">
              Responsable: Lidia Egea Gutierrez
              <br />
              Domicilio: 08810 Sant Pere de Ribes, Barcelona, España
              <br />
              Email:{" "}
              <a
                href="mailto:bookvibes.app@gmail.com"
                className="font-semibold text-brass no-underline hover:text-copper"
              >
                bookvibes.app@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-[16px] font-extrabold text-fg">
              2. Datos personales que recogemos
            </h2>

            <p className="mt-2">
              BookVibes no requiere que los usuarios creen una cuenta y no
              dispone actualmente de formularios de registro, newsletter o
              sistemas propios destinados a recopilar datos personales de los
              visitantes.
            </p>

            <p className="mt-2">
              Si una persona decide contactar voluntariamente con BookVibes
              mediante email, podremos recibir los datos incluidos en ese
              mensaje, como su dirección de correo electrónico y el contenido
              de la comunicación.
            </p>
          </div>

          <div>
            <h2 className="text-[16px] font-extrabold text-fg">
              3. Finalidad del tratamiento
            </h2>

            <p className="mt-2">
              Los datos que una persona facilite voluntariamente por email se
              utilizarán únicamente para atender su consulta, responder a su
              comunicación o gestionar la solicitud realizada.
            </p>
          </div>

          <div>
            <h2 className="text-[16px] font-extrabold text-fg">
              4. Base jurídica
            </h2>

            <p className="mt-2">
              Cuando una persona contacta voluntariamente con BookVibes por
              email, la base jurídica aplicable será, según corresponda, el
              consentimiento de la persona interesada y/o la gestión de la
              comunicación o solicitud realizada.
            </p>
          </div>

          <div>
            <h2 className="text-[16px] font-extrabold text-fg">
              5. Conservación de los datos
            </h2>

            <p className="mt-2">
              Los datos recibidos mediante comunicaciones por email se
              conservarán durante el tiempo necesario para atender la consulta
              y, cuando corresponda, durante los plazos necesarios para
              cumplir obligaciones legales.
            </p>
          </div>

          <div>
            <h2 className="text-[16px] font-extrabold text-fg">
              6. Destinatarios
            </h2>

            <p className="mt-2">
              BookVibes no vende ni cede datos personales a terceros con fines
              comerciales.
            </p>

            <p className="mt-2">
              Determinados proveedores tecnológicos necesarios para el
              funcionamiento del sitio web pueden tratar información técnica
              en el marco de la prestación de sus servicios y conforme a sus
              propias políticas de privacidad.
            </p>
          </div>

          <div>
            <h2 className="text-[16px] font-extrabold text-fg">
              7. Enlaces a terceros
            </h2>

            <p className="mt-2">
              BookVibes contiene enlaces a páginas web de terceros, incluidas
              tiendas y plataformas donde pueden adquirirse libros. Una vez
              que el usuario accede a esos sitios, serán aplicables sus
              propias políticas de privacidad y protección de datos.
            </p>
          </div>

          <div>
            <h2 className="text-[16px] font-extrabold text-fg">
              8. Derechos de los usuarios
            </h2>

            <p className="mt-2">
              Las personas cuyos datos personales sean tratados pueden ejercer,
              cuando resulte aplicable, los derechos de acceso, rectificación,
              supresión, oposición, limitación del tratamiento y portabilidad,
              así como retirar su consentimiento cuando el tratamiento se base
              en él.
            </p>

            <p className="mt-2">
              Para ejercer estos derechos puedes escribir a:
              <br />
              <a
                href="mailto:bookvibes.app@gmail.com"
                className="font-semibold text-brass no-underline hover:text-copper"
              >
                bookvibes.app@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-[16px] font-extrabold text-fg">
              9. Reclamaciones
            </h2>

            <p className="mt-2">
              Si consideras que el tratamiento de tus datos personales no se
              ajusta a la normativa aplicable, puedes presentar una reclamación
              ante la Agencia Española de Protección de Datos (AEPD).
            </p>
          </div>

          <div>
            <h2 className="text-[16px] font-extrabold text-fg">
              10. Actualizaciones
            </h2>

            <p className="mt-2">
              Esta política de privacidad podrá actualizarse cuando sea
              necesario debido a cambios en BookVibes, en los servicios
              utilizados o en la normativa aplicable.
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