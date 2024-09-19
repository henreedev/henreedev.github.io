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

const texts = ["henreedev", "Henry Earnest"];
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
      setTimeout(callback, 400); // Wait a bit before typing the next string
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

// Start the cycle
cycleTexts();

// Add event listener to track scrolling
window.addEventListener("scroll", checkScrollPosition);

// Initially check scroll position when the page loads
window.addEventListener("load", checkScrollPosition);

document
  .querySelector(".scroll-arrow")
  .addEventListener("click", scrollToGamesSection);
