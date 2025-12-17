/* =================================================
   CODE CORTEX – MAIN JS
   Extracted from reference page
   Handles:
   - AOS
   - Loading bar
   - Hero text animation
   - Mobile navigation
   - Theme toggle
   - Header hide/show on scroll
================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- AOS INIT ---------- */
  if (typeof AOS !== 'undefined') {
    AOS.init({
      once: true,
      offset: 50,
      duration: 800,
      delay: 100,
      throttleDelay: 99
    });
  }

  /* ---------- LOADING BAR ---------- */
  const loadingBar = document.getElementById('loadingBar');
  if (loadingBar) {
    let width = 0;
    const interval = setInterval(() => {
      if (width >= 100) {
        clearInterval(interval);
        loadingBar.style.opacity = '0';
        setTimeout(() => loadingBar.remove(), 300);
      } else {
        width += 25;
        loadingBar.style.width = width + '%';
      }
    }, 200);
  }

  /* ---------- HERO TEXT ROTATION ---------- */
  const animatedText = document.getElementById('animatedText');
  if (animatedText) {
    const lines = [
      "Your Strategic Development Partner for USA & UAE Markets",
      "Elite Engineering Talent at 60% Cost Savings",
      "40% Faster Delivery with Dedicated Teams",
      "Trusted by Companies Worldwide"
    ];
    let index = 0;

    setInterval(() => {
      animatedText.style.opacity = '0';
      setTimeout(() => {
        animatedText.textContent = lines[index];
        animatedText.style.opacity = '1';
        index = (index + 1) % lines.length;
      }, 500);
    }, 4000);
  }

  /* ---------- MOBILE NAVIGATION ---------- */
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navMenu.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
      if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('show');
      }
    });

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('show');
      });
    });
  }

  /* ---------- THEME TOGGLE ---------- */
  const themeToggle = document.getElementById('themeToggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');

  document.body.setAttribute('data-theme', savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.body.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.body.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  /* ---------- HEADER HIDE / SHOW ON SCROLL ---------- */
  const header = document.getElementById('mainHeader');
  let lastScrollY = window.scrollY;

  if (header) {
    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY && currentScroll > 100) {
        header.style.transform = 'translateY(-100%)';
      } else {
        header.style.transform = 'translateY(0)';
      }

      lastScrollY = currentScroll;
    });
  }

});

/* ---------- GLOBAL ERROR LOGGING ---------- */
window.addEventListener('error', (e) => {
  console.error('Runtime error:', e.error || e.message);
});
