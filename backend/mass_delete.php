<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    include_once("connection_config.php");
    $conn = GetDB();

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
