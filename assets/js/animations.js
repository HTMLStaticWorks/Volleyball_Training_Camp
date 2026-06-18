/* ==========================================================================
   Volleyball Training Camp Website - animations.js
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Check if GSAP is available
  if (typeof gsap === 'undefined') {
    console.warn('GSAP is not loaded. Falling back to CSS transitions.');
    
    // Simple CSS Fallback using IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.gsap-reveal').forEach(el => observer.observe(el));
    return;
  }

  // Register ScrollTrigger plugin if available
  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  // 1. Reveal Animations for Sections and Text Headers
  document.querySelectorAll('.gsap-reveal').forEach((element) => {
    gsap.fromTo(element, 
      { 
        opacity: 0, 
        y: 40 
      }, 
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      }
    );
  });

  // 2. Staggered Reveals for Program & Coach Cards
  const cardGrids = document.querySelectorAll('.gsap-stagger-grid');
  cardGrids.forEach((grid) => {
    const cards = grid.querySelectorAll('.program-card, .coach-card, .gallery-grid-item, .blog-card, .stat-item, .glass-card');
    if (cards.length > 0) {
      gsap.fromTo(cards,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: grid,
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        }
      );
    }
  });

  // 3. Stat Counter Animation
  const stats = document.querySelectorAll('.stat-number');
  stats.forEach((stat) => {
    const targetVal = parseInt(stat.getAttribute('data-target'), 10) || 0;
    const isPercentage = stat.innerText.includes('%');
    const isPlus = stat.innerText.includes('+');
    
    let counterObj = { val: 0 };
    
    gsap.to(counterObj, {
      val: targetVal,
      duration: 2,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: stat,
        start: 'top 90%',
        toggleActions: 'play none none none'
      },
      onUpdate: () => {
        let suffix = '';
        if (isPercentage) suffix = '%';
        else if (isPlus) suffix = '+';
        stat.innerText = Math.floor(counterObj.val) + suffix;
      }
    });
  });

  // 4. Hero Section Interactive Entrance Elements
  if (document.querySelector('.hero-content-wrapper')) {
    const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
    const heroTimeline = gsap.timeline();
    heroTimeline
      .from('.hero-subtitle', { opacity: 0, x: isRtl ? 30 : -30, duration: 0.6, ease: 'power2.out' })
      .from('.hero-title', { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' }, '-=0.4')
      .from('.hero-desc', { opacity: 0, y: 20, duration: 0.6, ease: 'power2.out' }, '-=0.4')
      .from('.hero-actions .btn-custom', { opacity: 0, y: 15, stagger: 0.15, duration: 0.5, ease: 'power2.out' }, '-=0.3');
  }

});
