function submitForm() {
    const contactForm = document.getElementById('contactForm');
    const confirmationMessage = document.getElementById('confirmation');

    // Validate the form (you can add more validation logic)
    if (contactForm.checkValidity()) {
        // Disable the form fields
        Array.from(contactForm.elements).forEach((element) => {
            element.disabled = true;
        });

        // Display the confirmation message
        confirmationMessage.style.display = 'block';
    } else {
        // If the form is not valid, show an error or handle accordingly
        alert('Please fill in all required fields.');
    }
}
