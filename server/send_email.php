<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'mailer/src/Exception.php';
require 'mailer/src/PHPMailer.php';
require 'mailer/src/SMTP.php';

$mail = new PHPMailer(true);

$data = json_decode(file_get_contents('php://input'), true);
$name = filter_var($data['name'] ?? '', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$email = filter_var($data['email'] ?? '', FILTER_VALIDATE_EMAIL);
$phone = filter_var($data['phone'] ?? '', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$message = filter_var($data['message'] ?? '', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$gdpr = filter_var($data['gdpr'] ?? false, FILTER_VALIDATE_BOOLEAN);

if (empty($name) || empty($email) || empty($phone) || empty($message) || !$gdpr) {
    echo 'failed';
    exit;
}

$mailContent = "
    <div style='padding: 16px;'>
        <h1>Nová správa z kontaktného formulára</h1>
        <br>
        <p><strong>Meno:</strong> {$name}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Telefón:</strong> {$phone}</p>
        <p><strong>Správa:</strong> 
            <br>
            {$message}
        </p>
    </div>
";


try {
    $mail->isSMTP();
    $mail->CharSet = 'UTF-8';
    $mail->Host       = 'smtp.m1.websupport.sk';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'info@bikeporadca.sk';
    $mail->Password   = 'KQ96S0p87nMDdoQ/QT';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;

    $mail->setFrom('noreply@bikeporadca.sk', 'BikePoradca Web');
    $mail->addAddress('info@bikeporadca.sk', 'BikePoradca');
    $mail->addReplyTo($email, $name);

    $mail->isHTML(true);
    $mail->Subject = 'Kontaktný formulár - ' . $email;
    
    $mail->Body = $mailContent;
    $mail->AltBody = strip_tags($mailContent);

    $mail->send();
    echo 'success';
} catch (Exception $e) {
    echo "failed";
}
?>