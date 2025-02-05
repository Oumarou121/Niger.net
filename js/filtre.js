class Filtres {
  constructor() {
    this.categories = [];
  }

  addCategory(category) {
    this.categories.push(category);
  }

  generateFilters() {
    return this.categories;
  }
}

class Category {
  constructor(name) {
    this.name = name;
    this.subCategories = [];
    this.options = [];
  }

  addSubCategory(subCategory) {
    this.subCategories.push(subCategory);
  }

  getSubCategory() {
    return this.subCategories;
  }

  // Ajouter une option à la catégorie
  addOption(option) {
    this.options.push(option);
  }

  // Retourner les options associées à cette catégorie
  getOptions() {
    return this.options;
  }
}

class Option {
  constructor(title, values) {
    this.title = title;
    this.values = values;
  }

  getTitle() {
    return this.title;
  }

  getValues() {
    return this.values;
  }
}

class SubCategory extends Category {}

const informatique = new Category("Informatique");

const ordinateurPortable = new SubCategory("Ordinateur Portable");
const ordinateurBureau = new SubCategory("Ordinateur Bureau");
const Iaccessoirs = new SubCategory("Accessoirs et Peripherique");

informatique.addSubCategory(ordinateurPortable);
informatique.addSubCategory(ordinateurBureau);
informatique.addSubCategory(Iaccessoirs);
ordinateurPortable.addOption(new Option("Access", ["oui", "non"]));
ordinateurPortable.addOption(new Option("Stockage", ["SSD", "HDD"]));
ordinateurPortable.addOption(
  new Option("Résolution", ["1080p", "2k", "4K", "Full HD"])
);
ordinateurPortable.addOption(new Option("Access", ["oui", "non"]));
ordinateurPortable.addOption(new Option("Stockage", ["SSD", "HDD"]));
ordinateurPortable.addOption(
  new Option("Résolution", ["1080p", "2k", "4K", "Full HD"])
);
ordinateurPortable.addOption(new Option("Access", ["oui", "non"]));
ordinateurPortable.addOption(new Option("Stockage", ["SSD", "HDD"]));
ordinateurPortable.addOption(
  new Option("Résolution", ["1080p", "2k", "4K", "Full HD"])
);

ordinateurPortable.addSubCategory(new SubCategory("Pc Portable"));
ordinateurPortable.addSubCategory(new SubCategory("Pc Portable Gamer"));
ordinateurPortable.addSubCategory(new SubCategory("Pc Portable Pro"));

ordinateurBureau.addSubCategory(new SubCategory("Ecran"));
ordinateurBureau.addSubCategory(new SubCategory("Pc Bureau"));
ordinateurBureau.addSubCategory(new SubCategory("Pc Bureau Gamer"));
ordinateurBureau.addSubCategory(new SubCategory("Pc Tout en Un"));

Iaccessoirs.addSubCategory(new SubCategory("Casque"));
Iaccessoirs.addSubCategory(new SubCategory("Sac à Dos"));
Iaccessoirs.addSubCategory(new SubCategory("Souris"));
Iaccessoirs.addSubCategory(new SubCategory("Claviers"));

//Telephonie & Tablette
const telephonieTablette = new Category("Téléphonie & Tablette");
const Taccessoirs = new SubCategory("Accessoirs");

telephonieTablette.addSubCategory(new SubCategory("Telephone Portable"));
telephonieTablette.addSubCategory(new SubCategory("Smartphone"));
telephonieTablette.addSubCategory(new SubCategory("Telephone Fixe"));
telephonieTablette.addSubCategory(new SubCategory("Tablette tactile"));
telephonieTablette.addSubCategory(new SubCategory("Smart Watch"));
telephonieTablette.addSubCategory(Taccessoirs);

Taccessoirs.addSubCategory(new SubCategory("Protection"));
Taccessoirs.addSubCategory(new SubCategory("Chargeurs & cablés"));
Taccessoirs.addSubCategory(new SubCategory("Power Bank"));
Taccessoirs.addSubCategory(new SubCategory("Batterie"));
Taccessoirs.addSubCategory(new SubCategory("Divers"));

//Stockage
const stockage = new Category("Stockage");

stockage.addSubCategory(new SubCategory("Disque Dur internes"));
stockage.addSubCategory(new SubCategory("Disque Dur externes"));
stockage.addSubCategory(new SubCategory("Clé USB"));
stockage.addSubCategory(new SubCategory("Carte mémoire"));

// TV-Son-Console
const tvSonConsole = new Category("TV-Son-Console");
const consoles = new SubCategory("Consoles & Jeux");

tvSonConsole.addSubCategory(new SubCategory("TV"));
tvSonConsole.addSubCategory(new SubCategory("Son"));
tvSonConsole.addSubCategory(new SubCategory("Appareils Photos"));
tvSonConsole.addSubCategory(consoles);
consoles.addSubCategory(new SubCategory("Consoles"));
consoles.addSubCategory(new SubCategory("Manettes de Jeux"));
consoles.addSubCategory(new SubCategory("Disques de Jeux"));

// Sécurite
const securite = new Category("Sécurité");

securite.addSubCategory(new SubCategory("Systèmes & Logiciels Antivirus"));
securite.addSubCategory(new SubCategory("Systèmes de Sécurité"));
securite.addSubCategory(new SubCategory("Caméras"));

// Creation des filtres
const filtres = new Filtres();
filtres.addCategory(informatique);
filtres.addCategory(telephonieTablette);
filtres.addCategory(stockage);
filtres.addCategory(tvSonConsole);
filtres.addCategory(securite);

function generateCategoryList(categories, parentElement, isDesktop = false) {
  categories.forEach((category) => {
    const li = document.createElement("li");
    li.classList.add("category");

    const a = document.createElement("a");
    a.textContent = category.name;
    a.href = `shop.html?category=${encodeURIComponent(category.name)}`;

    const ul = document.createElement("ul");
    ul.classList.add("category-list");
    ul.style.display = isDesktop ? "block" : "none";

    const i = document.createElement("i");
    i.classList.add("fas", "fa-angle-down", "arrowCategory");

    i.addEventListener("click", (event) => {
      event.preventDefault();
      toggleVisibility(ul);
      i.classList.toggle("rot");
    });

    li.appendChild(a);
    !isDesktop ? li.appendChild(i) : null;
    li.appendChild(ul);
    parentElement.appendChild(li);

    generateSubCategoryList(category, ul, false, isDesktop, [category.name]);
  });
}

function generateSubCategoryList(
  category,
  parentElement,
  isNested,
  isDesktop,
  path
) {
  category.getSubCategory().forEach((subCategory) => {
    const li = document.createElement("li");
    const aSub = document.createElement("a");
    aSub.textContent = subCategory.name;

    const newPath = [...path, subCategory.name]; // Ajout de la sous-catégorie au chemin
    aSub.href = `shop.html?category=${encodeURIComponent(newPath.join("/"))}`;

    const ul = document.createElement("ul");
    ul.style.display = isDesktop ? "block" : "none";

    if (subCategory.getSubCategory().length > 0) {
      li.classList.add("sub-category");
    } else {
      li.classList.add("no-sub-category");
    }

    li.appendChild(aSub);
    li.appendChild(ul);
    parentElement.appendChild(li);

    generateSubCategoryList(subCategory, ul, true, isDesktop, newPath);
  });
}

function toggleVisibility(ul) {
  if (ul.style.display === "none" || ul.style.display === "") {
    ul.style.display = "block";

    ul.querySelectorAll("ul").forEach((subUl) => {
      subUl.style.display = "block";
    });
  } else {
    ul.style.display = "none";

    ul.querySelectorAll("ul").forEach((subUl) => {
      subUl.style.display = "none";
    });
  }
}
const selectedFiltersClass = document.querySelector(".selectedFilters");
const selectedFiltersClassDesktop = document.querySelector(
  ".selectedFilters-desktop"
);
const categoryList = document.getElementById("category-list");
const categoryListDesktop = document.getElementById("category-list-desktop");
generateCategoryList(filtres.generateFilters(), categoryList, false);
generateCategoryList(filtres.generateFilters(), categoryListDesktop, true);

document.addEventListener("DOMContentLoaded", function () {
  const breadcrumbContainer = document.querySelector(
    ".shop-feature .custom-container"
  );

  function updateBreadcrumb(categoryPath) {
    breadcrumbContainer.innerHTML = "";

    const paths = ["Home", "Shop", ...categoryPath.split("/")].filter(Boolean);

    paths.forEach((path, index) => {
      const isLast = index === paths.length - 1;
      const a = document.createElement("a");
      a.textContent = path;

      if (!isLast) {
        if (index === 0) {
          a.href = "index.html";
        } else if (index === 1) {
          a.href = "shop.html";
        } else {
          a.href = `shop.html?category=${paths.slice(2, index + 1).join("/")}`;
        }
      } else {
        a.classList.add("text-red");
      }

      breadcrumbContainer.appendChild(a);
      if (!isLast) breadcrumbContainer.innerHTML += " <span>|</span> ";
    });
  }

  function loadCategory() {
    const params = new URLSearchParams(window.location.search);
    const categoryPath = params.get("category") || "";
    updateBreadcrumb(categoryPath);
    const categoryPath1 = getCurrentCategoryPath();
    const currentCategory = findCategory(
      filtres.generateFilters(),
      categoryPath1
    );

    const filtresContent = document.getElementById("filter-container");
    const filtresContentDesktop = document.getElementById(
      "filter-containerDesktop"
    );
    parcoursCategory(currentCategory, filtresContent, false);
    parcoursCategory(currentCategory, filtresContentDesktop, true);
  }

  loadCategory();
});

function getCurrentCategoryPath() {
  const params = new URLSearchParams(window.location.search);
  return params.get("category") ? params.get("category").split("/") : [];
}

function findCategory(categories, path) {
  let currentCategories = categories;
  let foundCategory = null;

  for (let segment of path) {
    foundCategory = currentCategories.find((cat) => cat.name === segment);
    if (!foundCategory) return null;
    currentCategories = foundCategory.getSubCategory();
  }

  return foundCategory;
}

function parcoursCategory(category, container, isDesktop) {
  category.getOptions().forEach((option) => {
    addOptionsToDisplay(option, container, isDesktop);
  });

  category.getSubCategory().forEach((subCategory) => {
    parcoursCategory(subCategory, container, isDesktop);
  });
}

function addOptionsToDisplay(option, container, isDesktop) {
  const optionSection = document.createElement("div");
  optionSection.classList.add("categories");

  const optionTitleDiv = document.createElement("div");
  optionTitleDiv.classList.add("filtre-top");

  const optionTitle = document.createElement("h3");
  optionTitle.textContent = option.getTitle();
  optionTitleDiv.appendChild(optionTitle);

  if (!isDesktop) {
    const optionIcon = document.createElement("i");
    optionIcon.classList.add("uil", "icon-arrow", "uil-angle-down");

    optionTitleDiv.appendChild(optionIcon);

    optionTitleDiv.addEventListener("click", () => {
      const contentDiv = optionSection.querySelector(".filter-content");
      contentDiv.classList.toggle("visible");

      optionIcon.classList.toggle("rotated");
    });
  }

  optionSection.appendChild(optionTitleDiv);

  // Créer le contenu de la liste (processeur-content)
  const optionContentDiv = document.createElement("div");
  optionContentDiv.classList.add("filter-content");

  const optionList = document.createElement("ul");
  option.getValues().forEach((value) => {
    const listItem = document.createElement("li");

    const optionCheckbox = document.createElement("input");
    optionCheckbox.type = "checkbox";
    optionCheckbox.name = option.getTitle();

    const optionLabel = document.createElement("span");
    optionLabel.textContent = ` ${value}`;
    optionCheckbox.addEventListener("change", () => {
      createItemy(optionCheckbox, option.getTitle(), value, isDesktop);
    });
    listItem.appendChild(optionCheckbox);
    listItem.appendChild(optionLabel);
    optionList.appendChild(listItem);
  });

  optionContentDiv.appendChild(optionList);
  optionSection.appendChild(optionContentDiv);

  const hr = document.createElement("hr");
  hr.classList.add("custom-hr");
  optionSection.appendChild(hr);

  container.appendChild(optionSection);
}

function createItemy(optionCheckbox, title, value, isDesktop) {
  if (optionCheckbox.checked) {
    const filterItem = document.createElement("div");
    filterItem.classList.add(isDesktop ? "filtre-item-desktop" : "filtre-item");
    filterItem.textContent = `${title}  - ${value}`;
    const removeBtn = document.createElement("i");
    removeBtn.classList.add("uil", "uil-times");
    removeBtn.addEventListener("click", () => {
      filterItem.remove();
      optionCheckbox.checked = false;
    });
    filterItem.appendChild(removeBtn);
    isDesktop
      ? selectedFiltersClassDesktop.appendChild(filterItem)
      : selectedFiltersClass.appendChild(filterItem);
    optionCheckbox.filterItem = filterItem;
  } else {
    optionCheckbox.filterItem.remove();
  }
}
// ===============================================================================================

function updatePriceFilter(min, max, isDesktop = false) {
  const filterClass = isDesktop
    ? ".filtre-item-desktop.price"
    : ".filtre-item.price";
  const selectedFiltersClass = isDesktop
    ? ".selectedFilters-desktop"
    : ".selectedFilters";

  let priceFilterItem = document.querySelector(filterClass);

  if (!priceFilterItem) {
    priceFilterItem = document.createElement("div");
    priceFilterItem.classList.add(
      isDesktop ? "filtre-item-desktop" : "filtre-item",
      "price"
    );

    const filterContent = document.createElement("span");
    filterContent.classList.add(
      isDesktop ? "filter-content-desktop" : "filter-content1"
    );

    const removeBtn = document.createElement("i");
    removeBtn.classList.add("uil", "uil-times");
    removeBtn.style.cursor = "pointer";
    removeBtn.addEventListener("click", () => {
      const rangeInputs = document.querySelectorAll(
        isDesktop ? ".range-input-desktop input" : ".range-input input"
      );
      const priceInputs = document.querySelectorAll(
        isDesktop ? ".price-input-desktop input" : ".price-input input"
      );
      rangeInputs[0].value = rangeInputs[0].min;
      rangeInputs[1].value = rangeInputs[1].max;
      priceInputs[0].value = rangeInputs[0].min;
      priceInputs[1].value = rangeInputs[1].max;
      updatePriceSlider(isDesktop);
      priceFilterItem.remove();
    });

    priceFilterItem.appendChild(filterContent);
    priceFilterItem.appendChild(removeBtn);

    document.querySelector(selectedFiltersClass).appendChild(priceFilterItem);
  }

  const filterContent = priceFilterItem.querySelector(
    isDesktop ? ".filter-content-desktop" : ".filter-content1"
  );
  filterContent.textContent = `Prix - ${min} - ${max} FCFA`;
}

function updatePriceSlider(isDesktop = false) {
  const rangeInputs = document.querySelectorAll(
    isDesktop ? ".range-input-desktop input" : ".range-input input"
  );
  const priceInputs = document.querySelectorAll(
    isDesktop ? ".price-input-desktop input" : ".price-input input"
  );
  const range = document.querySelector(
    isDesktop ? ".slider-desktop .progress" : ".slider .progress"
  );

  let minVal = parseInt(rangeInputs[0].value);
  let maxVal = parseInt(rangeInputs[1].value);
  priceInputs[0].value = minVal;
  priceInputs[1].value = maxVal;

  range.style.left = (minVal / rangeInputs[0].max) * 100 + "%";
  range.style.right = 100 - (maxVal / rangeInputs[1].max) * 100 + "%";

  updatePriceFilter(minVal, maxVal, isDesktop);
}

function ClearUpdatePriceSlider(isDesktop = false) {
  const rangeInputs = document.querySelectorAll(
    isDesktop ? ".range-input-desktop input" : ".range-input input"
  );
  const priceInputs = document.querySelectorAll(
    isDesktop ? ".price-input-desktop input" : ".price-input input"
  );
  const range = document.querySelector(
    isDesktop ? ".slider-desktop .progress" : ".slider .progress"
  );

  rangeInputs[0].value = rangeInputs[0].min;
  rangeInputs[1].value = rangeInputs[1].max;
  priceInputs[0].value = rangeInputs[0].min;
  priceInputs[1].value = rangeInputs[1].max;
  updatePriceSlider(isDesktop);

  updatePriceFilter(rangeInputs[0].min, rangeInputs[1].max, isDesktop);
}

const priceGap = 5000;

function setupPriceInputsAndSliders(isDesktop = false) {
  const rangeInputs = document.querySelectorAll(
    isDesktop ? ".range-input-desktop input" : ".range-input input"
  );
  const priceInputs = document.querySelectorAll(
    isDesktop ? ".price-input-desktop input" : ".price-input input"
  );

  priceInputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minPrice = parseInt(priceInputs[0].value),
        maxPrice = parseInt(priceInputs[1].value);

      if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInputs[1].max) {
        if (e.target.className === (isDesktop ? "input-min" : "input-min")) {
          rangeInputs[0].value = minPrice;
        } else {
          rangeInputs[1].value = maxPrice;
        }
        updatePriceSlider(isDesktop);
      }
    });
  });

  rangeInputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minVal = parseInt(rangeInputs[0].value),
        maxVal = parseInt(rangeInputs[1].value);

      if (maxVal - minVal < priceGap) {
        if (e.target.className === (isDesktop ? "range-min" : "range-min")) {
          rangeInputs[0].value = maxVal - priceGap;
        } else {
          rangeInputs[1].value = minVal + priceGap;
        }
      }
      updatePriceSlider(isDesktop);
    });
  });
}

setupPriceInputsAndSliders();
setupPriceInputsAndSliders(true);
// ================================================================================================

const filtresContent = document.getElementById("filter-container");
const filtresContentDesktop = document.getElementById(
  "filter-containerDesktop"
);
const clearAllBtn = document.getElementById("clearAllFilters");
const clearAllBtnDesktop = document.getElementById("clearAllDesktop");

clearAllBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const container = document.querySelector(".selectedFilters");
  const rangeInputs = document.querySelectorAll(".range-input input");
  const priceInputs = document.querySelectorAll(".price-input input");
  rangeInputs[0].value = rangeInputs[0].min;
  rangeInputs[1].value = rangeInputs[1].max;
  priceInputs[0].value = rangeInputs[0].min;
  priceInputs[1].value = rangeInputs[1].max;
  updatePriceSlider();
  container.querySelectorAll(".filtre-item").forEach((item) => item.remove());
  filtresContent.querySelectorAll('[type="checkbox"]').forEach((input) => {
    input.checked ? (input.checked = false) : null;
  });
});

clearAllBtnDesktop.addEventListener("click", (e) => {
  e.preventDefault();

  const container = document.querySelector(".selectedFilters-desktop");
  const rangeInputs = document.querySelectorAll(".range-input-desktop input");
  const priceInputs = document.querySelectorAll(".price-input-desktop input");
  rangeInputs[0].value = rangeInputs[0].min;
  rangeInputs[1].value = rangeInputs[1].max;
  priceInputs[0].value = rangeInputs[0].min;
  priceInputs[1].value = rangeInputs[1].max;
  updatePriceSlider(true);
  container
    .querySelectorAll(".filtre-item-desktop")
    .forEach((item) => item.remove());
  console.log(filtresContentDesktop);
  filtresContentDesktop
    .querySelectorAll('[type="checkbox"]')
    .forEach((input) => {
      input.checked ? (input.checked = false) : null;
    });
});
