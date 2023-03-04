<?php

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

    $data = json_decode(file_get_contents("php://input"));

    $sku = $data->sku;
    $name = $data->name;
    $price = $data->price;

    $type = $data->type;

    $size = $data->size;

    $sql = "
    INSERT INTO items (sku, name, price, type) 
    values ('$sku', '$name', '$price', '$type')";

    $result = mysqli_query($conn, $sql);

    if($result){
        echo "New record created successfully";
    }
    else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

  $conn->close();
?>
