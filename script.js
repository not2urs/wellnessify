// Wait for the DOM to load fully
document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const welcomePopup = document.getElementById('welcomePopup');
    const closePopup = document.getElementById('closePopup');
    const enterButton = document.getElementById('enterButton');

    // Display the popup when the page loads
    welcomePopup.style.display = 'flex';

    // Close the popup when the close button is clicked
    closePopup.addEventListener('click', function() {
        welcomePopup.style.display = 'none';
    });

    // Close the popup when the "Enter Site" button is clicked
    enterButton.addEventListener('click', function() {
        welcomePopup.style.display = 'none';
    });
});