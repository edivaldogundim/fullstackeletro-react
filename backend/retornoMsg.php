<?php
    require_once "./backend/connect.php";
    

    $result = query('SELECT * FROM comentarios');
    $mensagens=[];

    while($row=mysqli_fetch_assoc($result)){
        $mensagens[]=$row;
    }
            
            
    header("Access-Control-Allow-Origin: *");
    header("Content-type: application/json");
    echo json_encode($mensagens);
    
?>

