const gameIcons = document.querySelectorAll(".game-icon");
const gameDetails = document.querySelectorAll(".game-details");

gameIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    selectThisGame(icon);
  });
});

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

function cycleTexts() {
  typeText(texts[currentTextIndex], () => {
    deleteText(() => {
      currentTextIndex = (currentTextIndex + 1) % texts.length; // Cycle through texts
      cycleTexts(); // Repeat the cycle
    });
  });
}

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
    letters.forEach((letter, index) => {
      const span = document.createElement("span");
      span.textContent = letter === " " ? "\u00A0" : letter; // Use non-breaking space for proper rendering

      // Add a delay to each letter to create the wave effect
      span.style.animationDelay = `${index * 0.05}s`;

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

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", applyWaveEffect);

// Start the cycle
cycleTexts();

// Add event listener to track scrolling
window.addEventListener("scroll", checkScrollPosition);

// Initially check scroll position when the page loads
window.addEventListener("load", checkScrollPosition);

document
  .querySelector(".scroll-arrow")
  .addEventListener("click", scrollToGamesSection);
