const TEL = "525649279913";
const wa = t => `https://wa.me/${TEL}?text=${encodeURIComponent(t)}`;

// fotos: lista de rutas dentro de la carpeta imagenes/
const PRODUCTOS = [
  {
    n: "Centros de mesa",
    c: "Fiestas y eventos",
    fotos: [],
    precio: "Precio según diseño"
  },
  {
    n: "Abanicos",
    c: "Fiestas y eventos",
    fotos: [
      "imagenes/abanico.jpg",
      "imagenes/abanico2.jpeg",
      "imagenes/abanico3.jpg",
      "imagenes/abanico4.jpg",
      "imagenes/abanico5.jpg"
    ],
    precio: "$22"
  },
  {
    n: "Dominó",
    c: "Fiestas y eventos",
    fotos: [],
    precio: "$35"
  },
  {
    n: "Vasos cuberos",
    c: "Fiestas y eventos",
    fotos: [
      "imagenes/vaso1.jpg",
      "imagenes/vaso2.jpg",
      "imagenes/vaso3.jpg"
    ],
    precio: "$16"
  },
  {
    n: "Tequileros",
    c: "Fiestas y eventos",
    fotos: [],
    precio: "$12"
  },
  {
    n: "Vaso de popote 500 ml",
    c: "Fiestas y eventos",
    fotos: [
      "imagenes/Vasopopote500ml.jpg",
      "imagenes/Vasopopote.jpg"
    ],
    precio: "$25"
  },
  {
    n: "Cilindro chupón",
    c: "Fiestas y eventos",
    fotos: ["imagenes/chupon.jpeg"],
    precio: "$18"
  },
  {
    n: "Dulceros personalizados",
    c: "Fiestas y eventos",
    fotos: [
      "imagenes/dulcero.jpeg",
      "imagenes/dulcero2.jpg"
    ],
    precio: "Precio según diseño"
  },
  {
    n: "Burbujeros para evento",
    c: "Fiestas y eventos",
    fotos: ["imagenes/burbujas.jpg"],
    precio: "Precio según diseño"
  },

  {
    n: "Pulseras",
    c: "Accesorios",
    fotos: [
      "imagenes/pulsera1.jpg",
      "imagenes/pulsera2.jpg",
      "imagenes/pulsera3.jpg",
      "imagenes/pulsera4.jpg"
    ],
    precio: "$15"
  },
  {
    n: "Espejos de bolsillo",
    c: "Accesorios",
    fotos: [
      "imagenes/espejo1.jpg",
      "imagenes/encendedor_espejo.jpg"
    ],
    precio: "$13"
  },
  {
    n: "Espejos tipo princesa",
    c: "Accesorios",
    fotos: ["imagenes/espejo2.jpg"],
    precio: "$23"
  },
  {
    n: "Kit de maquillaje",
    c: "Accesorios",
    fotos: [],
    precio: "Precio según diseño"
  },
  {
    n: "Encendedores",
    c: "Accesorios",
    fotos: [
      "imagenes/encendedor1.jpg",
      "imagenes/encendedor2.jpg",
      "imagenes/encendedor_espejo.jpg"
    ],
    precio: "$12"
  },

  {
    n: "Llaveros de resina",
    c: "Llaveros y regalos",
    fotos: [
      "imagenes/llavero.jpg",
      "imagenes/llavero2.jpg"
    ],
    precio: "$40"
  },
  {
    n: "Llaveros sencillos",
    c: "Llaveros y regalos",
    fotos: [
      "imagenes/llavero3.jpg",
      "imagenes/llavero4.jpg",
      "imagenes/llavero y destapador.jpg"
    ],
    precio: "$10"
  },
  {
    n: "Destapadores de corcholata",
    c: "Llaveros y regalos",
    fotos: ["imagenes/llavero y destapador.jpg"],
    precio: "$15"
  },
  {
    n: "Destapadores de llave",
    c: "Llaveros y regalos",
    fotos: ["imagenes/destapador_llave.jpeg"],
    precio: "$15"
  },
  {
    n: "Lapiceros personalizados",
    c: "Llaveros y regalos",
    fotos: [
      "imagenes/lapicero1.jpg",
      "imagenes/lapicero2.jpg",
      "imagenes/lapicero3.jpg",
      "imagenes/lapicero4.jpg"
    ],
    precio: "Precio según diseño"
  },
  {
    n: "Portarretratos",
    c: "Llaveros y regalos",
    fotos: ["imagenes/portaretrato.jpg"],
    precio: "Precio según diseño"
  },
  {
    n: "Figuras de toallita facial",
    c: "Llaveros y regalos",
    fotos: [],
    precio: "Precio según diseño"
  },
  {
    n: "Figuras de yeso",
    c: "Llaveros y regalos",
    fotos: [],
    precio: "$15"
  },
  {
    n: "Rosas eternas",
    c: "Llaveros y regalos",
    fotos: [],
    precio: "$10"
  },

  {
    n: "Recuerdos luctuosos",
    c: "Religiosos y recuerdos",
    fotos: [
      "imagenes/luctuoso1.jpg",
      "imagenes/luctuoso2.jpg",
      "imagenes/luctuoso3.jpg"
    ],
    precio: "Precio según diseño"
  },
  {
    n: "Rosarios",
    c: "Religiosos y recuerdos",
    fotos: [
      "imagenes/rosario1.jpg",
      "imagenes/rosario2.jpg",
      "imagenes/rosariomini1.jpg"
    ],
    precio: "$20"
  },
  {
    n: "Cruz de resina",
    c: "Religiosos y recuerdos",
    fotos: [],
    precio: "$50"
  },
  {
    n: "Vela de cruz",
    c: "Religiosos y recuerdos",
    fotos: [],
    precio: "$20"
  },
  {
    n: "Cirios",
    c: "Religiosos y recuerdos",
    fotos: [],
    precio: "$35"
  },
  {
    n: "Portavela de yeso",
    c: "Religiosos y recuerdos",
    fotos: [],
    precio: "Precio por figura"
  }
];

const CATS = [...new Set(PRODUCTOS.map(p => p.c))];
document.getElementById("fab").href = wa("Hola Monilety, me gustaría pedir información.");