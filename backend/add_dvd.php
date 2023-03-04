<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
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

    $data = json_decode(file_get_contents("php://input"), TRUE);

    $sku = $data['sku'];
    $name = $data["name"];
    $price = $data["price"];

    $type = $data["type"];

    $size = $data["size"];

    //check if sku exists
    $checksql = $conn->prepare("
    SELECT * FROM items WHERE sku = ?");
    $checksql->execute([ $sku ]);

    if ($checksql->get_result()->num_rows > 0) {
        die("SKU already exists");
    }

    //insert in DB if SKU is unique
    $insertSql = $conn->prepare("
    INSERT INTO items (sku, name, price, type) 
    values (?, ?, ?, ?)");
    $insertSql->execute([$sku, $name, $price, $type]);


    //insert the additional item info in another table

    //get ID
    $getId = $conn->prepare("
    SELECT id FROM items ORDER BY id DESC LIMIT 1");
    $getId->execute();
    $id = mysqli_fetch_array($getId->get_result())[0];

    //insert it in db
    $insertSql = $conn->prepare("
    INSERT INTO dvds (id, size) 
    values (?, ?)");
    $insertSql->execute([$id, $size]);


    $conn->close();
    die("Submitted!")
?>
