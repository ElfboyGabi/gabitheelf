const loadingText1 = document.getElementById('loadingText1');
const loadingText2 = document.getElementById('loadingText2');
const loadingText3 = document.getElementById('loadingText3');
const loadingScreen = document.getElementById('loadingScreen');
const mainContent = document.getElementById('mainContent');

// Words to display
const words = ['CREATIVITY', 'ELFY', 'ARTSY'];
let index = 0;

// Function to show loading text
function showLoadingText() {
    if (index < words.length) {
        // Show the current word
        const currentTextElement = [loadingText1, loadingText2, loadingText3][index];
        currentTextElement.textContent = words[index];
        currentTextElement.style.opacity = 0; // Start with hidden text
        currentTextElement.style.transform = 'translateY(20px)'; // Start slightly below

        // Trigger a reflow to apply the initial styles
        void currentTextElement.offsetWidth; // Forces a reflow

        // Fade in and slide up the text
        currentTextElement.style.opacity = 1;
        currentTextElement.style.transform = 'translateY(0)'; // Move to final position

        // Move to the next word after 1 second
        setTimeout(() => {
            index++;
            showLoadingText(); // Show the next word
        }, 1000); // Keep the word on screen for 1 second
    } else {
        setTimeout(fadeOutLoadingScreen, 1000); // Wait a second before fading out
    }
}

// Function to fade out loading screen and redirect
function fadeOutLoadingScreen() {
    loadingScreen.style.opacity = 0; // Fade out loading screen
    setTimeout(() => {
        loadingScreen.style.display = 'none'; // Hide loading screen
        mainContent.style.display = 'block'; // Show main content
        mainContent.style.opacity = 0; // Set initial opacity for fade-in
        // Fade in main content
        setTimeout(() => {
            mainContent.style.opacity = 1; // Fade in main content
        }, 100); // Delay to allow the display change to take effect

        // Redirect to another page after a delay
        setTimeout(() => {
            window.location.href = 'html/login.html'; // Change this to your target URL
        }, 2000); // Wait for 2 seconds before redirecting (adjust as necessary)
    }, 1000); // Wait for fade-out transition to finish
}

// Start the loading screen process
showLoadingText();
