// JavaScript Document
console.log("hi");

// Zoek het menu-toggle-element en het nav-element
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('menu-list');

// Voeg een klikgebeurtenis toe aan het menu-toggle-element
menuToggle.addEventListener('click', () => {
  // Schakel de zichtbaarheid van het navigatiemenu in/uit
  navMenu.classList.toggle('show-menu');
});

// Voeg een klikgebeurtenis toe aan het menu-overlay-element om het menu te sluiten wanneer er buiten wordt geklikt
const menuOverlay = document.getElementById('menu-overlay');
menuOverlay.addEventListener('click', () => {
  navMenu.classList.remove('show-menu');
});