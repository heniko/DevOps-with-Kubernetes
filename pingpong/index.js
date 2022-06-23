require('dotenv').config()
const express = require('express')
const fs = require('fs')
const path = require('path')

const dir = path.join('/', 'usr', 'src', 'app', 'pingpong-count')
const filePath = path.join(dir, 'count')

const fileExists = () => {
  try {
    return fs.statSync().isFile()
  } catch (err) {
    return false
  }
}

const writeFile = (data) => {
  fs.writeFileSync(filePath, data)
}

const readFile = () => {
  return fs.readFileSync(filePath, 'utf8')
}

if (!fileExists()) {
  writeFile('0')
}

const app = express()
const port = process.env.PORT || 3000

app.get('/pingpong', (req, res) => {
  const count = readFile()
  res.send(`pong ${count}`)
  writeFile(`${parseInt(count) + 1}`)
})

app.listen(port, () => {
  console.log(`Ping-pong running on port ${port}`)
})