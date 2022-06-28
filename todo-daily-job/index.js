require('dotenv').config()
const axios = require('axios')
const apiUrl = process.env.API_URL || 'http://localhost:3001/api/todos'

const run = async () => {
  try {
    const wikiRes = await axios.get('https://en.wikipedia.org/wiki/Special:Random')
    const wikiUrl = wikiRes.request.res.responseUrl
    const _res = await axios.post(apiUrl, {
      text: `Read ${wikiUrl}`
    })
  } catch (err) {
    console.log(err)
  }
}

run()