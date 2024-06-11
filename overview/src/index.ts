import express from 'express';
import knex from 'knex'
import { auth } from './middleware/auth'

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

app.get('/teste', auth, (req, res) => {
  console.log(req.headers)

  // Bearer eyJhbGciOiJIUzI1NiJ9.MjM.chWvNTZH9C18daqL4DGTQaI1fEL1pHvZinBuErxhhjM
  // [Bearer]
  // [eyJhbGciOiJIUzI1NiJ9.MjM.chWvNTZH9C18daqL4DGTQaI1fEL1pHvZinBuErxhhjM]
  return res.json({
    msg: res.locals.data
  })
})

// bearer token

app.listen(8000, () => {
  // const userId = '23'
  // const codificado = jwt.sign(userId, 'cob2024')
  // console.log('codificado', codificado)

  // const decodificado = jwt.verify('eyJhbGciOiJIUzI1NiJ9.MjM.chWvNTZH9C18daqL4DGTQaI1fEL1pHvZinBuErxhhjM', 'cob2024')
  // console.log('decodificado', decodificado)
  console.log('Server ON');
});
