document.addEventListener("DOMContentLoaded", function () {
  const audioPlayer = document.querySelector(".m-audio-player");
  const soundOnIcon = audioPlayer.querySelector('img[alt="SoundOn"]');
  const soundOffIcon = audioPlayer.querySelector('img[alt="soundOff"]');
  const audioElement = document.getElementById("audioElement");

  audioElement.loop = true; // Looping the audio
  setTimeout(() => {
    audioElement
      .play() // Automatically play the audio after 2 seconds
      .catch((error) => {
        // Manege the error if autoplay is blocked
        console.log("La reproducción automática fue bloqueada:", error);
        // Show the sound off icon
        soundOnIcon.style.display = "none";
        soundOffIcon.style.display = "block";
      });
  }, 2000);

  audioPlayer.addEventListener("click", function () {
    // Toggle between sound on and sound off
    if (soundOnIcon.style.display !== "none") {
      // Change to "Sound Off" mode
      soundOnIcon.style.display = "none";
      soundOffIcon.style.display = "block";
      audioElement.pause(); // Pausar la música
    } else {
      // Change to "Sound On" mode
      soundOnIcon.style.display = "block";
      soundOffIcon.style.display = "none";
      audioElement.play(); // Play the music
    }
  });
});
