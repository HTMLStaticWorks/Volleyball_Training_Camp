/* ==========================================================================
   Volleyball Training Camp Website - rtl-toggle.js
   ========================================================================== */

// Immediately executed function to prevent Flash of Unstyled Content (FOUC)
(function () {
  const savedRTL = localStorage.getItem('vbc-rtl') === 'true';
  if (savedRTL) {
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.classList.add('rtl-layout');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.classList.remove('rtl-layout');
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  // Update toggle button text states/active attributes based on current state
  const updateRtlButtonsState = (isRtl) => {
    const rtlBtns = document.querySelectorAll('.rtl-switch-btn');
    rtlBtns.forEach(btn => {
      if (isRtl) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
        btn.setAttribute('title', 'Switch to LTR Layout');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
        btn.setAttribute('title', 'Switch to RTL Layout');
      }
    });
  };

  const initialRtl = document.documentElement.getAttribute('dir') === 'rtl';
  updateRtlButtonsState(initialRtl);

  // Use delegation so it works for cloned/dynamic buttons in the mobile drawer too!
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.rtl-switch-btn');
    if (btn) {
      const isCurrentlyRtl = document.documentElement.getAttribute('dir') === 'rtl';
      const newRtl = !isCurrentlyRtl;
      
      if (newRtl) {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.classList.add('rtl-layout');
        localStorage.setItem('vbc-rtl', 'true');
      } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.classList.remove('rtl-layout');
        localStorage.setItem('vbc-rtl', 'false');
      }
      updateRtlButtonsState(newRtl);
    }
  });
});
