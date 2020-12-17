<?php
    
abstract class Connect
{
    protected static function getDb()
    {

    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "fseletro";
    
    $conn = mysqli_connect($servername, $username, $password, $database);

        if ($conn) {
            return $conn;
        } else {
            echo "<h1>A conexão ao BD falhou!</h1>";
        }
    }
}
