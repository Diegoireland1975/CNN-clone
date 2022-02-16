const switcher = document.getElementById("international-switcher");
const switcherBlock = document.querySelector(".international-block");

const searchBar = document.getElementById("search-switcher");
const searchField = document.querySelector(".page-search-field");
const fieldLabel = document.querySelector(".search-field-label");

const extendedSwitcher = document.getElementById("expanded-switcher");
const headerBlock = document.querySelector(".header-expanded-menu-block");

// International block Panel
switcher.addEventListener("click", () => {
  switcherBlock.classList.toggle("show");
});

// Search switcher
searchBar.addEventListener("click", () => {
  searchField.classList.toggle("show");
  fieldLabel.classList.toggle("show");
});

// Header expanded menu block
extendedSwitcher.addEventListener("click", () => {
  headerBlock.classList.toggle("show");
});
