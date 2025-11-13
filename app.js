/* =========================================================
   utilidades
========================================================= */
function dayOfYear(d = new Date()) {
  const start = new Date(d.getFullYear(), 0, 1);
  const diff = d - start;
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}
const DY = dayOfYear();

/* Imagen de portada por defecto (ya no se usa, pero la dejo por si la quieres luego) */
const FALLBACK_COVER =
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=600&auto=format&fit=crop";

/* =========================================================
   FRASES ESTOICAS (muchas)
   Fuente: obras clásicas de Marco Aurelio, Epicteto, Séneca,
   Musonio Rufo, Hierocles, etc. + formulaciones comunes.
========================================================= */
const STOIC_QUOTES = [
  { text: "La felicidad de tu vida depende de la calidad de tus pensamientos.", author: "Marco Aurelio" },
  { text: "No nos afecta lo que nos sucede, sino lo que nos decimos sobre lo que nos sucede.", author: "Epicteto" },
  { text: "No es libre quien no es dueño de sí mismo.", author: "Epicteto" },
  { text: "Si te aflige algo externo, no es eso lo que te perturba, sino tu juicio sobre ello.", author: "Marco Aurelio" },
  { text: "La suerte es lo que sucede cuando la preparación se encuentra con la oportunidad.", author: "Séneca" },
  { text: "El hombre sabio se basta a sí mismo, pero necesita amigos para ejercer su sabiduría.", author: "Séneca" },
  { text: "No esperes que los acontecimientos sucedan como quieres; desea que ocurran como ocurren.", author: "Epicteto" },
  { text: "Tu mente tomará la forma de aquello en lo que pienses habitualmente.", author: "Marco Aurelio" },
  { text: "No tenemos poco tiempo: tenemos mucho, pero lo desperdiciamos.", author: "Séneca" },
  { text: "Acuérdate de que morirás. Obra en consecuencia.", author: "Marco Aurelio" },
  { text: "Primero dite a ti mismo quién quieres ser; luego haz lo que debas hacer.", author: "Epicteto" },
  { text: "Nada grande se crea de repente.", author: "Epicteto" },
  { text: "La cólera es un ácido que daña más al recipiente que a aquello sobre lo que se vierte.", author: "Séneca" },
  { text: "Acepta lo que te toca y ama a aquellos con quienes el destino te une.", author: "Marco Aurelio" },
  { text: "Lo que escuchamos es una opinión, no un hecho. Lo que vemos es una perspectiva, no la verdad.", author: "Marco Aurelio" },
  { text: "Aquel que teme al dolor lo sufre dos veces: al temerlo y al padecerlo.", author: "Séneca" },
  { text: "No busques que los acontecimientos sucedan como quieres; decide quererlos como suceden.", author: "Epicteto" },
  { text: "El impedimento a la acción avanza la acción. Lo que se interpone se convierte en el camino.", author: "Marco Aurelio" },
  { text: "La pobreza no viene por la disminución de las riquezas, sino por la multiplicación de los deseos.", author: "Platón (adoptada por estoicos)" },
  { text: "Cuida tus pensamientos: se convierten en palabras; tus palabras: en actos; tus actos: en hábitos; tus hábitos: en carácter; tu carácter: en destino.", author: "Sabiduría estoica" },
  { text: "Elige no ser lastimado y no te sentirás lastimado: no te sentirás lastimado y no lo habrás sido.", author: "Marco Aurelio" },
  { text: "La educación es la libertad: liberación de la tiranía del azar y de los otros.", author: "Epicteto" },
  { text: "Domina tus pasiones, o ellas te dominarán a ti.", author: "Horacio (afín al estoicismo)" },
  { text: "El bienestar depende de tres cosas: controlar lo que puedes, aceptar lo que no puedes y distinguir entre ambas.", author: "Epicteto" },
  { text: "Trabaja no para ser admirado, sino para estar en paz contigo mismo.", author: "Marco Aurelio" },
  { text: "El ocio sin estudio es muerte y sepultura del hombre vivo.", author: "Séneca" },
  { text: "No es que las cosas sean difíciles que no nos atrevemos; es que no nos atrevemos que son difíciles.", author: "Séneca" },
  { text: "Haz lo correcto; lo demás no importa: ruido, reputación, miedo.", author: "Marco Aurelio" },
  { text: "La mejor venganza es no parecerse al agresor.", author: "Marco Aurelio" },
  { text: "Quien tiene un porqué puede soportar casi cualquier cómo.", author: "Epicteto" },
  { text: "Acuérdate: el control está en la intención, no en el resultado.", author: "Epicteto" },
  { text: "La tranquilidad proviene de ordenar la vida según la razón.", author: "Séneca" },
  { text: "Nada te pertenece salvo tus juicios y tus acciones.", author: "Epicteto" },
  { text: "La muerte nos sonríe a todos; lo único que podemos hacer es devolverle la sonrisa.", author: "Marco Aurelio" },
  { text: "Retírate dentro de ti mismo; la mente racional es una ciudadela inexpugnable.", author: "Marco Aurelio" },
  { text: "Cuando una cosa externa te turbe, piensa: no es la cosa, sino mi opinión sobre ella.", author: "Epicteto" },
  { text: "Sé estricto contigo y indulgente con los demás.", author: "Marco Aurelio" },
  { text: "La vida es bastante: aprende a usarla.", author: "Séneca" },
  { text: "No te quejes: actúa o acepta.", author: "Marco Aurelio" },
  { text: "Quien vive en armonía consigo mismo vive en armonía con el universo.", author: "Marco Aurelio" },
  { text: "Acostúmbrate a decir: '¿Qué poder tiene esto sobre mí?'", author: "Epicteto" },
  { text: "El tiempo cura lo que la razón no cura si la dejamos trabajar.", author: "Séneca" },
  { text: "No permitas que tu mente sea esclava de tus estados de ánimo.", author: "Epicteto" },
  { text: "La verdadera medida de riqueza es cuánto podrías perder sin perder tu tranquilidad.", author: "Musonio Rufo" },
  { text: "Vive de acuerdo con la naturaleza: sencillo en lo exterior, excelente en lo interior.", author: "Cleanthes" },
  { text: "El carácter se muestra en lo que eliges cuando nadie te mira.", author: "Séneca" },
  { text: "Respira, observa, elige: ahí reside tu libertad.", author: "Sabiduría estoica" },
  { text: "No malgastes más tiempo discutiendo cómo debe ser un buen hombre: sé uno.", author: "Marco Aurelio" },
  { text: "Nadie te hace daño sin tu consentimiento.", author: "Epicteto" },
  { text: "Aquello que nos duele nos instruye.", author: "Benjamin Franklin (espíritu estoico)" },
  { text: "El mejor antídoto contra la ira es el retraso.", author: "Séneca" },
  { text: "Entrénate a desear solo lo que depende de ti.", author: "Epicteto" },
  { text: "No es la persona la que te irrita, sino tu juicio sobre la persona.", author: "Epicteto" },
  { text: "Hoy escapé de la ansiedad. O no: la dejé ir, pues estaba en mí.", author: "Marco Aurelio" },
  { text: "Una gema no puede ser pulida sin fricción, ni un hombre perfeccionado sin pruebas.", author: "Séneca" },
  { text: "Sé breve en la palabra y generoso en la acción.", author: "Marco Aurelio" },
  { text: "La tranquilidad llega cuando reduces tus necesidades al mínimo razonable.", author: "Musonio Rufo" },
  { text: "El alma se tiñe del color de sus pensamientos.", author: "Marco Aurelio" },
  { text: "Haz hoy lo que depende de ti; mañana, lo que mañana dependa.", author: "Epicteto" }
];

/* =========================================================
   LIBROS (muchos)
   Clásicos + modernos; con portada y enlace cuando procede.
========================================================= */
const STOIC_BOOKS = [
  {
    title: "Meditaciones",
    author: "Marco Aurelio",
    note: "Reflexiones del emperador romano sobre virtud, deber y serenidad.",
    cover: "https://m.media-amazon.com/images/I/71W0xjzDKOL._AC_UF1000,1000_QL80_.jpg",
    link: "https://www.amazon.es/dp/8420631467"
  },
  {
    title: "Manual (Enquiridión)",
    author: "Epicteto",
    note: "Guía breve y práctica para vivir según la razón.",
    cover: "https://m.media-amazon.com/images/I/71w6Jt1PjPL._AC_UF1000,1000_QL80_.jpg",
    link: "https://www.amazon.es/dp/8425431324"
  },
  {
    title: "Disertaciones",
    author: "Epicteto",
    note: "Charlas de su escuela: control, disciplina, libertad interior.",
    cover: FALLBACK_COVER,
    link: "#"
  },
  {
    title: "Cartas a Lucilio",
    author: "Séneca",
    note: "Consejos sobre ética, tiempo y serenidad aplicados a la vida real.",
    cover: "https://m.media-amazon.com/images/I/81r9KQ6vpmL._AC_UF1000,1000_QL80_.jpg",
    link: "https://www.amazon.es/dp/8420632889"
  },
  {
    title: "Sobre la brevedad de la vida",
    author: "Séneca",
    note: "Un clásico sobre el buen uso del tiempo.",
    cover: "https://m.media-amazon.com/images/I/71m7UQz1ePL._AC_UF1000,1000_QL80_.jpg",
    link: "https://www.amazon.es/dp/8420632919"
  },
  {
    title: "De la tranquilidad del ánimo",
    author: "Séneca",
    note: "Cómo calmar la inquietud y hallar equilibrio.",
    cover: FALLBACK_COVER,
    link: "#"
  },
  {
    title: "De la ira",
    author: "Séneca",
    note: "Análisis y antídotos contra la cólera.",
    cover: FALLBACK_COVER,
    link: "#"
  },
  {
    title: "Lecciones y dichos",
    author: "Musonio Rufo",
    note: "El 'Sócrates romano': ética práctica, alimentación, trabajo y virtud.",
    cover: FALLBACK_COVER,
    link: "#"
  },
  {
    title: "Cómo ser un estoico",
    author: "Massimo Pigliucci",
    note: "Introducción moderna con ejercicios prácticos.",
    cover: "https://m.media-amazon.com/images/I/81xwH9lW7VL._AC_UF1000,1000_QL80_.jpg",
    link: "https://www.amazon.es/dp/8416720177"
  },
  {
    title: "A Guide to the Good Life",
    author: "William B. Irvine",
    note: "Estrategias estoicas para una vida tranquila.",
    cover: "https://m.media-amazon.com/images/I/71kgn3wJomL._AC_UF1000,1000_QL80_.jpg",
    link: "https://www.amazon.es/dp/0195374614"
  },
  {
    title: "The Practicing Stoic",
    author: "Ward Farnsworth",
    note: "Manual elegante de virtudes y ejercicios.",
    cover: "https://m.media-amazon.com/images/I/71o0T1m7f5L._AC_UF1000,1000_QL80_.jpg",
    link: "https://www.amazon.es/dp/1567926118"
  },
  {
    title: "How to Think Like a Roman Emperor",
    author: "Donald Robertson",
    note: "Estoicismo + terapia cognitiva a través de Marco Aurelio.",
    cover: "https://m.media-amazon.com/images/I/71yV8p0d1WL._AC_UF1000,1000_QL80_.jpg",
    link: "https://www.amazon.es/dp/1250196620"
  },
  {
    title: "Stoicism and the Art of Happiness",
    author: "Donald Robertson",
    note: "Aplicación práctica y psicológica del estoicismo.",
    cover: FALLBACK_COVER,
    link: "#"
  },
  {
    title: "The Daily Stoic",
    author: "Ryan Holiday & Stephen Hanselman",
    note: "366 meditaciones diarias con comentarios.",
    cover: "https://m.media-amazon.com/images/I/71M+H6h9q9L._AC_UF1000,1000_QL80_.jpg",
    link: "https://www.amazon.es/dp/1781257655"
  },
  {
    title: "El obstáculo es el camino",
    author: "Ryan Holiday",
    note: "Convierte las dificultades en ventajas.",
    cover: "https://m.media-amazon.com/images/I/81x7w3oQw8L._AC_UF1000,1000_QL80_.jpg",
    link: "https://www.amazon.es/dp/8493986235"
  },
  {
    title: "Ego es el enemigo",
    author: "Ryan Holiday",
    note: "Humildad y disciplina frente al ego.",
    cover: "https://m.media-amazon.com/images/I/71d8zv5u2mL._AC_UF1000,1000_QL80_.jpg",
    link: "https://www.amazon.es/dp/8494713459"
  },
  {
    title: "La quietud es la clave",
    author: "Ryan Holiday",
    note: "Silencio interior para decidir mejor.",
    cover: "https://m.media-amazon.com/images/I/81X7h6Z+YgL._AC_UF1000,1000_QL80_.jpg",
    link: "https://www.amazon.es/dp/8418273712"
  },
  {
    title: "La ciudadela interior",
    author: "Pierre Hadot",
    note: "Marco Aurelio y el ejercicio espiritual.",
    cover: FALLBACK_COVER,
    link: "#"
  },
  {
    title: "La filosofía como forma de vida",
    author: "Pierre Hadot",
    note: "Los ejercicios espirituales de la Antigüedad.",
    cover: FALLBACK_COVER,
    link: "#"
  },
  {
    title: "The Stoic Philosophy of Seneca",
    author: "Martha Nussbaum (ed.) / Moses Hadas (trad.)",
    note: "Selección comentada de textos de Séneca.",
    cover: FALLBACK_COVER,
    link: "#"
  },
  {
    title: "Vidas y opiniones de los filósofos ilustres",
    author: "Diógenes Laercio",
    note: "Contexto histórico y biográfico de las escuelas, incluidos estoicos.",
    cover: FALLBACK_COVER,
    link: "#"
  },
  {
    title: "The Hellenistic Philosophers",
    author: "A. A. Long & D. N. Sedley",
    note: "Fuentes y testimonios del estoicismo y escuelas afines.",
    cover: FALLBACK_COVER,
    link: "#"
  },
  {
    title: "Stoicism",
    author: "John Sellars",
    note: "Introducción clara al estoicismo clásico y moderno.",
    cover: FALLBACK_COVER,
    link: "#"
  },
  {
    title: "Meditations: A New Translation",
    author: "Gregory Hays (trad.)",
    note: "Traducción muy legible y moderna de Meditaciones.",
    cover: FALLBACK_COVER,
    link: "#"
  },
  {
    title: "Enchiridion and Selections",
    author: "Epictetus",
    note: "Manual y fragmentos esenciales.",
    cover: FALLBACK_COVER,
    link: "#"
  },
  {
    title: "Sobre la clemencia",
    author: "Séneca",
    note: "El poder bien ejercido y la virtud del gobernante.",
    cover: FALLBACK_COVER,
    link: "#"
  },
  {
    title: "Sobre los beneficios",
    author: "Séneca",
    note: "Dar y recibir con dignidad y prudencia.",
    cover: FALLBACK_COVER,
    link: "#"
  },
  {
    title: "Manual de ejercicios estoicos",
    author: "Diversos autores (moderno)",
    note: "Prácticas diarias para cultivar virtud y serenidad.",
    cover: FALLBACK_COVER,
    link: "#"
  }
];

/* =========================================================
   pintado de la frase del día
========================================================= */
(function paintQuote() {
  const box = document.getElementById("daily-quote");
  if (!box || !STOIC_QUOTES.length) return;
  const idx = DY % STOIC_QUOTES.length;
  const q = STOIC_QUOTES[idx];
  box.innerHTML = `
    <blockquote>
      “${q.text}”
      <span>- ${q.author}</span>
    </blockquote>
  `;
})();

/* =========================================================
   pintado del libro recomendado del día (SIN portada)
========================================================= */
(function paintBook() {
  const box = document.getElementById("daily-book");
  if (!box || !STOIC_BOOKS.length) return;
  const idx = (DY + 137) % STOIC_BOOKS.length;
  const b = STOIC_BOOKS[idx];

  const link = b.link || "#";

  box.innerHTML = `
    <div class="book-card">
      <div class="book-info">
        <h3 class="book-heading">Lectura recomendada del día</h3>
        <h4 class="book-title">${b.title}</h4>
        <p class="book-author">${b.author}</p>
        <p class="book-note">${b.note}</p>
        <a href="${link}" target="_blank" rel="noopener" class="btn small">Ver libro</a>
      </div>
    </div>
  `;
})();
