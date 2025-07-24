// Dados dos personagens
const characters = [
{
    id: 1,
    name: "NEO WARRIOR",
    emoji: "🤖",
    description:
"Guerreiro do futuro com armadura nanotecnológica e armas de energia. Especialista em combate corpo a corpo com força sobre-humana.",
    stats: { attack: 95, defense: 85, speed: 90 },
    abilities: ["Lâmina de Energia", "Campo de Força", "Salto Quântico"],
},
{
    id: 2,
    name: "CYBER NINJA",
    emoji: "🥷",
    description:
"Mestre das sombras digitais com técnicas de combate furtivo. Utiliza tecnologia avançada para se tornar invisível e atacar por trás.",
    stats: { attack: 92, defense: 78, speed: 98 },
    abilities: ["Camuflagem Digital", "Shuriken Laser", "Teletransporte"],
},
{
    id: 3,
    name: "QUANTUM MAGE",
    emoji: "🧙",
    description:
    "Manipulador da realidade quântica com poderes elementais devastadores. Controla as forças fundamentais do universo para destruir inimigos.",
    stats: { attack: 97, defense: 82, speed: 85 },
    abilities: ["Bola de Energia", "Telecinese", "Portal Dimensional"],
},
{
    id: 4,
    name: "STEEL SAMURAI",
    emoji: "⚔️",
    description:
    "Guerreiro com lâmina de aço e honra inabalável. Combina técnicas tradicionais de samurai com tecnologia futurista.",
    stats: { attack: 90, defense: 95, speed: 80 },
    abilities: ["Corte Perfeito", "Escudo de Aço", "Fúria do Samurai"],
},
{
    id: 5,
    name: "VOID ASSASSIN",
    emoji: "👻",
    description:
    "Assassino das trevas que se move entre dimensões. Especialista em eliminar alvos sem deixar vestígios.",
    stats: { attack: 98, defense: 75, speed: 95 },
    abilities: ["Passo das Sombras", "Lâmina do Vazio", "Invisibilidade"],
},
{
    id: 6,
    name: "PLASMA KNIGHT",
    emoji: "🛡️",
    description:
"Cavaleiro energizado com escudo de plasma puro. Defensor implacável que protege aliados com barreiras de energia.",
    stats: { attack: 88, defense: 92, speed: 87 },
    abilities: ["Escudo de Plasma", "Martelo de Energia", "Proteção de Equipe"],
  
},
];

// Elementos DOM
const background = document.getElementById("background");
const lightningContainer = document.getElementById("lightningContainer");
const character1 = document.getElementById("character1");
const character2 = document.getElementById("character2");
const laser1 = document.getElementById("laser1");
const laser2 = document.getElementById("laser2");
const charactersGrid = document.getElementById("charactersGrid");
const playNowBtn = document.getElementById("playNow");
const watchTrailerBtn = document.getElementById("watchTrailer");
const trailerModal = document.getElementById("trailerModal");
const closeTrailer = document.getElementById("closeTrailer");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector("nav ul");
const downloadModal = document.getElementById("downloadModal");
const closeDownload = document.getElementById("closeDownload");
const characterModal = document.getElementById("characterModal");
const closeCharacter = document.getElementById("closeCharacter");
const characterDetails = document.getElementById("characterDetails");
const startBattleBtn = document.getElementById("startBattle");
const playersOnline = document.getElementById("playersOnline");
const battlesToday = document.getElementById("battlesToday");
const winRate = document.getElementById("winRate");

// Criar partículas de fundo
function createBackgroundParticles() {
for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.width = Math.random() * 100 + 50 + "px";
    particle.style.height = particle.style.width;
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + 100 + "%";
    particle.style.animationDuration = Math.random() * 30 + 20 + "s";
    particle.style.animationDelay = Math.random() * 10 + "s";
    particle.style.opacity = Math.random() * 0.5 + 0.1;
    background.appendChild(particle);
}
}

// Criar raios de energia
function createLightning() {
setInterval(() => {
    const lightning = document.createElement("div");
    lightning.className = "lightning";
    lightning.style.left = Math.random() * 100 + "%";
    lightning.style.top = Math.random() * 100 + "%";
    lightning.style.height = Math.random() * 200 + 50 + "px";
    lightningContainer.appendChild(lightning);

    // Remover raio após animação
    setTimeout(() => {
    if (lightning.parentNode) {
        lightning.parentNode.removeChild(lightning);
}
    }, 100);
}, 300);
}

// Animação dos personagens atirando
function animateCharacters() {
setInterval(() => {
    // Personagem 1 atira
    laser1.style.left = "80px";
    laser1.style.top = "60px";
    laser1.style.display = "block";

    setTimeout(() => {
    laser1.style.display = "none";
    }, 500);
}, 2000);

setInterval(() => {
    // Personagem 2 atira
    laser2.style.left = "-200px";
    laser2.style.top = "60px";
    laser2.style.display = "block";

    setTimeout(() => {
    laser2.style.display = "none";
    }, 500);
}, 3000);
}

// Renderizar personagens
function renderCharacters() {
charactersGrid.innerHTML = "";
characters.forEach((character) => {
    const card = document.createElement("article");
    card.className = "character-card";
    card.innerHTML = `
            <div class="character-image">${character.emoji}</div>
            <h3 class="character-name">${character.name}</h3>
            <p class="character-description">${character.description.substring(
            0,
            100
            )}...</p>
            <div class="character-stats">
                <div class="stat">
                    <div class="stat-value">${character.stats.attack}</div>
                    <div class="stat-label">ATAQUE</div>
                </div>
                <div class="stat">
                    <div class="stat-value">${character.stats.defense}</div>
                    <div class="stat-label">DEFESA</div>
                </div>
                <div class="stat">
                    <div class="stat-value">${character.stats.speed}</div>
                    <div class="stat-label">VELOCIDADE</div>
                </div>
            </div>
            <button class="play-btn" data-character="${
            character.id
            }">VER DETALHES</button>
        `;
    charactersGrid.appendChild(card);
});

  // Adicionar eventos aos botões de ver detalhes
document.querySelectorAll(".play-btn").forEach((button) => {
    button.addEventListener("click", function () {
    const characterId = parseInt(this.getAttribute("data-character"));
    showCharacterDetails(characterId);
    });
});
}

// Mostrar detalhes do personagem
function showCharacterDetails(characterId) {
const character = characters.find((c) => c.id === characterId);
if (character) {
    characterDetails.innerHTML = `
            <div class="character-detail-image">${character.emoji}</div>
            <h2 class="character-detail-name">${character.name}</h2>
            <p class="character-detail-description">${character.description}</p>
            <div class="character-detail-stats">
                <div class="stat-bar-container">
                    <div class="stat-bar-label">ATAQUE</div>
                    <div class="stat-bar">
                        <div class="stat-bar-fill stat-attack-fill" style="height: ${character.stats.attack}%;"></div>
                    </div>
                    <div class="stat-value">${character.stats.attack}</div>
                </div>
                <div class="stat-bar-container">
                    <div class="stat-bar-label">DEFESA</div>
                    <div class="stat-bar">
                        <div class="stat-bar-fill stat-defense-fill" style="height: ${character.stats.defense}%;"></div>
                    </div>
                    <div class="stat-value">${character.stats.defense}</div>
                </div>
                <div class="stat-bar-container">
                    <div class="stat-bar-label">VELOCIDADE</div>
                    <div class="stat-bar">
                        <div class="stat-bar-fill stat-speed-fill" style="height: ${character.stats.speed}%;"></div>
                    </div>
                    <div class="stat-value">${character.stats.speed}</div>
                </div>
            </div>
            <button class="hero-btn primary" onclick="selectCharacter(${character.id})">SELECIONAR PERSONAGEM</button>
        `;
    characterModal.style.display = "block";
}
}

// Selecionar personagem
function selectCharacter(characterId) {
const character = characters.find((c) => c.id === characterId);
if (character) {
    alert(`Você selecionou ${character.name}! Prepare-se para a batalha!`);
    characterModal.style.display = "none";
    // Aqui você poderia redirecionar para a tela de batalha
}
}

// Manipulação do modal de trailer
function setupTrailerModal() {
watchTrailerBtn.addEventListener("click", () => {
    trailerModal.style.display = "block";
    document.body.style.overflow = "hidden";
});

closeTrailer.addEventListener("click", () => {
    trailerModal.style.display = "none";
    document.body.style.overflow = "auto";
});

window.addEventListener("click", (event) => {
    if (event.target === trailerModal) {
    trailerModal.style.display = "none";
    document.body.style.overflow = "auto";
    }
});
}

// Manipulação do modal de download
function setupDownloadModal() {
playNowBtn.addEventListener("click", () => {
    downloadModal.style.display = "block";
    document.body.style.overflow = "hidden";
});

closeDownload.addEventListener("click", () => {
    downloadModal.style.display = "none";
    document.body.style.overflow = "auto";
});

window.addEventListener("click", (event) => {
    if (event.target === downloadModal) {
    downloadModal.style.display = "none";
    document.body.style.overflow = "auto";
    }
});

  // Adicionar eventos aos botões de download
document.querySelectorAll(".download-option button").forEach((button) => {
    button.addEventListener("click", function () {
    const platform =
        this.closest(".download-option").querySelector("h3").textContent;
    alert(`Iniciando download para ${platform}...`);
    downloadModal.style.display = "none";
    document.body.style.overflow = "auto";
    });
});
}

// Manipulação do modal de personagem
function setupCharacterModal() {
  closeCharacter.addEventListener("click", () => {
    characterModal.style.display = "none";
    document.body.style.overflow = "auto";
  });

  window.addEventListener("click", (event) => {
    if (event.target === characterModal) {
      characterModal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
}

// Menu responsivo
function setupMobileMenu() {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Fechar menu ao clicar em um link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
}

// Smooth scroll para navegação
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// Efeitos de hover
function setupHoverEffects() {
  // Botões
  const buttons = document.querySelectorAll(".hero-btn, .play-btn");
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px) scale(1.05)";
    });

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });

  // Cards
  const cards = document.querySelectorAll(
    ".character-card, .feature-card, .download-option"
  );
  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });
}

// Animação de entrada
function animateEntrance() {
  const elements = document.querySelectorAll(
    ".hero-section, .features-section, .characters-section, .battle-section"
  );
  elements.forEach((element, index) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";

    setTimeout(() => {
      element.style.transition = "all 0.5s ease";
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }, 300 + index * 200);
  });
}

// Parallax effect
function setupParallax() {
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    const heroSection = document.querySelector(".hero-section");
    if (heroSection) {
      heroSection.style.transform = `translateY(${rate}px)`;
    }
  });
}

// Animação de contagem para stats
function animateStats() {
  const statElements = [
    { element: playersOnline, target: 50000, suffix: "+" },
    { element: battlesToday, target: 1000000, suffix: "+" },
    { element: winRate, target: 65, suffix: "%" },
  ];

  statElements.forEach((stat) => {
    let currentValue = 0;
    const duration = 2000;
    const increment = stat.target / (duration / 16);

    const timer = setInterval(() => {
      currentValue += increment;
      if (currentValue >= stat.target) {
        currentValue = stat.target;
        clearInterval(timer);
      }
      stat.element.textContent =
        Math.floor(currentValue).toLocaleString() + stat.suffix;
    }, 16);
  });
}

// Função para iniciar batalha
function setupBattleButton() {
  startBattleBtn.addEventListener("click", () => {
    alert("Iniciando batalha... Prepare-se para o combate!");
    // Aqui você poderia redirecionar para a tela de batalha
  });
}

// Função para simular download
function setupDownloadButtons() {
  document.querySelectorAll(".download-option button").forEach((button) => {
    button.addEventListener("click", function () {
      const platform =
        this.closest(".download-option").querySelector("h3").textContent;
      showDownloadAnimation(platform);
    });
  });
}

// Animação de download
function showDownloadAnimation(platform) {
  const button = event.target;
  const originalText = button.textContent;
  button.textContent = "BAIXANDO...";
  button.disabled = true;

  // Simular progresso do download
  let progress = 0;
  const interval = setInterval(() => {
    progress += 5;
    if (progress >= 100) {
      clearInterval(interval);
      button.textContent = "INSTALAR";
      button.onclick = () => {
        alert(`Instalação de ${platform} concluída!`);
      };
    }
  }, 100);
}

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  createBackgroundParticles();
  createLightning();
  animateCharacters();
  renderCharacters();
  setupTrailerModal();
  setupDownloadModal();
  setupCharacterModal();
  setupMobileMenu();
  setupSmoothScroll();
  setupHoverEffects();
  animateEntrance();
  setupParallax();
  animateStats();
  setupBattleButton();
  setupDownloadButtons();

  // Adicionar classe de animação ao body
  document.body.style.opacity = "0";
  document.body.style.transform = "translateY(20px)";
  setTimeout(() => {
    document.body.style.transition = "all 0.5s ease";
    document.body.style.opacity = "1";
    document.body.style.transform = "translateY(0)";
  }, 100);
});

// Evento para quando a janela é redimensionada
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navMenu.classList.remove("active");
  }
});

// Funções globais para serem acessadas pelo HTML
window.selectCharacter = selectCharacter;
