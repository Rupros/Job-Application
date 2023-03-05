<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    $servername = "localhost";
    $username = "myadmin";
    $password = "MyPas123";
    $dbname = "itemsdb";

    // Create connection
    $conn = mysqli_connect($servername, $username, $password);
    mysqli_select_db($conn, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "
        TRUNCATE TABLE items;
        TRUNCATE TABLE dvds;
        TRUNCATE TABLE books;
        TRUNCATE TABLE furnitures;
        ";

    $conn->multi_query($sql);

    $conn->close();

    echo("Deleted data");
?>
