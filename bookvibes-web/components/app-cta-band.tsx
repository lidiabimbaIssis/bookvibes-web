export function AppCtaBand() {
  return (
    <section
      id="descargar"
      className="relative overflow-hidden border-t border-white/5"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(520px 240px at 18% 50%, rgb(69 183 245 / 0.16), transparent 70%), radial-gradient(480px 220px at 82% 50%, rgb(154 60 209 / 0.2), transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:py-16">
        <img
  src="/bookvibes-app.png"
  alt="La aplicación BookVibes"
  className="w-full max-w-[590px] justify-self-center drop-shadow-[0_0_40px_rgba(69,183,245,0.28)] lg:justify-self-start"
/>

        <div>
          <h2 className="text-[26px] leading-tight font-extrabold text-balance sm:text-[30px]">
            La experiencia completa está en BookVibes
          </h2>

          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-pretty text-muted">
            Escucha el Hook, descubre cómo se siente la historia y entra en el
            universo de cada libro.
          </p>

          <a
            href="https://play.google.com/store/apps/details?id=com.lidiabimba.clickbook"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-brand mt-6 inline-flex items-center gap-2 px-6 py-3 text-[14px] font-extrabold no-underline"
          >
            <img
              src="/bookvibes-icon.png"
              alt=""
              className="size-[22px] object-contain"
            />
            Descargar la app
          </a>

          <p className="mt-3 text-[11px] text-muted">
            Android ahora · iPhone, en camino
          </p>
        </div>
      </div>

      <p className="font-display relative px-4 pb-8 text-center text-[12px] tracking-[0.22em] text-copper uppercase">
        — Las mejores historias siempre están por llegar —
      </p>
    </section>
  );
}