<?php
  class Contato {
    private $pdo;

    public function __construct($pdo) {
      $this->pdo = $pdo;
    }

    public function getAll() {
      $sql = "SELECT * FROM contatos";
      $stmt = $this->pdo->prepare($sql);
      $stmt->execute();
      return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
  }
?>