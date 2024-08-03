// Initialize variables
const errorMessage = document.querySelector(".error-message");
let xSpeed = 2;
let ySpeed = 2;
let xPos = Math.random() * (window.innerWidth - 150);
let yPos = Math.random() * (window.innerHeight - 150);

// Set initial position
errorMessage.style.left = `${xPos}px`;
errorMessage.style.top = `${yPos}px`;

// Function to animate the bounce
function animateBounce() {
  const width = window.innerWidth - errorMessage.offsetWidth;
  const height = window.innerHeight - errorMessage.offsetHeight;

  xPos += xSpeed;
  yPos += ySpeed;

  if (xPos >= width || xPos <= 0) {
    xSpeed *= -1; // Reverse direction
    randomizeColor(); // Change color on bounce
  }
  if (yPos >= height || yPos <= 0) {
    ySpeed *= -1; // Reverse direction
    randomizeColor(); // Change color on bounce
  }

  errorMessage.style.left = `${xPos}px`;
  errorMessage.style.top = `${yPos}px`;

  requestAnimationFrame(animateBounce);
}

// Function to randomize text color
function randomizeColor() {
  const colors = ["#ff4c60", "#42a5f5", "#66bb6a", "#ab47bc"];
  errorMessage.style.color = colors[Math.floor(Math.random() * colors.length)];
  errorMessage.style.textShadow = `0 0 8px ${errorMessage.style.color}, 0 0 16px ${errorMessage.style.color}`;
}

// Start the animation
requestAnimationFrame(animateBounce);
