<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $to = "nagalapuramchakri@gmail.com"; // Replace with your actual email address
    $subject = "New Contact Form Submission";
    $headers = "From: $name <$email>";

    mail($to, $subject, $message, $headers);
    
    // You can add additional logic here, e.g., redirecting to a thank-you page.
    echo "Email sent successfully!";
}
?>