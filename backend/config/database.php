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
          $conn = new PDO("mysql:host=".$this->host.";dbname=".$this->dbName, $this->username, $this->pass);
          $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
          $this->db = $conn;
        } catch (PDOException $e) {
          die("Falha na conexão com o MySQl: " . $e->getMessage());
        }
      }
    }
  }
?>