import { Router, Request, Response } from 'express'
import { getAll, store } from './student.model'

const route = Router()

route.post('/students', async (req: Request, res: Response) => {
  const result = await store({
    nome: req.body.nome,
    idade: req.body.idade
  })
  return res.json(result)
})

route.get('/students', async (req: Request, res: Response) => {
  const result = await getAll()
  return res.json(result)
})

export default route
