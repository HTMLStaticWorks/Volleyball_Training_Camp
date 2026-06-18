/* ==========================================================================
   Volleyball Training Camp Website - main.js
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Sticky Navigation Scroll Effect
  const header = document.querySelector('.site-header');
  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Check initial state

  // 2. Mobile Drawer Navigation Toggle
  const mobileMenuToggle = document.querySelector('.mobile-nav-toggle');
  const mobileDrawer = document.createElement('div');
  mobileDrawer.className = 'mobile-drawer';
  
  // Backdrop element
  const mobileBackdrop = document.createElement('div');
  mobileBackdrop.className = 'mobile-drawer-backdrop';
  document.body.appendChild(mobileBackdrop);
  document.body.appendChild(mobileDrawer);

  // Read nav-links from header to clone to mobile drawer
  const logoText = document.querySelector('.logo-link').innerHTML;
  const navLinksHTML = document.querySelector('.nav-links').innerHTML;
  const navActionsHTML = document.querySelector('.nav-actions').innerHTML;

  mobileDrawer.innerHTML = `
    <div class="mobile-drawer-header">
      <a href="index.html" class="logo-link">${logoText}</a>
      <button class="mobile-close-btn">&times;</button>
    </div>
    <ul class="mobile-nav-links">
      ${navLinksHTML}
    </ul>
    <div class="mobile-nav-actions" style="display: flex; gap: 15px; flex-direction: column;">
      ${navActionsHTML}
    </div>
  `;

  // Fix nested dropdown lists in the drawer for responsive navigation
  const drawerDropdownItems = mobileDrawer.querySelectorAll('.nav-item');
  drawerDropdownItems.forEach(item => {
    const dropdown = item.querySelector('.nav-dropdown');
    if (dropdown) {
      // Add toggling trigger
      const link = item.querySelector('.nav-link');
      link.addEventListener('click', (e) => {
        if (window.innerWidth <= 1024) {
          e.preventDefault();
          dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
          dropdown.style.position = 'relative';
          dropdown.style.boxShadow = 'none';
          dropdown.style.border = 'none';
          dropdown.style.left = '0';
          dropdown.style.paddingLeft = '15px';
        }
      });
    }
  });

  const openDrawer = () => {
    mobileDrawer.classList.add('open');
    mobileBackdrop.classList.add('show');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    mobileDrawer.classList.remove('open');
    mobileBackdrop.classList.remove('show');
    document.body.style.overflow = 'auto';
  };

  mobileMenuToggle.addEventListener('click', openDrawer);
  mobileDrawer.querySelector('.mobile-close-btn').addEventListener('click', closeDrawer);
  mobileBackdrop.addEventListener('click', closeDrawer);

  // 3. Active Nav Highlighting
  const currentPath = window.location.pathname.split("/").pop();
  const allNavLinks = document.querySelectorAll('.nav-link, .dropdown-link, .mobile-nav-link');
  
  allNavLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('active');
      
      // If inside dropdown, make parent active
      const parentDropdown = link.closest('.nav-dropdown');
      if (parentDropdown) {
        const parentLink = parentDropdown.previousElementSibling;
        if (parentLink) parentLink.classList.add('active');
      }
    }
  });

  // 4. FAQ Accordion Logic
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    const body = item.querySelector('.faq-body');
    
    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other items
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherBody = otherItem.querySelector('.faq-body');
        if (otherBody) otherBody.style.display = 'none';
      });

      if (!isActive) {
        item.classList.add('active');
        body.style.display = 'block';
      }
    });
  });

  // 5. Testimonial/Success Stories Slide Controller
  const testimonials = document.querySelectorAll('.testimonial-slide');
  if (testimonials.length > 1) {
    let currentSlide = 0;
    
    const showSlide = (index) => {
      testimonials.forEach((slide, idx) => {
        slide.style.display = idx === index ? 'block' : 'none';
      });
    };
    
    // Testimonial slides container must have navigation buttons if exist
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    
    if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
        showSlide(currentSlide);
      });
      nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % testimonials.length;
        showSlide(currentSlide);
      });
    }
    
    // Auto slider
    setInterval(() => {
      currentSlide = (currentSlide + 1) % testimonials.length;
      showSlide(currentSlide);
    }, 6000);
    
    showSlide(currentSlide);
  }

  // 6. Generic Form Validation Feedback
  const formSubmits = document.querySelectorAll('form');
  formSubmits.forEach(form => {
    form.addEventListener('submit', (e) => {
      const isNewsletter = form.classList.contains('newsletter-form');
      if (isNewsletter) {
        e.preventDefault();
        const input = form.querySelector('input');
        if (input && input.value.trim() !== '') {
          alert('Thank you for subscribing to our recruiting and camp updates newsletter!');
          input.value = '';
        }
        return;
      }
      
      // Allow custom triggers or normal submit, but do client check UI only
      const emailField = form.querySelector('input[type="email"]');
      const nameField = form.querySelector('input[placeholder*="Name"]');
      const passField = form.querySelector('input[type="password"]');
      
      if (emailField && emailField.value.trim() === '') {
        e.preventDefault();
        alert('Please enter a valid email address.');
      } else if (nameField && nameField.value.trim() === '') {
        e.preventDefault();
        alert('Please complete the name fields.');
      } else if (passField && passField.value.trim() === '') {
        e.preventDefault();
        alert('Please specify password parameters.');
      }
    });
  });

});
