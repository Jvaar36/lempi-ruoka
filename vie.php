<?php

$host = "";
$username = "";
$password = "";
$database = "";

$conn = mysqli_connect($host, $username, $password, $database);

  $nimi = $_POST['nimi'];
  $ruoka = $_POST['ruoka'];


$sql = "INSERT INTO kysely (nimi, ruoka) VALUES ('$nimi', '$ruoka')";

$query = mysqli_query($conn, $sql);

$conn->close();

 ?>
