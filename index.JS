// JavaScript code for form submission
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Get form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    // Send form data to server for processing
    // Example: you can use AJAX to send form data to a backend server for processing
    // and display a success message upon successful submission
    // Here's an example using Fetch API:
    fetch('https://example.com/contact', {
        method: 'POST',
        body: JSON.stringify({name: name, email: email, message: message}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(function(response) {
        if (response.ok) {
            // Show success message
            alert('Thank you for your message. We will get back to you shortly!');
        } else {
            // Show error message
            alert('Failed to submit form. Please try again later.');
        }
    })
    .catch(function(error) {
        // Show error message
        alert('Failed to submit form. Please try again later.');
    });
});
