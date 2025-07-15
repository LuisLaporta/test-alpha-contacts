<?php
  require_once '../config/database.php';
  require_once '../Models/Contato.php';

  $database = new Database();
  $contatoController = new ContatoController($database->db);

  if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $contatoController->getAll();
  } else {
    http_response_code(405);
    echo json_encode(['error' => 'Método não permitido']);
  }
?>