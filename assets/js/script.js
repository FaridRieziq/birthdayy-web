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

// Falling Hearts Animation
function createFallingHearts() {
  const container = document.getElementById("hearts-container");
  
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "🩷";
    
    // Random position di atas layar
    const randomLeft = Math.random() * 100;
    heart.style.left = randomLeft + "%";
    heart.style.top = "-30px";
    
    // Random duration antara 3-8 detik
    const duration = Math.random() * 5 + 3;
    heart.style.animationDuration = duration + "s";
    
    // Random delay
    const delay = Math.random() * 0.5;
    heart.style.animationDelay = delay + "s";
    
    container.appendChild(heart);
    
    // Hapus hati setelah animasi selesai
    setTimeout(() => {
      heart.remove();
    }, (duration + delay) * 1000);
  }, 500); // Buat hati baru setiap 400ms
}

// Mulai animasi saat halaman dimuat
window.addEventListener("load", createFallingHearts);
