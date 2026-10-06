"use client";

import { useEffect, useState } from "react";

type AppFeatureCardProps = {
  icon: React.ReactNode;
  children: React.ReactNode;
};

export function AppFeatureCard({
  icon,
  children,
}: AppFeatureCardProps) {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (!showMessage) return;

    const timer = window.setTimeout(() => {
      setShowMessage(false);
    }, 2000);

    return () => window.clearTimeout(timer);
  }, [showMessage]);

  return (
    <div
      tabIndex={0}
      role="button"
      onClick={() => setShowMessage(true)}
      className="group relative flex cursor-pointer items-center gap-3 rounded-xl border border-violet-400/10 bg-violet-500/5 p-3 outline-none"
    >
      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-violet-300">
        {icon}
      </span>

      <span
        className={`text-[13px] text-fg/90 transition-opacity duration-200 ${
          showMessage ? "opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </span>

      <span
        className={`pointer-events-none absolute inset-0 flex items-center justify-center rounded-xl bg-[#111026]/95 px-3 text-center text-[12px] font-extrabold text-sky-300 transition-opacity duration-200 ${
          showMessage
            ? "opacity-100"
            : "opacity-0 group-hover:opacity-100"
        }`}
      >
        📱 Disponible en la app
      </span>
    </div>
  );
}