<?php
$wine = $_POST["wine"];
$email = $_POST["mail"];

$servername = "localhost";  //ipv4位址
$username = "root";
$password = "a230892242";
$dbname = "final proj";

$conn = new mysqli($servername, $username, $password, $dbname);
$conn->query("SET NAMES 'utf8'");
$sql = "INSERT INTO  `hw4` (`wine`,`email`) VALUE ('$wine','$email')";
$conn->query($sql);
$conn->close();

if ($conn) {
    print("$wine<br>");  //print VOC format
    header("Location: http://127.0.0.1:4030/web final proj/index1.html");
    die();
} else {
    '<h1 style="color: white;">ERROR</h1>';
}
?>