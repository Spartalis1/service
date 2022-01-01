document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".navbar-burger");
  burger.addEventListener("click", () => {
    const target = burger.dataset.target;
    const $target = document.getElementById(target);
    burger.classList.toggle("is-active");
    $target.classList.toggle("is-active");
  });
});
//CARD Animation
const cards3 = document.querySelectorAll(".c3");
const c1 = document
  .querySelector(".c1")
  .childNodes[1].querySelectorAll(".toggle");
console.log(c1);
cards3.forEach((card) =>
  card.addEventListener("mouseenter", (e) => {
    let tog = e.target.childNodes[1].querySelectorAll(".toggle");
    tog.forEach((el) => el.classList.remove("is-hidden"));
    c1.forEach((el) => el.classList.add("is-hidden"));
  })
);
cards3.forEach((card) =>
  card.addEventListener("mouseleave", (e) => {
    let tog = e.target.childNodes[1].querySelectorAll(".toggle");
    tog.forEach((el) => el.classList.add("is-hidden"));
    c1.forEach((el) => el.classList.remove("is-hidden"));
  })
);
