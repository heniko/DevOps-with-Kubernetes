require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3001

app.use(express.json())
app.use(cors())

const todoRouter = require('./routes/todo')
app.use('/api/todos', todoRouter)

const dailyPictureRouter = require('./routes/daily-picture')
app.use('/api/daily-picture', dailyPictureRouter)

app.listen(port, () => {
  console.log(`TODO-server running on port ${port}`)
})