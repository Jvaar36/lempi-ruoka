<?php

$host = "";
$username = "";
$password = "";
$database = "";

$conn = mysqli_connect($host, $username, $password, $database);

  $nimi = $_POST['nimi'];
  $palaute = $_POST['palaute'];


$sql = "INSERT INTO palaute (nimi, palaute) VALUES ('$nimi', '$palaute')";

$query = mysqli_query($conn, $sql);

$conn->close();

 ?>
