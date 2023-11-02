let burgnav = document.querySelector(".burg-nav")
let burger = document.querySelector(".burger")
let one = document.querySelector(".ones")
let two = document.querySelector(".twos")
let three = document.querySelector(".threes")

burger.addEventListener("click", myFunction);

function myFunction() {
  if (burgnav.style.transform == "translateX(0%)") {
    burgnav.style.transform = "translateX(100%)"
  } else {
    burgnav.style.transform = "translateX(0%)"
  }
  one.classList.toggle("click")
  two.classList.toggle("click")
  three.classList.toggle("click")
}