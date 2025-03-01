import React from "react";

const products = [
  {
    id: 1,
    name: "Parguitos de Ración",
    type: "enteros",
    price: 7,
    pricexu: 6,
    description:
      "Paquetes de pargos pequeños (2 a 5 unidades) (Aprox. 800g - +1Kg)",
    img: "/products/parguitos-enteros.webp",
    available: true,
  },
  {
    id: 2,
    name: "Róbalo Entero",
    type: "enteros",
    price: 8,
    description:
      "Róbalo Entero Fresco procesado al gusto del cliente, precio por peso completo.",
    img: "/products/robalo-enteros.webp",
    available: true,
  },
  {
    id: 3,
    name: "Pargo Entero Rojo",
    type: "enteros",
    price: 8,
    description:
      "Pargo Entero Fresco procesado al gusto del cliente, precio por peso completo.",
    img: "/products/pargo-enteros.webp",
    available: true,
  },
  {
    id: 4,
    name: "Mero Entero",
    type: "enteros",
    price: 9,
    description:
      "Mero Entero Fresco procesado al gusto del cliente, precio por peso completo.",
    img: "/products/mero-enteros.webp",
    available: true,
  },
  {
    id: 5,
    name: "Pulpo Entero",
    type: "enteros",
    price: 12,
    description: "Pulpo Entero limpio, precio por peso completo.",
    img: "/products/pulpo-enteros.webp",
    available: true,
  },
  {
    id: 6,
    name: "Calamar Criollo Entero",
    type: "enteros",
    price: 12,
    pricexu: 6,
    description: "Paquete de Calamares Enteros de aprox. 500g.",
    img: "/products/calamar-enteros.webp",
    available: true,
  },
  {
    id: 7,
    name: "Cazón en Ruedas",
    type: "ruedas",
    price: 5.5,
    pricexu: 5.5,
    description: "Paquete de Ruedas de Cazón de aprox. 1Kg",
    img: "/products/cazon-ruedas.webp",
    available: true,
  },
  {
    id: 8,
    name: "Atún en Ruedas",
    type: "ruedas",
    price: 6.5,
    pricexu: 6.5,
    description: "Paquete de Ruedas de Atún de aprox. 1Kg",
    img: "/products/atun-ruedas.webp",
    available: true,
  },
  {
    id: 9,
    name: "Carite en Ruedas",
    type: "ruedas",
    price: 9,
    pricexu: 4.5,
    description: "Paquetes de Ruedas de Carite de aprox. 500g - 800g",
    img: "/products/carite-ruedas.webp",
    available: true,
  },
  {
    id: 10,
    name: "Pámpano en Ruedas",
    type: "ruedas",
    price: 8,
    pricexu: 4,
    description: "Paquetes de Ruedas de Pámpano de aprox. 500g - 800g",
    img: "/products/pampano-ruedas.webp",
    available: true,
  },
  {
    id: 11,
    name: "Dorado en Ruedas",
    type: "ruedas",
    price: 9.5,
    pricexu: 5,
    description: "Pauete de Ruedas de Dorado de aprox. 500g - 800g.",
    img: "/products/dorado-ruedas.webp",
    available: true,
  },
  {
    id: 12,
    name: "Pargo en Ruedas",
    type: "ruedas",
    price: 11,
    pricexu: 5.5,
    description: "Paquetes de Ruedas de Pargo de aprox. 500g - 800g.",
    img: "/products/pargo-ruedas.webp",
    available: true,
  },
  {
    id: 13,
    name: "Róbalo en Ruedas",
    type: "ruedas",
    price: 12,
    pricexu: 6,
    description: "Paquetes de Róbalo en Ruedas de aprox. 500g - 800g.",
    img: "/products/robalo-ruedas.webp",
    available: true,
  },
  {
    id: 14,
    name: "Salmón en Ruedas",
    type: "ruedas",
    price: 18,
    pricexu: 9,
    description: "Paquetes de Ruedas de Salmón de aprox. 500g.",
    img: "/products/salmon-ruedas.webp",
    available: true,
  },
  {
    id: 15,
    name: "Filet de Merluza Blanco",
    type: "filetes",
    price: 9,
    pricexu: 6.5,
    description: "Paquetes de Filetes de Merluza Blanco de aprox. 500g - 800g.",
    img: "/products/merluza-filetes.webp",
    available: true,
  },
  {
    id: 16,
    name: "Filet de Dorado",
    type: "filetes",
    price: 13,
    pricexu: 9.5,
    description: "Paquete de Filetes de Dorado de aprox. 500g - 800g.",
    img: "/products/dorado-filetes.webp",
    available: true,
  },
  {
    id: 17,
    name: "Filet de Medregal",
    type: "filetes",
    price: 13,
    pricexu: 9.5,
    description: "Paquete de Filetes de Medregal de aprox. 500g - 800g.",
    img: "/products/medregal-filetes.webp",
    available: true,
  },
  {
    id: 18,
    name: "Filet de Róbalo",
    type: "filetes",
    price: 15,
    pricexu: 11,
    description: "Paquetes de Filét de Róbalo de aprox. 500g - 800g.",
    img: "/products/robalo-filetes.webp",
    available: true,
  },
  {
    id: 19,
    name: "Filet de Salmón",
    type: "filetes",
    price: 25,
    description:
      "Penca o Filét de Salmón Fresco, peso a preferencia del cliente.",
    img: "/products/salmon-filetes.webp",
    available: true,
  },
  {
    id: 20,
    name: "Churrasco de Mero",
    type: "churrascos",
    price: 22,
    pricexu: 15.5,
    description: "Paquete de Churrascos de Mero de aprox. 500g - 800g.",
    img: "/products/mero-churrascos.webp",
    available: true,
  },
  {
    id: 21,
    name: "Churrasco de Pargo",
    type: "churrascos",
    price: 15,
    pricexu: 10.5,
    description: "Paquetes de Churrasco de Pargo de aprox. 500g - 800g.",
    img: "/products/pargo-churrascos.webp",
    available: true,
  },
  {
    id: 22,
    name: "Churrasco de Corvina",
    type: "churrascos",
    price: 15,
    pricexu: 10.5,
    description: "Paquetes de Churrasco de Corvina de aprox. 500g - 800g.",
    img: "/products/corvina-churrascos.webp",
    available: true,
  },
  {
    id: 23,
    name: "Lomo de Pez Espada",
    type: "lomos",
    price: 9,
    pricexu: 5.5,
    description: "Lomo de Espada Fresco, paquetes de aprox. 500g - 800g.",
    img: "/products/espada-lomos.webp",
    available: true,
  },
  {
    id: 24,
    name: "Lomo de Aguja",
    type: "lomos",
    price: 8,
    pricexu: 5,
    description: "Lomo de Aguja Fresco, paquetes de aprox. 500g - 800g.",
    img: "/products/aguja-lomos.webp",
    available: true,
  },
  {
    id: 25,
    name: "Camarones Pelados",
    type: "otros",
    price: 13,
    pricexu: 6.5,
    description: "Paquetes de Camarones Pelados de 500g.",
    img: "/products/camaron-limpio.webp",
    available: true,
  },
  {
    id: 26,
    name: "Camarones con Concha",
    type: "otros",
    price: 10,
    pricexu: 5,
    description: "Paquetes de Camarón con Concha de 500g.",
    img: "/products/camaron-concha.webp",
    available: true,
  },
  {
    id: 27,
    name: "Pepitonas",
    type: "otros",
    price: 3,
    pricexu: 1.5,
    description: "Paquete de Pepitonas limpias de 500g.",
    img: "/products/pepitonas.webp",
    available: true,
  },
  {
    id: 28,
    name: "Anillas de Calamar",
    type: "otros",
    price: 10,
    pricexu: 5,
    description: "Paquete de anillas de calamar de 500g.",
    img: "/products/anillas-calamar.webp",
    available: true,
  },
  {
    id: 29,
    name: "Cazón Precocido",
    type: "otros",
    price: 9,
    pricexu: 4.5,
    description: "Paquete de Cazón Precocido de 500g.",
    img: "/products/cazon-precocido.webp",
    available: true,
  },
  {
    id: 30,
    name: "Mejillones Enteros",
    type: "otros",
    price: 5,
    pricexu: 2.5,
    description: "Paquete de Mejillones enteros limpios de 500g.",
    img: "/products/mejillones-enteros.webp",
    available: true,
  },
  {
    id: 31,
    name: "Lomo de Atún",
    type: "lomos",
    price: 8,
    description:
      "Lomo de Espada Atún, peso de preferencia del cliente (apróx).",
    img: "/products/atun-lomo.webp",
    available: true,
  },
];

export default products;
