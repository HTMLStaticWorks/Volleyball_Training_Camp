/* ==========================================================================
   Volleyball Training Camp Website - theme-toggle.js
   ========================================================================== */

// Immediately executed function to prevent Flash of Unstyled Content (FOUC)
(function () {
  const savedTheme = localStorage.getItem('vbc-theme') || 'dark'; // Dark mode is primary experience
  document.documentElement.setAttribute('data-theme', savedTheme);
})();

document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtns = document.querySelectorAll('.theme-switch-btn');
  
  // Update toggler icons based on current theme state
  const updateToggleIcons = (currentTheme) => {
    themeToggleBtns.forEach(btn => {
      if (currentTheme === 'dark') {
        btn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
          </svg>
        `;
        btn.setAttribute('title', 'Switch to Light Mode');
      } else {
        btn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        `;
        btn.setAttribute('title', 'Switch to Dark Mode');
      }
    });
  };

  const initialTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  updateToggleIcons(initialTheme);

  // Use delegation so it works for cloned/dynamic buttons in the mobile drawer too!
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.theme-switch-btn');
    if (btn) {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('vbc-theme', newTheme);
      updateToggleIcons(newTheme);
    }
  });
});
