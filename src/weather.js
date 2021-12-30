const queryWeatherApi = (city, units = 'metric') => `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=d948976cb10f4d3c918f447fe3054aa0`

const getWeatherData = async (city, units) => {
  const url = queryWeatherApi(city, units)
  const response = await fetch(url)
  if (response.status === 404) {
    throw new Error('City not found')
  }
  const json = await response.json()
  return json
}

const formatWeatherData = (json, units) => {
  if (units === 'metric') {
    return ({
      city: json.name,
      weather: ` ${json.weather[0].main}`,
      temp: ` ${json.main.temp}°`,
      feels: ` ${json.main.feels_like}°`,
      wind: ` ${json.wind.speed} meter/sec`,
      humidity: ` ${json.main.humidity}%`,
      pressure: ` ${json.main.pressure} hPa`
    })
  }
  if (units === 'imperial') {
    return ({
      city: json.name,
      weather: ` ${json.weather[0].main}`,
      temp: ` ${json.main.temp}℉;`,
      feels: ` ${json.main.feels_like}℉;`,
      wind: ` ${json.wind.speed} miles/hour`,
      humidity: ` ${json.main.humidity}%`,
      pressure: ` ${json.main.pressure} hPa`
    })
  }
}

export { getWeatherData, formatWeatherData }
