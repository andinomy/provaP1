const express = require("express");
const router = express.Router();
const jogoController = require("../controllers/jogosController");


// GET /jogos
router.get("/", jogoController.listar);

// GET /jogos/:id
router.get("/:id", jogoController.buscarPorId);

// POST /jogos
router.post("/", jogoController.adicionar);

// PUT /jogos/:id
router.put("/:id", jogoController.atualizar);

// DELETE /jogos/:id
router.delete("/:id", jogoController.deletar);

module.exports = router;
