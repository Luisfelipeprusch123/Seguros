const express = require('express');
const cors = require('cors');
const connection = require ('./db');
const App = express();

const express  = require('express');

const app = express();

const router = express.Router();

router.get('/', (req, res) => {
res.send('Olá, mundo')
});

app.use('/api/formualrio', router);

app.use(express.json());
    
app.use(cors());

app.post('/api/formulario', (req, res ) => {
    const { nome, idade, endereco, cpf, date, rg} = req.body;
    
    console.log('Dados recebidos', {nome, idade, endereco});

    res.status(200).json({ message: 'Dados recebidos com sucesso!'});
});


const port = 5000
app.listen(port, () => {
    console.log('Servidor rodando na porta $port');
});

