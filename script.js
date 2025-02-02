const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const fireworksContainer = document.getElementById('fireworks');
const yayMessage = document.getElementById('yayMessage');

// Function to handle the "Yes" action
function handleYes() {
  // Show the "Yay!" message
  yayMessage.classList.remove('hidden');
  yayMessage.classList.add('visible');

  // Create fireworks
  createFireworks();

  // Hide the message and stop fireworks after 4 seconds
  setTimeout(() => {
    yayMessage.classList.remove('visible');
    yayMessage.classList.add('hidden');
    fireworksContainer.innerHTML = ''; // Clear fireworks
  }, 4000);
}

noButton.addEventListener('click', () => {
    // Swap the text of the "No" button to "Yes"
    noButton.textContent = 'Yes';
    noButton.addEventListener('click', handleYes);
    noButton.style.backgroundColor = '#ff6f61';
    noButton.removeEventListener('click', arguments.callee);
  });

// Add event listener to the original "Yes" button
yesButton.addEventListener('click', handleYes);



// // Function to create fireworks
// function createFireworks() {
//   for (let i = 0; i < 100; i++) {
//     const firework = document.createElement('div');
//     firework.classList.add('firework');
//     firework.style.left = `${Math.random() * 100}vw`;
//     firework.style.top = `${Math.random() * 100}vh`;
//     firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
//     fireworksContainer.appendChild(firework);

//     // Remove the firework element after the animation ends
//     firework.addEventListener('animationend', () => {
//       firework.remove();
//     });
//   }
// }

// Function to create fireworks
function createFireworks() {
    const colors = ['#ff0', '#f06', '#0ff', '#f90', '#09f', '#90f']; // More vibrant colors
    const numberOfFireworks = 350; // Increase the number of fireworks
  
    for (let i = 0; i < numberOfFireworks; i++) {
      const firework = document.createElement('div');
      firework.classList.add('firework');
  
      // Randomize position
      firework.style.left = `${Math.random() * 100}vw`;
      firework.style.top = `${Math.random() * 100}vh`;
  
      // Randomize size
      const size = Math.random() * 20 + 5; // Size between 5px and 15px
      firework.style.width = `${size}px`;
      firework.style.height = `${size}px`;
  
      // Randomize color
      firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  
      // Randomize animation duration
      const duration = Math.random() * 2 + 1; // Duration between 1s and 3s
      firework.style.animationDuration = `${duration}s`;
  
      fireworksContainer.appendChild(firework);
  
      // Remove the firework element after the animation ends
      firework.addEventListener('animationend', () => {
        firework.remove();
      });
    }
  }