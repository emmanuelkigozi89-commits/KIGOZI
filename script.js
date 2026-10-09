// Handles mobile navigation panel expanding and collapse events
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});
