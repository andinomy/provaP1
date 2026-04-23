const express = require("express");
const router = express.Router();
const pontuacaoController = require("../controllers/pontuacaoController");

// POST /pontuacoes
router.post("/", pontuacaoController.adicionar);

// GET /ranking/:idJogo
router.get("/ranking/:idJogo", pontuacaoController.ranking);

// GET /jogos/populares
router.get("/jogos/populares", pontuacaoController.jogosPopulares);

module.exports = router;
