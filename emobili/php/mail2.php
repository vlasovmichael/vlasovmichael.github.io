<?php

$recepient = "storm_uk@mail.ru";
$sitename = "Emobili";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$nomination = trim($_POST["nomination"]);
$price = trim($_POST["price"]);
$adres = trim($_POST["adres"]);
$comment = trim($_POST["comment"]);

$message = "Имя: $name \nНомер Телефона: $phone \nНаименование товара: $nomination \nЦена товара: $price \nАдрес доставки: $adres \nКомментарий: $comment";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");