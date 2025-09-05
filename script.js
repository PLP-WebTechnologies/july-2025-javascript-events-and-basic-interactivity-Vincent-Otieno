// --- Event Handling for Buttons and Inputs ---
// 1. Button Interaction
const magicButton = document.getElementById('magicButton');

magicButton.addEventListener('click', () => {
    // A simple interactive feature: changing button text on click
    if (magicButton.textContent === 'Click Me') {
        magicButton.textContent = 'You Did It!';
    } else {
        magicButton.textContent = 'Click Me';
    }
});

// 2. Text Changer
const textInput = document.getElementById('textInput');
textInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const value = textInput.value;
        if (value.trim() !== '') {
            // Another interactive feature: alert with the typed text
            alert(`You typed: ${value}`);
            textInput.value = ''; // Clear the input
        }
    }
});

// --- Custom Form Validation ---
const signupForm = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

signupForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Stop the form from submitting normally

    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll('.error').forEach(span => span.textContent = '');

    // Validate Name: must not be empty
    if (nameInput.value.trim() === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        isValid = false;
    }

    // Validate Email: basic format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // Validate Password: must be at least 6 characters
    if (passwordInput.value.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        signupForm.reset(); // Clear the form
    }
});