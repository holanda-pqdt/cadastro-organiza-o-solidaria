// Dark Mode
const toggleButton = document.getElementById('toggle-dark');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleButton.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Menu Hamburger (exemplo simples)
const menuButton = document.getElementById('menu-btn');
const navMenu = document.querySelector('nav ul');
menuButton.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});
