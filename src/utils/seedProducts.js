import db from "../db/db.js";
import { collection, addDoc } from "firebase/firestore";
//import data from "../data/products.json" assert { type: "json" };

const products = [
  {
    category: "cuchillo",
    nombre: "Karambit | Doppler Phase 2",
    float: 0.03,
    stock:8,
    descripcion: "Acabado metálico con tonos púrpura y azul que forman remolinos brillantes.",
    precio: 42,
    image:"https://cdn.skinsmonkey.com/econ/default_generated/weapon_knife_karambit_am_doppler_phase2_light_png.png",
  },
  {
    category: "cuchillo",
    nombre: "M9 Bayonet | Crimson Web",
    float: 0.12,
    stock:4,
    descripcion: "Capa roja intensa cubierta por un patrón negro de telarañas finas.",
    precio: 37,
    image:"https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL6kJ_m-B1Wts2sab1iLvWHMW-J_vlzsvJWQiy3nAgq_TzXw4yhdn_BOlMiDZt3TeULtxDqx4XhYu2x4AyI3toQzSmr2iJK7iZ1o7FVPvLt_5s/330x192?allow_animated=1",
  },
  {
    category: "cuchillo",
    nombre: "Butterfly | Marble Fade",
    float: 0.02,
    stock:3,
    descripcion: "Transiciones limpias de rojo, azul y amarillo que se mezclan como mármol fundido.",
    precio: 46,
    image:"https://cs.money/assets/rs:fit:0:0:0/q:100/f:webp/dpr:2/plain/https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GGqPr1Ibndk1RX6cF0teXI8oThxlft-kRsMTqhLIORJwNqYg2E-ge9kOzt18fptMzNzHNg7HQm43bYm0SpwUYb_LdKp9c",
  },
  {
    category: "rifle",
    nombre: "AK-47 | Fire Serpent",
    float: 0.15,
    stock:14,
    descripcion: "Tonos verdes y marrones con una ilustración brillante en verde y rojo en el costado.",
    precio: 21,
    image:"https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0PSneqF-JeKDC2mE_u995LZWTTuygxIYvjiBk5r0bymVZwIoWZJ1QLEDs0O6ktayZr6ztFeIjYxAyyX-jH8b5y5vt-wDB_Y7uvqAHvjgL6w/360fx360f",
  },
  {
    category: "rifle",
    nombre: "AK-47 | Neon Rider",
    float: 0.09,
    stock:9,
    descripcion: "Colores neón saturados con diseño estilo retro en azul, rosa y violeta.",
    precio: 820,
    image:"https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlV6poL_6sHG6UxPxJveRtRjy-2x9_5GiBmYn4JHiVa1NyXMMkRuNe5ka5k9eyM-q2sQHc2NpCmyWvin5XrnE89iGyCXM/330x192?allow_animated=1",
  },
  {
    category: "rifle",
    nombre: "M4A1-S | Blue Phosphor",
    float: 0.04,
    descripcion: "Superficie azul intenso con reflejos uniformes que producen un acabado liso y pulido.",
    precio: 245,
    image:"https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_GeMWrEwL9lj-NlWiygmBIstgKJk4jxNWWeOg5xDJR2Q-5b5BGwxIDuP7uw4ALa3ohMz3n3iypLvyc55-pQUKct5OSJ2OKlF5Nn/330x192?allow_animated=1",
  },
  {
    category: "rifle",
    nombre: "M4A4 | Howl",
    float: 0.21,
    stock:12,
    descripcion: "Tonos rojos, naranjas y negros mezclados en un diseño de pinceladas agresivas.",
    precio: 31,
    image:"https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiFO0P_6afVSKP-EAm6extF6ueZhW2exwkl2tmTXwt39eCiUPQR2DMN4TOVetUK8xoLgM-K341eM2otDnC6okGoXufBz_TAB/330x192?allow_animated=1",
  },
  {
    category: "pistola",
    nombre: "USP-S | Kill Confirmed",
    float: 0.12,
    stock:87,
    descripcion: "Ilustraciones naranjas y azules con bordes negros que cubren toda la corredera.",
    precio: 92,
    image:"https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSI-WsG3SA_uV_vO1WTCa9kxQ1vjiBpYL8JSLSMxghCMEjEeNe5hHpw9zhYuOz5VfcitpBmyqt3X9O6itrsesFUfYmrKzTkUifZqPQtnZK/330x192?allow_animated=1",
  },
  {
    category: "pistola",
    nombre: "Desert Eagle | Printstream",
    float: 0.02,
    stock:75,
    descripcion: "Base blanca brillante con líneas negras rectas y pequeños símbolos perlados.",
    precio: 186,
    image:"https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk7OeRbKFsJ8-DHG6e1f1iouRoQha-kBkupjDLz9_6c3mWPFBxX8N0EOMIsULpmtHjPuvq41bc2dhAzy3_2ngfvHpt5_FCD_RJLjxjaQ/360fx360f",
  },
  {
    category: "rifle",
    nombre: "AWP | Asiimov",
    float: 0.25,
    stock:23,
    descripcion: "Esquema blanco con detalles naranjas y negros formando un diseño geométrico limpio.",
    precio: 19,
    image:"https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_jdk7uW-V6V-Kf2cGFidxOp_pewnF3nhxEt0sGnSzN76dH3GOg9xC8FyEORftRe-x9PuYurq71bW3d8UnjK-0H0YSTpMGQ/330x192?allow_animated=1",
  }
];


const seedProducts = async() => {
  try {
    const productsRef = collection(db, "products");

    products.map( async( { id, ...dataProduct } ) => {
      await addDoc(productsRef, dataProduct);
    });

    console.log("Productos subidos!");
  } catch (error) {
    console.log(error);
  }
}

seedProducts();