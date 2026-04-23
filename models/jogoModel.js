const connection = require("./../config/connection");

// Buscar todos os jogos
exports.buscarTodos = (callback) => {
  connection.query("SELECT * FROM jogos", callback);
};

// Buscar jogo por ID
exports.buscarPorId = (id, callback) => {
  connection.query("SELECT * FROM jogos WHERE id = ?", [id], callback);
};

// Inserir novo jogo
exports.inserir = ({ nome, plataforma, ano_lancamento }, callback) => {
  const sql = "INSERT INTO jogos (nome, plataforma, ano_lancamento) VALUES (?, ?, ?)";
  connection.query(sql, [nome, plataforma, ano_lancamento], callback);
};

// Atualizar jogo
exports.atualizar = (id, { nome, plataforma, ano_lancamento }, callback) => {
  const sql = "UPDATE jogos SET nome = ?, plataforma = ?, ano_lancamento = ? WHERE id = ?";
  connection.query(sql, [nome, plataforma, ano_lancamento, id], callback);
};

// Deletar jogo
exports.deletar = (id, callback) => {
  connection.query("DELETE FROM jogos WHERE id = ?", [id], callback);
};
