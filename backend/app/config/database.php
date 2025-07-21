<?php 
  class Database {
    private $host = 'localhost';
    private $username = 'root';
    private $pass = 'Dudi1221';
    private $dbName = 'contatos_db';
    public $db;

    public function __construct() {
      if(!isset($this->db)) {
        try {
          $conn = new PDO("mysql:host=".$this->host, $this->username, $this->pass);
          $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
          $conn->exec("CREATE DATABASE IF NOT EXISTS ".$this->dbName);
          $conn->exec("USE ".$this->dbName);
          $conn->exec("
            CREATE TABLE IF NOT EXISTS contatos (
                id INT AUTO_INCREMENT PRIMARY KEY,
                nome_completo VARCHAR(100) NOT NULL,
                data_nascimento DATE NOT NULL,
                email VARCHAR(100) UNIQUE NOT NULL,
                telefone VARCHAR(20),
                celular VARCHAR(20) NOT NULL,
                profissao VARCHAR(50),
                tem_whatsapp BOOLEAN DEFAULT FALSE,
                notificacoes_email BOOLEAN DEFAULT FALSE,
                notificacoes_sms BOOLEAN DEFAULT FALSE,
                criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            ) ENGINE=InnoDB
          ");
          $this->db = $conn;
        } catch (PDOException $e) {
          die("Falha na conexão com o MySQL: " . $e->getMessage());
        }
      }
    }
  }
?>
