const jogadorModel = require("../models/jogadoresModel");

// Listar jogadores
exports.listar = (req, res) => {
  jogadorModel.buscarTodos((err, results) => {
    if (err) return res.status(500).send("Erro ao listar jogadores");
    res.json(results);
  });
};

// Adicionar jogador
exports.adicionar = (req, res) => {
  const { nome, nickname } = req.body;

  if (!nome || !nickname) {
    return res.status(400).send("Nome e nickname são obrigatórios");
  }

  jogadorModel.inserir(req.body, (err) => {
    if (err) {
      if (err.code === "ER_DUP_ENTRY") {
        return res.status(400).send("Nickname já existe");
      }
      return res.status(500).send("Erro ao adicionar jogador");
    }

    res.status(201).send("Jogador adicionado com sucesso");
  });
};
