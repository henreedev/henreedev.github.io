const gameIcons = document.querySelectorAll(".game-icon");
const gameDetails = document.querySelectorAll(".game-details");

gameIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    scrollToGamesSection();

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
  });
});

function scrollToGamesSection() {
  const gamesSection = document.querySelector(".games-section");
  const sectionTop = gamesSection.offsetTop + 1;

  window.scrollTo({
    top: sectionTop, // Scroll to the top of the games section
    behavior: "smooth", // Smooth scrolling effect
  });
}

var hidingScroll = false;

function checkScrollPosition() {
  console.log("scrolling");
  const gamesSection = document.querySelector(".games-section");
  const gamesSectionHeight =
    gamesSection.offsetTop + gamesSection.offsetHeight + 1;
  const currentScroll = Math.floor(window.scrollY + window.innerHeight);

  if (currentScroll == gamesSectionHeight && !hidingScroll) {
    hideScrollbar();
  } else {
    showScrollbar();
  }
  console.log(currentScroll, gamesSectionHeight);
}

function hideScrollbar() {
  document.body.classList.add("hide-scrollbar"); // Hide the scrollbar
  hidingScroll = true;
}

function showScrollbar() {
  document.body.classList.remove("hide-scrollbar"); // Show the scrollbar
  hidingScroll = false;
}

// Add event listener to track scrolling
window.addEventListener("scroll", checkScrollPosition);

// Initially check scroll position when the page loads
window.addEventListener("load", checkScrollPosition);
