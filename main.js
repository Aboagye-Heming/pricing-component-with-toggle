let toggle = document.querySelector("#toggle");
let monthly = document.querySelectorAll(".price-monthly");
let yearly = document.querySelector(".price-annually");

toggle.addEventListener(click, function () {
  if (toggle.checked) {
    yearly.forEach((price) => (price.style.display = "none"));
    monthly.forEach((price) => (price.style.display = "flex"));
  } else {
    yearly.forEach((price) => (price.style.display = "flex"));
    monthly.forEach((price) => (price.style.display = "none"));
  }
});
