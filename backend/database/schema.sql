CREATE DATABASE IF NOT EXISTS contatos_db
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE contatos_db;

CREATE TABLE IF NOT EXISTS contatos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome_completo VARCHAR(100) NOT NULL,
  data_nascimento DATE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  telefone VARCHAR(20),
  celular VARCHAR(20) NOT NULL,
  profissao VARCHAR(50),
  tem_whatsapp BOOLEAN DEFAULT FALSE,
  notificacoes_email BOOLEAN DEFAULT FALSE,
  notificacoes_sms BOOLEAN DEFAULT FALSE,
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

CREATE INDEX idx_email ON contatos(email);
CREATE INDEX idx_nome ON contatos(nome_completo);
