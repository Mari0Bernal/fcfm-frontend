// Lista para almacenar los ingredientes
let ingredientes = [];

// Elementos del DOM
const btnAgregar = document.getElementById("btnAgregar");
const btnCompletar = document.getElementById("btnCompletar");
const inputIngrediente = document.getElementById("ingrediente");
const listaIngredientes = document.getElementById("listaIngredientes");
const loadingElement = document.getElementById("loading");
const responseElement = document.getElementById("response");
const orderPreview = document.getElementById("orderPreview");
const pedidoFinal = document.getElementById("pedidoFinal");

// Ingredientes no disponibles
const ingredientesNoDisponibles = ["pulpo", "cebolla", "pescado"];

// Función para agregar un ingrediente a la lista
function agregarIngrediente() {
  const ingrediente = inputIngrediente.value.trim().toLowerCase();

  if (ingrediente === "") {
    mostrarError("Por favor ingresa un ingrediente");
    return;
  }

  if (ingredientesNoDisponibles.includes(ingrediente)) {
    mostrarError(`De momento no contamos con ${ingrediente} 😔, una disculpa`);
    return;
  }

  if (ingredientes.includes(ingrediente)) {
    mostrarError("Este ingrediente ya está en tu pedido");
    return;
  }

  ingredientes.push(ingrediente);
  actualizarListaIngredientes();
  inputIngrediente.value = "";
  responseElement.innerHTML = "";
  responseElement.className = "response";
}

// Función para actualizar la lista visual de ingredientes
function actualizarListaIngredientes() {
  listaIngredientes.innerHTML = "";

  ingredientes.forEach((ingrediente, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
            ${ingrediente} 
            <button class="delete-btn" data-index="${index}">X</button>
        `;
    listaIngredientes.appendChild(li);
  });

  // Agregar event listeners a los botones de eliminar
  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const index = parseInt(this.getAttribute("data-index"));
      ingredientes.splice(index, 1);
      actualizarListaIngredientes();
    });
  });
}

// Función para ordenar la hamburguesa
function ordenarHamburguesa(ingredientes) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ingredientes.length === 0) {
        reject(
          "No hay ingredientes, favor de ingresar como quiere la hamburguesa"
        );
        return;
      }

      for (const ingrediente of ingredientes) {
        if (ingredientesNoDisponibles.includes(ingrediente)) {
          reject(`De momento no contamos con ${ingrediente} 😔, una disculpa`);
          return;
        }
      }

      resolve(`🍔 con ${ingredientes.join(", ")}`);
    }, 1500);
  });
}

// Función para manejar el éxito
function manejoExito(mensaje) {
  responseElement.innerHTML = mensaje;
  responseElement.className = "response response-success";

  // Mostrar vista previa del pedido
  orderPreview.style.display = "flex";
  pedidoFinal.innerHTML = mensaje;
}

// Función para manejar errores
function manejoError(error) {
  responseElement.innerHTML = error;
  responseElement.className = "response response-error";
  orderPreview.style.display = "none";
}

// Función para mostrar un error temporalmente
function mostrarError(mensaje) {
  responseElement.innerHTML = mensaje;
  responseElement.className = "response response-error";

  setTimeout(() => {
    if (responseElement.innerHTML === mensaje) {
      responseElement.innerHTML = "";
      responseElement.className = "response";
    }
  }, 3000);
}

// Evento para agregar ingrediente
btnAgregar.addEventListener("click", agregarIngrediente);

// Evento para agregar ingrediente con la tecla Enter
inputIngrediente.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    agregarIngrediente();
  }
});

// Evento para completar el pedido
btnCompletar.addEventListener("click", function () {
  // Mostrar cargando
  loadingElement.style.display = "block";
  responseElement.innerHTML = "";
  responseElement.className = "response";

  ordenarHamburguesa(ingredientes)
    .then((mensaje) => {
      loadingElement.style.display = "none";
      manejoExito(mensaje);
    })
    .catch((error) => {
      loadingElement.style.display = "none";
      manejoError(error);
    });
});

// Inicializar la lista
actualizarListaIngredientes();
