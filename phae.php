<?php

$host = "";
$username = "";
$password = "";
$database = "";

$conn = mysqli_connect($host, $username, $password, $database);


$sql = "SELECT * FROM palaute ORDER BY rivinro DESC";

$query = mysqli_query($conn, $sql);

if ($query->num_rows > 0) {

            while ($row = $query->fetch_assoc()) {

			     $rivit[] = $row;

            }


echo "<hr/>";

foreach($rivit as $i => $rivi) {

  echo "<table>";

  echo "<tr><td><p>Nimimerkki: " . $rivit[$i]['nimi'] . "</p></td><td><p>Pvm: " . $rivit[$i]['pvm'] . "</p></td></tr></table>";

  echo "<div><p>Palaute: " . $rivit[$i]['palaute'] . "</div>";

  echo "<hr/>";

}

}

else {

  echo "<p>Ei annettua palautetta</p>";

}




$conn->close();

?>
