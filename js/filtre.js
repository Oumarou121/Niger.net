const filtresContent = document.getElementById("filter-container");
const filtresContentDesktop = document.getElementById(
  "filter-containerDesktop"
);
const clearAllBtn = document.getElementById("clearAllFilters");
const clearAllBtnDesktop = document.getElementById("clearAllDesktop");
const selectedFilters = document.querySelector(".selectedFilters");
const selectedFiltersDesktop = document.querySelector(
  ".selectedFilters-desktop"
);

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
informatique.addOption(new Option("Résolution", ["1080p", "2k", "4K"]));
ordinateurPortable.addOption(new Option("Résolution", ["Full HD"]));

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

    generateSubCategoryList(category, ul, isDesktop, [category.name]);
  });
}

function generateSubCategoryList(category, parentElement, isDesktop, path) {
  category.getSubCategory().forEach((subCategory) => {
    const li = document.createElement("li");
    const aSub = document.createElement("a");
    aSub.textContent = subCategory.name;

    const newPath = [...path, subCategory.name];
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

    generateSubCategoryList(subCategory, ul, isDesktop, newPath);
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
    if (breadcrumbContainer) {
      breadcrumbContainer.innerHTML = "";

      const paths = ["Home", "Shop", ...categoryPath.split("/")].filter(
        Boolean
      );

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
            a.href = `shop.html?category=${paths
              .slice(2, index + 1)
              .join("/")}`;
          }
        } else {
          a.classList.add("text-red");
        }

        breadcrumbContainer.appendChild(a);
        if (!isLast) breadcrumbContainer.innerHTML += " <span>|</span> ";
      });
    }
  }

  function loadCategory() {
    const params = new URLSearchParams(window.location.search);
    const categoryPath = params.get("category") || "";
    updateBreadcrumb(categoryPath);
    // console.log(categoryPath);
    applyFilter(null, categoryPath, true);
    const categoryPath1 = getCurrentCategoryPath();
    const currentCategory = findCategory(
      filtres.generateFilters(),
      categoryPath1
    );

    parcoursCategory(currentCategory);
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

function parcoursCategory(category) {
  if (category) {
    category.getOptions().forEach((option) => {
      addOptionsToDisplay(option);
    });

    category.getSubCategory().forEach((subCategory) => {
      parcoursCategory(subCategory);
    });
  }
}

function addOptionsToDisplay(option) {
  let isOld = false;
  filtresContent.querySelectorAll(".categories").forEach((category, index) => {
    if (
      category.querySelector(".filtre-top h3").textContent === option.getTitle()
    ) {
      option.getValues().forEach((value) => {
        const listItem = document.createElement("li");
        const listItemDesktop = document.createElement("li");

        const optionCheckbox = document.createElement("input");
        optionCheckbox.type = "checkbox";
        optionCheckbox.name = option.getTitle();
        const optionCheckboxDesktop = document.createElement("input");
        optionCheckboxDesktop.type = "checkbox";
        optionCheckboxDesktop.name = option.getTitle();

        const optionLabel = document.createElement("span");
        optionLabel.textContent = ` ${value}`;
        const optionLabelDesktop = document.createElement("span");
        optionLabelDesktop.textContent = ` ${value}`;
        optionCheckbox.addEventListener("change", () => {
          optionCheckboxDesktop.checked = optionCheckbox.checked;
          createItemy(
            optionCheckbox,
            optionCheckboxDesktop,
            option.getTitle(),
            value
          );
        });

        optionCheckboxDesktop.addEventListener("change", () => {
          optionCheckbox.checked = optionCheckboxDesktop.checked;
          createItemy(
            optionCheckbox,
            optionCheckboxDesktop,
            option.getTitle(),
            value
          );
        });

        listItem.appendChild(optionCheckbox);
        listItem.appendChild(optionLabel);
        listItemDesktop.appendChild(optionCheckboxDesktop);
        listItemDesktop.appendChild(optionLabelDesktop);
        category.querySelector(".filter-content ul").appendChild(listItem);
        filtresContentDesktop
          .querySelectorAll(".categories")
          [index].querySelector(".filter-content ul")
          .appendChild(listItemDesktop);
        isOld = true;
      });
    }
  });

  if (!isOld) {
    const optionSection = document.createElement("div");
    optionSection.classList.add("categories");
    const optionSectionDesktop = document.createElement("div");
    optionSectionDesktop.classList.add("categories");

    const optionTitleDiv = document.createElement("div");
    optionTitleDiv.classList.add("filtre-top");
    const optionTitleDivDesktop = document.createElement("div");
    optionTitleDivDesktop.classList.add("filtre-top");

    const optionTitle = document.createElement("h3");
    optionTitle.textContent = option.getTitle();
    optionTitleDiv.appendChild(optionTitle);
    const optionTitleDesktop = document.createElement("h3");
    optionTitleDesktop.textContent = option.getTitle();
    optionTitleDivDesktop.appendChild(optionTitleDesktop);

    const optionIcon = document.createElement("i");
    optionIcon.classList.add("uil", "icon-arrow", "uil-angle-down");
    optionTitleDiv.appendChild(optionIcon);
    optionTitleDiv.addEventListener("click", () => {
      const contentDiv = optionSection.querySelector(".filter-content");
      contentDiv.classList.toggle("visible");
      optionIcon.classList.toggle("rotated");
    });
    optionSection.appendChild(optionTitleDiv);
    optionSectionDesktop.appendChild(optionTitleDivDesktop);

    const optionContentDiv = document.createElement("div");
    optionContentDiv.classList.add("filter-content");
    const optionContentDivDesktop = document.createElement("div");
    optionContentDivDesktop.classList.add("filter-content");

    const optionList = document.createElement("ul");
    const optionListDesktop = document.createElement("ul");

    option.getValues().forEach((value) => {
      const listItem = document.createElement("li");
      const listItemDesktop = document.createElement("li");

      const optionCheckbox = document.createElement("input");
      optionCheckbox.type = "checkbox";
      optionCheckbox.name = option.getTitle();
      const optionCheckboxDesktop = document.createElement("input");
      optionCheckboxDesktop.type = "checkbox";
      optionCheckboxDesktop.name = option.getTitle();

      const optionLabel = document.createElement("span");
      optionLabel.textContent = ` ${value}`;
      const optionLabelDesktop = document.createElement("span");
      optionLabelDesktop.textContent = ` ${value}`;
      optionCheckbox.addEventListener("change", () => {
        optionCheckboxDesktop.checked = optionCheckbox.checked;
        createItemy(
          optionCheckbox,
          optionCheckboxDesktop,
          option.getTitle(),
          value
        );
      });
      optionCheckboxDesktop.addEventListener("change", () => {
        optionCheckbox.checked = optionCheckboxDesktop.checked;
        createItemy(
          optionCheckbox,
          optionCheckboxDesktop,
          option.getTitle(),
          value
        );
      });

      listItem.appendChild(optionCheckbox);
      listItem.appendChild(optionLabel);
      optionList.appendChild(listItem);
      listItemDesktop.appendChild(optionCheckboxDesktop);
      listItemDesktop.appendChild(optionLabelDesktop);
      optionListDesktop.appendChild(listItemDesktop);
    });

    optionContentDiv.appendChild(optionList);
    optionSection.appendChild(optionContentDiv);
    optionContentDivDesktop.appendChild(optionListDesktop);
    optionSectionDesktop.appendChild(optionContentDivDesktop);

    const hr = document.createElement("hr");
    hr.classList.add("custom-hr");
    optionSection.appendChild(hr);
    const hrDesktop = document.createElement("hr");
    hrDesktop.classList.add("custom-hr");
    optionSectionDesktop.appendChild(hrDesktop);

    filtresContent.appendChild(optionSection);
    filtresContentDesktop.appendChild(optionSectionDesktop);
  }
}

function createItemy(optionCheckbox, optionCheckboxDesktop, title, value) {
  if (optionCheckbox.checked && optionCheckboxDesktop.checked) {
    const filterItem = document.createElement("div");
    const filterItemDesktop = document.createElement("div");

    filterItem.classList.add("filtre-item");
    filterItem.textContent = `${title}  - ${value}`;
    filterItemDesktop.classList.add("filtre-item-desktop");
    filterItemDesktop.textContent = `${title}  - ${value}`;

    const removeBtn = document.createElement("i");
    removeBtn.classList.add("uil", "uil-times");
    const removeBtnDesktop = document.createElement("i");
    removeBtnDesktop.classList.add("uil", "uil-times");

    removeBtn.addEventListener("click", () => {
      filterItem.remove();
      filterItemDesktop.remove();
      optionCheckbox.checked = false;
      optionCheckboxDesktop.checked = false;
      applyFilterOther();
    });
    removeBtnDesktop.addEventListener("click", () => {
      filterItem.remove();
      filterItemDesktop.remove();
      optionCheckbox.checked = false;
      optionCheckboxDesktop.checked = false;
      applyFilterOther();
    });

    filterItem.appendChild(removeBtn);
    filterItemDesktop.appendChild(removeBtnDesktop);

    selectedFiltersClass.appendChild(filterItem);
    selectedFiltersClassDesktop.appendChild(filterItemDesktop);

    optionCheckbox.filterItem = filterItem;
    optionCheckboxDesktop.filterItem = filterItemDesktop;
  } else {
    optionCheckbox.filterItem.remove();
    optionCheckboxDesktop.filterItem.remove();
  }

  applyFilterOther();
}

// ===============================================================================================
const priceGap = 5000;

function syncPriceFilters(min, max) {
  [false, true].forEach((isDesktop) => {
    updatePriceFilter(min, max, isDesktop);
    updateInputsAndSliders(min, max, isDesktop);
    if (min === 2500 && max === 500000) {
      resetFilters();
    }
  });
}

function updateInputsAndSliders(min, max, isDesktop) {
  const rangeInputs = document.querySelectorAll(
    isDesktop ? ".range-input-desktop input" : ".range-input input"
  );
  const priceInputs = document.querySelectorAll(
    isDesktop ? ".price-input-desktop input" : ".price-input input"
  );
  const range = document.querySelector(
    isDesktop ? ".slider-desktop .progress" : ".slider .progress"
  );

  rangeInputs[0].value = min;
  rangeInputs[1].value = max;
  priceInputs[0].value = min;
  priceInputs[1].value = max;

  range.style.left = (min / rangeInputs[0].max) * 100 + "%";
  range.style.right = 100 - (max / rangeInputs[1].max) * 100 + "%";
}

function setupPriceInputsAndSliders(isDesktop = false) {
  const rangeInputs = document.querySelectorAll(
    isDesktop ? ".range-input-desktop input" : ".range-input input"
  );
  const priceInputs = document.querySelectorAll(
    isDesktop ? ".price-input-desktop input" : ".price-input input"
  );

  priceInputs.forEach((input, index) => {
    input.addEventListener("input", () => {
      let minPrice = parseInt(priceInputs[0].value),
        maxPrice = parseInt(priceInputs[1].value);

      if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInputs[1].max) {
        rangeInputs[0].value = minPrice;
        rangeInputs[1].value = maxPrice;
        syncPriceFilters(minPrice, maxPrice);
      }
    });
  });

  rangeInputs.forEach((input, index) => {
    input.addEventListener("input", () => {
      let minVal = parseInt(rangeInputs[0].value),
        maxVal = parseInt(rangeInputs[1].value);

      if (maxVal - minVal < priceGap) {
        rangeInputs[index].value =
          index === 0 ? maxVal - priceGap : minVal + priceGap;
      }
      syncPriceFilters(rangeInputs[0].value, rangeInputs[1].value);
    });
  });
}

function updatePriceFilter(min, max, isDesktop) {
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
      resetFilters();
    });

    priceFilterItem.appendChild(filterContent);
    priceFilterItem.appendChild(removeBtn);

    isDesktop
      ? selectedFiltersDesktop.appendChild(priceFilterItem)
      : selectedFilters.appendChild(priceFilterItem);
  }

  const filterContent = priceFilterItem.querySelector(
    isDesktop ? ".filter-content-desktop" : ".filter-content1"
  );
  filterContent.textContent = `Prix - ${min} - ${max} FCFA`;
  applyFilterOther();
}

function resetFilters() {
  [false, true].forEach((isDesktop) => {
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
    updateInputsAndSliders(rangeInputs[0].min, rangeInputs[1].max, isDesktop);

    const filterItem = document.querySelector(
      isDesktop ? ".filtre-item-desktop.price" : ".filtre-item.price"
    );
    if (filterItem) filterItem.remove();
  });
}

// Initialisation pour les deux versions
setupPriceInputsAndSliders(false);
setupPriceInputsAndSliders(true);

// ================================================================================================

function clearAllFilters() {
  resetFilters();
  selectedFilters
    .querySelectorAll(".filtre-item")
    .forEach((item) => item.remove());
  filtresContent.querySelectorAll('[type="checkbox"]').forEach((input) => {
    input.checked ? (input.checked = false) : null;
  });

  selectedFiltersDesktop
    .querySelectorAll(".filtre-item-desktop")
    .forEach((item) => item.remove());
  console.log(filtresContentDesktop);
  filtresContentDesktop
    .querySelectorAll('[type="checkbox"]')
    .forEach((input) => {
      input.checked ? (input.checked = false) : null;
    });
  applyFilterOther();
}

function applyFilterOther() {
  const container = document.querySelector(".selectedFilters-desktop");
  let filters = {};

  container.querySelectorAll(".filtre-item-desktop").forEach((filtre) => {
    let [key, ...values] = filtre.textContent.split(" -").map((v) => v.trim());
    // filters[key] = values.length > 1 ? values : values[0];
    if (!filters[key]) {
      filters[key] = [];
    }
    filters[key].push(...values);
  });

  console.log("Filtres appliqués :", filters);
  applyFilter(filters);
}
