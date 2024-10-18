// JavaScript for form submission and any other interactive functionality
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    alert('Thank you for your message! We will get back to you soon.');
    this.reset(); // Reset the form fields
});
