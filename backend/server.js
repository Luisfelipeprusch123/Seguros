const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const usersData = require('./data'); // Simulação de dados de usuários

app.use(bodyParser.json());

// Rota para obter todos os usuários
app.get('/api/users', (req, res) => {
  res.json(usersData);
});

// Rota para adicionar um novo usuário
app.post('/api/users', (req, res) => {
  const newUser = req.body;
  usersData.push(newUser);
  res.status(201).json(newUser);
});

// Rota para obter informações de um usuário pelo ID
app.get('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  const user = usersData.find((user) => user.id === Number(userId));
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'Usuário não encontrado' });
  }
});

// Rota para atualizar informações de um usuário pelo ID
app.put('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  const userIndex = usersData.findIndex((user) => user.id === Number(userId));
  if (userIndex !== -1) {
    usersData[userIndex] = { ...usersData[userIndex], ...req.body };
    res.json(usersData[userIndex]);
  } else {
    res.status(404).json({ message: 'Usuário não encontrado' });
  }
});

// Rota para excluir um usuário pelo ID
app.delete('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  const userIndex = usersData.findIndex((user) => user.id === Number(userId));
  if (userIndex !== -1) {
    const deletedUser = usersData.splice(userIndex, 1);
    res.json(deletedUser[0]);
  } else {
    res.status(404).json({ message: 'Usuário não encontrado' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
