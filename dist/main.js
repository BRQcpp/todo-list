/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Ubuntu/Ubuntu-Regular.ttf */ "./src/fonts/Ubuntu/Ubuntu-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: Ubuntu;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n* {\n    font-family: Ubuntu;\n    color: white;\n    box-sizing: border-box;\n}\n\nbody {\n    height: 100vh;\n    margin: 0;\n}\n\n.header {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    height: 55px;\n    background-color: #212121;\n}\n\n.heading {\n    font-size: 33px;\n}\n\n.heading, .attribute, .attribute > * {\n    color: #797979;\n}\n\n.menu {\n    display: flex;\n    gap: 10px;\n}\n\n.add-function {\n\n}\n\n.remove-function {\n\n}\n\n.main-content {\n    height: calc(100% - 55px);\n    display: flex;\n}\n\n.project-category-header {\n    display: flex;\n}\n\n.side-menu {\n    box-sizing: border-box;\n    padding: 10px 10px 10px 30px;\n    width: 300px;\n    background-color: #2d2d2d;\n    border-right: 2px solid #222;\n}\n\n.group-project {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.category-elements > .project-side, .project-category-header > .project-category-title {\n    font-size: 20px;\n}\n\n.project-category-title#first{\n    font-size: 27px;\n}\n\n.category-elements {\n    margin-left: 10px;\n    padding-left: 2px;\n    border-left: 2px solid white;\n}\n\n\n.content {\n    width: calc(100% - 300px);\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    background-color: #212121;\n}\n\n.main-section-window {\n    width: 98%;\n    height: 98%;\n    margin: auto;\n    border: 2px solid #7e7e7e;\n    border-radius: 5px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px\n}\n\n.main-section-heading {\n    margin-top: 10px;\n    font-size: 40px;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.sub-section {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    padding: 20px;\n}\n\n.project {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.sub-heading {\n    width: fit-content;\n    display: flex;\n    align-items: center;\n    margin: auto;\n    gap: 5px;\n}\n\n.toggle {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.sub-heading > .toggle {\n    width: 16px;\n    height: 14px;\n}\n\n.toggle-img {\n    transition: 0.3s;\n    transform: rotate(180deg);\n\n}\n\n.toggle-img.rotated {\n    transform: rotate(90deg);\n}\n\n\n.sub-heading > .heading {\n    display: flex;\n    align-items: center;\n    font-size: 28px;\n    text-align: center;\n    color: white;\n}\n\n.todo {\n    background-color: #292929;\n    font-size: 22px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    border: 2px solid #7e7e7e;\n    margin: 5px;\n    border-radius: 10px;\n    flex-wrap: wrap;\n    transition: 0.3s;\n}\n\n.todo.done {\n    opacity: 0.3;\n    border: 2px solid green;\n}\n\n.todo-main {\n    border-radius: 5px;\n    padding: 5px;\n    gap: 5px;\n    width: 100%;\n    display: flex;\n    justify-content: space-around;\n    flex-wrap: wrap;\n}\n\n.todo-checklist {\n    margin: auto;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 3px;\n    width: 100%;\n    background-color: #303030;\n    padding: 5px 0;\n}\n\n.checklist-heading {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.checklist {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.checklist-header {\n    display: flex;\n    width: fit-content;\n    gap: 5px;\n}\n\n.checklist-header > .toggle > .toggle-img, .project-category-header > .toggle > .toggle-img {\n    width: 13px;\n}\n\n.checklist-label {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    font-size: 18px;\n}\n\n.checkbox-input {\n    display: none;\n}\n\n.checklist-label > .check-done-button {\n    width: 20px;\n    height: 20px;\n}\n\n.checklist-label > .check-done-button::before {\n    position: relative;\n    top: -4px;\n    font-size: 17px;\n    opacity: 0.2;\n    content: '✓';\n    transition: 0.3s;\n}\n\n\n.todo-description {\n    padding-bottom: 10px;\n    font-size: 18px;\n    margin: auto;\n    text-align: center;\n}\n\n.todo-priority-container {\n    display: flex;\n    align-items: center;\n}\n\n.change-priority {\n    width: 28px;\n    height: 28px;\n    border: 1px solid white;\n}\n\n.change-priority#subs:hover {\n    background-color: red;\n}\n\n.change-priority#subs:hover::before {\n    color: #292929;\n}\n\n.change-priority#add:hover {\n    background-color: green;\n}\n\n.change-priority#add:hover::before {\n    color: #292929;\n}\n\n.change-priority#subs::before, .change-priority#add::before{\n    transition: 0.3s;\n    position: relative;\n    font-size: 50px;\n    content: '-';\n    color: red;\n}\n\n.change-priority#subs::before {\n    top: -18px;\n}\n\n.change-priority#add::before {\n    font-size: 30px;\n    top: -5px;\n    content: '+';\n    color: green;\n}\n\n.todo-duedate, .todo-title, .todo-priority-container, .check-done {\n    width: 220px;\n}    \n\n.todo-title {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n}\n\n.todo-duedate, .todo-priority {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    gap: 3px;\n}    \n\n.todo-label {\n    margin-left: auto;\n    margin-right: auto;\n    width: fit-content;\n    padding: 1px 5px;\n    border-bottom: 1px solid white;\n}\n\n.check-done {\n    display: flex;\n    align-items: center;\n}\n\n.ddate-input, .priority-input, .title-input, .todo-title-content {\n    text-align: center;\n    font-size: 18px;\n    outline: none;\n    border: none;\n    background-color: inherit;\n}\n\n.priority-input, .title-input {\n    -webkit-appearance: none;\n    appearance: none;\n}\n\n.ddate-input, .priority-input {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.ddate-input {\n    width: 125px;\n}\n\n.priority-input{\n    width: 70px;\n}\n\n.title-input {\n    width: 194px;\n    font-size: 35px;\n    background-color: #2d2d2d;\n    border-radius: 5px;\n}\n\n.todo-title-content {\n    width: fit-content;\n    max-width: 220px;\n    max-height: 55px;\n    overflow-x: auto;\n    font-size: 35px;\n    margin-left: 31px;\n}\n\n.title-edit-icon {\n    width: 26px;\n    height: 26px;\n}\n\n.check-done-input {\n    display: none;\n}\n\n.check-done-button-container {\n    margin: auto;\n}\n\n.check-done-button, .change-priority {\n    margin: auto;\n    width: 28px;\n    border-radius: 100%;\n    height: 28px;\n    border: 1px solid white;\n    text-align: center;\n}\n\n.check-done-button::before {\n    position: relative;\n    top: -4px;\n    font-size: 23px;\n    opacity: 0.2;\n    content: '✓';\n    transition: 0.3s;\n}\n\n.check-done-button:hover {\n    background-color: green;\n}\n\n.check-done-button:hover::before {\n    opacity: 1;\n}\n\n.check-done-button.checked::before {\n    opacity: 1;\n}\n\n.checked {\n    opacity: 1;\n    background-color: green;\n}\n\n\n/* width */\n::-webkit-scrollbar {\n    height: 5px;\n  }\n  \n  /* Track */\n  ::-webkit-scrollbar-track {\n    background: #222;\n  }\n  \n  /* Handle */\n  ::-webkit-scrollbar-thumb {\n    background: rgb(19, 19, 19);\n  }\n  \n  /* Handle on hover */\n  ::-webkit-scrollbar-thumb:hover {\n    background: #555;\n  }\n\n  button {\n      -webkit-appearance: none;\n      appearance: none;\n      background-color: inherit;\n      border: 0;\n      outline: none;\n      padding: 0;\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: Ubuntu;\n    src: url(fonts/Ubuntu/Ubuntu-Regular.ttf);\n}\n\n* {\n    font-family: Ubuntu;\n    color: white;\n    box-sizing: border-box;\n}\n\nbody {\n    height: 100vh;\n    margin: 0;\n}\n\n.header {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    height: 55px;\n    background-color: #212121;\n}\n\n.heading {\n    font-size: 33px;\n}\n\n.heading, .attribute, .attribute > * {\n    color: #797979;\n}\n\n.menu {\n    display: flex;\n    gap: 10px;\n}\n\n.add-function {\n\n}\n\n.remove-function {\n\n}\n\n.main-content {\n    height: calc(100% - 55px);\n    display: flex;\n}\n\n.project-category-header {\n    display: flex;\n}\n\n.side-menu {\n    box-sizing: border-box;\n    padding: 10px 10px 10px 30px;\n    width: 300px;\n    background-color: #2d2d2d;\n    border-right: 2px solid #222;\n}\n\n.group-project {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.category-elements > .project-side, .project-category-header > .project-category-title {\n    font-size: 20px;\n}\n\n.project-category-title#first{\n    font-size: 27px;\n}\n\n.category-elements {\n    margin-left: 10px;\n    padding-left: 2px;\n    border-left: 2px solid white;\n}\n\n\n.content {\n    width: calc(100% - 300px);\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    background-color: #212121;\n}\n\n.main-section-window {\n    width: 98%;\n    height: 98%;\n    margin: auto;\n    border: 2px solid #7e7e7e;\n    border-radius: 5px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px\n}\n\n.main-section-heading {\n    margin-top: 10px;\n    font-size: 40px;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.sub-section {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    padding: 20px;\n}\n\n.project {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.sub-heading {\n    width: fit-content;\n    display: flex;\n    align-items: center;\n    margin: auto;\n    gap: 5px;\n}\n\n.toggle {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.sub-heading > .toggle {\n    width: 16px;\n    height: 14px;\n}\n\n.toggle-img {\n    transition: 0.3s;\n    transform: rotate(180deg);\n\n}\n\n.toggle-img.rotated {\n    transform: rotate(90deg);\n}\n\n\n.sub-heading > .heading {\n    display: flex;\n    align-items: center;\n    font-size: 28px;\n    text-align: center;\n    color: white;\n}\n\n.todo {\n    background-color: #292929;\n    font-size: 22px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    border: 2px solid #7e7e7e;\n    margin: 5px;\n    border-radius: 10px;\n    flex-wrap: wrap;\n    transition: 0.3s;\n}\n\n.todo.done {\n    opacity: 0.3;\n    border: 2px solid green;\n}\n\n.todo-main {\n    border-radius: 5px;\n    padding: 5px;\n    gap: 5px;\n    width: 100%;\n    display: flex;\n    justify-content: space-around;\n    flex-wrap: wrap;\n}\n\n.todo-checklist {\n    margin: auto;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 3px;\n    width: 100%;\n    background-color: #303030;\n    padding: 5px 0;\n}\n\n.checklist-heading {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.checklist {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.checklist-header {\n    display: flex;\n    width: fit-content;\n    gap: 5px;\n}\n\n.checklist-header > .toggle > .toggle-img, .project-category-header > .toggle > .toggle-img {\n    width: 13px;\n}\n\n.checklist-label {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    font-size: 18px;\n}\n\n.checkbox-input {\n    display: none;\n}\n\n.checklist-label > .check-done-button {\n    width: 20px;\n    height: 20px;\n}\n\n.checklist-label > .check-done-button::before {\n    position: relative;\n    top: -4px;\n    font-size: 17px;\n    opacity: 0.2;\n    content: '✓';\n    transition: 0.3s;\n}\n\n\n.todo-description {\n    padding-bottom: 10px;\n    font-size: 18px;\n    margin: auto;\n    text-align: center;\n}\n\n.todo-priority-container {\n    display: flex;\n    align-items: center;\n}\n\n.change-priority {\n    width: 28px;\n    height: 28px;\n    border: 1px solid white;\n}\n\n.change-priority#subs:hover {\n    background-color: red;\n}\n\n.change-priority#subs:hover::before {\n    color: #292929;\n}\n\n.change-priority#add:hover {\n    background-color: green;\n}\n\n.change-priority#add:hover::before {\n    color: #292929;\n}\n\n.change-priority#subs::before, .change-priority#add::before{\n    transition: 0.3s;\n    position: relative;\n    font-size: 50px;\n    content: '-';\n    color: red;\n}\n\n.change-priority#subs::before {\n    top: -18px;\n}\n\n.change-priority#add::before {\n    font-size: 30px;\n    top: -5px;\n    content: '+';\n    color: green;\n}\n\n.todo-duedate, .todo-title, .todo-priority-container, .check-done {\n    width: 220px;\n}    \n\n.todo-title {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n}\n\n.todo-duedate, .todo-priority {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    gap: 3px;\n}    \n\n.todo-label {\n    margin-left: auto;\n    margin-right: auto;\n    width: fit-content;\n    padding: 1px 5px;\n    border-bottom: 1px solid white;\n}\n\n.check-done {\n    display: flex;\n    align-items: center;\n}\n\n.ddate-input, .priority-input, .title-input, .todo-title-content {\n    text-align: center;\n    font-size: 18px;\n    outline: none;\n    border: none;\n    background-color: inherit;\n}\n\n.priority-input, .title-input {\n    -webkit-appearance: none;\n    appearance: none;\n}\n\n.ddate-input, .priority-input {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.ddate-input {\n    width: 125px;\n}\n\n.priority-input{\n    width: 70px;\n}\n\n.title-input {\n    width: 194px;\n    font-size: 35px;\n    background-color: #2d2d2d;\n    border-radius: 5px;\n}\n\n.todo-title-content {\n    width: fit-content;\n    max-width: 220px;\n    max-height: 55px;\n    overflow-x: auto;\n    font-size: 35px;\n    margin-left: 31px;\n}\n\n.title-edit-icon {\n    width: 26px;\n    height: 26px;\n}\n\n.check-done-input {\n    display: none;\n}\n\n.check-done-button-container {\n    margin: auto;\n}\n\n.check-done-button, .change-priority {\n    margin: auto;\n    width: 28px;\n    border-radius: 100%;\n    height: 28px;\n    border: 1px solid white;\n    text-align: center;\n}\n\n.check-done-button::before {\n    position: relative;\n    top: -4px;\n    font-size: 23px;\n    opacity: 0.2;\n    content: '✓';\n    transition: 0.3s;\n}\n\n.check-done-button:hover {\n    background-color: green;\n}\n\n.check-done-button:hover::before {\n    opacity: 1;\n}\n\n.check-done-button.checked::before {\n    opacity: 1;\n}\n\n.checked {\n    opacity: 1;\n    background-color: green;\n}\n\n\n/* width */\n::-webkit-scrollbar {\n    height: 5px;\n  }\n  \n  /* Track */\n  ::-webkit-scrollbar-track {\n    background: #222;\n  }\n  \n  /* Handle */\n  ::-webkit-scrollbar-thumb {\n    background: rgb(19, 19, 19);\n  }\n  \n  /* Handle on hover */\n  ::-webkit-scrollbar-thumb:hover {\n    background: #555;\n  }\n\n  button {\n      -webkit-appearance: none;\n      appearance: none;\n      background-color: inherit;\n      border: 0;\n      outline: none;\n      padding: 0;\n  }"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domModule": () => (/* binding */ domModule)
/* harmony export */ });
let domModule = 
(function()
{

    let mainContentDOM = (function()
    {
        let editIcons = Array.from(document.querySelectorAll('.title-edit-icon'));
        editIcons.forEach(editIcon => 
        {
            editIcon.addEventListener('click', () => 
            {
                editIconAddEventListeners(editIcon);
            });
        });
        function editIconAddEventListeners(editIcon)
        {
            if(!(editIcon.closest('.todo').classList.contains('done')))
            {
                let parent = editIcon.parentElement;
                let input = parent.querySelector('input');
                let contentDiv = parent.querySelector('div.todo-title-content');
                let img = editIcon.querySelector('img');
                if(editIcon.getAttribute('id') == 'read-mode')
                {
                    img.setAttribute('src', 'graphics/save-icon.png');
                    img.setAttribute('alt', 'save indicator icon');
                    editIcon.setAttribute('id', 'edit-mode');
                    contentDiv.style.setProperty('display', 'none');
                    input.style.removeProperty('display');
                }
                else if(editIcon.getAttribute('id') == 'edit-mode')
                {
                    if(input.validity.valueMissing)
                    {
                        input.setCustomValidity('Must consist at least one character');
                        input.reportValidity();
                    }
                    else
                    {
                        contentDiv.textContent = input.value;
                        img.setAttribute('src', 'graphics/edit-icon.png');
                        img.setAttribute('alt', 'edit indicator icon');
                        editIcon.setAttribute('id', 'read-mode');
                        contentDiv.style.removeProperty('display');
                        input.style.setProperty('display', 'none');
                    }
                }
            }
        }

        let checkButtons = Array.from(document.querySelectorAll('.check-done-button')).filter( (cb) => {return cb.getAttribute('id') != 'mainCB'});
        checkButtons.forEach(checkButton => 
        {
            checkButton.addEventListener('click', () =>
            {
                checkButtonAddEventListeners(checkButton);
            });
        });
        function checkButtonAddEventListeners(checkButton)
        {
            if(!(checkButton.closest('.todo').classList.contains('done')))
            {
                if(!(checkButton.classList.contains('checked')))
                {
                    checkButton.classList.add('checked');
                }
                else if(checkButton.classList.contains('checked'))
                {
                    checkButton.classList.remove('checked');
                }
            }
        }

        let mainCheckButtons = Array.from(document.querySelectorAll('#mainCB'));
        mainCheckButtons.forEach(checkButton => 
        {
            checkButton.addEventListener('click', () =>
            {
                mainCBAddEventListeners(checkButton);
            });
        });
        function mainCBAddEventListeners(checkButton)
        {
            let todo = checkButton.closest('div.todo');
            let dateInput = todo.querySelector('.ddate-input');
            if(checkButton.classList.contains('checked'))
            {
                checkButton.classList.remove('checked');
                todo.classList.remove('done');
                dateInput.removeAttribute('readonly');
            }
            else if(!(checkButton.classList.contains('checked')))
            {
                checkButton.classList.add('checked');
                let icon = todo.querySelector('.title-edit-icon');
                if(icon.getAttribute('id') == 'edit-mode')
                    editIconAddEventListeners(icon);
                dateInput.setAttribute('readonly', '');
                todo.classList.add('done');
            }
        }

        let prioritySpinners = Array.from(document.querySelectorAll('.change-priority'));
        prioritySpinners.forEach(prioritySpinner => 
        {
            prioritySpinner.addEventListener('click', () =>
            {
                prioritySpinnersAddEventListeners(prioritySpinner);
            });
        });
        function prioritySpinnersAddEventListeners(prioritySpinner)
        {
            if(!(prioritySpinner.closest('.todo').classList.contains('done')))
            {
                let id = prioritySpinner.getAttribute('id');
                let priorityContent = prioritySpinner.closest('.todo-priority-container').querySelector('.priority-input');
                let value = priorityContent.value;

                if(id == 'subs')
                {
                    switch(value)
                    {
                        case 'low' : value = 'high'; break;
                        case 'normal' : value = 'low'; break;
                        case 'high' : value = 'normal'; break;
                    }
                }

                else if(id == 'add')
                {
                    switch(value)
                    {
                        case 'low' : value = 'normal'; break;
                        case 'normal' : value = 'high'; break;
                        case 'high' : value = 'low'; break;
                    }
                }
                priorityContent.value = value;
            }
        }

        let toggleButtons = Array.from(document.querySelectorAll('.toggle-img'));
        toggleButtons.forEach( (toggleButton) => 
        {
            projectTogglesAddEventListeners(toggleButton);
        });
        function projectTogglesAddEventListeners(toggleButton)
        {
            let elementsToToggle = toggleButton.closest('#toggle-container').querySelector('#togglable') .querySelectorAll(':scope > *');
            toggleButton.addEventListener('click', () =>
            {
                if(!(toggleButton.classList.contains('rotated')))
                {
                    toggleButton.classList.add('rotated')
                    elementsToToggle.forEach( (elementToToggle) =>
                    {
                        elementToToggle.style.setProperty('display', 'none');
                    });
                }
                else if(toggleButton.classList.contains('rotated'))
                {
                    toggleButton.classList.remove('rotated')
                    elementsToToggle.forEach( (elementToToggle) =>
                    {
                        elementToToggle.style.removeProperty('display');
                    });
                }
            });
        }

        return {

        }

    })();

    return {
        
    }
}
)();

/***/ }),

/***/ "./src/fonts/Ubuntu/Ubuntu-Regular.ttf":
/*!*********************************************!*\
  !*** ./src/fonts/Ubuntu/Ubuntu-Regular.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1cbb1b79a23478cc89ad.ttf";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxRQUFRLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksY0FBYyxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksUUFBUSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFV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Oi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImZvbnRzL1VidW50dS9VYnVudHUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFVidW50dTtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG4qIHtcXG4gICAgZm9udC1mYW1pbHk6IFVidW50dTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGhlaWdodDogNTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcXG59XFxuXFxuLmhlYWRpbmcge1xcbiAgICBmb250LXNpemU6IDMzcHg7XFxufVxcblxcbi5oZWFkaW5nLCAuYXR0cmlidXRlLCAuYXR0cmlidXRlID4gKiB7XFxuICAgIGNvbG9yOiAjNzk3OTc5O1xcbn1cXG5cXG4ubWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmFkZC1mdW5jdGlvbiB7XFxuXFxufVxcblxcbi5yZW1vdmUtZnVuY3Rpb24ge1xcblxcbn1cXG5cXG4ubWFpbi1jb250ZW50IHtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1NXB4KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnByb2plY3QtY2F0ZWdvcnktaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnNpZGUtbWVudSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDMwcHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmQyZDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzIyMjtcXG59XFxuXFxuLmdyb3VwLXByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5jYXRlZ29yeS1lbGVtZW50cyA+IC5wcm9qZWN0LXNpZGUsIC5wcm9qZWN0LWNhdGVnb3J5LWhlYWRlciA+IC5wcm9qZWN0LWNhdGVnb3J5LXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1jYXRlZ29yeS10aXRsZSNmaXJzdHtcXG4gICAgZm9udC1zaXplOiAyN3B4O1xcbn1cXG5cXG4uY2F0ZWdvcnktZWxlbWVudHMge1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgd2hpdGU7XFxufVxcblxcblxcbi5jb250ZW50IHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwMHB4KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xcbn1cXG5cXG4ubWFpbi1zZWN0aW9uLXdpbmRvdyB7XFxuICAgIHdpZHRoOiA5OCU7XFxuICAgIGhlaWdodDogOTglO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM3ZTdlN2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4XFxufVxcblxcbi5tYWluLXNlY3Rpb24taGVhZGluZyB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLnN1Yi1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnN1Yi1oZWFkaW5nIHtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4udG9nZ2xlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zdWItaGVhZGluZyA+IC50b2dnbGUge1xcbiAgICB3aWR0aDogMTZweDtcXG4gICAgaGVpZ2h0OiAxNHB4O1xcbn1cXG5cXG4udG9nZ2xlLWltZyB7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuXFxufVxcblxcbi50b2dnbGUtaW1nLnJvdGF0ZWQge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcblxcbi5zdWItaGVhZGluZyA+IC5oZWFkaW5nIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRvZG8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTI5O1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzdlN2U3ZTtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLnRvZG8uZG9uZSB7XFxuICAgIG9wYWNpdHk6IDAuMztcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JlZW47XFxufVxcblxcbi50b2RvLW1haW4ge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4udG9kby1jaGVja2xpc3Qge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogM3B4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDtcXG4gICAgcGFkZGluZzogNXB4IDA7XFxufVxcblxcbi5jaGVja2xpc3QtaGVhZGluZyB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi5jaGVja2xpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLmNoZWNrbGlzdC1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uY2hlY2tsaXN0LWhlYWRlciA+IC50b2dnbGUgPiAudG9nZ2xlLWltZywgLnByb2plY3QtY2F0ZWdvcnktaGVhZGVyID4gLnRvZ2dsZSA+IC50b2dnbGUtaW1nIHtcXG4gICAgd2lkdGg6IDEzcHg7XFxufVxcblxcbi5jaGVja2xpc3QtbGFiZWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4uY2hlY2tib3gtaW5wdXQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY2hlY2tsaXN0LWxhYmVsID4gLmNoZWNrLWRvbmUtYnV0dG9uIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG59XFxuXFxuLmNoZWNrbGlzdC1sYWJlbCA+IC5jaGVjay1kb25lLWJ1dHRvbjo6YmVmb3JlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC00cHg7XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG4gICAgb3BhY2l0eTogMC4yO1xcbiAgICBjb250ZW50OiAn4pyTJztcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuXFxuLnRvZG8tZGVzY3JpcHRpb24ge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8tcHJpb3JpdHktY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNoYW5nZS1wcmlvcml0eSB7XFxuICAgIHdpZHRoOiAyOHB4O1xcbiAgICBoZWlnaHQ6IDI4cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uY2hhbmdlLXByaW9yaXR5I3N1YnM6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5jaGFuZ2UtcHJpb3JpdHkjc3Viczpob3Zlcjo6YmVmb3JlIHtcXG4gICAgY29sb3I6ICMyOTI5Mjk7XFxufVxcblxcbi5jaGFuZ2UtcHJpb3JpdHkjYWRkOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5jaGFuZ2UtcHJpb3JpdHkjYWRkOmhvdmVyOjpiZWZvcmUge1xcbiAgICBjb2xvcjogIzI5MjkyOTtcXG59XFxuXFxuLmNoYW5nZS1wcmlvcml0eSNzdWJzOjpiZWZvcmUsIC5jaGFuZ2UtcHJpb3JpdHkjYWRkOjpiZWZvcmV7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbiAgICBjb250ZW50OiAnLSc7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbi5jaGFuZ2UtcHJpb3JpdHkjc3Viczo6YmVmb3JlIHtcXG4gICAgdG9wOiAtMThweDtcXG59XFxuXFxuLmNoYW5nZS1wcmlvcml0eSNhZGQ6OmJlZm9yZSB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgdG9wOiAtNXB4O1xcbiAgICBjb250ZW50OiAnKyc7XFxuICAgIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnRvZG8tZHVlZGF0ZSwgLnRvZG8tdGl0bGUsIC50b2RvLXByaW9yaXR5LWNvbnRhaW5lciwgLmNoZWNrLWRvbmUge1xcbiAgICB3aWR0aDogMjIwcHg7XFxufSAgICBcXG5cXG4udG9kby10aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnRvZG8tZHVlZGF0ZSwgLnRvZG8tcHJpb3JpdHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdhcDogM3B4O1xcbn0gICAgXFxuXFxuLnRvZG8tbGFiZWwge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDFweCA1cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLmNoZWNrLWRvbmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGRhdGUtaW5wdXQsIC5wcmlvcml0eS1pbnB1dCwgLnRpdGxlLWlucHV0LCAudG9kby10aXRsZS1jb250ZW50IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLnByaW9yaXR5LWlucHV0LCAudGl0bGUtaW5wdXQge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi5kZGF0ZS1pbnB1dCwgLnByaW9yaXR5LWlucHV0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLmRkYXRlLWlucHV0IHtcXG4gICAgd2lkdGg6IDEyNXB4O1xcbn1cXG5cXG4ucHJpb3JpdHktaW5wdXR7XFxuICAgIHdpZHRoOiA3MHB4O1xcbn1cXG5cXG4udGl0bGUtaW5wdXQge1xcbiAgICB3aWR0aDogMTk0cHg7XFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmQyZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4udG9kby10aXRsZS1jb250ZW50IHtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBtYXgtd2lkdGg6IDIyMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiA1NXB4O1xcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgICBmb250LXNpemU6IDM1cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMXB4O1xcbn1cXG5cXG4udGl0bGUtZWRpdC1pY29uIHtcXG4gICAgd2lkdGg6IDI2cHg7XFxuICAgIGhlaWdodDogMjZweDtcXG59XFxuXFxuLmNoZWNrLWRvbmUtaW5wdXQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY2hlY2stZG9uZS1idXR0b24tY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uY2hlY2stZG9uZS1idXR0b24sIC5jaGFuZ2UtcHJpb3JpdHkge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHdpZHRoOiAyOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDI4cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jaGVjay1kb25lLWJ1dHRvbjo6YmVmb3JlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC00cHg7XFxuICAgIGZvbnQtc2l6ZTogMjNweDtcXG4gICAgb3BhY2l0eTogMC4yO1xcbiAgICBjb250ZW50OiAn4pyTJztcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLmNoZWNrLWRvbmUtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5jaGVjay1kb25lLWJ1dHRvbjpob3Zlcjo6YmVmb3JlIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmNoZWNrLWRvbmUtYnV0dG9uLmNoZWNrZWQ6OmJlZm9yZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5jaGVja2VkIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcblxcbi8qIHdpZHRoICovXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIGhlaWdodDogNXB4O1xcbiAgfVxcbiAgXFxuICAvKiBUcmFjayAqL1xcbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJhY2tncm91bmQ6ICMyMjI7XFxuICB9XFxuICBcXG4gIC8qIEhhbmRsZSAqL1xcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigxOSwgMTksIDE5KTtcXG4gIH1cXG4gIFxcbiAgLyogSGFuZGxlIG9uIGhvdmVyICovXFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzU1NTtcXG4gIH1cXG5cXG4gIGJ1dHRvbiB7XFxuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgICBib3JkZXI6IDA7XFxuICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICBwYWRkaW5nOiAwO1xcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNl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QTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsdUJBQXVCO0FBQzNCOzs7QUFHQSxVQUFVO0FBQ1Y7SUFDSSxXQUFXO0VBQ2I7O0VBRUEsVUFBVTtFQUNWO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBLFdBQVc7RUFDWDtJQUNFLDJCQUEyQjtFQUM3Qjs7RUFFQSxvQkFBb0I7RUFDcEI7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7TUFDSSx3QkFBd0I7TUFDeEIsZ0JBQWdCO01BQ2hCLHlCQUF5QjtNQUN6QixTQUFTO01BQ1QsYUFBYTtNQUNiLFVBQVU7RUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFVidW50dTtcXG4gICAgc3JjOiB1cmwoZm9udHMvVWJ1bnR1L1VidW50dS1SZWd1bGFyLnR0Zik7XFxufVxcblxcbioge1xcbiAgICBmb250LWZhbWlseTogVWJ1bnR1O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgaGVpZ2h0OiA1NXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xcbn1cXG5cXG4uaGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogMzNweDtcXG59XFxuXFxuLmhlYWRpbmcsIC5hdHRyaWJ1dGUsIC5hdHRyaWJ1dGUgPiAqIHtcXG4gICAgY29sb3I6ICM3OTc5Nzk7XFxufVxcblxcbi5tZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uYWRkLWZ1bmN0aW9uIHtcXG5cXG59XFxuXFxuLnJlbW92ZS1mdW5jdGlvbiB7XFxuXFxufVxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDU1cHgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucHJvamVjdC1jYXRlZ29yeS1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc2lkZS1tZW51IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMzBweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZDJkO1xcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMjIyO1xcbn1cXG5cXG4uZ3JvdXAtcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmNhdGVnb3J5LWVsZW1lbnRzID4gLnByb2plY3Qtc2lkZSwgLnByb2plY3QtY2F0ZWdvcnktaGVhZGVyID4gLnByb2plY3QtY2F0ZWdvcnktdGl0bGUge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5wcm9qZWN0LWNhdGVnb3J5LXRpdGxlI2ZpcnN0e1xcbiAgICBmb250LXNpemU6IDI3cHg7XFxufVxcblxcbi5jYXRlZ29yeS1lbGVtZW50cyB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuXFxuLmNvbnRlbnQge1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzAwcHgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XFxufVxcblxcbi5tYWluLXNlY3Rpb24td2luZG93IHtcXG4gICAgd2lkdGg6IDk4JTtcXG4gICAgaGVpZ2h0OiA5OCU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzdlN2U3ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHhcXG59XFxuXFxuLm1haW4tc2VjdGlvbi1oZWFkaW5nIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uc3ViLXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uc3ViLWhlYWRpbmcge1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi50b2dnbGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnN1Yi1oZWFkaW5nID4gLnRvZ2dsZSB7XFxuICAgIHdpZHRoOiAxNnB4O1xcbiAgICBoZWlnaHQ6IDE0cHg7XFxufVxcblxcbi50b2dnbGUtaW1nIHtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG5cXG59XFxuXFxuLnRvZ2dsZS1pbWcucm90YXRlZCB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuXFxuLnN1Yi1oZWFkaW5nID4gLmhlYWRpbmcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udG9kbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTI5Mjk7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjN2U3ZTdlO1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4udG9kby5kb25lIHtcXG4gICAgb3BhY2l0eTogMC4zO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmVlbjtcXG59XFxuXFxuLnRvZG8tbWFpbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBnYXA6IDVweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi50b2RvLWNoZWNrbGlzdCB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAzcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwO1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG59XFxuXFxuLmNoZWNrbGlzdC1oZWFkaW5nIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLmNoZWNrbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uY2hlY2tsaXN0LWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5jaGVja2xpc3QtaGVhZGVyID4gLnRvZ2dsZSA+IC50b2dnbGUtaW1nLCAucHJvamVjdC1jYXRlZ29yeS1oZWFkZXIgPiAudG9nZ2xlID4gLnRvZ2dsZS1pbWcge1xcbiAgICB3aWR0aDogMTNweDtcXG59XFxuXFxuLmNoZWNrbGlzdC1sYWJlbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5jaGVja2JveC1pbnB1dCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jaGVja2xpc3QtbGFiZWwgPiAuY2hlY2stZG9uZS1idXR0b24ge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uY2hlY2tsaXN0LWxhYmVsID4gLmNoZWNrLWRvbmUtYnV0dG9uOjpiZWZvcmUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogLTRweDtcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcbiAgICBvcGFjaXR5OiAwLjI7XFxuICAgIGNvbnRlbnQ6ICfinJMnO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG5cXG4udG9kby1kZXNjcmlwdGlvbiB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udG9kby1wcmlvcml0eS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2hhbmdlLXByaW9yaXR5IHtcXG4gICAgd2lkdGg6IDI4cHg7XFxuICAgIGhlaWdodDogMjhweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5jaGFuZ2UtcHJpb3JpdHkjc3Viczpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmNoYW5nZS1wcmlvcml0eSNzdWJzOmhvdmVyOjpiZWZvcmUge1xcbiAgICBjb2xvcjogIzI5MjkyOTtcXG59XFxuXFxuLmNoYW5nZS1wcmlvcml0eSNhZGQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmNoYW5nZS1wcmlvcml0eSNhZGQ6aG92ZXI6OmJlZm9yZSB7XFxuICAgIGNvbG9yOiAjMjkyOTI5O1xcbn1cXG5cXG4uY2hhbmdlLXByaW9yaXR5I3N1YnM6OmJlZm9yZSwgLmNoYW5nZS1wcmlvcml0eSNhZGQ6OmJlZm9yZXtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIGNvbnRlbnQ6ICctJztcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmNoYW5nZS1wcmlvcml0eSNzdWJzOjpiZWZvcmUge1xcbiAgICB0b3A6IC0xOHB4O1xcbn1cXG5cXG4uY2hhbmdlLXByaW9yaXR5I2FkZDo6YmVmb3JlIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICB0b3A6IC01cHg7XFxuICAgIGNvbnRlbnQ6ICcrJztcXG4gICAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4udG9kby1kdWVkYXRlLCAudG9kby10aXRsZSwgLnRvZG8tcHJpb3JpdHktY29udGFpbmVyLCAuY2hlY2stZG9uZSB7XFxuICAgIHdpZHRoOiAyMjBweDtcXG59ICAgIFxcblxcbi50b2RvLXRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4udG9kby1kdWVkYXRlLCAudG9kby1wcmlvcml0eSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZ2FwOiAzcHg7XFxufSAgICBcXG5cXG4udG9kby1sYWJlbCB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgcGFkZGluZzogMXB4IDVweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uY2hlY2stZG9uZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kZGF0ZS1pbnB1dCwgLnByaW9yaXR5LWlucHV0LCAudGl0bGUtaW5wdXQsIC50b2RvLXRpdGxlLWNvbnRlbnQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4ucHJpb3JpdHktaW5wdXQsIC50aXRsZS1pbnB1dCB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLmRkYXRlLWlucHV0LCAucHJpb3JpdHktaW5wdXQge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uZGRhdGUtaW5wdXQge1xcbiAgICB3aWR0aDogMTI1cHg7XFxufVxcblxcbi5wcmlvcml0eS1pbnB1dHtcXG4gICAgd2lkdGg6IDcwcHg7XFxufVxcblxcbi50aXRsZS1pbnB1dCB7XFxuICAgIHdpZHRoOiAxOTRweDtcXG4gICAgZm9udC1zaXplOiAzNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZDJkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi50b2RvLXRpdGxlLWNvbnRlbnQge1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIG1heC13aWR0aDogMjIwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDU1cHg7XFxuICAgIG92ZXJmbG93LXg6IGF1dG87XFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDMxcHg7XFxufVxcblxcbi50aXRsZS1lZGl0LWljb24ge1xcbiAgICB3aWR0aDogMjZweDtcXG4gICAgaGVpZ2h0OiAyNnB4O1xcbn1cXG5cXG4uY2hlY2stZG9uZS1pbnB1dCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jaGVjay1kb25lLWJ1dHRvbi1jb250YWluZXIge1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5jaGVjay1kb25lLWJ1dHRvbiwgLmNoYW5nZS1wcmlvcml0eSB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgd2lkdGg6IDI4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIGhlaWdodDogMjhweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNoZWNrLWRvbmUtYnV0dG9uOjpiZWZvcmUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogLTRweDtcXG4gICAgZm9udC1zaXplOiAyM3B4O1xcbiAgICBvcGFjaXR5OiAwLjI7XFxuICAgIGNvbnRlbnQ6ICfinJMnO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4uY2hlY2stZG9uZS1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmNoZWNrLWRvbmUtYnV0dG9uOmhvdmVyOjpiZWZvcmUge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uY2hlY2stZG9uZS1idXR0b24uY2hlY2tlZDo6YmVmb3JlIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmNoZWNrZWQge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuXFxuLyogd2lkdGggKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgaGVpZ2h0OiA1cHg7XFxuICB9XFxuICBcXG4gIC8qIFRyYWNrICovXFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgYmFja2dyb3VuZDogIzIyMjtcXG4gIH1cXG4gIFxcbiAgLyogSGFuZGxlICovXFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDE5LCAxOSwgMTkpO1xcbiAgfVxcbiAgXFxuICAvKiBIYW5kbGUgb24gaG92ZXIgKi9cXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjNTU1O1xcbiAgfVxcblxcbiAgYnV0dG9uIHtcXG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICAgIGJvcmRlcjogMDtcXG4gICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgIHBhZGRpbmc6IDA7XFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBsZXQgZG9tTW9kdWxlID0gXG4oZnVuY3Rpb24oKVxue1xuXG4gICAgbGV0IG1haW5Db250ZW50RE9NID0gKGZ1bmN0aW9uKClcbiAgICB7XG4gICAgICAgIGxldCBlZGl0SWNvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aXRsZS1lZGl0LWljb24nKSk7XG4gICAgICAgIGVkaXRJY29ucy5mb3JFYWNoKGVkaXRJY29uID0+IFxuICAgICAgICB7XG4gICAgICAgICAgICBlZGl0SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVkaXRJY29uQWRkRXZlbnRMaXN0ZW5lcnMoZWRpdEljb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBmdW5jdGlvbiBlZGl0SWNvbkFkZEV2ZW50TGlzdGVuZXJzKGVkaXRJY29uKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZighKGVkaXRJY29uLmNsb3Nlc3QoJy50b2RvJykuY2xhc3NMaXN0LmNvbnRhaW5zKCdkb25lJykpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCBwYXJlbnQgPSBlZGl0SWNvbi5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgICAgIGxldCBpbnB1dCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIGxldCBjb250ZW50RGl2ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi50b2RvLXRpdGxlLWNvbnRlbnQnKTtcbiAgICAgICAgICAgICAgICBsZXQgaW1nID0gZWRpdEljb24ucXVlcnlTZWxlY3RvcignaW1nJyk7XG4gICAgICAgICAgICAgICAgaWYoZWRpdEljb24uZ2V0QXR0cmlidXRlKCdpZCcpID09ICdyZWFkLW1vZGUnKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgJ2dyYXBoaWNzL3NhdmUtaWNvbi5wbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgJ3NhdmUgaW5kaWNhdG9yIGljb24nKTtcbiAgICAgICAgICAgICAgICAgICAgZWRpdEljb24uc2V0QXR0cmlidXRlKCdpZCcsICdlZGl0LW1vZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudERpdi5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdkaXNwbGF5Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYoZWRpdEljb24uZ2V0QXR0cmlidXRlKCdpZCcpID09ICdlZGl0LW1vZGUnKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoaW5wdXQudmFsaWRpdHkudmFsdWVNaXNzaW5nKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnTXVzdCBjb25zaXN0IGF0IGxlYXN0IG9uZSBjaGFyYWN0ZXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50RGl2LnRleHRDb250ZW50ID0gaW5wdXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCAnZ3JhcGhpY3MvZWRpdC1pY29uLnBuZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2VkaXQgaW5kaWNhdG9yIGljb24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAncmVhZC1tb2RlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50RGl2LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdkaXNwbGF5Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dC5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY2hlY2tCdXR0b25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2stZG9uZS1idXR0b24nKSkuZmlsdGVyKCAoY2IpID0+IHtyZXR1cm4gY2IuZ2V0QXR0cmlidXRlKCdpZCcpICE9ICdtYWluQ0InfSk7XG4gICAgICAgIGNoZWNrQnV0dG9ucy5mb3JFYWNoKGNoZWNrQnV0dG9uID0+IFxuICAgICAgICB7XG4gICAgICAgICAgICBjaGVja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2hlY2tCdXR0b25BZGRFdmVudExpc3RlbmVycyhjaGVja0J1dHRvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrQnV0dG9uQWRkRXZlbnRMaXN0ZW5lcnMoY2hlY2tCdXR0b24pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKCEoY2hlY2tCdXR0b24uY2xvc2VzdCgnLnRvZG8nKS5jbGFzc0xpc3QuY29udGFpbnMoJ2RvbmUnKSkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYoIShjaGVja0J1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrZWQnKSkpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjaGVja0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYoY2hlY2tCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVja2VkJykpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjaGVja0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdjaGVja2VkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG1haW5DaGVja0J1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNtYWluQ0InKSk7XG4gICAgICAgIG1haW5DaGVja0J1dHRvbnMuZm9yRWFjaChjaGVja0J1dHRvbiA9PiBcbiAgICAgICAge1xuICAgICAgICAgICAgY2hlY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG1haW5DQkFkZEV2ZW50TGlzdGVuZXJzKGNoZWNrQnV0dG9uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgZnVuY3Rpb24gbWFpbkNCQWRkRXZlbnRMaXN0ZW5lcnMoY2hlY2tCdXR0b24pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCB0b2RvID0gY2hlY2tCdXR0b24uY2xvc2VzdCgnZGl2LnRvZG8nKTtcbiAgICAgICAgICAgIGxldCBkYXRlSW5wdXQgPSB0b2RvLnF1ZXJ5U2VsZWN0b3IoJy5kZGF0ZS1pbnB1dCcpO1xuICAgICAgICAgICAgaWYoY2hlY2tCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVja2VkJykpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2hlY2tCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2tlZCcpO1xuICAgICAgICAgICAgICAgIHRvZG8uY2xhc3NMaXN0LnJlbW92ZSgnZG9uZScpO1xuICAgICAgICAgICAgICAgIGRhdGVJbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ3JlYWRvbmx5Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKCEoY2hlY2tCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVja2VkJykpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNoZWNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcbiAgICAgICAgICAgICAgICBsZXQgaWNvbiA9IHRvZG8ucXVlcnlTZWxlY3RvcignLnRpdGxlLWVkaXQtaWNvbicpO1xuICAgICAgICAgICAgICAgIGlmKGljb24uZ2V0QXR0cmlidXRlKCdpZCcpID09ICdlZGl0LW1vZGUnKVxuICAgICAgICAgICAgICAgICAgICBlZGl0SWNvbkFkZEV2ZW50TGlzdGVuZXJzKGljb24pO1xuICAgICAgICAgICAgICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJycpO1xuICAgICAgICAgICAgICAgIHRvZG8uY2xhc3NMaXN0LmFkZCgnZG9uZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHByaW9yaXR5U3Bpbm5lcnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFuZ2UtcHJpb3JpdHknKSk7XG4gICAgICAgIHByaW9yaXR5U3Bpbm5lcnMuZm9yRWFjaChwcmlvcml0eVNwaW5uZXIgPT4gXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByaW9yaXR5U3Bpbm5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlTcGlubmVyc0FkZEV2ZW50TGlzdGVuZXJzKHByaW9yaXR5U3Bpbm5lcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZ1bmN0aW9uIHByaW9yaXR5U3Bpbm5lcnNBZGRFdmVudExpc3RlbmVycyhwcmlvcml0eVNwaW5uZXIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKCEocHJpb3JpdHlTcGlubmVyLmNsb3Nlc3QoJy50b2RvJykuY2xhc3NMaXN0LmNvbnRhaW5zKCdkb25lJykpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCBpZCA9IHByaW9yaXR5U3Bpbm5lci5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgICAgICAgICAgbGV0IHByaW9yaXR5Q29udGVudCA9IHByaW9yaXR5U3Bpbm5lci5jbG9zZXN0KCcudG9kby1wcmlvcml0eS1jb250YWluZXInKS5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHktaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBwcmlvcml0eUNvbnRlbnQudmFsdWU7XG5cbiAgICAgICAgICAgICAgICBpZihpZCA9PSAnc3VicycpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2godmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2xvdycgOiB2YWx1ZSA9ICdoaWdoJzsgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdub3JtYWwnIDogdmFsdWUgPSAnbG93JzsgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdoaWdoJyA6IHZhbHVlID0gJ25vcm1hbCc7IGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWxzZSBpZihpZCA9PSAnYWRkJylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCh2YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnbG93JyA6IHZhbHVlID0gJ25vcm1hbCc7IGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnbm9ybWFsJyA6IHZhbHVlID0gJ2hpZ2gnOyBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2hpZ2gnIDogdmFsdWUgPSAnbG93JzsgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlDb250ZW50LnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdG9nZ2xlQnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZ2dsZS1pbWcnKSk7XG4gICAgICAgIHRvZ2dsZUJ1dHRvbnMuZm9yRWFjaCggKHRvZ2dsZUJ1dHRvbikgPT4gXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb2plY3RUb2dnbGVzQWRkRXZlbnRMaXN0ZW5lcnModG9nZ2xlQnV0dG9uKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZ1bmN0aW9uIHByb2plY3RUb2dnbGVzQWRkRXZlbnRMaXN0ZW5lcnModG9nZ2xlQnV0dG9uKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgZWxlbWVudHNUb1RvZ2dsZSA9IHRvZ2dsZUJ1dHRvbi5jbG9zZXN0KCcjdG9nZ2xlLWNvbnRhaW5lcicpLnF1ZXJ5U2VsZWN0b3IoJyN0b2dnbGFibGUnKSAucXVlcnlTZWxlY3RvckFsbCgnOnNjb3BlID4gKicpO1xuICAgICAgICAgICAgdG9nZ2xlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZighKHRvZ2dsZUJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3JvdGF0ZWQnKSkpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVCdXR0b24uY2xhc3NMaXN0LmFkZCgncm90YXRlZCcpXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzVG9Ub2dnbGUuZm9yRWFjaCggKGVsZW1lbnRUb1RvZ2dsZSkgPT5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFRvVG9nZ2xlLnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYodG9nZ2xlQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygncm90YXRlZCcpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3JvdGF0ZWQnKVxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50c1RvVG9nZ2xlLmZvckVhY2goIChlbGVtZW50VG9Ub2dnbGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUb1RvZ2dsZS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnZGlzcGxheScpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG5cbiAgICAgICAgfVxuXG4gICAgfSkoKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIFxuICAgIH1cbn1cbikoKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgZG9tTW9kdWxlIH0gZnJvbSAnLi9kb20uanMnO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=