<?php
  require_once '../config/database.php';
  require_once '../Models/Contato.php';

  $database = new Database();
  $contatoController = new ContatoController($database->db);

  if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $contatoController->getAll();
  } else if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $contatoController->create();
  } else if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $id = isset($_GET['id']) ? intval($_GET['id']) : 0;
    if ($id > 0) {
      $contatoController->update($id);
    } else {
      http_response_code(400);
      echo json_encode(['error' => 'Id inválido']);
    }
  } else {
    http_response_code(405);
    echo json_encode(['error' => 'Método não permitido']);
  }
?>