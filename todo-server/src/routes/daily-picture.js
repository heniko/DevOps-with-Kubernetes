const dailyPictureRouter = require('express').Router()
const axios = require('axios')
const fs = require('fs')
const path = require('path')

const downloadPicture = async () => {
  const picture = axios({
    method: 'get',
    url: 'https://picsum.photos/1200',
    responseType: 'arraybuffer'
  }).then(response => {
    return response.data
  }, error => {
    console.log(error)
  })

  return picture
}

dailyPictureRouter.get('/', async (req, res) => {
  const folderPath = process && process.env.NODE_ENV === 'development' ?
    path.resolve('.', 'picture') :
    path.join('/', 'usr', 'src', 'app', 'picture')

  const picturePath = path.join(folderPath, 'picture.jpg')
  const timestampPath = path.join(folderPath, 'picture-timestamp.txt')

  let updatePicture = false

  if (!fs.existsSync(timestampPath) || !fs.existsSync(picturePath)) {
    // File doesn't exists, create it
    updatePicture = true
  } else {
    // File exists, check if it is from today
    const timestamp = fs.readFileSync(timestampPath, 'utf8')
    const today = new Date().toISOString().split('T')[0]
    if (timestamp !== today) {
      updatePicture = true
    }
  }

  if (updatePicture) {
    // Download picture and save it with timestamp
    const picture = await downloadPicture()
    fs.writeFileSync(picturePath, picture)
    fs.writeFileSync(timestampPath, new Date().toISOString().split('T')[0])
  }

  const pictureFile = fs.readFileSync(picturePath)
  res.setHeader('Content-Type', 'image/jpeg')
  res.send(pictureFile)
})

module.exports = dailyPictureRouter