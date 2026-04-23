const Pontuacao = require("../models/pontuacaoModel");

// POST /pontuacoes
exports.adicionar = (req, res) => {
  const { jogo_id, jogador_id, pontuacao } = req.body;

  if (!jogo_id || !jogador_id || pontuacao == null) {
    return res.status(400).json({ erro: "Dados incompletos" });
  }

  if (pontuacao < 0) {
    return res.status(400).json({ erro: "Pontuação não pode ser menor que 0" });
  }

  Pontuacao.criar({ jogo_id, jogador_id, pontuacao }, (err, result) => {
    if (err) {
      return res.status(500).json({ erro: "Erro ao cadastrar pontuação" });
    }

    res.status(201).json({
      mensagem: "Pontuação cadastrada com sucesso",
      id: result.insertId
    });
  });
};

// GET /pontuacoes/ranking/:idJogo
exports.ranking = (req, res) => {
  const { idJogo } = req.params;

  Pontuacao.obterRankingPorJogo(idJogo, (err, results) => {
    if (err) {
      return res.status(500).json({ erro: "Erro ao buscar ranking" });
    }

    res.json(results);
  });
};

// GET /pontuacoes/jogos/populares
exports.jogosPopulares = (req, res) => {
  Pontuacao.obterJogosPopulares((err, results) => {
    if (err) {
      return res.status(500).json({ erro: "Erro ao buscar jogos populares" });
    }

    res.json(results);
  });
};
