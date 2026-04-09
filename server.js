
const express = require('express')
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API funcionando');
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log('Servidor running porta 3000 !!!');
});

