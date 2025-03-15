let menubtn = document.getElementById("menu");

let hamburgerIcon = document.getElementById("hamburgerid");
let XIcon = document.querySelector(".mobile-actions .menu-toggle .btnX");
menubtn.addEventListener("click", function () {
  let nav = document.getElementById("mostrar");
  if (nav.classList.contains("mostrar")) {
    nav.classList.remove("mostrar");
    XIcon.style.display = "none";
    hamburgerIcon.classList.remove("ocultar");
  } else {
    nav.classList.add("mostrar");
    XIcon.style.display = "block";
    hamburgerIcon.classList.add("ocultar");
  }
});
