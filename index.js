//This code only works for the first div it finds with the ID hero, remember that ID's are
//meant to unique within a document...as you found out the hard way. Classes are reuseable, 
//pick what ever works best...

// Select the div with the ID 'hero'
const heroDiv = document.getElementById('hero');

if (heroDiv) {
  // Apply initial CSS styles for animation
  heroDiv.style.opacity = '0'; // Start with opacity 0
  heroDiv.style.transition = 'opacity 10s ease-in-out'; // Animation with delay and ease effect

  // Function to toggle fade in and out
  function toggleFade() {
    if (heroDiv.style.opacity === '0') {
      heroDiv.style.opacity = '1'; // Fade in
    } else {
      heroDiv.style.opacity = '0'; // Fade out
    }
  }

  // Start the loop with a 5.5-second interval
  setInterval(toggleFade, 5500); // 5 seconds for animation, 500ms pause. Half and half.
}

// 
// This code is for the classes, it also loops. Look at the selector and the period.
// 
// Select all divs with the class 'hero'
const heroDivs = document.querySelectorAll('.hero');

heroDivs.forEach(heroDiv => {
  // Apply initial CSS styles for animation
  heroDiv.style.opacity = '0'; // Start with opacity 0
  heroDiv.style.transition = 'opacity 2s ease-in-out'; // Animation with delay and ease effect

  // Function to toggle fade in and out
  function toggleFade() {
    if (heroDiv.style.opacity === '0') {
      heroDiv.style.opacity = '1'; // Fade in
    } else {
      heroDiv.style.opacity = '0'; // Fade out
    }
  }

  // Start the loop with a 2.5-second interval for each element
  setInterval(toggleFade, 2500); // 2 seconds for animation, 500ms pause
});
