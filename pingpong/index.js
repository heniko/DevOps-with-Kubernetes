require('dotenv').config()
const express = require('express')

const app = express()
const port = process.env.PORT || 3000

let count = 0

app.get('/pingpong', (req, res) => {
  res.send(`${count}`)
  count += 1
})

app.listen(port, () => {
  console.log(`Ping-pong running on port ${port}`)
})