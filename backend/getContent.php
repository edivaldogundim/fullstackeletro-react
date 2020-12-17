 <?php

require_once("./connect.php");

class Content extends Connect{
    public static function getAll() {
        $conn = Connect::getDb();

        $i = 0;

        $stmt = $conn->prepare("SELECT * FROM produto");
        $stmt->execute();
        while($row = $stmt->fetch(PDO::FETCH_OBJ)){
            $json[$i]= 
                $row
            ;
            $i++;
        }

        header('Access-Control-Allow-Origin: *');
        header('Content-type: application/json');
        echo json_encode($json);
    }
}
 
