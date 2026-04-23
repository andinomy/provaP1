const jogoModel = require("../models/jogoModel");


// Lista todos os jogos
exports.listar = (req, res) => {
  jogoModel.buscarTodos((err, results) => {
    if (err) return res.status(500).send("Erro ao listar jogos");
    res.json(results);
  });
};

// Busca jogo por ID
exports.buscarPorId = (req, res) => {
  jogoModel.buscarPorId(req.params.id, (err, results) => {
    if (err) return res.status(500).send("Erro ao buscar jogo");
    if (results.length === 0) return res.status(404).send("Jogo não encontrado");
    res.json(results[0]);
  });
};

// Adiciona jogo
exports.adicionar = (req, res) => {
  const { nome, plataforma, ano_lancamento } = req.body;

  if (!nome) {
    return res.status(400).send("Nome é obrigatório");
  }

  jogoModel.inserir(req.body, (err) => {
    if (err) return res.status(500).send("Erro ao inserir jogo");
    res.status(201).send("Jogo inserido com sucesso");
  });
};

// Atualiza jogo
exports.atualizar = (req, res) => {
  const { nome, plataforma, ano_lancamento } = req.body;

  if (!nome) {
    return res.status(400).send("Nome é obrigatório");
  }

  jogoModel.atualizar(req.params.id, req.body, (err, result) => {
    if (err) return res.status(500).send("Erro ao atualizar jogo");
    if (result.affectedRows === 0) return res.status(404).send("Jogo não encontrado");
    res.send("Jogo atualizado com sucesso");
  });
};

// Deleta jogo
exports.deletar = (req, res) => {
  jogoModel.deletar(req.params.id, (err, result) => {
    if (err) return res.status(500).send("Erro ao deletar jogo");
    if (result.affectedRows === 0) return res.status(404).send("Jogo não encontrado");
    res.send("Jogo deletado com sucesso");
  });
};
