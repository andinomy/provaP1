const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "api_jogos",
});

connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar:", err);
    return;
  }
  console.log("Conectado ao banco com sucesso!");
});

module.exports = connection;
