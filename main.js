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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./utils.js");



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
  const data = _weather_js__WEBPACK_IMPORTED_MODULE_0__.weatherDataFormatter[unitsInput.value](await (0,_weather_js__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)(cityInput.value, unitsInput.value))
  if (weatherCard) weatherCard.remove()
  main.append(createCard())
  document.querySelectorAll('.card-row').forEach((row, i) => row.innerText += Object.values(data)[i])
}

searchButton.addEventListener('click', () => {
  if (!cityInput.value) return
  ;(0,_utils__WEBPACK_IMPORTED_MODULE_1__.addErrorHandler)(displayError, addDataToCard)()
})
cityInput.addEventListener('input', hideError)


/***/ }),

/***/ "./utils.js":
/*!******************!*\
  !*** ./utils.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addErrorHandler": () => (/* binding */ addErrorHandler)
/* harmony export */ });
const addErrorHandler = (errHandler, fn) => (...params) => fn(...params).catch(errHandler)




/***/ }),

/***/ "./weather.js":
/*!********************!*\
  !*** ./weather.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWeatherData": () => (/* binding */ getWeatherData),
/* harmony export */   "weatherDataFormatter": () => (/* binding */ weatherDataFormatter)
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

const weatherDataFormatter = {
  metric(json) {
    return ({
      city: json.name,
      weather: ` ${json.weather[0].main}`,
      temp: ` ${json.main.temp}°`,
      feels: ` ${json.main.feels_like}°`,
      wind: ` ${json.wind.speed} meter/sec`,
      humidity: ` ${json.main.humidity}%`,
      pressure: ` ${json.main.pressure} hPa`
    })
  },

  imperial(json) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7OztBQ0FtRTtBQUMxQjs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSw2REFBb0IseUJBQXlCLDJEQUFjO0FBQzFFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLHdEQUFlO0FBQ2pCLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7Ozs7O0FDckRBOztBQUUwQjs7Ozs7Ozs7Ozs7Ozs7OztBQ0YxQix5R0FBeUcsS0FBSyxTQUFTLE1BQU07O0FBRTdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxQkFBcUI7QUFDeEMsZ0JBQWdCLGVBQWU7QUFDL0IsaUJBQWlCLHFCQUFxQjtBQUN0QyxnQkFBZ0IsaUJBQWlCO0FBQ2pDLG9CQUFvQixtQkFBbUI7QUFDdkMsb0JBQW9CLG9CQUFvQjtBQUN4QyxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDLGdCQUFnQixlQUFlLEVBQUU7QUFDakMsaUJBQWlCLHFCQUFxQixFQUFFO0FBQ3hDLGdCQUFnQixpQkFBaUI7QUFDakMsb0JBQW9CLG1CQUFtQjtBQUN2QyxvQkFBb0Isb0JBQW9CO0FBQ3hDLEtBQUs7QUFDTDtBQUNBOztBQUUrQzs7Ozs7OztVQ3RDL0M7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTm9CO0FBQ0M7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3N0eWxlLmNzcz9iMjU5Iiwid2VicGFjazovLy8uL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi93ZWF0aGVyLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IGdldFdlYXRoZXJEYXRhLCB3ZWF0aGVyRGF0YUZvcm1hdHRlciB9IGZyb20gJy4vd2VhdGhlci5qcydcbmltcG9ydCB7IGFkZEVycm9ySGFuZGxlciB9IGZyb20gJy4vdXRpbHMnXG5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbmNvbnN0IGNpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5LWlucHV0IGlucHV0JylcbmNvbnN0IGVycm9yRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yJylcbmNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gnKVxuY29uc3QgdW5pdHNJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1bml0cycpXG5cbmNvbnN0IGRpc3BsYXlFcnJvciA9IChtZXNzYWdlKSA9PiB7XG4gIGVycm9yRGl2LmlubmVyVGV4dCA9IG1lc3NhZ2VcbiAgZXJyb3JEaXYuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJylcbn1cblxuY29uc3QgaGlkZUVycm9yID0gKCkgPT4ge1xuICBpZiAoZXJyb3JEaXYuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnZpc2libGUnKSkgcmV0dXJuXG4gIGVycm9yRGl2LmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScpXG59XG5cbmNvbnN0IGNyZWF0ZUNhcmRSb3cgPSAoZWwsIHRleHQgPSAnICcpID0+IHtcbiAgY29uc3QgY2FyZFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWwpXG4gIGNhcmRSb3cuaW5uZXJUZXh0ID0gdGV4dFxuICBjYXJkUm93LmNsYXNzTGlzdC5hZGQoJ2NhcmQtcm93JylcbiAgcmV0dXJuIGNhcmRSb3dcbn1cblxuY29uc3QgY3JlYXRlQ2FyZCA9ICgpID0+IHtcbiAgY29uc3Qgd2VhdGhlckNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB3ZWF0aGVyQ2FyZC5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLWNhcmQnKVxuICB3ZWF0aGVyQ2FyZC5hcHBlbmQoXG4gICAgY3JlYXRlQ2FyZFJvdygnaDInKSxcbiAgICBjcmVhdGVDYXJkUm93KCdkaXYnLCAnV2VhdGhlcjogJyksXG4gICAgY3JlYXRlQ2FyZFJvdygnZGl2JywgJ1RlbXBlcmF0dXJlOiAnKSxcbiAgICBjcmVhdGVDYXJkUm93KCdkaXYnLCAnRmVlbHMgbGlrZTogJyksXG4gICAgY3JlYXRlQ2FyZFJvdygnZGl2JywgJ1dpbmQ6ICcpLFxuICAgIGNyZWF0ZUNhcmRSb3coJ2RpdicsICdIdW1pZGl0eTogJyksXG4gICAgY3JlYXRlQ2FyZFJvdygnZGl2JywgJ1ByZXNzdXJlOiAnKVxuICApXG4gIHJldHVybiB3ZWF0aGVyQ2FyZFxufVxuXG5jb25zdCBhZGREYXRhVG9DYXJkID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB3ZWF0aGVyQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWNhcmQnKVxuICBjb25zdCBkYXRhID0gd2VhdGhlckRhdGFGb3JtYXR0ZXJbdW5pdHNJbnB1dC52YWx1ZV0oYXdhaXQgZ2V0V2VhdGhlckRhdGEoY2l0eUlucHV0LnZhbHVlLCB1bml0c0lucHV0LnZhbHVlKSlcbiAgaWYgKHdlYXRoZXJDYXJkKSB3ZWF0aGVyQ2FyZC5yZW1vdmUoKVxuICBtYWluLmFwcGVuZChjcmVhdGVDYXJkKCkpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkLXJvdycpLmZvckVhY2goKHJvdywgaSkgPT4gcm93LmlubmVyVGV4dCArPSBPYmplY3QudmFsdWVzKGRhdGEpW2ldKVxufVxuXG5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGlmICghY2l0eUlucHV0LnZhbHVlKSByZXR1cm5cbiAgYWRkRXJyb3JIYW5kbGVyKGRpc3BsYXlFcnJvciwgYWRkRGF0YVRvQ2FyZCkoKVxufSlcbmNpdHlJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGhpZGVFcnJvcilcbiIsImNvbnN0IGFkZEVycm9ySGFuZGxlciA9IChlcnJIYW5kbGVyLCBmbikgPT4gKC4uLnBhcmFtcykgPT4gZm4oLi4ucGFyYW1zKS5jYXRjaChlcnJIYW5kbGVyKVxuXG5leHBvcnQgeyBhZGRFcnJvckhhbmRsZXIgfVxuIiwiY29uc3QgcXVlcnlXZWF0aGVyQXBpID0gKGNpdHksIHVuaXRzID0gJ21ldHJpYycpID0+IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mdW5pdHM9JHt1bml0c30mYXBwaWQ9ZDk0ODk3NmNiMTBmNGQzYzkxOGY0NDdmZTMwNTRhYTBgXG5cbmNvbnN0IGdldFdlYXRoZXJEYXRhID0gYXN5bmMgKGNpdHksIHVuaXRzKSA9PiB7XG4gIGNvbnN0IHVybCA9IHF1ZXJ5V2VhdGhlckFwaShjaXR5LCB1bml0cylcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpXG4gIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwNCkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2l0eSBub3QgZm91bmQnKVxuICB9XG4gIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgcmV0dXJuIGpzb25cbn1cblxuY29uc3Qgd2VhdGhlckRhdGFGb3JtYXR0ZXIgPSB7XG4gIG1ldHJpYyhqc29uKSB7XG4gICAgcmV0dXJuICh7XG4gICAgICBjaXR5OiBqc29uLm5hbWUsXG4gICAgICB3ZWF0aGVyOiBgICR7anNvbi53ZWF0aGVyWzBdLm1haW59YCxcbiAgICAgIHRlbXA6IGAgJHtqc29uLm1haW4udGVtcH3CsGAsXG4gICAgICBmZWVsczogYCAke2pzb24ubWFpbi5mZWVsc19saWtlfcKwYCxcbiAgICAgIHdpbmQ6IGAgJHtqc29uLndpbmQuc3BlZWR9IG1ldGVyL3NlY2AsXG4gICAgICBodW1pZGl0eTogYCAke2pzb24ubWFpbi5odW1pZGl0eX0lYCxcbiAgICAgIHByZXNzdXJlOiBgICR7anNvbi5tYWluLnByZXNzdXJlfSBoUGFgXG4gICAgfSlcbiAgfSxcblxuICBpbXBlcmlhbChqc29uKSB7XG4gICAgcmV0dXJuICh7XG4gICAgICBjaXR5OiBqc29uLm5hbWUsXG4gICAgICB3ZWF0aGVyOiBgICR7anNvbi53ZWF0aGVyWzBdLm1haW59YCxcbiAgICAgIHRlbXA6IGAgJHtqc29uLm1haW4udGVtcH3ihIk7YCxcbiAgICAgIGZlZWxzOiBgICR7anNvbi5tYWluLmZlZWxzX2xpa2V94oSJO2AsXG4gICAgICB3aW5kOiBgICR7anNvbi53aW5kLnNwZWVkfSBtaWxlcy9ob3VyYCxcbiAgICAgIGh1bWlkaXR5OiBgICR7anNvbi5tYWluLmh1bWlkaXR5fSVgLFxuICAgICAgcHJlc3N1cmU6IGAgJHtqc29uLm1haW4ucHJlc3N1cmV9IGhQYWBcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCB7IGdldFdlYXRoZXJEYXRhLCB3ZWF0aGVyRGF0YUZvcm1hdHRlciB9XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgJy4vd2VhdGhlci5qcydcbmltcG9ydCAnLi9hcHAuanMnXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=