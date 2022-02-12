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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background-color: #222222; }\\n\\n.main {\\n  display: flex;\\n  padding: 5px;\\n  border-bottom: 1px solid #363636;\\n  padding-bottom: 10px;\\n  margin-bottom: 10px; }\\n\\n.info {\\n  flex-direction: column;\\n  margin-left: 15px;\\n  color: #fff;\\n  cursor: default; }\\n\\n.name {\\n  font-size: 30px; }\\n\\n.data {\\n  background-color: #303030;\\n  margin-top: 18px;\\n  display: flex;\\n  flex-direction: column; }\\n  .data span {\\n    padding: 7px;\\n    border-bottom: 1px solid #222222; }\\n\\n.header__links {\\n  display: flex;\\n  justify-content: space-between;\\n  width: 400px;\\n  color: #fff;\\n  align-items: baseline; }\\n\\n.header__link {\\n  font-size: 20px;\\n  color: #319478;\\n  text-decoration: none; }\\n  .header__link:hover {\\n    text-decoration: underline; }\\n\\n.header__link.special {\\n  font-size: 35px;\\n  color: #fff; }\\n\\n.not-found-block {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center; }\\n  .not-found-block h1 {\\n    color: #e53935; }\\n\\n.planets__img {\\n  width: 150px;\\n  height: 150px;\\n  border-radius: 5%; }\\n\\n.people__names {\\n  width: 48%;\\n  background-color: #303030;\\n  border-radius: 5px; }\\n\\n.people__name {\\n  color: #fff;\\n  border-bottom: 1px solid #222222;\\n  padding: 8px;\\n  cursor: pointer; }\\n\\n.people__img {\\n  border-radius: 5%;\\n  width: 255px;\\n  height: 350px; }\\n\\n.people__card {\\n  display: flex;\\n  margin-left: 4%;\\n  width: 48%; }\\n\\n#preloader {\\n  margin-top: 50px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  max-width: 100%; }\\n  #preloader .loader {\\n    border: 12px solid #f3f3f3;\\n    /* Light grey */\\n    border-top: 12px solid #3498db;\\n    /* Blue */\\n    border-radius: 50%;\\n    width: 50px;\\n    height: 50px;\\n    animation: spin 2s linear infinite; }\\n\\n@keyframes spin {\\n  0% {\\n    transform: rotate(0deg); }\\n  100% {\\n    transform: rotate(360deg); } }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://stardb/./src/scss/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://stardb/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://stardb/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://stardb/./src/scss/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://stardb/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://stardb/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://stardb/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://stardb/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://stardb/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://stardb/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/app/app.component.js":
/*!**********************************!*\
  !*** ./src/app/app.component.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appComponent\": () => (/* binding */ appComponent)\n/* harmony export */ });\n/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../framework */ \"./src/framework/index.js\");\n\r\n\r\nclass AppComponent extends _framework__WEBPACK_IMPORTED_MODULE_0__.WFMComponent {\r\n    constructor(config) {\r\n        super(config)\r\n    }\r\n}\r\n\r\nconst appComponent = new AppComponent({\r\n    selector: 'app-root',\r\n    template: `\r\n        <header class=\"header main\"></header>\r\n        <planets class=\"planets main\"></planets>\r\n\r\n        <router-outlet class=\"router-outlet\"></router-outlet>\r\n        <not-found class=\"not-found\"></not-found>\r\n    `\r\n})\n\n//# sourceURL=webpack://stardb/./src/app/app.component.js?");

/***/ }),

/***/ "./src/app/app.module.js":
/*!*******************************!*\
  !*** ./src/app/app.module.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appModule\": () => (/* binding */ appModule)\n/* harmony export */ });\n/* harmony import */ var _framework_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../framework/index */ \"./src/framework/index.js\");\n/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ \"./src/app/app.component.js\");\n/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routes */ \"./src/app/app.routes.js\");\n/* harmony import */ var _common_app_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/app.header */ \"./src/app/common/app.header.js\");\n/* harmony import */ var _common_app_planets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/app.planets */ \"./src/app/common/app.planets.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass AppModule extends _framework_index__WEBPACK_IMPORTED_MODULE_0__.WFMModule {\r\n    constructor(config) {\r\n        super(config)\r\n    }\r\n}\r\n\r\nconst appModule = new AppModule({\r\n    components: [\r\n        _common_app_header__WEBPACK_IMPORTED_MODULE_3__.appHeader,\r\n        _common_app_planets__WEBPACK_IMPORTED_MODULE_4__.appPlanets\r\n    ],\r\n\r\n    main: _app_component__WEBPACK_IMPORTED_MODULE_1__.appComponent,\r\n    routes: _app_routes__WEBPACK_IMPORTED_MODULE_2__.appRoutes\r\n})\n\n//# sourceURL=webpack://stardb/./src/app/app.module.js?");

/***/ }),

/***/ "./src/app/app.routes.js":
/*!*******************************!*\
  !*** ./src/app/app.routes.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appRoutes\": () => (/* binding */ appRoutes)\n/* harmony export */ });\n/* harmony import */ var _pathPages_HomePageComponents_home_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pathPages/HomePageComponents/home-page.component */ \"./src/app/pathPages/HomePageComponents/home-page.component.js\");\n/* harmony import */ var _pathPages_people_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pathPages/people-page.component */ \"./src/app/pathPages/people-page.component.js\");\n/* harmony import */ var _pathPages_planets_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pathPages/planets-page.component */ \"./src/app/pathPages/planets-page.component.js\");\n/* harmony import */ var _pathPages_starships_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pathPages/starships-page.component */ \"./src/app/pathPages/starships-page.component.js\");\n/* harmony import */ var _common_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/not-found.component */ \"./src/app/common/not-found.component.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst appRoutes = [\r\n    { path: '', component: _pathPages_HomePageComponents_home_page_component__WEBPACK_IMPORTED_MODULE_0__.homePageComponent },\r\n    { path: 'people', component: _pathPages_people_page_component__WEBPACK_IMPORTED_MODULE_1__.peoplePageComponent },\r\n    { path: 'planets', component: _pathPages_planets_page_component__WEBPACK_IMPORTED_MODULE_2__.planetsPageComponent },\r\n    { path: 'starships', component: _pathPages_starships_page_component__WEBPACK_IMPORTED_MODULE_3__.starshipsPageComponent },\r\n    { path: '**', component: _common_not_found_component__WEBPACK_IMPORTED_MODULE_4__.notFound}\r\n]\r\n\r\nconsole.log(_pathPages_HomePageComponents_home_page_component__WEBPACK_IMPORTED_MODULE_0__.homePageComponent)\n\n//# sourceURL=webpack://stardb/./src/app/app.routes.js?");

/***/ }),

/***/ "./src/app/common/app.header.js":
/*!**************************************!*\
  !*** ./src/app/common/app.header.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appHeader\": () => (/* binding */ appHeader)\n/* harmony export */ });\n/* harmony import */ var _framework_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../framework/index */ \"./src/framework/index.js\");\n\r\n\r\nclass AppHeader extends _framework_index__WEBPACK_IMPORTED_MODULE_0__.WFMComponent {\r\n    constructor(config) {\r\n        super(config)\r\n    }\r\n}\r\n\r\nconst appHeader = new AppHeader({\r\n    selector: 'header',\r\n    template: `\r\n        <div class=\"header__links\">\r\n            <a href=\"#\" class=\"header__link special\">StarDB</a>\r\n            <a href=\"#people\" class=\"header__link\">People</a>\r\n            <a href=\"#planets\" class=\"header__link\">Planets</a>\r\n            <a href=\"#starships\" class=\"header__link\">Starships</a>\r\n        </div>\r\n    `\r\n}) \n\n//# sourceURL=webpack://stardb/./src/app/common/app.header.js?");

/***/ }),

/***/ "./src/app/common/app.planets.js":
/*!***************************************!*\
  !*** ./src/app/common/app.planets.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appPlanets\": () => (/* binding */ appPlanets)\n/* harmony export */ });\n/* harmony import */ var _framework_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../framework/index */ \"./src/framework/index.js\");\n\r\n\r\nclass AppPlanets extends _framework_index__WEBPACK_IMPORTED_MODULE_0__.WFMComponent {\r\n    constructor(config) {\r\n        super(config)\r\n\r\n        this.data = {\r\n            name: '',\r\n            population: '',\r\n            rotation: '',\r\n            diameter: '',\r\n            src: '',\r\n        }\r\n    }\r\n\r\n    afterInit() {\r\n        _framework_index__WEBPACK_IMPORTED_MODULE_0__.http.get(\"https://swapi.dev/api/planets/\")\r\n            .then(response => response.json())\r\n            .then(data => {\r\n                let i = 2\r\n                this.fill(data, 1)\r\n\r\n                setInterval(() =>  {\r\n                        if ( i == data.results.length ) i = 1\r\n\r\n                        this.fill(data, i)\r\n\r\n                        i++\r\n                }, 4000)\r\n            });\r\n    }\r\n\r\n    fill(data, i) {\r\n        this.data.name = data.results[i].name\r\n        this.data.population = data.results[i].population\r\n        this.data.rotation = data.results[i].rotation_period\r\n        this.data.diameter = data.results[i].diameter\r\n        this.data.src = `https://starwars-visualguide.com/assets/img/planets/${i+1}.jpg`\r\n        \r\n        this.render()\r\n    }\r\n}\r\n\r\nconst appPlanets = new AppPlanets({\r\n    selector: 'planets',\r\n    template: `\r\n        <img class=\"planets__img\" src='{{ src }}'>\r\n        <div class=\"planets__info info\">\r\n            <span class=\"planets__name name\">{{ name }}</span>\r\n            <div class=\"planets__data data\">\r\n                <span class=\"planets__population\">Population: {{ population }}</span>\r\n                <span class=\"planets__rotation\">Rotation Period: {{ rotation }}</span>\r\n                <span class=\"planets__diameter\">Diameter: {{ diameter }}</span>\r\n            </div>\r\n        </div>\r\n    `\r\n}) \n\n//# sourceURL=webpack://stardb/./src/app/common/app.planets.js?");

/***/ }),

/***/ "./src/app/common/not-found.component.js":
/*!***********************************************!*\
  !*** ./src/app/common/not-found.component.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"notFound\": () => (/* binding */ notFound)\n/* harmony export */ });\n/* harmony import */ var _framework_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../framework/index */ \"./src/framework/index.js\");\n\r\n\r\nclass NotFound extends _framework_index__WEBPACK_IMPORTED_MODULE_0__.WFMComponent {\r\n    constructor(config) {\r\n        super(config)\r\n    }\r\n}\r\n\r\nconst notFound = new NotFound({\r\n    selector: 'not-found',\r\n    template: `\r\n        <div class=\"not-found-block\">\r\n            <div>\r\n                <h1>Page Not Found!</h1>\r\n                <a href=\"#\">Go To Home Page</a>\r\n            </div>\r\n        </div>\r\n    `\r\n}) \n\n//# sourceURL=webpack://stardb/./src/app/common/not-found.component.js?");

/***/ }),

/***/ "./src/app/pathPages/HomePageComponents/home-page.component.js":
/*!*********************************************************************!*\
  !*** ./src/app/pathPages/HomePageComponents/home-page.component.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homePageComponent\": () => (/* binding */ homePageComponent)\n/* harmony export */ });\n/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../framework */ \"./src/framework/index.js\");\n\r\n\r\nclass HomePageComponent extends _framework__WEBPACK_IMPORTED_MODULE_0__.WFMComponent {\r\n    constructor(config) {\r\n        super(config)\r\n\r\n        this.data = {\r\n            src: '',\r\n            name: '',\r\n            gender: '',\r\n            height: '',\r\n            mass: '',\r\n            birth: '',\r\n            eye_color: '',\r\n            hair_color: '',\r\n            skin_color: '',\r\n        }\r\n    }\r\n\r\n    afterInit() {\r\n        _framework__WEBPACK_IMPORTED_MODULE_0__.http.get(\"https://swapi.dev/api/people/\")\r\n            .then(response => response.json())\r\n            .then(data => {\r\n                this.fill(data, this.data, 0)\r\n                this.addElements(data, this.data)\r\n            });\r\n    }\r\n\r\n    addElements(peopleData, classData) {\r\n        for(let i = 0; i < peopleData.results.length; i++)  {\r\n\r\n            let element = document.createElement('div')\r\n\r\n            element.innerHTML = peopleData.results[i].name\r\n\r\n            element.classList.add('people__name')\r\n\r\n            document.querySelector('.people__names').append(element);\r\n\r\n            element.addEventListener('click', () => {\r\n                this.fill(peopleData, classData, i)\r\n                this.addElements(peopleData, classData)\r\n            });\r\n\r\n        }\r\n    }\r\n\r\n    fill(peopleData, classData, i) {\r\n        classData.src = `https://starwars-visualguide.com/assets/img/characters/${i+1}.jpg`\r\n        classData.name = peopleData.results[i].name\r\n        classData.gender = peopleData.results[i].gender\r\n        classData.height = peopleData.results[i].height\r\n        classData.mass = peopleData.results[i].mass\r\n        classData.birth = peopleData.results[i].birth_year\r\n        classData.eye_color = peopleData.results[i].eye_color\r\n        classData.hair_color = peopleData.results[i].hair_color\r\n        classData.skin_color = peopleData.results[i].skin_color\r\n\r\n        this.render()\r\n        \r\n    }\r\n}\r\n\r\nconst homePageComponent = new HomePageComponent({\r\n    selector: 'home-page',\r\n    template: `\r\n        <section class=\"people main\">\r\n            <div class=\"people__names\"></div>\r\n\r\n            <div class=\"people__card\">\r\n                <img class=\"people__img\" src=\"{{ src }}\">\r\n\r\n                <div class=\"people__info info\">\r\n                    <span class=\"people__title name\">{{ name }}</span>\r\n                    <div class=\"people__data data\">\r\n                        <span class=\"people__gender\">Gender: {{ gender }}</span>\r\n                        <span class=\"people__height\">Height: {{ height }}</span>\r\n                        <span class=\"people__mass\">Mass: {{ mass }}</span>\r\n                        <span class=\"people__birth\">Birth: {{ birth }}</span>\r\n                        <span class=\"people__eye_color\">Eye color: {{ eye_color }}</span>\r\n                        <span class=\"people__hair_color\">Hair color: {{ hair_color }}</span>\r\n                        <span class=\"people__skin_color\">Skin color: {{ skin_color }}</span>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </section>\r\n    `\r\n})\n\n//# sourceURL=webpack://stardb/./src/app/pathPages/HomePageComponents/home-page.component.js?");

/***/ }),

/***/ "./src/app/pathPages/people-page.component.js":
/*!****************************************************!*\
  !*** ./src/app/pathPages/people-page.component.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"peoplePageComponent\": () => (/* binding */ peoplePageComponent)\n/* harmony export */ });\n/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../framework */ \"./src/framework/index.js\");\n\r\n\r\nclass PeoplePageComponent extends _framework__WEBPACK_IMPORTED_MODULE_0__.WFMComponent {\r\n    constructor(config) {\r\n        super(config)\r\n    }\r\n}\r\n\r\nconst peoplePageComponent = new PeoplePageComponent({\r\n    selector: 'people-page',\r\n    template: 'Nothing to show now about people!'\r\n})\n\n//# sourceURL=webpack://stardb/./src/app/pathPages/people-page.component.js?");

/***/ }),

/***/ "./src/app/pathPages/planets-page.component.js":
/*!*****************************************************!*\
  !*** ./src/app/pathPages/planets-page.component.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"planetsPageComponent\": () => (/* binding */ planetsPageComponent)\n/* harmony export */ });\n/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../framework */ \"./src/framework/index.js\");\n\r\n\r\nclass PlanetsPageComponent extends _framework__WEBPACK_IMPORTED_MODULE_0__.WFMComponent {\r\n    constructor(config) {\r\n        super(config)\r\n    }\r\n}\r\n\r\nconst planetsPageComponent = new PlanetsPageComponent({\r\n    selector: 'planets-page',\r\n    template: 'Nothing to show now about planets!'\r\n})\n\n//# sourceURL=webpack://stardb/./src/app/pathPages/planets-page.component.js?");

/***/ }),

/***/ "./src/app/pathPages/starships-page.component.js":
/*!*******************************************************!*\
  !*** ./src/app/pathPages/starships-page.component.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"starshipsPageComponent\": () => (/* binding */ starshipsPageComponent)\n/* harmony export */ });\n/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../framework */ \"./src/framework/index.js\");\n\r\n\r\nclass StarshipsPageComponent extends _framework__WEBPACK_IMPORTED_MODULE_0__.WFMComponent {\r\n    constructor(config) {\r\n        super(config)\r\n    }\r\n}\r\n\r\nconst starshipsPageComponent = new StarshipsPageComponent({\r\n    selector: 'starships-page',\r\n    template: 'Nothing to show now about starships!'\r\n})\n\n//# sourceURL=webpack://stardb/./src/app/pathPages/starships-page.component.js?");

/***/ }),

/***/ "./src/framework/core/component.js":
/*!*****************************************!*\
  !*** ./src/framework/core/component.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Component\": () => (/* binding */ Component)\n/* harmony export */ });\nclass Component {\r\n    constructor(config) {\r\n        this.selector = config.selector\r\n        this.template = config.template\r\n        this.el = null\r\n    }\r\n\r\n    render() {\r\n        this.el = document.querySelector(this.selector)\r\n        if(!this.el) throw new Error(`Component with selector ${this.selector} wasn't found!`)\r\n\r\n        this.el.innerHTML = compileTemplate(this.template, this.data)\r\n    }\r\n}\r\n\r\nfunction compileTemplate(template, data) {\r\n    if (data == undefined) return template\r\n    let regex = /\\{{(.*?)}}/g\r\n\r\n    template = template.replace(regex, (str, d) => {\r\n        let key = d.trim()\r\n        return data[key]\r\n    })\r\n\r\n    return template\r\n}\n\n//# sourceURL=webpack://stardb/./src/framework/core/component.js?");

/***/ }),

/***/ "./src/framework/core/module.js":
/*!**************************************!*\
  !*** ./src/framework/core/module.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Module\": () => (/* binding */ Module)\n/* harmony export */ });\nclass Module {\r\n    constructor(config) {\r\n        this.components = config.components\r\n        this.main = config.main\r\n        this.routes = config.routes\r\n    }\r\n\r\n    start() {\r\n        this.initComponents()\r\n        if (this.routes) this.initRoutes()\r\n    }\r\n\r\n    initComponents() {\r\n        this.main.render()\r\n        this.components.forEach(this.renderComponent.bind(this))\r\n    }\r\n\r\n    initRoutes() {\r\n        window.addEventListener('hashchange', this.renderRoute.bind(this))\r\n        this.renderRoute()\r\n    }\r\n\r\n    renderRoute() {\r\n        let url = window.location.hash.slice(1)\r\n        let route = this.routes.find(r => r.path === url)\r\n\r\n        if (route == undefined) {\r\n            route = this.routes.find(r => r.path === '**')\r\n        }\r\n\r\n        document.querySelector('router-outlet').innerHTML = `<${route.component.selector}></${route.component.selector}>`\r\n        this.renderComponent(route.component)\r\n    }\r\n\r\n    renderComponent(c) {\r\n        if (c.onInit != undefined) c.onInit()\r\n\r\n        c.render()\r\n        \r\n        if(c.afterInit != undefined) c.afterInit()\r\n    }\r\n    \r\n}\n\n//# sourceURL=webpack://stardb/./src/framework/core/module.js?");

/***/ }),

/***/ "./src/framework/core/start.js":
/*!*************************************!*\
  !*** ./src/framework/core/start.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"start\": () => (/* binding */ start)\n/* harmony export */ });\nfunction start(module) {\r\n    module.start()\r\n}\n\n//# sourceURL=webpack://stardb/./src/framework/core/start.js?");

/***/ }),

/***/ "./src/framework/index.js":
/*!********************************!*\
  !*** ./src/framework/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"WFMModule\": () => (/* reexport safe */ _core_module__WEBPACK_IMPORTED_MODULE_0__.Module),\n/* harmony export */   \"WFMComponent\": () => (/* reexport safe */ _core_component__WEBPACK_IMPORTED_MODULE_1__.Component),\n/* harmony export */   \"start\": () => (/* reexport safe */ _core_start__WEBPACK_IMPORTED_MODULE_2__.start),\n/* harmony export */   \"wfm\": () => (/* reexport safe */ _tools_util__WEBPACK_IMPORTED_MODULE_3__.wfm),\n/* harmony export */   \"http\": () => (/* reexport safe */ _tools_http__WEBPACK_IMPORTED_MODULE_4__.http)\n/* harmony export */ });\n/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/module */ \"./src/framework/core/module.js\");\n/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/component */ \"./src/framework/core/component.js\");\n/* harmony import */ var _core_start__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/start */ \"./src/framework/core/start.js\");\n/* harmony import */ var _tools_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tools/util */ \"./src/framework/tools/util.js\");\n/* harmony import */ var _tools_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tools/http */ \"./src/framework/tools/http.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://stardb/./src/framework/index.js?");

/***/ }),

/***/ "./src/framework/tools/http.js":
/*!*************************************!*\
  !*** ./src/framework/tools/http.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"http\": () => (/* binding */ http)\n/* harmony export */ });\nclass Http {\r\n    get(url) {\r\n        return sendRequest('GET', url)\r\n    }\r\n}\r\n\r\nfunction sendRequest(method, url) {\r\n    return fetch(url, {method})\r\n}\r\n\r\nconst http = new Http()\n\n//# sourceURL=webpack://stardb/./src/framework/tools/http.js?");

/***/ }),

/***/ "./src/framework/tools/util.js":
/*!*************************************!*\
  !*** ./src/framework/tools/util.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"wfm\": () => (/* binding */ wfm)\n/* harmony export */ });\nconst wfm = {\r\n    delay(ms = 1000) {\r\n        return new Promise ((resolve, reject) => {\r\n            setTimeout(() => {\r\n                resolve()\r\n            }, ms)\r\n        })\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://stardb/./src/framework/tools/util.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ \"./src/app/app.module.js\");\n/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./framework/index */ \"./src/framework/index.js\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n\r\n\r\n\r\n\r\n\r\n_framework__WEBPACK_IMPORTED_MODULE_1__.wfm.delay(1000).then(() => {\r\n    (0,_framework__WEBPACK_IMPORTED_MODULE_1__.start)(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.appModule)\r\n})\n\n//# sourceURL=webpack://stardb/./src/index.js?");

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