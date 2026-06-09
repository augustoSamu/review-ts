function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();

  iluminateKey(e);
}

function iluminateKey(e) {
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

document.addEventListener("keydown", playSound);
