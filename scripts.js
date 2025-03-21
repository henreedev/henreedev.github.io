

////////////////////////////////////////////////////////////////////
/////////////////////Creating HTML contents/////////////////////////
////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", () => {
  const games = [
    {
      name: "Scale Mail",
      description: "Made in only 96 hours and ranked #4 out of 7,600+ entries, Scale Mail is an inventory management puzzle game created for the yearly GMTK game jam, with the theme \"Built to Scale.\" I led the Godot development process, bringing programmer teammates up to speed with the engine and implementing major features such as item grid placement logic, score calculations, item/bag/inventory infrastructure, and smooth UI effects and transitions.",
      shortDescription: "Inventory management puzzle game made in 96 hours!",
      icon: "assets/image/scalemail-icon.png",
      bgImage: "assets/image/scalemail-splash.png",
      created: "August 2024",
      status: "Preparing for Steam release",
      genre: "Puzzle",
      role: "Lead Programmer",
      teamSize: 7,
      gameEngine: "Godot",
      video: "https://www.youtube.com/embed/tczcsD4x6JA?mute=1&controls=1&modestbranding=1&rel=0&playsinline=1&fs=1",
      githubLink: "",
      itchLink: "https://legoliomanikas.itch.io/scale-mail",
      
      stats: ["Ranked <strong>#4</strong> out of 7,600+ entries in the GMTK Game Jam", 
        "Ranked #2 in the Enjoyment category", 
        "Received \"Top Marks\" award from Mark Brown, the jam creator"],
      features: ["Smooth UI transitions (0:08, 0:28)", 
        "Grid-based item placement (0:38)", 
        "Item rotation (0:44)",
        "Item resizing (1:56)",
        "Level complete sequence (2:39)",
        "Candy-based scoring system (3:34)",
        "Much more!",
      ],
    },
    {
      name: "Suntower",
      description: "Suntower is a rage platformer with a focus on rope physics. Made for GWJ #66 with the theme \"Escape,\" the game is about a sunflower trying to escape from the bottom of a decrepit tower. As a player, you navigate between beams of sunlight to grow the sunflower and use your head to latch onto higher platforms, pulling yourself up. I received tons of positive feedback from playtesting by dozens of my friends, with reactions ranging between unbridled rage at falling over and over in this ONE SPOT, to love for the charming aesthetic and upbeat soundtrack.",
      shortDescription: "Rage platformer with rope physics!",
      icon: "assets/image/suntower-icon.png",
      bgImage: "assets/image/suntower-splash.png",
      created: "March 2024",
      status: "Post-jam playtest released",
      genre: "Foddian Rage Platformer",
      role: "Lead Programmer, Artist",
      teamSize: 2,
      gameEngine: "Godot",
      video: "https://www.youtube.com/embed/c2uA10Pm9j8?mute=1&controls=1&modestbranding=1&rel=0&playsinline=1&fs=1",
      githubLink: "https://github.com/henreedev/suntower",
      itchLink: "https://henree.itch.io/suntower",
      stats: ["Ranked top 50% in Originality in the Godot Wild Jam #66", 
        "4 handcrafted levels, each with unique physics mechanics",
        "20+ hours of playtesting feedback", 
      ],
      features: [
        "Interactive menus with personality (0:05)", 
        "Intro cutscene (0:23)", 
        "Visual tutorial sequence, guiding players through the controls (0:35)",
        "Rope physics-based climbing, sunlight raycasting to buff player's extension length (0:43)", 
        "Much more!", 
      ],
    },
    // Inkbound
    {
      name: "Inkbound",
      description: "Made in three months as a Brown-RISD Game Design club production, Inkbound is a reverse platformer where you type out the platforms to save a hapless character from death. Each word you type can have semantic meaning, giving them effects in-game. I led Godot programming, planning out and implementing the core features of the game, while working closely with my producer and artists.",
      shortDescription: "Typing-based reverse platformer!",
      icon: "assets/image/inkbound-icon.png",
      bgImage: "assets/image/inkbound-splash.png",
      created: "November 2024",
      status: "Fully released",
      genre: "Reverse Platformer",
      role: "Lead Programmer, Artist",
      teamSize: 15,
      gameEngine: "Unity",
      video: "https://www.youtube.com/embed/K2dA65rBEr0?mute=1&controls=1&modestbranding=1&rel=0&playsinline=1&fs=1",
      githubLink: "",
      itchLink: "https://brownrisdgames.itch.io/inkbound",
      stats: [
        "30+ playtesters at a local venue",
      ],
      features: [
        "Menu screen (0:00)",
        "Dialogue cutscene (0:01)",
        "Smooth level transitions (0:28)",
        "Player movement and physics (0:30)",
        "Grid-based word platform typing (0:30)",
        "Custom word category behaviors (go == fast, etc.) (0:30)",
        "Tilemapped level layouts (0:30)",
        "Much more!",
      ],
    },
    {
      name: "Nullify Light",
      description: "Nullify Light is a bullet hell where you absorb and reuse bullets against an angel trying to purge you from the world. I organized a group of friends to ideate and discuss mechanics for the game, resulting in a fresh take on bullet hells where you can actually delete bullets. This core mechanic opens the door for typically undodgable or impossible patterns to become reasonable for a skilled player.",
      shortDescription: "Absorption-based bullet hell!",
      icon: "assets/image/nullify-icon.png",
      bgImage: "assets/image/nullify-splash.png",
      created: "May 2024",
      status: "Post-jam playtest released",
      genre: "Bullet Hell",
      role: "Lead Programmer, Artist",
      teamSize: 3,
      gameEngine: "Godot",
      video: "https://www.youtube.com/embed/Rs5QSngs_rA?mute=1&controls=1&modestbranding=1&rel=0&playsinline=1&fs=1",
      githubLink: "",
      itchLink: "https://henree.itch.io/nullify-light",
      stats: [
        "Ranked #89 out of 188 entries in Godot Wild Jam #69", 
        "Ranked #54 for Graphics", 
      ],
      features: [
        "Dialogue sequences (0:07)", 
        "Interactive tutorial sequence (0:14)", 
        "Interesting bullet behaviors (0:43)",
        "Customizable bullet spawners (screen edge spawner at 0:43)",
        "Bullet absorption into inventory (0:43)",
        "Bullet release from inventory (1:44)",
        "Much more!"
      ],
    },
    {
      name: "Kanjou Meisou",
      description: "Made for a Japanese class final project, Kanjou Meisou (感情瞑想, meaning \"emotional meditation\") is a meditation simulator about getting in touch with your feelings (and less in touch with TikTok). I made this game as part of a presentation on solutions to anxiety, and so I was happy to hear from a friend that this game helped them manage their feelings during a hard time.",
      shortDescription: "Immersive meditation simulator!",
      icon: "assets/image/kanjoumeisou-icon.png",
      bgImage: "assets/image/kanjoumeisou-splash.png",
      created: "May 2024",
      status: "Fully released",
      genre: "Simulation",
      role: "Solo Programmer, Artist",
      teamSize: 1,
      gameEngine: "Godot",
      video: "https://www.youtube.com/embed/kP_e_i2CZOE?mute=1&controls=1&modestbranding=1&rel=0&playsinline=1&fs=1",
      githubLink: "",
      itchLink: "https://henree.itch.io/kanjoumeisou",
      stats: ["48 browser plays in the month after release"],
      features: ["Custom intro animations (0:00)", 
        "Mouse movement meter, with a helpful cursor animation (0:22)", 
        "Random emotional states, with custom visuals (0:29)", 
        "Satisfying pickups with smooth movements (0:29)", 
        "Smooth state transitions (3:20)", 
        ],
    },
    {
      name: "Final Farm",
      description: "Made in 9 days, Final Farm is a spin on the typical tower defense, giving the player an active role in maintaining and assisting their towers during combat. Definitely the most mechanically complex game on this list, Final Farm is a high-priority project in my free time.",
      shortDescription: "Farming-based tower defense!",
      icon: "assets/image/finalfarm-icon.png",
      bgImage: "assets/image/finalfarm-splash.png",
      created: "July 2024",
      status: "Jam version released",
      genre: "Tower Defense",
      role: "Lead Programmer, Artist",
      teamSize: 4,
      gameEngine: "Godot",
      video: "https://www.youtube.com/embed/mxqEyTst8q4?mute=1&controls=1&modestbranding=1&rel=0&playsinline=1&fs=1",
      githubLink: "",
      itchLink: "https://henree.itch.io/final-farm",
      stats: ["Ranked top 40% in Graphics in Godot Wild Jam #71"],
      features: [
        "Seed shop UI (0:00)",
        "Tower upgrade system (0:23)",
        "Tower placement on an isometric grid (0:45)", 
        "Player-tower interaction (1:41)",
        "Tower/enemy targeting systems (1:41)", 
        "Tower/enemy animations and behaviors (1:41)", 
        "Tower sleeping system (2:06)",
        "Wave customization system, editor-exposed (used to create shown waves)",
        "Minimap showing towers and enemies (top-right)",
        "Much more!",
      ],
    },
    
    // Exponential Climb
    {
      name: "Exponential Climb",
      description: "A passion project I'm currently working on, Exponential Climb is a fusion of all of my favorite things: perk systems, physics-based movement, and roguelite runs. I thought about what game I would enjoy playing the most, if it existed, and this came to mind. I'm steadily adding and testing new features and moving it towards the vision I have of a replayable, math-based game that feels smooth to play and has tons to explore.",
      shortDescription: "Physics-based roguelite platformer with perks!",
      icon: "assets/image/exponential-climb-icon.png",
      bgImage: "assets/image/exponential-climb-splash.png",
      created: "January 2025",
      status: "Playtesting prototypes",
      genre: "Roguelite Platformer",
      role: "Solo Programmer, Artist",
      teamSize: 1,
      gameEngine: "Godot",
      video: "https://www.youtube.com/embed/3T-rnOstbmo?mute=1&controls=1&modestbranding=1&rel=0&playsinline=1&fs=1",
      githubLink: "",
      itchLink: "",
      stats: [
        "10+ hours of playtesting feedback",
      ],
      features: [
        "Procedural cave generation",
        "Grappling hook (0:00)",
        "Enemy AI pathfinding (0:00)",
        "Enemy combat (0:23)",
        "Perk activation sequence (0:56)",
        "Perk selection menu (1:25)",
        "XP particles (1:53)",
        "Much more!",
      ],
    },
    // Out of Order
    {
      name: "Out of Order",
      description: "Made for the Hack@Brown 2025 hackathon, Out of Order is an immersive arcade platformer where it feels like you're actually playing the machine. The game is a platformer, but the wildcard is that the machine with which you play the platformer is acting up. The player scavenges their pocket for coins, pulling out a vast variety of multipliers on their score, that often come with negative side effects when inserted into the machine. I produced every aspect of the game, planning out how I would use the 24 hours and managing my energy as I went.",
      shortDescription: "Get the high score on a broken arcade machine!",
      icon: "assets/image/out-of-order-icon.png",
      bgImage: "assets/image/out-of-order-splash.png",
      created: "February 2025",
      status: "Fully released",
      genre: "Arcade Roguelike Platformer",
      role: "Solo Programmer, Artist",
      teamSize: 1,
      gameEngine: "Godot",
      video: "https://www.youtube.com/embed/6Z8jpSRPzCA?mute=1&controls=1&modestbranding=1&rel=0&playsinline=1&fs=1",
      githubLink: "https://github.com/henreedev/out-of-order",
      itchLink: "https://henree.itch.io/out-of-order",
      stats: [
        "Made (with custom art) in 24 hours",
      ],
      features: [
        "Dialogue boxes (0:00)",
        "Roguelike coin system (0:12)",
        "Arcade platforming (0:27)",
        "Hazards, death sequence (0:44)",
        "Restart sequence (1:20)",
        "Immersive sound, arcade sound effects",
        "Much more!"
      ],
    },
    // Boiling Point
    {
      name: "Boiling Point",
      description: "Made for the Hack@Brown 2024 hackathon, Boiling Point shows off planetary physics, allowing for movement on planet surfaces and flight along gravitational fields. I focused on the coding, using publicly available art assets from Itch.",
      shortDescription: "Planetary platformer about solving global warming!",
      icon: "assets/image/boiling-point-icon.png",
      bgImage: "assets/image/boiling-point-splash.png",
      created: "February 2024",
      status: "Fully released",
      genre: "Physics-based Platformer",
      role: "Solo Programmer",
      teamSize: 1,
      gameEngine: "Godot",
      video: "https://www.youtube.com/embed/F1EyXwdMJnY?mute=1&controls=1&modestbranding=1&rel=0&playsinline=1&fs=1",
      githubLink: "",
      itchLink: "https://henree.itch.io/boiling-point",
      stats: [
        "Made in less than 24 hours",
      ],
      features: [
        "Rigid body player movement, allowing planet surface walking",
        "Procedurally placed planets with gravity",
        "Guiding particle trail towards objective",
        "Game end sequence (3:12)",
      ],
    },
    
  ];
  // Create the game grid

  const gameGrid = document.querySelector(".game-grid");

  games.forEach((game, index) => {
    const gameIcon = document.createElement("div");
    gameIcon.classList.add("game-icon");
    gameIcon.setAttribute("data-index", index);

    const img = document.createElement("img");
    img.src = game.icon;
    img.alt = game.name;

    gameIcon.appendChild(img);
    gameGrid.appendChild(gameIcon);
  });

  // Make icons do something
  const gameIcons = document.querySelectorAll(".game-icon");
  gameIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      selectThisGame(icon);
    });
  });

  const gamesSection = document.querySelector(".games-section");

  games.forEach((game, index) => {
    // Create game details container
    const gameDetails = document.createElement("div");
    gameDetails.classList.add("game-details");
    gameDetails.id = `game-${index}`;

    // Splash background
    const splashBackground = document.createElement("div");
    splashBackground.classList.add("splash-background");
    splashBackground.style.backgroundImage = `url('${game.bgImage}')`;

    // Game Info Wrapper
    const gameInfo = document.createElement("div");
    gameInfo.classList.add("game-info");

    const gameInfoContainer = document.createElement("div");
    gameInfoContainer.classList.add("game-info-container");

    // LEFT SIDE (Basic Info)
    const gameInfoLeft = document.createElement("div");
    gameInfoLeft.classList.add("game-info-left");
    gameInfoLeft.innerHTML = `
      <h2 class="wave-text game-title">${game.name}</h2>
      <div class="game-info-bullets-left">
        <p>Role: <span class="d">${game.role}</span></p>
        <p>Team Size: <span class="d">${game.teamSize}</span></p>
        <p>Created: <span class="d">${game.created}</span></p>
        <p>Game Engine: <span class="d">${game.gameEngine}</span></p>
        <p>Genre: <span class="d">${game.genre}</span></p>
        <p>Status: <span class="d">${game.status}</span></p>
      </div>
      <div class="icons-container">
        <a
          ${game.itchLink === "" ? "" : "href=" + game.itchLink}
          target="_blank"
          class="icon-link"
          ${game.itchLink === "" ? 'data-disabled="true"' : ''}
        >
          <img
            src="assets/image/itchio-icon.png"
            alt="Itch.io"
            class="icon-image"
          />
          <span class="tooltip"
            >
            ${game.itchLink === "" ? "Not yet released" : "Play " + game.name}
            </span
          >
        </a>
        <a class="icon-link" 
          ${game.githubLink === "" ? "" : "href=" + game.githubLink}
          target="_blank" 
          ${game.githubLink ? '' : 'data-disabled="true"'}>
          <img
            src="assets/image/github-icon.png"
            alt="GitHub"
            class="icon-image"
          />
          <span class="tooltip">
            ${game.githubLink === "" ? "Source code available upon request" : "View the source code"}
          </span>
        </a>
    </div>
    `;

    // RIGHT SIDE (Modal Button)
    const gameInfoRight = document.createElement("div");
    gameInfoRight.classList.add("game-info-right");
    gameInfoRight.innerHTML = `
      <button class="open-modal-btn wave-text" data-index="${index}">more info</button>
    `;

    // MODAL
    const modal = document.createElement("div");
    modal.classList.add("game-modal");
    modal.id = `modal-${index}`;
    modal.innerHTML = `
      <span class="close-modal" data-index="${index}">&times;</span>
      <div class="modal-content">
        <div class="modal-left">
          <h2 class="wave-text">${game.name}</h2>
          <p class="word-wave-text">${game.shortDescription}</p>
          <h3 class="wave-text">Stats:</h3>
          <ul class="modal-stats">
          ${game.stats.map(stat => `<li class="word-wave-text-list">${stat}</li>`).join('')}
          </ul>
          <h3 class="wave-text">Description:</h3>
          <p class="word-wave-text">${game.description}</p>
        </div>
        <div class="modal-right">
          <iframe class="modal-video" src="${game.video}" frameborder="0" allowfullscreen></iframe>
          <a class="modal-play-button wave-text" href="${game.itchLink}" target="_blank">play now</a>
          <h3 class="wave-text">Features:</h3>
          <ul class="modal-features ">
            ${game.features.map(feature => `<li class="word-wave-text-list">${feature}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;


    // Append elements
    gameInfoContainer.appendChild(gameInfoLeft);
    gameInfoContainer.appendChild(gameInfoRight);
    gameInfo.appendChild(gameInfoContainer);
    gameDetails.appendChild(splashBackground);
    gameDetails.appendChild(gameInfo);
    gamesSection.appendChild(gameDetails);
    document.body.appendChild(modal); // Append modal to body

    // Event Listeners for Modal
    gameInfoRight.querySelector(".open-modal-btn").addEventListener("click", () => {
      const modal = document.getElementById(`modal-${index}`);
      modal.style.display = "flex";  // Ensure modal is shown
      document.body.style.overflowY = "hidden"; // Prevent background scroll
      modal.classList.add("fade-in");
      modal.classList.remove("fade-out");
    });

    function closeModal() {
      const modal = document.getElementById(`modal-${index}`);
      modal.classList.add("fade-out");
      modal.classList.remove("fade-in");
      setTimeout(() => {
        if (modal.classList.contains("fade-out")) {
          document.body.style.overflowY = "auto"; // Restore scroll
        }
      }, 500); // Matches CSS animation duration
    }
    modal.querySelector(".close-modal").addEventListener("click", () => {
      closeModal()
    });

    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeModal()
      }
    });
  });
});
////////////////////////////////////////////////////////////////////
/////////////////////Creating HTML contents/////////////////////////
////////////////////////////////////////////////////////////////////



function selectThisGame(icon, shouldScroll = true) {
  if (shouldScroll) {
    scrollToGamesSection();
  }
  if (icon) {
    const index = icon.getAttribute("data-index");
    const newActive = document.getElementById(`game-${index}`);
    fadeOutCurrent();
    // Activate new game details
    newActive.classList.remove("fade-out");
    newActive.classList.add("active");
  } else {
    fadeOutCurrent();
  }
}

function fadeOutCurrent() {
  const currentActive = document.querySelector(".game-details.active");
  if (currentActive) {
    currentActive.classList.add("fade-out");
    currentActive.classList.remove("active");

    // After fade-out, hide the previous game
    setTimeout(() => {
      currentActive.classList.remove("fade-out");
    }, 500); // Match with CSS transition time
  }
}

function scrollToGamesSection() {
  const gamesSection = document.querySelector(".games-section");
  const sectionTop = gamesSection.offsetTop + 1;

  window.scrollTo({
    top: sectionTop, // Scroll to the top of the games section
    behavior: "smooth", // Smooth scrolling effect
  });
}

function scrollToDemoReelSection() {
  const demoReelSection = document.querySelector(".demo-reel-section");
  const sectionTop = demoReelSection.offsetTop + 1;

  window.scrollTo({
    top: sectionTop, // Scroll to the top of the games section
    behavior: "smooth", // Smooth scrolling effect
  });
}

function checkScrollPosition() {
  const gamesSection = document.querySelector(".games-section");
  const gamesSectionHeight =
    gamesSection.offsetTop + gamesSection.offsetHeight + 1;
  const currentScroll = Math.floor(window.scrollY + window.innerHeight);
  if (
    currentScroll >= gamesSectionHeight + 600 ||
    currentScroll <= gamesSectionHeight - 600
  ) {
    selectThisGame(null, false); // Deselect if scrolling away
  }
}

// TYPING STUFF

const texts = ["henree", "Henry Earnest"];
let currentTextIndex = 0;
let typingSpeed = 100; // Typing speed in ms
let waitingTime = 4000; // Time to wait after typing and before deleting
let element = document.getElementById("cycling-text");

// Sequentially add letters to the title
function typeText(text, callback) {
  let index = 0;
  element.classList.remove("blinking"); // Disable blinking while typing

  const typingInterval = setInterval(() => {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
    } else {
      clearInterval(typingInterval);
      element.classList.add("blinking");
      setTimeout(callback, waitingTime); // Wait before deleting
    }
  }, typingSpeed);
}

// Sequentially remove letters from the title
function deleteText(callback) {
  let text = element.textContent;
  element.classList.remove("blinking"); // Disable blinking while deleting

  const deletingInterval = setInterval(() => {
    if (text.length > 0) {
      text = text.slice(0, -1);
      element.textContent = text;
    } else {
      clearInterval(deletingInterval);
      element.classList.add("blinking"); // Add blinking after deleting
      setTimeout(callback, 300); // Wait a bit before typing the next string
    }
  }, typingSpeed / 1.3); // Speed up the deletion
}

// In header, switch between "henree" and "Henry Earnest" with a typing animation
function cycleTexts() {
  typeText(texts[currentTextIndex], () => {
    deleteText(() => {
      currentTextIndex = (currentTextIndex + 1) % texts.length; // Cycle through texts
      cycleTexts(); // Repeat the cycle
    });
  });
}

// Make wave-texts wiggle on hover
function applyWaveEffect() {
  // Select all elements with the class 'wave-text'
  const waveTextElements = document.querySelectorAll(".wave-text");

  // Loop through each wave-text element
  waveTextElements.forEach((waveText) => {
    // Get the text content and split it into individual letters, preserving spaces
    const letters = Array.from(waveText.textContent);

    // Clear the original content of the element
    waveText.textContent = "";

    // Wrap each letter (including spaces) in a <span> and append it back to the element
    var factor = 0.05;
    letters.forEach((letter, index) => {
      const span = document.createElement("span");
      span.textContent = letter === " " ? "\u00A0" : letter; // Use non-breaking space for proper rendering

      // Add a delay to each letter to create the wave effect
      span.style.animationDelay = `${index * factor}s`;
      factor -= 0.0001;
      // Append the span to the container
      waveText.appendChild(span);
    });
    var waiting = false;
    // Add hover listener to add the 'wave-play' class
    waveText.addEventListener("mouseenter", () => {
      if (!waiting) {
        waveText.classList.add("wave-play");
      }
    });

    // Add animationend listener to remove the 'wave-play' class after animation finishes
    const spans = waveText.querySelectorAll("span");
    spans.forEach((span, index) => {
      span.addEventListener("animationend", () => {
        waiting = true;
        if (index == spans.length - 1) {
          waveText.classList.remove("wave-play");
          waiting = false;
        }
      });
    });
  });
}


// Add wiggle text animation to list elements
function applyListWordWaveEffect() {
  // Select all elements with the class 'wave-text'
  const waveTextElements = document.querySelectorAll(".word-wave-text");
  const otherElements = document.querySelectorAll(".word-wave-text-list");

  // Combine both NodeLists into one
  const allWaveTextElements = [...waveTextElements, ...otherElements];
  // Loop through each wave-text element
  allWaveTextElements.forEach((waveText) => {
    // Get the text content and split it into words
    const words = waveText.textContent.split(" ");

    // Clear the original content of the element
    waveText.textContent = "";
    var factor = 0.05;
    // Loop through each word
    words.forEach((word, wordIndex) => {
      // Create a span to wrap the entire word
      const wordSpan = document.createElement("span");
      wordSpan.textContent = word; // Set the word text

      // Add a delay to each word to create the wave effect
      wordSpan.style.animationDelay = `${wordIndex * factor}s`; // Adjust delay as needed
      // factor -= 0.001;
      wordSpan.classList.add("word"); // Add a class to identify word spans

      // Append the word span to the container
      waveText.appendChild(wordSpan);

      // Add a space after each word (but not after the last word)
      if (wordIndex < words.length - 1) {
        waveText.appendChild(document.createTextNode("\u00A0")); // Non-breaking space to maintain spacing
      }
    });

    var waiting = false;
    // Add hover listener to add the 'wave-play' class
    waveText.addEventListener("mouseenter", () => {
      if (!waiting) {
        waveText.classList.add("wave-play");
      }
    });

    // Add animationend listener to remove the 'wave-play' class after animation finishes
    const wordSpans = waveText.querySelectorAll("span.word");
    wordSpans.forEach((wordSpan, index) => {
      wordSpan.addEventListener("animationend", () => {
        waiting = true;
        if (index === wordSpans.length - 1) {
          waveText.classList.remove("wave-play");
          // waiting = false;
        }
      });
    });
  });
}

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", applyListWordWaveEffect);

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", applyWaveEffect);

// Start the cycle
cycleTexts();

// Add event listener to track scrolling
window.addEventListener("scroll", checkScrollPosition);

// Initially check scroll position when the page loads
window.addEventListener("load", checkScrollPosition);

// 
document
  .querySelector(".scroll-arrow")
  .addEventListener("click",  scrollToDemoReelSection);

  const video = document.getElementById('demo-reel');
const playButton = document.getElementById('playButton');

window.addEventListener("click", (event) => {
  if (event.target === video && !video.controls) {
    toggleVideo()
  }
});
function toggleVideo() {
  if (video.paused) {
    video.play();
    video.classList.add('playing');
    playButton.hidden = true
  } else {
    video.pause();
    video.classList.remove('playing');
  }
}
// Show the play button if the video is paused
playButton.addEventListener('click', () => {
  toggleVideo();
}
);


video.controls = false; // Start with controls hidden

video.addEventListener("timeupdate", function() {
  if (!video.controls && video.currentTime >= 4) { // After 5 seconds of playback
    video.controls = true; // Show controls
  }
});

document.getElementById("demo-reel").addEventListener("ended", function() {
  this.currentTime = this.duration - 0.1; // Ensures it stays on the last frame
  this.pause(); // Pauses instead of going black
  setTimeout(() => {this.controls = false}, 1);
});

const fontToggleButton = document.getElementById("font-toggle");
fontToggleButton.addEventListener("click", function () {
  document.body.classList.toggle("readable");
  const modalButtons = document.getElementsByClassName("open-modal-btn");
  for (let i = 0; i < modalButtons.length; i++) {
    modalButtons[i].classList.toggle("readable");
  }
  
  fontToggleButton.textContent = 
    fontToggleButton.textContent === "pixel font" ? "easy-to-read font" : "pixel font"
});
 