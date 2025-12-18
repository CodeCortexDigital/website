document.addEventListener("DOMContentLoaded", () => {

  // Wait until header is injected
  const waitForHeader = setInterval(() => {
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");

    if (navToggle && navMenu) {
      clearInterval(waitForHeader);

      // Toggle menu
      navToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        navMenu.classList.toggle("show");

        const expanded =
          navToggle.getAttribute("aria-expanded") === "true" || false;
        navToggle.setAttribute("aria-expanded", !expanded);
      });

      // Close menu on link click
      navMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          navMenu.classList.remove("show");
          navToggle.setAttribute("aria-expanded", "false");
        });
      });

      // Close menu when clicking outside
      document.addEventListener("click", (e) => {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
          navMenu.classList.remove("show");
          navToggle.setAttribute("aria-expanded", "false");
        }
      });
    }
  }, 50);

});
