// scripts.js

// Log a welcome message to ensure the script is connected
console.log("Welcome to GrahamBar Menu Page!");

// Add interactivity: Highlight menu items on click
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove active class from all items
    menuItems.forEach(i => i.classList.remove('active'));

    // Add active class to the clicked item
    item.classList.add('active');

    // Log which item was clicked (for debugging or future functionality)
    console.log(`${item.querySelector('h2').textContent} clicked!`);
  });
});

// Add a "back to top" button functionality
const backToTopButton = document.createElement('button');
backToTopButton.textContent = 'Back to Top';
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Show the button only when the user scrolls down
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});