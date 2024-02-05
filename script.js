// portfolio.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Assuming you want to send the form data to a PHP script for processing
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("message", message);

        // Use XMLHttpRequest or Fetch API for making an AJAX request
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "send_email.php", true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                // Handle the response from the server if needed
                console.log(xhr.responseText);
                // Optionally, you can show a success message or redirect the user
                alert("Message sent successfully!");
            }
        };
        xhr.send(formData);

        // You can also reset the form after submission
        form.reset();
    });
});