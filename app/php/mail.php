<?php

//Get variables from HTML form
$name = $_POST['name'];
$lastName = $_POST['lastName'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];


$to = 'jerm423@gmail.com';

$subject = "Solicitud de Información - JDK";

$headers = "From: " .$name. " " .$lastName. "\r\n";
$headers .= "Reply-To: " .$email. "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

$message = '<html><body>';
$message .= '<img src="../img/jdk.png" alt="Logo de JDK Consultores del Este SA" />';
$message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
$message .= "<tr style='background: #eee;'><td><strong>Nombre:</strong> </td><td>" .$name. "</td></tr>";
$message .= "<tr><td><strong>Apellidos:</strong> </td><td>" .$lastName. "</td></tr>";
$message .= "<tr><td><strong>Número de Teléfono:</strong> </td><td>" .$phone. "</td></tr>";
$message .= "<tr><td><strong>Correo Electrónico:</strong> </td><td>" .$email. "</td></tr>";
$message .= "<tr><td><strong>Cuerpo de la solicitud:</strong> </td><td>" .$message. "</td></tr>";
$message .= "</table>";
$message .= "</body></html>";

//Send email to JDK destination
$success = mail($to, $subject, $message, $headers);
//Send copy of the submission to the costumer.
$success = mail($email, $subject, $message, $headers);

if ($success){
   echo "success";
}else{
    echo "invalid";
}

?>
