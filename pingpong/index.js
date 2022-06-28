require('dotenv').config()
const express = require('express')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const app = express()
const port = process.env.PORT || 3000

app.get('/pingpong', async (req, res) => {
  let count = await prisma.ping.count()
  res.send(`${count}`)
  await prisma.ping.create({ data: {} })
})

app.listen(port, () => {
  console.log(`Ping-pong running on port ${port}`)
})