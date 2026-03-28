let input = "";

// Pindah screen
function nextScreen(num) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById("screen" + num).classList.add("active");
}


// Musik
function playMusic() {
  const music = document.getElementById("music");
  music.play().catch(() => {});
}

let currentScreen = 0;

function nextScreen(num) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById("screen" + num).classList.add("active");
  currentScreen = num;
}

function prevScreen() {
  if (currentScreen > 0) {
    nextScreen(currentScreen - 1);
  }
}