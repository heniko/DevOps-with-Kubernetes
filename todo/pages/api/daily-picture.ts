import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path, { resolve } from 'path'
import process from 'process'
import axios from 'axios'

const download_image = async () => {
  const image = axios({
    method: 'get',
    url: 'https://picsum.photos/1200',
    responseType: 'arraybuffer',
  }).then(response => {
    return response.data
  }, error => {
    console.log(error)
  })
  return image
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const folderPath = process && process.env.NODE_ENV === 'development' ?
    path.resolve('.', 'image') :
    path.join('/', 'usr', 'src', 'app', 'image')

  const imagePath = path.join(folderPath, 'image.jpg')
  const timestampPath = path.join(folderPath, 'image-timestamp.txt')

  let updateImage = false

  if (!fs.existsSync(timestampPath)) {
    // File doesn't exists, create it
    updateImage = true
  } else {
    // File exists, check if it is from today
    const timestamp = fs.readFileSync(timestampPath, 'utf8')
    const today = new Date().toISOString().split('T')[0]
    if (timestamp !== today) {
      updateImage = true
    }
  }

  if (updateImage) {
    // Download image and save it with timestamp
    const image = await download_image()
    fs.writeFileSync(imagePath, image)
    fs.writeFileSync(timestampPath, new Date().toISOString().split('T')[0])
  }

  const imageFile = fs.readFileSync(imagePath)
  res.setHeader('Content-Type', 'image/jpeg')
  res.send(imageFile)
}