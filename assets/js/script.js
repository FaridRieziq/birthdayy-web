let currentScreen = 1;

// Pindah screen
function nextScreen(num) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById("screen" + num).classList.add("active");
  currentScreen = num;
}

// Kembali screen
function prevScreen() {
  if (currentScreen > 1) {
    nextScreen(currentScreen - 1);
  }
}

// Musik
function playMusic() {
  const music = document.getElementById("music");
  music.play().catch(() => {});
}