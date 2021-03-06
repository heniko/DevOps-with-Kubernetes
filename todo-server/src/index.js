require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { PrismaClient } = require('@prisma/client')

const app = express()

const port = process.env.PORT || 3001
const prisma = new PrismaClient()

app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} ${JSON.stringify(req.body)}`)
  next()
})

app.use((req, res, next) => {
  req.prisma = prisma
  next()
})

const todoRouter = require('./routes/todo')
app.use('/api/todos', todoRouter)

const dailyPictureRouter = require('./routes/daily-picture')
app.use('/api/daily-picture', dailyPictureRouter)

app.get('/', (req, res) => {
  res.send('ok')
})

app.listen(port, () => {
  console.log(`TODO-server running on port ${port}`)
})