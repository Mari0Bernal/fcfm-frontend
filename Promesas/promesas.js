function ordenarHamburguesa(ingredientes) {
  const hamburguesaPromesa = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (ingredientes.includes("")) {
        reject(
          "No hay ingredientes, favor de ingresar como quiere la hamburguesa"
        );
      }

      if (
        ingredientes.includes("pulpo") ||
        ingredientes.includes("cebolla") ||
        ingredientes.includes("pescado")
      ) {
        document.getElementById("cargando").style.display = "none";
        reject("De momento no cuento con ese ingrediente 😔, una disculpa");
      }
      document.getElementById("cargando").style.display = "none";
      resolve(`Pedido: 🍔 con ${ingredientes.join(", ")}`);
    }, 1000);
  });

  return hamburguesaPromesa;
}

function manejoError(error) {
  document.getElementById("respuesta").innerHTML = error;
  console.log(error);
}

//hamburguesa con queso
//hamburguesa con tocino
//hamburguesa de pollo
//hamburguesa de pescado -
//hamburguesa vegana
//hamburguesa de pulpo -
/*
let hamburguesaQuesoTocino = ordenarHamburguesa(["tocino", "queso"]).then(
  function (burger) {
    console.log(burger);
  }
);

let hamburguesaPollo = ordenarHamburguesa(["pollo"]).then(function (burger) {
  console.log(burger);
});

let hamburguesaPulpo = ordenarHamburguesa(["pulpo", "cebolla", "tomate"])
  .then(function (burger) {
    console.log(burger);
  })
  .catch(manejoError);
*/
//console.log(hamburguesaQuesoTocino);
//console.log(hamburguesaPollo);
//console.log(hamburguesaPulpo);

document.querySelector("#btn").addEventListener("click", function () {
  let orden = document.getElementById("hamburguesa").value;
  document.getElementById("cargando").style.display = "block";
  ordenarHamburguesa([orden])
    .then(function (burger) {
      console.log(burger);
      document.getElementById("respuesta").innerHTML = burger;
    })
    .catch(manejoError);
});
