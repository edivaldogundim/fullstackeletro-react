<?php
    require_once "./backend/Api.php";
    
    class Mensagem{
        public $nome; 
        public $mensagem; 

        public static function getAll()
        {
            $conn = Connection::getDb();

            $inserirDados = $conn->query("SELECT * FROM usuarios");
            return $inserirDados->fetchAll(PDO::FETCH_ASSOC);
        }
        
        public function envioMensagem()
        {
            $conn = Connection::getDb();
    
            $inserirDados = $conn->query("INSERT INTO comentarios (nome, mensagem) VALUES ('$this->nome', '$this->msg')");                      
            
            if ($inserirDados->rowCount() > 0) {
                return true;
            } else {
                return false;
            }
        }
    }
    $mensagemCliente = new Mensagem;
    $mensagemCliente->nome = $_POST['nome'];
    $mensagemCliente->mensagem = $_POST['mensagem'];

    $validar = $mensagemCliente->envioMensagem();
    
   
 if ($validar == true) {
        echo json_encode(true);
    } else {
        echo json_encode(false);
    }
   

   
?>
