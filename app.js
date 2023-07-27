const text = 'Hello, World!';
const animatedText = document.getElementById('animated-text');
let input = document.querySelector('#quantity');
const form = document.querySelector('.speed');
let currentIndex = 0;
let timeout;
let animationDuration = input.value * 1000; // Set the total animation duration in milliseconds
let steps = text.length;
let animationDelay = animationDuration / steps;
console.log(animationDelay);
function animateText() {
	animationDelay = animationDuration / steps;
	if (currentIndex >= text.length) {
		currentIndex = 0;
	}
	animatedText.textContent = text.slice(0, currentIndex);
	currentIndex++;
	setTimeout(animateText, animationDelay);
}

// Start the animation

// Set the default animation duration to 1 second
timeout = setTimeout(animateText, animationDelay);
animateText();
input.addEventListener('change', (e) => {
	e.preventDefault();
	animationDuration = e.target.value;
	animationDelay = animationDuration * 1000;
	animateText();
});
