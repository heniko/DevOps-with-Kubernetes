require('dotenv').config()
const uuid = require('uuid')
const express = require('express')

const app = express()
const port = process.env.PORT || 3001
const s = uuid.v4()

let time = new Date()

let interval = setInterval(() => {
  time = new Date()
  console.log(`${time.toISOString()}: ${s}`)
}, 5 * 1000)

app.get('/', (req, res) => {
  res.send(`${time.toISOString()}: ${s}`)
})

app.listen(port, () => {
  console.log(`Logger running on port ${port}`)
})