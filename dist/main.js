/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
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
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./css/style.css");
/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather.js */ "./weather.js");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.js */ "./app.js");




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7OztBQ0FtRTtBQUMxQjs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSw2REFBb0IseUJBQXlCLDJEQUFjO0FBQzFFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLHdEQUFlO0FBQ2pCLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7Ozs7O0FDckRBOztBQUUwQjs7Ozs7Ozs7Ozs7Ozs7OztBQ0YxQix5R0FBeUcsS0FBSyxTQUFTLE1BQU07O0FBRTdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxQkFBcUI7QUFDeEMsZ0JBQWdCLGVBQWU7QUFDL0IsaUJBQWlCLHFCQUFxQjtBQUN0QyxnQkFBZ0IsaUJBQWlCO0FBQ2pDLG9CQUFvQixtQkFBbUI7QUFDdkMsb0JBQW9CLG9CQUFvQjtBQUN4QyxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDLGdCQUFnQixlQUFlLEVBQUU7QUFDakMsaUJBQWlCLHFCQUFxQixFQUFFO0FBQ3hDLGdCQUFnQixpQkFBaUI7QUFDakMsb0JBQW9CLG1CQUFtQjtBQUN2QyxvQkFBb0Isb0JBQW9CO0FBQ3hDLEtBQUs7QUFDTDtBQUNBOztBQUUrQzs7Ozs7OztVQ3RDL0M7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTndCO0FBQ0g7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Nzcy9zdHlsZS5jc3M/OTMwNiIsIndlYnBhY2s6Ly8vLi9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vd2VhdGhlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyBnZXRXZWF0aGVyRGF0YSwgd2VhdGhlckRhdGFGb3JtYXR0ZXIgfSBmcm9tICcuL3dlYXRoZXIuanMnXG5pbXBvcnQgeyBhZGRFcnJvckhhbmRsZXIgfSBmcm9tICcuL3V0aWxzJ1xuXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG5jb25zdCBjaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eS1pbnB1dCBpbnB1dCcpXG5jb25zdCBlcnJvckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvcicpXG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoJylcbmNvbnN0IHVuaXRzSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdW5pdHMnKVxuXG5jb25zdCBkaXNwbGF5RXJyb3IgPSAobWVzc2FnZSkgPT4ge1xuICBlcnJvckRpdi5pbm5lclRleHQgPSBtZXNzYWdlXG4gIGVycm9yRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpXG59XG5cbmNvbnN0IGhpZGVFcnJvciA9ICgpID0+IHtcbiAgaWYgKGVycm9yRGl2LmNsYXNzTGlzdC5jb250YWlucygnaW52aXNpYmxlJykpIHJldHVyblxuICBlcnJvckRpdi5jbGFzc0xpc3QuYWRkKCdpbnZpc2libGUnKVxufVxuXG5jb25zdCBjcmVhdGVDYXJkUm93ID0gKGVsLCB0ZXh0ID0gJyAnKSA9PiB7XG4gIGNvbnN0IGNhcmRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsKVxuICBjYXJkUm93LmlubmVyVGV4dCA9IHRleHRcbiAgY2FyZFJvdy5jbGFzc0xpc3QuYWRkKCdjYXJkLXJvdycpXG4gIHJldHVybiBjYXJkUm93XG59XG5cbmNvbnN0IGNyZWF0ZUNhcmQgPSAoKSA9PiB7XG4gIGNvbnN0IHdlYXRoZXJDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgd2VhdGhlckNhcmQuY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1jYXJkJylcbiAgd2VhdGhlckNhcmQuYXBwZW5kKFxuICAgIGNyZWF0ZUNhcmRSb3coJ2gyJyksXG4gICAgY3JlYXRlQ2FyZFJvdygnZGl2JywgJ1dlYXRoZXI6ICcpLFxuICAgIGNyZWF0ZUNhcmRSb3coJ2RpdicsICdUZW1wZXJhdHVyZTogJyksXG4gICAgY3JlYXRlQ2FyZFJvdygnZGl2JywgJ0ZlZWxzIGxpa2U6ICcpLFxuICAgIGNyZWF0ZUNhcmRSb3coJ2RpdicsICdXaW5kOiAnKSxcbiAgICBjcmVhdGVDYXJkUm93KCdkaXYnLCAnSHVtaWRpdHk6ICcpLFxuICAgIGNyZWF0ZUNhcmRSb3coJ2RpdicsICdQcmVzc3VyZTogJylcbiAgKVxuICByZXR1cm4gd2VhdGhlckNhcmRcbn1cblxuY29uc3QgYWRkRGF0YVRvQ2FyZCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3Qgd2VhdGhlckNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1jYXJkJylcbiAgY29uc3QgZGF0YSA9IHdlYXRoZXJEYXRhRm9ybWF0dGVyW3VuaXRzSW5wdXQudmFsdWVdKGF3YWl0IGdldFdlYXRoZXJEYXRhKGNpdHlJbnB1dC52YWx1ZSwgdW5pdHNJbnB1dC52YWx1ZSkpXG4gIGlmICh3ZWF0aGVyQ2FyZCkgd2VhdGhlckNhcmQucmVtb3ZlKClcbiAgbWFpbi5hcHBlbmQoY3JlYXRlQ2FyZCgpKVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZC1yb3cnKS5mb3JFYWNoKChyb3csIGkpID0+IHJvdy5pbm5lclRleHQgKz0gT2JqZWN0LnZhbHVlcyhkYXRhKVtpXSlcbn1cblxuc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBpZiAoIWNpdHlJbnB1dC52YWx1ZSkgcmV0dXJuXG4gIGFkZEVycm9ySGFuZGxlcihkaXNwbGF5RXJyb3IsIGFkZERhdGFUb0NhcmQpKClcbn0pXG5jaXR5SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBoaWRlRXJyb3IpXG4iLCJjb25zdCBhZGRFcnJvckhhbmRsZXIgPSAoZXJySGFuZGxlciwgZm4pID0+ICguLi5wYXJhbXMpID0+IGZuKC4uLnBhcmFtcykuY2F0Y2goZXJySGFuZGxlcilcblxuZXhwb3J0IHsgYWRkRXJyb3JIYW5kbGVyIH1cbiIsImNvbnN0IHF1ZXJ5V2VhdGhlckFwaSA9IChjaXR5LCB1bml0cyA9ICdtZXRyaWMnKSA9PiBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JnVuaXRzPSR7dW5pdHN9JmFwcGlkPWQ5NDg5NzZjYjEwZjRkM2M5MThmNDQ3ZmUzMDU0YWEwYFxuXG5jb25zdCBnZXRXZWF0aGVyRGF0YSA9IGFzeW5jIChjaXR5LCB1bml0cykgPT4ge1xuICBjb25zdCB1cmwgPSBxdWVyeVdlYXRoZXJBcGkoY2l0eSwgdW5pdHMpXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKVxuICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NpdHkgbm90IGZvdW5kJylcbiAgfVxuICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gIHJldHVybiBqc29uXG59XG5cbmNvbnN0IHdlYXRoZXJEYXRhRm9ybWF0dGVyID0ge1xuICBtZXRyaWMoanNvbikge1xuICAgIHJldHVybiAoe1xuICAgICAgY2l0eToganNvbi5uYW1lLFxuICAgICAgd2VhdGhlcjogYCAke2pzb24ud2VhdGhlclswXS5tYWlufWAsXG4gICAgICB0ZW1wOiBgICR7anNvbi5tYWluLnRlbXB9wrBgLFxuICAgICAgZmVlbHM6IGAgJHtqc29uLm1haW4uZmVlbHNfbGlrZX3CsGAsXG4gICAgICB3aW5kOiBgICR7anNvbi53aW5kLnNwZWVkfSBtZXRlci9zZWNgLFxuICAgICAgaHVtaWRpdHk6IGAgJHtqc29uLm1haW4uaHVtaWRpdHl9JWAsXG4gICAgICBwcmVzc3VyZTogYCAke2pzb24ubWFpbi5wcmVzc3VyZX0gaFBhYFxuICAgIH0pXG4gIH0sXG5cbiAgaW1wZXJpYWwoanNvbikge1xuICAgIHJldHVybiAoe1xuICAgICAgY2l0eToganNvbi5uYW1lLFxuICAgICAgd2VhdGhlcjogYCAke2pzb24ud2VhdGhlclswXS5tYWlufWAsXG4gICAgICB0ZW1wOiBgICR7anNvbi5tYWluLnRlbXB94oSJO2AsXG4gICAgICBmZWVsczogYCAke2pzb24ubWFpbi5mZWVsc19saWtlfeKEiTtgLFxuICAgICAgd2luZDogYCAke2pzb24ud2luZC5zcGVlZH0gbWlsZXMvaG91cmAsXG4gICAgICBodW1pZGl0eTogYCAke2pzb24ubWFpbi5odW1pZGl0eX0lYCxcbiAgICAgIHByZXNzdXJlOiBgICR7anNvbi5tYWluLnByZXNzdXJlfSBoUGFgXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgeyBnZXRXZWF0aGVyRGF0YSwgd2VhdGhlckRhdGFGb3JtYXR0ZXIgfVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vY3NzL3N0eWxlLmNzcydcbmltcG9ydCAnLi93ZWF0aGVyLmpzJ1xuaW1wb3J0ICcuL2FwcC5qcydcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==