/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather.js */ "./weather.js");


const main = document.querySelector('main')
const cityInput = document.querySelector('.city-input input')
const errorDiv = document.querySelector('.error')
const searchButton = document.querySelector('.city-input button')
const unitsInput = document.querySelector('#units')

const displayError = (message) => {
  errorDiv.innerText = message
  errorDiv.classList.remove('invisible')
}

const hideError = () => {
  if (errorDiv.classList.contains('invisible')) return
  errorDiv.classList.add('invisible')
}

const addErrorHandler = (fn) => (...params) => fn(...params).catch(displayError)

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
  const data = (0,_weather_js__WEBPACK_IMPORTED_MODULE_0__.formatWeatherData)(await (0,_weather_js__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)(cityInput.value, unitsInput.value), unitsInput.value)
  if (weatherCard) weatherCard.remove()
  main.append(createCard())
  document.querySelectorAll('.card-row').forEach((row, i) => row.innerText += Object.values(data)[i])
}

searchButton.addEventListener('click', addDataToCard)
cityInput.addEventListener('input', hideError)


/***/ }),

/***/ "./weather.js":
/*!********************!*\
  !*** ./weather.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWeatherData": () => (/* binding */ getWeatherData),
/* harmony export */   "formatWeatherData": () => (/* binding */ formatWeatherData)
/* harmony export */ });
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
      weather: json.weather[0].main,
      temp: `${json.main.temp}°`,
      feels: `${json.main.feels_like}°`,
      wind: `${json.wind.speed} meter/sec`,
      humidity: `${json.main.humidity}%`,
      pressure: `${json.main.pressure} hPa`
    })
  }
  if (units === 'imperial') {
    return ({
      city: json.name,
      weather: json.weather[0].main,
      temp: `${json.main.temp}℉;`,
      feels: `${json.main.feels_like}℉;`,
      wind: `${json.wind.speed} miles/hour`,
      humidity: `${json.main.humidity}%`,
      pressure: `${json.main.pressure} hPa`
    })
  }
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./style.css");
/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather.js */ "./weather.js");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.js */ "./app.js");




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7O0FDQWdFOztBQUVoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLDhEQUFpQixPQUFPLDJEQUFjO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuREEseUdBQXlHLEtBQUssU0FBUyxNQUFNOztBQUU3SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZUFBZTtBQUM5QixnQkFBZ0IscUJBQXFCO0FBQ3JDLGVBQWUsaUJBQWlCO0FBQ2hDLG1CQUFtQixtQkFBbUI7QUFDdEMsbUJBQW1CLG9CQUFvQjtBQUN2QyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZUFBZSxFQUFFO0FBQ2hDLGdCQUFnQixxQkFBcUIsRUFBRTtBQUN2QyxlQUFlLGlCQUFpQjtBQUNoQyxtQkFBbUIsbUJBQW1CO0FBQ3RDLG1CQUFtQixvQkFBb0I7QUFDdkMsS0FBSztBQUNMO0FBQ0E7O0FBRTRDOzs7Ozs7O1VDckM1QztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOb0I7QUFDQztBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3R5bGUuY3NzP2IyNTkiLCJ3ZWJwYWNrOi8vLy4vYXBwLmpzIiwid2VicGFjazovLy8uL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgZ2V0V2VhdGhlckRhdGEsIGZvcm1hdFdlYXRoZXJEYXRhIH0gZnJvbSAnLi93ZWF0aGVyLmpzJ1xuXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG5jb25zdCBjaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eS1pbnB1dCBpbnB1dCcpXG5jb25zdCBlcnJvckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvcicpXG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eS1pbnB1dCBidXR0b24nKVxuY29uc3QgdW5pdHNJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1bml0cycpXG5cbmNvbnN0IGRpc3BsYXlFcnJvciA9IChtZXNzYWdlKSA9PiB7XG4gIGVycm9yRGl2LmlubmVyVGV4dCA9IG1lc3NhZ2VcbiAgZXJyb3JEaXYuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJylcbn1cblxuY29uc3QgaGlkZUVycm9yID0gKCkgPT4ge1xuICBpZiAoZXJyb3JEaXYuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnZpc2libGUnKSkgcmV0dXJuXG4gIGVycm9yRGl2LmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScpXG59XG5cbmNvbnN0IGFkZEVycm9ySGFuZGxlciA9IChmbikgPT4gKC4uLnBhcmFtcykgPT4gZm4oLi4ucGFyYW1zKS5jYXRjaChkaXNwbGF5RXJyb3IpXG5cbmNvbnN0IGNyZWF0ZUNhcmRSb3cgPSAoZWwsIHRleHQgPSAnICcpID0+IHtcbiAgY29uc3QgY2FyZFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWwpXG4gIGNhcmRSb3cuaW5uZXJUZXh0ID0gdGV4dFxuICBjYXJkUm93LmNsYXNzTGlzdC5hZGQoJ2NhcmQtcm93JylcbiAgcmV0dXJuIGNhcmRSb3dcbn1cblxuY29uc3QgY3JlYXRlQ2FyZCA9ICgpID0+IHtcbiAgY29uc3Qgd2VhdGhlckNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB3ZWF0aGVyQ2FyZC5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLWNhcmQnKVxuICB3ZWF0aGVyQ2FyZC5hcHBlbmQoXG4gICAgY3JlYXRlQ2FyZFJvdygnaDInKSxcbiAgICBjcmVhdGVDYXJkUm93KCdkaXYnLCAnV2VhdGhlcjogJyksXG4gICAgY3JlYXRlQ2FyZFJvdygnZGl2JywgJ1RlbXBlcmF0dXJlOiAnKSxcbiAgICBjcmVhdGVDYXJkUm93KCdkaXYnLCAnRmVlbHMgbGlrZTogJyksXG4gICAgY3JlYXRlQ2FyZFJvdygnZGl2JywgJ1dpbmQ6ICcpLFxuICAgIGNyZWF0ZUNhcmRSb3coJ2RpdicsICdIdW1pZGl0eTogJyksXG4gICAgY3JlYXRlQ2FyZFJvdygnZGl2JywgJ1ByZXNzdXJlOiAnKVxuICApXG4gIHJldHVybiB3ZWF0aGVyQ2FyZFxufVxuXG5jb25zdCBhZGREYXRhVG9DYXJkID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB3ZWF0aGVyQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWNhcmQnKVxuICBjb25zdCBkYXRhID0gZm9ybWF0V2VhdGhlckRhdGEoYXdhaXQgZ2V0V2VhdGhlckRhdGEoY2l0eUlucHV0LnZhbHVlLCB1bml0c0lucHV0LnZhbHVlKSwgdW5pdHNJbnB1dC52YWx1ZSlcbiAgaWYgKHdlYXRoZXJDYXJkKSB3ZWF0aGVyQ2FyZC5yZW1vdmUoKVxuICBtYWluLmFwcGVuZChjcmVhdGVDYXJkKCkpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkLXJvdycpLmZvckVhY2goKHJvdywgaSkgPT4gcm93LmlubmVyVGV4dCArPSBPYmplY3QudmFsdWVzKGRhdGEpW2ldKVxufVxuXG5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGREYXRhVG9DYXJkKVxuY2l0eUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgaGlkZUVycm9yKVxuIiwiY29uc3QgcXVlcnlXZWF0aGVyQXBpID0gKGNpdHksIHVuaXRzID0gJ21ldHJpYycpID0+IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mdW5pdHM9JHt1bml0c30mYXBwaWQ9ZDk0ODk3NmNiMTBmNGQzYzkxOGY0NDdmZTMwNTRhYTBgXG5cbmNvbnN0IGdldFdlYXRoZXJEYXRhID0gYXN5bmMgKGNpdHksIHVuaXRzKSA9PiB7XG4gIGNvbnN0IHVybCA9IHF1ZXJ5V2VhdGhlckFwaShjaXR5LCB1bml0cylcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpXG4gIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwNCkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2l0eSBub3QgZm91bmQnKVxuICB9XG4gIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgcmV0dXJuIGpzb25cbn1cblxuY29uc3QgZm9ybWF0V2VhdGhlckRhdGEgPSAoanNvbiwgdW5pdHMpID0+IHtcbiAgaWYgKHVuaXRzID09PSAnbWV0cmljJykge1xuICAgIHJldHVybiAoe1xuICAgICAgY2l0eToganNvbi5uYW1lLFxuICAgICAgd2VhdGhlcjoganNvbi53ZWF0aGVyWzBdLm1haW4sXG4gICAgICB0ZW1wOiBgJHtqc29uLm1haW4udGVtcH3CsGAsXG4gICAgICBmZWVsczogYCR7anNvbi5tYWluLmZlZWxzX2xpa2V9wrBgLFxuICAgICAgd2luZDogYCR7anNvbi53aW5kLnNwZWVkfSBtZXRlci9zZWNgLFxuICAgICAgaHVtaWRpdHk6IGAke2pzb24ubWFpbi5odW1pZGl0eX0lYCxcbiAgICAgIHByZXNzdXJlOiBgJHtqc29uLm1haW4ucHJlc3N1cmV9IGhQYWBcbiAgICB9KVxuICB9XG4gIGlmICh1bml0cyA9PT0gJ2ltcGVyaWFsJykge1xuICAgIHJldHVybiAoe1xuICAgICAgY2l0eToganNvbi5uYW1lLFxuICAgICAgd2VhdGhlcjoganNvbi53ZWF0aGVyWzBdLm1haW4sXG4gICAgICB0ZW1wOiBgJHtqc29uLm1haW4udGVtcH3ihIk7YCxcbiAgICAgIGZlZWxzOiBgJHtqc29uLm1haW4uZmVlbHNfbGlrZX3ihIk7YCxcbiAgICAgIHdpbmQ6IGAke2pzb24ud2luZC5zcGVlZH0gbWlsZXMvaG91cmAsXG4gICAgICBodW1pZGl0eTogYCR7anNvbi5tYWluLmh1bWlkaXR5fSVgLFxuICAgICAgcHJlc3N1cmU6IGAke2pzb24ubWFpbi5wcmVzc3VyZX0gaFBhYFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IHsgZ2V0V2VhdGhlckRhdGEsIGZvcm1hdFdlYXRoZXJEYXRhIH1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCAnLi93ZWF0aGVyLmpzJ1xuaW1wb3J0ICcuL2FwcC5qcydcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==