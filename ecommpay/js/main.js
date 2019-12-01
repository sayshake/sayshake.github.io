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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/ush-accordion/ush-accordion.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/ush-accordion/ush-accordion.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

;

(function () {
  'use strict';

  var accordion = document.querySelector('.ush-accordion-js'); // вешаем обработчик

  accordion.addEventListener("click", tabsToggle); // фунцкия реализация аккордеона

  function tabsToggle(event) {
    // 
    var eventTarget = event.target,
        accordionButton = eventTarget.closest('li'); // проверяем всплытие на узле с классом активатором аккордеона

    if (accordionButton.classList.contains("ush-accordion__row-js")) {
      console.log("button-accordeon"); // получаем скрытую высоту скрытого элемента вкладки(внутренняя высота элементов, нужна для записи максимальной высоты)

      var hiddenTabInner = 0;

      for (var i = 0; i < accordionButton.nextElementSibling.children.length; i++) {
        hiddenTabInner += parseInt("".concat(accordionButton.nextElementSibling.children[i].offsetHeight));
        console.log(hiddenTabInner);
      }

      hiddenTabInner = "".concat(hiddenTabInner, "px"); // логика для открытия вкладки

      if (accordionButton.classList.contains("ush-active")) {
        accordionButton.nextElementSibling.style.maxHeight = null;
        accordionButton.classList.remove("ush-active");

        for (var j = 0; j < accordionButton.children.length; j++) {
          if (accordionButton.children[j].classList.contains("ush-accordion__angle-js")) {
            accordionButton.children[j].classList.remove("ush-active");
          }
        }
      } else {
        accordionButton.classList.add("ush-active");
        accordionButton.nextElementSibling.style.maxHeight = hiddenTabInner;

        for (var _j = 0; _j < accordionButton.children.length; _j++) {
          if (accordionButton.children[_j].classList.contains("ush-accordion__angle-js")) {
            accordionButton.children[_j].classList.add("ush-active");
          }
        }
      } // console.log(accordionButton.nextElementSibling.style.maxHeight);
      // console.log(accordionButton.nextElementSibling.children);
      // console.log(accordionButton.nextElementSibling.children[0].offsetHeight);

    }
  }
})();

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_ush_accordion_ush_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/ush-accordion/ush-accordion */ "./src/blocks/modules/ush-accordion/ush-accordion.js");
/* harmony import */ var _modules_ush_accordion_ush_accordion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_ush_accordion_ush_accordion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./src/js/import/polyfill-ie.js":
/*!**************************************!*\
  !*** ./src/js/import/polyfill-ie.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (ELEMENT) {
  ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector;

  ELEMENT.closest = ELEMENT.closest || function closest(selector) {
    if (!this) return null;
    if (this.matches(selector)) return this;

    if (!this.parentElement) {
      return null;
    } else return this.parentElement.closest(selector);
  };
})(Element.prototype);

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_polyfill_ie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/polyfill-ie */ "./src/js/import/polyfill-ie.js");
/* harmony import */ var _import_polyfill_ie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_import_polyfill_ie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");



/***/ })

/******/ });
//# sourceMappingURL=main.js.map