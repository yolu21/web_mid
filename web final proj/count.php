<?php
$wine = $_POST["wine"];

$servername = "localhost";  //ipv4位址
$username = "root";
$password = "a230892242";
$dbname = "final proj";

$conn = new mysqli($servername, $username, $password, $dbname);
$conn->query("SET NAMES 'utf8'");
$sql = "SELECT COUNT(*) FROM `hw4` WHERE `wine`='$wine'";
$result = $conn->query($sql);
$conn->close();

if ($conn) {
    print("$wine".": ".$result->fetch_array()['COUNT(*)']."<br>");
    die();
} else {
    '<h1 style="color: white;">ERROR</h1>';
}
?>