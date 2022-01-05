import { getWeatherData, weatherDataFormatter } from './weather.js'
import { addErrorHandler } from './utils'

const main = document.querySelector('main')
const cityInput = document.querySelector('.city-input input')
const errorDiv = document.querySelector('.error')
const searchButton = document.querySelector('#search')
const unitsInput = document.querySelector('#units')

const displayError = (message) => {
  errorDiv.innerText = message
  errorDiv.classList.remove('invisible')
}

const hideError = () => {
  if (errorDiv.classList.contains('invisible')) return
  errorDiv.classList.add('invisible')
}

const createCardRow = (el, text = ' ') => {
  const cardRow = document.createElement(el)
  cardRow.innerText = text
  cardRow.classList.add('card-row')
  return cardRow
}

const createCard = () => {
  const weatherCard = document.createElement('div')
  weatherCard.classList.add('weather-card')
  weatherCard.append(
    createCardRow('h2'),
    createCardRow('div', 'Weather: '),
    createCardRow('div', 'Temperature: '),
    createCardRow('div', 'Feels like: '),
    createCardRow('div', 'Wind: '),
    createCardRow('div', 'Humidity: '),
    createCardRow('div', 'Pressure: ')
  )
  return weatherCard
}

const addDataToCard = async () => {
  const weatherCard = document.querySelector('.weather-card')
  const data = weatherDataFormatter[unitsInput.value](await getWeatherData(cityInput.value, unitsInput.value))
  if (weatherCard) weatherCard.remove()
  main.append(createCard())
  document.querySelectorAll('.card-row').forEach((row, i) => row.innerText += Object.values(data)[i])
}

searchButton.addEventListener('click', () => {
  if (!cityInput.value) return
  addErrorHandler(displayError, addDataToCard)()
})
cityInput.addEventListener('input', hideError)
