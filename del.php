<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "college";
$conn = mysqli_connect($servername, $username, $password, $database);

$btn = $_POST["Delete"];
$can_del = $_POST["candel"];

if ($btn == "Delete") {
    // Use prepared statement to avoid SQL injection
    $sql = "DELETE FROM canteen WHERE name = ?";
    $stmt = mysqli_prepare($conn, $sql);
    
    if ($stmt) {
        mysqli_stmt_bind_param($stmt, "s", $can_del);
        
        if (mysqli_stmt_execute($stmt)) {
            echo "Record successfully deleted";
        } else {
            echo "Error deleting record: " . mysqli_error($conn);
        }
        
        mysqli_stmt_close($stmt);
    } else {
        echo "Error in the prepared statement: " . mysqli_error($conn);
    }
}

mysqli_close($conn);
?>
