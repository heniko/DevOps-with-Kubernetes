const fs = require('fs')
const path = require('path')

const dir = path.join('/', 'usr', 'src', 'app', 'files')
const stampPath = path.join(dir, 'timestamp')
const opts = {
  encoding: "utf8",
  flag: "w",
  mode: 0o666
}
const cb = (err) => {
  if (err) {
    console.log(err)
  }
}

let time = new Date()
fs.writeFile(stampPath, time.toISOString(), opts, cb)

let interval = setInterval(() => {
  time = new Date()
  fs.writeFile(stampPath, time.toISOString(), opts, cb)
}, 5 * 1000)