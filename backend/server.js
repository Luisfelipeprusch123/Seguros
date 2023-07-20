const express = require('express');
// const router = express.Routes();
const cors = require('cors');
const connection = require ('./db');
const app = express();


router.get('/', (req, res) => {
    connection.query('SELECT * FROM users', (error,  results) => {
        
    })
})

app.use(express.json());
    
app.use(cors());

app.post('/api/formulario', (req, res ) => {
    const { nome, idade, endereco} = req.body;

    console.log('Dados recebidos', {nome, idade, endereco});

    res.status(200).json({ message: 'Dados recebidos com sucesso!'});
});


const port = 5000
app.listen(port, () => {
    console.log('Servidor rodando na porta $[port]');
});