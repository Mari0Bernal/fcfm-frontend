function seeDetails(clicked) {
  const allDivs = document.querySelectorAll(".mainDiv");
  const hoverCard = clicked.querySelector(".hoverCardH");
  const Xbtn = clicked.querySelector(".exit");
  const main = document.querySelector(".main");

  // Hide all divs
  allDivs.forEach((div) => {
    div.classList.add("hidden");
    div.classList.remove("active");
  });

  // Show only the clicked div
  clicked.classList.remove("hidden");
  // clicked.classList.add("active");
  clicked.classList.toggle("active");
  hoverCard.style.display = "flex";
  Xbtn.style.display = "block";
  // Remove display of section main
  main.style.display = "block";
}

function resetDivs() {
  const allDivs = document.querySelectorAll(".mainDiv");
  const main = document.querySelector(".main");
  // Show all divs
  allDivs.forEach((div) => {
    div.classList.remove("hidden");
    div.classList.remove("active");

    // Hide hoverCard and Xbtn
    const hoverCard = div.querySelector(".hoverCardH");
    const Xbtn = div.querySelector(".exit");
    if (hoverCard) hoverCard.style.display = "none";
    if (Xbtn) Xbtn.style.display = "none";
  });
  main.style.display = "";
}

// Configurar los event listeners iniciales
document.addEventListener("DOMContentLoaded", function () {
  //const allDivs = document.querySelectorAll(".mainDiv");
  const exitBtns = document.querySelectorAll(".exit");

  // Event listeners para los divs principales
  //   allDivs.forEach((div) => {
  //     div.addEventListener("click", function (e) {
  //       // Solo activar si se hizo clic directamente en el mainDiv (no en hijos)
  //       if (e.target === this || e.target.classList.contains("mainDiv")) {
  //         seeDetails(this);
  //       }
  //       e.stopPropagation();
  //     });
  //   });

  // Event listeners para los botones de salida
  exitBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      resetDivs();
      e.stopPropagation(); // Prevenir que el evento llegue al div padre
    });
  });
});
