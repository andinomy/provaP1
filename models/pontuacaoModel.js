const connection = require("../config/connection");

const Pontuacao = {
  criar: (pontuacao, callback) => {
    const sql = "INSERT INTO pontuacoes (jogo_id, jogador_id, pontuacao) VALUES (?, ?, ?)";
    connection.query(sql, [pontuacao.jogo_id, pontuacao.jogador_id, pontuacao.pontuacao], callback);
  },

  obterRankingPorJogo: (jogo_id, callback) => {
    const sql = `
      SELECT jogador_id, pontuacao
      FROM pontuacoes
      WHERE jogo_id = ?
      ORDER BY pontuacao DESC
    `;
    connection.query(sql, [jogo_id], callback);
  },

  obterJogosPopulares: (callback) => {
    const sql = `
      SELECT jogo_id, COUNT(*) AS total
      FROM pontuacoes
      GROUP BY jogo_id
      ORDER BY total DESC
    `;
    connection.query(sql, callback);
  }
};

module.exports = Pontuacao;
