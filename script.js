document.addEventListener('DOMContentLoaded', () => {
  // Set current date in footer
  const el = document.getElementById('current-date');
  if (el) {
    const now = new Date();
    const opts = { year: 'numeric', month: 'long' };
    el.textContent = now.toLocaleDateString(undefined, opts);
  }

  // Hamburger menu toggle for mobile
  const burgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
  burgers.forEach(burger => {
    burger.addEventListener('click', () => {
      const target = burger.dataset.target;
      const navbarMenu = document.getElementById(target);
      
      burger.classList.toggle('is-active');
      navbarMenu.classList.toggle('is-active');
    });
  });

  // Close mobile menu when a link is clicked
  const navbarLinks = document.querySelectorAll('.navbar-menu a');
  navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
      const burgers = document.querySelectorAll('.navbar-burger');
      burgers.forEach(burger => {
        burger.classList.remove('is-active');
      });
      const menus = document.querySelectorAll('.navbar-menu');
      menus.forEach(menu => {
        menu.classList.remove('is-active');
      });
    });
  });

  // Add scroll effect to navbar
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    });
  }
});