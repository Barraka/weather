/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_rd_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/rd.png */ "./src/assets/rd.png");

var makeItRain = function () {
  var screen = document.querySelector('.screen');
  var rainCount = 0;
  function start() {
    var interval = setInterval(function () {
      buildSingleDrop();
      rainCount++;
      if (rainCount > 200) clearInterval(interval);
    }, 100);
  }
  function buildSingleDrop() {
    var rdOuter = document.createElement('div');
    rdOuter.classList.add('rdOuter');
    var randStart = Math.floor(Math.random() * window.innerWidth);
    var randSideways = Math.floor(Math.random() * 100);
    var randSpeed = Math.floor(Math.random() * 4) + 9;
    var randThick = Math.floor(Math.random() * 3) + 1;
    var randLand = Math.floor(Math.random() * 10) + 90;
    var randDelay = Math.floor(Math.random() * 0);
    rdOuter.style.setProperty('--sideways', "".concat(randSideways, "px"));
    rdOuter.style.setProperty('--speed', "".concat(randSpeed, "s"));
    rdOuter.style.setProperty('--thickness', "".concat(randThick, "px"));
    rdOuter.style.setProperty('--start', "".concat(randStart, "px"));
    rdOuter.style.setProperty('--delay', "".concat(randDelay, "s"));
    rdOuter.style.setProperty('--land', "".concat(randLand, "vh"));
    screen.appendChild(rdOuter);
    var rainDrop = document.createElement('div');
    rainDrop.classList.add('rainDrop');
    rdOuter.appendChild(rainDrop);
    var splash = document.createElement('img');
    splash.classList.add('splash');
    splash.src = _assets_rd_png__WEBPACK_IMPORTED_MODULE_0__;
    rdOuter.appendChild(splash);
  }
  //----
  return {
    start: start
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeItRain);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/app.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/app.css ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n\n:root {\n    --sideways: 10px;\n    --speed: 10s;\n    --thickness: 1px;\n    --land: 95vh;\n    --translateSplash: 5px;\n    --start: 10px;\n    --delay: 2s;\n}\n.screen {\n    position:fixed;\n    top:0;\n    left:0;\n    width: 100vw;\n    height: 100vh;\n}\n.rdOuter {\n    position: absolute;\n    bottom: 100%;\n    width: 10px;\n    height: 100px;\n    left: var(--start);\n    pointer-events: none;\n    animation:  var(--speed) linear var(--delay) infinite drop;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n  \n  @keyframes drop {\n    0% {\n      transform: translateY(0vh);\n    }\n    8% {\n        transform: translateY(var(--land)) translateX(var(--sideways));\n    }\n    100% {\n      transform: translateY(var(--land)) translateX(var(--sideways));\n    }\n}\n\n.rainDrop {\n    width: var(--thickness);\n    height: 60%;\n    margin-left: 7px;\n    background: linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.25));\n    animation: var(--speed) linear var(--delay) infinite rain-drop;\n    /* outline:2px solid yellow; */\n}\n@keyframes rain-drop {\n    0% {\n      opacity: 1;\n    }\n\n    7% {\n      opacity: 0.8;\n    }\n    8% {\n        opacity:1;\n    }\n    9% {\n        opacity:0.1;\n    }\n    10% {\n      opacity: 0;\n    }\n    100% {\n        opacity: 0;\n    }   \n  }\n\n.splash {\n    animation:  var(--speed) linear var(--delay)  infinite splash;\n}\n@keyframes splash {\n    0% {\n        transform: scale(0) translateX(var(--translateSplash));\n    }\n    8% {\n        transform: scale(0) translateX(var(--translateSplash));\n    }\n    10% {\n        transform: scale(0.8) translateX(var(--translateSplash)); \n    }\n    12% {\n        transform: scale(0) translateX(var(--translateSplash));\n    }\n    100% {\n        transform: scale(0) translateX(var(--translateSplash));\n    }\n}\n\n\n\n  ", "",{"version":3,"sources":["webpack://./src/app.css"],"names":[],"mappings":";;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,gBAAgB;IAChB,YAAY;IACZ,sBAAsB;IACtB,aAAa;IACb,WAAW;AACf;AACA;IACI,cAAc;IACd,KAAK;IACL,MAAM;IACN,YAAY;IACZ,aAAa;AACjB;AACA;IACI,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,aAAa;IACb,kBAAkB;IAClB,oBAAoB;IACpB,0DAA0D;IAC1D,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;AAC1B;;EAEE;IACE;MACE,0BAA0B;IAC5B;IACA;QACI,8DAA8D;IAClE;IACA;MACE,8DAA8D;IAChE;AACJ;;AAEA;IACI,uBAAuB;IACvB,WAAW;IACX,gBAAgB;IAChB,sFAAsF;IACtF,8DAA8D;IAC9D,8BAA8B;AAClC;AACA;IACI;MACE,UAAU;IACZ;;IAEA;MACE,YAAY;IACd;IACA;QACI,SAAS;IACb;IACA;QACI,WAAW;IACf;IACA;MACE,UAAU;IACZ;IACA;QACI,UAAU;IACd;EACF;;AAEF;IACI,6DAA6D;AACjE;AACA;IACI;QACI,sDAAsD;IAC1D;IACA;QACI,sDAAsD;IAC1D;IACA;QACI,wDAAwD;IAC5D;IACA;QACI,sDAAsD;IAC1D;IACA;QACI,sDAAsD;IAC1D;AACJ","sourcesContent":["\n\n:root {\n    --sideways: 10px;\n    --speed: 10s;\n    --thickness: 1px;\n    --land: 95vh;\n    --translateSplash: 5px;\n    --start: 10px;\n    --delay: 2s;\n}\n.screen {\n    position:fixed;\n    top:0;\n    left:0;\n    width: 100vw;\n    height: 100vh;\n}\n.rdOuter {\n    position: absolute;\n    bottom: 100%;\n    width: 10px;\n    height: 100px;\n    left: var(--start);\n    pointer-events: none;\n    animation:  var(--speed) linear var(--delay) infinite drop;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n  \n  @keyframes drop {\n    0% {\n      transform: translateY(0vh);\n    }\n    8% {\n        transform: translateY(var(--land)) translateX(var(--sideways));\n    }\n    100% {\n      transform: translateY(var(--land)) translateX(var(--sideways));\n    }\n}\n\n.rainDrop {\n    width: var(--thickness);\n    height: 60%;\n    margin-left: 7px;\n    background: linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.25));\n    animation: var(--speed) linear var(--delay) infinite rain-drop;\n    /* outline:2px solid yellow; */\n}\n@keyframes rain-drop {\n    0% {\n      opacity: 1;\n    }\n\n    7% {\n      opacity: 0.8;\n    }\n    8% {\n        opacity:1;\n    }\n    9% {\n        opacity:0.1;\n    }\n    10% {\n      opacity: 0;\n    }\n    100% {\n        opacity: 0;\n    }   \n  }\n\n.splash {\n    animation:  var(--speed) linear var(--delay)  infinite splash;\n}\n@keyframes splash {\n    0% {\n        transform: scale(0) translateX(var(--translateSplash));\n    }\n    8% {\n        transform: scale(0) translateX(var(--translateSplash));\n    }\n    10% {\n        transform: scale(0.8) translateX(var(--translateSplash)); \n    }\n    12% {\n        transform: scale(0) translateX(var(--translateSplash));\n    }\n    100% {\n        transform: scale(0) translateX(var(--translateSplash));\n    }\n}\n\n\n\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Anton&family=Corben&family=Dosis:wght@600&family=Open+Sans:wght@500&family=Poppins&family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --colorDarkBlue: rgb(28, 19, 150);\n    --colorIcon: rgb(11, 29, 61);\n}\n* {\n    margin:0;\n    padding:0;\n    box-sizing: border-box;\n    font-family: 'Corben',sans-serif;\n    font-size: 1em;\n}\nbody {\n    background-color: rgb(37,37,85);\n    background: linear-gradient(to bottom, rgba(141,150,172,1) 0%, rgba(138,138,167,1) 60%, rgba(50,50,110,1) 90%,\n    var(--colorDarkBlue) 100%);\n    height:100vh;\n\n}\n.logo {\n    width:400px;\n    max-width: 80%;\n    position:absolute;\n    left:0;\n    right:0;\n    top: 100px;\n    margin-left: auto; \n    margin-right: auto; \n    transition: all 0.8s ease;\n}\n.img {\n    max-width: 100%;\n    height:auto;\n}\n.container {\n    position: relative;\n    max-width: 100vw;\n    white-space: nowrap;\n    transition: all 0.2s;\n    user-select: none;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    margin:0 auto;\n    max-width: 800px;\n    gap:10px;\n}\n\n.outerSearch {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--colorDarkBlue);\n    border-radius: 10px;\n    padding:10px;\n    transition: all 0.8s ease;    \n    cursor: pointer;\n}\n.searchInitial {\n    transform: translateY(400px);    \n}\n.outerSearch input {\n    text-align: center;\n    border-radius: 5px;\n    border:2px solid transparent;\n}\n.outerSearch svg {\n    transform: scale(0.7);\n    fill:white;\n    stroke:white;\n    cursor: pointer;\n}\n.outerSearch svg:hover {\n    cursor: pointer;\n    stroke:var(--colorDarkBlue);\n    fill:var(--colorDarkBlue);\n    background-color: white;\n    border-radius: 5px;\n}\n.now {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 10px;\n    width:fit-content;\n    position:relative;\n    color:white;\n    padding:20px;\n    gap:40px;\n}\n.leftPane, .middlePane, .rightPane {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n.nowLabel {\n    font-size: 12px;\n    margin-bottom:-4px;\n}\n.nowLabel:not(:first-child) {\n    text-decoration:overline;\n}\n.nowText {\n    font-size: 14px;\n    margin-bottom: 5px;\n}\n.tempOuter {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap:4px;\n    cursor: pointer;\n}\n.tempSign {\n    transition: all 0.2s ease-in;\n}\n.tempOuter:hover .tempSign {\n    transform:scale(1.4);\n    color:var(--colorDarkBlue);\n}\n.forecast {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position:relative;\n    height:350px;\n    width:100%;\n    overflow-y: hidden;\n    scrollbar-width: none;\n    overflow-x: scroll;\n    border-radius: 10px;\n    \n}\n.forecast::-webkit-scrollbar {\n    display: none;\n}\n.innerForecast {\n    height: fit-content;\n    background-color: antiquewhite;\n    position:absolute;\n    top:0;\n    left:0;\n    z-index: 2;\n    text-align: left;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor:grab;\n    padding:10px 0px;\n    height:100%;\n    color:white;\n}\n.innerForecast:active {\n    cursor: grabbing;\n}\n\nimg {\n    -webkit-user-drag: none;\n    -khtml-user-drag: none;\n    -moz-user-drag: none;\n    -o-user-drag: none;\n    user-drag: none;\n  }\n.cardOuter {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    margin: 0 10px;\n    padding:4px;\n    border-radius:10px;\n    border: 2px solid transparent;\n    text-align: center;\n    position: relative;\n}\n.dayOuter {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap:5px;\n}\n.iconImg {\n    background-color: var(--colorDarkBlue);\n    border-radius: 50%;\n}\n.more {\n    transform: scale(0.7);\n    stroke:white;\n    fill:white;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.more:hover {\n    stroke:var(--colorDarkBlue);\n    fill:var(--colorDarkBlue);\n    background-color: white;\n    border-radius: 5px;\n}\n.overlay {\n    position:absolute;\n    top:0;\n    left:0;\n    width:100%;\n    height:100%;\n    background-color: var(--colorDarkBlue);\n    border-radius: 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    color:white;\n    padding: 10px;\n}\n.overlayLabel {\n    font-size: 10px;\n    margin-bottom:-4px;\n    \n}\n.overlayLabel:not(:first-child) {\n    text-decoration:overline;\n}\n.overlayText {\n    font-size:14px;\n}\n.overlay svg {\n    transform: scale(0.7);\n    fill:white;\n    stroke:white;\n}\n.overlay svg:hover {\n    cursor: pointer;\n    stroke:var(--colorDarkBlue);\n    fill:var(--colorDarkBlue);\n    background-color: white;\n    border-radius: 5px;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AACA;IACI,iCAAiC;IACjC,4BAA4B;AAChC;AACA;IACI,QAAQ;IACR,SAAS;IACT,sBAAsB;IACtB,gCAAgC;IAChC,cAAc;AAClB;AACA;IACI,+BAA+B;IAC/B;8BAC0B;IAC1B,YAAY;;AAEhB;AACA;IACI,WAAW;IACX,cAAc;IACd,iBAAiB;IACjB,MAAM;IACN,OAAO;IACP,UAAU;IACV,iBAAiB;IACjB,kBAAkB;IAClB,yBAAyB;AAC7B;AACA;IACI,eAAe;IACf,WAAW;AACf;AACA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,mBAAmB;IACnB,oBAAoB;IACpB,iBAAiB;IACjB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,aAAa;IACb,gBAAgB;IAChB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sCAAsC;IACtC,mBAAmB;IACnB,YAAY;IACZ,yBAAyB;IACzB,eAAe;AACnB;AACA;IACI,4BAA4B;AAChC;AACA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,4BAA4B;AAChC;AACA;IACI,qBAAqB;IACrB,UAAU;IACV,YAAY;IACZ,eAAe;AACnB;AACA;IACI,eAAe;IACf,2BAA2B;IAC3B,yBAAyB;IACzB,uBAAuB;IACvB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;IACnB,iBAAiB;IACjB,iBAAiB;IACjB,WAAW;IACX,YAAY;IACZ,QAAQ;AACZ;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;AAC1B;AACA;IACI,eAAe;IACf,kBAAkB;AACtB;AACA;IACI,wBAAwB;AAC5B;AACA;IACI,eAAe;IACf,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,OAAO;IACP,eAAe;AACnB;AACA;IACI,4BAA4B;AAChC;AACA;IACI,oBAAoB;IACpB,0BAA0B;AAC9B;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,YAAY;IACZ,UAAU;IACV,kBAAkB;IAClB,qBAAqB;IACrB,kBAAkB;IAClB,mBAAmB;;AAEvB;AACA;IACI,aAAa;AACjB;AACA;IACI,mBAAmB;IACnB,8BAA8B;IAC9B,iBAAiB;IACjB,KAAK;IACL,MAAM;IACN,UAAU;IACV,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,gBAAgB;IAChB,WAAW;IACX,WAAW;AACf;AACA;IACI,gBAAgB;AACpB;;AAEA;IACI,uBAAuB;IACvB,sBAAsB;IACtB,oBAAoB;IACpB,kBAAkB;IAClB,eAAe;EACjB;AACF;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,cAAc;IACd,WAAW;IACX,kBAAkB;IAClB,6BAA6B;IAC7B,kBAAkB;IAClB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,OAAO;AACX;AACA;IACI,sCAAsC;IACtC,kBAAkB;AACtB;AACA;IACI,qBAAqB;IACrB,YAAY;IACZ,UAAU;IACV,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,2BAA2B;IAC3B,yBAAyB;IACzB,uBAAuB;IACvB,kBAAkB;AACtB;AACA;IACI,iBAAiB;IACjB,KAAK;IACL,MAAM;IACN,UAAU;IACV,WAAW;IACX,sCAAsC;IACtC,mBAAmB;IACnB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,WAAW;IACX,aAAa;AACjB;AACA;IACI,eAAe;IACf,kBAAkB;;AAEtB;AACA;IACI,wBAAwB;AAC5B;AACA;IACI,cAAc;AAClB;AACA;IACI,qBAAqB;IACrB,UAAU;IACV,YAAY;AAChB;AACA;IACI,eAAe;IACf,2BAA2B;IAC3B,yBAAyB;IACzB,uBAAuB;IACvB,kBAAkB;AACtB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Anton&family=Corben&family=Dosis:wght@600&family=Open+Sans:wght@500&family=Poppins&family=Roboto&display=swap');\n:root {\n    --colorDarkBlue: rgb(28, 19, 150);\n    --colorIcon: rgb(11, 29, 61);\n}\n* {\n    margin:0;\n    padding:0;\n    box-sizing: border-box;\n    font-family: 'Corben',sans-serif;\n    font-size: 1em;\n}\nbody {\n    background-color: rgb(37,37,85);\n    background: linear-gradient(to bottom, rgba(141,150,172,1) 0%, rgba(138,138,167,1) 60%, rgba(50,50,110,1) 90%,\n    var(--colorDarkBlue) 100%);\n    height:100vh;\n\n}\n.logo {\n    width:400px;\n    max-width: 80%;\n    position:absolute;\n    left:0;\n    right:0;\n    top: 100px;\n    margin-left: auto; \n    margin-right: auto; \n    transition: all 0.8s ease;\n}\n.img {\n    max-width: 100%;\n    height:auto;\n}\n.container {\n    position: relative;\n    max-width: 100vw;\n    white-space: nowrap;\n    transition: all 0.2s;\n    user-select: none;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    margin:0 auto;\n    max-width: 800px;\n    gap:10px;\n}\n\n.outerSearch {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--colorDarkBlue);\n    border-radius: 10px;\n    padding:10px;\n    transition: all 0.8s ease;    \n    cursor: pointer;\n}\n.searchInitial {\n    transform: translateY(400px);    \n}\n.outerSearch input {\n    text-align: center;\n    border-radius: 5px;\n    border:2px solid transparent;\n}\n.outerSearch svg {\n    transform: scale(0.7);\n    fill:white;\n    stroke:white;\n    cursor: pointer;\n}\n.outerSearch svg:hover {\n    cursor: pointer;\n    stroke:var(--colorDarkBlue);\n    fill:var(--colorDarkBlue);\n    background-color: white;\n    border-radius: 5px;\n}\n.now {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 10px;\n    width:fit-content;\n    position:relative;\n    color:white;\n    padding:20px;\n    gap:40px;\n}\n.leftPane, .middlePane, .rightPane {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n.nowLabel {\n    font-size: 12px;\n    margin-bottom:-4px;\n}\n.nowLabel:not(:first-child) {\n    text-decoration:overline;\n}\n.nowText {\n    font-size: 14px;\n    margin-bottom: 5px;\n}\n.tempOuter {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap:4px;\n    cursor: pointer;\n}\n.tempSign {\n    transition: all 0.2s ease-in;\n}\n.tempOuter:hover .tempSign {\n    transform:scale(1.4);\n    color:var(--colorDarkBlue);\n}\n.forecast {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position:relative;\n    height:350px;\n    width:100%;\n    overflow-y: hidden;\n    scrollbar-width: none;\n    overflow-x: scroll;\n    border-radius: 10px;\n    \n}\n.forecast::-webkit-scrollbar {\n    display: none;\n}\n.innerForecast {\n    height: fit-content;\n    background-color: antiquewhite;\n    position:absolute;\n    top:0;\n    left:0;\n    z-index: 2;\n    text-align: left;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor:grab;\n    padding:10px 0px;\n    height:100%;\n    color:white;\n}\n.innerForecast:active {\n    cursor: grabbing;\n}\n\nimg {\n    -webkit-user-drag: none;\n    -khtml-user-drag: none;\n    -moz-user-drag: none;\n    -o-user-drag: none;\n    user-drag: none;\n  }\n.cardOuter {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    margin: 0 10px;\n    padding:4px;\n    border-radius:10px;\n    border: 2px solid transparent;\n    text-align: center;\n    position: relative;\n}\n.dayOuter {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap:5px;\n}\n.iconImg {\n    background-color: var(--colorDarkBlue);\n    border-radius: 50%;\n}\n.more {\n    transform: scale(0.7);\n    stroke:white;\n    fill:white;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.more:hover {\n    stroke:var(--colorDarkBlue);\n    fill:var(--colorDarkBlue);\n    background-color: white;\n    border-radius: 5px;\n}\n.overlay {\n    position:absolute;\n    top:0;\n    left:0;\n    width:100%;\n    height:100%;\n    background-color: var(--colorDarkBlue);\n    border-radius: 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    color:white;\n    padding: 10px;\n}\n.overlayLabel {\n    font-size: 10px;\n    margin-bottom:-4px;\n    \n}\n.overlayLabel:not(:first-child) {\n    text-decoration:overline;\n}\n.overlayText {\n    font-size:14px;\n}\n.overlay svg {\n    transform: scale(0.7);\n    fill:white;\n    stroke:white;\n}\n.overlay svg:hover {\n    cursor: pointer;\n    stroke:var(--colorDarkBlue);\n    fill:var(--colorDarkBlue);\n    background-color: white;\n    border-radius: 5px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/app.css":
/*!*********************!*\
  !*** ./src/app.css ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./app.css */ "./node_modules/css-loader/dist/cjs.js!./src/app.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/Cloudy.png":
/*!*******************************!*\
  !*** ./src/assets/Cloudy.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Cloudy.ef0bedda967ebbd59db4.png";

/***/ }),

/***/ "./src/assets/rd.png":
/*!***************************!*\
  !*** ./src/assets/rd.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "rd.03baae74e3e471de0635.png";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ "./src/app.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.css */ "./src/app.css");
/* harmony import */ var _assets_Cloudy_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/Cloudy.png */ "./src/assets/Cloudy.png");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var container = document.querySelector('.container');
var search = document.querySelector('#search');
var outerSearch = document.querySelector('.outerSearch');
var golook = document.querySelector('#golook');
var logo = document.querySelector('.logo');
var logoImg = document.querySelector('#logoImg');
search.value = "Paris";
logoImg.src = _assets_Cloudy_png__WEBPACK_IMPORTED_MODULE_3__;
// let now = document.querySelector('.now');
// let forecast = document.querySelector('.forecast');
golook.addEventListener('click', getWeatherData);
var degrees = 'celcius';
_app_js__WEBPACK_IMPORTED_MODULE_0__["default"].start();
// let dataNow;
var dataForecast;
function getWeatherData() {
  return _getWeatherData.apply(this, arguments);
}
function _getWeatherData() {
  _getWeatherData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var now, forecast, innerForecast, town, url_now, url_forecast, response, data, overlay, cloudsLabel, cloudsP, speedLab, speed, debLabel, deg, leftPane, tempminLabel, tempMin, tempmaxLabel, tempMax, humLabel, humidity, rightPane, code, icon, iconImg, description, tempOuter, temp, tempSign, middlePane, clouds, listLength, i;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            logo.style.transform = 'translateY(-400px)';
            outerSearch.classList.remove('searchInitial');
            while (outerSearch.nextElementSibling) {
              outerSearch.nextElementSibling.remove();
            }
            //Build elements
            now = document.createElement('div');
            now.classList.add('now');
            forecast = document.createElement('div');
            forecast.classList.add('forecast');
            innerForecast = document.createElement('div');
            innerForecast.classList.add('innerForecast');
            forecast.appendChild(innerForecast);
            container.appendChild(now);
            container.appendChild(forecast);
            scrollBehavior();
            // title.remove();
            town = search.value;
            url_now = "https://api.openweathermap.org/data/2.5/weather?q=".concat(town, "&APPID=408189a9139c5bfc0cc0a7c9ed3e9235");
            url_forecast = "https://api.openweathermap.org/data/2.5/forecast?q=".concat(town, "&APPID=408189a9139c5bfc0cc0a7c9ed3e9235");
            _context.next = 18;
            return fetch(url_now);
          case 18:
            response = _context.sent;
            _context.next = 21;
            return response.json();
          case 21:
            data = _context.sent;
            window.dataNow = data;
            //Overlay
            overlay = document.createElement('div');
            overlay.classList.add('overlay');
            //Left pane
            cloudsLabel = document.createElement('div');
            cloudsLabel.classList.add('nowLabel');
            cloudsLabel.textContent = 'Clouds %:';
            cloudsP = document.createElement('div');
            cloudsP.classList.add('nowText');
            cloudsP.textContent = data.clouds.all;
            speedLab = document.createElement('div');
            speedLab.classList.add('nowLabel');
            speedLab.textContent = 'Wind Speed:';
            speed = document.createElement('div');
            speed.classList.add('nowText');
            speed.textContent = data.wind.speed;
            debLabel = document.createElement('div');
            debLabel.classList.add('nowLabel');
            debLabel.textContent = 'Wind Dir. :';
            deg = document.createElement('div');
            deg.classList.add('nowText');
            deg.textContent = data.wind.deg;
            leftPane = document.createElement('div');
            leftPane.classList.add('leftPane');
            leftPane.appendChild(cloudsLabel);
            leftPane.appendChild(cloudsP);
            leftPane.appendChild(speedLab);
            leftPane.appendChild(speed);
            leftPane.appendChild(debLabel);
            leftPane.appendChild(deg);
            //Right pane
            tempminLabel = document.createElement('div');
            tempminLabel.classList.add('nowLabel');
            tempminLabel.textContent = 'Temp. Min:';
            tempMin = document.createElement('div');
            tempMin.classList.add('nowText');
            tempMin.setAttribute('data-temp', 'now');
            tempMin.innerHTML = convertToCelsius(data.main.temp_min) + ' &#8451';
            tempmaxLabel = document.createElement('div');
            tempmaxLabel.classList.add('nowLabel');
            tempmaxLabel.textContent = 'Temp. Max:';
            tempMax = document.createElement('div');
            tempMax.classList.add('nowText');
            tempMax.setAttribute('data-temp', 'now');
            tempMax.innerHTML = convertToCelsius(data.main.temp_max) + ' &#8451';
            // if(degrees==='celcius')temp.innerHTML=convertToCelsius(d.main.temp)+' &#8451';
            // else temp.innerHTML=convertToFarhenheit(d.main.temp) + ' &#8457';
            humLabel = document.createElement('div');
            humLabel.classList.add('nowLabel');
            humLabel.textContent = 'Humidity:';
            humidity = document.createElement('div');
            humidity.classList.add('nowText');
            humidity.textContent = data.main.humidity;
            rightPane = document.createElement('div');
            rightPane.classList.add('rightPane');
            rightPane.appendChild(tempminLabel);
            rightPane.appendChild(tempMin);
            rightPane.appendChild(tempmaxLabel);
            rightPane.appendChild(tempMax);
            rightPane.appendChild(humLabel);
            rightPane.appendChild(humidity);
            //Middle Pane
            //Icon
            code = data.weather[0].icon;
            icon = document.createElement('div');
            icon.classList.add('icon');
            iconImg = document.createElement('img');
            iconImg.classList.add('iconImg');
            iconImg.src = "https://openweathermap.org/img/wn/".concat(code, "@2x.png");
            icon.appendChild(iconImg);
            //Description
            description = document.createElement('div');
            description.classList.add('description');
            description.textContent = data.weather[0].description;
            //Temp
            tempOuter = document.createElement('div');
            tempOuter.classList.add('tempOuter');
            temp = document.createElement('div');
            temp.classList.add('temp');
            tempSign = document.createElement('div');
            tempSign.classList.add('tempSign');
            if (degrees === 'celcius') {
              temp.innerHTML = convertToCelsius(data.main.temp);
              tempSign.innerHTML = ' &#8451';
            } else {
              temp.innerHTML = convertToFarhenheit(data.main.temp) + ' &#8457';
              tempSign.innerHTML = ' &#8457';
            }
            tempOuter.addEventListener('click', toggleTemp);
            tempOuter.appendChild(temp);
            tempOuter.appendChild(tempSign);
            middlePane = document.createElement('div');
            middlePane.classList.add('middlePane');
            middlePane.appendChild(icon);
            middlePane.appendChild(description);
            middlePane.appendChild(tempOuter);
            //Mount
            now.appendChild(leftPane);
            now.appendChild(middlePane);
            now.appendChild(rightPane);
            //Adapt BG
            clouds = data.clouds.all;
            now.style.backgroundColor = getBg(clouds);

            //Forecast
            _context.next = 111;
            return fetch(url_forecast);
          case 111:
            response = _context.sent;
            _context.next = 114;
            return response.json();
          case 114:
            data = _context.sent;
            window.data2 = data;
            dataForecast = data;
            // data.list.forEach(x=>createCard(x));
            listLength = data.list.length;
            for (i = 0; i < listLength; i++) {
              createCard(data.list[i], i);
            }
          case 119:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getWeatherData.apply(this, arguments);
}
function toggleTemp() {
  if (degrees === 'celcius') degrees = 'fahrenheit';else degrees = 'celcius';
  var allTemps = document.querySelectorAll('div[data-temp]');
  var tempSign = document.querySelector('.tempSign');
  var temp = document.querySelector('.temp');
  if (degrees === 'celcius') {
    temp.textContent = ((parseFloat(temp.textContent) - 32) * 5 / 9).toFixed(1);
    tempSign.innerHTML = ' &#8451';
  } else {
    temp.textContent = (parseFloat(temp.textContent) * 9 / 5 + 32).toFixed(1);
    tempSign.innerHTML = ' &#8457';
  }
  allTemps.forEach(function (x) {
    var currentTemp = parseFloat(x.textContent);
    if (degrees === 'celcius') {
      var newTemp = (currentTemp - 32) * 5 / 9;
      x.innerHTML = newTemp.toFixed(1) + ' &#8451';
    } else {
      var _newTemp = currentTemp * 9 / 5 + 32;
      x.innerHTML = _newTemp.toFixed(1) + ' &#8457';
    }
  });
}
function getBg(clouds) {
  var r = parseInt(0 + 80 * clouds / 100);
  var g = parseInt(0 + 80 * clouds / 100);
  var b = parseInt(255 - 175 * clouds / 100);
  return "rgb(".concat(r, ",").concat(g, ",").concat(b, ")");
}
function createCard(d, i) {
  var cardOuter = document.createElement('div');
  cardOuter.classList.add('cardOuter');
  cardOuter.setAttribute('data-id', i);
  //Date
  var dateData = new Date(d.dt * 1000);
  var date = document.createElement('div');
  date.classList.add('date');
  var day = document.createElement('div');
  day.classList.add('day');
  day.textContent = dateData.toLocaleDateString("en-EN", {
    weekday: 'long'
  }).slice(0, 3);
  var dayOuter = document.createElement('div');
  dayOuter.classList.add('dayOuter');
  var day2 = document.createElement('div');
  day2.classList.add('day2');
  day2.textContent = dateData.getDate();
  var month = document.createElement('div');
  month.classList.add('month');
  month.textContent = dateData.toDateString().substr(4, 3);
  dayOuter.appendChild(day2);
  dayOuter.appendChild(month);
  var time = document.createElement('div');
  time.classList.add('time');
  time.textContent = dateData.toTimeString().substr(0, 5);
  date.appendChild(day);
  date.appendChild(dayOuter);

  // date.appendChild(month);
  date.appendChild(time);
  cardOuter.appendChild(date);

  //Icon
  var code = d.weather[0].icon;
  var icon = document.createElement('div');
  icon.classList.add('icon');
  var iconImg = document.createElement('img');
  iconImg.classList.add('iconImg');
  iconImg.src = "https://openweathermap.org/img/wn/".concat(code, "@2x.png");
  icon.appendChild(iconImg);
  cardOuter.appendChild(icon);
  //Description
  var description = document.createElement('div');
  description.classList.add('description');
  description.textContent = d.weather[0].description;
  cardOuter.appendChild(description);
  //Temp
  var temp = document.createElement('div');
  temp.classList.add('temp');
  temp.setAttribute('data-temp', i);
  if (degrees === 'celcius') temp.innerHTML = convertToCelsius(d.main.temp) + ' &#8451';else temp.innerHTML = convertToFarhenheit(d.main.temp) + ' &#8457';
  // temp.innerHTML=convertToCelsius(d.main.temp);
  cardOuter.appendChild(temp);
  //Clouds
  var clouds = d.clouds.all;
  cardOuter.style.backgroundColor = getBg(clouds);

  //More info icon
  var more = document.createElement('div');
  more.classList.add('more');
  more.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M22.65 34h3v-8.3H34v-3h-8.35V14h-3v8.7H14v3h8.65ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 23.95q0-4.1 1.575-7.75 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24.05 4q4.1 0 7.75 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm.05-3q7.05 0 12-4.975T41 23.95q0-7.05-4.95-12T24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24.05 41ZM24 24Z"/></svg>';
  more.addEventListener('click', showMore);
  function showMore(e) {
    var id = e.currentTarget.parentElement.getAttribute('data-id');
    id = parseInt(id);
    var overlay = document.createElement('div');
    overlay.classList.add('overlay');
    cardOuter.appendChild(overlay);
    //Clouds
    var cloudsLabel = document.createElement('div');
    cloudsLabel.classList.add('overlayLabel');
    var clouds = document.createElement('div');
    clouds.classList.add('overlayText');
    cloudsLabel.textContent = 'Clouds % :';
    clouds.textContent = dataForecast.list[id].clouds.all;
    //Humidity
    var humidityLabel = document.createElement('div');
    humidityLabel.classList.add('overlayLabel');
    var humidity = document.createElement('div');
    humidity.classList.add('overlayText');
    humidityLabel.textContent = 'Humidity:';
    humidity.textContent = dataForecast.list[id].main.humidity;
    //TempMin
    var tempLabel = document.createElement('div');
    tempLabel.classList.add('overlayLabel');
    var tempMin = document.createElement('div');
    tempMin.classList.add('overlayText');
    tempMin.setAttribute('data-temp', id);
    tempLabel.textContent = 'Temp. Min:';
    if (degrees === 'celcius') tempMin.innerHTML = convertToCelsius(dataForecast.list[id].main.temp_min) + ' &#8451';else tempMin.innerHTML = convertToFarhenheit(dataForecast.list[id].main.temp_min) + ' &#8457';
    //TempMax
    var tempmaxLabel = document.createElement('div');
    tempmaxLabel.classList.add('overlayLabel');
    var tempMax = document.createElement('div');
    tempMax.classList.add('overlayText');
    tempMax.setAttribute('data-temp', id);
    tempmaxLabel.textContent = 'Temp. Max:';
    if (degrees === 'celcius') tempMax.innerHTML = convertToCelsius(dataForecast.list[id].main.temp_max) + ' &#8451';else tempMax.innerHTML = convertToFarhenheit(dataForecast.list[id].main.temp_max) + ' &#8457';
    //Wind
    var windLabel = document.createElement('div');
    windLabel.classList.add('overlayLabel');
    var degLabel = document.createElement('div');
    degLabel.classList.add('overlayLabel');
    var wind = document.createElement('div');
    wind.classList.add('overlayText');
    windLabel.textContent = 'Wind:';
    wind.textContent = dataForecast.list[id].wind.speed;
    var deg = document.createElement('div');
    deg.classList.add('overlayText');
    degLabel.textContent = 'Deg:';
    deg.textContent = dataForecast.list[id].wind.deg;
    //Close
    var close = document.createElement('div');
    close.classList.add('close');
    close.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M14 25.35h20v-3H14ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z"/></svg>';
    close.addEventListener('click', function (e) {
      e.currentTarget.parentElement.remove();
    });
    //Mount
    overlay.appendChild(cloudsLabel);
    overlay.appendChild(clouds);
    overlay.appendChild(humidityLabel);
    overlay.appendChild(humidity);
    overlay.appendChild(tempLabel);
    overlay.appendChild(tempMin);
    overlay.appendChild(tempmaxLabel);
    overlay.appendChild(tempMax);
    overlay.appendChild(windLabel);
    overlay.appendChild(wind);
    overlay.appendChild(degLabel);
    overlay.appendChild(deg);
    overlay.appendChild(close);
  }
  cardOuter.appendChild(more);
  //Build
  var innerForecast = document.querySelector('.innerForecast');
  innerForecast.appendChild(cardOuter);
}
function convertToCelsius(t) {
  var value = parseFloat(t) - 273.13;
  return value.toFixed(1);
  ;
}
function convertToFarhenheit(t) {
  var value = (parseFloat(t) - 273.15) * (9 / 5) + 32;
  return value.toFixed(1);
  ;
}
function getIcon(n) {
  "https://openweathermap.org/img/wn/".concat(n, "@2x.png");
}
function scrollBehavior() {
  var innerForecast = document.querySelector('.innerForecast');
  var isDown = false;
  var startX;
  var currentPos;
  innerForecast.addEventListener('mousedown', function (e) {
    down(e);
  });
  innerForecast.addEventListener('mouseleave', function () {
    leave();
  });
  innerForecast.addEventListener('mouseup', function () {
    isDown = false;
    innerForecast.classList.remove('active');
  });
  innerForecast.addEventListener('mousemove', function (e) {
    drag(e);
  });
  innerForecast.addEventListener('swipe:left', function (e) {
    drag(e);
  });
  function down(e) {
    isDown = true;
    innerForecast.classList.add('active');
    startX = e.pageX;
    currentPos = innerForecast.style.transform.match(/(\d+)/);
    if (currentPos === '' || currentPos === null) currentPos = 0;else currentPos = currentPos[0];
  }
  function leave() {
    isDown = false;
    innerForecast.classList.remove('active');
  }
  function drag(e) {
    if (!isDown) return;
    e.preventDefault();
    var x = e.pageX;
    var walk = (x - startX) * 1;
    var distance = walk - currentPos;
    console.log('distance: ' + distance);
    var coord = innerForecast.lastElementChild.getBoundingClientRect();
    var lastElem = coord.x + coord.width;
    if (distance <= 0 && (lastElem >= window.innerWidth || walk > 0)) {
      console.log('inner distance: ' + distance);
      // innerForecast.style.cssText=`transform: translateX(${distance}px)`;
      innerForecast.style.transform = "translateX(".concat(distance, "px)");
    }
  }
}
})();

/******/ })()
;
//# sourceMappingURL=bundle.eb7fc46cab866acad23b.js.map