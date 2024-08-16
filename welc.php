<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "college";
$conn = mysqli_connect($servername, $username, $password, $database);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

if (isset($_POST["Submit"])) {
    $name = mysqli_real_escape_string($conn, $_POST["name"]);
    $regno = mysqli_real_escape_string($conn, $_POST["regno"]);
    $password = mysqli_real_escape_string($conn, $_POST["password"]);
    $email = mysqli_real_escape_string($conn, $_POST["email"]);

    $sql = "INSERT INTO canteen (name, regno, password, email) VALUES ('$name', '$regno', '$password', '$email')";

    if (mysqli_query($conn, $sql)) {
        echo "Record successfully inserted";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}

mysqli_close($conn);
?>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inserting Data</title>
    <link rel="stylesheet" href="stylewelc.css">
    
</head>
    <body>
<a href="wel.php">
    <button>Continue</button>
</a>
</body>
</html>
