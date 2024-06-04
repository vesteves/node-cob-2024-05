import express from 'express';
import knex from 'knex'

const app = express();

app.use(express.json())

app.get('/users', async (req, res) => {
  const result = await knex({
    client: 'postgresql',
    connection: {
      database: 'aula07-db',
      user: 'postgres',
      password: 'password',
    },
  })('lalala').select();

  return res.json(result);
});

app.post('/users', async (req, res) => {
  const result = await knex({
    client: 'postgresql',
    connection: {
      database: 'aula07-db',
      user: 'postgres',
      password: 'password',
    },
  })('lalala').insert(req.body);

  return res.json(result);
});

app.listen(8000, () => {
  console.log('Server ON');
});
