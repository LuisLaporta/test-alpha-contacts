<?php
  require_once '../config/database.php';
  require_once '../Models/Contato.php';

  $database = new Database();
  $contato = new Contato($database->db);

  $contatos = $contato->getAll();

  header('Content-type: application/json');
  echo json_encode($contatos);
?>