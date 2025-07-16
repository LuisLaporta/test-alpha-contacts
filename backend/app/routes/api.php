<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
  header("Access-Control-Allow-Headers: Content-Type, Authorization");
  if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit();
  }

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
  } else if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    if ($id > 0) {
      $contatoController->delete($id);
    } else {
      http_response_code(400);
      echo json_encode(['error' => 'Id inválido']);
    }
  } else {
    http_response_code(405);
    echo json_encode(['error' => 'Método não permitido']);
  }
?>