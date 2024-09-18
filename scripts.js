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

    // Remove active class from currently visible game
    const currentActive = document.querySelector(".game-details.active");
    if (currentActive) {
      currentActive.classList.add("fade-out");
      currentActive.classList.remove("active");

      // After fade-out, hide the previous game
      setTimeout(() => {
        currentActive.classList.remove("fade-out");
      }, 500); // Match with CSS transition time
    }

    // Activate new game details
    newActive.classList.remove("fade-out");
    newActive.classList.add("active");
  } else {
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
}

function scrollToGamesSection() {
  const gamesSection = document.querySelector(".games-section");
  const sectionTop = gamesSection.offsetTop + 1;

  window.scrollTo({
    top: sectionTop, // Scroll to the top of the games section
    behavior: "smooth", // Smooth scrolling effect
  });
}

var atGamesHeight = false;

function checkScrollPosition() {
  if (atGamesHeight) {
    selectThisGame(null, false); // Deselect if scrolling away
  }
  const gamesSection = document.querySelector(".games-section");
  const gamesSectionHeight =
    gamesSection.offsetTop + gamesSection.offsetHeight + 1;
  const currentScroll = Math.floor(window.scrollY + window.innerHeight);
  if (currentScroll == gamesSectionHeight && !atGamesHeight) {
    setTimeout(() => {
      atGamesHeight = true;
    }, 50);
  } else if (currentScroll != gamesSectionHeight) {
    atGamesHeight = false;
  }
  console.log(atGamesHeight);
}

// Add event listener to track scrolling
window.addEventListener("scroll", checkScrollPosition);

// Initially check scroll position when the page loads
window.addEventListener("load", checkScrollPosition);
