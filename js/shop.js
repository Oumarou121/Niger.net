const grid = document.getElementById("grid");
const list = document.getElementById("list");
const productsContent = document.getElementById("listProducts");
const productsPerPage = 9;
let currentPage = 1;
const listProducts = document.getElementById("listProducts");
const paginationContainer = document.querySelector(".shop_pagi ul");
const products = [
  {
    id: 1,
    name: "Uphone lightning cable",
    href: "",
    price: 10000,
    priceReduction: 0,
    image:
      "//drou-electronics-store.myshopify.com/cdn/shop/products/p4_c46c6d30-4b9f-4971-96be-d28d9f0d5ee5_large.jpg?v=1674275311",
    imageHover:
      "//drou-electronics-store.myshopify.com/cdn/shop/products/p5_61c8ce6b-3afa-4276-a285-f98e4d5c7f67_large.jpg?v=1674275311",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    species: {
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
    },
  },
  {
    id: 2,
    name: "Smartphone Tecno Spark Go 2024",
    href: "",
    price: 65000,
    priceReduction: 5000,
    image:
      "https://www.tunisianet.com.tn/382924-large/smartphone-tecno-spark-go-2024-2-go-64-go-blanc.jpg",
    imageHover:
      "https://www.tunisianet.com.tn/382924-large/smartphone-tecno-spark-go-2024-2-go-64-go-blanc.jpg",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    species: {
      "Système d'exploitation": "iOS 15.3",
      Processeur: "Apple A15 Bionic",
      "Réf processeur":
        "Apple A15 Bionic 64-bit, 2.6 GHz jusqu'à 3.6 GHz, 6 Cores",
      "Taille de mémoire": "64Go",
      Mémoire: "4 Go",
      "Disque Dur": "128 Go eMMC",
      "Carte Graphique": "Apple A15 Bionic",
      "Taille Ecran": '6"',
      "Type Ecran": "OLED",
      "Ecran Tactile": "Oui",
      Réseau: "WiFi - Bluetooth",
      Caméra: "Rear Camera 12 MP + Front Camera 8 MP",
    },
  },
  {
    id: 3,
    name: "iPhone 14 pro max",
    href: "",
    price: 250000,
    priceReduction: 45000,
    image:
      "https://drou-electronics-store.myshopify.com/cdn/shop/products/p7_36d931d4-1ef2-4c82-9a65-80426fb77f21_1024x1024.jpg?v=1674275335",
    imageHover:
      "https://drou-electronics-store.myshopify.com/cdn/shop/products/p8_523c97c7-2aa2-47e8-8b17-5a3c05a66db3_1024x1024.jpg?v=1674275335",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    species: {
      "Système d'exploitation": "Android 12.1",
      Processeur: "Snapdragon 888",
      "Réf processeur":
        "Snapdragon 888 64-bit, 2.8 GHz jusqu'à 4.2 GHz, 8 Cores",
      "Taille de mémoire": "128Go",
      Mémoire: "6 Go",
      "Disque Dur": "256 Go eMMC",
      "Carte Graphique": "Adreno 230",
      "Taille Ecran": '6.7"',
      "Type Ecran": "Super AMOLED",
      "Ecran Tactile": "Oui",
      Réseau: "WiFi - Bluetooth",
      Caméra: "Rear Camera 12 MP + Front Camera 8 MP",
    },
  },
  {
    id: 4,
    name: "Uphone lightning cable",
    href: "",
    price: 10000,
    priceReduction: 0,
    image:
      "//drou-electronics-store.myshopify.com/cdn/shop/products/p4_c46c6d30-4b9f-4971-96be-d28d9f0d5ee5_large.jpg?v=1674275311",
    imageHover:
      "//drou-electronics-store.myshopify.com/cdn/shop/products/p5_61c8ce6b-3afa-4276-a285-f98e4d5c7f67_large.jpg?v=1674275311",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    species: {
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
    },
  },
  {
    id: 5,
    name: "Smartphone Tecno Spark Go 2024",
    href: "",
    price: 65000,
    priceReduction: 5000,
    image:
      "https://www.tunisianet.com.tn/382924-large/smartphone-tecno-spark-go-2024-2-go-64-go-blanc.jpg",
    imageHover:
      "https://www.tunisianet.com.tn/382924-large/smartphone-tecno-spark-go-2024-2-go-64-go-blanc.jpg",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    species: {
      "Système d'exploitation": "iOS 15.3",
      Processeur: "Apple A15 Bionic",
      "Réf processeur":
        "Apple A15 Bionic 64-bit, 2.6 GHz jusqu'à 3.6 GHz, 6 Cores",
      "Taille de mémoire": "64Go",
      Mémoire: "4 Go",
      "Disque Dur": "128 Go eMMC",
      "Carte Graphique": "Apple A15 Bionic",
      "Taille Ecran": '6"',
      "Type Ecran": "OLED",
      "Ecran Tactile": "Oui",
      Réseau: "WiFi - Bluetooth",
      Caméra: "Rear Camera 12 MP + Front Camera 8 MP",
    },
  },
  {
    id: 6,
    name: "iPhone 14 pro max",
    href: "",
    price: 250000,
    priceReduction: 45000,
    image:
      "https://drou-electronics-store.myshopify.com/cdn/shop/products/p7_36d931d4-1ef2-4c82-9a65-80426fb77f21_1024x1024.jpg?v=1674275335",
    imageHover:
      "https://drou-electronics-store.myshopify.com/cdn/shop/products/p8_523c97c7-2aa2-47e8-8b17-5a3c05a66db3_1024x1024.jpg?v=1674275335",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    species: {
      "Système d'exploitation": "Android 12.1",
      Processeur: "Snapdragon 888",
      "Réf processeur":
        "Snapdragon 888 64-bit, 2.8 GHz jusqu'à 4.2 GHz, 8 Cores",
      "Taille de mémoire": "128Go",
      Mémoire: "6 Go",
      "Disque Dur": "256 Go eMMC",
      "Carte Graphique": "Adreno 230",
      "Taille Ecran": '6.7"',
      "Type Ecran": "Super AMOLED",
      "Ecran Tactile": "Oui",
      Réseau: "WiFi - Bluetooth",
      Caméra: "Rear Camera 12 MP + Front Camera 8 MP",
    },
  },
  {
    id: 7,
    name: "Uphone lightning cable",
    href: "",
    price: 10000,
    priceReduction: 0,
    image:
      "//drou-electronics-store.myshopify.com/cdn/shop/products/p4_c46c6d30-4b9f-4971-96be-d28d9f0d5ee5_large.jpg?v=1674275311",
    imageHover:
      "//drou-electronics-store.myshopify.com/cdn/shop/products/p5_61c8ce6b-3afa-4276-a285-f98e4d5c7f67_large.jpg?v=1674275311",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    species: {
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
    },
  },
  {
    id: 8,
    name: "Smartphone Tecno Spark Go 2024",
    href: "",
    price: 65000,
    priceReduction: 5000,
    image:
      "https://www.tunisianet.com.tn/382924-large/smartphone-tecno-spark-go-2024-2-go-64-go-blanc.jpg",
    imageHover:
      "https://www.tunisianet.com.tn/382924-large/smartphone-tecno-spark-go-2024-2-go-64-go-blanc.jpg",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    species: {
      "Système d'exploitation": "iOS 15.3",
      Processeur: "Apple A15 Bionic",
      "Réf processeur":
        "Apple A15 Bionic 64-bit, 2.6 GHz jusqu'à 3.6 GHz, 6 Cores",
      "Taille de mémoire": "64Go",
      Mémoire: "4 Go",
      "Disque Dur": "128 Go eMMC",
      "Carte Graphique": "Apple A15 Bionic",
      "Taille Ecran": '6"',
      "Type Ecran": "OLED",
      "Ecran Tactile": "Oui",
      Réseau: "WiFi - Bluetooth",
      Caméra: "Rear Camera 12 MP + Front Camera 8 MP",
    },
  },
  {
    id: 9,
    name: "iPhone 14 pro max",
    href: "",
    price: 250000,
    priceReduction: 45000,
    image:
      "https://drou-electronics-store.myshopify.com/cdn/shop/products/p7_36d931d4-1ef2-4c82-9a65-80426fb77f21_1024x1024.jpg?v=1674275335",
    imageHover:
      "https://drou-electronics-store.myshopify.com/cdn/shop/products/p8_523c97c7-2aa2-47e8-8b17-5a3c05a66db3_1024x1024.jpg?v=1674275335",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    species: {
      "Système d'exploitation": "Android 12.1",
      Processeur: "Snapdragon 888",
      "Réf processeur":
        "Snapdragon 888 64-bit, 2.8 GHz jusqu'à 4.2 GHz, 8 Cores",
      "Taille de mémoire": "128Go",
      Mémoire: "6 Go",
      "Disque Dur": "256 Go eMMC",
      "Carte Graphique": "Adreno 230",
      "Taille Ecran": '6.7"',
      "Type Ecran": "Super AMOLED",
      "Ecran Tactile": "Oui",
      Réseau: "WiFi - Bluetooth",
      Caméra: "Rear Camera 12 MP + Front Camera 8 MP",
    },
  },
  {
    id: 10,
    name: "Uphone lightning cable",
    href: "",
    price: 10000,
    priceReduction: 0,
    image:
      "//drou-electronics-store.myshopify.com/cdn/shop/products/p4_c46c6d30-4b9f-4971-96be-d28d9f0d5ee5_large.jpg?v=1674275311",
    imageHover:
      "//drou-electronics-store.myshopify.com/cdn/shop/products/p5_61c8ce6b-3afa-4276-a285-f98e4d5c7f67_large.jpg?v=1674275311",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    species: {
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
    },
  },
  {
    id: 11,
    name: "Smartphone Tecno Spark Go 2024",
    href: "",
    price: 65000,
    priceReduction: 5000,
    image:
      "https://www.tunisianet.com.tn/382924-large/smartphone-tecno-spark-go-2024-2-go-64-go-blanc.jpg",
    imageHover:
      "https://www.tunisianet.com.tn/382924-large/smartphone-tecno-spark-go-2024-2-go-64-go-blanc.jpg",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    species: {
      "Système d'exploitation": "iOS 15.3",
      Processeur: "Apple A15 Bionic",
      "Réf processeur":
        "Apple A15 Bionic 64-bit, 2.6 GHz jusqu'à 3.6 GHz, 6 Cores",
      "Taille de mémoire": "64Go",
      Mémoire: "4 Go",
      "Disque Dur": "128 Go eMMC",
      "Carte Graphique": "Apple A15 Bionic",
      "Taille Ecran": '6"',
      "Type Ecran": "OLED",
      "Ecran Tactile": "Oui",
      Réseau: "WiFi - Bluetooth",
      Caméra: "Rear Camera 12 MP + Front Camera 8 MP",
    },
  },
  {
    id: 12,
    name: "iPhone 14 pro max",
    href: "",
    price: 250000,
    priceReduction: 45000,
    image:
      "https://drou-electronics-store.myshopify.com/cdn/shop/products/p7_36d931d4-1ef2-4c82-9a65-80426fb77f21_1024x1024.jpg?v=1674275335",
    imageHover:
      "https://drou-electronics-store.myshopify.com/cdn/shop/products/p8_523c97c7-2aa2-47e8-8b17-5a3c05a66db3_1024x1024.jpg?v=1674275335",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    species: {
      "Système d'exploitation": "Android 12.1",
      Processeur: "Snapdragon 888",
      "Réf processeur":
        "Snapdragon 888 64-bit, 2.8 GHz jusqu'à 4.2 GHz, 8 Cores",
      "Taille de mémoire": "128Go",
      Mémoire: "6 Go",
      "Disque Dur": "256 Go eMMC",
      "Carte Graphique": "Adreno 230",
      "Taille Ecran": '6.7"',
      "Type Ecran": "Super AMOLED",
      "Ecran Tactile": "Oui",
      Réseau: "WiFi - Bluetooth",
      Caméra: "Rear Camera 12 MP + Front Camera 8 MP",
    },
  },
  {
    id: 13,
    name: "iPhone 14 pro max",
    href: "",
    price: 250000,
    priceReduction: 45000,
    image:
      "https://drou-electronics-store.myshopify.com/cdn/shop/products/p7_36d931d4-1ef2-4c82-9a65-80426fb77f21_1024x1024.jpg?v=1674275335",
    imageHover:
      "https://drou-electronics-store.myshopify.com/cdn/shop/products/p8_523c97c7-2aa2-47e8-8b17-5a3c05a66db3_1024x1024.jpg?v=1674275335",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    species: {
      "Système d'exploitation": "Android 12.1",
      Processeur: "Snapdragon 888",
      "Réf processeur":
        "Snapdragon 888 64-bit, 2.8 GHz jusqu'à 4.2 GHz, 8 Cores",
      "Taille de mémoire": "128Go",
      Mémoire: "6 Go",
      "Disque Dur": "256 Go eMMC",
      "Carte Graphique": "Adreno 230",
      "Taille Ecran": '6.7"',
      "Type Ecran": "Super AMOLED",
      "Ecran Tactile": "Oui",
      Réseau: "WiFi - Bluetooth",
      Caméra: "Rear Camera 12 MP + Front Camera 8 MP",
    },
  },
];

grid.addEventListener("click", () => {
  if (grid.classList.contains("active")) return;

  grid.classList.add("active");
  list.classList.remove("active");
  productsContent.classList.remove("list");
  productsContent.classList.add("grid");
});

list.addEventListener("click", () => {
  if (list.classList.contains("active")) return;

  grid.classList.remove("active");
  list.classList.add("active");
  productsContent.classList.remove("grid");
  productsContent.classList.add("list");
});

function formatPrice(price) {
  if (isNaN(price)) return "Invalid price"; // Gestion de l'erreur
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Fonction pour afficher les produits selon la page actuelle
function displayProducts(page) {
  listProducts.classList.remove("show"); // Cache avec opacité 0
  setTimeout(() => {
    listProducts.innerHTML = ""; // Vider la liste

    let start = (page - 1) * productsPerPage;
    let end = start + productsPerPage;
    let paginatedItems = products.slice(start, end);

    paginatedItems.forEach((product) => {
      listProducts.innerHTML += `
    <div class="item">
      <div class="item-image">
      <a href="${product.href ? `/shop/${product.href}` : "#"}">
        <img
          class="popup_cart_image default-img"
          src="${product.image}"
          alt="${product.name}"
        />

        <img
          class="hover-img"
          src="${product.imageHover}"
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
        <a href="${product.href ? product.href : "#"}">
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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    updatePagination(page);
  }, 300);
}

// Fonction pour générer la pagination
function updatePagination(currentPage) {
  paginationContainer.innerHTML = "";

  let totalPages = Math.ceil(products.length / productsPerPage);

  // Bouton Précédent
  paginationContainer.innerHTML += `
    <li class="${currentPage === 1 ? "disabled" : "prev"}">
      <a href="#" data-page="${currentPage - 1}">
        <i class="uil uil-angle-left"></i>
      </a>
    </li>
  `;

  // Boutons Numérotés
  for (let i = 1; i <= totalPages; i++) {
    paginationContainer.innerHTML += `
      <li>
        <a href="#" class="${
          i === currentPage ? "active" : ""
        }" data-page="${i}">${i}</a>
      </li>
    `;
  }

  // Bouton Suivant
  paginationContainer.innerHTML += `
    <li class="${currentPage === totalPages ? "disabled" : "next"}">
      <a href="#" data-page="${currentPage + 1}">
        <i class="uil uil-angle-right"></i>
      </a>
    </li>
  `;

  // Mettre à jour le texte d'affichage des résultats
  document.querySelector(".show-items").innerText = `Showing ${Math.min(
    (currentPage - 1) * productsPerPage + 1,
    products.length
  )} - ${Math.min(currentPage * productsPerPage, products.length)} of ${
    products.length
  } results`;
}

// Gestion des clics sur la pagination
paginationContainer.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.tagName === "A") {
    let newPage = parseInt(e.target.getAttribute("data-page"));
    if (
      newPage >= 1 &&
      newPage <= Math.ceil(products.length / productsPerPage)
    ) {
      currentPage = newPage;
      displayProducts(currentPage);
    }
  }
});

// Afficher la première page au chargement
displayProducts(currentPage);

// ==========================================================

// class Category {
//   constructor(name, options = {}) {
//     this.name = name;
//     this.options = options;
//     this.subCategories = [];
//   }

//   addSubCategory(subCategory) {
//     this.subCategories.push(subCategory);
//   }

//   createCategoryElement() {
//     const categoryWrapper = document.createElement("div");
//     categoryWrapper.classList.add("category-wrapper");

//     const label = document.createElement("label");
//     label.classList.add("category-label");

//     const toggleIcon = document.createElement("span");
//     toggleIcon.classList.add("toggle-icon");
//     toggleIcon.textContent = this.subCategories.length ? "➕" : "⚪";

//     const checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//     checkbox.dataset.category = this.name;

//     label.appendChild(toggleIcon);
//     label.appendChild(checkbox);
//     label.append(` ${this.name}`);

//     categoryWrapper.appendChild(label);

//     const subCategoryContainer = document.createElement("div");
//     subCategoryContainer.classList.add("sub-category-container");

//     this.subCategories.forEach((sub) => {
//       subCategoryContainer.appendChild(sub.createCategoryElement());
//     });

//     if (this.subCategories.length) {
//       categoryWrapper.appendChild(subCategoryContainer);

//       toggleIcon.addEventListener("click", () => {
//         categoryWrapper.classList.toggle("open"); // Ajoute la classe open au wrapper entier
//         toggleIcon.textContent = categoryWrapper.classList.contains("open")
//           ? "➖"
//           : "➕";
//       });
//     }

//     checkbox.addEventListener("change", updateOptionsDisplay);

//     return categoryWrapper;
//   }

//   getOptions() {
//     return this.options;
//   }
// }

// class SubCategory extends Category {}

// const informatique = new Category("Informatique", {
//   TypeDisque: ["SSD", "SSF"],
// });

// const Mobile = new Category("Informatique", {
//   TypeDisque: ["SSD", "SSF"],
// });

// const ordinateurPortable = new SubCategory("Ordinateur Portable", {
//   Type: ["Ultrabook", "Standard"],
// });
// const ordinateurBureau = new SubCategory("Ordinateur Bureau", {
//   Processeur: ["Intel", "AMD"],
// });
// const accessoiresPeripheriques = new SubCategory(
//   "Accessoires et Périphériques",
//   { Connexion: ["USB", "Bluetooth"] }
// );

// const pcPortable = new SubCategory("Pc Portable", {
//   "Taille écran": ["13''", "15''", "17''"],
// });
// const pcPortableGamer = new SubCategory("Pc Portable Gamer", {
//   "Carte graphique": ["RTX 4060", "RTX 4070"],
// });

// const ecran = new SubCategory("Ecran", { Résolution: ["1080p", "4K"] });
// const pcBureau = new SubCategory("Pc Bureau", { Stockage: ["SSD", "HDD"] });
// const pcBureauGamer = new SubCategory("Pc Bureau Gamer", {
//   Refroidissement: ["Air", "Watercooling"],
// });
// const pcToutEnUn = new SubCategory("Pc Tout en Un", {
//   "Écran tactile": ["Oui", "Non"],
// });

// const casque = new SubCategory("Casque", { Type: ["Filaire", "Sans fil"] });
// const sacADos = new SubCategory("Sac à Dos", { Capacité: ["15L", "20L"] });
// const sourisClavier = new SubCategory("Souris et Clavier", {
//   RGB: ["Oui", "Non"],
// });

// informatique.addSubCategory(ordinateurPortable);
// informatique.addSubCategory(ordinateurBureau);
// informatique.addSubCategory(accessoiresPeripheriques);

// ordinateurPortable.addSubCategory(pcPortable);
// ordinateurPortable.addSubCategory(pcPortableGamer);

// ordinateurBureau.addSubCategory(ecran);
// ordinateurBureau.addSubCategory(pcBureau);
// ordinateurBureau.addSubCategory(pcBureauGamer);
// ordinateurBureau.addSubCategory(pcToutEnUn);

// accessoiresPeripheriques.addSubCategory(casque);
// accessoiresPeripheriques.addSubCategory(sacADos);
// accessoiresPeripheriques.addSubCategory(sourisClavier);

// function generateFilters() {
//   document
//     .querySelector(".category-container")
//     .appendChild(informatique.createCategoryElement());
// }

// function updateOptionsDisplay() {
//   const selectedOptions = document.querySelector(".selected-options");
//   selectedOptions.innerHTML = "";

//   document
//     .querySelectorAll(".category-container input[type='checkbox']:checked")
//     .forEach((checkbox) => {
//       const category = findCategoryByName(
//         informatique,
//         checkbox.dataset.category
//       );
//       if (category) {
//         Object.entries(category.getOptions()).forEach(([title, values]) => {
//           const optionGroup = document.createElement("div");
//           optionGroup.classList.add("option-group");

//           const optionLabel = document.createElement("label");
//           optionLabel.textContent = `${title} :`;
//           optionGroup.appendChild(optionLabel);

//           values.forEach((value) => {
//             const valueLabel = document.createElement("label");
//             valueLabel.classList.add("option-value");

//             const checkbox = document.createElement("input");
//             checkbox.type = "checkbox";
//             checkbox.name = title;
//             checkbox.value = value;

//             valueLabel.appendChild(checkbox);
//             valueLabel.append(` ${value}`);

//             optionGroup.appendChild(valueLabel);
//           });

//           selectedOptions.appendChild(optionGroup);
//         });
//       }
//     });
// }

// function findCategoryByName(category, name) {
//   if (category.name === name) return category;
//   for (let sub of category.subCategories) {
//     const found = findCategoryByName(sub, name);
//     if (found) return found;
//   }
//   return null;
// }

// document.addEventListener("DOMContentLoaded", generateFilters);
