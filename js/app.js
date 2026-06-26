const whatsappNumber = "59898303316";

const perfumes = [
  {
    nombre: "COMBO AFNAN 9PM",
    precio: "$3.990",
    categorias: ["Árabes", "Hombre"],
    aroma: "Vainilla, manzana, canela, dulce",
    imagen: "img/9pm.png"
  },
  {
    nombre: "Polo Black",
    precio: "$3.400",
    categorias: ["Hombre"],
    aroma: "Fresco, acuático, elegante",
    imagen: "img/polo-black.png"
  },
  {
    nombre: "Hugo Boss Dark Blue",
    precio: "$2.100",
    categorias: ["Hombre"],
    aroma: "Cítrico, especiado, masculino",
    imagen: "img/dark-blue.png"
  },
  {
    nombre: "Tommy Man",
    precio: "$2.300",
    categorias: ["Hombre"],
    aroma: "Fresco, limpio, clásico",
    imagen: "img/tommy-man.png"
  },
  {
    nombre: "Tommy Girl Forever",
    precio: "$2.300",
    categorias: "Mujer",
    aroma: "Floral, fresco, femenino",
    imagen: "img/tommy-girl-forever.png"
  },
  {
    nombre: "Tommy Girl Now",
    precio: "$2.300",
    categorias: ["Mujer"],
    aroma: "Frutal, floral, juvenil",
    imagen: "img/tommy-girl-now.png"
  },
  {
    nombre: "Calvin Klein Eternity",
    precio: "$2.600",
    categorias: ["Hombre"],
    aroma: "Floral, limpio, elegante",
    imagen: "img/ck-eternity.png"
  },
  {
    nombre: "Calvin Klein IN2U",
    precio: "$2.600",
    categorias: ["Hombre"],
    aroma: "Cítrico, fresco, moderno",
    imagen: "img/ck-in2u.png"
  },
  {
    nombre: "CH 212 NYC Mujer",
    precio: "$5.700",
    categorias: ["Mujer", "Diseñador"],
    aroma: "Floral, limpio, urbano",
    imagen: "img/212-nyc-mujer.png"
  },
  {
    nombre: "Queen of Temptation Elegance",
    precio: "$1.500",
    categorias: ["Árabes"],
    aroma: "Dulce, intenso, sensual",
    imagen: "img/queen-seduction.png"
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
      <img src="${perfume.imagen}" alt="${perfume.nombre}">
      <div class="product-info">
        <h3>${perfume.nombre}</h3>
        <p class="price">${perfume.precio}</p>
        <p class="notes">Aroma: ${perfume.aroma}</p>
        <a href="${whatsappLink}" class="btn" target="_blank">Consultar</a>
      </div>
    `;

    productGrid.appendChild(card);
  });
}

searchInput.addEventListener("input", renderPerfumes);

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    currentCategory = button.dataset.category;
    renderPerfumes();
  });
});

renderPerfumes();