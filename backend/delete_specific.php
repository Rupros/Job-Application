<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    include_once("connection_config.php");

    $data = json_decode(file_get_contents("php://input"), TRUE);

    $sku = $data['sku'];

    $deleteSql = $conn->prepare("
    DELETE items, books, dvds, furnitures
    FROM items
    LEFT JOIN dvds ON items.id = dvds.id
    LEFT JOIN books ON items.id = books.id
    LEFT JOIN furnitures ON items.id = furnitures.id
    WHERE sku = ?");
    $deleteSql->execute([ $sku ]);

    $conn->close();
    die("Deleted entry!")
?>
