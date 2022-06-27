require('dotenv').config()
const uuid = require('uuid')
const express = require('express')
const axios = require('axios')
const fs = require('fs')
const path = require('path')

const app = express()
const port = process.env.PORT || 3000
const message = process.env.MESSAGE || 'Hello default message!'
const s = uuid.v4()

const dir = path.join('/', 'usr', 'src', 'app', 'files')
const stampPath = path.join(dir, 'timestamp')

let getMessage = async () => {
  let time = fs.readFileSync(stampPath)
  let pongs = 0

  try {
    const response = await axios.get(`http://pingpong-svc:2345/pingpong`)
    pongs = response.data
  } catch (e) {
    console.log(e)
  }

  return `${message}\n${time}: ${s}\nPing / Pongs: ${pongs}`
}

let interval = setInterval(async () => {
  console.log(await getMessage())
}, 5 * 1000)

app.get('/logger', async (req, res) => {
  res.send(await getMessage())
})

app.listen(port, () => {
  console.log(`Logger running on port ${port}`)
})