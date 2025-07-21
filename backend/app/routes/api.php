<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
  header("Access-Control-Allow-Headers: Content-Type, Authorization");

  $requestMethod = isset($_SERVER['REQUEST_METHOD']) ? $_SERVER['REQUEST_METHOD'] : 'UNKNOWN';

  if ($requestMethod === 'OPTIONS') {
    http_response_code(204);
    exit();
  }

  require_once __DIR__ . '/../config/database.php';
  require_once __DIR__ . '/../Controllers/ContatoController.php';

  $database = new Database();
  $contatoController = new ContatoController($database->db);

  switch ($requestMethod) {
    case 'GET':
      $contatoController->getAll();
      break;
    case 'POST':
      $contatoController->create();
      break;
    case 'PUT':
      $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
      $uri = explode('/', trim($uri, '/'));
      $id = isset($uri[1]) ? intval($uri[1]) : 0;
      echo json_encode(['captured_id' => $id]);
      if ($id > 0) {
        $contatoController->update($id);
      } else {
        http_response_code(400);
        echo json_encode(['error' => 'Id inválido']);
      }
      break;
    case 'DELETE':
      $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
      $uri = explode('/', trim($uri, '/'));
      $id = isset($uri[1]) ? intval($uri[1]) : 0;
      echo json_encode(['captured_id' => $id]);
      if ($id > 0) {
          $contatoController->delete($id);
      } else {
          http_response_code(400);
          echo json_encode(['error' => 'Id inválido']);
      }
      break;
    default:
      http_response_code(405);
      echo json_encode(['error' => 'Método não permitido']);
      break;
  }
?>
