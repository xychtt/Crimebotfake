// ghost cursor
const glow = document.getElementById("glow");

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateGlow() {
  currentX += (mouseX - currentX) * 0.08;
  currentY += (mouseY - currentY) * 0.08;

  glow.style.left = currentX + "px";
  glow.style.top = currentY + "px";

  requestAnimationFrame(animateGlow);
}
animateGlow();

// fullscreen on first click
document.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(()=>{});
  }
}, { once: true });

// music toggle
const music = document.getElementById("music");
function toggleMusic() {
  if (music.paused) music.play();
  else music.pause();
}

// uptime
let seconds = 0;
function formatTime(sec) {
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  return `${h}h ${m}m`;
}
setInterval(()=>{
  seconds++;
  document.querySelector(".details p:nth-child(2)").textContent =
    "Uptime: " + formatTime(seconds);
},1000);

// random ping
setInterval(()=>{
  const ping = Math.floor(Math.random()*40)+15;
  document.querySelector(".details p:nth-child(1)").textContent =
    "Ping: " + ping + "ms";
},2000);

const card = document.querySelector(".card");

document.addEventListener("mousemove", (e) => {
  const rect = card.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = -(y - centerY) / 20;
  const rotateY = (x - centerX) / 20;

  card.style.transform = `
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
  `;

  // update refraction light
  card.style.setProperty("--x", `${x}px`);
  card.style.setProperty("--y", `${y}px`);
});
