<?php
  require_once __DIR__ . '/../config/database.php';
  require_once __DIR__ . '/../Models/Contato.php';

  class ContatoController {
    private $contato;

    public function __construct($db) {
      $this->contato = new Contato($db);
    }

    public function getAll() {
      $contatos = $this->contato->getAll();
      echo json_encode($contatos);
    }

    public function create() {
      $data = json_decode(file_get_contents("php://input"), true);

      $id = $this->contato->create($data);

      if ($id) {
        http_response_code(201);
        echo json_encode(['id' => $id]);
      } else {
        http_response_code(500);
        echo json_encode(['error' => 'Erro ao criar contato']);
      }
    }

    public function update($id) {
      $data = json_decode(file_get_contents("php://input"), true);

      $success = $this->contato->update($id, $data);

      if ($success) {
        http_response_code(200);
        echo json_encode(['message' => 'Contato atualizado']);
      } else {
        http_response_code(500);
        echo json_encode(['error' => 'Erro ao atualizar contato']);
      }
    }

    public function delete($id) {
      $success = $this->contato->delete($id);
      header('Content-Type: application/json');

      if ($success) {
        http_response_code(200);
      } else {
        http_response_code(404);
        echo json_encode(['error' => 'Erro ao deletar contato']);
      }
    }
  }
?>