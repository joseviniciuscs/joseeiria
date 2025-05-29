const container = document.querySelector(".efeito-coracoes");

function criarCoracao() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  // Posição horizontal aleatória
  heart.style.left = Math.random() * 100 + "vw";

  // Duração aleatória da queda
  const duration = Math.random() * 5 + 5; // 5s a 10s
  heart.style.animationDuration = `${duration}s, 3s`;

  // Tamanho aleatório
  const size = Math.random() * 10 + 10; // 10px a 20px
  heart.style.width = `${size}px`;
  heart.style.height = `${size}px`;

  container.appendChild(heart);

  // Remove após a animação
  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

// Cria corações continuamente
setInterval(criarCoracao, 300);
