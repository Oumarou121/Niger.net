document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id") || "";
  const product = products[productId];

  document.getElementById("productName").innerText = product.name;
  document.getElementById("ProductPhoto").src = product.images[0];

  const thumbnails = document.querySelectorAll(".thumbnail");
  const productPhoto = document.getElementById("ProductPhoto");
  const scrollContainer = document.querySelector(".carousel-container");
  const scrollLeft = document.getElementById("scroll-left");
  const scrollRight = document.getElementById("scroll-right");
  const thumbnailList = document.getElementById("thumbnail-list");

  // Récupère la largeur d'une miniature pour un défilement précis
  const thumbnailWidth = thumbnails[0].offsetWidth + 10; // 10px de marge (si applicable)

  // Fonction pour changer l'image principale avec un effet de transition
  function changeImage(event) {
    const newSrc = event.target.src;

    // Ajoute l'effet de transition
    productPhoto.style.opacity = "0";
    setTimeout(() => {
      productPhoto.src = newSrc;
      productPhoto.setAttribute("data-zoom-image", newSrc); // Pour le zoom si utilisé
      productPhoto.style.opacity = "1";
    }, 300);

    // Met à jour la classe active sur les miniatures
    thumbnails.forEach((thumb) => thumb.classList.remove("active"));
    event.target.classList.add("active");
  }

  // Ajoute l'écouteur d'événements aux miniatures
  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", changeImage);
  });

  // Défilement des images avec les boutons
  scrollLeft.addEventListener("click", function () {
    scrollContainer.scrollBy({ left: -thumbnailWidth, behavior: "smooth" });
  });

  scrollRight.addEventListener("click", function () {
    scrollContainer.scrollBy({ left: thumbnailWidth, behavior: "smooth" });
  });
  // document.getElementById("productName1").innerText = product.name;
  // document.getElementById("productPrice").innerText = `${formatPrice(
  //   product.price
  // )} FCFA`;
  //   // Sélectionner toutes les vignettes
  //   const thumbnails = document.querySelectorAll(".thumb-container img");

  //   // Sélectionner l'image principale
  //   const mainImage = document.getElementById("main-image");

  //   // Vérifier que l'image principale et les vignettes existent
  //   if (mainImage && thumbnails.length > 0) {
  //     // Ajouter un écouteur d'événement pour chaque vignette
  //     thumbnails.forEach((thumb) => {
  //       thumb.addEventListener("click", function () {
  //         // Récupérer la source de la vignette cliquée
  //         const newSrc = this.getAttribute("data-large");

  //         // Vérifier si l'image principale est déjà la même
  //         if (mainImage.getAttribute("src") === newSrc) {
  //           return; // Si c'est la même, ne rien faire
  //         }

  //         // Transition de fondu en sortie (fade-out)
  //         mainImage.style.transition = "opacity 0.5s";
  //         mainImage.style.opacity = 0;

  //         // Changer l'image après la transition de fondu en sortie
  //         setTimeout(() => {
  //           mainImage.setAttribute("src", newSrc);

  //           // Transition de fondu en entrée (fade-in)
  //           mainImage.style.opacity = 1;
  //         }, 500); // Délai de 500ms pour laisser le temps au fade-out
  //       });
  //     });
  //   } else {
  //     console.warn("L'image principale ou les vignettes sont manquantes.");
  //   }

  //   // Sélectionner les éléments pour le défilement
  //   const scrollContainer = document.getElementById("webizoom");
  //   const scrollLeft = document.getElementById("scroll-left");
  //   const scrollRight = document.getElementById("scroll-right");

  //   // Définit la largeur de défilement à chaque clic (vous pouvez ajuster la valeur)
  //   const scrollAmount = 150;

  //   // Ajouter un événement au clic pour la flèche gauche
  //   scrollLeft.addEventListener("click", () => {
  //     scrollContainer.scrollBy({
  //       left: -scrollAmount, // Défiler vers la gauche
  //       behavior: "smooth", // Défilement fluide
  //     });
  //   });

  //   // Ajouter un événement au clic pour la flèche droite
  //   scrollRight.addEventListener("click", () => {
  //     scrollContainer.scrollBy({
  //       left: scrollAmount, // Défiler vers la droite
  //       behavior: "smooth", // Défilement fluide
  //     });
  //   });

  //   async function loadProductDetails() {

  //     try {

  //       // Mettre à jour l'image principale
  //       const mainImage = document.getElementById("main-image");
  //       mainImage.src = product.images[0];

  //       // Remplir les vignettes d'images
  //       const thumbnailList = document.getElementById("thumbnail-list");
  //       thumbnailList.innerHTML = "";

  //       product.images.forEach((img, index) => {
  //         const listItem = document.createElement("li");
  //         listItem.classList.add("thumb-container");
  //         listItem.innerHTML = `<img src="${img}" alt="Vignette ${
  //           index + 1
  //         }" data-large="${img}">`;
  //         thumbnailList.appendChild(listItem);
  //       });

  //       // Ajout d'écouteurs d'événements aux vignettes pour changer l'image principale
  //       const thumbnails = thumbnailList.querySelectorAll(".thumb-container img");

  //       thumbnails.forEach((thumb) => {
  //         thumb.addEventListener("click", function () {
  //           const newSrc = this.getAttribute("data-large");

  //           // Transition de fondu en sortie
  //           mainImage.style.transition = "opacity 0.5s";
  //           mainImage.style.opacity = 0;

  //           // Changer l'image après la transition de fondu en sortie
  //           setTimeout(() => {
  //             mainImage.setAttribute("src", newSrc);
  //             // Transition de fondu en entrée
  //             mainImage.style.opacity = 1;
  //           }, 500); // Délai de 500ms pour laisser le temps au fade-out
  //         });
  //       });

  //       // Remplir les spécifications
  //       const specsTable = document.getElementById("specs-table");
  //       specsTable.innerHTML = "";
  //       for (const [key, value] of Object.entries(product.specs || {})) {
  //         const row = document.createElement("tr");
  //         row.innerHTML = `<td>${key}</td><td>${value}</td>`;
  //         specsTable.appendChild(row);
  //       }

  //       // Exemple d'utilisation de la section des avis
  //       const reviewsSection = document.getElementById("reviews-section");
  //       reviewsSection.innerHTML = ""; // Réinitialise le contenu précédent

  //       // Vérifier si product.review est un objet
  //       if (
  //         typeof product.review === "object" &&
  //         !Array.isArray(product.review)
  //       ) {
  //         // Convertir l'objet en tableau
  //         const reviewsArray = Object.values(product.review);

  //         reviewsArray.forEach((item) => {
  //           const reviewDiv = document.createElement("div");
  //           reviewDiv.classList.add("review");

  //           // Si timestamp est un code temporel Firebase, convertir en objet Date
  //           const timestamp = item.timestamp; // Assumer que c'est un Firebase Timestamp
  //           const date = timestamp.toDate(); // Convertir en objet Date

  //           // Formater la date en français
  //           const formattedDate = date.toLocaleString("fr-FR", {
  //             timeZone: "UTC",
  //             hour12: false,
  //           });

  //           // Créer une chaîne d'étoiles en fonction du rating
  //           const starRating = "★".repeat(item.rating); // Génère autant d'étoiles que la note
  //           const emptyStars = "☆".repeat(5 - item.rating); // Ajoute des étoiles vides pour compléter jusqu'à 5

  //           // Créer le contenu de l'avis
  //           reviewDiv.innerHTML = `
  //             <strong>Utilisateur : ${item.userName}</strong> <br>
  //             <span>Évaluation: ${starRating}${emptyStars}</span> <br>
  //             <p>${item.comment}</p>
  //             <small>${formattedDate}</small>
  //         `;

  //           // Ajouter l'avis à la section des avis
  //           reviewsSection.appendChild(reviewDiv);
  //         });
  //       } else {
  //         console.error("Les avis ne sont pas au format attendu.");
  //       }
  //     } catch (error) {
  //       console.error("Erreur lors du chargement du produit :", error);
  //     } finally {
  //       // Masque le spinner après la requête
  //       //document.getElementById('loading-spinner').style.display = 'none';
  //     }
  //   }

  //   loadProductDetails();

  // const mainImage = document.getElementById("main-image");
  // const thumbnails = document.querySelectorAll(".thumbnail");
  // const scrollLeft = document.getElementById("scroll-left");
  // const scrollRight = document.getElementById("scroll-right");
  // const imageList = document.getElementById("image-list");

  // let scrollIndex = 0;
  // const maxScroll = thumbnails.length - 3;
  // const imageWidth = 90;

  // // Gérer le changement d'image avec une transition
  // // Ajouter un écouteur d'événement pour chaque vignette
  // thumbnails.forEach((thumb) => {
  //   thumb.addEventListener("click", function () {
  //     const newSrc = this.getAttribute("data-large");

  //     // Vérifier si l'image principale est déjà la même
  //     if (mainImage.getAttribute("src") === newSrc) {
  //       return;
  //     }

  //     // Désactiver temporairement les interactions
  //     mainImage.style.pointerEvents = "none";

  //     // Déclencher le fade-out
  //     mainImage.style.opacity = 0;

  //     setTimeout(() => {
  //       // Changer l'image
  //       mainImage.src = thumb.src;

  //       // Réactiver le fade-in
  //       mainImage.style.opacity = 1;

  //       // Réactiver les interactions après la transition
  //       setTimeout(() => {
  //         mainImage.style.pointerEvents = "auto";
  //       }, 500);
  //       // Gestion des miniatures actives
  //       thumbnails.forEach((thumbnail) => {
  //         thumbnail.classList.remove("active");
  //       });
  //       thumb.classList.add("active");
  //     }, 500);
  //   });
  // });

  // // Défilement à gauche
  // scrollLeft.addEventListener("click", () => {
  //   if (scrollIndex > 0) {
  //     scrollIndex--;
  //     imageList.style.transform = `translateX(-${scrollIndex * imageWidth}px)`;
  //   }
  // });

  // // Défilement à droite
  // scrollRight.addEventListener("click", () => {
  //   if (scrollIndex < maxScroll) {
  //     scrollIndex++;
  //     imageList.style.transform = `translateX(-${scrollIndex * imageWidth}px)`;
  //   }
  // });
});
