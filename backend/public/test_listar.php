<?php
  require_once __DIR__ . '/../app/config/database.php';
  require_once __DIR__ . '/../app/Models/Contato.php';

  $database = new Database();
  $contato = new Contato($database->db);

  $isCli = (php_sapi_name() === 'cli');

  if ($isCli || (isset($_SERVER['REQUEST_METHOD']) && $_SERVER['REQUEST_METHOD'] === 'GET')) {
    $contatos = $contato->getAll();
    if (!$isCli) {
      header('Content-type: application/json');
    }
    echo json_encode($contatos, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
  } else if (isset($_SERVER['REQUEST_METHOD']) && $_SERVER['REQUEST_METHOD'] === 'PUT') {
    $id = isset($_GET['id']) ? intval($_GET['id']) : 0;
    $data = json_decode(file_get_contents('php://input'), true);
    if ($id > 0 && is_array($data)) {
      $success = $contato->update($id, $data);
      if ($success) {
        http_response_code(200);
        echo json_encode(['message' => 'Contato atualizado']);
      } else {
        http_response_code(500);
        echo json_encode(['error' => 'Erro ao atualizar contato']);
      }
    } else {
      http_response_code(400);
      echo json_encode(['error' => 'Id ou dados inválidos']);
    }
  } else {
    http_response_code(405);
    echo json_encode(['error' => 'Método não permitido']);
  }
?>