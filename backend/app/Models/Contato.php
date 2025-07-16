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

    public function create($data) {
      $sql = "INSERT INTO contatos (nome_completo, data_nascimento, email, telefone, celular, profissao, tem_whatsapp, notificacoes_email, notificacoes_sms) 
              VALUES (:nome_completo, :data_nascimento, :email, :telefone, :celular, :profissao, :tem_whatsapp, :notificacoes_email, :notificacoes_sms)";
      
      $stmt = $this->pdo->prepare($sql);
      
      $stmt->bindParam(':nome_completo', $data['nome_completo']);
      $stmt->bindParam(':data_nascimento', $data['data_nascimento']);
      $stmt->bindParam(':email', $data['email']);
      $stmt->bindParam(':telefone', $data['telefone']);
      $stmt->bindParam(':celular', $data['celular']);
      $stmt->bindParam(':profissao', $data['profissao']);
      $stmt->bindParam(':tem_whatsapp', $data['tem_whatsapp']);
      $stmt->bindParam(':notificacoes_email', $data['notificacoes_email']);
      $stmt->bindParam(':notificacoes_sms', $data['notificacoes_sms']);
    
      if ($stmt->execute()) {
        return $this->pdo->lastInsertId();
      }

      return false;
    }

    public function update($id, $data) {
      $sql = "UPDATE contatos SET 
                  nome_completo = :nome_completo, 
                  data_nascimento = :data_nascimento, 
                  email = :email, 
                  telefone = :telefone, 
                  celular = :celular, 
                  profissao = :profissao, 
                  tem_whatsapp = :tem_whatsapp, 
                  notificacoes_email = :notificacoes_email, 
                  notificacoes_sms = :notificacoes_sms, 
                  atualizado_em = CURRENT_TIMESTAMP 
              WHERE id = :id";
      
      $stmt = $this->pdo->prepare($sql);
  
      $stmt->bindParam(':id', $id);
      $stmt->bindParam(':nome_completo', $data['nome_completo']);
      $stmt->bindParam(':data_nascimento', $data['data_nascimento']);
      $stmt->bindParam(':email', $data['email']);
      $stmt->bindParam(':telefone', $data['telefone']);
      $stmt->bindParam(':celular', $data['celular']);
      $stmt->bindParam(':profissao', $data['profissao']);
      $stmt->bindParam(':tem_whatsapp', $data['tem_whatsapp']);
      $stmt->bindParam(':notificacoes_email', $data['notificacoes_email']);
      $stmt->bindParam(':notificacoes_sms', $data['notificacoes_sms']);
      
      return $stmt->execute();
    }

    public function delete($id) {
      $sql = "DELETE FROM contatos WHERE id = :id";

      $stmt = $this->pdo->prepare($sql);
      $stmt->bindParam(':id', $id);

      return $stmt->execute();
    }
  }
?>