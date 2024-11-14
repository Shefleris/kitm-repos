export {units, weatherAPIKey, weatherAPIUrl}

const weatherAPIKey = process.env.MIX_API_KEY;
const weatherAPIUrl = `https://api.openweathermap.org/data/2.5/weather?`;
const units = 'metric';//Don't change for now default: Kelvin, metric: Celsius, imperial: Fahrenheit