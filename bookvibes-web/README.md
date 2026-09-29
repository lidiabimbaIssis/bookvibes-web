# BookVibes — web

Web de BookVibes: catálogo por vibes, fichas con sinopsis y el rincón del lector.

Es un proyecto **Next.js** tuyo. No depende de Grok ni de xAI. Lo corres en tu ordenador, lo subes a **tu GitHub** y lo publicas en **tu Vercel**.

## Requisitos

- Node.js 18 o superior
- npm

## Arrancar en local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Subir a GitHub

En la carpeta del proyecto:

```bash
git init
git add .
git commit -m "BookVibes web"
```

Crea un repositorio vacío en GitHub y:

```bash
git remote add origin https://github.com/TU_USUARIO/bookvibes-web.git
git branch -M main
git push -u origin main
```

## Publicar en Vercel

1. Entra en [vercel.com](https://vercel.com) con tu cuenta.
2. **Add New → Project**.
3. Importa el repo `bookvibes-web`.
4. Framework: Next.js (lo detecta solo).
5. Deploy.

Cada `git push` a `main` vuelve a publicar.

## Qué hay dentro

- `app/` — páginas (inicio, libros, ficha, tienda, sobre, contacto)
- `components/` — cabecera, portadas, vibes, rincón, CTA de la app
- `data/books.ts` — libros de muestra (luego se cambia por tu API / MongoDB)
- `data/products.ts` — objetos del rincón (Amazon)
- `public/` — logo, foto de la chica, favicon, fotos de la tienda

## Más adelante

Cuando quieras los 2.000 libros de la app, se cambia `data/books.ts` para leer de tu API (la misma que usa BookVibes). No hace falta rehacer el diseño.

El tag de afiliada de Amazon se añade en `data/products.ts` (`amazonSearch`) y en `data/books.ts` (`amazonUrl`).
