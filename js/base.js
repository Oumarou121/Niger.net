let filteredProducts = [];
let compareProducts = [];

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
    specs,
    reviews
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
    this.reviews = reviews;
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

class ProductManager {
  constructor(products) {
    this.products = products;
  }

  findMostSimilarProducts(product, limit = 8) {
    const sameCategoryProducts = this.products.filter(
      (p) => p.category === product.category && p.id !== product.id
    );

    const sortedBySimilarity = sameCategoryProducts
      .map((p) => {
        const commonSpecsCount = this.countCommonSpecs(p, product);
        return { product: p, commonSpecsCount };
      })
      .sort((a, b) => b.commonSpecsCount - a.commonSpecsCount)
      .slice(0, limit);

    return sortedBySimilarity.map((item) => item.product);
  }

  countCommonSpecs(p1, p2) {
    let commonSpecsCount = 0;
    for (const [key, value] of Object.entries(p1.specs)) {
      if (p2.specs[key] === value) {
        commonSpecsCount++;
      }
    }
    return commonSpecsCount;
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
    },
    [
      {
        name: "Oumarou",
        date: "12/04/2024",
        rating: 1,
        comment:
          "Si vous souhaitez dès maintenant un téléphone fiable et performant, l'iPhone 15 continue d'être un choix parfait. Si vous souhaitez une option plus avancée et à long terme, vous devriez peut-être envisager d'acheter l'iPhone 16.",
      },
      {
        name: "Ben Arfa",
        date: "12/04/2024",
        rating: 5,
        comment:
          "Si vous souhaitez dès maintenant un téléphone fiable et performant, l'iPhone 15 continue d'être un choix parfait. Si vous souhaitez une option plus avancée et à long terme, vous devriez peut-être envisager d'acheter l'iPhone 16.",
      },
      {
        name: "Arafat",
        date: "12/04/2024",
        rating: 5,
        comment:
          "Si vous souhaitez dès maintenant un téléphone fiable et performant, l'iPhone 15 continue d'être un choix parfait. Si vous souhaitez une option plus avancée et à long terme, vous devriez peut-être envisager d'acheter l'iPhone 16.",
      },
    ]
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
    },
    [
      {
        name: "Mohamed",
        date: "12/04/2024",
        rating: 2,
        comment:
          "Si vous souhaitez dès maintenant un téléphone fiable et performant, l'iPhone 15 continue d'être un choix parfait. Si vous souhaitez une option plus avancée et à long terme, vous devriez peut-être envisager d'acheter l'iPhone 16.",
      },
      {
        name: "Ahmed",
        date: "12/04/2024",
        rating: 4,
        comment:
          "Si vous souhaitez dès maintenant un téléphone fiable et performant, l'iPhone 15 continue d'être un choix parfait. Si vous souhaitez une option plus avancée et à long terme, vous devriez peut-être envisager d'acheter l'iPhone 16.",
      },
      {
        name: "Abou",
        date: "12/04/2024",
        rating: 2,
        comment:
          "Si vous souhaitez dès maintenant un téléphone fiable et performant, l'iPhone 15 continue d'être un choix parfait. Si vous souhaitez une option plus avancée et à long terme, vous devriez peut-être envisager d'acheter l'iPhone 16.",
      },
    ]
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
    },
    [
      {
        name: "AB",
        date: "12/04/2024",
        rating: 5,
        comment:
          "Si vous souhaitez dès maintenant un téléphone fiable et performant, l'iPhone 15 continue d'être un choix parfait. Si vous souhaitez une option plus avancée et à long terme, vous devriez peut-être envisager d'acheter l'iPhone 16.",
      },
      {
        name: "Issou",
        date: "12/04/2024",
        rating: 4,
        comment:
          "Si vous souhaitez dès maintenant un téléphone fiable et performant, l'iPhone 15 continue d'être un choix parfait. Si vous souhaitez une option plus avancée et à long terme, vous devriez peut-être envisager d'acheter l'iPhone 16.",
      },
      {
        name: "Almou",
        date: "12/04/2024",
        rating: 4,
        comment:
          "Si vous souhaitez dès maintenant un téléphone fiable et performant, l'iPhone 15 continue d'être un choix parfait. Si vous souhaitez une option plus avancée et à long terme, vous devriez peut-être envisager d'acheter l'iPhone 16.",
      },
    ]
  ),
];

const productManager = new ProductManager(products);

// Gestion du préchargement de la page
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader_active");
  if (preloader) {
    preloader.style.transition = "opacity 0.6s ease";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 600); // Correspond à la durée de la transition CSS
  }
});

// Gestion des événements DOM
document.addEventListener("DOMContentLoaded", () => {
  const showMenu = document.getElementById("showMenu");
  const hiddenLink = document.getElementById("hiddenLink");
  const fond = document.getElementById("fond");
  const links = document.getElementById("links-container");
  const hiddenSearch = document.getElementById("hiddenSearch");
  const showSearch = document.getElementById("showSearch");
  const searchBar = document.getElementById("searchBar");
  const fondCategory = document.getElementById("fondCategory");
  const category = document.getElementById("category");
  const showCategory = document.getElementById("showCategory");
  const hiddenCategory = document.getElementById("hiddenCategory");

  showCategory.addEventListener("click", () => {
    fondCategory.classList.toggle("show");
    category.classList.toggle("show");
  });

  hiddenCategory.addEventListener("click", () => {
    fondCategory.classList.toggle("show");
    category.classList.toggle("show");
  });

  // Gestion du menu
  if (showMenu && fond && links) {
    showMenu.addEventListener("click", () => {
      fond.classList.add("show");
      links.classList.add("show");
      document.body.classList.add("modal-open");
    });

    hiddenLink?.addEventListener("click", () => {
      fond.classList.remove("show");
      links.classList.remove("show");
      document.body.classList.remove("modal-open");
    });
  }

  // Gestion de la barre de recherche
  if (hiddenSearch && showSearch && searchBar) {
    hiddenSearch.addEventListener("click", () => {
      searchBar.classList.remove("active");
    });

    showSearch.addEventListener("click", () => {
      searchBar.classList.add("active");
    });
  }
});

// Fonction de debounce pour optimiser les événements fréquents
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

const handleScroll = debounce(() => {
  const header = document.getElementById("header");
  const scrollUp = document.getElementById("scrollUp");
  const headerTop = document.getElementById("headerTop");
  const mediaQuery = window.matchMedia("(min-width: 992px)");

  if (window.scrollY > 20) {
    header?.classList.add("fixed");
    scrollUp?.classList.add("show");

    if (headerTop) {
      headerTop.style.display = "none";
    }
  } else {
    header?.classList.remove("fixed");
    scrollUp?.classList.remove("show");

    if (mediaQuery.matches && headerTop) {
      headerTop.style.display = "flex";
    }
  }
}, 100);

window.addEventListener("scroll", handleScroll);

document.getElementById("scrollUp").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function AddToCart(button, isProduct = false) {
  const productElement = isProduct
    ? button.closest(".firstContent")
    : button.closest(".item");
  const product = {
    image: isProduct
      ? productElement.querySelector("#ProductPhoto").src
      : productElement.querySelector("img").src,
    name: isProduct
      ? productElement.querySelector("#productName1").innerText
      : productElement.querySelector(".item-title").innerText,
    price: isProduct
      ? productElement.querySelector("#productPrice").innerText
      : productElement.querySelector(".item-price span").innerText,
    quantity: isProduct
      ? productElement.querySelector(".quantity input").value
      : 1,
  };

  console.log(product);

  let modal = document.getElementById("modalAddToCart");

  if (!modal) {
    modal = document.createElement("div");
    modal.id = "modalAddToCart";
    modal.className = "modal fade ajax-popup";
    modal.innerHTML = `
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-body">
                  <div class="modal-close">
                  <button type="button" class="close" onclick="closeModal()">
                          <i class="uil uil-times"></i>
                      </button>
                  </div>
                  <div class="modal-content-text">
                      <div class="popup-image">
                          <img class="popupimage" src=${product.image} alt=${product.name}/>
                      </div>
                      <div class="popup-content">
                          <p class="success-message">
                              <span class="fa fa-check-circle"></span> Added to cart successfully!
                          </p>
                          <div class="modal-button">
                              <a href="/cart" class="btn btn-cart">VIEW CART</a>
                              <a href="/checkout" class="btn btn-cart">CHECKOUT</a>
                          </div>
                      </div>
                      <div class="right-popup-content">
                          <p class="total_item">
                              <span class="fa fa-shopping-basket"></span> There are <span class="cart_count bigcounter">${product.quantity}</span> Items In Your Cart.
                          </p>
                          <p class="cart_total">
                              <span class="total_price_label">Total Price: </span>
                              <span class="shopping-cart__total">
                                  <span class="money text-red">${product.price}</span>
                              </span>
                          </p>
                          <div class="continue_btn">
                              <a href="#" onclick="closeModal()"> Continue Shopping </a>
                              <i class="fa fa-arrow-right"></i>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    `;
    document.body.appendChild(modal);
  } else {
    // Mettre à jour le modal avec le produit
    modal.querySelector(".popupimage").src = product.image;
    modal.querySelector(".popupimage").alt = product.name;
    modal.querySelector(".money").textContent = product.price;
    modal.querySelector(".cart_count").textContent = product.quantity;
  }

  modal.classList.add("show");
  document.body.classList.add("modal-open");
}

function closeModal() {
  let modal = document.getElementById("modalAddToCart");
  modal.classList.remove("show");
  document.body.classList.remove("modal-open");
}

function AddToWish(button) {
  const icon = button.querySelector("i");
  if (icon.classList.contains("uil-heart")) {
    icon.classList.remove("uil-heart");
    icon.classList.add("uil-spinner-alt", "rotateIn");

    setTimeout(() => {
      icon.classList.remove("uil-spinner-alt", "rotateIn");
      icon.classList.add("uil-heart");
      button.classList.toggle("favorite");
    }, 2000);
  }
}

function Compare(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  if (compareProducts.some((p) => p.id === productId)) {
    compareProducts = compareProducts.filter((p) => p.id !== productId);
  } else {
    if (compareProducts.length >= 2) {
      compareProducts.shift();
    }
    compareProducts.push(product);
  }

  updateCompareModal();
}

function updateCompareModal() {
  let modalHTML = `
    <div class="modalCompare" id="modalCompare">
      <div class="modalContent">
        <div class="modalCompare-close">
          <button type="button" class="closeCompare" onclick="closeCompareModal()">
            <i class="uil uil-times"></i>
          </button>
        </div>
        <div class="modalBody">
          <table>
            <caption>Compare Product</caption>
            <tbody>`;

  if (compareProducts.length === 0) {
    closeCompareModal();
    return;
  }

  modalHTML += `<tr><th>Action</th>`;
  compareProducts.forEach((product) => {
    modalHTML += `
      <td>
        <button class="compare-remove-btn" onclick="removeFromCompare(${product.id})">
          <i class="uil uil-times"></i>
        </button>
      </td>`;
  });
  modalHTML += `</tr>`;

  modalHTML += `<tr><th>Product Name</th>`;
  compareProducts.forEach((product) => {
    modalHTML += `<td>${product.name}</td>`;
  });
  modalHTML += `</tr>`;

  modalHTML += `<tr><th>Product Image</th>`;
  compareProducts.forEach((product) => {
    modalHTML += `
      <td>
        <img src="${product.images[0]}" alt="${product.name}" />
        <span class="current-price">${formatPrice(product.price)} FCFA</span>
        <a href="${`/product.html?id=${product.id}`}">View product</a>
      </td>`;
  });
  modalHTML += `</tr>`;

  const allSpecs = new Set();
  compareProducts.forEach((product) => {
    if (product.specs) {
      Object.keys(product.specs).forEach((sp) => allSpecs.add(sp));
    }
  });

  allSpecs.forEach((sp) => {
    modalHTML += `<tr><th>${sp}</th>`;
    compareProducts.forEach((product) => {
      modalHTML += `<td>${product.specs?.[sp] || "-"}</td>`;
    });
    modalHTML += `</tr>`;
  });

  modalHTML += `
            </tbody>
          </table>
        </div>
      </div>
    </div>`;

  let existingModal = document.getElementById("modalCompare");
  if (existingModal) {
    existingModal.outerHTML = modalHTML;
  } else {
    document.body.insertAdjacentHTML("beforeend", modalHTML);
  }

  document.getElementById("modalCompare").classList.add("show");
  document.body.classList.add("modal-open");
}

function removeFromCompare(productId) {
  compareProducts = compareProducts.filter((p) => p.id !== productId);
  updateCompareModal();
}

function closeCompareModal() {
  let modal = document.getElementById("modalCompare");
  if (modal) {
    modal.classList.remove("show");
    document.body.classList.remove("modal-open");
  }
}

function creationProduct(product) {
  return `
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
          <a href="${`/product.html?id=${product.id}`}">${product.name}</a>
        </h2>
        <div class="item-price">
          <span>${formatPrice(product.price)} FCFA</span>
        </div>
        <div class="item-description">${product.description}</div>
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
}
