<?php
  require_once '../config/database.php';
  require_once '../Models/Contato.php';

  class ContatoController {
    private $contato;

    public function __construct() {
      $database = new Database();
      $this->contato = new Contato($database->db);
    }

    public function getAll() {
      $contatos = $this->contato->getAll();
      echo json_encode($contatos);
    }
  }
?>