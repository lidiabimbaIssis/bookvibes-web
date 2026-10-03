// app/api/catalog/route.ts
//
// Devuelve TODO el catálogo en versión ligera. La respuesta ya recortada
// queda cacheada en el CDN de Vercel durante 1 hora.

import { NextResponse } from "next/server";
import { getSlimCatalog } from "@/lib/catalog";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const books = await getSlimCatalog();

    return NextResponse.json(
      { books, total: books.length },
      {
        headers: {
          "Cache-Control":
            "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      },
    );
  } catch (error) {
    console.error("Error cargando catálogo:", error);

    return NextResponse.json(
      { error: "No se pudo cargar el catálogo" },
      { status: 502 },
    );
  }
}