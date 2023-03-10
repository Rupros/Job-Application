<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    include_once("connection_config.php");
    $conn = GetDB();

    $data = json_decode(file_get_contents("php://input"), TRUE);

    $sku = $data['sku'];
    $name = $data["name"];
    $price = $data["price"];

    $type = $data["type"];

    $size = $data["size"];
    $length = $data["length"];
    $width = $data["width"];
    $height = $data["height"];
    $weight = $data["weight"];


    //check if sku exists
    $checksql = $conn->prepare("
    SELECT * FROM items WHERE sku = ?");
    $checksql->execute([ $sku ]);

    if ($checksql->get_result()->num_rows > 0) {
        die("SKU already exists");
    }

    //insert in DB if SKU is unique
    $insertSql = $conn->prepare("INSERT INTO items (sku, name, price, type) values (?, ?, ?, ?)");
    $insertSql->execute([$sku, $name, $price, $type]);


    //insert the additional item info in another table

    //get ID
    $getId = $conn->prepare("
    SELECT id FROM items ORDER BY id DESC LIMIT 1");
    $getId->execute();
    $id = mysqli_fetch_array($getId->get_result())[0];


    //array containing all the queries for inputing into different tables
    $insertSqls = array(
        "dvd" => array(
            "query" => "INSERT INTO dvds (id, size) values (?, ?)",
            "values" => [$id, $size]
        ),

        "book" => array(
            "query" => "INSERT INTO books (id, weight) values (?, ?)",
            "values" => [$id, $weight]
        ),

        "furniture" => array(
            "query" => "INSERT INTO furnitures (id, length, width, height) values (?, ?, ?, ?)",
            "values" => [$id, $length, $width, $height]
        )
    );

    //insert it in db
    $insertSql = $conn->prepare($insertSqls[$type]["query"]);
    $insertSql->execute($insertSqls[$type]["values"]);


    $conn->close();
    die("Submitted!")
?>
