import express from 'express'
import studentRoute from './module/student/student.route'

const app = express()

app.use(express.json())
app.use(studentRoute)

app.listen(8000, () => {
  console.log('Servidor ON!')
})
