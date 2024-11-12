/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/scoutbar/dist/bundle-es/_rollupPluginBabelHelpers-312661ae.js":
/*!************************************************************************************!*\
  !*** ./node_modules/scoutbar/dist/bundle-es/_rollupPluginBabelHelpers-312661ae.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ _objectSpread2),
/* harmony export */   a: () => (/* binding */ _extends),
/* harmony export */   b: () => (/* binding */ _asyncToGenerator),
/* harmony export */   c: () => (/* binding */ _objectWithoutProperties)
/* harmony export */ });
/**
 * scoutbar.js 
 * @summary ScoutBar is a JavaScript library for developing user friendly, easy-to-use, scalable and highly customizable component for automating your navigation experience
 * @version v1.2.3
 * @author  Adenekan Wonderful <hellocodewonders@gmail.com> (https://codewonders.dev)
 * @license Released under the MIT license.
 * @copyright Adenekan Wonderful 2021
 */

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}


/***/ }),

/***/ "./node_modules/scoutbar/dist/bundle-es/components/icon/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/scoutbar/dist/bundle-es/components/icon/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Icon)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_312661ae_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_rollupPluginBabelHelpers-312661ae.js */ "./node_modules/scoutbar/dist/bundle-es/_rollupPluginBabelHelpers-312661ae.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/**
 * scoutbar.js 
 * @summary ScoutBar is a JavaScript library for developing user friendly, easy-to-use, scalable and highly customizable component for automating your navigation experience
 * @version v1.2.3
 * @author  Adenekan Wonderful <hellocodewonders@gmail.com> (https://codewonders.dev)
 * @license Released under the MIT license.
 * @copyright Adenekan Wonderful 2021
 */



var _excluded = ["children", "width", "height", "fill", "viewBox"];
var Icon = function Icon(_ref) {
  var children = _ref.children,
    width = _ref.width,
    height = _ref.height,
    _ref$fill = _ref.fill,
    fill = _ref$fill === void 0 ? 'none' : _ref$fill,
    viewBox = _ref.viewBox,
    attrs = (0,_rollupPluginBabelHelpers_312661ae_js__WEBPACK_IMPORTED_MODULE_0__.c)(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", (0,_rollupPluginBabelHelpers_312661ae_js__WEBPACK_IMPORTED_MODULE_0__.a)({
    width: width,
    height: height,
    viewBox: viewBox,
    fill: fill,
    xmlns: "http://www.w3.org/2000/svg"
  }, attrs), children);
};


/***/ }),

/***/ "./node_modules/scoutbar/dist/bundle-es/components/icon/svg/logo.js":
/*!**************************************************************************!*\
  !*** ./node_modules/scoutbar/dist/bundle-es/components/icon/svg/logo.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScoutBarLogo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.js */ "./node_modules/scoutbar/dist/bundle-es/components/icon/index.js");
/* harmony import */ var _rollupPluginBabelHelpers_312661ae_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_rollupPluginBabelHelpers-312661ae.js */ "./node_modules/scoutbar/dist/bundle-es/_rollupPluginBabelHelpers-312661ae.js");
/**
 * scoutbar.js 
 * @summary ScoutBar is a JavaScript library for developing user friendly, easy-to-use, scalable and highly customizable component for automating your navigation experience
 * @version v1.2.3
 * @author  Adenekan Wonderful <hellocodewonders@gmail.com> (https://codewonders.dev)
 * @license Released under the MIT license.
 * @copyright Adenekan Wonderful 2021
 */




var ScoutBarLogo = function ScoutBarLogo(_ref) {
  var brandColor = _ref.brandColor;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://scoutbar.co",
    target: "_blank",
    rel: "nofollow norefereer noopener",
    className: "scout__bar-brand-logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: "2267",
    height: "503",
    viewBox: "0 0 2267 503",
    fill: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    y: "7.87695",
    width: "490.58",
    height: "495.123",
    rx: "128.11",
    fill: brandColor
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M239.235 126.715C224.62 126.715 210.149 129.593 196.647 135.186C183.144 140.779 170.876 148.976 160.542 159.311C150.208 169.645 142.01 181.913 136.417 195.415C130.825 208.918 127.946 223.389 127.946 238.004C127.946 252.619 130.825 267.09 136.417 280.592C142.01 294.094 150.208 306.363 160.542 316.697C170.876 327.031 183.144 335.229 196.647 340.822C210.149 346.414 191.31 340.822 205.925 340.822C236.208 288.511 297.057 337.568 317.928 316.697C338.799 295.826 350.524 267.52 350.524 238.004C350.524 208.488 338.799 180.181 317.928 159.311C297.057 138.44 268.751 126.715 239.235 126.715ZM90.8496 238.004C90.853 214.389 96.4923 191.117 107.299 170.12C118.105 149.123 133.767 131.009 152.982 117.283C172.198 103.556 194.411 94.6141 217.778 91.1993C241.144 87.7845 264.988 89.9958 287.327 97.6493C309.667 105.303 329.858 118.178 346.221 135.204C362.584 152.23 374.648 172.915 381.409 195.541C388.17 218.167 389.433 242.08 385.094 265.292C380.754 288.504 370.938 310.346 356.459 329.001L419.282 391.824C422.661 395.322 424.53 400.007 424.488 404.871C424.446 409.734 422.495 414.386 419.056 417.825C415.617 421.264 410.965 423.215 406.102 423.257C401.238 423.299 396.553 421.43 393.055 418.051L330.232 355.228C308.298 372.257 282.026 382.79 254.403 385.628C226.78 388.467 198.915 383.497 173.976 371.285C149.037 359.073 128.026 340.107 113.33 316.546C98.6354 292.984 90.8465 265.772 90.8496 238.004Z",
    fill: "white",
    fillOpacity: "0.83"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M803.116 317.627C803.116 272.333 778.264 243.873 724.953 233.452L679.258 225.034C648.394 219.022 636.77 208.6 636.77 189.761C636.77 168.918 656.01 155.289 686.473 155.289C718.139 155.289 741.788 167.314 741.788 196.174H798.306C798.306 132.442 743.792 108.392 687.275 108.392C618.332 108.392 577.847 146.07 577.847 194.972C577.847 238.262 606.307 265.919 658.014 275.539L703.308 284.358C731.366 289.568 743.391 299.188 743.391 319.23C743.391 342.078 721.746 356.508 689.68 356.508C649.196 356.508 629.555 339.673 629.555 316.023H571.434C571.434 369.334 616.327 404.607 689.68 404.607C753.412 404.607 803.116 373.343 803.116 317.627ZM969.302 273.535H1029.03C1019.81 219.022 980.124 188.558 927.214 188.558C863.882 188.558 821.394 231.848 821.394 296.783C821.394 362.119 863.882 405.409 926.813 405.409C979.322 405.409 1019 373.343 1029.03 319.23H969.302C962.487 343.681 947.657 356.508 925.21 356.508C898.755 356.508 878.713 337.268 878.713 296.783C878.713 259.907 897.552 236.658 926.813 236.658C947.657 236.658 964.091 249.485 969.302 273.535ZM1043.06 296.783C1043.06 361.718 1088.35 405.008 1152.08 405.008C1215.82 405.008 1261.11 361.718 1261.11 296.783C1261.11 232.249 1215.82 188.158 1152.08 188.158C1088.35 188.158 1043.06 232.249 1043.06 296.783ZM1100.38 296.383C1100.38 259.105 1120.82 235.857 1152.08 235.857C1183.35 235.857 1203.79 259.105 1203.79 296.383C1203.79 333.259 1183.35 357.309 1152.08 357.309C1120.82 357.309 1100.38 333.259 1100.38 296.383ZM1425.44 192.567V306.804C1425.44 337.668 1411.01 356.107 1383.36 356.508C1356.9 357.309 1340.07 341.677 1340.07 309.209V192.567H1286.76V316.424C1286.76 369.735 1317.62 405.008 1370.93 405.008C1395.78 405.008 1413.82 393.785 1424.64 378.153L1427.45 401H1478.75V192.567H1425.44ZM1586.52 401H1629V351.698H1604.55C1586.11 351.698 1581.3 344.883 1581.3 326.846V242.27H1629V192.567H1581.3V135.648H1525.19V172.124C1525.19 186.153 1521.58 192.567 1508.75 192.567H1493.12V242.27H1525.19V339.272C1525.19 376.95 1545.23 401 1586.52 401ZM1776.86 188.558C1745.99 188.558 1721.14 200.984 1710.32 219.423V99.9743H1653.8V401H1706.31L1709.52 372.942C1719.94 390.979 1745.19 405.008 1776.86 405.008C1834.17 405.008 1875.46 366.128 1875.46 296.783C1875.46 230.245 1836.58 188.558 1776.86 188.558ZM1764.43 354.904C1733.97 354.904 1711.12 333.259 1711.12 296.783C1711.12 260.708 1733.97 238.262 1764.43 238.663C1795.29 238.663 1817.74 260.708 1817.74 296.783C1817.74 332.858 1795.29 354.904 1764.43 354.904ZM2096.46 360.115C2089.64 360.115 2084.43 358.512 2084.43 348.09V270.328C2084.43 209.001 2037.53 188.558 1992.24 188.558C1937.73 188.558 1899.25 217.018 1899.25 263.915H1950.15C1950.95 245.477 1966.59 233.051 1989.84 233.051C2013.08 233.051 2027.91 245.878 2027.91 269.126V278.345H1972.2C1918.89 278.345 1894.04 303.598 1894.04 340.875C1894.04 380.958 1923.7 405.008 1969.79 405.008C2000.66 405.008 2024.71 394.186 2036.33 376.549C2040.74 394.587 2055.97 401 2074.41 401H2104.87V360.115H2096.46ZM2027.91 322.437C2027.91 347.288 2011.88 360.917 1984.22 360.917C1965.79 360.917 1951.76 354.503 1951.76 337.268C1951.76 326.044 1958.17 314.821 1982.22 314.821H2027.91V322.437ZM2229.53 192.567C2206.28 192.567 2191.45 203.79 2184.63 216.617L2178.62 192.567H2126.11V401H2182.63V293.978C2182.63 262.312 2193.05 242.671 2226.32 242.671H2257.99V192.567H2229.53Z",
    fill: brandColor
  })));
};


/***/ }),

/***/ "./node_modules/scoutbar/dist/bundle-es/components/icon/svg/tutorial.js":
/*!******************************************************************************!*\
  !*** ./node_modules/scoutbar/dist/bundle-es/components/icon/svg/tutorial.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TutorialIcon: () => (/* binding */ TutorialIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.js */ "./node_modules/scoutbar/dist/bundle-es/components/icon/index.js");
/* harmony import */ var _rollupPluginBabelHelpers_312661ae_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_rollupPluginBabelHelpers-312661ae.js */ "./node_modules/scoutbar/dist/bundle-es/_rollupPluginBabelHelpers-312661ae.js");
/**
 * scoutbar.js 
 * @summary ScoutBar is a JavaScript library for developing user friendly, easy-to-use, scalable and highly customizable component for automating your navigation experience
 * @version v1.2.3
 * @author  Adenekan Wonderful <hellocodewonders@gmail.com> (https://codewonders.dev)
 * @license Released under the MIT license.
 * @copyright Adenekan Wonderful 2021
 */




var Tab = function Tab() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M18.03 11.47L11.53 4.97C11.396 4.83704 11.2168 4.7595 11.0281 4.75286C10.8395 4.74622 10.6553 4.81096 10.5122 4.93416C10.3692 5.05736 10.2779 5.22997 10.2566 5.41752C10.2352 5.60508 10.2853 5.79379 10.397 5.946L10.47 6.03L15.69 11.25H3.75C3.56876 11.25 3.39366 11.3156 3.25707 11.4348C3.12048 11.5539 3.03165 11.7184 3.007 11.898L3 12C3 12.38 3.282 12.694 3.648 12.743L3.75 12.75H15.69L10.47 17.97C10.343 18.097 10.2658 18.2653 10.2524 18.4445C10.239 18.6236 10.2903 18.8015 10.397 18.946L10.47 19.03C10.597 19.157 10.7653 19.2342 10.9445 19.2476C11.1236 19.261 11.3015 19.2097 11.446 19.103L11.53 19.03L18.03 12.53C18.157 12.403 18.2342 12.2347 18.2476 12.0555C18.261 11.8764 18.2097 11.6985 18.103 11.554L18.03 11.47L11.53 4.97L18.03 11.47V11.47ZM21 18.5V5.5C21 5.30109 20.921 5.11032 20.7803 4.96967C20.6397 4.82902 20.4489 4.75 20.25 4.75C20.0511 4.75 19.8603 4.82902 19.7197 4.96967C19.579 5.11032 19.5 5.30109 19.5 5.5V18.5C19.5 18.6989 19.579 18.8897 19.7197 19.0303C19.8603 19.171 20.0511 19.25 20.25 19.25C20.4489 19.25 20.6397 19.171 20.7803 19.0303C20.921 18.8897 21 18.6989 21 18.5Z",
    fill: "black"
  }));
};
var Up = function Up() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M18.707 12.707L17.293 11.293L13 15.586V6H11V15.586L6.70697 11.293L5.29297 12.707L12 19.414L18.707 12.707Z",
    fill: "black"
  }));
};
var Down = function Down() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M11 8.41394V17.9999H13V8.41394L17.293 12.7069L18.707 11.2929L12 4.58594L5.29297 11.2929L6.70697 12.7069L11 8.41394Z",
    fill: "black"
  }));
};
var Return = function Return() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: "14",
    height: "14",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.4999 1.5C14.6325 1.5 14.7597 1.55268 14.8535 1.64645C14.9472 1.74021 14.9999 1.86739 14.9999 2V6.8C14.9999 7.1283 14.9353 7.45339 14.8096 7.75671C14.684 8.06002 14.4998 8.33562 14.2677 8.56777C14.0355 8.79991 13.7599 8.98406 13.4566 9.1097C13.1533 9.23534 12.8282 9.3 12.4999 9.3H2.70692L6.05392 12.646C6.1478 12.7399 6.20055 12.8672 6.20055 13C6.20055 13.1328 6.1478 13.2601 6.05392 13.354C5.96003 13.4479 5.83269 13.5006 5.69992 13.5006C5.56714 13.5006 5.4398 13.4479 5.34592 13.354L1.14592 9.154C1.09935 9.10755 1.06241 9.05238 1.0372 8.99163C1.012 8.93089 0.999023 8.86577 0.999023 8.8C0.999023 8.73423 1.012 8.66911 1.0372 8.60837C1.06241 8.54762 1.09935 8.49245 1.14592 8.446L5.14592 4.446C5.2398 4.35211 5.36714 4.29937 5.49992 4.29937C5.63269 4.29937 5.76003 4.35211 5.85392 4.446C5.9478 4.53989 6.00055 4.66722 6.00055 4.8C6.00055 4.93278 5.9478 5.06011 5.85392 5.154L2.70692 8.3H12.4999C12.8977 8.3 13.2793 8.14196 13.5606 7.86066C13.8419 7.57936 13.9999 7.19782 13.9999 6.8V2C13.9999 1.86739 14.0526 1.74021 14.1464 1.64645C14.2401 1.55268 14.3673 1.5 14.4999 1.5Z",
    fill: "black"
  }));
};
var TutorialIcon = {
  Tab: Tab,
  Up: Up,
  Down: Down,
  Return: Return
};


/***/ }),

/***/ "./node_modules/scoutbar/dist/bundle-es/components/portal/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/scoutbar/dist/bundle-es/components/portal/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Portal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/constants.js */ "./node_modules/scoutbar/dist/bundle-es/utils/constants.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/index.js */ "./node_modules/scoutbar/dist/bundle-es/utils/index.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/**
 * scoutbar.js 
 * @summary ScoutBar is a JavaScript library for developing user friendly, easy-to-use, scalable and highly customizable component for automating your navigation experience
 * @version v1.2.3
 * @author  Adenekan Wonderful <hellocodewonders@gmail.com> (https://codewonders.dev)
 * @license Released under the MIT license.
 * @copyright Adenekan Wonderful 2021
 */





var Portal = function Portal(_ref) {
  var _ref$selector = _ref.selector,
    selector = _ref$selector === void 0 ? _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.SCOUTBAR_ROOT_ID : _ref$selector,
    children = _ref.children;
  var portalRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    mounted = _useState2[0],
    setMounted = _useState2[1];
  /**
   * Remove the hash prefix from the selector and add it again
   * to the query selector to avoid double hash
   */

  var prefixedSelector = "#" + (selector == null ? void 0 : selector.replace(/^#/, ''));
  var createElement = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var div = document.createElement('div');
    div.setAttribute('id', selector); // Append the div to the body

    document.body.appendChild(div);
    return div;
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // Check if the selector exists in the DOM
    portalRef.current = document.querySelector(prefixedSelector);
    if (!portalRef.current) {
      // Create the div element
      var div = createElement(); // Set the ref to the newly created div

      portalRef.current = div;
    }
    setMounted(true);
  }, [selector]);
  return mounted ? /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(children, portalRef.current) : null;
};


/***/ }),

/***/ "./node_modules/scoutbar/dist/bundle-es/components/scout-bar-provider/index.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/scoutbar/dist/bundle-es/components/scout-bar-provider/index.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScoutBarProvider)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_312661ae_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_rollupPluginBabelHelpers-312661ae.js */ "./node_modules/scoutbar/dist/bundle-es/_rollupPluginBabelHelpers-312661ae.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_context_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/context.js */ "./node_modules/scoutbar/dist/bundle-es/helpers/context.js");
/* harmony import */ var _helpers_scout_search_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/scout-search.js */ "./node_modules/scoutbar/dist/bundle-es/helpers/scout-search.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/**
 * scoutbar.js 
 * @summary ScoutBar is a JavaScript library for developing user friendly, easy-to-use, scalable and highly customizable component for automating your navigation experience
 * @version v1.2.3
 * @author  Adenekan Wonderful <hellocodewonders@gmail.com> (https://codewonders.dev)
 * @license Released under the MIT license.
 * @copyright Adenekan Wonderful 2021
 */





var ScoutBarProvider = function ScoutBarProvider(_ref) {
  var _ref$actions = _ref.actions,
    actions = _ref$actions === void 0 ? [] : _ref$actions,
    children = _ref.children,
    values = _ref.values;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    section = _useState2[0],
    setSection = _useState2[1];
  var _ref2 = values || {},
    inputValue = _ref2.inputValue,
    _setInputValue = _ref2.setInputValue,
    scoutbarReveal = _ref2.scoutbarReveal,
    setScoutbarReveal = _ref2.setScoutbarReveal;
  /**
   * Revise action data type if its a function to a an array
   * We want to give user the ability to Item creation functions as a parameter in the props
   *
   * e.g
   * ...
   * actions={({ createScoutAction,createScoutSection,createScoutPage}) => [...]}
   */

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(actions),
    _useState4 = _slicedToArray(_useState3, 2),
    currentAction = _useState4[0],
    setAction = _useState4[1];
  var searchItem = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (value) {
    var result = (0,_helpers_scout_search_js__WEBPACK_IMPORTED_MODULE_3__["default"])(currentAction, inputValue || value);
    if (result.length) {
      setSection == null ? void 0 : setSection(result);
    } else {
      setSection == null ? void 0 : setSection(null);
    }
  }, [setSection, _helpers_scout_search_js__WEBPACK_IMPORTED_MODULE_3__["default"]]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_helpers_context_js__WEBPACK_IMPORTED_MODULE_2__["default"].Provider, {
    value: {
      actions: currentAction,
      setAction: setAction,
      inputValue: inputValue,
      setScoutbarReveal: setScoutbarReveal,
      scoutbarReveal: scoutbarReveal,
      setInputValue: function () {
        var _setInputValue2 = (0,_rollupPluginBabelHelpers_312661ae_js__WEBPACK_IMPORTED_MODULE_0__.b)(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(value) {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _setInputValue == null ? void 0 : _setInputValue(value);
              case 2:
                searchItem(value);
              case 3:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        function setInputValue(_x) {
          return _setInputValue2.apply(this, arguments);
        }
        return setInputValue;
      }(),
      currentSection: section,
      setCurrentSection: function setCurrentSection(section) {
        return setSection(section);
      }
    }
  }, children);
};


/***/ }),

/***/ "./node_modules/scoutbar/dist/bundle-es/components/scout-tutorial/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/scoutbar/dist/bundle-es/components/scout-tutorial/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScoutTutorial)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icon_svg_tutorial_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icon/svg/tutorial.js */ "./node_modules/scoutbar/dist/bundle-es/components/icon/svg/tutorial.js");
/* harmony import */ var _icon_svg_logo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon/svg/logo.js */ "./node_modules/scoutbar/dist/bundle-es/components/icon/svg/logo.js");
/* harmony import */ var _icon_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon/index.js */ "./node_modules/scoutbar/dist/bundle-es/components/icon/index.js");
/* harmony import */ var _rollupPluginBabelHelpers_312661ae_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_rollupPluginBabelHelpers-312661ae.js */ "./node_modules/scoutbar/dist/bundle-es/_rollupPluginBabelHelpers-312661ae.js");
/**
 * scoutbar.js 
 * @summary ScoutBar is a JavaScript library for developing user friendly, easy-to-use, scalable and highly customizable component for automating your navigation experience
 * @version v1.2.3
 * @author  Adenekan Wonderful <hellocodewonders@gmail.com> (https://codewonders.dev)
 * @license Released under the MIT license.
 * @copyright Adenekan Wonderful 2021
 */






var ScoutTutorial = function ScoutTutorial(_ref) {
  var brandColor = _ref.brandColor,
    acknowledgement = _ref.acknowledgement;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "scout__bar-tutorial-section"
  }, acknowledgement && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "scout__bar-mobile-acknowledge"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Powered by ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_svg_logo_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    brandColor: brandColor
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "scout__bar-tutorial-section-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_svg_tutorial_js__WEBPACK_IMPORTED_MODULE_1__.TutorialIcon.Tab, null), "TAB"), "or", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "scout__bar-tutorial-section-item__arrow m-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_svg_tutorial_js__WEBPACK_IMPORTED_MODULE_1__.TutorialIcon.Down, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "scout__bar-tutorial-section-item__arrow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_svg_tutorial_js__WEBPACK_IMPORTED_MODULE_1__.TutorialIcon.Up, null)), "to navigate")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "scout__bar-tutorial-section-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_svg_tutorial_js__WEBPACK_IMPORTED_MODULE_1__.TutorialIcon.Return, null), "RETURN"), "to Select")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "scout__bar-tutorial-section-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "ESC"), "to cancel")));
};


/***/ }),

/***/ "./node_modules/scoutbar/dist/bundle-es/helpers/action-helpers.js":
/*!************************************************************************!*\
  !*** ./node_modules/scoutbar/dist/bundle-es/helpers/action-helpers.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createScoutAction: () => (/* binding */ createScoutAction),
/* harmony export */   createScoutPage: () => (/* binding */ createScoutPage),
/* harmony export */   createScoutSection: () => (/* binding */ createScoutSection)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_312661ae_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-312661ae.js */ "./node_modules/scoutbar/dist/bundle-es/_rollupPluginBabelHelpers-312661ae.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/index.js */ "./node_modules/scoutbar/dist/bundle-es/utils/index.js");
/**
 * scoutbar.js 
 * @summary ScoutBar is a JavaScript library for developing user friendly, easy-to-use, scalable and highly customizable component for automating your navigation experience
 * @version v1.2.3
 * @author  Adenekan Wonderful <hellocodewonders@gmail.com> (https://codewonders.dev)
 * @license Released under the MIT license.
 * @copyright Adenekan Wonderful 2021
 */




/**
 * Create a new scout action object
 *
 * @param   {IScoutAction}  args  [args description]
 * @return  {IScoutAction}        [return description]
 */

var createScoutAction = function createScoutAction(args) {
  return (0,_rollupPluginBabelHelpers_312661ae_js__WEBPACK_IMPORTED_MODULE_0__._)((0,_rollupPluginBabelHelpers_312661ae_js__WEBPACK_IMPORTED_MODULE_0__._)({
    id: (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.guidGenerator)()
  }, args), {}, {
    type: 'scout-action'
  });
};
var createScoutSection = function createScoutSection(args) {
  return (0,_rollupPluginBabelHelpers_312661ae_js__WEBPACK_IMPORTED_MODULE_0__._)((0,_rollupPluginBabelHelpers_312661ae_js__WEBPACK_IMPORTED_MODULE_0__._)({
    id: (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.guidGenerator)()
  }, args), {}, {
    type: 'scout-section'
  });
};
var createScoutPage = function createScoutPage(args) {
  return (0,_rollupPluginBabelHelpers_312661ae_js__WEBPACK_IMPORTED_MODULE_0__._)((0,_rollupPluginBabelHelpers_312661ae_js__WEBPACK_IMPORTED_MODULE_0__._)({
    id: (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.guidGenerator)()
  }, args), {}, {
    type: 'scout-section-page'
  });
};


/***/ }),

/***/ "./node_modules/scoutbar/dist/bundle-es/helpers/context.js":
/*!*****************************************************************!*\
  !*** ./node_modules/scoutbar/dist/bundle-es/helpers/context.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScoutBarContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/**
 * scoutbar.js 
 * @summary ScoutBar is a JavaScript library for developing user friendly, easy-to-use, scalable and highly customizable component for automating your navigation experience
 * @version v1.2.3
 * @author  Adenekan Wonderful <hellocodewonders@gmail.com> (https://codewonders.dev)
 * @license Released under the MIT license.
 * @copyright Adenekan Wonderful 2021
 */



/* -------------------------------------------------------------------------- */
var ScoutBarContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});


/***/ }),

/***/ "./node_modules/scoutbar/dist/bundle-es/helpers/scout-search.js":
/*!**********************************************************************!*\
  !*** ./node_modules/scoutbar/dist/bundle-es/helpers/scout-search.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ scoutSearch)
/* harmony export */ });
/**
 * scoutbar.js 
 * @summary ScoutBar is a JavaScript library for developing user friendly, easy-to-use, scalable and highly customizable component for automating your navigation experience
 * @version v1.2.3
 * @author  Adenekan Wonderful <hellocodewonders@gmail.com> (https://codewonders.dev)
 * @license Released under the MIT license.
 * @copyright Adenekan Wonderful 2021
 */

var contains = function contains(initialValue, patterns) {
  /**
   * Check if the pattern is an array else exit function
   */
  if (!Array.isArray(patterns)) return console.error('contains: patterns must be an array');
  var value = 0;
  for (var i = 0; i < patterns.length; i++) {
    var pattern = patterns[i];
    value += Number(pattern.includes(initialValue));
  }
  return Boolean(value);
};
var scoutSearch = function scoutSearch(nodes, keyword) {
  var isScoutSection = function isScoutSection(type) {
    return type === 'scout-section' || type === 'scout-section-page';
  };
  var toLowerCase = function toLowerCase(str) {
    return str == null ? void 0 : str.toLowerCase();
  };
  var search = toLowerCase(keyword).trim();
  var res = [];
  var _findNode = function findNode(doc, word) {
    for (var i = 0; i < doc.length; i++) {
      var _doc$i, _doc$i2, _doc$i3, _doc$i4, _doc$i5;

      /**
       * Check if the word is in a label or in a description
       */
      var isContained = contains(word, [toLowerCase(doc[i].label), toLowerCase(((_doc$i = doc[i]) == null ? void 0 : _doc$i.description) || '')]);
      /**
       * Instead of looking for an exact match in a Section | Page Type
       * we just check if the action is included in the title
       */

      if (isContained && !isScoutSection((_doc$i2 = doc[i]) == null ? void 0 : _doc$i2.type)) {
        res.push(doc[i]);
      }
      if (isContained && isScoutSection((_doc$i3 = doc[i]) == null ? void 0 : _doc$i3.type)) {
        res.push(doc[i]);
        /**
         * Stop searching in the children if the keyword matches excatly a section
         */

        if (toLowerCase(doc[i].label) === word || toLowerCase(doc[i].label).startsWith(word)) break;
      }
      /**
       * Prevent recursion if type is a
       * Section | Page so we can get the entire tree
       * and not just the first level
       */

      if ((_doc$i4 = doc[i]) != null && _doc$i4.children) _findNode((_doc$i5 = doc[i]) == null ? void 0 : _doc$i5.children, toLowerCase(word));
    }
  };
  _findNode(nodes, search);
  /**
   * Rearrange result by their level of correctness to the search
   */

  return res.sort(function (a) {
    if (toLowerCase(a.label).startsWith(search)) {
      return -1;
    }
    return 0;
  });
};


/***/ }),

/***/ "./node_modules/scoutbar/dist/bundle-es/helpers/use-click-outside.js":
/*!***************************************************************************!*\
  !*** ./node_modules/scoutbar/dist/bundle-es/helpers/use-click-outside.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useOnClickOutside)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/**
 * scoutbar.js 
 * @summary ScoutBar is a JavaScript library for developing user friendly, easy-to-use, scalable and highly customizable component for automating your navigation experience
 * @version v1.2.3
 * @author  Adenekan Wonderful <hellocodewonders@gmail.com> (https://codewonders.dev)
 * @license Released under the MIT license.
 * @copyright Adenekan Wonderful 2021
 */



/* -------------------------------------------------------------------------- */

var useOnClickOutside = function useOnClickOutside(ref, handler) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var listener = function listener(event) {
      var el = ref == null ? void 0 : ref.current; // Do nothing if clicking ref's element or descendent elements

      if (!el || el != null && el.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return function () {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    }; // Reload only if ref or handler changes
  }, [ref, handler]);
};


/***/ }),

/***/ "./node_modules/scoutbar/dist/bundle-es/helpers/use-is-mounted.js":
/*!************************************************************************!*\
  !*** ./node_modules/scoutbar/dist/bundle-es/helpers/use-is-mounted.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useIsMounted)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/**
 * scoutbar.js 
 * @summary ScoutBar is a JavaScript library for developing user friendly, easy-to-use, scalable and highly customizable component for automating your navigation experience
 * @version v1.2.3
 * @author  Adenekan Wonderful <hellocodewonders@gmail.com> (https://codewonders.dev)
 * @license Released under the MIT license.
 * @copyright Adenekan Wonderful 2021
 */



/* -------------------------------------------------------------------------- */

var useIsMounted = function useIsMounted() {
  var isMounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    isMounted.current = true;
    return function () {
      isMounted.current = false;
    };
  }, []);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return isMounted.current;
  }, []);
};


/***/ }),

/***/ "./node_modules/scoutbar/dist/bundle-es/helpers/use-keyboard-navigation.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/scoutbar/dist/bundle-es/helpers/use-keyboard-navigation.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useKeybaordNavigation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_scout_key_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../use-scout-key.js */ "./node_modules/scoutbar/dist/bundle-es/use-scout-key.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/index.js */ "./node_modules/scoutbar/dist/bundle-es/utils/index.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/**
 * scoutbar.js 
 * @summary ScoutBar is a JavaScript library for developing user friendly, easy-to-use, scalable and highly customizable component for automating your navigation experience
 * @version v1.2.3
 * @author  Adenekan Wonderful <hellocodewonders@gmail.com> (https://codewonders.dev)
 * @license Released under the MIT license.
 * @copyright Adenekan Wonderful 2021
 */




var useKeybaordNavigation = function useKeybaordNavigation(ref) {
  var _window, _window$matchMedia;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(-1),
    _useState2 = _slicedToArray(_useState, 2),
    cursor = _useState2[0],
    setCursor = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined),
    _useState4 = _slicedToArray(_useState3, 2),
    hovered = _useState4[0],
    setHovered = _useState4[1];
  /**
   * Scout Key Stroke Handlers
   */

  var downPress = (0,_use_scout_key_js__WEBPACK_IMPORTED_MODULE_1__["default"])('ArrowDown', true);
  var upPress = (0,_use_scout_key_js__WEBPACK_IMPORTED_MODULE_1__["default"])('ArrowUp', true);
  var enterPress = (0,_use_scout_key_js__WEBPACK_IMPORTED_MODULE_1__["default"])('Enter', true);
  var tabPress = (0,_use_scout_key_js__WEBPACK_IMPORTED_MODULE_1__["default"])('Tab', true);
  var backscapePress = (0,_use_scout_key_js__WEBPACK_IMPORTED_MODULE_1__["default"])('Backspace', true);
  /* ------------------------------------ = ----------------------------------- */

  /**
   * Check if we are on mobile device and disable fetching all cells
   */

  var isMobile = (_window = window) == null ? void 0 : (_window$matchMedia = _window.matchMedia('only screen and (max-width: 768px)')) == null ? void 0 : _window$matchMedia.matches;
  /**
   * Check if we are on mobile device and
   * disable fetching all
   */

  var allCellElements = Array.from(ref.current && !isMobile ? ref.current.querySelectorAll('.scoutbar-cell-item') : []);
  var elementActive = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return allCellElements[cursor];
  }, [cursor]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {
    // Get original body overflow
    var originalStyle = window.getComputedStyle(document.body).overflow;
    if (upPress || downPress || isMobile) {
      // Prevent scrolling on mount or deps check
      document.body.style.overflow = 'hidden';
    }
    return function () {
      // Re-enable scrolling when component unmounts
      if (originalStyle) {
        document.body.style.overflow = originalStyle;
      }
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (elementActive) {
      /**
       * Allow elements scroll into view on keydown
       */
      elementActive == null ? void 0 : elementActive.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
      });
      allCellElements.forEach(function (element, index) {
        return allCellElements[index] === elementActive && element.setAttribute('data-scoutbar-active', 'true');
      });
    }
  }, [elementActive]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var elementsLength = (allCellElements == null ? void 0 : allCellElements.length) - 1;
    if (allCellElements != null && allCellElements.length) {
      if (downPress) {
        setCursor(function (prevState) {
          if (prevState >= elementsLength) return 0;
          return prevState + 1;
        });
      }
      if (upPress) {
        setCursor(function (prevState) {
          if (prevState <= 0) return elementsLength;
          return prevState - 1;
        });
      }
    }
  }, [downPress, upPress]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (elementActive && enterPress) {
      /**
       * Add a focus and click event to the element thats currently active
       * so that we can trigger the click event on just the current element and
       * ignore any element that is currently focused
       */
      elementActive == null ? void 0 : elementActive.click();
    }
  }, [enterPress, elementActive]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (allCellElements.length && hovered) {
      setCursor(allCellElements.indexOf(hovered));
    }
  }, [hovered]);
  var removeEvent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    allCellElements.forEach(function (element) {
      return element.removeAttribute('data-scoutbar-active');
    });
  }, [allCellElements]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _ref$current;

    /**
     * Element cursor reset
     */
    ref == null ? void 0 : (_ref$current = ref.current) == null ? void 0 : _ref$current.addEventListener('mousemove', removeEvent);
    return function () {
      var _ref$current2;
      ref == null ? void 0 : (_ref$current2 = ref.current) == null ? void 0 : _ref$current2.removeEventListener('mousemove', removeEvent);
    };
  }, [cursor]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    /**
     * Reset the cursor when there's an update on the section
     * or when user wants to navigate with the tab key or backspace key
     */
    if (tabPress || backscapePress || enterPress) {
      setCursor(-1);
    }
  }, [tabPress, backscapePress, enterPress]);
  return [cursor, setHovered, allCellElements];
};


/***/ }),

/***/ "./node_modules/scoutbar/dist/bundle-es/helpers/use-local-storage.js":
/*!***************************************************************************!*\
  !*** ./node_modules/scoutbar/dist/bundle-es/helpers/use-local-storage.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useLocalStorage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/**
 * scoutbar.js 
 * @summary ScoutBar is a JavaScript library for developing user friendly, easy-to-use, scalable and highly customizable component for automating your navigation experience
 * @version v1.2.3
 * @author  Adenekan Wonderful <hellocodewonders@gmail.com> (https://codewonders.dev)
 * @license Released under the MIT license.
 * @copyright Adenekan Wonderful 2021
 */



/* -------------------------------------------------------------------------- */

function useLocalStorage(key, initialValue) {
  // Get from local storage then
  // parse stored json or return initialValue
  var readValue = function readValue() {
    // Prevent build error "window is undefined" but keep keep working
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      var item = window.localStorage.getItem(key);
      return item ? parseJSON(item) : initialValue;
    } catch (error) {
      console.warn("Error reading localStorage key \u201C" + key + "\u201D:", error);
      return initialValue;
    }
  }; // State to store our value
  // Pass initial state function to useState so logic is only executed once

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(readValue),
    _useState2 = _slicedToArray(_useState, 2),
    storedValue = _useState2[0],
    setStoredValue = _useState2[1]; // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.

  var setValue = function setValue(value) {
    // Prevent build error "window is undefined" but keeps working
    if (typeof window === 'undefined') {
      console.warn("Tried setting localStorage key \u201C" + key + "\u201D even though environment is not a client");
    }
    try {
      // Allow value to be a function so we have the same API as useState
      var newValue = value instanceof Function ? value(storedValue) : value; // Save to local storage

      window.localStorage.setItem(key, JSON.stringify(newValue)); // Save state

      setStoredValue(newValue); // We dispatch a custom event so every useLocalStorage hook are notified

      window.dispatchEvent(new Event('local-storage'));
    } catch (error) {
      console.warn("Error setting localStorage key \u201C" + key + "\u201D:", error);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setStoredValue(readValue());
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var handleStorageChange = function handleStorageChange() {
      setStoredValue(readValue());
    }; // this only works for other documents, not the current one

    window.addEventListener('storage', handleStorageChange); // this is a custom event, triggered in writeValueToLocalStorage

    window.addEventListener('local-storage', handleStorageChange);
    return function () {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('local-storage', handleStorageChange);
    };
  }, []);
  return [storedValue, setValue];
}
function parseJSON(value) {
  try {
    return value === 'undefined' ? undefined : JSON.parse(value != null ? value : '');
  } catch (error) {
    console.log('parsing error on', {
      value: value
    });
    return undefined;
  }
}


/***/ }),

/***/ "./node_modules/scoutbar/dist/bundle-es/helpers/use-trap-focus.js":
/*!************************************************************************!*\
  !*** ./node_modules/scoutbar/dist/bundle-es/helpers/use-trap-focus.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useTrapFocus)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/**
 * scoutbar.js 
 * @summary ScoutBar is a JavaScript library for developing user friendly, easy-to-use, scalable and highly customizable component for automating your navigation experience
 * @version v1.2.3
 * @author  Adenekan Wonderful <hellocodewonders@gmail.com> (https://codewonders.dev)
 * @license Released under the MIT license.
 * @copyright Adenekan Wonderful 2021
 */



/* -------------------------------------------------------------------------- */

var useTrapFocus = function useTrapFocus(_ref) {
  var elementState = _ref.elementState,
    _ref$bodyScroll = _ref.bodyScroll,
    bodyScroll = _ref$bodyScroll === void 0 ? true : _ref$bodyScroll,
    focusableElement = _ref.focusableElement,
    _ref$disableFocusTrap = _ref.disableFocusTrap,
    disableFocusTrap = _ref$disableFocusTrap === void 0 ? false : _ref$disableFocusTrap;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var OUTER_SCOUTBAR_EL = focusableElement;
    /**
     * All focusable elements to consider for the focusable interaction
     */

    var focusableElements = [OUTER_SCOUTBAR_EL + " a", OUTER_SCOUTBAR_EL + " button", OUTER_SCOUTBAR_EL + " input", OUTER_SCOUTBAR_EL + " select", OUTER_SCOUTBAR_EL + " textarea", OUTER_SCOUTBAR_EL + " area"];
    /**
     * query selector all `focusableElements`
     */

    var outerLayerElements = document.querySelectorAll(focusableElements.join(', '));
    if (elementState && !disableFocusTrap) {
      /**
       * Remove focus from elements when scoutbar is opned
       */
      outerLayerElements.forEach(function (el) {
        el.setAttribute('tabindex', '-1');
        el.setAttribute('aria-hidden', 'true');
      });
      /**
       * Disable body scroll and attach focus to just the scoutbar
       */

      if (!bodyScroll) document.body.style.overflow = 'hidden';
    }
    /**
     * Cleanup all the DOM manipulation
     */

    return function () {
      outerLayerElements.forEach(function (el) {
        el.removeAttribute('tabindex');
        el.removeAttribute('aria-hidden');
        if (!bodyScroll) document.body.style.overflow = 'auto';
      });
    };
  }, [elementState, bodyScroll]);
};


/***/ }),

/***/ "./node_modules/scoutbar/dist/bundle-es/index-f31c96d7.js":
/*!****************************************************************!*\
  !*** ./node_modules/scoutbar/dist/bundle-es/index-f31c96d7.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ ScoutbarInput),
/* harmony export */   a: () => (/* binding */ ScoutBarStem),
/* harmony export */   b: () => (/* binding */ ScoutBar),
/* harmony export */   c: () => (/* binding */ ScoutSnackBar),
/* harmony export */   d: () => (/* binding */ defaultProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rollupPluginBabelHelpers_312661ae_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_rollupPluginBabelHelpers-312661ae.js */ "./node_modules/scoutbar/dist/bundle-es/_rollupPluginBabelHelpers-312661ae.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/index.js */ "./node_modules/scoutbar/dist/bundle-es/utils/index.js");
/* harmony import */ var _use_scout_key_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-scout-key.js */ "./node_modules/scoutbar/dist/bundle-es/use-scout-key.js");
/* harmony import */ var _helpers_context_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/context.js */ "./node_modules/scoutbar/dist/bundle-es/helpers/context.js");
/* harmony import */ var _use_scout_shortcut_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./use-scout-shortcut.js */ "./node_modules/scoutbar/dist/bundle-es/use-scout-shortcut.js");
/* harmony import */ var _helpers_use_keyboard_navigation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/use-keyboard-navigation.js */ "./node_modules/scoutbar/dist/bundle-es/helpers/use-keyboard-navigation.js");
/* harmony import */ var _helpers_use_local_storage_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers/use-local-storage.js */ "./node_modules/scoutbar/dist/bundle-es/helpers/use-local-storage.js");
/* harmony import */ var _components_icon_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/icon/index.js */ "./node_modules/scoutbar/dist/bundle-es/components/icon/index.js");
/* harmony import */ var _helpers_use_click_outside_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/use-click-outside.js */ "./node_modules/scoutbar/dist/bundle-es/helpers/use-click-outside.js");
/* harmony import */ var _components_scout_bar_provider_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/scout-bar-provider/index.js */ "./node_modules/scoutbar/dist/bundle-es/components/scout-bar-provider/index.js");
/* harmony import */ var _components_portal_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/portal/index.js */ "./node_modules/scoutbar/dist/bundle-es/components/portal/index.js");
/* harmony import */ var _components_icon_svg_logo_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/icon/svg/logo.js */ "./node_modules/scoutbar/dist/bundle-es/components/icon/svg/logo.js");
/* harmony import */ var _helpers_action_helpers_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./helpers/action-helpers.js */ "./node_modules/scoutbar/dist/bundle-es/helpers/action-helpers.js");
/* harmony import */ var _helpers_use_trap_focus_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./helpers/use-trap-focus.js */ "./node_modules/scoutbar/dist/bundle-es/helpers/use-trap-focus.js");
/* harmony import */ var _components_scout_tutorial_index_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/scout-tutorial/index.js */ "./node_modules/scoutbar/dist/bundle-es/components/scout-tutorial/index.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/scoutbar/dist/bundle-es/utils/constants.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/**
 * scoutbar.js 
 * @summary ScoutBar is a JavaScript library for developing user friendly, easy-to-use, scalable and highly customizable component for automating your navigation experience
 * @version v1.2.3
 * @author  Adenekan Wonderful <hellocodewonders@gmail.com> (https://codewonders.dev)
 * @license Released under the MIT license.
 * @copyright Adenekan Wonderful 2021
 */


















function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;
  if (!css || typeof document === 'undefined') {
    return;
  }
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}
var css_248z$3 = ".input-module_inputWrapper__KBpVk{align-items:center;display:flex;justify-content:space-between;width:100%}.input-module_inputWrapper__KBpVk .input-module_iconButton__2aHBb{background:transparent;border:none;margin:0 5px 0 20px}@media (max-width:767px){.input-module_inputWrapper__KBpVk .input-module_iconButton__2aHBb{margin:0 5px 0 10px}}.input-module_inputWrapper__KBpVk .input-module_closeScoutBar__2WkBG{background:transparent;border:none;border-radius:50%;display:none;margin:0 10px 0 0;padding:6px}.input-module_inputWrapper__KBpVk .input-module_closeScoutBar__2WkBG svg{width:23px}@media (max-width:767px){.input-module_inputWrapper__KBpVk .input-module_closeScoutBar__2WkBG{display:block}}.input-module_inputWrapper__KBpVk svg path{fill:var(--scout-theme-grey)}.input-module_inputWrapper__KBpVk .input-module_inputField__3IoZ8{height:auto;position:relative;width:100%}.input-module_inputWrapper__KBpVk .input-module_inputField__3IoZ8 input{-webkit-appearance:none;background:transparent;border:none;box-sizing:border-box;color:var(--scout-theme-black);cursor:text;font-family:inherit;font-size:inherit;font-weight:400;padding:18px 10px;touch-action:manipulation;transition:all .2s;width:100%}.input-module_inputWrapper__KBpVk .input-module_inputField__3IoZ8 input::-moz-placeholder{color:var(--scout-theme-grey)}.input-module_inputWrapper__KBpVk .input-module_inputField__3IoZ8 input:-ms-input-placeholder{color:var(--scout-theme-grey)}.input-module_inputWrapper__KBpVk .input-module_inputField__3IoZ8 input::placeholder{color:var(--scout-theme-grey)}.input-module_inputWrapper__KBpVk .input-module_inputField__3IoZ8 input:focus{outline:none}@supports (fill:currentColor){.input-module_inputWrapper__KBpVk:focus-within .input-module_inputIcon__1mJ3R path{fill:currentColor}}";
var styles$2 = {
  "inputWrapper": "input-module_inputWrapper__KBpVk",
  "iconButton": "input-module_iconButton__2aHBb",
  "closeScoutBar": "input-module_closeScoutBar__2WkBG",
  "inputField": "input-module_inputField__3IoZ8",
  "inputIcon": "input-module_inputIcon__1mJ3R"
};
styleInject(css_248z$3);
var ScoutbarInput = function ScoutbarInput(_ref) {
  var brandColor = _ref.brandColor,
    placeholder = _ref.placeholder,
    showRecentSearch = _ref.showRecentSearch,
    closeScoutbar = _ref.closeScoutbar,
    autocomplete = _ref.autocomplete;
  var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null); // Initialize the placeholder

  var initialPlaceholder = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return placeholder && Array.isArray(placeholder) ? placeholder[0] : placeholder || 'What would you like to do today ?';
  }, [placeholder]);
  var words = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return placeholder;
  }, [placeholder]);
  /**
   * Check if esc key is pressed
   */

  var isEscPressed = (0,_use_scout_key_js__WEBPACK_IMPORTED_MODULE_3__["default"])('Backspace', true);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_helpers_context_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
    inputValue = _useContext.inputValue,
    setInputValue = _useContext.setInputValue,
    currentSection = _useContext.currentSection,
    setCurrentSection = _useContext.setCurrentSection;
  var setRecentSearch = (0,_helpers_use_local_storage_js__WEBPACK_IMPORTED_MODULE_7__["default"])('scoutbar:recent-search', [])[1];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      word: initialPlaceholder,
      currentIndex: 0
    }),
    _useState2 = _slicedToArray(_useState, 2),
    inputPlaceholder = _useState2[0],
    setInputPlaceholder = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _inputRef$current;

    // Auto focus on input
    (_inputRef$current = inputRef.current) == null ? void 0 : _inputRef$current.focus(); // Function that executes every 2000 milliseconds

    if (words && Array.isArray(words)) {
      var interval = setInterval(function () {
        setInputPlaceholder(function (prev) {
          return (0,_rollupPluginBabelHelpers_312661ae_js__WEBPACK_IMPORTED_MODULE_1__._)((0,_rollupPluginBabelHelpers_312661ae_js__WEBPACK_IMPORTED_MODULE_1__._)({}, prev), {}, {
            word: words[prev.currentIndex],
            currentIndex: prev.currentIndex === words.length - 1 ? 0 : prev.currentIndex + 1
          });
        });
      }, 3000);
      return function () {
        return clearInterval(interval);
      };
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (inputValue === '' && !(0,_utils_index_js__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(currentSection) && isEscPressed) {
      setCurrentSection == null ? void 0 : setCurrentSection(null);
    }
  }, [inputValue, isEscPressed, setCurrentSection]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_2__.classNames)(['scout__bar-wrapper-input', styles$2.inputWrapper])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    onClick: function onClick() {
      return !(0,_utils_index_js__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(currentSection) && (setCurrentSection == null ? void 0 : setCurrentSection(null));
    },
    className: styles$2.iconButton,
    disabled: (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(currentSection)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_icon_index_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    className: (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_2__.classNames)(['scout__bar-wrapper-input-icon', styles$2.inputIcon]),
    style: {
      color: brandColor
    }
  }, (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(currentSection) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M11 4.99983C10.2121 4.99983 9.43185 5.15503 8.7039 5.45656C7.97595 5.75808 7.31451 6.20004 6.75736 6.75719C6.20021 7.31434 5.75825 7.97578 5.45672 8.70373C5.15519 9.43169 5 10.2119 5 10.9998C5 11.7878 5.15519 12.568 5.45672 13.2959C5.75825 14.0239 6.20021 14.6853 6.75736 15.2425C7.31451 15.7996 7.97595 16.2416 8.7039 16.5431C9.43185 16.8446 10.2121 16.9998 11 16.9998C12.5913 16.9998 14.1174 16.3677 15.2426 15.2425C16.3679 14.1173 17 12.5911 17 10.9998C17 9.40853 16.3679 7.88241 15.2426 6.75719C14.1174 5.63197 12.5913 4.99983 11 4.99983V4.99983ZM3 10.9998C3.00018 9.72669 3.30422 8.47198 3.88684 7.33997C4.46946 6.20797 5.31384 5.23136 6.3498 4.49132C7.38577 3.75127 8.5834 3.26917 9.84315 3.08506C11.1029 2.90096 12.3884 3.02018 13.5928 3.43281C14.7973 3.84544 15.8858 4.53957 16.768 5.4575C17.6502 6.37543 18.3006 7.49067 18.6651 8.71051C19.0296 9.93035 19.0977 11.2196 18.8638 12.471C18.6298 13.7225 18.1006 14.9001 17.32 15.9058L20.707 19.2928C20.8892 19.4814 20.99 19.734 20.9877 19.9962C20.9854 20.2584 20.8802 20.5092 20.6948 20.6947C20.5094 20.8801 20.2586 20.9852 19.9964 20.9875C19.7342 20.9898 19.4816 20.889 19.293 20.7068L15.906 17.3198C14.7235 18.2379 13.307 18.8058 11.8178 18.9588C10.3285 19.1118 8.82619 18.8439 7.48165 18.1855C6.1371 17.5271 5.00429 16.5046 4.21202 15.2343C3.41976 13.964 2.99983 12.4969 3 10.9998V10.9998Z",
    fill: brandColor
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M20.9999 11H6.41394L11.7069 5.70697L10.2929 4.29297L2.58594 12L10.2929 19.707L11.7069 18.293L6.41394 13H20.9999V11Z",
    fill: brandColor,
    style: {
      fill: brandColor
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: styles$2.inputField
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    placeholder: (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(currentSection) ? inputPlaceholder.word : 'Hit Backspace or Delete key to exit',
    type: "text",
    id: "scoutbar",
    value: inputValue,
    onChange: function onChange(e) {
      setInputValue == null ? void 0 : setInputValue(e.target.value);
    },
    onBlur: function onBlur(e) {
      if (e.target.value.trim() && showRecentSearch) {
        setRecentSearch == null ? void 0 : setRecentSearch(function (prev) {
          var newRecentSearch = [e.target.value].concat(_toConsumableArray(prev)).splice(0, 10);
          return Array.from(new Set(newRecentSearch));
        });
      }
    },
    ref: inputRef,
    autoComplete: autocomplete,
    "aria-describedby": "scoutbar-placeholder"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    onClick: closeScoutbar,
    className: styles$2.closeScoutBar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_icon_index_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M6.22517 4.81099C6.03657 4.62883 5.78397 4.52803 5.52177 4.53031C5.25957 4.53259 5.00876 4.63776 4.82335 4.82317C4.63794 5.00858 4.53278 5.25939 4.5305 5.52158C4.52822 5.78378 4.62901 6.03638 4.81117 6.22499L10.5862 12L4.81017 17.775C4.71466 17.8672 4.63848 17.9776 4.58607 18.0996C4.53366 18.2216 4.50607 18.3528 4.50492 18.4856C4.50377 18.6184 4.52907 18.75 4.57935 18.8729C4.62963 18.9958 4.70388 19.1075 4.79778 19.2014C4.89167 19.2953 5.00332 19.3695 5.12622 19.4198C5.24911 19.4701 5.38079 19.4954 5.51357 19.4942C5.64635 19.4931 5.77757 19.4655 5.89958 19.4131C6.02158 19.3607 6.13192 19.2845 6.22417 19.189L12.0002 13.414L17.7752 19.189C17.9638 19.3711 18.2164 19.4719 18.4786 19.4697C18.7408 19.4674 18.9916 19.3622 19.177 19.1768C19.3624 18.9914 19.4676 18.7406 19.4698 18.4784C19.4721 18.2162 19.3713 17.9636 19.1892 17.775L13.4142 12L19.1892 6.22499C19.3713 6.03638 19.4721 5.78378 19.4698 5.52158C19.4676 5.25939 19.3624 5.00858 19.177 4.82317C18.9916 4.63776 18.7408 4.53259 18.4786 4.53031C18.2164 4.52803 17.9638 4.62883 17.7752 4.81099L12.0002 10.586L6.22517 4.80999V4.81099Z",
    style: {
      fill: brandColor
    }
  }))));
};
ScoutbarInput.defaultProps = (0,_rollupPluginBabelHelpers_312661ae_js__WEBPACK_IMPORTED_MODULE_1__._)({}, defaultProps);
var css_248z$2 = ".scout__bar-wrapper-theme-dark{--scout-default-background:#dadada}.scout__bar-wrapper-theme-dark .snackbar-module_button__35dO3 p span{background:rgba(0,0,0,.231)}.scout__bar-wrapper-theme-light{--scout-default-background:#0a0d17}.scout__bar-wrapper-theme-light .snackbar-module_button__35dO3 p span{background:hsla(0,0%,87%,.231)}.snackbar-module_scoutbarSnackBar__2KUKB{align-items:center;-webkit-animation:snackbar-module_fadeIn__33znS .2s ease;animation:snackbar-module_fadeIn__33znS .2s ease;background:var(--scout-snackbar-background,var(--scout-default-background));border-radius:8px;display:flex;justify-content:center;left:50%;min-width:322px;overflow:hidden;position:fixed;transform:translateX(-50%);z-index:100}@media (max-width:575px){.snackbar-module_scoutbarSnackBar__2KUKB{display:none}}@-webkit-keyframes snackbar-module_fadeIn__33znS{0%{opacity:0}to{opacity:1}}@keyframes snackbar-module_fadeIn__33znS{0%{opacity:0}to{opacity:1}}.snackbar-module_scoutbarSnackBar__2KUKB.snackbar-module_bottom__3n0Kl{bottom:25px}.snackbar-module_scoutbarSnackBar__2KUKB.snackbar-module_top__3U7z6{top:25px}.snackbar-module_scoutbarSnackBar__2KUKB .snackbar-module_CloseIcon__21382{background:transparent;border:none;cursor:pointer;padding:12px 10px 12px 0}.snackbar-module_scoutbarSnackBar__2KUKB .snackbar-module_CloseIcon__21382 svg path{fill:var(--scout-white)}.snackbar-module_scoutbarSnackBar__2KUKB .snackbar-module_button__35dO3{background:transparent;border:1px solid transparent;color:var(--scout-snackbar-color,var(--scout-white));cursor:pointer;font-size:.95rem;font-weight:400;padding:10px 21px;text-align:left;transition:all .2s ease-in-out;width:100%;will-change:border-color}.snackbar-module_scoutbarSnackBar__2KUKB .snackbar-module_button__35dO3:hover{opacity:.7}.snackbar-module_scoutbarSnackBar__2KUKB .snackbar-module_button__35dO3 p{align-items:center;color:var(--scout-snackbar-color,var(--scout-white));display:flex;margin:0}.snackbar-module_scoutbarSnackBar__2KUKB .snackbar-module_button__35dO3 p span{align-items:center;border-radius:5px;display:flex;font-size:14px;height:30px;justify-content:center;margin:0 8px;min-width:30px}.snackbar-module_scoutbarSnackBar__2KUKB .snackbar-module_button__35dO3 p span svg{height:auto;width:20px}.snackbar-module_scoutbarSnackBar__2KUKB .snackbar-module_button__35dO3 p span svg path{stroke:var(--scout-white)}";
var styles$1 = {
  "button": "snackbar-module_button__35dO3",
  "scoutbarSnackBar": "snackbar-module_scoutbarSnackBar__2KUKB",
  "fadeIn": "snackbar-module_fadeIn__33znS",
  "bottom": "snackbar-module_bottom__3n0Kl",
  "top": "snackbar-module_top__3U7z6",
  "CloseIcon": "snackbar-module_CloseIcon__21382"
};
styleInject(css_248z$2);
var ScoutSnackBar = function ScoutSnackBar(_ref) {
  var setController = _ref.setController,
    snackBar = _ref.snackBar,
    theme = _ref.theme;
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showSnackBar = _useState4[0],
    setShowSnackBar = _useState4[1];
  var metaKey = (0,_use_scout_key_js__WEBPACK_IMPORTED_MODULE_3__["default"])('Meta');
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (metaKey) {
      setShowSnackBar(true);
    }
  }, [metaKey]);
  (0,_helpers_use_click_outside_js__WEBPACK_IMPORTED_MODULE_9__["default"])(ref, function () {
    setShowSnackBar(false);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, showSnackBar && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_2__.classNames)(['scout__bar-snack-bar', styles$1.scoutbarSnackBar, "scout__bar-wrapper-theme-" + theme, styles$1[(snackBar == null ? void 0 : snackBar.position) || 'bottom']]),
    ref: ref,
    style: (0,_rollupPluginBabelHelpers_312661ae_js__WEBPACK_IMPORTED_MODULE_1__._)(_defineProperty(_defineProperty({}, '--scout-snackbar-background', snackBar == null ? void 0 : snackBar.background), '--scout-snackbar-color', snackBar == null ? void 0 : snackBar.color), snackBar == null ? void 0 : snackBar.style)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return setController(true);
    },
    className: styles$1.button
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Use", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_2__.getOS)() === 'Mac' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_icon_index_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M9.3 17.85C9.3 18.473 9.11526 19.082 8.76913 19.6C8.423 20.1181 7.93104 20.5218 7.35545 20.7602C6.77987 20.9986 6.14651 21.061 5.53547 20.9395C4.92443 20.8179 4.36315 20.5179 3.92262 20.0774C3.48208 19.6369 3.18207 19.0756 3.06053 18.4645C2.93898 17.8535 3.00136 17.2201 3.23978 16.6445C3.4782 16.069 3.88194 15.577 4.39996 15.2309C4.91797 14.8847 5.52699 14.7 6.15 14.7H17.85C18.473 14.7 19.082 14.8847 19.6 15.2309C20.1181 15.577 20.5218 16.069 20.7602 16.6445C20.9986 17.2201 21.061 17.8535 20.9395 18.4645C20.8179 19.0756 20.5179 19.6369 20.0774 20.0774C19.6369 20.5179 19.0756 20.8179 18.4645 20.9395C17.8535 21.061 17.2201 20.9986 16.6445 20.7602C16.069 20.5218 15.577 20.1181 15.2309 19.6C14.8847 19.082 14.7 18.473 14.7 17.85V6.15C14.7 5.52699 14.8847 4.91797 15.2309 4.39996C15.577 3.88194 16.069 3.4782 16.6445 3.23978C17.2201 3.00136 17.8535 2.93898 18.4645 3.06053C19.0756 3.18207 19.6369 3.48208 20.0774 3.92262C20.5179 4.36315 20.8179 4.92443 20.9395 5.53547C21.061 6.14651 20.9986 6.77987 20.7602 7.35545C20.5218 7.93104 20.1181 8.423 19.6 8.76913C19.082 9.11526 18.473 9.3 17.85 9.3H6.15C5.52699 9.3 4.91797 9.11526 4.39996 8.76913C3.88194 8.423 3.4782 7.93104 3.23978 7.35545C3.00136 6.77987 2.93898 6.14651 3.06053 5.53547C3.18207 4.92443 3.48208 4.36315 3.92262 3.92262C4.36315 3.48208 4.92443 3.18207 5.53547 3.06053C6.14651 2.93898 6.77987 3.00136 7.35545 3.23978C7.93104 3.4782 8.423 3.88194 8.76913 4.39996C9.11526 4.91797 9.3 5.52699 9.3 6.15V17.85Z",
    stroke: "black",
    strokeWidth: "1.5"
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "Ctrl")), "+", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "K"), " to trigger search")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return setShowSnackBar(false);
    },
    className: styles$1.CloseIcon
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_icon_index_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M6.22517 4.81099C6.03657 4.62883 5.78397 4.52803 5.52177 4.53031C5.25957 4.53259 5.00876 4.63776 4.82335 4.82317C4.63794 5.00858 4.53278 5.25939 4.5305 5.52158C4.52822 5.78378 4.62901 6.03638 4.81117 6.22499L10.5862 12L4.81017 17.775C4.71466 17.8672 4.63848 17.9776 4.58607 18.0996C4.53366 18.2216 4.50607 18.3528 4.50492 18.4856C4.50377 18.6184 4.52907 18.75 4.57935 18.8729C4.62963 18.9958 4.70388 19.1075 4.79778 19.2014C4.89167 19.2953 5.00332 19.3695 5.12622 19.4198C5.24911 19.4701 5.38079 19.4954 5.51357 19.4942C5.64635 19.4931 5.77757 19.4655 5.89958 19.4131C6.02158 19.3607 6.13192 19.2845 6.22417 19.189L12.0002 13.414L17.7752 19.189C17.9638 19.3711 18.2164 19.4719 18.4786 19.4697C18.7408 19.4674 18.9916 19.3622 19.177 19.1768C19.3624 18.9914 19.4676 18.7406 19.4698 18.4784C19.4721 18.2162 19.3713 17.9636 19.1892 17.775L13.4142 12L19.1892 6.22499C19.3713 6.03638 19.4721 5.78378 19.4698 5.52158C19.4676 5.25939 19.3624 5.00858 19.177 4.82317C18.9916 4.63776 18.7408 4.53259 18.4786 4.53031C18.2164 4.52803 17.9638 4.62883 17.7752 4.81099L12.0002 10.586L6.22517 4.80999V4.81099Z",
    fill: "black"
  })))));
};
var css_248z$1 = ".stem-module_scoutbarStemInner__1MU3l{transition:all .2s ease-in-out}.stem-module_scoutbarStem__1F5hJ{--default-focus:#898989;--deduct-height:50vh;border-top:1px solid var(--scout-light-grey);max-height:var(--deduct-height);min-height:20px;overflow-y:auto;padding:10px;scrollbar-color:var(--scout-light-grey) transparent;scrollbar-width:thin;transition:all .2s ease-in}.stem-module_scoutbarStem__1F5hJ.stem-module_emptyResults__1rLIX{border-top:0 solid transparent;min-height:0;padding:0}@media (max-width:767px){.stem-module_scoutbarStem__1F5hJ{max-height:calc(100% - 96px);min-height:86vh}}.stem-module_scoutbarStem__1F5hJ:hover::-webkit-scrollbar{width:9px}.stem-module_scoutbarStem__1F5hJ::-webkit-scrollbar-thumb{background:var(--scout-theme-grey);border-radius:50px}.stem-module_scoutbarStem__1F5hJ::-webkit-scrollbar-thumb:hover{background:var(--scout-tutorial-grey)}.stem-module_scoutbarStem__1F5hJ::-webkit-scrollbar{width:0}.stem-module_scoutbarStem__1F5hJ::-webkit-scrollbar-track{background:transparent}.stem-module_scoutbarStem__1F5hJ .stem-module_recentSearch__e7gbq{align-items:center;display:flex;flex-wrap:wrap;justify-content:flex-start;margin-bottom:8px}.stem-module_scoutbarStem__1F5hJ .stem-module_recentSearch__e7gbq .stem-module_recentCell__3Ax2W{-webkit-animation:stem-module_slideInLeft__1s9px .2s ease-in-out;animation:stem-module_slideInLeft__1s9px .2s ease-in-out;border-radius:8px;box-sizing:border-box;display:flex;margin-bottom:4px;margin-right:5px;min-width:25%;padding:0 10px;position:relative}@media (max-width:767px){.stem-module_scoutbarStem__1F5hJ .stem-module_recentSearch__e7gbq .stem-module_recentCell__3Ax2W{min-width:100%}}.stem-module_scoutbarStem__1F5hJ .stem-module_recentSearch__e7gbq .stem-module_recentCell__3Ax2W:focus-within,.stem-module_scoutbarStem__1F5hJ .stem-module_recentSearch__e7gbq .stem-module_recentCell__3Ax2W:hover{background:var(--scout-theme-card-hover)}.stem-module_scoutbarStem__1F5hJ .stem-module_recentSearch__e7gbq .stem-module_recentCell__3Ax2W:focus-within .stem-module_recentCloseIcon__nLRl1,.stem-module_scoutbarStem__1F5hJ .stem-module_recentSearch__e7gbq .stem-module_recentCell__3Ax2W:hover .stem-module_recentCloseIcon__nLRl1{visibility:visible}.stem-module_scoutbarStem__1F5hJ .stem-module_recentSearch__e7gbq .stem-module_recentCell__3Ax2W:focus-within .stem-module_recentCloseIcon__nLRl1 path,.stem-module_scoutbarStem__1F5hJ .stem-module_recentSearch__e7gbq .stem-module_recentCell__3Ax2W:hover .stem-module_recentCloseIcon__nLRl1 path{fill:var(--scout-brand-primary)}.stem-module_scoutbarStem__1F5hJ .stem-module_recentSearch__e7gbq .stem-module_recentCell__3Ax2W:focus-within{border:1px solid var(--scout-brand-primary)}.stem-module_scoutbarStem__1F5hJ .stem-module_recentSearch__e7gbq .stem-module_recentCell__3Ax2W .stem-module_clock__1Om0E,.stem-module_scoutbarStem__1F5hJ .stem-module_recentSearch__e7gbq .stem-module_recentCell__3Ax2W .stem-module_more__2SjGz{height:auto;margin-right:8px;opacity:.7;width:20px}.stem-module_scoutbarStem__1F5hJ .stem-module_recentSearch__e7gbq .stem-module_recentCell__3Ax2W .stem-module_clock__1Om0E path{stroke:var(--scout-theme-black);fill:none}.stem-module_scoutbarStem__1F5hJ .stem-module_recentSearch__e7gbq .stem-module_recentCell__3Ax2W .stem-module_more__2SjGz path{fill:var(--scout-theme-black)}.stem-module_scoutbarStem__1F5hJ .stem-module_recentSearch__e7gbq .stem-module_recentCell__3Ax2W .stem-module_recentButton__9FQYF{background:transparent;border:none;color:var(--scout-theme-black);cursor:pointer;font-size:14px;outline:none;overflow:hidden;padding:14px 14px 14px 0;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:152px}@media (max-width:767px){.stem-module_scoutbarStem__1F5hJ .stem-module_recentSearch__e7gbq .stem-module_recentCell__3Ax2W .stem-module_recentButton__9FQYF{width:270px}}.stem-module_scoutbarStem__1F5hJ .stem-module_recentSearch__e7gbq .stem-module_recentCell__3Ax2W .stem-module_recentCloseIcon__nLRl1{background:var(--scout-theme-card-hover);border:none;position:absolute;right:11px;top:50%;transform:translateY(-50%);visibility:hidden}@media (max-width:767px){.stem-module_scoutbarStem__1F5hJ .stem-module_recentSearch__e7gbq .stem-module_recentCell__3Ax2W .stem-module_recentCloseIcon__nLRl1{visibility:visible}}.stem-module_scoutbarStem__1F5hJ .stem-module_recentSearch__e7gbq .stem-module_recentCell__3Ax2W .stem-module_recentCloseIcon__nLRl1 svg{height:auto;width:17px}.stem-module_scoutbarStem__1F5hJ .stem-module_recentSearch__e7gbq .stem-module_recentCell__3Ax2W .stem-module_recentCloseIcon__nLRl1 svg path{fill:var(--scout-theme-grey)}.stem-module_scoutbarStem__1F5hJ .stem-module_scoutbarStemCell__2VZbY{align-items:center;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation:stem-module_slideInLeft__1s9px .2s ease-in-out;animation:stem-module_slideInLeft__1s9px .2s ease-in-out;background:transparent;border:1px solid transparent;border-radius:8px;box-sizing:border-box;color:var(--scout-theme-black);cursor:pointer;display:flex;font-size:.95rem;font-weight:400;margin-bottom:3px;padding:15px;position:relative;text-align:left;text-decoration:none;transition:all .1s ease;width:100%;will-change:border-color}.stem-module_scoutbarStem__1F5hJ .stem-module_scoutbarStemCell__2VZbY[data-scoutbar-active=true]{pointer-events:none}.stem-module_scoutbarStem__1F5hJ .stem-module_scoutbarStemCell__2VZbY[data-scoutbar-active=true] .stem-module_newPageIcon__fOZtB,.stem-module_scoutbarStem__1F5hJ .stem-module_scoutbarStemCell__2VZbY[data-scoutbar-active=true] p .stem-module_shortcut__cxjv9{visibility:hidden}.stem-module_scoutbarStem__1F5hJ .stem-module_scoutbarStemCell__2VZbY img,.stem-module_scoutbarStem__1F5hJ .stem-module_scoutbarStemCell__2VZbY svg{display:block;height:35px;margin-right:auto;-o-object-fit:contain;object-fit:contain;-o-object-position:center;object-position:center;width:35px}@media (max-width:767px){.stem-module_scoutbarStem__1F5hJ .stem-module_scoutbarStemCell__2VZbY img,.stem-module_scoutbarStem__1F5hJ .stem-module_scoutbarStemCell__2VZbY svg{margin-right:8px}}.stem-module_scoutbarStem__1F5hJ .stem-module_scoutbarStemCell__2VZbY p{display:block;flex:0 0 92.5%;margin-bottom:0;margin-top:0;max-width:92.5%}.stem-module_scoutbarStem__1F5hJ .stem-module_scoutbarStemCell__2VZbY p span{display:block}.stem-module_scoutbarStem__1F5hJ .stem-module_scoutbarStemCell__2VZbY p .stem-module_description__zho5b{font-size:.813rem;margin-top:6px;opacity:.45}.stem-module_scoutbarStem__1F5hJ .stem-module_scoutbarStemCell__2VZbY p .stem-module_newPageIcon__fOZtB,.stem-module_scoutbarStem__1F5hJ .stem-module_scoutbarStemCell__2VZbY p .stem-module_shortcut__cxjv9{opacity:.7;position:absolute;right:15px;top:50%;transform:translateY(-50%);transition:all .2s ease-in-out;visibility:hidden}.stem-module_scoutbarStem__1F5hJ .stem-module_scoutbarStemCell__2VZbY p .stem-module_shortcut__cxjv9{display:flex}.stem-module_scoutbarStem__1F5hJ .stem-module_scoutbarStemCell__2VZbY p .stem-module_shortcut__cxjv9 span{align-items:center;background:var(--scout-tutorial-grey);border-radius:4px;box-shadow:var(--scout-theme-keyboard);color:var(--scout-white);display:flex;font-family:monospace;font-weight:700;height:20px;justify-content:center;line-height:0;margin:0 7px 0 0;min-width:20px;opacity:1;padding:0 5px}.stem-module_scoutbarStem__1F5hJ .stem-module_scoutbarStemCell__2VZbY p .stem-module_newPageIcon__fOZtB{height:auto;width:20px}.stem-module_scoutbarStem__1F5hJ .stem-module_scoutbarStemCell__2VZbY p .stem-module_newPageIcon__fOZtB path{fill:var(--scout-tutorial-grey)}.stem-module_scoutbarStem__1F5hJ .stem-module_scoutbarStemCell__2VZbY:disabled{color:var(--scout-theme-black);cursor:not-allowed;opacity:.4}.stem-module_scoutbarStem__1F5hJ .stem-module_scoutbarStemCell__2VZbY.stem-module_active__1upNk,.stem-module_scoutbarStem__1F5hJ .stem-module_scoutbarStemCell__2VZbY:focus{background:var(--scout-theme-card-hover)}.stem-module_scoutbarStem__1F5hJ .stem-module_scoutbarStemCell__2VZbY.stem-module_active__1upNk .stem-module_newPageIcon__fOZtB,.stem-module_scoutbarStem__1F5hJ .stem-module_scoutbarStemCell__2VZbY.stem-module_active__1upNk p .stem-module_shortcut__cxjv9,.stem-module_scoutbarStem__1F5hJ .stem-module_scoutbarStemCell__2VZbY:focus .stem-module_newPageIcon__fOZtB,.stem-module_scoutbarStem__1F5hJ .stem-module_scoutbarStemCell__2VZbY:focus p .stem-module_shortcut__cxjv9{visibility:visible}.stem-module_scoutbarStem__1F5hJ .stem-module_scoutbarStemCell__2VZbY:focus{border:1px solid var(--scout-brand-primary,var(--default-focus));outline:none}@-webkit-keyframes stem-module_slideInLeft__1s9px{0%{transform:translateX(-10px)}to{transform:translateX(0)}}@keyframes stem-module_slideInLeft__1s9px{0%{transform:translateX(-10px)}to{transform:translateX(0)}}@-webkit-keyframes stem-module_fadeInRight__3AqGd{0%{opacity:0;transform:translateX(10px)}to{opacity:1;transform:translateX(0)}}@keyframes stem-module_fadeInRight__3AqGd{0%{opacity:0;transform:translateX(10px)}to{opacity:1;transform:translateX(0)}}.stem-module_scoutbarSection__2ovlF p.stem-module_header__3H8HC{-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation:stem-module_slideInLeft__1s9px .2s ease-in-out;animation:stem-module_slideInLeft__1s9px .2s ease-in-out;border-radius:8px;color:var(--scout-theme-black);font-size:.688rem;font-weight:700;letter-spacing:.8px;margin:15px 0 8px 2px;opacity:.4;padding:0 8px;text-transform:uppercase;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}";
var styles = {
  "scoutbarStemInner": "stem-module_scoutbarStemInner__1MU3l",
  "scoutbarStem": "stem-module_scoutbarStem__1F5hJ",
  "emptyResults": "stem-module_emptyResults__1rLIX",
  "recentSearch": "stem-module_recentSearch__e7gbq",
  "recentCell": "stem-module_recentCell__3Ax2W",
  "slideInLeft": "stem-module_slideInLeft__1s9px",
  "recentCloseIcon": "stem-module_recentCloseIcon__nLRl1",
  "clock": "stem-module_clock__1Om0E",
  "more": "stem-module_more__2SjGz",
  "recentButton": "stem-module_recentButton__9FQYF",
  "scoutbarStemCell": "stem-module_scoutbarStemCell__2VZbY",
  "shortcut": "stem-module_shortcut__cxjv9",
  "newPageIcon": "stem-module_newPageIcon__fOZtB",
  "description": "stem-module_description__zho5b",
  "active": "stem-module_active__1upNk",
  "scoutbarSection": "stem-module_scoutbarSection__2ovlF",
  "header": "stem-module_header__3H8HC",
  "fadeInRight": "stem-module_fadeInRight__3AqGd"
};
styleInject(css_248z$1);
var ScoutBarStem = function ScoutBarStem(_ref) {
  var actions = _ref.actions,
    brandColor = _ref.brandColor,
    showRecentSearch = _ref.showRecentSearch;
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null)),
    _useState6 = _slicedToArray(_useState5, 2),
    items = _useState6[0],
    setItems = _useState6[1];
  var _useLocalStorage = (0,_helpers_use_local_storage_js__WEBPACK_IMPORTED_MODULE_7__["default"])('scoutbar:recent-search', []),
    _useLocalStorage2 = _slicedToArray(_useLocalStorage, 2),
    recentSearch = _useLocalStorage2[0],
    removeRecent = _useLocalStorage2[1];
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useKeybaordNavigatio = (0,_helpers_use_keyboard_navigation_js__WEBPACK_IMPORTED_MODULE_6__["default"])(ref),
    _useKeybaordNavigatio2 = _slicedToArray(_useKeybaordNavigatio, 3),
    cursor = _useKeybaordNavigatio2[0],
    setHovered = _useKeybaordNavigatio2[1],
    allCellElements = _useKeybaordNavigatio2[2];
  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_helpers_context_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
    currentSection = _useContext2.currentSection,
    setInputValue = _useContext2.setInputValue;
  var scrollStemSection = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var _ref$current;
    ref == null ? void 0 : (_ref$current = ref.current) == null ? void 0 : _ref$current.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);
  var createScoutbarStemItems = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (item) {
    var _item$children;
    if (item.type === 'scout-action' || item.type === 'scout-section-page' && (currentSection == null ? void 0 : currentSection.id) !== item.id && !Array.isArray(currentSection)) return (/*#__PURE__*/
      // Return Cell if its a section page or action
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ScoutbarStemCell, {
        item: item,
        key: item.id,
        active: cursor,
        setHovered: setHovered,
        allCellElements: allCellElements,
        scrollStemSection: scrollStemSection
      })
    );
    /**
     * Run a Recursion to create new scoutbar items to
     * form a tree of items
     * @returns {function(): object}
     */

    var scoutbarItemChildren = item == null ? void 0 : (_item$children = item.children) == null ? void 0 : _item$children.map(function (child) {
      return createScoutbarStemItems(child);
    });
    /**
     * Set the element for parent dir
     */

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ScoutbarStemItem, {
      key: item.id,
      item: item,
      scoutbarChildren: scoutbarItemChildren
    });
  }, [currentSection, cursor]);
  var setUpScoutbarStem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var scoutbarItems = actions == null ? void 0 : actions.map(function (item) {
      return createScoutbarStemItems(item);
    });
    setItems(scoutbarItems);
  }, [createScoutbarStemItems, actions]);
  var removeRecentSearch = function removeRecentSearch(value) {
    removeRecent == null ? void 0 : removeRecent(function (prev) {
      return prev.filter(function (item) {
        return item !== value;
      });
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setUpScoutbarStem();
  }, [setUpScoutbarStem]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_2__.classNames)([styles.scoutbarStem, (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(actions) && (recentSearch.length === 0 || !showRecentSearch) ? styles.emptyResults : false]),
    style: _defineProperty({}, '--scout-brand-primary', brandColor),
    ref: ref
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: styles.scoutbarStemInner
  }, !(0,_utils_index_js__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(currentSection) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, (currentSection == null ? void 0 : currentSection.length) > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, currentSection == null ? void 0 : currentSection.map(function (section) {
    return createScoutbarStemItems(section);
  })) : createScoutbarStemItems(currentSection)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, showRecentSearch && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RecentSearch, {
    recents: recentSearch,
    removeRecentSearch: removeRecentSearch,
    setInputValue: setInputValue
  }), !(0,_utils_index_js__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(actions) && items)));
};
var ScoutbarStemCell = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function (_ref2) {
  var _item$children2;
  var item = _ref2.item,
    active = _ref2.active,
    setHovered = _ref2.setHovered,
    allCellElements = _ref2.allCellElements,
    scrollStemSection = _ref2.scrollStemSection;
  var isNewPage = item.type === 'scout-section-page' && (item == null ? void 0 : (_item$children2 = item.children) == null ? void 0 : _item$children2.length) > 0;
  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_helpers_context_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
    setCurrentSection = _useContext3.setCurrentSection,
    setScoutbarReveal = _useContext3.setScoutbarReveal,
    setInputValue = _useContext3.setInputValue;
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var elementActive = active >= 0 && ref != null && ref.current ? allCellElements.indexOf(ref == null ? void 0 : ref.current) === active : false;
  var setSection = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (item) {
    setCurrentSection == null ? void 0 : setCurrentSection(item);
    /**
     * Make sure sections starts from the top of the bar
     */

    scrollStemSection();
  }, [scrollStemSection]);
  var options = {
    close: setScoutbarReveal,
    clearSearch: function clearSearch() {
      return setInputValue == null ? void 0 : setInputValue('');
    } // ...
  };
  var handleClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    var _item$action;
    if (isNewPage) return setSection(item);
    (_item$action = item.action) == null ? void 0 : _item$action.call(null, e, options);
  }, []);
  var handleShortcutAction = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    var _item$action2;

    /**
     * Make the element active has a click event that matches expected behavior
     */
    if (isNewPage) return setSection(item);
    if (item.href && !(item != null && item.target)) return window.location.assign(item == null ? void 0 : item.href);
    if (item.href && item != null && item.target) return window.open(item == null ? void 0 : item.href, item == null ? void 0 : item.target);
    (_item$action2 = item.action) == null ? void 0 : _item$action2.call(null, e, options);
  }, []);
  var keyboardShortcut = item.type === 'scout-action' && item.keyboardShortcut || [];
  if (keyboardShortcut.length > 0) {
    (0,_use_scout_shortcut_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_toConsumableArray(keyboardShortcut), handleShortcutAction, {
      override: true
    });
  }
  var ScoutbarStemCellChild = function ScoutbarStemCellChild() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, typeof item.icon === 'string' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: item.icon,
      alt: (item == null ? void 0 : item.label) || '',
      "aria-hidden": "true"
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, item.icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, item.label, item.description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: styles.description
    }, item.description), keyboardShortcut.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: styles.shortcut
    }, keyboardShortcut == null ? void 0 : keyboardShortcut.map(function (key) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        key: key
      }, key);
    })), isNewPage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_icon_index_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      className: styles.newPageIcon,
      "aria-hidden": "true"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      d: "M0 14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H14C14.5304 16 15.0391 15.7893 15.4142 15.4142C15.7893 15.0391 16 14.5304 16 14V2C16 1.46957 15.7893 0.960859 15.4142 0.585786C15.0391 0.210714 14.5304 0 14 0L2 0C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2L0 14ZM4.5 7.5H10.293L8.146 5.354C8.05211 5.26011 7.99937 5.13278 7.99937 5C7.99937 4.86722 8.05211 4.73989 8.146 4.646C8.23989 4.55211 8.36722 4.49937 8.5 4.49937C8.63278 4.49937 8.76011 4.55211 8.854 4.646L11.854 7.646C11.9006 7.69245 11.9375 7.74762 11.9627 7.80837C11.9879 7.86911 12.0009 7.93423 12.0009 8C12.0009 8.06577 11.9879 8.13089 11.9627 8.19163C11.9375 8.25238 11.9006 8.30755 11.854 8.354L8.854 11.354C8.76011 11.4479 8.63278 11.5006 8.5 11.5006C8.36722 11.5006 8.23989 11.4479 8.146 11.354C8.05211 11.2601 7.99937 11.1328 7.99937 11C7.99937 10.8672 8.05211 10.7399 8.146 10.646L10.293 8.5H4.5C4.36739 8.5 4.24021 8.44732 4.14645 8.35355C4.05268 8.25979 4 8.13261 4 8C4 7.86739 4.05268 7.74021 4.14645 7.64645C4.24021 7.55268 4.36739 7.5 4.5 7.5V7.5Z",
      fill: "black"
    }))));
  };
  var cellCommonProps = {
    onClick: handleClick,
    onMouseEnter: function onMouseEnter() {
      return setHovered(ref == null ? void 0 : ref.current);
    },
    onMouseLeave: function onMouseLeave() {
      return setHovered(undefined);
    },
    className: (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_2__.classNames)(['scoutbar-cell-item', styles.scoutbarStemCell, "" + (elementActive && styles.active)]),
    'aria-label': item.ariaLabel,
    ref: ref
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, item.href ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", (0,_rollupPluginBabelHelpers_312661ae_js__WEBPACK_IMPORTED_MODULE_1__.a)({
    href: item.href
  }, cellCommonProps, {
    target: item == null ? void 0 : item.target,
    rel: item == null ? void 0 : item.rel
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ScoutbarStemCellChild, null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", (0,_rollupPluginBabelHelpers_312661ae_js__WEBPACK_IMPORTED_MODULE_1__.a)({
    type: "button"
  }, cellCommonProps, {
    disabled: !item.action && item.type === 'scout-action',
    "aria-hidden": !item.action && item.type === 'scout-action'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ScoutbarStemCellChild, null)));
});
var ScoutbarStemItem = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function (_ref3) {
  var item = _ref3.item,
    scoutbarChildren = _ref3.scoutbarChildren;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: item.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: styles.scoutbarSection
  }, item.label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: styles.header
  }, item.label), scoutbarChildren));
});
var RecentSearch = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function (_ref4) {
  var _recentSearch$slice;
  var recentSearch = _ref4.recents,
    removeRecentSearch = _ref4.removeRecentSearch,
    setInputValue = _ref4.setInputValue;
  var RECENT_SEARCH_NUMBER = 5;
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isShowMore = _useState8[0],
    setIsShowMore = _useState8[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, !(0,_utils_index_js__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(recentSearch) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_2__.classNames)([styles.scoutbarSection])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: styles.header
  }, "Recent Search"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: styles.recentSearch
  }, (_recentSearch$slice = recentSearch.slice(0, isShowMore ? recentSearch.length : RECENT_SEARCH_NUMBER)) == null ? void 0 : _recentSearch$slice.map(function (search, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: styles.recentCell,
      key: search + ":" + index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_icon_index_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      className: styles.clock,
      "aria-hidden": "true"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
      stroke: "black",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      d: "M15 16L12.586 13.586C12.2109 13.211 12.0001 12.7024 12 12.172V6",
      stroke: "black",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_2__.classNames)([styles.recentButton, 'scoutbar-recent-button']),
      onClick: function onClick() {
        return setInputValue == null ? void 0 : setInputValue(search);
      }
    }, search), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: function onClick() {
        return removeRecentSearch(search);
      },
      className: styles.recentCloseIcon
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_icon_index_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      d: "M6.22517 4.81099C6.03657 4.62883 5.78397 4.52803 5.52177 4.53031C5.25957 4.53259 5.00876 4.63776 4.82335 4.82317C4.63794 5.00858 4.53278 5.25939 4.5305 5.52158C4.52822 5.78378 4.62901 6.03638 4.81117 6.22499L10.5862 12L4.81017 17.775C4.71466 17.8672 4.63848 17.9776 4.58607 18.0996C4.53366 18.2216 4.50607 18.3528 4.50492 18.4856C4.50377 18.6184 4.52907 18.75 4.57935 18.8729C4.62963 18.9958 4.70388 19.1075 4.79778 19.2014C4.89167 19.2953 5.00332 19.3695 5.12622 19.4198C5.24911 19.4701 5.38079 19.4954 5.51357 19.4942C5.64635 19.4931 5.77757 19.4655 5.89958 19.4131C6.02158 19.3607 6.13192 19.2845 6.22417 19.189L12.0002 13.414L17.7752 19.189C17.9638 19.3711 18.2164 19.4719 18.4786 19.4697C18.7408 19.4674 18.9916 19.3622 19.177 19.1768C19.3624 18.9914 19.4676 18.7406 19.4698 18.4784C19.4721 18.2162 19.3713 17.9636 19.1892 17.775L13.4142 12L19.1892 6.22499C19.3713 6.03638 19.4721 5.78378 19.4698 5.52158C19.4676 5.25939 19.3624 5.00858 19.177 4.82317C18.9916 4.63776 18.7408 4.53259 18.4786 4.53031C18.2164 4.52803 17.9638 4.62883 17.7752 4.81099L12.0002 10.586L6.22517 4.80999V4.81099Z",
      fill: "black"
    }))));
  }), recentSearch.length > 5 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: styles.recentCell
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_icon_index_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    className: styles.more,
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M0 14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H14C14.5304 16 15.0391 15.7893 15.4142 15.4142C15.7893 15.0391 16 14.5304 16 14V2C16 1.46957 15.7893 0.960859 15.4142 0.585786C15.0391 0.210714 14.5304 0 14 0L2 0C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2L0 14ZM4.5 7.5H10.293L8.146 5.354C8.05211 5.26011 7.99937 5.13278 7.99937 5C7.99937 4.86722 8.05211 4.73989 8.146 4.646C8.23989 4.55211 8.36722 4.49937 8.5 4.49937C8.63278 4.49937 8.76011 4.55211 8.854 4.646L11.854 7.646C11.9006 7.69245 11.9375 7.74762 11.9627 7.80837C11.9879 7.86911 12.0009 7.93423 12.0009 8C12.0009 8.06577 11.9879 8.13089 11.9627 8.19163C11.9375 8.25238 11.9006 8.30755 11.854 8.354L8.854 11.354C8.76011 11.4479 8.63278 11.5006 8.5 11.5006C8.36722 11.5006 8.23989 11.4479 8.146 11.354C8.05211 11.2601 7.99937 11.1328 7.99937 11C7.99937 10.8672 8.05211 10.7399 8.146 10.646L10.293 8.5H4.5C4.36739 8.5 4.24021 8.44732 4.14645 8.35355C4.05268 8.25979 4 8.13261 4 8C4 7.86739 4.05268 7.74021 4.14645 7.64645C4.24021 7.55268 4.36739 7.5 4.5 7.5V7.5Z",
    fill: "black"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: styles.recentButton,
    onClick: function onClick() {
      return setIsShowMore(!isShowMore);
    }
  }, !isShowMore ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, "Show ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, recentSearch.length - RECENT_SEARCH_NUMBER), ' ', "more...") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, "Show less"))))));
});
/**
 * Set display name for the component so its easily debuggable.
 * the memo method prevents the component
 * from re-rendering when the props change and renames it as Anonymous
 */

RecentSearch.displayName = 'RecentSearch';
ScoutbarStemItem.displayName = 'ScoutbarStemItem';
ScoutbarStemCell.displayName = 'ScoutbarStemCell';
var css_248z = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */.___scout{display:block}.___scout h1{font-size:2em;margin:.67em 0}.___scout hr{box-sizing:content-box;height:0;overflow:visible}.___scout pre{font-family:monospace,monospace;font-size:1em}.___scout a{background-color:transparent;margin:0;padding:0}.___scout abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}.___scout b,.___scout strong{font-weight:bolder}.___scout code,.___scout kbd,.___scout samp{font-family:monospace,monospace;font-size:1em}.___scout small{font-size:80%}.___scout sub,.___scout sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}.___scout sub{bottom:-.25em}.___scout sup{top:-.5em}.___scout img{border-style:none}.___scout button,.___scout input,.___scout optgroup,.___scout select,.___scout textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}.___scout button,.___scout input{overflow:visible}.___scout button,.___scout select{text-transform:none}.___scout [type=button],.___scout [type=reset],.___scout [type=submit],.___scout button{-webkit-appearance:button}.___scout [type=button]::-moz-focus-inner,.___scout [type=reset]::-moz-focus-inner,.___scout [type=submit]::-moz-focus-inner,.___scout button::-moz-focus-inner{border-style:none;padding:0}.___scout [type=button]:-moz-focusring,.___scout [type=reset]:-moz-focusring,.___scout [type=submit]:-moz-focusring,.___scout button:-moz-focusring{outline:1px dotted ButtonText}.___scout fieldset{padding:.35em .75em .625em}.___scout legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}.___scout progress{vertical-align:baseline}.___scout textarea{overflow:auto}.___scout [type=checkbox],.___scout [type=radio]{box-sizing:border-box;padding:0}.___scout [type=number]::-webkit-inner-spin-button,.___scout [type=number]::-webkit-outer-spin-button{height:auto}.___scout [type=search]{-webkit-appearance:textfield;outline-offset:-2px}.___scout [type=search]::-webkit-search-decoration{-webkit-appearance:none}.___scout ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.___scout details{display:block}.___scout summary{display:list-item}.___scout [hidden],.___scout template{display:none}:root{--scout-z-index-base:9999;--scout-z-index-overlay:999;--scout-theme--filter-backdrop:blur(0px);--font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",\"Segoe UI Emoji\",\"Roboto\",\"Oxygen\",\"Ubuntu\",\"Fira Sans\",\"Droid Sans\",\"Cantarell\",\"Helvetica Neue\",sans-serif}.scout__bar-wrapper-theme-light{--scout-white:#fff;--scout-theme-black:#021a03;--scout-theme-green:#61bb65;--scout-light-grey:#ebebeb;--scout-theme-grey:#bdbcbc;--scout-theme-card-hover:#ededed;--scout-theme-keyboard:0px 2px 0px 2px #8d8d8d;--scout-tutorial-grey:#494949;--scout-box-shadow:1px 2px 16px 10px rgba(0,0,0,0.05)}.scout__bar-wrapper-theme-dark{--scout-white:#0f121e;--scout-theme-black:#dbdbdb;--scout-theme-green:#61bb65;--scout-light-grey:#32333e;--scout-theme-grey:#656a7c;--scout-tutorial-grey:#9fa0a5;--scout-theme-card-hover:#1c1e2d;--scout-theme-keyboard:0px 2px 0px 2px #6a6b6c;--scout-box-shadow:1px 2px 16px 10px rgb(16 18 30/33%)}@media (prefers-color-scheme:dark){.scout__bar-wrapper-theme-auto{--scout-white:#0f121e;--scout-theme-black:#dbdbdb;--scout-theme-green:#61bb65;--scout-light-grey:#32333e;--scout-theme-grey:#656a7c;--scout-tutorial-grey:#9fa0a5;--scout-theme-card-hover:#1c1e2d;--scout-theme-keyboard:0px 2px 0px 2px #6a6b6c;--scout-box-shadow:1px 2px 16px 10px rgb(16 18 30/33%)}}@media (prefers-color-scheme:light){.scout__bar-wrapper-theme-auto{--scout-white:#fff;--scout-theme-black:#021a03;--scout-theme-green:#61bb65;--scout-light-grey:#ebebeb;--scout-theme-grey:#bdbcbc;--scout-theme-card-hover:#ededed;--scout-theme-keyboard:0px 2px 0px 2px #8d8d8d;--scout-tutorial-grey:#494949;--scout-box-shadow:1px 2px 16px 10px rgba(0,0,0,0.05)}}.___scout{font-family:var(--font-family)}.scout__bar-container{height:auto;left:50%;margin:20px 0;position:fixed;top:12%;transform:translate(-50%);width:var(--scoutbar-width,650px);z-index:var(--scout-z-index-base)}@media (max-width:767px){.scout__bar-container{height:100%;margin:0!important;top:0!important;width:100%!important}}.scout__bar-wrapper{-webkit-animation:bounceIn .3s ease;animation:bounceIn .3s ease;-webkit-backdrop-filter:var(--scout-theme--filter-backdrop);backdrop-filter:var(--scout-theme--filter-backdrop);background:var(--scout-white);border:1px solid var(--scout-light-grey);border-radius:8px;box-shadow:var(--scout-box-shadow);box-sizing:border-box;overflow:hidden;padding:1px;transition:all .2s ease;width:100%}@media (max-width:767px){.scout__bar-wrapper{border-radius:1px;height:100%}}.scout__bar-wrapper-centered{left:50%;top:48.5%;transform:translate(-50%,-50%)}@media (prefers-reduced-motion){.scout__bar-wrapper{-webkit-animation:none!important;animation:none!important}}.scout__bar-wrapper-no-animation{-webkit-animation:none!important;animation:none!important}.scout__bar-wrapper-no-animation :global(*){-webkit-animation:none!important;animation:none!important}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes bounceIn{0%{opacity:0;transform:scale(.3) translateZ(0)}50%{opacity:.9;transform:scale(1.05)}to{opacity:1;transform:scale(1) translateZ(0)}}@keyframes bounceIn{0%{opacity:0;transform:scale(.3) translateZ(0)}50%{opacity:.9;transform:scale(1.05)}to{opacity:1;transform:scale(1) translateZ(0)}}.scout__bar-tutorial-section{border-top:1px solid var(--scout-light-grey);display:flex;flex-wrap:wrap;justify-content:space-between;padding:10px 20px}.scout__bar-tutorial-section .scout__bar-mobile-acknowledge{display:none}@media (max-width:767px){.scout__bar-tutorial-section .scout__bar-mobile-acknowledge{display:block;margin-left:auto;text-align:center}.scout__bar-tutorial-section .scout__bar-mobile-acknowledge a{display:block!important;display:block;margin-left:8px;position:relative;right:0;top:0}}.scout__bar-tutorial-section .scout__bar-tutorial-section-item{display:block}@media (max-width:767px){.scout__bar-tutorial-section .scout__bar-tutorial-section-item{display:none}}.scout__bar-tutorial-section span.scout__bar-tutorial-section-item__arrow.m-left{margin-left:5px}.scout__bar-tutorial-section span:not(.scout__bar-tutorial-section-item__arrow) svg{height:auto;margin-right:3px;width:11px}.scout__bar-tutorial-section span svg{display:inline-block}.scout__bar-tutorial-section span svg path{fill:var(--scout-white)}.scout__bar-tutorial-section p span{background:var(--scout-tutorial-grey);border-radius:4px;color:var(--scout-white);display:inline-block;font-size:.625rem;margin-right:7px;padding:2px 5px;width:auto}.scout__bar-tutorial-section p{align-items:center;color:var(--scout-theme-black);display:flex;font-size:.813rem;letter-spacing:-.4px;margin:0}a.scout__bar-brand-logo{display:block;font-weight:500;line-height:0;margin:0;opacity:.8;padding:0;position:absolute;right:17px;top:7px}@media (max-width:767px){a.scout__bar-brand-logo{display:none}}a.scout__bar-brand-logo svg{height:auto;width:55px}.scoutbar___hide-backdrop,.scoutbar___hide .scout__bar-wrapper{-webkit-animation:fadeOut .3s ease;animation:fadeOut .3s ease;transition:all .2s ease}@-webkit-keyframes fadeOut{0%{opacity:1}to{opacity:0}}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}.scoutbar___backdrop{background:var(--scoutbar-backdrop);height:100%;left:0;position:fixed;top:0;width:100%;z-index:var(--scout-z-index-overlay)}";
styleInject(css_248z);

/* -------------------------------------------------------------------------- */
var defaultProps = {
  tutorial: true,
  noAnimation: false,
  theme: 'light',
  acknowledgement: true,
  brandColor: '#61bb65',
  backdrop: null,
  placeholder: ['What would you like to do today ?', 'What do you need?', 'Lets help you navigate'],
  autocomplete: 'off',
  bodyScroll: true,
  disableFocusTrap: false,
  centered: false,
  barWidth: '650px',
  showRecentSearch: true,
  noResultsOnEmptySearch: false,
  persistInput: false,
  disableClickOutside: false,
  disableSnackbar: false,
  revealScoutbar: false,
  snackBar: {
    position: 'bottom'
  }
};
var ScoutBar = function ScoutBar(_ref) {
  var _bootstrapShortcutAct;
  var tutorial = _ref.tutorial,
    noAnimation = _ref.noAnimation,
    theme = _ref.theme,
    acknowledgement = _ref.acknowledgement,
    brandColor = _ref.brandColor,
    placeholder = _ref.placeholder,
    bodyScroll = _ref.bodyScroll,
    disableFocusTrap = _ref.disableFocusTrap,
    centered = _ref.centered,
    actions = _ref.actions,
    barWidth = _ref.barWidth,
    showRecentSearch = _ref.showRecentSearch,
    noResultsOnEmptySearch = _ref.noResultsOnEmptySearch,
    persistInput = _ref.persistInput,
    disableClickOutside = _ref.disableClickOutside,
    disableSnackbar = _ref.disableSnackbar,
    backdrop = _ref.backdrop,
    snackBar = _ref.snackBar,
    revealScoutbar = _ref.revealScoutbar,
    autocomplete = _ref.autocomplete;
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState10 = _slicedToArray(_useState9, 2),
    inputValue = _useState10[0],
    setInputValue = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(revealScoutbar || false),
    _useState12 = _slicedToArray(_useState11, 2),
    scoutbarReveal = _useState12[0],
    setScoutbarReveal = _useState12[1];
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var backdropRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  /**
   * Revise action data type if its a function to a an array
   * We want to give user the ability to Item creation functions as a parameter in the props
   *
   * e.g
   * ...
   * actions={({ createScoutAction, createScoutActionSection, createScoutActionSectionPage}) => [...]}
   */

  var revisedAction = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return Array.isArray(actions) ? actions : actions == null ? void 0 : actions({
      createScoutAction: _helpers_action_helpers_js__WEBPACK_IMPORTED_MODULE_13__.createScoutAction,
      createScoutSection: _helpers_action_helpers_js__WEBPACK_IMPORTED_MODULE_13__.createScoutSection,
      createScoutPage: _helpers_action_helpers_js__WEBPACK_IMPORTED_MODULE_13__.createScoutPage
    });
  }, [actions]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setScoutbarReveal == null ? void 0 : setScoutbarReveal(revealScoutbar || false);
  }, [revealScoutbar]);
  (0,_use_scout_shortcut_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_utils_constants_js__WEBPACK_IMPORTED_MODULE_16__.ROOT_SHORTCUT, function () {
    if (scoutbarReveal) handleClickOutside();else setScoutbarReveal == null ? void 0 : setScoutbarReveal(!scoutbarReveal);
  }, {
    override: true,
    universal: true
  });
  (0,_use_scout_shortcut_js__WEBPACK_IMPORTED_MODULE_5__["default"])(['escape'], function () {
    handleClickOutside();
  }, {
    universal: true
  });
  var bootstrapShortcutActions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var shortcuts = [];
    var _recursMap = function recursMap(actions) {
      var _ref2;
      (_ref2 = _toConsumableArray(actions)) == null ? void 0 : _ref2.map(function (action) {
        var _action$children;
        if ((action.type === 'scout-section' || action.type === 'scout-section-page') && action != null && (_action$children = action.children) != null && _action$children.length) return _recursMap(action == null ? void 0 : action.children);
        if (action.type === 'scout-action' && action != null && action.keyboardShortcut) {
          var _action$keyboardShort, _action$keyboardShort2, _shortcuts$find;
          var isTampering = (action == null ? void 0 : (_action$keyboardShort = action.keyboardShortcut) == null ? void 0 : _action$keyboardShort.length) && (action == null ? void 0 : (_action$keyboardShort2 = action.keyboardShortcut) == null ? void 0 : _action$keyboardShort2.filter(function (k) {
            return _utils_constants_js__WEBPACK_IMPORTED_MODULE_16__.ROOT_SHORTCUT.includes(k);
          }));
          if (action != null && action.disableIdledAction) return;
          if (isTampering) if ((isTampering == null ? void 0 : isTampering.length) >= 1 && action.keyboardShortcut.length === isTampering.length) return (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_2__.print)("You are tampering with the Root shortcut either " + isTampering.toString() + " in your action shortcut");
          if ((_shortcuts$find = shortcuts.find(function (shortcut) {
            var _action$keyboardShort3;
            return shortcut.key.toString() === (action == null ? void 0 : (_action$keyboardShort3 = action.keyboardShortcut) == null ? void 0 : _action$keyboardShort3.toString());
          })) != null && _shortcuts$find.key) return (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_2__.print)("Shortcut " + (action == null ? void 0 : action.keyboardShortcut) + " is already in use. Please use a different shortcut to have its action run in scout idle mode.");
          return shortcuts.push({
            key: action == null ? void 0 : action.keyboardShortcut,
            action: (action == null ? void 0 : action.action) || function () {
              return null;
            }
          });
        }
      });
    };
    _recursMap(revisedAction);
    return shortcuts;
  }, [revisedAction, scoutbarReveal]);
  if ((_bootstrapShortcutAct = bootstrapShortcutActions()) != null && _bootstrapShortcutAct.length) {
    var _bootstrapShortcutAct2;
    (_bootstrapShortcutAct2 = bootstrapShortcutActions()) == null ? void 0 : _bootstrapShortcutAct2.forEach(function (shortcut) {
      /**
       * If scoutbar is revealed, we don't want to run the bootstrapped shortcut action
       */
      (0,_use_scout_shortcut_js__WEBPACK_IMPORTED_MODULE_5__["default"])(shortcut.key, !scoutbarReveal ? shortcut.action : function () {
        return null;
      });
    });
  }
  var handleClickOutside = function handleClickOutside() {
    var _ref$current, _backdropRef$current;
    ref == null ? void 0 : (_ref$current = ref.current) == null ? void 0 : _ref$current.classList.add('scoutbar___hide');
    backdropRef == null ? void 0 : (_backdropRef$current = backdropRef.current) == null ? void 0 : _backdropRef$current.classList.add('scoutbar___hide-backdrop');
    if (!persistInput) setInputValue == null ? void 0 : setInputValue('');
    setTimeout(function () {
      return setScoutbarReveal == null ? void 0 : setScoutbarReveal(false);
    }, noAnimation ? 0 : 300);
  };
  (0,_helpers_use_click_outside_js__WEBPACK_IMPORTED_MODULE_9__["default"])(disableClickOutside ? null : ref, handleClickOutside);
  (0,_helpers_use_trap_focus_js__WEBPACK_IMPORTED_MODULE_14__["default"])({
    elementState: scoutbarReveal,
    bodyScroll: bodyScroll,
    focusableElement: disableFocusTrap ? '' : _utils_constants_js__WEBPACK_IMPORTED_MODULE_16__.FOCUSABLE_ELEMENTS,
    disableFocusTrap: disableFocusTrap
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_portal_index_js__WEBPACK_IMPORTED_MODULE_11__["default"], null, !disableSnackbar ? !scoutbarReveal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ScoutSnackBar, {
    setController: setScoutbarReveal,
    brandColor: brandColor,
    theme: theme,
    snackBar: snackBar
  }) : null, scoutbarReveal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_scout_bar_provider_index_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    actions: revisedAction,
    values: {
      scoutbarReveal: scoutbarReveal,
      setScoutbarReveal: setScoutbarReveal,
      inputValue: inputValue,
      setInputValue: setInputValue
    }
  }, backdrop && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "scoutbar___backdrop",
    ref: backdropRef,
    style: _defineProperty({}, '--scoutbar-backdrop', backdrop)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
    className: "___scout"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_2__.classNames)(['scout__bar-container', "" + (centered && 'scout__bar-wrapper-centered')]),
    ref: ref,
    style: _defineProperty({}, '--scoutbar-width', barWidth)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_2__.classNames)(['scout__bar-wrapper', "" + (noAnimation && 'scout__bar-wrapper-no-animation'), "scout__bar-wrapper-theme-" + theme])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ScoutbarInput, {
    placeholder: placeholder,
    brandColor: brandColor,
    autocomplete: autocomplete,
    closeScoutbar: function closeScoutbar() {
      return handleClickOutside();
    },
    showRecentSearch: showRecentSearch
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ScoutBarStem, {
    actions: noResultsOnEmptySearch && (inputValue == null ? void 0 : inputValue.trim()) === '' ? [] : revisedAction,
    brandColor: brandColor,
    showRecentSearch: showRecentSearch
  }), tutorial && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_scout_tutorial_index_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    brandColor: brandColor,
    acknowledgement: acknowledgement
  }), acknowledgement && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_icon_svg_logo_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    brandColor: brandColor
  }))))));
};
ScoutBar.defaultProps = defaultProps;


/***/ }),

/***/ "./node_modules/scoutbar/dist/bundle-es/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/scoutbar/dist/bundle-es/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScoutBar: () => (/* reexport safe */ _index_f31c96d7_js__WEBPACK_IMPORTED_MODULE_0__.b),
/* harmony export */   ScoutBarStem: () => (/* reexport safe */ _index_f31c96d7_js__WEBPACK_IMPORTED_MODULE_0__.a),
/* harmony export */   ScoutbarInput: () => (/* reexport safe */ _index_f31c96d7_js__WEBPACK_IMPORTED_MODULE_0__.S),
/* harmony export */   createScoutAction: () => (/* reexport safe */ _helpers_action_helpers_js__WEBPACK_IMPORTED_MODULE_1__.createScoutAction),
/* harmony export */   createScoutPage: () => (/* reexport safe */ _helpers_action_helpers_js__WEBPACK_IMPORTED_MODULE_1__.createScoutPage),
/* harmony export */   createScoutSection: () => (/* reexport safe */ _helpers_action_helpers_js__WEBPACK_IMPORTED_MODULE_1__.createScoutSection),
/* harmony export */   defaultProps: () => (/* reexport safe */ _index_f31c96d7_js__WEBPACK_IMPORTED_MODULE_0__.d),
/* harmony export */   useIsMounted: () => (/* reexport safe */ _helpers_use_is_mounted_js__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   useKeyboardNavigation: () => (/* reexport safe */ _helpers_use_keyboard_navigation_js__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   useLocalStorage: () => (/* reexport safe */ _helpers_use_local_storage_js__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   useOnClickOutside: () => (/* reexport safe */ _helpers_use_click_outside_js__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   useScoutKey: () => (/* reexport safe */ _use_scout_key_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   useScoutShortcut: () => (/* reexport safe */ _use_scout_shortcut_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   useTrapFocus: () => (/* reexport safe */ _helpers_use_trap_focus_js__WEBPACK_IMPORTED_MODULE_5__["default"])
/* harmony export */ });
/* harmony import */ var _index_f31c96d7_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-f31c96d7.js */ "./node_modules/scoutbar/dist/bundle-es/index-f31c96d7.js");
/* harmony import */ var _helpers_action_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/action-helpers.js */ "./node_modules/scoutbar/dist/bundle-es/helpers/action-helpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _use_scout_key_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-scout-key.js */ "./node_modules/scoutbar/dist/bundle-es/use-scout-key.js");
/* harmony import */ var _use_scout_shortcut_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-scout-shortcut.js */ "./node_modules/scoutbar/dist/bundle-es/use-scout-shortcut.js");
/* harmony import */ var _helpers_use_trap_focus_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/use-trap-focus.js */ "./node_modules/scoutbar/dist/bundle-es/helpers/use-trap-focus.js");
/* harmony import */ var _helpers_use_keyboard_navigation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/use-keyboard-navigation.js */ "./node_modules/scoutbar/dist/bundle-es/helpers/use-keyboard-navigation.js");
/* harmony import */ var _helpers_use_is_mounted_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers/use-is-mounted.js */ "./node_modules/scoutbar/dist/bundle-es/helpers/use-is-mounted.js");
/* harmony import */ var _helpers_use_local_storage_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers/use-local-storage.js */ "./node_modules/scoutbar/dist/bundle-es/helpers/use-local-storage.js");
/* harmony import */ var _helpers_use_click_outside_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/use-click-outside.js */ "./node_modules/scoutbar/dist/bundle-es/helpers/use-click-outside.js");
/* harmony import */ var _rollupPluginBabelHelpers_312661ae_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_rollupPluginBabelHelpers-312661ae.js */ "./node_modules/scoutbar/dist/bundle-es/_rollupPluginBabelHelpers-312661ae.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/index.js */ "./node_modules/scoutbar/dist/bundle-es/utils/index.js");
/* harmony import */ var _helpers_context_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./helpers/context.js */ "./node_modules/scoutbar/dist/bundle-es/helpers/context.js");
/* harmony import */ var _components_icon_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/icon/index.js */ "./node_modules/scoutbar/dist/bundle-es/components/icon/index.js");
/* harmony import */ var _components_scout_bar_provider_index_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/scout-bar-provider/index.js */ "./node_modules/scoutbar/dist/bundle-es/components/scout-bar-provider/index.js");
/* harmony import */ var _helpers_scout_search_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./helpers/scout-search.js */ "./node_modules/scoutbar/dist/bundle-es/helpers/scout-search.js");
/* harmony import */ var _components_portal_index_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/portal/index.js */ "./node_modules/scoutbar/dist/bundle-es/components/portal/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/scoutbar/dist/bundle-es/utils/constants.js");
/* harmony import */ var _components_icon_svg_logo_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/icon/svg/logo.js */ "./node_modules/scoutbar/dist/bundle-es/components/icon/svg/logo.js");
/* harmony import */ var _components_scout_tutorial_index_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/scout-tutorial/index.js */ "./node_modules/scoutbar/dist/bundle-es/components/scout-tutorial/index.js");
/* harmony import */ var _components_icon_svg_tutorial_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/icon/svg/tutorial.js */ "./node_modules/scoutbar/dist/bundle-es/components/icon/svg/tutorial.js");
/**
 * scoutbar.js 
 * @summary ScoutBar is a JavaScript library for developing user friendly, easy-to-use, scalable and highly customizable component for automating your navigation experience
 * @version v1.2.3
 * @author  Adenekan Wonderful <hellocodewonders@gmail.com> (https://codewonders.dev)
 * @license Released under the MIT license.
 * @copyright Adenekan Wonderful 2021
 */
























/***/ }),

/***/ "./node_modules/scoutbar/dist/bundle-es/use-scout-key.js":
/*!***************************************************************!*\
  !*** ./node_modules/scoutbar/dist/bundle-es/use-scout-key.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useScoutKey)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/index.js */ "./node_modules/scoutbar/dist/bundle-es/utils/index.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/**
 * scoutbar.js 
 * @summary ScoutBar is a JavaScript library for developing user friendly, easy-to-use, scalable and highly customizable component for automating your navigation experience
 * @version v1.2.3
 * @author  Adenekan Wonderful <hellocodewonders@gmail.com> (https://codewonders.dev)
 * @license Released under the MIT license.
 * @copyright Adenekan Wonderful 2021
 */




/* -------------------------------------------------------------------------- */
/**
 * Returns true if the key is pressed
 *
 * @remarks
 * This is a custom hook that can be used to detect a key press.
 *
 * @param targeKey - The key to check for
 * @param callback - The callback to call when the key is pressed
 * @param options - Options for the key
 *
 * @returns True if the key is pressed
 */

var useScoutKey = function useScoutKey(targetKey, override) {
  if (override === void 0) {
    override = false;
  }
  if (!targetKey) throw new Error('⌨️ ScoutKey: the first Parameter must be a `KeyboardEvent.key`'); // State for keeping track of whether key is pressed

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    keyPressed = _useState2[0],
    setKeyPressed = _useState2[1]; // If pressed key is our target key then set to true

  var downHandler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (_ref) {
    var key = _ref.key,
      target = _ref.target;
    if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.ignoreStrokes)(target.tagName) && !override) return;
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }, [targetKey]); // If released key is our target key then set to false

  var upHandler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (_ref2) {
    var key = _ref2.key,
      target = _ref2.target;
    if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.ignoreStrokes)(target.tagName) && !override) return;
    if (key === targetKey) {
      setKeyPressed(false);
    }
  }, [targetKey]); // Add event listeners

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler); // Remove event listeners on cleanup

    return function () {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [downHandler, upHandler]); // Empty array ensures that effect is only run on mount and unmount

  return keyPressed;
};


/***/ }),

/***/ "./node_modules/scoutbar/dist/bundle-es/use-scout-shortcut.js":
/*!********************************************************************!*\
  !*** ./node_modules/scoutbar/dist/bundle-es/use-scout-shortcut.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useScoutShortcut)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_312661ae_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_rollupPluginBabelHelpers-312661ae.js */ "./node_modules/scoutbar/dist/bundle-es/_rollupPluginBabelHelpers-312661ae.js");
/* harmony import */ var _helpers_use_is_mounted_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/use-is-mounted.js */ "./node_modules/scoutbar/dist/bundle-es/helpers/use-is-mounted.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/index.js */ "./node_modules/scoutbar/dist/bundle-es/utils/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
/**
 * scoutbar.js 
 * @summary ScoutBar is a JavaScript library for developing user friendly, easy-to-use, scalable and highly customizable component for automating your navigation experience
 * @version v1.2.3
 * @author  Adenekan Wonderful <hellocodewonders@gmail.com> (https://codewonders.dev)
 * @license Released under the MIT license.
 * @copyright Adenekan Wonderful 2021
 */






/**
 * Returns true if the key is pressed
 *
 * @remarks
 * This is a custom hook that can be used to detect an array keys pressed.
 *
 * @param targeKey - The key to check for
 * @param callback - The callback to call when the key is pressed
 * @param options - Options for the key
 *
 * @returns True if the key is pressed
 */

var ROOT_KEY_MAPS = ['meta', 'k', 'control'];
var disabledEventPropagation = function disabledEventPropagation(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  } else if (window.event) {
    window.event.cancelBubble = true;
  }
};
var useScoutShortcut = function useScoutShortcut(targetKeys, callback, options) {
  if (!Array.isArray(targetKeys)) throw new Error('⌨️ ScoutShortcut: The first parameter to `useScoutShortcut` must be an ordered array of `KeyboardEvent.key` strings.');
  if (!targetKeys.length) throw new Error('⌨️ ScoutShortcut: The first parameter to `useScoutShortcut` must contain atleast one `KeyboardEvent.key` string.');
  if (!callback || typeof callback !== 'function') throw new Error('⌨️ ScoutShortcut: The second parameter to `useScoutShortcut` must be a function that will be envoked when the keys are pressed.');
  var isMounted = (0,_helpers_use_is_mounted_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  var _ref = options || {},
    _ref$override = _ref.override,
    override = _ref$override === void 0 ? false : _ref$override,
    _ref$universal = _ref.universal,
    universal = _ref$universal === void 0 ? false : _ref$universal;
  var callbackRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(callback);
  var keyMapping = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    return _toConsumableArray(new Set(targetKeys)).reduce(function (currentKeys, key) {
      currentKeys[key.toLowerCase()] = false;
      return currentKeys;
    }, {});
  }, []);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(keyMapping),
    _useState2 = _slicedToArray(_useState, 2),
    keyMaps = _useState2[0],
    setKeyMaps = _useState2[1];
  var keyHandlers = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    return Boolean(Object.values(keyMaps).filter(function (value) {
      return !value;
    }).length);
  }, [keyMaps]);
  var handler = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (event, key, position) {
    var overrideKeyForOption = !ROOT_KEY_MAPS.includes(event.key.toLowerCase()) && (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_3__.ignoreStrokes)(event.target.tagName);
    /** Check If the key is already pressed, do nothing */

    if (event.repeat) return;
    /** Check if the key is in the list of keys to listen for, do nothing
     * @see: https://github.com/adenekan41/scoutbar/blob/faf2df3a6dbbfdcd54bd003c1cd011b0187f3117/src/utils/index.ts#L1
     */

    if (key !== event.key.toLowerCase()) return;
    /** check if key pressed should be ignored */

    if (keyMaps[key] === undefined) return;
    if (!universal && overrideKeyForOption) return;
    if (override) {
      disabledEventPropagation(event);
    }
    setKeyMaps(function (prev) {
      return (0,_rollupPluginBabelHelpers_312661ae_js__WEBPACK_IMPORTED_MODULE_0__._)((0,_rollupPluginBabelHelpers_312661ae_js__WEBPACK_IMPORTED_MODULE_0__._)({}, prev), {}, _defineProperty({}, key, position === 'down' ? true : false));
    });
    return;
  }, [keyMaps, override, universal]);
  var downHandler = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (currentKey) {
    return function (event) {
      var key = currentKey.toLowerCase();
      handler(event, key, 'down');
    };
  }, [handler]);
  var upHandler = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (currentKey) {
    return function (event) {
      var key = currentKey.toLowerCase();
      handler(event, key, 'up');
    };
  }, [handler]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    /** We don want tpo have the callback argument of the hook in the useEffect dependency array.
     * We can't guarantee that the hook user wrapped this function in a useCallback so we don't
     * want it to trigger the useEffect unnecessarily
     * @see: https://epicreact.dev/the-latest-ref-pattern-in-react/
     */
    callbackRef.current = callback;
    if (!keyHandlers && typeof callbackRef.current === 'function' && isMounted()) {
      callbackRef == null ? void 0 : callbackRef.current(keyMaps);
      setKeyMaps(keyMapping);
    }
    return function () {
      if (!isMounted()) {
        setKeyMaps(keyMapping);
      }
    };
  }, [keyMaps, keyHandlers, isMounted, keyMapping]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    targetKeys.forEach(function (k) {
      return window.addEventListener('keydown', downHandler(k));
    });
    return function () {
      return targetKeys.forEach(function (k) {
        return window.removeEventListener('keydown', downHandler(k));
      });
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    targetKeys.forEach(function (k) {
      return window.addEventListener('keyup', upHandler(k));
    });
    return function () {
      return targetKeys.forEach(function (k) {
        return window.removeEventListener('keyup', upHandler(k));
      });
    };
  }, []);
};


/***/ }),

/***/ "./node_modules/scoutbar/dist/bundle-es/utils/constants.js":
/*!*****************************************************************!*\
  !*** ./node_modules/scoutbar/dist/bundle-es/utils/constants.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FOCUSABLE_ELEMENTS: () => (/* binding */ FOCUSABLE_ELEMENTS),
/* harmony export */   ROOT_SHORTCUT: () => (/* binding */ ROOT_SHORTCUT),
/* harmony export */   SCOUTBAR_ROOT_ID: () => (/* binding */ SCOUTBAR_ROOT_ID)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/scoutbar/dist/bundle-es/utils/index.js");
/**
 * scoutbar.js 
 * @summary ScoutBar is a JavaScript library for developing user friendly, easy-to-use, scalable and highly customizable component for automating your navigation experience
 * @version v1.2.3
 * @author  Adenekan Wonderful <hellocodewonders@gmail.com> (https://codewonders.dev)
 * @license Released under the MIT license.
 * @copyright Adenekan Wonderful 2021
 */


var SCOUTBAR_ROOT_ID = 'scoutbar___root';
var FOCUSABLE_ELEMENTS = "body > div:not(#" + SCOUTBAR_ROOT_ID + ")";
var ROOT_SHORTCUT = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.getOS)() === 'Mac' ? ['meta', 'k'] : ['control', 'k'];


/***/ }),

/***/ "./node_modules/scoutbar/dist/bundle-es/utils/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/scoutbar/dist/bundle-es/utils/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   classNames: () => (/* binding */ classNames),
/* harmony export */   getOS: () => (/* binding */ getOS),
/* harmony export */   guidGenerator: () => (/* binding */ guidGenerator),
/* harmony export */   ignoreStrokes: () => (/* binding */ ignoreStrokes),
/* harmony export */   isBrowser: () => (/* binding */ isBrowser),
/* harmony export */   isEmpty: () => (/* binding */ isEmpty),
/* harmony export */   print: () => (/* binding */ print)
/* harmony export */ });
/**
 * scoutbar.js 
 * @summary ScoutBar is a JavaScript library for developing user friendly, easy-to-use, scalable and highly customizable component for automating your navigation experience
 * @version v1.2.3
 * @author  Adenekan Wonderful <hellocodewonders@gmail.com> (https://codewonders.dev)
 * @license Released under the MIT license.
 * @copyright Adenekan Wonderful 2021
 */

var inputs = ['input', 'select', 'button', 'textarea'];
var ignoreStrokes = function ignoreStrokes(activeElement) {
  return inputs.includes(activeElement.toLowerCase());
};
var classNames = function classNames(args) {
  return args.flat().filter(function (arg) {
    /**
     * Make sure that the className doesnt have a boolean value
     */
    return Boolean(arg) && arg !== 'false' ? arg : '';
  }).join(' ');
};
var isBrowser = function isBrowser() {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
};
/**
 * Gives you the ability to create a 'Globally Unique Identifier' from S4 encryptions
 *
 * e.g: guidGenerator() // 4456-4545-4343-55e3455
 * @from https://github.com/adenekan41/helpers/blob/master/src/helpers/guid-generator.js
 *
 * @returns {String} Returns a Unique Identifier
 */

var guidGenerator = function guidGenerator() {
  var S4 = function S4() {
    return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
  };
  return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
};
/**
 * Gives you the ability to check if any data type is empty
 *
 * e.g: isEmpty('') // True
 * isEmpty({}) // True
 * @from https://github.com/adenekan41/helpers/blob/master/src/helpers/guid-generator.js
 *
 * @param {unknown} data - the data type
 * @returns {Boolean} Returns a boolean if its empty
 */

var isEmpty = function isEmpty(data) {
  for (var key in data) {
    // eslint-disable-next-line no-prototype-builtins
    if (data != null && data.hasOwnProperty(key)) return false;
  }
  return true;
};
var getOS = function getOS() {
  if (!isBrowser()) return;
  var userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
    windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
    iosPlatforms = ['iPhone', 'iPad', 'iPod'];
  var os = null;
  if (macosPlatforms.indexOf(platform) !== -1) os = 'Mac';else if (iosPlatforms.indexOf(platform) !== -1) os = 'iOS';else if (windowsPlatforms.indexOf(platform) !== -1) os = 'Windows';else if (/Android/.test(userAgent)) os = 'Android';else if (!os && /Linux/.test(platform)) os = 'Linux';
  return os;
};
var print = function print(data, type, isSystemDefault) {
  if (type === void 0) {
    type = 'warn';
  }
  if (isSystemDefault === void 0) {
    isSystemDefault = false;
  }
  var message = "%c[" + (type === 'error' ? '⛔️' : '⚠️') + " Scoutbar]: " + data;
  var options = "color: " + (type === 'error' ? '#eb1c1c' : '#ae832c') + "; font-weight: bold; background: #eaeaea; padding: 5px; border-radius: 5px; border: 2px solid " + (type === 'error' ? '#eb1c1c' : '#ae832c') + "; font-size: 13px; font-family: sans-serif;";
  if (isSystemDefault) return console[type](message, options);
  return console.log(message, options);
};


/***/ }),

/***/ "react":
/*!*******************************!*\
  !*** external "window.React" ***!
  \*******************************/
/***/ ((module) => {

module.exports = window.React;

/***/ }),

/***/ "react-dom":
/*!**********************************!*\
  !*** external "window.ReactDOM" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window.ReactDOM;

/***/ }),

/***/ "reactR":
/*!********************************!*\
  !*** external "window.reactR" ***!
  \********************************/
/***/ ((module) => {

module.exports = window.reactR;

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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./srcjs/cmdk.jsx ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reactR__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reactR */ "reactR");
/* harmony import */ var reactR__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reactR__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var scoutbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! scoutbar */ "./node_modules/scoutbar/dist/bundle-es/index.js");


var _processAction = function processAction(el, setValue) {
  var cl = el["class"];
  var label = el.label;
  var children = el.children;
  var func;
  switch (cl) {
    case 'scout_page':
      func = scoutbar__WEBPACK_IMPORTED_MODULE_1__.createScoutPage;
      break;
    case 'scout_section':
      func = scoutbar__WEBPACK_IMPORTED_MODULE_1__.createScoutSection;
      break;
    default:
  }

  // When we don't have an action, we don't go further
  if (el["class"] !== "scout_action") {
    return func({
      label: el.label,
      children: el.children.map(function (child) {
        return _processAction(child, setValue);
      })
    });
  }
  if (children.icon !== undefined && typeof children.icon === 'string') {
    children.icon = /*#__PURE__*/React.createElement("i", {
      "class": "fas fa-".concat(children.icon),
      role: "presentation",
      "aria-label": "".concat(children.icon, " icon")
    });
  }
  children.action = function (e, _ref) {
    var close = _ref.close;
    // # id isn't passed to the HTML element so
    // we can't find it in the DOM. This is hacky but
    // works since aria-labels appears.
    var val = $(e.currentTarget).attr('aria-label');
    setValue(val);
    close(false);
  };
  func = (0,scoutbar__WEBPACK_IMPORTED_MODULE_1__.createScoutAction)(children);
  return func;
};
var cmdkInput = function cmdkInput(_ref2) {
  var configuration = _ref2.configuration,
    value = _ref2.value,
    setValue = _ref2.setValue;
  var canUpdateConfig = false;
  var configInputId = "".concat(configuration.id, "-configuration");

  // Cache or extract cached configuration
  var cachedConfig;
  if (Shiny.shinyapp.$inputValues[configInputId] === undefined) {
    cachedConfig = configuration;
    Shiny.setInputValue(configInputId, cachedConfig);
  } else {
    cachedConfig = Shiny.shinyapp.$inputValues[configInputId];
  }

  // When we call update input, then
  // it is possible we don't pass any action.
  // In that case we don't want to overwrite the existing state.
  // The state is kept in a secondary input which is updated
  // whenever actions change.
  if (configuration.actions === undefined) {
    configuration.actions = Shiny.shinyapp.$inputValues[configInputId].actions;
  }

  // Update cache key by key when necessary
  Object.keys(configuration).forEach(function (key, index) {
    if (configuration[key] !== cachedConfig[key]) {
      canUpdateConfig = true;
      cachedConfig[key] = configuration[key];
    }
  });

  // Only update if any difference was detected
  if (canUpdateConfig) {
    Shiny.setInputValue(configInputId, cachedConfig);
  }
  return /*#__PURE__*/React.createElement(scoutbar__WEBPACK_IMPORTED_MODULE_1__.ScoutBar, {
    showRecentSearch: cachedConfig.showRecentSearch || false,
    autocomplete: cachedConfig.autocomplete || 'on',
    tutorial: cachedConfig.tutorial || true,
    revealScoutbar: configuration.revealScoutbar,
    theme: cachedConfig.theme,
    acknowledgement: cachedConfig.acknowledgement || true,
    bodyScroll: cachedConfig.bodyScroll || true,
    disableFocusTrap: cachedConfig.disableFocusTrap || false,
    barWidth: cachedConfig.barWidth || '650px',
    noResultsOnEmptySearch: cachedConfig.noResultsOnEmptySearch || false,
    persistInput: cachedConfig.persistInput || false,
    disableClickOutside: cachedConfig.disableClickOutside || false,
    disableSnackbar: cachedConfig.disableSnackbar || false,
    placeholder: cachedConfig.placeholder,
    actions: cachedConfig.actions.map(function (action) {
      return _processAction(action, setValue);
    })
  });
};
(0,reactR__WEBPACK_IMPORTED_MODULE_0__.reactShinyInput)('.cmdk', 'Rcmdk.cmdk', cmdkInput);
})();

/******/ })()
;
//# sourceMappingURL=cmdk.js.map