/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/hangman.js":
/*!************************!*\
  !*** ./src/hangman.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Hangman; });\nclass Hangman {\r\n    constructor(word, remainingGuess) {\r\n        this.word = word.toLowerCase().split('')\r\n        this.remainingGuess = remainingGuess\r\n        this.guessedLetters = []\r\n        this.status = \"playing\"\r\n    }\r\n    get puzzle() {\r\n        let puzzle = ''\r\n\r\n        this.word.forEach((letter) => {\r\n            if (this.guessedLetters.includes(letter) || letter === ' ') {\r\n                puzzle = puzzle + letter\r\n            } else {\r\n                puzzle = puzzle + '*'\r\n            }\r\n        })\r\n        return puzzle\r\n    }\r\n    reCalculate() {\r\n        if (this.remainingGuess === 0) {\r\n            this.status = 'failed'\r\n        } else if (this.puzzle.includes('*') && this.remainingGuess !== 0) {\r\n            this.status = 'playing'\r\n        } else {\r\n            this.status = 'finished'\r\n        }\r\n    }\r\n    makeGuess(guess) {\r\n        guess = guess.toLowerCase()\r\n        const isUnique = !this.guessedLetters.includes(guess)\r\n        const isBadGuess = !this.word.includes(guess)\r\n\r\n        if (isUnique) {\r\n            this.guessedLetters.push(guess)\r\n        }\r\n        if (isUnique && isBadGuess) {\r\n            this.remainingGuess--\r\n        }\r\n        this.reCalculate()\r\n    }\r\n    get statusMessage() {\r\n        if (this.status === 'playing') {\r\n            return `Guesses Left: ${this.remainingGuess}`\r\n        }\r\n        if (this.status === 'failed') {\r\n            return `Failed -> Nice try! The word was \"${this.word.join('')}\"`\r\n        }\r\n        if (this.status === 'finished') {\r\n            return `Finished -> Great work! You guessed the word`\r\n        }\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/hangman.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hangman__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hangman */ \"./src/hangman.js\");\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request */ \"./src/request.js\");\n\r\n\r\n\r\nconst puzzleEl = document.querySelector('#puzzle')\r\nconst guessesEl = document.querySelector('#guesses')\r\nlet game1 \r\n\r\nwindow.addEventListener('keypress', (e) => {\r\n    if (game1.status === 'playing') {\r\n        const guess = String.fromCharCode(e.charCode)\r\n        game1.makeGuess(guess)\r\n        render()\r\n    }\r\n})\r\n\r\nconst render = () => {\r\n    puzzleEl.innerHTML = ''\r\n    guessesEl.textContent = game1.statusMessage\r\n\r\n    game1.puzzle.split('').forEach((letter) => {\r\n        const letterEl = document.createElement('span')\r\n        letterEl.textContent = letter\r\n        puzzleEl.appendChild(letterEl)\r\n    })\r\n}\r\n\r\nconst startGame = async () => {\r\n    const puzzle = await Object(_request__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('2')\r\n    game1 = new _hangman__WEBPACK_IMPORTED_MODULE_0__[\"default\"](puzzle, 5)\r\n    render()\r\n}\r\n\r\ndocument.querySelector('#reset').addEventListener('click', startGame)\r\nstartGame()\r\n\r\nObject(_request__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('2').then((puzzle) => {\r\n    \r\n}).catch((err) => {\r\n    console.log(`Error: ${err}`)\r\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/request.js":
/*!************************!*\
  !*** ./src/request.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getPuzzle; });\nconst getPuzzle = async (wordCount) => {\r\n    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)\r\n\r\n    if (response.status === 200) {\r\n        const data = await response.json()\r\n        return data.puzzle\r\n    } else {\r\n        throw new Error('Unable to get puzzle')\r\n    }\r\n}\r\n\r\nconst getCurrentCountry = async () => {\r\n    const location = await getLocation()\r\n    const country = await getCountry(location.country)\r\n    return country\r\n}\r\n \r\nconst getCountry = async (countryCode) => {\r\n    const response = await fetch('https://restcountries.com/v2/all')\r\n\r\n    if(response.status === 200) {\r\n        const data = await response.json()\r\n        return data.find((country) => country.alpha2Code === countryCode)\r\n    } else {\r\n        throw new Error('unable to fetch country')\r\n    }\r\n}\r\n\r\nconst getLocation = async () => {\r\n    const response = await fetch('https://ipinfo.io/json?token=75ac6a33af84a8')\r\n\r\n    if (response.status === 200) {\r\n        const data = await response.json()\r\n        return data\r\n    }else {\r\n        throw new Error('Unable to fetch location')\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/request.js?");

/***/ })

/******/ });