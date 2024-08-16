<!DOCTYPE html>
<html>
<head>
    <title>Canteen Table</title>
</head>
<body>

<table border="1">
    <tr>
        <th>Reg No</th>
        <th>Name</th>
        <th>Password</th>
        <th>Email</th>
    </tr>
    <?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "college";

    // Create a connection to the database
    $conn = mysqli_connect($servername, $username, $password, $database);

    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    // Define the SQL query to retrieve all data from the "canteen" table
    $sql = "SELECT * FROM canteen";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            echo '<tr>';
            echo '<td>' . $row['regno'] . '</td>';
            echo '<td>' . $row['name'] . '</td>';
            echo '<td>' . $row['password'] . '</td>';
            echo '<td>' . $row['email'] . '</td>';
            echo '</tr>';
        }
    } else {
        echo '<tr><td colspan="4">No rows found in the "canteen" table.</td></tr>';
    }

    mysqli_close($conn);
    ?>
</table>

</body>
</html>
