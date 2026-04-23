const express = require("express");
const router = express.Router();
const jogadorController = require("../controllers/jogadorController");

// GET /jogadores
router.get("/", jogadorController.listar);

// POST /jogadores
router.post("/", jogadorController.adicionar);

module.exports = router;
