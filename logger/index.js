const uuid = require('uuid')

const s = uuid.v4()

let interval = setInterval(() => {
  const now = new Date()
  console.log(`${now.toISOString()}: ${s}`)
}, 5 * 1000)