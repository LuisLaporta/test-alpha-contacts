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
  }
?>