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

// Variáveis globais
let selectedPlayer = null;
let selectedEnemy = null;
let combatInterval = null;
let combatActive = false;



// Elementos DOM
const background = document.getElementById("background");
const lightningContainer = document.getElementById("lightningContainer");
const character1 = document.getElementById("character1");
const character2 = document.getElementById("character2");
const laser1 = document.getElementById("laser1");
const laser2 = document.getElementById("laser2");
const charactersGrid = document.getElementById("charactersGrid");
const playNowBtn = document.getElementById("playNowBtn");
const watchTrailerBtn = document.getElementById("watchTrailerBtn");
const trailerModal = document.getElementById("trailerModal");
const closeTrailer = document.getElementById("closeTrailer");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector("nav ul");
const downloadModal = document.getElementById("downloadModal");
const closeDownload = document.getElementById("closeDownload");
const characterModal = document.getElementById("characterModal");
const closeCharacter = document.getElementById("closeCharacter");
const characterDetails = document.getElementById("characterDetails");
const startBattleBtn = document.getElementById("startBattleBtn");
const playersOnline = document.getElementById("playersOnline");
const battlesToday = document.getElementById("battlesToday");
const winRate = document.getElementById("winRate");
const characterSelectionModal = document.getElementById(
  "characterSelectionModal"
);
const closeSelection = document.getElementById("closeSelection");
const playerCharacter = document.getElementById("playerCharacter");
const enemyCharacter = document.getElementById("enemyCharacter");
const choosePlayerBtn = document.getElementById("choosePlayerBtn");
const chooseEnemyBtn = document.getElementById("chooseEnemyBtn");
const characterList = document.getElementById("characterList");
const confirmSelectionBtn = document.getElementById("confirmSelectionBtn");
const combatFeature = document.getElementById("combatFeature");
const combatAnimationModal = document.getElementById("combatAnimationModal");
const closeCombat = document.getElementById("closeCombat");
const combatPlayer = document.getElementById("combatPlayer");
const combatEnemy = document.getElementById("combatEnemy");
const combatPlayerSprite = document.getElementById("combatPlayerSprite");
const combatEnemySprite = document.getElementById("combatEnemySprite");
const combatArena = document.getElementById("combatArena");
const combatEffects = document.getElementById("combatEffects");
const startCombatBtn = document.getElementById("startCombatBtn");
const stopCombatBtn = document.getElementById("stopCombatBtn");

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
    button.addEventListener("click", function (e) {
      e.stopPropagation();
      const characterId = parseInt(this.getAttribute("data-character"));
      showCharacterDetails(characterId);
    });
  });

  // Adicionar eventos aos cards para seleção direta
  document.querySelectorAll(".character-card").forEach((card, index) => {
    card.addEventListener("click", () => {
      showCharacterDetails(characters[index].id);
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
    document.body.style.overflow = "hidden";
  }
}

// Selecionar personagem (abre modal de seleção)
function selectCharacter(characterId) {
  characterModal.style.display = "none";
  characterSelectionModal.style.display = "block";
  document.body.style.overflow = "hidden";
  renderCharacterSelection();

  // Selecionar automaticamente o personagem clicado
  const character = characters.find((c) => c.id === characterId);
  if (character) {
    selectedPlayer = character;
    playerCharacter.innerHTML = `<div class="character-sprite">${character.emoji}</div>`;
    playerCharacter.classList.add("selected");

    // Atualizar seleção na lista
    document.querySelectorAll(".character-option").forEach((option) => {
      option.classList.remove("selected");
      if (parseInt(option.getAttribute("data-character")) === characterId) {
        option.classList.add("selected");
      }
    });
  }
}

// Renderizar seleção de personagens
function renderCharacterSelection() {
  characterList.innerHTML = "";
  characters.forEach((character) => {
    const option = document.createElement("div");
    option.className = "character-option";
    option.innerHTML = character.emoji;
    option.setAttribute("data-character", character.id);
    option.addEventListener("click", () =>
      selectCharacterForBattle(character.id, option)
    );
    characterList.appendChild(option);
  });

  // Marcar personagens já selecionados
  if (selectedPlayer) {
    const playerOption = document.querySelector(
      `.character-option[data-character="${selectedPlayer.id}"]`
    );
    if (playerOption) playerOption.classList.add("selected");
  }
  if (selectedEnemy) {
    const enemyOption = document.querySelector(
      `.character-option[data-character="${selectedEnemy.id}"]`
    );
    if (enemyOption) enemyOption.classList.add("selected");
  }
}

// Selecionar personagem para batalha
function selectCharacterForBattle(characterId, element) {
  const character = characters.find((c) => c.id === characterId);
  if (!character) return;

  // Remover seleção anterior
  document.querySelectorAll(".character-option").forEach((opt) => {
    opt.classList.remove("selected");
  });

  // Adicionar seleção atual
  element.classList.add("selected");

  // Determinar se é jogador ou inimigo
  if (document.activeElement === choosePlayerBtn) {
    selectedPlayer = character;
    playerCharacter.innerHTML = `<div class="character-sprite">${character.emoji}</div>`;
    playerCharacter.classList.add("selected");
  } else if (document.activeElement === chooseEnemyBtn) {
    selectedEnemy = character;
    enemyCharacter.innerHTML = `<div class="character-sprite">${character.emoji}</div>`;
    enemyCharacter.classList.add("selected");
  } else {
    // Se nenhum botão foi clicado, assumir que é o jogador
    selectedPlayer = character;
    playerCharacter.innerHTML = `<div class="character-sprite">${character.emoji}</div>`;
    playerCharacter.classList.add("selected");
  }

  // Habilitar botão de confirmação se ambos estiverem selecionados
  if (selectedPlayer && selectedEnemy) {
    confirmSelectionBtn.disabled = false;
  }
}

// Setup dos botões de escolha
function setupChooseButtons() {
  choosePlayerBtn.addEventListener("click", () => {
    choosePlayerBtn.classList.add("active");
    chooseEnemyBtn.classList.remove("active");
  });

  chooseEnemyBtn.addEventListener("click", () => {
    chooseEnemyBtn.classList.add("active");
    choosePlayerBtn.classList.remove("active");
  });
}

// Confirmar seleção de personagens
function confirmCharacterSelection() {
  if (selectedPlayer && selectedEnemy) {
    characterSelectionModal.style.display = "none";
    document.body.style.overflow = "auto";
    alert(
      `Personagens selecionados!\nJogador: ${selectedPlayer.name}\nInimigo: ${selectedEnemy.name}\nClique em "Iniciar Batalha" para começar!`
    );
  } else {
    alert("Por favor, selecione ambos os personagens!");
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
  document.querySelectorAll(".download-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const platform = this.getAttribute("data-platform");
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

// Manipulação do modal de seleção
function setupSelectionModal() {
  closeSelection.addEventListener("click", () => {
    characterSelectionModal.style.display = "none";
    document.body.style.overflow = "auto";
  });

  window.addEventListener("click", (event) => {
    if (event.target === characterSelectionModal) {
      characterSelectionModal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });

  confirmSelectionBtn.addEventListener("click", confirmCharacterSelection);
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
        // Fechar menu mobile se estiver aberto
        navMenu.classList.remove("active");
      }
    });
  });
}

// Efeitos de hover
function setupHoverEffects() {
  // Botões
  const buttons = document.querySelectorAll(
    ".hero-btn, .play-btn, .download-btn"
  );
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

// Função para iniciar batalha - AGORA REDIRECIONA PARA UMA PÁGINA DE BATALHA
function setupBattleButton() {
  startBattleBtn.addEventListener("click", () => {
    if (selectedPlayer && selectedEnemy) {
      // Redirecionar para uma página de batalha com os personagens selecionados
      const battleUrl = `battle.html?player=${encodeURIComponent(
        selectedPlayer.name
      )}&enemy=${encodeURIComponent(selectedEnemy.name)}&playerEmoji=${
        selectedPlayer.emoji
      }&enemyEmoji=${selectedEnemy.emoji}`;
      window.open(battleUrl, "_blank");
    } else {
      // Se não houver personagens selecionados, abrir modal de seleção
      characterSelectionModal.style.display = "block";
      document.body.style.overflow = "hidden";
      renderCharacterSelection();
    }
  });
}

// Animação de combate intensos
function setupCombatFeature() {
  combatFeature.addEventListener("click", () => {
    combatAnimationModal.style.display = "block";
    document.body.style.overflow = "hidden";
    // Selecionar personagens aleatórios para a demonstração
    const playerChar =
      characters[Math.floor(Math.random() * characters.length)];
    const enemyChar = characters[Math.floor(Math.random() * characters.length)];
    combatPlayerSprite.textContent = playerChar.emoji;
    combatEnemySprite.textContent = enemyChar.emoji;
  });

  closeCombat.addEventListener("click", () => {
    combatAnimationModal.style.display = "none";
    document.body.style.overflow = "auto";
    stopCombatAnimation();
  });

  window.addEventListener("click", (event) => {
    if (event.target === combatAnimationModal) {
      combatAnimationModal.style.display = "none";
      document.body.style.overflow = "auto";
      stopCombatAnimation();
    }
  });

  startCombatBtn.addEventListener("click", startCombatAnimation);
  stopCombatBtn.addEventListener("click", stopCombatAnimation);
}

// Iniciar animação de combate
function startCombatAnimation() {
  if (combatActive) return;

  combatActive = true;
  startCombatBtn.disabled = true;
  stopCombatBtn.disabled = false;

  combatInterval = setInterval(() => {
    // Animação de ataque
    const attackType = Math.floor(Math.random() * 3);

    switch (attackType) {
      case 0: // Ataque básico
        combatPlayerSprite.classList.add("combat-attack");
        setTimeout(() => {
          combatPlayerSprite.classList.remove("combat-attack");
          combatEnemySprite.classList.add("combat-hit");
          createCombatEffect("💥", combatEnemy);
        }, 250);
        setTimeout(() => {
          combatEnemySprite.classList.remove("combat-hit");
        }, 500);
        break;

      case 1: // Ataque do inimigo
        combatEnemySprite.classList.add("combat-attack");
        setTimeout(() => {
          combatEnemySprite.classList.remove("combat-attack");
          combatPlayerSprite.classList.add("combat-hit");
          createCombatEffect("💥", combatPlayer);
        }, 250);
        setTimeout(() => {
          combatPlayerSprite.classList.remove("combat-hit");
        }, 500);
        break;

      case 2: // Habilidade especial
        const specialType = Math.floor(Math.random() * 2);
        if (specialType === 0) {
          combatPlayerSprite.classList.add("combat-special");
          createCombatEffect("🔥", combatPlayer);
          setTimeout(() => {
            combatEnemySprite.classList.add("combat-hit");
            createCombatEffect("💥", combatEnemy);
          }, 500);
          setTimeout(() => {
            combatPlayerSprite.classList.remove("combat-special");
            combatEnemySprite.classList.remove("combat-hit");
          }, 1000);
        } else {
          combatEnemySprite.classList.add("combat-special");
          createCombatEffect("⚡", combatEnemy);
          setTimeout(() => {
            combatPlayerSprite.classList.add("combat-hit");
            createCombatEffect("💥", combatPlayer);
          }, 500);
          setTimeout(() => {
            combatEnemySprite.classList.remove("combat-special");
            combatPlayerSprite.classList.remove("combat-hit");
          }, 1000);
        }
        break;
    }
  }, 1500);
}

// Parar animação de combate
function stopCombatAnimation() {
  if (combatInterval) {
    clearInterval(combatInterval);
    combatInterval = null;
  }
  combatActive = false;
  startCombatBtn.disabled = false;
  stopCombatBtn.disabled = true;

  // Remover todas as animações
  combatPlayerSprite.className = "character-sprite-combat";
  combatEnemySprite.className = "character-sprite-combat";

  // Limpar efeitos
  combatEffects.innerHTML = "";
}

// Criar efeito de combate
function createCombatEffect(emoji, targetElement) {
  const effect = document.createElement("div");
  effect.className = "combat-effect";
  effect.textContent = emoji;

  // Posicionar o efeito no centro do personagem
  const rect = targetElement.getBoundingClientRect();
  const arenaRect = combatArena.getBoundingClientRect();

  effect.style.left = rect.left - arenaRect.left + rect.width / 2 - 20 + "px";
  effect.style.top = rect.top - arenaRect.top + rect.height / 2 - 20 + "px";

  combatEffects.appendChild(effect);

  // Remover o efeito após a animação
  setTimeout(() => {
    if (effect.parentNode) {
      effect.parentNode.removeChild(effect);
    }
  }, 1000);
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
  setupSelectionModal();
  setupMobileMenu();
  setupSmoothScroll();
  setupHoverEffects();
  animateEntrance();
  setupParallax();
  animateStats();
  setupBattleButton();
  setupDownloadButtons();
  setupChooseButtons();
  setupCombatFeature();

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

// Função para simular download
function setupDownloadButtons() {
  document.querySelectorAll(".download-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const platform = this.getAttribute("data-platform");
      showDownloadAnimation(platform, this);
    });
  });
}

// Animação de download
function showDownloadAnimation(platform, button) {
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
        button.textContent = originalText;
        button.disabled = false;
        button.onclick = null;
      };
    }
  }, 100);
}


// ... (código existente) ...

// Função para iniciar batalha - AGORA REDIRECIONA PARA A PÁGINA DE BATALHA
function setupBattleButton() {
    startBattleBtn.addEventListener('click', () => {
        // Redirecionar para a página de batalha
        window.location.href = 'battle.html';
    });
}

// ... (resto do código existente) ...


// Adicione estas variáveis no início do arquivo script.js, junto com as outras variáveis DOM:
const overlay = document.createElement('div');
overlay.className = 'overlay';
document.body.appendChild(overlay);

// Substitua a função showCharacterDetails no arquivo script.js por esta:

// Mostrar detalhes do personagem centralizados
function showCharacterDetails(characterId) {
    const character = characters.find(c => c.id === characterId);
    if (!character) return;
    
    // Criar elemento de detalhes centralizados
    const detailsElement = document.createElement('div');
    detailsElement.className = 'character-details-centered';
    detailsElement.innerHTML = `
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
        <button class="close-centered-details">FECHAR DETALHES</button>
    `;
    
    // Adicionar evento para fechar os detalhes
    const closeButton = detailsElement.querySelector('.close-centered-details');
    closeButton.addEventListener('click', () => {
        detailsElement.remove();
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Adicionar os detalhes ao body
    document.body.appendChild(detailsElement);
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Fechar ao clicar no overlay
    overlay.addEventListener('click', () => {
        detailsElement.remove();
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}

// Atualize a função renderCharacters para usar o novo sistema:
function renderCharacters() {
    charactersGrid.innerHTML = '';
    characters.forEach(character => {
        const card = document.createElement('article');
        card.className = 'character-card';
        card.innerHTML = `
            <div class="character-image">${character.emoji}</div>
            <h3 class="character-name">${character.name}</h3>
            <p class="character-description">${character.description.substring(0, 100)}...</p>
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
            <button class="play-btn" data-character="${character.id}">VER DETALHES</button>
        `;
        charactersGrid.appendChild(card);
    });
    
    // Adicionar eventos aos botões de ver detalhes
    document.querySelectorAll('.play-btn').forEach(button => {
        button.addEventListener('click', function() {
            const characterId = parseInt(this.getAttribute('data-character'));
            showCharacterDetails(characterId);
        });
    });
}