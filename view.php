<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "college";
$conn = mysqli_connect($servername, $username, $password, $database);
$name = $_POST['name'];
$sql = "SELECT * FROM canteen WHERE name='$name'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
 $row = $result->fetch_assoc();
 echo '<table border="1">';
 foreach ($row as $key => $value) {
 echo '<tr><td>' . $key . '</td><td>' . $value . '</td></tr>'; }
 echo '</table>';
} else {
 echo 'No row found with name ' . $name;}
$conn->close();
?>
