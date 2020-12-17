<?php
    
abstract class Connect
{
    protected static function getDb()
    {

        $conn = new PDO("mysql:host=localhost;dbname=fseletro;charset=utf8",
        "root",
        ""
        );

        if ($conn) {
            return $conn;
        } else {
            echo "<h1>A conexão ao BD falhou!</h1>";
        }
    }
}
