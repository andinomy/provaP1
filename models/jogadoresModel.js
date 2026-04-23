const connection = require("../config/connection");

// Buscar jogadores
exports.buscarTodos = (callback) => {
  connection.query("SELECT * FROM jogadores", callback);
};

// Buscar jogador por ID
exports.buscarPorId = (id, callback) => {
  connection.query("SELECT * FROM jogadores WHERE id = ?", [id], callback);
};

// Inserir new jogador
exports.inserir = ({ nome, nickname }, callback) => {
  const sql = "INSERT INTO jogadores (nome, nickname) VALUES (?, ?)";
  connection.query(sql, [nome, nickname], callback);
};
