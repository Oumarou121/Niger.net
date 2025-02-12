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

// Gestion du défilement et des changements de style du header
const handleScroll = debounce(() => {
  const header = document.getElementById("header");
  const scrollUp = document.getElementById("scrollUp");
  const headerTop = document.getElementById("headerTop");
  const mediaQuery = window.matchMedia("(min-width: 992px)");

  if (window.scrollY > 20) {
    header?.classList.add("fixed");
    scrollUp?.classList.add("show");

    if (mediaQuery.matches && headerTop) {
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

function AddToCart(button) {
  const productElement = button.closest(".item"); // Trouve l'élément parent pour récupérer les infos du produit
  const product = {
    image: productElement.querySelector("img").src,
    name: productElement.querySelector(".item-title").innerText,
    price: productElement.querySelector(".item-price span").innerText,
  };
  console.log(product); // Maintenant, tu as l'objet product complet

  let modal = document.getElementById("modalAddToCart");

  // Créer un nouveau modal si nécessaire
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
                              <span class="fa fa-shopping-basket"></span> There are <span class="cart_count bigcounter">1</span> Items In Your Cart.
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
    modal.querySelector(".cart_count").textContent = 1; // Met à jour le nombre d'articles
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
    // Change l'icône en spinner
    icon.classList.remove("uil-heart");
    icon.classList.add("uil-spinner-alt", "rotateIn");

    // Simule un chargement avant de restaurer l'icône
    setTimeout(() => {
      icon.classList.remove("uil-spinner-alt", "rotateIn");
      icon.classList.add("uil-heart");
      button.classList.toggle("favorite");
    }, 2000); // 2 secondes
  }
}

let compareProducts = [];

function Compare(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return; // Vérification pour éviter une erreur si le produit n'existe pas

  if (compareProducts.some((p) => p.id === productId)) {
    // Supprimer le produit s'il est déjà présent
    compareProducts = compareProducts.filter((p) => p.id !== productId);
  } else {
    if (compareProducts.length >= 2) {
      compareProducts.shift(); // Supprime le premier élément
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

  // Bouton de suppression
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

  // Nom du produit
  modalHTML += `<tr><th>Product Name</th>`;
  compareProducts.forEach((product) => {
    modalHTML += `<td>${product.name}</td>`;
  });
  modalHTML += `</tr>`;

  // Image et prix
  modalHTML += `<tr><th>Product Image</th>`;
  compareProducts.forEach((product) => {
    modalHTML += `
      <td>
        <img src="${product.image}" alt="${product.name}" />
        <span class="current-price">${formatPrice(product.price)} FCFA</span>
        <a href="${product.href}">View product</a>
      </td>`;
  });
  modalHTML += `</tr>`;

  // Spécifications
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

  // Ajout de la modal au DOM
  let existingModal = document.getElementById("modalCompare");
  if (existingModal) {
    existingModal.outerHTML = modalHTML; // Remplace la modal existante
  } else {
    document.body.insertAdjacentHTML("beforeend", modalHTML); // Ajoute la modal si elle n'existe pas
  }

  // Affichage de la modal
  document.getElementById("modalCompare").classList.add("show");
  document.body.classList.add("modal-open");
}

// Fonction pour retirer un produit de la comparaison
function removeFromCompare(productId) {
  compareProducts = compareProducts.filter((p) => p.id !== productId);
  updateCompareModal();
}

// Fonction pour fermer la modal
function closeCompareModal() {
  let modal = document.getElementById("modalCompare");
  if (modal) {
    modal.classList.remove("show");
    document.body.classList.remove("modal-open");
  }
}
