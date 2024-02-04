function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Perform basic form validation
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Simulate sending the form data to a server (in a real application, you'd use AJAX)
    // For demonstration purposes, we'll just show a success message
    document.getElementById("contactForm").style.display = "none";
    document.getElementById("successMessage").style.display = "block";
}
