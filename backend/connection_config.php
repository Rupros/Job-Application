<?php
    function GetDB(){
        $servername = "localhost";
        $username = "myadmin";
        $password = "MyPas123";
        $dbname = "itemsdb";

        // Create connection
        $conn = mysqli_connect($servername, $username, $password, $dbname);

        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        return $conn;
    }
?>