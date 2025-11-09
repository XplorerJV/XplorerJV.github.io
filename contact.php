<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "automation142@gmail.com";
    $subject = "New message from portfolio website";
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";

    if(mail($to, $subject, $body)){
        echo "<script>alert('Message Sent Successfully!'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Failed to send message. Try again later.'); window.location.href='index.html';</script>";
    }
}
?>
