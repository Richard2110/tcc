const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');


app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Servidor funcionando!');
});

app.listen(port, () => {
    console.log(`Servidor está rodando na porta ${port}`);
});