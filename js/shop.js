const grid = document.getElementById("grid");
const list = document.getElementById("list");
const productsContent = document.getElementById("listProducts");
const productsPerPage = 9;
let currentPage = 1;
const listProducts = document.getElementById("listProducts");
const paginationContainer = document.querySelector(".shop_pagi ul");
let products = [
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
      Access: "oui",
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
      Access: "non",
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
      Résolution: "Full HD",
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

function displayProducts(page, filteredProducts = null) {
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
    window.scrollTo({ top: 0, behavior: "smooth" });

    updatePagination(page, productsToDisplay);
  }, 300);
}

// Modification de la fonction de pagination pour accepter une liste de produits
function updatePagination(currentPage, productsToDisplay) {
  paginationContainer.innerHTML = "";

  let totalPages = Math.ceil(productsToDisplay.length / productsPerPage);

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

// document.getElementById("applyFiltre").addEventListener("click", () => {
//   const container = document.querySelector(".selectedFilters");
//   let filters = {};

//   container.querySelectorAll(".filtre-item").forEach((filtre) => {
//     let [key, ...values] = filtre.textContent.split(" -").map((v) => v.trim());
//     filters[key] = values.length > 1 ? values : values[0];
//   });

//   console.log("Filtres appliqués :", filters);
//   applyFilter(filters);
// });

function applyFilter(filters) {
  let filteredProducts = products.filter((product) => {
    return Object.entries(filters).every(([key, value]) => {
      if (key === "Prix") {
        let [min, max] = value.map((v) => parseInt(v.replace(" FCFA", "")));
        return product.price >= min && product.price <= max;
      }

      return (
        product.species[key] &&
        filters[key].some(
          (v) => product.species[key].toLowerCase() === v.toLowerCase()
        )
      );
    });
  });

  console.log("Produits filtrés :", filteredProducts);
  displayProducts(currentPage, filteredProducts);
}
