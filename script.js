const glow = document.getElementById("glow");

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

const music = document.getElementById("music");

function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}
