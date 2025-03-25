// form section start
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents form from actually submitting
        alert("Your message has been submitted successfully!");
        this.reset(); // Clears the form fields after submission

    });
});
// form section end