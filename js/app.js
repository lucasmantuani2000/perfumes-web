const whatsappNumber = "59898303316";

const perfumes = [
  {
    id: "afnan-9pm",
    nombre: "Lattafa AFNAN 9PM",
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
    nombre: "Carolina Herrera 212 NYC",
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
    nombre: "Carolina Herrera 212 MEN Sexy",
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
    nombre: "Carolina Herrera 212 VIP Black",
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
    nombre: "Carolina Herrera 212 MEN NYC",
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
  },
  {
  id: "lattafa-yara-moi",
  nombre: "Lattafa Yara Moi",
  precio: "$2.100",
  categorias: ["Árabes", "Mujer"],
  aroma: "Jazmín, caramelo, sándalo",
  imagen: "img/asadblanco.png",
  fotos: ["img/asadblanco.png"],
  descripcion: "Lattafa Yara Moi es una fragancia femenina dulce, cremosa y elegante. Combina flores blancas con acordes gourmand y un fondo amaderado, creando un aroma sofisticado y muy envolvente para cualquier ocasión.",
  notas: {
    salida: "Jazmín y durazno",
    corazon: "Caramelo y ámbar",
    fondo: "Sándalo y pachulí"
  },
  duracion: "Alta",
  proyeccion: "Media a alta"
},

{
  id: "lattafa-yara",
  nombre: "Lattafa Yara",
  precio: "$2.100",
  categorias: ["Árabes", "Mujer"],
  aroma: "Orquídea, vainilla, frutas tropicales",
  imagen: "img/lattafayara.png",
  fotos: ["img/lattafayara.png"],
  descripcion: "Lattafa Yara es una fragancia femenina dulce, cremosa y moderna. Su combinación de frutas tropicales, flores delicadas y vainilla crea un aroma envolvente, ideal para quienes buscan un perfume elegante y muy femenino.",
  notas: {
    salida: "Heliotropo, orquídea y mandarina",
    corazon: "Acordes gourmand y frutas tropicales",
    fondo: "Vainilla, almizcle y sándalo"
  },
  duracion: "Alta",
  proyeccion: "Media a alta"
},

{
  id: "hugo-boss-bottled-tonic",
  nombre: "Hugo Boss Bottled Tonic",
  precio: "$3.100",
  categorias: ["Hombre", "Diseñador"],
  aroma: "Pomelo, jengibre, vetiver",
  imagen: "img/boss-tonic.png",
  fotos: ["img/boss-tonic.png"],
  descripcion: "Hugo Boss Bottled Tonic es una fragancia masculina fresca y elegante. Su perfil cítrico y amaderado la convierte en una excelente opción para el uso diario, especialmente en días cálidos.",
  notas: {
    salida: "Pomelo, naranja amarga, limón y manzana",
    corazon: "Jengibre, canela, clavo de olor y geranio",
    fondo: "Vetiver y notas amaderadas"
  },
  duracion: "Media",
  proyeccion: "Moderada"
},

{
  id: "moschino-cheap-and-chic",
  nombre: "Moschino Cheap & Chic",
  precio: "$3.500",
  categorias: ["Mujer", "Diseñador"],
  aroma: "Durazno, rosa, almizcle",
  imagen: "img/cheapandchicLove.png",
  fotos: ["img/cheapandchicLove.png"],
  descripcion: "Moschino Cheap & Chic es una fragancia femenina fresca, alegre y elegante. Su mezcla de frutas y flores ofrece un aroma delicado y muy versátil para cualquier ocasión.",
  notas: {
    salida: "Yuzu, bergamota, petitgrain y palo de rosa",
    corazon: "Rosa, peonía, ciclamen, violeta y jazmín",
    fondo: "Almizcle, vainilla, vetiver y orquídea"
  },
  duracion: "Media",
  proyeccion: "Moderada"
},

{
  id: "cr7-game-on",
  nombre: "Cristiano Ronaldo Game On",
  precio: "$2.300",
  categorias: ["Hombre", "Diseñador"],
  aroma: "Manzana, lavanda, haba tonka",
  imagen: "img/cr7gameon.png",
  fotos: ["img/cr7gameon.png"],
  descripcion: "Cristiano Ronaldo Game On es una fragancia masculina moderna y juvenil. Combina notas frutales y aromáticas con un fondo cálido, ideal para salidas, uso diario o quienes buscan un perfume versátil.",
  notas: {
    salida: "Manzana, papaya, cardamomo y pimienta",
    corazon: "Lavanda, violeta y elemí",
    fondo: "Haba tonka, madera de cachemira, cedro y azúcar"
  },
  duracion: "Media",
  proyeccion: "Moderada"
},
{
  id: "daisy-fuentes-dianoche-ocean",
  nombre: "Daisy Fuentes Dianoche Ocean",
  precio: "$2.300",
  categorias: ["Mujer", "Diseñador"],
  aroma: "Notas acuáticas, jazmín, coco",
  imagen: "img/daisydianoche.png",
  fotos: ["img/daisydianoche.png"],
  descripcion: "Daisy Fuentes Dianoche Ocean es una fragancia femenina fresca, floral y tropical. Combina notas acuáticas con flores suaves y un fondo cremoso, ideal para quienes buscan un aroma limpio, delicado y diferente.",
  notas: {
    salida: "Naranja amarga, bergamota, notas acuáticas y notas verdes",
    corazon: "Orquídea de vainilla, notas marinas, gardenia, jazmín y flores",
    fondo: "Coco, ámbar, almizcle blanco y pachulí"
  },
  duracion: "Media",
  proyeccion: "Moderada"
},
{
  id: "issey-miyake-pour-homme",
  nombre: "Issey Miyake Pour Homme",
  precio: "$3.300",
  categorias: ["Hombre", "Diseñador"],
  aroma: "Yuzu, especias, maderas",
  imagen: "img/issey-miyake-combo.png",
  fotos: ["img/issey-miyake-combo.png"],
  descripcion: "Issey Miyake Pour Homme es una fragancia masculina fresca, cítrica y elegante. Su salida brillante de yuzu junto a un fondo amaderado la convierten en un clásico versátil para el día a día.",
  notas: {
    salida: "Yuzu, limón, bergamota y estragón",
    corazon: "Nuez moscada, canela, loto y azafrán",
    fondo: "Vetiver, cedro, sándalo, tabaco y almizcle"
  },
  duracion: "Media a alta",
  proyeccion: "Moderada"
},
{
  id: "issey-miyake-intense",
  nombre: "Issey Miyake Pour Homme Intense",
  precio: "$2.700",
  categorias: ["Hombre", "Diseñador"],
  aroma: "Yuzu, incienso, ámbar",
  imagen: "img/issey-miyake-intense.png",
  fotos: ["img/issey-miyake-intense.png"],
  descripcion: "Issey Miyake Pour Homme Intense es una fragancia masculina profunda, cítrica y especiada. Mantiene la frescura del clásico, pero suma un fondo ahumado y ambarado con más carácter.",
  notas: {
    salida: "Yuzu, bergamota, naranja dulce y mandarina",
    corazon: "Nuez moscada, loto, cardamomo, canela y azafrán",
    fondo: "Incienso, papiro, ámbar gris, benjuí y ámbar"
  },
  duracion: "Alta",
  proyeccion: "Media a alta"
},
{
  id: "jpg-le-beau-edt",
  nombre: "Jean Paul Gaultier Le Beau EDT",
  precio: "$5.900",
  categorias: ["Hombre", "Diseñador"],
  aroma: "Bergamota, coco, haba tonka",
  imagen: "img/jeanpauledtlebeauedt.png",
  fotos: ["img/jeanpauledtlebeauedt.png"],
  descripcion: "Jean Paul Gaultier Le Beau EDT es una fragancia masculina fresca, dulce y seductora. Su mezcla de bergamota, coco y haba tonka crea un aroma moderno, tropical y muy llamativo.",
  notas: {
    salida: "Bergamota",
    corazon: "Coco",
    fondo: "Haba tonka"
  },
  duracion: "Media a alta",
  proyeccion: "Media a alta"
},
{
  id: "jpg-le-beau-le-parfum",
  nombre: "Jean Paul Gaultier Le Beau Le Parfum",
  precio: "$6.300",
  categorias: ["Hombre", "Diseñador"],
  aroma: "Coco, haba tonka, sándalo",
  imagen: "img/jean-paul-gaultier-lebeau.png",
  fotos: ["img/jean-paul-gaultier-lebeau.png"],
  descripcion: "Jean Paul Gaultier Le Beau Le Parfum es una fragancia masculina intensa, cálida y sensual. Potencia el lado dulce y tropical del Le Beau original con un fondo más amaderado, cremoso y elegante.",
  notas: {
    salida: "Piña, iris, jengibre y ciprés",
    corazon: "Coco y notas amaderadas",
    fondo: "Haba tonka, sándalo, ámbar y ámbar gris"
  },
  duracion: "Alta",
  proyeccion: "Alta"
},
{
  id: "jpg-le-male",
  nombre: "Jean Paul Gaultier Le Male",
  precio: "$5.900",
  categorias: ["Hombre", "Diseñador"],
  aroma: "Lavanda, vainilla, menta",
  imagen: "img/jeanpaullemale.png",
  fotos: ["img/jeanpaullemale.png"],
  descripcion: "Jean Paul Gaultier Le Male es una fragancia masculina icónica, fresca y seductora. Combina notas aromáticas con un fondo dulce y cálido, convirtiéndose en un clásico ideal para cualquier ocasión.",
  notas: {
    salida: "Menta, lavanda, bergamota, cardamomo y artemisa",
    corazon: "Canela, flor de azahar y alcaravea",
    fondo: "Vainilla, haba tonka, sándalo, cedro y ámbar"
  },
  duracion: "Alta",
  proyeccion: "Alta"
},
{
  id: "jpg-la-belle-rosea",
  nombre: "Jean Paul Gaultier La Belle Rosea",
  precio: "$6.100",
  categorias: ["Mujer", "Diseñador"],
  aroma: "Acorde acuático, peonía, vainilla",
  imagen: "img/jeanpaulrosa.png",
  fotos: ["img/jeanpaulrosa.png"],
  descripcion: "Jean Paul Gaultier La Belle Rosea es una fragancia femenina luminosa, floral y delicadamente dulce. Combina una frescura acuática con un corazón de peonía y un fondo avainillado elegante.",
  notas: {
    salida: "Acorde acuático",
    corazon: "Peonía",
    fondo: "Vainilla"
  },
  duracion: "Media a alta",
  proyeccion: "Moderada"
},
{
  id: "jpg-classique",
  nombre: "Jean Paul Gaultier Classique",
  precio: "$5.900",
  categorias: ["Mujer", "Diseñador"],
  aroma: "Flor de azahar, jengibre, vainilla",
  imagen: "img/jeanpaulrosaentero.png",
  fotos: ["img/jeanpaulrosaentero.png"],
  descripcion: "Jean Paul Gaultier Classique es una fragancia femenina intensa, elegante y muy sensual. Sus notas florales y especiadas se combinan con una base cálida y avainillada que nunca pasa de moda.",
  notas: {
    salida: "Flor de azahar, anís estrellado, pera, mandarina, bergamota y rosa",
    corazon: "Jengibre, iris, nardo, orquídea, ciruela y ylang-ylang",
    fondo: "Vainilla, ámbar, almizcle, canela y sándalo"
  },
  duracion: "Alta",
  proyeccion: "Alta"
},
{
  id: "kenzo-homme-edp",
  nombre: "Kenzo Homme Eau de Parfum",
  precio: "$4.500",
  categorias: ["Hombre", "Diseñador"],
  aroma: "Notas marinas, cuero, pachulí",
  imagen: "img/kenzohomme.png",
  fotos: ["img/kenzohomme.png"],
  descripcion: "Kenzo Homme Eau de Parfum es una fragancia masculina intensa y sofisticada. Su perfil marino con un fondo de cuero y maderas ofrece una propuesta elegante, moderna y muy versátil.",
  notas: {
    salida: "Notas marinas",
    corazon: "Cuero",
    fondo: "Pachulí y madera de oud"
  },
  duracion: "Alta",
  proyeccion: "Media a alta"
},
{
  id: "messi-edp",
  nombre: "Messi Eau de Parfum",
  precio: "$3.990",
  categorias: ["Hombre", "Diseñador"],
  aroma: "Cardamomo, lavanda, cedro",
  imagen: "img/messiedp.png",
  fotos: ["img/messiedp.png"],
  descripcion: "Messi Eau de Parfum es una fragancia masculina moderna, fresca y elegante. Equilibra notas aromáticas y amaderadas con un fondo cálido, ideal para el uso diario o cualquier ocasión.",
  notas: {
    salida: "Cardamomo, manzana y hojas de ciprés",
    corazon: "Lavanda, raíz de lirio y cuero",
    fondo: "Cedro, haba tonka y ámbar"
  },
  duracion: "Media a alta",
  proyeccion: "Moderada"
},
{
  id: "tarab-crown-princess",
  nombre: "T'Arab Crown Princess",
  precio: "$2.800",
  categorias: ["Árabes", "Mujer"],
  aroma: "Dulce, floral, ámbar",
  imagen: "img/taran-crownprincess.png",
  fotos: ["img/taran-crownprincess.png"],
  descripcion: "T'Arab Crown Princess es una fragancia femenina dulce, elegante y envolvente. Combina un perfil floral con un fondo cálido y sensual, ideal para quienes buscan un aroma llamativo y sofisticado.",
  notas: {
    salida: "Notas dulces y frutales",
    corazon: "Flores blancas y acordes florales",
    fondo: "Ámbar, vainilla y almizcle"
  },
  duracion: "Media a alta",
  proyeccion: "Moderada"
},
{
  id: "tommy-impact-intense",
  nombre: "Tommy Impact Intense",
  precio: "$3.500",
  categorias: ["Hombre", "Diseñador"],
  aroma: "Manzana roja, castaña, cedro",
  imagen: "img/tommyimpactintense.png",
  fotos: ["img/tommyimpactintense.png"],
  descripcion: "Tommy Impact Intense es una fragancia masculina moderna, cálida y amaderada. Su salida frutal se mezcla con un corazón especiado y un fondo intenso, ideal para quienes buscan un perfume con más presencia.",
  notas: {
    salida: "Manzana roja, elemi y bergamota",
    corazon: "Castaña, cardamomo, ámbar y ládano",
    fondo: "Cedro, sándalo, akigalawood y haba tonka"
  },
  duracion: "Media a alta",
  proyeccion: "Media a alta"
},
{
  id: "tommy-impact-together",
  nombre: "Tommy Impact Together",
  precio: "$3.500",
  categorias: ["Hombre", "Diseñador"],
  aroma: "Notas minerales, salvia, vetiver",
  imagen: "img/tommyimpacttogether.png",
  fotos: ["img/tommyimpacttogether.png"],
  descripcion: "Tommy Impact Together es una fragancia masculina fresca, acuática y moderna. Tiene un perfil limpio y aromático, ideal para el día a día, clima cálido o quienes buscan un perfume versátil y actual.",
  notas: {
    salida: "Acorde mineral y pimienta negra",
    corazon: "Salvia y artemisa",
    fondo: "Vetiver, cedro y akigalawood"
  },
  duracion: "Media",
  proyeccion: "Moderada"
},
{
  id: "moschino-toy-boy-2",
  nombre: "Moschino Toy Boy 2",
  precio: "$4.300",
  categorias: ["Hombre", "Diseñador"],
  aroma: "Café, jengibre, vetiver",
  imagen: "img/toyboynegro.png",
  fotos: ["img/toyboynegro.png"],
  descripcion: "Moschino Toy Boy 2 es una fragancia masculina moderna, intensa y especiada. Combina un corazón de café con maderas y un fondo cálido, ofreciendo un aroma elegante y con mucha personalidad para destacar en cualquier ocasión.",
  notas: {
    salida: "Jengibre y nuez moscada",
    corazon: "Café y Akigalawood",
    fondo: "Vetiver y mirra"
  },
  duracion: "Alta",
  proyeccion: "Moderada"
},
{
  id: "moschino-toy-2-pearl",
  nombre: "Moschino Toy 2 Pearl",
  precio: "$4.300",
  categorias: ["Unisex", "Diseñador"],
  aroma: "Limón, jazmín, almizcle",
  imagen: "img/toyboypearl.png",
  fotos: ["img/toyboypearl.png"],
  descripcion: "Moschino Toy 2 Pearl es una fragancia fresca, luminosa y moderna. Combina notas cítricas con un corazón floral y un fondo suave, ideal para quienes buscan un aroma limpio y diferente.",
  notas: {
    salida: "Limón, sorbete y orégano",
    corazon: "Arena, fresia y jazmín",
    fondo: "Almizcle, ciprés y vetiver"
  },
  duracion: "Media",
  proyeccion: "Moderada"
},
{
  id: "moschino-toy-2-bubble-gum",
  nombre: "Moschino Toy 2 Bubble Gum",
  precio: "$4.300",
  categorias: ["Mujer", "Diseñador"],
  aroma: "Frutas confitadas, rosa, almizcle",
  imagen: "img/toyboyrosa.png",
  fotos: ["img/toyboyrosa.png"],
  descripcion: "Moschino Toy 2 Bubble Gum es una fragancia femenina divertida, dulce y moderna. Su combinación de frutas, flores y un fondo suave crea un aroma juvenil, llamativo y perfecto para quienes disfrutan los perfumes gourmand.",
  notas: {
    salida: "Frutas confitadas, naranja amarga y limón",
    corazon: "Chicle, rosa de Bulgaria, durazno, canela, jengibre y arándanos",
    fondo: "Almizcle, ambroxan y cedro"
  },
  duracion: "Media a alta",
  proyeccion: "Moderada"
},
{
  id: "versace-eros-pour-femme-edp",
  nombre: "Versace Eros Pour Femme EDP",
  precio: "$5.900",
  categorias: ["Mujer", "Diseñador"],
  aroma: "Limón siciliano, jazmín, almizcle",
  imagen: "img/versace-eros.png",
  fotos: ["img/versace-eros.png"],
  descripcion: "Versace Eros Pour Femme Eau de Parfum es una fragancia femenina elegante, luminosa y seductora. Combina cítricos vibrantes con flores blancas y un fondo suave y sensual, ideal para cualquier ocasión.",
  notas: {
    salida: "Limón siciliano, bergamota de Calabria y granada",
    corazon: "Jazmín Sambac, jazmín, flor de limón y peonía",
    fondo: "Almizcle, ambrox, sándalo y notas amaderadas"
  },
  duracion: "Alta",
  proyeccion: "Media a alta"
},
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