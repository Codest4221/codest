<?php
if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $subject = $_POST['email'];
    $mailFrom = $_POST['subject'];
    $message = $_POST['message'];

    $mailTo = "pinartalas@hotmail.com.tr";
    $headers = "From: ".$mailFrom;
    $txt = " You have received an e-mail from".$name.".\n\n".$message;



    mail($mailTo, $subject, $txt, $header);
    header("Location: https://codest4221.github.io/codest/contact.html");
}

?>

