<?php

$host = "";
$username = "";
$password = "";
$database = "";

$conn = mysqli_connect($host, $username, $password, $database);


$sql = "SELECT * FROM kysely ORDER BY rivinro DESC";

$query = mysqli_query($conn, $sql);

if ($query->num_rows > 0) {

            while ($row = $query->fetch_assoc()) {

		$rivit[] = $row;

            }




foreach($rivit as $i => $rivi) {

  echo "<div style='display: flex'><div style='margin: 3px; border: 1px solid #ffffff; border-radius: 5px; padding: 5px; max-width: 300px; width: 100%;'>
  <p>Nimimerkki: " . $rivit[$i]['nimi'] .
  "</p></div><div style='margin: 3px; border: 1px solid #ffffff; border-radius: 5px; padding: 5px; max-width: 300px; width: 100%;'>
  <p>Lempiruoka: " . $rivit[$i]['ruoka'] . "</p></div></div>";

}

}

else {

  echo "<p>Ei vastauksia kyselyyn</p>";

}





$conn->close();

?>
