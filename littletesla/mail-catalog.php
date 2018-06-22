<?php

$recepient = "epistorm@gmail.com";
$sitename = "E_Mobile";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$text = trim($_POST["textarea"]);
$message = "Имя: $name \nТелефон: $phone \nEmail: $email \nСообщение: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");