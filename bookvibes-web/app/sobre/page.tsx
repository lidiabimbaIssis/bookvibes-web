import {
  ArrowRight,
  Headphones,
  Heart,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import { SiteFooter, SiteHeader } from "@/components/site-header";

export default function SobrePage() {
  return (
    <div className="bg-home-gradient min-h-dvh text-fg">
      <SiteHeader />

      <article className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
        <p className="tagline-glow text-[11px] tracking-[0.42em] text-brass">
          SIENTE LO QUE LEES
        </p>

        <h1 className="font-display mt-4 text-4xl font-bold">
          Sobre BookVibes
        </h1>

        <p className="mt-5 text-[16px] leading-relaxed text-pretty text-muted">
          BookVibes no es una librería que lo tiene todo. Es una selección de
          historias elegidas por cómo se sienten. En la web descubres la
          portada, la sinopsis y sus vibes. El resto —el hook, el audio, el
          swipe— vive en la app.
        </p>

        <p className="mt-4 text-[16px] leading-relaxed text-pretty text-muted">
          Si no sabes qué leer, no empieces por el género. Empieza por el
          momento.
        </p>

        {/* EXPERIENCIA BOOKVIBES */}
        <div className="mt-10 rounded-2xl border border-violet-400/20 bg-surface/60 p-5 shadow-[0_0_35px_rgba(154,60,209,0.06)]">
          <h2 className="text-[18px] font-extrabold leading-tight">
            La experiencia completa está en BookVibes
          </h2>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="flex items-center gap-3 rounded-xl border border-violet-400/10 bg-violet-500/5 p-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-violet-300">
                <Headphones className="size-4" />
              </span>

              <span className="text-[13px] text-fg/90">
                Escucha el hook
              </span>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-violet-400/10 bg-violet-500/5 p-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-violet-300">
                <Heart className="size-4" />
              </span>

              <span className="text-[13px] text-fg/90">
                Descubre sus emociones
              </span>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-violet-400/10 bg-violet-500/5 p-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-violet-300">
                <Sparkles className="size-4" />
              </span>

              <span className="text-[13px] text-fg/90">
                Encuentra libros según tu Vibe
              </span>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-violet-400/10 bg-violet-500/5 p-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-violet-300">
                <MessageCircle className="size-4" />
              </span>

              <span className="text-[13px] text-fg/90">
                Habla con sus personajes
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
      </article>

      <SiteFooter />
    </div>
  );
}