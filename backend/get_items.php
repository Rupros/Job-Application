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

    //get dvds
    $getDvdsSql = $conn->prepare("
    SELECT sku, name, price, weight, length, width, height FROM items
    LEFT JOIN dvds ON items.id = dvds.id
    LEFT JOIN books ON items.id = books.id
    LEFT JOIN furnitures ON items.id = furnitures.id
    ORDER BY items.id
    ");
    $getDvdsSql->execute();

    $result = $getDvdsSql->get_result();

    echo '[';
    for ($i = 0 ; $i < mysqli_num_rows($result) ; $i++) {
        echo ($i > 0 ? ',' : '').json_encode(mysqli_fetch_object($result));
    }
    echo ']';

    $conn->close();
?>
