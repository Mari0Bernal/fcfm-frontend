function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  const key = document.querySelector(`.key[data-key="${e.key}"]`);
  if (!audio) return;
  audio.currentTime = 0; // reinicia el audio
  audio.play();
  key.classList.add("playing");

  const keys = this.document.querySelectorAll(".key");
  keys.forEach(
    (
      key // agrega un evento de transición a cada tecla
    ) => key.addEventListener("transitionend", removeTransition) // al terminar la transición, llama a removeTransition
  );
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; // Si no es transform, salimos
  this.classList.remove("playing"); //remueve la clase playing
}

window.addEventListener("keydown", playSound);
