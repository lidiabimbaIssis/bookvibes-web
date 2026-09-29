export type VibeTag = { icon: string; label: string };

export type Book = {
  book_id: string;
  slug: string;
  title: string;
  author: string;
  mood: string;
  moodIcon: string;
  rating: number;
  genre: string;
  subgenero: string;
  trope: string;
  saga_info: string;
  contenido_sensible: string;
  hook: string;
  summary_es: string;
  vibe_tags: VibeTag[];
  ficha_lectura: { dificultad: string; estilo: string };
  pages: number;
  year: number;
  cover: {
    from: string;
    to: string;
    accent: string;
  };
};

export const MOODS = [
  { label: "Todos", icon: "✦" },
  { label: "Intenso", icon: "🔥" },
  { label: "Romántico", icon: "💜" },
  { label: "Épico", icon: "⚔️" },
  { label: "Ligero", icon: "☁️" },
  { label: "Llorar", icon: "💧" },
  { label: "Reflexionar", icon: "🤔" },
  { label: "Aprender", icon: "🎯" },
  { label: "Inspirador", icon: "✨" },
] as const;

export const VIBES = [
  { mood: "Intenso", web: "Intenso", hint: "Historias que no podrás soltar.", icon: "flame" as const, color: "#ff8a3d" },
  { mood: "Romántico", web: "Romántico", hint: "Historias que te hacen creer en el amor.", icon: "heart" as const, color: "#ff4d8d" },
  { mood: "Épico", web: "Épico", hint: "Mundos, lealtad, una saga.", icon: "swords" as const, color: "#45b7f5" },
  { mood: "Ligero", web: "Ligero", hint: "Leve, cálido, fácil de leer.", icon: "cloud" as const, color: "#3ecbff" },
  { mood: "Llorar", web: "Llorar", hint: "Que se quede contigo.", icon: "droplets" as const, color: "#c084fc" },
  { mood: "Reflexionar", web: "Reflexionar", hint: "Preguntas, no recetas.", icon: "brain" as const, color: "#4ade80" },
  { mood: "Aprender", web: "Aprender", hint: "Oficio, hábito, una página que sirve.", icon: "target" as const, color: "#38bdf8" },
  { mood: "Inspirador", web: "Inspirador", hint: "Para reempezar con algo de luz.", icon: "sparkles" as const, color: "#ffd23f" },
];

export const BOOKS: Book[] = [
  {
    book_id: "bv-001",
    slug: "la-hora-violeta",
    title: "La hora violeta",
    author: "Marta Quirce",
    mood: "Intenso",
    moodIcon: "🔥",
    rating: 4.4,
    genre: "Thriller",
    subgenero: "Thriller psicológico",
    trope: "Unreliable narrator",
    saga_info: "Libro independiente",
    contenido_sensible: "Violencia, duelo",
    hook: "A las 19:17, todos los relojes del edificio se detienen. Ella es la única que lo recuerda.",
    summary_es:
      "Nuria trabaja en un archivo judicial cuando empieza a recibir recortes de prensa de un crimen que, según todos, nunca ocurrió. Cada recorte llega a las 19:17. Mientras intenta demostrar que no está inventándolo, descubre que tres personas de su calle desaparecieron el mismo día —y que ella firmó los papeles que las borraron.",
    vibe_tags: [
      { icon: "🔥", label: "Intenso" },
      { icon: "🧠", label: "Tensión" },
      { icon: "🕵️", label: "Misterio" },
    ],
    ficha_lectura: { dificultad: "Media", estilo: "Ágil, claustrofóbico" },
    pages: 352,
    year: 2024,
    cover: { from: "#1a0410", to: "#4e027a", accent: "#ff2e78" },
  },
  {
    book_id: "bv-002",
    slug: "nieve-en-la-clavicula",
    title: "Nieve en la clavícula",
    author: "Irene Solana",
    mood: "Romántico",
    moodIcon: "💜",
    rating: 4.6,
    genre: "Romance",
    subgenero: "Romantasy urbana",
    trope: "Enemies to lovers",
    saga_info: "Libro independiente",
    contenido_sensible: "Escenas románticas",
    hook: "Le pidió que no la tocara. Él le ofreció un abrigo. El invierno no perdonó a ninguno.",
    summary_es:
      "Lea traduce cartas de una diplomática muerta. El heredero de esa correspondencia, frío hasta el hueso, necesita que termine el trabajo en una casa de montaña sin red. Lo que empieza como un encargo a destiempo se convierte en una guerra de orgullo, secretos de familia y una nieve que no deja salir a nadie.",
    vibe_tags: [
      { icon: "💜", label: "Romántico" },
      { icon: "🏔️", label: "Aislados" },
      { icon: "✉️", label: "Cartas" },
    ],
    ficha_lectura: { dificultad: "Ligera", estilo: "Lírico, dialogado" },
    pages: 318,
    year: 2025,
    cover: { from: "#0a0414", to: "#2a1060", accent: "#45b7f5" },
  },
  {
    book_id: "bv-003",
    slug: "el-ultimo-estandarte",
    title: "El último estandarte",
    author: "Rocío Belmonte",
    mood: "Épico",
    moodIcon: "⚔️",
    rating: 4.7,
    genre: "Fantasía",
    subgenero: "Fantasía épica",
    trope: "Found family / chosen one invertido",
    saga_info: "Saga del Salitre · libro 1",
    contenido_sensible: "Batallas, muerte",
    hook: "El imperio no eligió a una heroína. Eligió a la que peor mentía.",
    summary_es:
      "Sira no es la heredera de nada: es la cartógrafa que falsifica mapas para que los desertores no mueran. Cuando un estandarte maldito aparece en su taller, se ve arrastrada a una campaña naval donde cada isla habla un idioma distinto y los dioses cobran peaje en nombres propios. Primera entrega de una saga de lealtad, sal y traición.",
    vibe_tags: [
      { icon: "⚔️", label: "Épico" },
      { icon: "🌊", label: "Islas" },
      { icon: "🗺️", label: "Mapas" },
    ],
    ficha_lectura: { dificultad: "Alta", estilo: "Coral, cinematográfico" },
    pages: 512,
    year: 2023,
    cover: { from: "#041018", to: "#043552", accent: "#45b7f5" },
  },
  {
    book_id: "bv-004",
    slug: "cafe-para-tres-ausencias",
    title: "Café para tres ausencias",
    author: "Pablo Herráez",
    mood: "Ligero",
    moodIcon: "☁️",
    rating: 4.1,
    genre: "Contemporánea",
    subgenero: "Comedia bittersweet",
    trope: "Found family",
    saga_info: "Libro independiente",
    contenido_sensible: "Menciones a duelo",
    hook: "Abrió un café para no hablar con nadie. Al mes tenía lista de espera de secretos.",
    summary_es:
      "Nacho hereda el local de su tía en un barrio que ya no reconoce. Decide servir solo tres cafés al día —el resto del tiempo, silencio—. La regla dura una semana. Llegan una vecina que escribe obituarios, un chaval que finge ser crítico gastronómico y una perra que no es suya. Una novela corta, cálida, de gente que se tropieza hacia delante.",
    vibe_tags: [
      { icon: "☁️", label: "Ligero" },
      { icon: "☕", label: "Barrio" },
      { icon: "💛", label: "Ternura" },
    ],
    ficha_lectura: { dificultad: "Muy ligera", estilo: "Cercano, humor seco" },
    pages: 224,
    year: 2024,
    cover: { from: "#12080a", to: "#3a2010", accent: "#ffd23f" },
  },
  {
    book_id: "bv-005",
    slug: "lo-que-no-se-nombra",
    title: "Lo que no se nombra",
    author: "Elena Marín Valls",
    mood: "Llorar",
    moodIcon: "💧",
    rating: 4.8,
    genre: "Literaria",
    subgenero: "Novela íntima",
    trope: "Grief narrative",
    saga_info: "Libro independiente",
    contenido_sensible: "Duelo, enfermedad",
    hook: "Aprendió a decir adiós en voz baja para no despertar a la casa.",
    summary_es:
      "Tras la muerte de su hermana, Alba vuelve al pueblo a vaciar un armario. Dentro hay cintas, recetas y una lista de conversaciones que nunca tuvieron. La novela avanza por objetos: un jersey, un número de teléfono tachado, el olor a lejía de los lunes. No pide lágrimas; las encuentra.",
    vibe_tags: [
      { icon: "💧", label: "Llorar" },
      { icon: "🏠", label: "Pueblo" },
      { icon: "📼", label: "Memoria" },
    ],
    ficha_lectura: { dificultad: "Media", estilo: "Poético, contenido" },
    pages: 208,
    year: 2022,
    cover: { from: "#070210", to: "#1a2040", accent: "#9183b8" },
  },
  {
    book_id: "bv-006",
    slug: "el-mapa-interior",
    title: "El mapa interior",
    author: "Luis Aranda",
    mood: "Reflexionar",
    moodIcon: "🤔",
    rating: 4.3,
    genre: "Ensayo",
    subgenero: "Ensayo narrativo",
    trope: "Pensamiento en voz alta",
    saga_info: "Libro independiente",
    contenido_sensible: "Ninguno",
    hook: "No es un libro de autoayuda. Es un mapa de las preguntas que dejamos a medias.",
    summary_es:
      "Aranda recorre diez ideas —el aburrimiento, la culpa útil, el silencio en las ciudades— con anécdotas de archivos, trenes y cocinas ajenas. Cada capítulo cierra con una pregunta, no con un consejo. Para leer despacio, subrayar y discutir en voz baja.",
    vibe_tags: [
      { icon: "🤔", label: "Reflexionar" },
      { icon: "📚", label: "Ensayo" },
      { icon: "🧭", label: "Preguntas" },
    ],
    ficha_lectura: { dificultad: "Media-alta", estilo: "Claro, ensayístico" },
    pages: 256,
    year: 2023,
    cover: { from: "#0a0414", to: "#1a0828", accent: "#9a3cd1" },
  },
  {
    book_id: "bv-007",
    slug: "bitacora-de-un-naufragio-util",
    title: "Bitácora de un naufragio útil",
    author: "Sofía Cendra",
    mood: "Aprender",
    moodIcon: "🎯",
    rating: 4.2,
    genre: "No ficción",
    subgenero: "Oficio y hábito",
    trope: "Manual disfrazado de diario",
    saga_info: "Libro independiente",
    contenido_sensible: "Ninguno",
    hook: "Nadie te enseña a empezar otra vez. Este libro tampoco. Te enseña a no fingir que ya sabes.",
    summary_es:
      "Cendra, editora durante quince años, anota cómo se reconstruye un oficio cuando se rompe: cómo leer contratos, cómo decir que no, cómo volver a una página en blanco sin mitificarla. Práctico, honesto, con ejercicios cortos al final de cada bitácora.",
    vibe_tags: [
      { icon: "🎯", label: "Aprender" },
      { icon: "✍️", label: "Oficio" },
      { icon: "🛠️", label: "Hábitos" },
    ],
    ficha_lectura: { dificultad: "Ligera", estilo: "Directo, útil" },
    pages: 240,
    year: 2025,
    cover: { from: "#04140e", to: "#0a3a28", accent: "#00ffa3" },
  },
  {
    book_id: "bv-008",
    slug: "luciernagas-de-invierno",
    title: "Luciérnagas de invierno",
    author: "Javier Otero",
    mood: "Inspirador",
    moodIcon: "✨",
    rating: 4.5,
    genre: "Contemporánea",
    subgenero: "Novela de reinvención",
    trope: "Second chance",
    saga_info: "Libro independiente",
    contenido_sensible: "Ansiedad, mención a burnout",
    hook: "Volvió al pueblo a apagar las luces. Alguien las había dejado encendidas a propósito.",
    summary_es:
      "Tras dejar un trabajo que la estaba comiendo, Vera acepta restaurar las bombillas de un paseo marítimo que ya no usa nadie. Entre farolas, un radioaficionado y una niña que colecciona insectos, aprende una forma de valentía pequeña: quedarse cuando sería más fácil irse.",
    vibe_tags: [
      { icon: "✨", label: "Inspirador" },
      { icon: "🌊", label: "Costa" },
      { icon: "💡", label: "Reempezar" },
    ],
    ficha_lectura: { dificultad: "Ligera", estilo: "Cálido, luminoso" },
    pages: 280,
    year: 2024,
    cover: { from: "#0a0818", to: "#1a1040", accent: "#ffd23f" },
  },
  {
    book_id: "bv-009",
    slug: "dientes-de-cristal",
    title: "Dientes de cristal",
    author: "Nuria Belda",
    mood: "Romántico",
    moodIcon: "💜",
    rating: 4.5,
    genre: "Fantasía",
    subgenero: "Romantasy oscura",
    trope: "Morally gray / slow burn",
    saga_info: "Dúo de la Merced · libro 1",
    contenido_sensible: "Violencia, relaciones tóxicas",
    hook: "El trato era simple: un diente suyo por cada mentira de ella. Empezó a quedarse sin sonrisa.",
    summary_es:
      "En una ciudad donde los contratos se sellan con esmalte, Lira negocia con un prestamista que colecciona verdades. El romance es lento, cortante, y cada capítulo cobra un precio. Para quien quiera magia sucia y química incómoda, no cuentos de hadas.",
    vibe_tags: [
      { icon: "💜", label: "Romántico" },
      { icon: "🖤", label: "Oscuro" },
      { icon: "💎", label: "Tratos" },
    ],
    ficha_lectura: { dificultad: "Media", estilo: "Denso, sensorial" },
    pages: 400,
    year: 2025,
    cover: { from: "#140414", to: "#4e027a", accent: "#e8e4ff" },
  },
  {
    book_id: "bv-010",
    slug: "la-casa-de-las-mareas-cortadas",
    title: "La casa de las mareas cortadas",
    author: "Andrés Pellicer",
    mood: "Intenso",
    moodIcon: "🔥",
    rating: 4.3,
    genre: "Negra",
    subgenero: "Novela negra costera",
    trope: "Small town secret",
    saga_info: "Libro independiente",
    contenido_sensible: "Crimen, corrupción",
    hook: "El cadáver llegó con la marea. El pueblo juró que el mar no devuelve lo que se lleva.",
    summary_es:
      "Una inspectora destinada a un puerto gallego tropieza con un cuerpo sin huellas y un chigre que cierra cuando ella entra. Pescadores, una radio pirata y un polígono a medio construir. Ritmo de investigación clásico, paisaje que moja las páginas.",
    vibe_tags: [
      { icon: "🔥", label: "Intenso" },
      { icon: "🌧️", label: "Costa" },
      { icon: "📻", label: "Pueblo" },
    ],
    ficha_lectura: { dificultad: "Media", estilo: "Seco, atmosférico" },
    pages: 368,
    year: 2023,
    cover: { from: "#061018", to: "#0a3040", accent: "#45b7f5" },
  },
  {
    book_id: "bv-011",
    slug: "reyes-de-polen",
    title: "Reyes de polen",
    author: "Clara Montalbán",
    mood: "Épico",
    moodIcon: "⚔️",
    rating: 4.4,
    genre: "Fantasía",
    subgenero: "Fantasía de corte",
    trope: "Political intrigue / rivals",
    saga_info: "Libro independiente",
    contenido_sensible: "Intriga, muerte",
    hook: "El trono se hereda con una colmena. Quien no resista el veneno, no reina.",
    summary_es:
      "En un reino que mide el poder en miel y veneno, dos hermanastras compiten por una corona que mata a los indecisos. Cortes, jardines sellados y una lengua ritual que solo se habla en primavera. Épica de salón: menos batallas, más cuchillos en la mesa.",
    vibe_tags: [
      { icon: "⚔️", label: "Épico" },
      { icon: "🐝", label: "Corte" },
      { icon: "👑", label: "Poder" },
    ],
    ficha_lectura: { dificultad: "Media-alta", estilo: "Barroco contenido" },
    pages: 448,
    year: 2024,
    cover: { from: "#140a04", to: "#3a2808", accent: "#ffd23f" },
  },
  {
    book_id: "bv-012",
    slug: "un-cuerpo-que-no-es-mio",
    title: "Un cuerpo que no es mío",
    author: "Teresa Gallo",
    mood: "Intenso",
    moodIcon: "🔥",
    rating: 4.6,
    genre: "Thriller",
    subgenero: "Sci-fi cercano",
    trope: "Body swap / identidad",
    saga_info: "Libro independiente",
    contenido_sensible: "Disociación, violencia médica",
    hook: "Despertó en una clínica con otro nombre. El de ella seguía firmando en otra ciudad.",
    summary_es:
      "Una técnica de sueño inducido sale mal: dos mujeres despiertan intercambiadas y ninguna clínica admite el error. Una persigue al cuerpo; la otra, al DNI. Thriller de identidad en un Madrid de clínicas privadas y apps de bienestar que prometen demasiado.",
    vibe_tags: [
      { icon: "🔥", label: "Intenso" },
      { icon: "🧬", label: "Identidad" },
      { icon: "🏥", label: "Clínica" },
    ],
    ficha_lectura: { dificultad: "Media", estilo: "Nervioso, contemporáneo" },
    pages: 336,
    year: 2025,
    cover: { from: "#100414", to: "#2a0828", accent: "#ff2e78" },
  },
];

export function getBook(slug: string) {
  return BOOKS.find((b) => b.slug === slug);
}

export function searchBooks(q: string, mood: string, genre = "Todos") {
  const query = q.trim().toLowerCase();
  return BOOKS.filter((b) => {
    if (mood !== "Todos" && b.mood !== mood) return false;
    if (genre !== "Todos" && b.genre !== genre) return false;
    if (!query) return true;
    const blob = [
      b.title,
      b.author,
      b.genre,
      b.subgenero,
      b.trope,
      b.summary_es,
      b.hook,
      ...b.vibe_tags.map((t) => t.label),
    ]
      .join(" ")
      .toLowerCase();
    return blob.includes(query);
  });
}

// Enlaces de afiliado — calcados exactamente del BuyStoreModal.tsx de la
// app (mismos tags, mismos parámetros) para que las comisiones se
// registren igual que en la app. Kobo sin parámetro de afiliado todavía,
// pendiente de aprobación del programa (igual que en la app); en cuanto
// lo aprueben, se añade aquí también.

export function amazonUrl(book: Book) {
  const q = encodeURIComponent(`${book.title} ${book.author}`);
  return `https://www.amazon.es/s?k=${q}&i=stripbooks&tag=bookvibes04-21`;
}

export function casaUrl(book: Book) {
  const q = encodeURIComponent(`${book.title} ${book.author}`);
  const destino = encodeURIComponent(`https://www.casadellibro.com/?query=${q}`);
  return `https://www.awin1.com/cread.php?awinmid=21491&awinaffid=3032235&ued=${destino}`;
}

export function buscaUrl(book: Book) {
  const q = encodeURIComponent(`${book.title} ${book.author}`);
  return `https://www.buscalibre.es/libros/search?q=${q}&afiliado=8650186362af552a5b42`;
}

export function koboUrl(book: Book) {
  const q = encodeURIComponent(`${book.title} ${book.author}`);
  return `https://www.kobo.com/es/es/search?query=${q}`;
}