import express from 'express'
import { Pessoa } from './pessoa.class'
import Atleta from './atleta.class'

const app = express()

app.use(express.json())

app.listen(8000, () => {
  // const pessoa1 = new Pessoa()

  // console.log(pessoa1.apresentar())

  const atleta1 = new Atleta("Luiz", 18, "Judô");
  console.log(atleta1.apresentar())
  console.log('Servidor ON!')
})
