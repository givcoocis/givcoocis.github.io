// Get the form and input elements
const form = document.getElementById('form');
const passwordInput = document.getElementById('trap');

// Add submit event listener to the form
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission
    
    const passwordValue = passwordInput.value;
    const formWrapper = form.parentElement;

    if (passwordValue === 'iamkapput') {
        // First show success feedback (optional)
        formWrapper.style.backgroundColor = '#4CAF50';
        
        // Use setTimeout to ensure the redirect happens after any animations
        setTimeout(() => {
            // Use different methods of redirection to ensure it works
            try {
                // Method 1: window.location.href
                window.location.href = 'page2.html';
            } catch(e) {
                try {
                    // Method 2: window.location.replace
                    window.location.replace('page2.html');
                } catch(e) {
                    try {
                        // Method 3: window.location direct assignment
                        window.location = 'page2.html';
                    } catch(e) {
                        // If all else fails, try a direct href change
                        document.location.href = 'page2.html';
                    }
                }
            }
        }, 100); // Small delay to allow for any visual feedback

    } else {
        // Incorrect password handling
        formWrapper.classList.add('flash-error');
        
        // Remove the flash class after animation completes
        setTimeout(() => {
            formWrapper.classList.remove('flash-error');
        }, 500);

        // Clear the password field
        passwordInput.value = '';
    }
});

// Remove flash effect when typing
passwordInput.addEventListener('input', () => {
    const formWrapper = form.parentElement;
    formWrapper.classList.remove('flash-error');
});