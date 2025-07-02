const menu = document.querySelector(".menu");
const fullMenu = document.querySelector(".full-menu");


menu.addEventListener("click", function() {
  fullMenu.classList.remove("hidden");
  menu.classList.add("hidden");
  
  const xShape = document.querySelector(".x-shape");
  
  xShape.addEventListener("click", function() {
    fullMenu.classList.add("hidden");
    menu.classList.remove("hidden");
  })
})
