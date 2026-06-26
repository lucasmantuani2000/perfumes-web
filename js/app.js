const whatsappNumber = "59898303316";

const perfumes = [
  {
    id: "afnan-9pm",
    nombre: "AFNAN 9PM",
    precio: "$3.990",
    categorias: ["Árabes", "Hombre"],
    aroma: "Vainilla, manzana, canela, dulce",
    imagen: "img/9pm.png",
    fotos: ["img/9pm.png"],
    descripcion: "AFNAN 9PM es una fragancia dulce, intensa y moderna. Ideal para la noche, salidas, fiestas o momentos donde querés destacar.",
    notas: {
      salida: "Manzana, canela y bergamota",
      corazon: "Lavanda, flor de azahar y notas dulces",
      fondo: "Vainilla, haba tonka, ámbar y maderas"
    },
    duracion: "Alta",
    proyeccion: "Alta"
  },
  {
    id: "polo-black",
    nombre: "Polo Black",
    precio: "$3.400",
    categorias: ["Hombre", "Diseñador"],
    aroma: "Mango, pachulí, sándalo",
    imagen: "img/polo-black.png",
    fotos: ["img/polo-black.png"],
    descripcion: "Polo Black es una fragancia masculina elegante, moderna y versátil. Combina un perfil fresco con un fondo más amaderado, ideal para uso diario, salidas o reuniones.",
    notas: {
      salida: "Mango helado, mandarina y limón",
      corazon: "Salvia y hediona",
      fondo: "Sándalo, pachulí y haba tonka"
    },
    duracion: "Media",
    proyeccion: "Moderada"
  },
  {
    id: "hugo-boss-dark-blue",
    nombre: "Hugo Boss Dark Blue",
    precio: "$2.100",
    categorias: ["Hombre", "Diseñador"],
    aroma: "Cítrico, especiado, masculino",
    imagen: "img/dark-blue.png",
    fotos: ["img/dark-blue.png"],
    descripcion: "Hugo Boss Dark Blue es un perfume masculino con carácter, de salida cítrica y un toque especiado. Es una opción accesible, diferente y con personalidad.",
    notas: {
      salida: "Naranja, jengibre, lima y limón",
      corazon: "Geranio, ciprés y cardamomo",
      fondo: "Vainilla, benjuí, vetiver y cedro"
    },
    duracion: "Media",
    proyeccion: "Moderada"
  },
  {
    id: "tommy-man",
    nombre: "Tommy Man",
    precio: "$2.300",
    categorias: ["Hombre", "Diseñador"],
    aroma: "Fresco, limpio, clásico",
    imagen: "img/tommy-man.png",
    fotos: ["img/tommy-man.png"],
    descripcion: "Tommy Man es una fragancia fresca, juvenil y muy fácil de usar. Ideal para el día a día, clima cálido, trabajo, facultad o salidas informales.",
    notas: {
      salida: "Menta, lavanda, bergamota y pomelo",
      corazon: "Manzana, arándano y rosa",
      fondo: "Ámbar, cactus y algodón"
    },
    duracion: "Media",
    proyeccion: "Suave a moderada"
  },
  {
    id: "tommy-girl-forever",
    nombre: "Tommy Girl Forever",
    precio: "$2.300",
    categorias: ["Mujer", "Diseñador"],
    aroma: "Pera, jazmín, ámbar",
    imagen: "img/tommy-girl-forever.png",
    fotos: ["img/tommy-girl-forever.png"],
    descripcion: "Tommy Girl Forever es una fragancia femenina fresca, frutal y luminosa. Perfecta para quienes buscan un perfume moderno, elegante y versátil.",
    notas: {
      salida: "Pera, bergamota y mora",
      corazon: "Jazmín, peonía e iris",
      fondo: "Ámbar y sándalo"
        },
    duracion: "Media",
    proyeccion: "Moderada"
  },
  {
    id: "tommy-girl-now",
    nombre: "Tommy Girl Now",
    precio: "$2.300",
    categorias: ["Mujer", "Diseñador"],
    aroma: "Bergamota, magnolia, almizcle",
    imagen: "img/tommy-girl-now.png",
    fotos: ["img/tommy-girl-now.png"],
    descripcion: "Tommy Girl Now es una fragancia femenina moderna, fresca y juvenil. Tiene un perfil alegre, frutal y fácil de usar todos los días.",
    notas: {
      salida: "Bergamota y mandarina",
      corazon: "Magnolia y menta",
      fondo: "Cachemira y almizcle"
    },
    duracion: "Media",
    proyeccion: "Moderada"
  },
  {
    id: "calvin-klein-eternity",
    nombre: "Calvin Klein Eternity",
    precio: "$2.600",
    categorias: ["Hombre", "Diseñador"],
    aroma: "Lavanda, cítrico, amaderado",
    imagen: "img/ck-eternity.png",
    fotos: ["img/ck-eternity.png"],
    descripcion: "Calvin Klein Eternity es un clásico masculino fresco, limpio y elegante. Es ideal para uso diario, oficina o para quienes buscan un perfume sobrio y confiable.",
    notas: {
      salida: "Lavanda, mandarina, bergamota y limón",
      corazon: "Cilantro, albahaca, jazmín y geranio",
      fondo: "Sándalo, vetiver, ámbar y palo de rosa"
    },
    duracion: "Media",
    proyeccion: "Moderada"
  },
  {
    id: "calvin-klein-in2u",
    nombre: "Calvin Klein IN2U",
    precio: "$2.600",
    categorias: ["Hombre", "Diseñador"],
    aroma: "Cítrico, fresco, moderno",
    imagen: "img/ck-in2u.png",
    fotos: ["img/ck-in2u.png"],
    descripcion: "Calvin Klein IN2U es una fragancia fresca, joven y moderna. Tiene una salida cítrica muy agradable y un fondo más cálido, ideal para el día a día.",
    notas: {
      salida: "Limón y hojas de tomate",
      corazon: "Cacao y especias",
      fondo: "Cedro, vetiver y almizcle blanco"
    },
    duracion: "Media",
    proyeccion: "Moderada"
  },
  {
    id: "ch-212-nyc-mujer",
    nombre: "CH 212 NYC",
    precio: "$5.700",
    categorias: ["Mujer", "Diseñador"],
    aroma: "Floral, limpio, urbano",
    imagen: "img/212-nyc-mujer.png",
    fotos: ["img/212-nyc-mujer.png"],
    descripcion: "CH 212 NYC Mujer es una fragancia limpia, moderna y urbana. Tiene un estilo fresco y floral, ideal para mujeres que buscan un aroma elegante sin ser pesado.",
    notas: {
      salida: "Flor de azahar, bergamota y mandarina",
      corazon: "Gardenia, camelia, lirio y jazmín",
      fondo: "Almizcle y sándalo"
    },
    duracion: "Media",
    proyeccion: "Moderada"
  },
  {
    id: "queen-of-temptation-elegance",
    nombre: "Queen of Temptation Elegance",
    precio: "$1.500",
    categorias: ["Árabes", "Mujer"],
    aroma: "Dulce, floral, sensual",
    imagen: "img/queen-seduction.png",
    fotos: ["img/queen-seduction.png"],
    descripcion: "Queen of Temptation Elegance es una fragancia femenina dulce y elegante, pensada para quienes buscan un aroma llamativo, sensual y accesible.",
    notas: {
      salida: "Notas frutales y dulces",
      corazon: "Flores blancas y acordes florales",
      fondo: "Vainilla, almizcle y ámbar"
    },
    duracion: "Media",
    proyeccion: "Moderada"
  },
  {
    id: "queen-of-temptation-seduction",
    nombre: "Queen of Temptation Seduction",
    precio: "$1.500",
    categorias: ["Árabes", "Mujer"],
    aroma: "Dulce, intenso, sensual",
    imagen: "img/queen-seduction2.png",
    fotos: ["img/queen-seduction2.png"],
    descripcion: "Queen of Temptation Seduction es una fragancia femenina intensa, dulce y seductora. Ideal para salidas, noche o para quienes prefieren aromas más presentes.",
    notas: {
      salida: "Frutas dulces y notas brillantes",
      corazon: "Flores intensas y acordes dulces",
      fondo: "Vainilla, ámbar y almizcle"
    },
    duracion: "Media a alta",
    proyeccion: "Moderada a alta"
  },
  {
    id: "queen-of-temptation-passion",
    nombre: "Queen of Temptation Passion",
    precio: "$1.500",
    categorias: ["Árabes", "Mujer"],
    aroma: "Jazmín, azafrán, cedro",
    imagen: "img/queen-passion.png",
    fotos: ["img/queen-passion.png"],
    descripcion: "Queen of Temptation Passion es una fragancia femenina elegante, cálida y sofisticada. Combina notas florales con un fondo amaderado que deja una estela muy agradable.",
    notas: {
      salida: "Azafrán y notas luminosas",
      corazon: "Jazmín",
      fondo: "Cedro, ámbar y almizcle"
    },
    duracion: "Media a alta",
    proyeccion: "Moderada"
  },
  {
    id: "lattafa-asad-bourbon",
    nombre: "Lattafa Asad Bourbon",
    precio: "$2.100",
    categorias: ["Árabes", "Hombre"],
    aroma: "Dulce, vainilla, cacao",
    imagen: "img/asad-bourbon.png",
    fotos: ["img/asad-bourbon.png"],
    descripcion: "Lattafa Asad Bourbon es una fragancia árabe intensa, dulce y especiada. Tiene un perfil cálido, ideal para noche, invierno o para quienes buscan un perfume con presencia.",
    notas: {
      salida: "Pimienta rosa, lavanda y mirra",
      corazon: "Cacao, davana y nuez moscada",
      fondo: "Vainilla bourbon, ámbar y vetiver"
    },
    duracion: "Alta",
    proyeccion: "Alta"
  },
  {
    id: "antonio-banderas-the-icon",
    nombre: "Antonio Banderas The Icon",
    precio: "$2.100",
    categorias: ["Hombre", "Diseñador"],
    aroma: "Pomelo, lavanda, sándalo",
    imagen: "img/antonio-banderas-the-icon.png",
    fotos: ["img/antonio-banderas-the-icon.png"],
    descripcion: "Antonio Banderas The Icon es una fragancia masculina moderna, fresca y elegante. Buena opción para uso diario o para regalar.",
    notas: {
      salida: "Pomelo y pimienta negra",
      corazon: "Lavanda",
      fondo: "Sándalo y musgo de roble"
    },
    duracion: "Media",
    proyeccion: "Moderada"
  },
  {
    id: "burberry-london",
    nombre: "Burberry London",
    precio: "$3.100",
    categorias: ["Mujer", "Diseñador"],
    aroma: "Rosa, jazmín, madreselva",
    imagen: "img/burberry-london.png",
    fotos: ["img/burberry-london.png"],
    descripcion: "Burberry London Mujer es una fragancia floral elegante, femenina y clásica. Ideal para quienes buscan un perfume delicado pero con presencia.",
    notas: {
      salida: "Rosa, madreselva y mandarina",
      corazon: "Jazmín, peonía, flor de tiaré y clementina",
      fondo: "Almizcle, sándalo y pachulí"
    },
    duracion: "Media",
    proyeccion: "Moderada"
  },
  {
    id: "ch-212-men-sexy",
    nombre: "CH 212 MEN Sexy",
    precio: "$3.800",
    categorias: ["Hombre", "Diseñador"],
    aroma: "Mandarina, pimienta, vainilla",
    imagen: "img/212-men-sexy.png",
    fotos: ["img/212-men-sexy.png"],
    descripcion: "CH 212 Men Sexy es una fragancia masculina cálida, especiada y seductora. Ideal para noche, salidas o climas frescos.",
    notas: {
      salida: "Mandarina, bergamota y notas verdes",
      corazon: "Pimienta, cardamomo y flores",
      fondo: "Vainilla, sándalo, ámbar y almizcle"
    },
    duracion: "Media a alta",
    proyeccion: "Moderada"
  },
  {
    id: "ch-212-vip-black",
    nombre: "CH 212 VIP Black",
    precio: "$3.800",
    categorias: ["Hombre", "Diseñador"],
    aroma: "Lavanda, anís, vainilla",
    imagen: "img/212-vip-black.png",
    fotos: ["img/212-vip-black.png"],
    descripcion: "CH 212 VIP Black es una fragancia masculina intensa, dulce y nocturna. Tiene un perfil moderno y llamativo, ideal para fiestas y salidas.",
    notas: {
      salida: "Absenta, anís e hinojo",
      corazon: "Lavanda",
      fondo: "Vainilla negra y almizcle"
    },
    duracion: "Alta",
    proyeccion: "Alta"
  },
  {
    id: "ch-212-men-nyc",
    nombre: "CH 212 MEN NYC",
    precio: "$3.800",
    categorias: ["Hombre", "Diseñador"],
    aroma: "Bergamota, jengibre, sándalo",
    imagen: "img/212-nyc-men.png",
    fotos: ["img/212-nyc-men.png"],
    descripcion: "CH 212 Men NYC es una fragancia fresca, limpia y urbana. Muy versátil para el día a día, oficina o uso casual.",
    notas: {
      salida: "Bergamota, toronja, especias y petitgrain",
      corazon: "Jengibre, gardenia, violeta y salvia",
      fondo: "Sándalo, almizcle, vetiver y madera de gaiac"
    },
    duracion: "Media",
    proyeccion: "Moderada"
  },
  {
    id: "dior-sauvage",
    nombre: "Dior Sauvage",
    precio: "$6.100",
    categorias: ["Hombre", "Diseñador"],
    aroma: "Pimienta, bergamota, ambroxan",
    imagen: "img/dior-sauvage.png",
    fotos: ["img/dior-sauvage.png"],
    descripcion: "Dior Sauvage es una fragancia masculina fresca, intensa y muy reconocida. Es versátil, moderna y funciona muy bien tanto de día como de noche.",
    notas: {
      salida: "Bergamota de Calabria y pimienta",
      corazon: "Lavanda, geranio, pimienta rosa y elemi",
      fondo: "Ambroxan, cedro y ládano"
    },
    duracion: "Alta",
    proyeccion: "Alta"
  }
];

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");

let currentCategory = "Todos";

function renderPerfumes() {
  const searchText = searchInput.value.toLowerCase();

  const filteredPerfumes = perfumes.filter(perfume => {
    const matchesCategory =
        currentCategory === "Todos" || perfume.categorias.includes(currentCategory);

    const matchesSearch =
      perfume.nombre.toLowerCase().includes(searchText) ||
      perfume.aroma.toLowerCase().includes(searchText);

    return matchesCategory && matchesSearch;
  });

  productGrid.innerHTML = "";

  if (filteredPerfumes.length === 0) {
    productGrid.innerHTML = "<p>No se encontraron perfumes.</p>";
    return;
  }

  filteredPerfumes.forEach(perfume => {
    const message = `Hola, me interesa el ${perfume.nombre}. ¿Sigue disponible?`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
        <a href="detalle.html?id=${perfume.id}" class="product-image-link">
          <img src="${perfume.imagen}" alt="${perfume.nombre}">
        </a>

        <div class="product-info">
          <h3>${perfume.nombre}</h3>
          <p class="price">${perfume.precio}</p>
          <p class="notes">Aroma: ${perfume.aroma}</p>

          <a href="detalle.html?id=${perfume.id}" class="btn">Ver detalle</a>
        </div>
      `;

    productGrid.appendChild(card);
  });
}

if (searchInput) {
  searchInput.addEventListener("input", renderPerfumes);
}

if (filterButtons.length > 0) {
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      currentCategory = button.dataset.category;
      renderPerfumes();
    });
  });
}

const detalleContainer = document.getElementById("detallePerfume");

if (detalleContainer) {
  const params = new URLSearchParams(window.location.search);
  const perfumeId = params.get("id");

  const perfume = perfumes.find(p => p.id === perfumeId);

  if (!perfume) {
    detalleContainer.innerHTML = `
      <section class="section">
        <h1>Perfume no encontrado</h1>
        <p>Volvé al catálogo para ver los perfumes disponibles.</p>
        <a href="catalogo.html" class="btn btn-dark">Volver al catálogo</a>
      </section>
    `;
  } else {
    const message = `Hola, me interesa el ${perfume.nombre}. ¿Sigue disponible?`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    detalleContainer.innerHTML = `
      <section class="detalle">
        <div class="detalle-galeria">
          <img class="detalle-img-principal" src="${perfume.fotos[0]}" alt="${perfume.nombre}" id="mainImage">

          <div class="detalle-miniaturas">
            ${perfume.fotos.map(foto => `
              <img src="${foto}" alt="${perfume.nombre}" onclick="document.getElementById('mainImage').src='${foto}'">
            `).join("")}
          </div>
        </div>

        <div class="detalle-info">
          <p class="detalle-categoria">${perfume.categorias.join(" • ")}</p>
          <h1>${perfume.nombre}</h1>
          <p class="detalle-precio">${perfume.precio}</p>

          <p class="detalle-descripcion">${perfume.descripcion}</p>

          <div class="detalle-bloque">
            <h3>Notas olfativas</h3>
            <p><strong>Salida:</strong> ${perfume.notas.salida}</p>
            <p><strong>Corazón:</strong> ${perfume.notas.corazon}</p>
            <p><strong>Fondo:</strong> ${perfume.notas.fondo}</p>
          </div>

          <div class="detalle-bloque">
            <h3>Rendimiento</h3>
            <p><strong>Duración:</strong> ${perfume.duracion}</p>
            <p><strong>Proyección:</strong> ${perfume.proyeccion}</p>
          </div>

          <a href="${whatsappLink}" class="btn btn-dark" target="_blank">Consultar por WhatsApp</a>
        </div>
      </section>
    `;
  }
}

if (productGrid) {
  renderPerfumes();
}