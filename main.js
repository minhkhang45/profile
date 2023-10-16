let burgnav = document.querySelector(".burg-nav")
let burger = document.querySelector(".burger")

burger.addEventListener("click", myFunction);

function myFunction() {
    if (burgnav.style.transform == "translateX(0%)") {
        burgnav.style.transform = "translateX(100%)"
      } else {
        burgnav.style.transform = "translateX(0%)"
      }
}