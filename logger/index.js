require('dotenv').config()
const uuid = require('uuid')
const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()
const port = process.env.PORT || 3000
const s = uuid.v4()

const dir = path.join('/', 'usr', 'src', 'app', 'files')
const stampPath = path.join(dir, 'timestamp')

let getMessage = () => {
  let time = fs.readFileSync(stampPath)
  return `${time}: ${s}`
}

let interval = setInterval(() => {
  console.log(getMessage())
}, 5 * 1000)

app.get('/', (req, res) => {
  res.send(getMessage())
})

app.listen(port, () => {
  console.log(`Logger running on port ${port}`)
})