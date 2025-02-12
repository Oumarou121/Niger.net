const params = new URLSearchParams(window.location.search);
const productId = params.get("id") || "";
const product = products[productId];

function updateQuantity(change) {
  const input = document.querySelector(".quantity input");
  let value = parseInt(input.value) + change;
  value = Math.max(1, Math.min(product.qty, value));
  input.value = value;
}

document.addEventListener("DOMContentLoaded", function () {
  const productPhoto = document.getElementById("ProductPhoto");
  const scrollContainer = document.querySelector(".carousel-container");
  const scrollLeft = document.getElementById("scroll-left");
  const scrollRight = document.getElementById("scroll-right");
  const thumbnailList = document.getElementById("thumbnail-list");
  document.getElementById(
    "qty-left"
  ).innerText = `${product.qty} left in stock`;
  document.querySelector(".stock_progress_bar").style.width =
    (product.qty / (product.sales + product.qty)) * 100 + "%";
  document.querySelector(".product-ref").innerText = product.reference;
  document.getElementById("productPrice").innerText = `${formatPrice(
    product.price
  )} FCFA`;
  document.getElementById("previewPrice").innerText =
    product.priceReduction === 0
      ? null
      : `-${formatPrice(product.priceReduction)} FCFA`;

  function hiddenArrow() {
    scrollLeft.style.display = "none";
    scrollRight.style.display = "none";
  }

  if (window.innerWidth <= 576) {
    product.images.length <= 1 ? hiddenArrow() : null;
  } else if (window.innerWidth <= 992) {
    product.images.length <= 2 ? hiddenArrow() : null;
  } else {
    product.images.length <= 3 ? hiddenArrow() : null;
  }

  document.getElementById("productName").innerText = product.name;
  document.getElementById("productName1").innerText = product.name;
  productPhoto.src = product.images[0];

  product.images.forEach((image, index) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = image;
    img.classList.add("thumbnail");
    index === 0 ? img.classList.add("active") : null;
    li.appendChild(img);
    thumbnailList.appendChild(li);

    img.addEventListener("click", changeImage);
  });

  const thumbnails = document.querySelectorAll(".thumbnail");
  const thumbnailWidth = thumbnails[0].offsetWidth + 10;

  function changeImage(event) {
    const newSrc = event.target.src;

    productPhoto.style.opacity = "0";
    setTimeout(() => {
      productPhoto.src = newSrc;
      productPhoto.setAttribute("data-zoom-image", newSrc);
      productPhoto.style.opacity = "1";
    }, 300);

    thumbnails.forEach((thumb) => thumb.classList.remove("active"));
    event.target.classList.add("active");
  }

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", changeImage);
  });

  scrollLeft.addEventListener("click", function () {
    scrollContainer.scrollBy({ left: -thumbnailWidth, behavior: "smooth" });
  });

  scrollRight.addEventListener("click", function () {
    scrollContainer.scrollBy({ left: thumbnailWidth, behavior: "smooth" });
  });

  const navLinks = document.querySelectorAll(".bar-nav li");
  const tabContents = document.querySelectorAll(".tab-content");

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", async function () {
      if (!this.classList.contains("active")) {
        // Retirer la classe "active" des autres liens
        navLinks.forEach((nav) => nav.classList.remove("active"));

        // Réduction progressive de l'opacité
        tabContents.forEach((content) => (content.style.opacity = 0));
        await delay(250); // Attendre la transition avant de cacher

        // Cacher tous les contenus après la transition
        tabContents.forEach((content) => (content.style.display = "none"));

        // Activer l'onglet cliqué
        this.classList.add("active");

        // Afficher le bon contenu
        const contentId = this.getAttribute("data-tab");
        const targetContent = document.getElementById(contentId);

        if (targetContent) {
          targetContent.style.display = "block";
          await delay(50); // Petit délai avant d'augmenter l'opacité
          targetContent.style.opacity = 1;
        }
      }
    });
  });

  const specsTable = document.getElementById("specs-table");
  specsTable.innerHTML = "";
  for (const [key, value] of Object.entries(product.specs || {})) {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${key}</td><td>${value}</td>`;
    specsTable.appendChild(row);
  }

  const reviewsSection = document.getElementById("reviews-section");
  const stars = document.querySelectorAll(".star");
  const reviewText = document.getElementById("review-text");
  const submitReview = document.getElementById("submit-review");

  let selectedRating = 0;

  // ⭐ Gestion des étoiles
  stars.forEach((star) => {
    star.addEventListener("click", function () {
      selectedRating = parseInt(this.getAttribute("data-value"));
      stars.forEach((s, index) => {
        s.classList.toggle("active", index < selectedRating);
      });
    });
  });

  // 📩 Envoi d'un avis
  submitReview.addEventListener("click", function () {
    const text = reviewText.value.trim();
    if (selectedRating === 0 || text === "") {
      alert("Veuillez donner une note et un commentaire.");
      return;
    }

    // Création d'un avis
    const review = {
      id: Date.now(),
      rating: selectedRating,
      text: text,
      date: new Date().toLocaleDateString(),
    };

    saveReview(review);
    displayReviews();
    reviewText.value = "";
    selectedRating = 0;
    stars.forEach((s) => s.classList.remove("active"));
  });

  // 💾 Stockage des avis
  function saveReview(review) {
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.unshift(review);
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }

  // 📜 Affichage des avis
  function displayReviews() {
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviewsSection.innerHTML = reviews
      .map(
        (review) => `
      <div class="review">
        <div class="review-header">
          <span class="stars-display">${"★".repeat(review.rating)}${"☆".repeat(
          5 - review.rating
        )}</span>
          <span class="date">${review.date}</span>
        </div>
        <p>${review.text}</p>
      </div>
    `
      )
      .join("");
  }

  // Charger les avis au démarrage
  displayReviews();
});
