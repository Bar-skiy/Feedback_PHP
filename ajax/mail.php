<?php
$email = $_POST['email'];
$name = $_POST['name'];
$phone = $_POST['phone'];
$mess = $_POST['message'];
$message = 'Name: '.$name.'<br>'.'Tel: '.$phone.'<br>'.'Message: '.$mess;
$subject = "=?utf-8?B?".base64_encode("Website message")."?=";
$headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";

$success = mail("20001975@bk.ru", $subject, $message, $headers);
echo $success;
