// 한국렌탈테크 - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      mobileMenuToggle.classList.toggle('active');
    });
  }

  // Header scroll effect
  const header = document.getElementById('site-header');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    lastScrollY = window.scrollY;
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const headerHeight = header.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Close mobile menu if open
        if (navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          mobileMenuToggle.classList.remove('active');
        }
      }
    });
  });

  // Intersection Observer for animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements with data-animate attribute
  document.querySelectorAll('[data-animate]').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
});
