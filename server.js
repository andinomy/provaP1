const express = require("express");
const app = express();

const jogosRoutes = require('./routes/jogosRoutes');
const jogadoresRoutes = require('./routes/jogadoresRoutes');
const pontuacoesRoutes = require('./routes/pontuacoesRoutes');
   
    app.use(express.json());
app.use("/jogos", jogosRoutes);
app.use("/jogadores", jogadoresRoutes);
app.use("/pontuacoes", pontuacoesRoutes);

 app.get('/', (req, res) => {
  res.send('<h1> funcionando 🦋🦋🦋</h1>');
});

const PORTA = 3000;

 app.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`);
});
