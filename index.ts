import express, { Request, Response } from 'express'
const app = express()

app.use(express.json())

interface User {
  id: number
  nome: string
}

interface CreateUser {
  nome: string
}

const users: User[] = []
app.get('/users', (_: Request, res: Response) => {
  return res.json(users[0].nome);
})

app.post('/users', (req: Request, res: Response) => {
  const {
    nome
  } = req.body as CreateUser
  return res.json(nome);
})

app.listen(8000, () => {
  console.log('Servidor ON!')

  users.push({
    id: 1,
    nome: "Luiz",
  })

  users.push({
    id: 2,
    nome: "Matheus",
  })
})
