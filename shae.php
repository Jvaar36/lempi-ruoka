<?php

$host = "";
$username = "";
$password = "";
$database = "";

$conn = mysqli_connect($host, $username, $password, $database);


$sql = "SELECT * FROM kysely";

$query = mysqli_query($conn, $sql);

if ($query->num_rows > 0) {

$lkm = $query->num_rows;

echo "<p>Yhteensä " . $lkm . " annettua vastausta tällä hetkellä.</p>";

while ($row = $query->fetch_assoc()) {

	$rivit[] = $row;

            }

    $sql2 = "SELECT * FROM kysely";

    $query2 = mysqli_query($conn, $sql2);

    while ($row2 = $query2->fetch_assoc()) {

               $rivit2[] = $row2;

                }

			$arr = array();

			foreach ($rivit2 as $x => $rivi2) {

				$arr[$x] = $rivit[$x]['ruoka'];

			}

			$numerot = array_count_values($arr);

			arsort($numerot);

if (isset(array_keys($numerot)[0])) {
$ruoka1 = array_keys($numerot)[0];
}

if (isset(array_keys($numerot)[1])) {
$ruoka2 = array_keys($numerot)[1];
}

if (isset(array_keys($numerot)[2])) {
$ruoka3 = array_keys($numerot)[2];
}

echo "<p>Suosituimmat ruoat tällä hetkellä, top-3: </p>";

if (isset($ruoka1)) {
echo "<p>1. " . $ruoka1 . "</p>";
}

if (isset($ruoka2)) {
echo "<p>2. " . $ruoka2 . "</p>";
}

if (isset($ruoka3)) {
echo "<p>3. " . $ruoka3 . "</p>";
}

}

else {

  echo "<p>Ei vastauksia kyselyyn</p>";

}

$conn->close();

?>
