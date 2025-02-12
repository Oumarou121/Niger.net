const grid = document.getElementById("grid");
const list = document.getElementById("list");
const productsContent = document.getElementById("listProducts");
const productsPerPage = 9;
let currentPage = 1;
const listProducts = document.getElementById("listProducts");
const paginationContainer = document.querySelector(".shop_pagi ul");
let filteredProducts = [];

class Product {
  constructor(
    id,
    sales,
    qty,
    name,
    category,
    price,
    priceReduction,
    images,
    specs
  ) {
    this.id = id;
    this.sales = sales;
    this.qty = qty;
    this.name = name;
    this.category = category;
    this.price = price;
    this.priceReduction = priceReduction;
    this.images = images;
    this.specs = specs;
    this.reference = this.generateReference();
    this.description = this.generateDescription();
  }

  generateReference() {
    const model = this.name.split(" ")[0].toUpperCase();
    const ram = this.specs["Mémoire RAM"]
      ? this.specs["Mémoire RAM"].match(/\d+/)[0]
      : "NA";
    const storage = this.specs["Stockage"]
      ? this.specs["Stockage"].match(/\d+/)[0]
      : "NA";
    const color = this.specs["Couleur"]
      ? this.specs["Couleur"].substring(0, 2).toUpperCase()
      : "XX";

    return `${model}-${ram}-${storage}-${color}`;
  }

  generateDescription() {
    let desc = `[${this.reference}]\n`;

    for (const [key, value] of Object.entries(this.specs)) {
      desc += `- ${key} : ${value}\n`;
    }

    return desc.trim();
  }
}

const products = [
  new Product(
    0,
    100,
    10,
    "Uphone lightning cable",
    "Téléphonie & Tablette/Accessoirs/Chargeurs & cablés",
    10000,
    0,
    [
      "//drou-electronics-store.myshopify.com/cdn/shop/products/p4_c46c6d30-4b9f-4971-96be-d28d9f0d5ee5_large.jpg?v=1674275311",
      "//drou-electronics-store.myshopify.com/cdn/shop/products/p5_61c8ce6b-3afa-4276-a285-f98e4d5c7f67_large.jpg?v=1674275311",
    ],
    {
      "Système d'exploitation": "Windows 10",
      Processeur: "Intel Atom",
      "Réf processeur":
        "Intel Atom x5-Z8350 Quad Core, 1,44 GHz jusqu'à 1,92 GHz, 2 Mode mémoire cache",
      "Taille de mémoire": "64Go",
      Mémoire: "2 Go",
      "Disque Dur": "32 Go eMMC",
      "Carte Graphique": "Intel HD Graphics",
      "Taille Ecran": '14"',
      "Type Ecran": "Full HD",
      "Ecran Tactile": "Non",
      Réseau: "WiFi - Bluetooth",
      Caméra: "Webcam avec micro",
      Garantie: "1 An",
      Couleur: "Noir",
      Availability: "Available In stock",
      Access: "oui",
    }
  ),
  new Product(
    1,
    10,
    15,
    "Smartphone Tecno Spark Go 2024",
    "Téléphonie & Tablette/Smartphone",
    65000,
    5000,
    [
      "https://www.tunisianet.com.tn/382924-large/smartphone-tecno-spark-go-2024-2-go-64-go-blanc.jpg",
      "https://www.tunisianet.com.tn/382924-large/smartphone-tecno-spark-go-2024-2-go-64-go-blanc.jpg",
    ],
    {
      "Double SIM": "Oui",
      Écran: 'Hole Screen 6.67" (720 x 1600 px), 120 Hz',
      Processeur: "Unisoc T615 Octa-core (12 nm)",
      "Mémoire RAM": "4 Go (+ 4 Go étendus)",
      Stockage: "128 Go",
      "Système opérateur": "Android 14 Go",
      Réseau: "4G",
      "Caméra Avant": "8 MP, double flash avant",
      "Caméra Arrière": "13 MP, double flash arrière",
      "Indice de protection": "IP54",
      "Capteur d'empreintes": "Latéral",
      Télécommande: "Infrarouge",
      Batterie: "5000mAh",
      "Charge rapide": "15 W Type C",
      Audio: "Deux haut-parleurs (Son DTS)",
      Couleur: "Vert",
      Garantie: "1 an",
    }
  ),
  new Product(
    2,
    5,
    20,
    "iPhone 14 pro max",
    "Téléphonie & Tablette/Smartphone",
    250000,
    45000,

    [
      "https://drou-electronics-store.myshopify.com/cdn/shop/products/p7_36d931d4-1ef2-4c82-9a65-80426fb77f21_1024x1024.jpg?v=1674275335",
      "https://drou-electronics-store.myshopify.com/cdn/shop/products/p8_523c97c7-2aa2-47e8-8b17-5a3c05a66db3_1024x1024.jpg?v=1674275335",
      "//drou-electronics-store.myshopify.com/cdn/shop/products/p5_61c8ce6b-3afa-4276-a285-f98e4d5c7f67_large.jpg?v=1674275311",
    ],

    {
      Écran: '15.6" Full HD (1920 x 1080), IPS, 144 Hz',
      Processeur:
        "Intel Core i7-13620H 13e génération (jusqu’à 4.9 GHz, 24 Mo de cache)",
      Mémoire: "8 Go DDR5",
      Stockage: "SSD NVMe M.2 512 Go",
      "Carte graphique": "NVIDIA GeForce RTX 4060, 8 Go GDDR6",
      Clavier: "Rétroéclairé simple",
      Webcam: "HD 720p",
      Audio: "2x haut-parleurs 2W, Nahimic 3 Audio Enhancer, Hi-Res Audio",
      Connectique: "2x USB 3.2, 1x USB-C 3.2, 1x HDMI 2.1",
      Réseau: "Gigabit Ethernet - Wi-Fi 6E - Bluetooth 5.3",
      Système: "FreeDos",
      Couleur: "Noir translucide",
      Garantie: "1 an",
    }
  ),
];

// let products0 = [
//   {
//     id: 1,
//     sales: 100,
//     name: "Uphone lightning cable",
//     href: "",
//     price: 10000,
//     priceReduction: 0,
//     image:
//       "//drou-electronics-store.myshopify.com/cdn/shop/products/p4_c46c6d30-4b9f-4971-96be-d28d9f0d5ee5_large.jpg?v=1674275311",
//     imageHover:
//       "//drou-electronics-store.myshopify.com/cdn/shop/products/p5_61c8ce6b-3afa-4276-a285-f98e4d5c7f67_large.jpg?v=1674275311",
//     description:
//       "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
//     specs: {
//       "Système d'exploitation": "Windows 10",
//       Processeur: "Intel Atom",
//       "Réf processeur":
//         "Intel Atom x5-Z8350 Quad Core, 1,44 GHz jusqu'à 1,92 GHz, 2 Mode mémoire cache",
//       "Taille de mémoire": "64Go",
//       Mémoire: "2 Go",
//       "Disque Dur": "32 Go eMMC",
//       "Carte Graphique": "Intel HD Graphics",
//       "Taille Ecran": '14"',
//       "Type Ecran": "Full HD",
//       "Ecran Tactile": "Non",
//       Réseau: "WiFi - Bluetooth",
//       Caméra: "Webcam avec micro",
//       Garantie: "1 An",
//       Couleur: "Noir",
//       Availability: "Available In stock",
//       Access: "oui",
//     },
//   },
//   {
//     id: 2,
//     sales: 10,
//     name: "Smartphone Tecno Spark Go 2024",
//     href: "",
//     price: 65000,
//     priceReduction: 5000,
//     image:
//       "https://www.tunisianet.com.tn/382924-large/smartphone-tecno-spark-go-2024-2-go-64-go-blanc.jpg",
//     imageHover:
//       "https://www.tunisianet.com.tn/382924-large/smartphone-tecno-spark-go-2024-2-go-64-go-blanc.jpg",
//     description:
//       "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
//     specs: {
//       "Système d'exploitation": "iOS 15.3",
//       Processeur: "Apple A15 Bionic",
//       "Réf processeur":
//         "Apple A15 Bionic 64-bit, 2.6 GHz jusqu'à 3.6 GHz, 6 Cores",
//       "Taille de mémoire": "64Go",
//       Mémoire: "4 Go",
//       "Disque Dur": "128 Go eMMC",
//       "Carte Graphique": "Apple A15 Bionic",
//       "Taille Ecran": '6"',
//       "Type Ecran": "OLED",
//       "Ecran Tactile": "Oui",
//       Réseau: "WiFi - Bluetooth",
//       Caméra: "Rear Camera 12 MP + Front Camera 8 MP",
//       Access: "non",
//     },
//   },
//   {
//     id: 3,
//     sales: 5,
//     name: "iPhone 14 pro max",
//     href: "",
//     price: 250000,
//     priceReduction: 45000,
//     image:
//       "https://drou-electronics-store.myshopify.com/cdn/shop/products/p7_36d931d4-1ef2-4c82-9a65-80426fb77f21_1024x1024.jpg?v=1674275335",
//     imageHover:
//       "https://drou-electronics-store.myshopify.com/cdn/shop/products/p8_523c97c7-2aa2-47e8-8b17-5a3c05a66db3_1024x1024.jpg?v=1674275335",
//     description:
//       "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
//     specs: {
//       "Système d'exploitation": "Android 12.1",
//       Processeur: "Snapdragon 888",
//       "Réf processeur":
//         "Snapdragon 888 64-bit, 2.8 GHz jusqu'à 4.2 GHz, 8 Cores",
//       "Taille de mémoire": "128Go",
//       Mémoire: "6 Go",
//       "Disque Dur": "256 Go eMMC",
//       "Carte Graphique": "Adreno 230",
//       "Taille Ecran": '6.7"',
//       "Type Ecran": "Super AMOLED",
//       "Ecran Tactile": "Oui",
//       Réseau: "WiFi - Bluetooth",
//       Caméra: "Rear Camera 12 MP + Front Camera 8 MP",
//       Résolution: "Full HD",
//     },
//   },
//   {
//     id: 4,
//     sales: 90,
//     name: "Uphone lightning cable",
//     href: "",
//     price: 10000,
//     priceReduction: 0,
//     image:
//       "//drou-electronics-store.myshopify.com/cdn/shop/products/p4_c46c6d30-4b9f-4971-96be-d28d9f0d5ee5_large.jpg?v=1674275311",
//     imageHover:
//       "//drou-electronics-store.myshopify.com/cdn/shop/products/p5_61c8ce6b-3afa-4276-a285-f98e4d5c7f67_large.jpg?v=1674275311",
//     description:
//       "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
//     specs: {
//       "Système d'exploitation": "Windows 10",
//       Processeur: "Intel Atom",
//       "Réf processeur":
//         "Intel Atom x5-Z8350 Quad Core, 1,44 GHz jusqu'à 1,92 GHz, 2 Mode mémoire cache",
//       "Taille de mémoire": "64Go",
//       Mémoire: "2 Go",
//       "Disque Dur": "32 Go eMMC",
//       "Carte Graphique": "Intel HD Graphics",
//       "Taille Ecran": '14"',
//       "Type Ecran": "Full HD",
//       "Ecran Tactile": "Non",
//       Réseau: "WiFi - Bluetooth",
//       Caméra: "Webcam avec micro",
//       Garantie: "1 An",
//       Couleur: "Noir",
//       Availability: "Available In stock",
//     },
//   },
//   {
//     id: 5,
//     sales: 10,
//     name: "Smartphone Tecno Spark Go 2024",
//     href: "",
//     price: 65000,
//     priceReduction: 5000,
//     image:
//       "https://www.tunisianet.com.tn/382924-large/smartphone-tecno-spark-go-2024-2-go-64-go-blanc.jpg",
//     imageHover:
//       "https://www.tunisianet.com.tn/382924-large/smartphone-tecno-spark-go-2024-2-go-64-go-blanc.jpg",
//     description:
//       "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
//     specs: {
//       "Système d'exploitation": "iOS 15.3",
//       Processeur: "Apple A15 Bionic",
//       "Réf processeur":
//         "Apple A15 Bionic 64-bit, 2.6 GHz jusqu'à 3.6 GHz, 6 Cores",
//       "Taille de mémoire": "64Go",
//       Mémoire: "4 Go",
//       "Disque Dur": "128 Go eMMC",
//       "Carte Graphique": "Apple A15 Bionic",
//       "Taille Ecran": '6"',
//       "Type Ecran": "OLED",
//       "Ecran Tactile": "Oui",
//       Réseau: "WiFi - Bluetooth",
//       Caméra: "Rear Camera 12 MP + Front Camera 8 MP",
//     },
//   },
//   {
//     id: 6,
//     sales: 23,
//     name: "iPhone 14 pro max",
//     href: "",
//     price: 250000,
//     priceReduction: 45000,
//     image:
//       "https://drou-electronics-store.myshopify.com/cdn/shop/products/p7_36d931d4-1ef2-4c82-9a65-80426fb77f21_1024x1024.jpg?v=1674275335",
//     imageHover:
//       "https://drou-electronics-store.myshopify.com/cdn/shop/products/p8_523c97c7-2aa2-47e8-8b17-5a3c05a66db3_1024x1024.jpg?v=1674275335",
//     description:
//       "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
//     specs: {
//       "Système d'exploitation": "Android 12.1",
//       Processeur: "Snapdragon 888",
//       "Réf processeur":
//         "Snapdragon 888 64-bit, 2.8 GHz jusqu'à 4.2 GHz, 8 Cores",
//       "Taille de mémoire": "128Go",
//       Mémoire: "6 Go",
//       "Disque Dur": "256 Go eMMC",
//       "Carte Graphique": "Adreno 230",
//       "Taille Ecran": '6.7"',
//       "Type Ecran": "Super AMOLED",
//       "Ecran Tactile": "Oui",
//       Réseau: "WiFi - Bluetooth",
//       Caméra: "Rear Camera 12 MP + Front Camera 8 MP",
//     },
//   },
//   {
//     id: 7,
//     sales: 10,
//     name: "Uphone lightning cable",
//     href: "",
//     price: 10000,
//     priceReduction: 0,
//     image:
//       "//drou-electronics-store.myshopify.com/cdn/shop/products/p4_c46c6d30-4b9f-4971-96be-d28d9f0d5ee5_large.jpg?v=1674275311",
//     imageHover:
//       "//drou-electronics-store.myshopify.com/cdn/shop/products/p5_61c8ce6b-3afa-4276-a285-f98e4d5c7f67_large.jpg?v=1674275311",
//     description:
//       "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
//     specs: {
//       "Système d'exploitation": "Windows 10",
//       Processeur: "Intel Atom",
//       "Réf processeur":
//         "Intel Atom x5-Z8350 Quad Core, 1,44 GHz jusqu'à 1,92 GHz, 2 Mode mémoire cache",
//       "Taille de mémoire": "64Go",
//       Mémoire: "2 Go",
//       "Disque Dur": "32 Go eMMC",
//       "Carte Graphique": "Intel HD Graphics",
//       "Taille Ecran": '14"',
//       "Type Ecran": "Full HD",
//       "Ecran Tactile": "Non",
//       Réseau: "WiFi - Bluetooth",
//       Caméra: "Webcam avec micro",
//       Garantie: "1 An",
//       Couleur: "Noir",
//       Availability: "Available In stock",
//     },
//   },
//   {
//     id: 8,
//     sales: 30,
//     name: "Smartphone Tecno Spark Go 2024",
//     href: "",
//     price: 65000,
//     priceReduction: 5000,
//     image:
//       "https://www.tunisianet.com.tn/382924-large/smartphone-tecno-spark-go-2024-2-go-64-go-blanc.jpg",
//     imageHover:
//       "https://www.tunisianet.com.tn/382924-large/smartphone-tecno-spark-go-2024-2-go-64-go-blanc.jpg",
//     description:
//       "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
//     specs: {
//       "Système d'exploitation": "iOS 15.3",
//       Processeur: "Apple A15 Bionic",
//       "Réf processeur":
//         "Apple A15 Bionic 64-bit, 2.6 GHz jusqu'à 3.6 GHz, 6 Cores",
//       "Taille de mémoire": "64Go",
//       Mémoire: "4 Go",
//       "Disque Dur": "128 Go eMMC",
//       "Carte Graphique": "Apple A15 Bionic",
//       "Taille Ecran": '6"',
//       "Type Ecran": "OLED",
//       "Ecran Tactile": "Oui",
//       Réseau: "WiFi - Bluetooth",
//       Caméra: "Rear Camera 12 MP + Front Camera 8 MP",
//     },
//   },
//   {
//     id: 9,
//     sales: 100,
//     name: "iPhone 14 pro max",
//     href: "",
//     price: 250000,
//     priceReduction: 45000,
//     image:
//       "https://drou-electronics-store.myshopify.com/cdn/shop/products/p7_36d931d4-1ef2-4c82-9a65-80426fb77f21_1024x1024.jpg?v=1674275335",
//     imageHover:
//       "https://drou-electronics-store.myshopify.com/cdn/shop/products/p8_523c97c7-2aa2-47e8-8b17-5a3c05a66db3_1024x1024.jpg?v=1674275335",
//     description:
//       "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
//     specs: {
//       "Système d'exploitation": "Android 12.1",
//       Processeur: "Snapdragon 888",
//       "Réf processeur":
//         "Snapdragon 888 64-bit, 2.8 GHz jusqu'à 4.2 GHz, 8 Cores",
//       "Taille de mémoire": "128Go",
//       Mémoire: "6 Go",
//       "Disque Dur": "256 Go eMMC",
//       "Carte Graphique": "Adreno 230",
//       "Taille Ecran": '6.7"',
//       "Type Ecran": "Super AMOLED",
//       "Ecran Tactile": "Oui",
//       Réseau: "WiFi - Bluetooth",
//       Caméra: "Rear Camera 12 MP + Front Camera 8 MP",
//     },
//   },
//   {
//     id: 10,
//     sales: 0,
//     name: "Uphone lightning cable",
//     href: "",
//     price: 10000,
//     priceReduction: 0,
//     image:
//       "//drou-electronics-store.myshopify.com/cdn/shop/products/p4_c46c6d30-4b9f-4971-96be-d28d9f0d5ee5_large.jpg?v=1674275311",
//     imageHover:
//       "//drou-electronics-store.myshopify.com/cdn/shop/products/p5_61c8ce6b-3afa-4276-a285-f98e4d5c7f67_large.jpg?v=1674275311",
//     description:
//       "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
//     specs: {
//       "Système d'exploitation": "Windows 10",
//       Processeur: "Intel Atom",
//       "Réf processeur":
//         "Intel Atom x5-Z8350 Quad Core, 1,44 GHz jusqu'à 1,92 GHz, 2 Mode mémoire cache",
//       "Taille de mémoire": "64Go",
//       Mémoire: "2 Go",
//       "Disque Dur": "32 Go eMMC",
//       "Carte Graphique": "Intel HD Graphics",
//       "Taille Ecran": '14"',
//       "Type Ecran": "Full HD",
//       "Ecran Tactile": "Non",
//       Réseau: "WiFi - Bluetooth",
//       Caméra: "Webcam avec micro",
//       Garantie: "1 An",
//       Couleur: "Noir",
//       Availability: "Available In stock",
//     },
//   },
//   {
//     id: 11,
//     sales: 1,
//     name: "Smartphone Tecno Spark Go 2024",
//     href: "",
//     price: 65000,
//     priceReduction: 5000,
//     image:
//       "https://www.tunisianet.com.tn/382924-large/smartphone-tecno-spark-go-2024-2-go-64-go-blanc.jpg",
//     imageHover:
//       "https://www.tunisianet.com.tn/382924-large/smartphone-tecno-spark-go-2024-2-go-64-go-blanc.jpg",
//     description:
//       "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
//     specs: {
//       "Système d'exploitation": "iOS 15.3",
//       Processeur: "Apple A15 Bionic",
//       "Réf processeur":
//         "Apple A15 Bionic 64-bit, 2.6 GHz jusqu'à 3.6 GHz, 6 Cores",
//       "Taille de mémoire": "64Go",
//       Mémoire: "4 Go",
//       "Disque Dur": "128 Go eMMC",
//       "Carte Graphique": "Apple A15 Bionic",
//       "Taille Ecran": '6"',
//       "Type Ecran": "OLED",
//       "Ecran Tactile": "Oui",
//       Réseau: "WiFi - Bluetooth",
//       Caméra: "Rear Camera 12 MP + Front Camera 8 MP",
//     },
//   },
//   {
//     id: 12,
//     sales: 2,
//     name: "iPhone 14 pro max",
//     href: "",
//     price: 250000,
//     priceReduction: 45000,
//     image:
//       "https://drou-electronics-store.myshopify.com/cdn/shop/products/p7_36d931d4-1ef2-4c82-9a65-80426fb77f21_1024x1024.jpg?v=1674275335",
//     imageHover:
//       "https://drou-electronics-store.myshopify.com/cdn/shop/products/p8_523c97c7-2aa2-47e8-8b17-5a3c05a66db3_1024x1024.jpg?v=1674275335",
//     description:
//       "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
//     specs: {
//       "Système d'exploitation": "Android 12.1",
//       Processeur: "Snapdragon 888",
//       "Réf processeur":
//         "Snapdragon 888 64-bit, 2.8 GHz jusqu'à 4.2 GHz, 8 Cores",
//       "Taille de mémoire": "128Go",
//       Mémoire: "6 Go",
//       "Disque Dur": "256 Go eMMC",
//       "Carte Graphique": "Adreno 230",
//       "Taille Ecran": '6.7"',
//       "Type Ecran": "Super AMOLED",
//       "Ecran Tactile": "Oui",
//       Réseau: "WiFi - Bluetooth",
//       Caméra: "Rear Camera 12 MP + Front Camera 8 MP",
//     },
//   },
//   {
//     id: 13,
//     sales: 3,
//     name: "iPhone 14 pro max",
//     href: "",
//     price: 250000,
//     priceReduction: 45000,
//     image:
//       "https://drou-electronics-store.myshopify.com/cdn/shop/products/p7_36d931d4-1ef2-4c82-9a65-80426fb77f21_1024x1024.jpg?v=1674275335",
//     imageHover:
//       "https://drou-electronics-store.myshopify.com/cdn/shop/products/p8_523c97c7-2aa2-47e8-8b17-5a3c05a66db3_1024x1024.jpg?v=1674275335",
//     description:
//       "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
//     specs: {
//       "Système d'exploitation": "Android 12.1",
//       Processeur: "Snapdragon 888",
//       "Réf processeur":
//         "Snapdragon 888 64-bit, 2.8 GHz jusqu'à 4.2 GHz, 8 Cores",
//       "Taille de mémoire": "128Go",
//       Mémoire: "6 Go",
//       "Disque Dur": "256 Go eMMC",
//       "Carte Graphique": "Adreno 230",
//       "Taille Ecran": '6.7"',
//       "Type Ecran": "Super AMOLED",
//       "Ecran Tactile": "Oui",
//       Réseau: "WiFi - Bluetooth",
//       Caméra: "Rear Camera 12 MP + Front Camera 8 MP",
//     },
//   },
// ];

if (grid) {
  grid.addEventListener("click", () => {
    if (grid.classList.contains("active")) return;

    grid.classList.add("active");
    list.classList.remove("active");
    productsContent.classList.remove("list");
    productsContent.classList.add("grid");
  });
}

if (list) {
  list.addEventListener("click", () => {
    if (list.classList.contains("active")) return;

    grid.classList.remove("active");
    list.classList.add("active");
    productsContent.classList.remove("grid");
    productsContent.classList.add("list");
  });
}

function formatPrice(price) {
  if (isNaN(price)) return "Invalid price"; // Gestion de l'erreur
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function displayProducts(page, filteredProducts = null) {
  if (listProducts) {
    listProducts.classList.remove("show");
    setTimeout(() => {
      listProducts.innerHTML = "";

      let productsToDisplay = filteredProducts || products;

      let start = (page - 1) * productsPerPage;
      let end = start + productsPerPage;
      let paginatedItems = productsToDisplay.slice(start, end);

      if (paginatedItems.length === 0) {
        listProducts.innerHTML = `
        <div class="no-results-container">
        <i class="uil uil-search-alt"></i>
          <p>Aucun produit ne correspond aux critères recherchés.</p>
        </div>
      `;
      }

      paginatedItems.forEach((product) => {
        listProducts.innerHTML += `
    <div class="item">
      <div class="item-image">
        <a href="${`/product.html?id=${product.id}`}">
          <img
            class="popup_cart_image default-img"
            src="${product.images[0]}"
            alt="${product.name}"
          />

          <img
            class="hover-img"
            src="${product.images[1]}"
            alt="${product.name}"
          />
        </a>
        ${
          product.priceReduction
            ? `<span class="item-prev-price">
                 <span>-${formatPrice(product.priceReduction)} FCFA</span>
               </span>`
            : ""
        }
      </div>
      <div class="item-body">
        <h2 class="item-title">
          <a href="${`/product.html?id=${product.id}`}">
            ${product.name}
          </a>
        </h2>
        <div class="item-price">
          <span>${formatPrice(product.price)} FCFA</span>
        </div>
        <div class="item-description">
          ${product.description}
        </div>
        <div class="product-action">
        <button
        class="action_btn addCart"
        aria-label="Add To Cart"
        onclick="AddToCart(this)"
      >
        <i class="uil uil-shopping-bag"></i>
        <span class="tooltip-text">Add To Cart</span>
      </button>
      
  
          <button
            class="action_btn addWishlist"
            aria-label="Add To Wishlist"
            onclick="AddToWish(this)"
          >
            <i class="uil uil-heart"></i>
            <span class="tooltip-text">Add To Wishlist</span>
          </button>
          <button
            class="action_btn compare_btn"
            data-pid="${product.id}"
            aria-label="Compare"
            onclick="Compare(${product.id})"
          >
            <i class="uil uil-signal"></i>
            <span class="tooltip-text">Compare</span>
          </button>
        </div>
      </div>
    </div>
      `;
      });

      listProducts.classList.add("show");
      window.scrollTo({ top: 0, behavior: "smooth" });

      updatePagination(page, productsToDisplay);
    }, 300);
  }
}

// Modification de la fonction de pagination pour accepter une liste de produits
function updatePagination(currentPage, productsToDisplay) {
  paginationContainer.innerHTML = "";

  let totalPages = Math.ceil(productsToDisplay.length / productsPerPage);

  if (totalPages > 0) {
    // Bouton Précédent
    paginationContainer.innerHTML += `
      <li class="${currentPage === 1 ? "disabled" : "prev"}" data-page="${
      currentPage - 1
    }">
        <span><i class="uil uil-angle-left"></i></span>
      </li>
    `;

    if (totalPages <= 4) {
      // Affichage normal si <= 4 pages
      for (let i = 1; i <= totalPages; i++) {
        paginationContainer.innerHTML += `
          <li class="page-item ${
            i === currentPage ? "active" : ""
          }" data-page="${i}">
            <span>${i}</span>
          </li>
        `;
      }
    } else {
      // Toujours afficher la première page
      paginationContainer.innerHTML += `
        <li class="page-item ${
          currentPage === 1 ? "active" : ""
        }" data-page="1">
          <span>1</span>
        </li>
      `;

      if (currentPage > 3) {
        paginationContainer.innerHTML += `<li class="dots"><span>...</span></li>`;
      }

      let start = Math.max(2, currentPage - 1);
      let end = Math.min(currentPage + 1, totalPages - 1);

      for (let i = start; i <= end; i++) {
        paginationContainer.innerHTML += `
          <li class="page-item ${
            i === currentPage ? "active" : ""
          }" data-page="${i}">
            <span>${i}</span>
          </li>
        `;
      }

      if (currentPage < totalPages - 2) {
        paginationContainer.innerHTML += `<li class="dots"><span>...</span></li>`;
      }

      // Toujours afficher la dernière page
      paginationContainer.innerHTML += `
        <li class="page-item" data-page="${totalPages}">
          <span>${totalPages}</span>
        </li>
      `;
    }

    // Bouton Suivant
    paginationContainer.innerHTML += `
      <li class="${
        currentPage === totalPages ? "disabled" : "next"
      }" data-page="${currentPage + 1}">
        <span><i class="uil uil-angle-right"></i></span>
      </li>
    `;

    // Mettre à jour le texte d'affichage des résultats
    document.getElementById("orther-result").innerText = `Showing ${Math.min(
      (currentPage - 1) * productsPerPage + 1,
      productsToDisplay.length
    )} - ${Math.min(
      currentPage * productsPerPage,
      productsToDisplay.length
    )} of ${productsToDisplay.length} results`;

    document.getElementById("desktop-result").innerText = `Showing ${Math.min(
      (currentPage - 1) * productsPerPage + 1,
      productsToDisplay.length
    )} - ${Math.min(
      currentPage * productsPerPage,
      productsToDisplay.length
    )} of ${productsToDisplay.length} results`;
  } else {
    document.getElementById("orther-result").innerText = "";
    document.getElementById("desktop-result").innerText = "";
  }

  // Gestion des clics sur la pagination
  document.querySelectorAll(".page-item, .prev, .next").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      let newPage = parseInt(item.getAttribute("data-page"));
      if (!isNaN(newPage) && newPage >= 1 && newPage <= totalPages) {
        currentPage = newPage;
        displayProducts(currentPage);
      }
    });
  });
}

// Afficher la première page au chargement
displayProducts(currentPage);

// ==========================================================

function applyFilter(filters, category, isInCategory = false) {
  if (isInCategory) {
    filteredProducts = products.filter((product) => {
      return product.category.trim().startsWith(category.trim());
    });
  } else {
    filteredProducts = products.filter((product) => {
      return Object.entries(filters).every(([key, value]) => {
        if (key === "Prix") {
          let [min, max] = value.map((v) => parseInt(v.replace(" FCFA", "")));
          return product.price >= min && product.price <= max;
        }

        return (
          product.specs[key] &&
          filters[key].some(
            (v) => product.specs[key].toLowerCase() === v.toLowerCase()
          )
        );
      });
    });
  }

  console.log("Produits filtrés :", filteredProducts);
  displayProducts(currentPage, filteredProducts);
}

const switchCategory = document.getElementById("switchCategory");
if (switchCategory) {
  switchCategory.addEventListener("click", () => {
    fondCategory.classList.toggle("show");
    category.classList.toggle("show");
  });
}

const sortBy = document.getElementById("SortBy");
if (sortBy) {
  sortBy.addEventListener("change", function () {
    let sortBy = this.value;
    sortProducts(sortBy);
  });
}

function sortProducts(sortBy) {
  // let sortedProducts = [...products];

  let sortedProducts =
    filteredProducts.length > 0 ? filteredProducts : products;

  switch (sortBy) {
    case "best-selling":
      sortedProducts.sort((a, b) => (b.sales || 0) - (a.sales || 0));
      break;

    case "title-ascending":
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;

    case "title-descending":
      sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
      break;

    case "price-ascending":
      sortedProducts.sort((a, b) => a.price - b.price);
      break;

    case "price-descending":
      sortedProducts.sort((a, b) => b.price - a.price);
      break;

    case "created-descending":
      sortedProducts.sort((a, b) => b.id - a.id);
      break;

    case "created-ascending":
      sortedProducts.sort((a, b) => a.id - b.id);
      break;

    default:
      // "manual" ou valeur non reconnue : ne pas trier
      break;
  }

  console.log("Produits triés :", sortedProducts);
  displayProducts(currentPage, sortedProducts); // Affiche les produits triés
}
