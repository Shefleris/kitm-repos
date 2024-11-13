export {cityLatitude, cityLongtitude, weatherAPIKey, weatherGeoApiUrl, weatherAPIUrl}

const weatherAPIKey = process.env.MIX_API_KEY;
const cityLatitude = '54.9'
const cityLongtitude = '23.9'
const weatherGeoApiUrl =`https://api.openweathermap.org/geo/1.0/direct?`
const weatherAPIUrl = `https://api.openweathermap.org/data/2.5/weather?`