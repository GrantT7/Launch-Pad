<!-- This is the PHP code that handles the contact form info, and sends it to a desired location -->

<?php
$visitor_email = $_POST['email'];

/* this email should be an account linked to your host website, such as contact@(domain), info@(domain), or noreply@(domain) */
$email_from = 'gatyler2015@yahoo.com';

$email_subject = 'Newsletter Signup';

$email_body = 'User Email: $visitor_email.\n'.
             

/* this is the email that the contact form will be sent to */
$email_to = 'gatyler2015@yahoo.com';

$headers = 'From: $email_from \r\n';

$reply_to .= 'Reply To: $visitor-email \r\n';

mail($to,$email_subject,$email_body,$headers);

header('Location: contact.html');

?>
