/* global process */
require('dotenv').config()
const axios = require('axios')
const apiKey = process.env.API_APILAYER
const apiLayerApiUrl = `https://api.apilayer.com/short_url/hash`

const createShortUrlApiLayer = async longUrl => {
  try {
    let response = await axios.post(apiLayerApiUrl, longUrl, {
      headers: {
        apikey: apiKey,
      },
    })
    return response.short_url
  } catch (err) {
    console.error('Error creating short URL:', err)
  }
}

module.exports = createShortUrlApiLayer
