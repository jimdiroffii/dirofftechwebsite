document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    const apiUrl = contactForm.dataset.apiUrl;

    // Helper function to show an error message
    const showError = (field, message) => {
        const errorContainer = field.parentElement.querySelector('.error-message');
        errorContainer.textContent = message;
    };

    // Helper function to clear an error message
    const clearError = (field) => {
        const errorContainer = field.parentElement.querySelector('.error-message');
        errorContainer.textContent = '';
    };

    // Function to validate the entire form
    const validateForm = () => {
        let isValid = true;
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        clearError(name);
        clearError(email);
        clearError(message);

        // Name validation
        if (name.value.trim() === '') {
            showError(name, 'Name is required.');
            isValid = false;
        } else if (name.value.length > 255) {
					showError(name, 'Please enter a valid name within 255 characters.')
				}

        // Email validation
        // This ridiculously complicated regex attempts to validate a RFC 5322
				// compliant email address. This is not the way. 
				// 
				// TODO: Email validation should use a confirmation email
				//
				// Credit: @bortzmeyer - https://stackoverflow.com/a/201378
				const emailPattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        if (email.value.trim() === '') {
            showError(email, 'Email is required.');
            isValid = false;
        } else if (email.value.length > 255 || !emailPattern.test(email.value)) {
            showError(email, 'Please enter a valid email address.');
            isValid = false;
        }

        // Message validation
        if (message.value.trim() === '') {
            showError(message, 'Message is required.');
            isValid = false;
        } else if (message.value.length > 1000) {
					showError(message, 'Please keep message length within 1000 characters.')
				}

        return isValid;
    };

    // Listen for form submission
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Stop default submission

        if (!validateForm()) {
            formStatus.textContent = 'Please correct the errors above.';
            return; // Stop if validation fails
        }

        formStatus.textContent = 'Sending...';

        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            message: document.getElementById('message').value.trim(),
            fax_number: document.getElementById('fax_number').value // Honeypot
        };

        // Send data to the API
        fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
        .then(response => {
            if (!response.ok) {
                // Handle non-2xx responses from the API
                throw new Error(`Server responded with ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            formStatus.textContent = data.message;
            if (data.message && data.message.toLowerCase().includes("thank you")) {
                contactForm.reset();
                // Clear any lingering error messages on success
                document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            formStatus.textContent = 'An error occurred. Please try again later.';
        });
    });

    // Bonus: Clear errors as the user types
    ['name', 'email', 'message'].forEach(id => {
        const field = document.getElementById(id);
        field.addEventListener('input', () => clearError(field));
    });
});