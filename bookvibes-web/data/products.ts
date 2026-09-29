export const PRODUCT_CATS = ["Todos", "Lectura", "Escritura", "Rincón"] as const;

export type Product = {
  id: string;
  name: string;
  blurb: string;
  cat: (typeof PRODUCT_CATS)[number];
  image: string;
  query: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "lampara",
    name: "Lámpara de lectura",
    blurb: "Luz fría en la página, no en la habitación.",
    cat: "Lectura",
    image: "/tienda/lampara.jpg",
    query: "lámpara lectura pinza libro recargable",
  },
  {
    id: "marcapaginas",
    name: "Marcapáginas",
    blurb: "Que no se te escape el sitio.",
    cat: "Lectura",
    image: "/tienda/marcapaginas.jpg",
    query: "marcapáginas metal libros",
  },
  {
    id: "atril",
    name: "Atril de lectura",
    blurb: "Manos libres. El libro se queda abierto.",
    cat: "Lectura",
    image: "/tienda/atril.jpg",
    query: "atril lectura soporte libro madera",
  },
  {
    id: "cuaderno",
    name: "Cuaderno y pluma",
    blurb: "Para lo que el libro te deja escrito.",
    cat: "Escritura",
    image: "/tienda/cuaderno.jpg",
    query: "cuaderno lino pluma estilográfica",
  },
  {
    id: "taza",
    name: "Taza de lectura",
    blurb: "El otro personaje de cada capítulo.",
    cat: "Rincón",
    image: "/tienda/taza.jpg",
    query: "taza lectura libros cerámica",
  },
  {
    id: "manta",
    name: "Manta de sofá",
    blurb: "El nido. Una saga cabe ahí.",
    cat: "Rincón",
    image: "/tienda/manta.jpg",
    query: "manta lectura sofá punto",
  },
];

export function amazonSearch(query: string) {
  const url = new URL("https://www.amazon.es/s");
  url.searchParams.set("k", query);
  url.searchParams.set("tag", "bookvibes04-21");
  return url.toString();
}
