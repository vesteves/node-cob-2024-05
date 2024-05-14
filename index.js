const express = require('express');
const app = express();

app.use(express.json());

// GET: é responsável por coletar informações
// POST: por aqui, é onde eu entrego as informações para o backend
// PUT: atualização de informações
// DELETE: remova algo

// https://api.themoviedb.org/3/movie/popular?api_key=e511c1f8f4b145b51f9e916fa1d5098f&page=1&language=pt-BR
// https:// - protocolo
// themoviedb.org - domínio
// api. - subdomínio
// /3/movie/popular - rota
// ?api_key=e511c1f8f4b145b51f9e916fa1d5098f&page=1&language=pt-BR - query string

// http://localhost:8000/

const users = [];

app.get('/', (req, res) => {
  return res.json({
    msg: 'Esta será minha home',
  });
});

app.get('/users', (req, res) => {
  return res.json(users);
});

app.get('/users/:id', (req, res) => {
  const result = users.find((el) => el.id == req.params.id);
  return res.json(result);
});

app.post('/users', (req, res) => {
  const id = req.body.id;
  const nome = req.body.nome;
  const idade = req.body.idade;

  users.push({
    id,
    nome,
    idade,
  });
  return res.json(users);
});

// atualizar um objeto do array onde passei via corpo da requisição as informações
// e passei qual ID quero que seja atualizado por params
app.put();

// remover do array um id que chegou por params
app.delete();

app.listen(8000, () => {
  users.push({
    id: 1,
    nome: 'Anna',
    idade: 18,
  });
  users.push({
    id: 2,
    nome: 'Matheus',
    idade: 20,
  });
  console.log('Servidor ON!');
});
