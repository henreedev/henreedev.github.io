

////////////////////////////////////////////////////////////////////
/////////////////////Creating HTML contents/////////////////////////
////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", () => {
  const games = [
    {
      name: "Scale Mail",
      icon: "assets/image/scalemail-icon.png",
      bgImage: "assets/image/scalemail-splash.png",
      created: "August 2024",
      status: "Preparing for post-jam release",
      genre: "Puzzle",
      role: "Lead Programmer",
      teamSize: 7,
      gameEngine: "Godot",
      video: "https://www.youtube.com/embed/9Zev6GguArY?mute=1&controls=0&modestbranding=1&rel=0&playsinline=1&fs=0",
      githubLink: "",
    },
    {
      name: "Suntower",
      icon: "assets/image/suntower-icon.png",
      bgImage: "assets/image/suntower-splash.png",
      created: "March 2023",
      status: "Post-jam playtest released",
      genre: "Foddian Rage Platformer",
      role: "Lead Programmer, Artist",
      teamSize: 2,
      gameEngine: "Godot",
      video: "https://www.youtube.com/watch?v=Aax1SEZESts",
      githubLink: "https://github.com/henreedev/suntower",
    },
    {
      name: "Nullify Light",
      icon: "assets/image/nullify-icon.png",
      bgImage: "assets/image/nullify-splash.png",
      created: "November 2023",
      status: "Completed for game jam",
      genre: "Action Puzzle",
      role: "Lead Programmer",
      teamSize: 3,
      gameEngine: "Godot",
      video: "https://www.youtube.com/watch?v=Aax1SEZESts",
      githubLink: "",
    },
    {
      name: "Kanjou Meisou",
      icon: "assets/image/kanjoumeisou-icon.png",
      bgImage: "assets/image/kanjoumeisou-splash.png",
      created: "May 2024",
      status: "Prototype Released",
      genre: "Experimental Rhythm Game",
      role: "Programmer, Designer",
      teamSize: 1,
      gameEngine: "Godot",
      video: "https://www.youtube.com/watch?v=Aax1SEZESts",
      githubLink: "",
    },
    {
      name: "Final Farm",
      icon: "assets/image/finalfarm-icon.png",
      bgImage: "assets/image/finalfarm-splash.png",
      created: "November 2023",
      status: "Game Jam Entry",
      genre: "Survival Farming",
      role: "Programmer, Designer",
      teamSize: 4,
      gameEngine: "Godot",
      video: "https://www.youtube.com/watch?v=Aax1SEZESts",
      githubLink: "",
    },
    // {
    //   name: "Inkbound",
    //   icon: "assets/image/inkbound-icon.png",
    //   bgImage: "assets/image/inkbound-splash.png",
    //   created: "June 2023",
    //   status: "In development",
    //   genre: "Narrative Adventure",
    //   role: "Lead Programmer",
    //   teamSize: 15,
    //   gameEngine: "Unity"
    // },
    // {
    //   name: "3D Game Engine",
    //   icon: "assets/image/3dengine-icon.png",
    //   bgImage: "assets/image/3dengine-splash.png",
    //   created: "May 2024",
    //   status: "Completed as a solo project",
    //   genre: "Engine Development",
    //   role: "Solo Programmer",
    //   teamSize: 1,
    //   gameEngine: "Custom C++ Engine"
    // },
    // {
    //   name: "Exponential Climb",
    //   icon: "assets/image/exponentialclimb-icon.png",
    //   bgImage: "assets/image/exponentialclimb-splash.png",
    //   created: "Ongoing",
    //   status: "In early development",
    //   genre: "Physics Platformer",
    //   role: "Programmer, Designer",
    //   teamSize: 2,
    //   gameEngine: "Godot"
    // },
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
        <p>Created: <span class="d">${game.created}</span></p>
        <p>Status: <span class="d">${game.status}</span></p>
        <p>Genre: <span class="d">${game.genre}</span></p>
        <p>Role: <span class="d">${game.role}</span></p>
        <p>Team Size: <span class="d">${game.teamSize}</span></p>
        <p>Game Engine: <span class="d">${game.gameEngine}</span></p>
      </div>
      <div class="icons-container">
        <a
          href="https://legoliomanikas.itch.io/scale-mail"
          target="_blank"
          class="icon-link"
        >
          <img
            src="assets/image/itchio-icon.png"
            alt="Itch.io"
            class="icon-image"
          />
          <span class="tooltip"
            >Play ${game.name}</span
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
        <h2>${game.name}</h2>
        <h2>${game.name}</h2>
        <h2>${game.name}</h2>
        <h2>${game.name}</h2>
        <h2>${game.name}</h2>
        <h2>${game.name}</h2>
        <h2>${game.name}</h2>
        <h2>${game.name}</h2>
        <h2>${game.name}</h2>
        <h2>${game.name}</h2>
        <h2>${game.name}</h2>
        <h2>${game.name}</h2>
        <h2>${game.name}</h2>
        <h2>${game.name}</h2>
        <h2>${game.name}</h2>
        <h2>${game.name}</h2>
        <h2>${game.name}</h2>
        <h2>${game.name}</h2>
        <h2>${game.name}</h2>
        <h2>${game.name}</h2>
        <h2>${game.name}</h2>
        <h2>${game.name}</h2>

        <iframe class="modal-video" src=${game.video} frameborder="0" allowfullscreen  modestbranding=1 showinfo=0 color=red></iframe>
        <p>${game.description}</p>
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
  .addEventListener("click", scrollToGamesSection);

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
  console.log("button was clicked")
  toggleVideo();
}
);


video.controls = false; // Start with controls hidden

video.addEventListener("timeupdate", function() {
  if (!video.controls && video.currentTime >= 4) { // After 5 seconds of playback
    video.controls = true; // Show controls
  }
});

