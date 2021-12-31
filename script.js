document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".navbar-burger");
  burger.addEventListener("click", () => {
    const target = burger.dataset.target;
    const $target = document.getElementById(target);
    burger.classList.toggle("is-active");
    $target.classList.toggle("is-active");
  });
});
const startButtons = document.querySelectorAll(".start");
