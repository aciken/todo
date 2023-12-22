/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/nav */ \"./src/modules/nav.js\");\n\r\n\r\n(0,_modules_nav__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/modules/nav.js":
/*!****************************!*\
  !*** ./src/modules/nav.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst navFunc = () => {\r\n\r\n    const taskClick = document.querySelector('.task-click');\r\n    const todoList = document.querySelector('.todo-list');\r\n    const listDiv = document.querySelector('.tasks');\r\n    const up = document.querySelector('.up');\r\n    const down = document.querySelector('.down');\r\n\r\n\r\n\r\n    taskClick.addEventListener('click', () =>{\r\n        up.classList.toggle('clicked');\r\n        down.classList.toggle('clicked')\r\n        todoList.classList.toggle('clicked');\r\n    })\r\n\r\n    addProject(listDiv);\r\n\r\n}\r\n\r\nconst addProject = (list) =>{\r\n\r\n    const addBtn = document.querySelector('.add-project');\r\n    \r\n    addBtn.addEventListener('click', () =>{\r\n\r\n            addBtn.style.cssText = 'display:none';\r\n            addInput(addBtn.parentElement, addBtn, list);\r\n        } \r\n        \r\n    )}\r\n\r\n\r\nconst addInput = (originDiv, btn, list) => {\r\n    const inputDiv = document.createElement('div');\r\n    originDiv.appendChild(inputDiv);\r\n\r\n\r\n    const addInput = document.createElement('input');\r\n    addInput.classList.add('add-input')\r\n    inputDiv.appendChild(addInput);\r\n\r\n\r\n    const btnDiv = document.createElement('div');\r\n    btnDiv.classList.add('btn-div');\r\n    inputDiv.appendChild(btnDiv);\r\n\r\n    const BtnCreate = document.createElement('a');\r\n    BtnCreate.classList.add('create');\r\n    BtnCreate.textContent = 'Create';\r\n    btnDiv.appendChild(BtnCreate);\r\n\r\n\r\n\r\n    const BtnCancle = document.createElement('a');\r\n    BtnCancle.classList.add('cancle');\r\n    BtnCancle.textContent = 'Cancle';\r\n    btnDiv.appendChild(BtnCancle);\r\n\r\n    BtnCancle.addEventListener('click', () =>{\r\n        inputDiv.remove();\r\n        btn.style.cssText = 'display:flex';\r\n    })\r\n\r\n    BtnCreate.addEventListener('click', () =>{\r\n        console.log()\r\n        inputDiv.remove();\r\n        btn.style.cssText = 'display:flex';\r\n        createListItem(list, addInput.value);\r\n    })\r\n\r\n}\r\n\r\n\r\nconst createListItem = (list, value) =>{\r\n\r\n\r\n\r\n    const listItem = document.createElement('li');\r\n    listItem.textContent = value;\r\n    list.appendChild(listItem)\r\n\r\n}\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navFunc);\n\n//# sourceURL=webpack://todo/./src/modules/nav.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;