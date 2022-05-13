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
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Lato/Lato-Regular.ttf */ "./src/fonts/Lato/Lato-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: Ubuntu;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n    font-family: Lato;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n* {\n    font-family: Lato;\n    color: white;\n    box-sizing: border-box;\n}\n\nbody {\n    height: 100vh;\n    margin: 0;\n}\n\n.header {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    height: 55px;\n    background-color: #212121;\n}\n\n.heading {\n    font-size: 33px;\n}\n\n.attributes {\n    flex-direction: column;\n    gap: 8px;\n}\n\n.attributes, .git-attrib {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.attribute {\n    text-align: center;\n}\n\n.attribute, .attribute > * {\n    color: #797979;\n    gap: 8px;\n}\n\n.attributes {\n    padding: 5px;\n}\n\n.menu {\n    display: flex;\n    gap: 10px;\n}\n\n.function-button {\n    background-color:#3b3b3b;\n    border: 2px solid #555555;\n    border-radius: 20px;\n    font-size: 15px;\n    padding: 10px;\n    width: 135px;\n    transition: 0.3s;\n}\n\n.add-function:hover, .remove-function:hover {\n    transform: scale(0.96);\n}\n\n\n.main-content {\n    height: calc(100% - 55px);\n    display: flex;\n    background-color: #212121;\n}\n\n.project-category-header {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.side-menu {\n    transition: 0.3s;\n    position: absolute;\n    height: calc(100% - 55px);\n    z-index: 1;\n\n}\n\n.side-menu-elements {\n    box-sizing: border-box;\n    padding: 0 10px 10px 0;\n    width: 300px;\n    background-color: #2d2d2d;\n    border-right: 2px solid #222;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 100%;\n    overflow-y: auto;\n}\n\n.directory {\n    max-height: 500px;\n    margin-left: 10px;\n}\n\n.directory-elements {\n    overflow-x: auto;\n    padding: 10px 0 10px 0px;\n}\n\n.group-project {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.project-category-title {\n    font-size: 20px;\n    transition: 0.3s;\n}\n\n.category-project-icon {\n    min-width: 20px;\n    min-height: 20px;\n    border-radius: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: white;\n    color: black;\n}\n\n#first > .project-category-title {\n    font-size: 27px;\n    font-weight: 600;\n}\n\n#toggle-container > .element-content {\n    margin-left: 5px;\n    padding-left: 4px;\n    border-left: 2px solid #999999;\n}\n\n.toggle-menu {\n    position: absolute;\n    height: 50px;\n    width: 25px;\n    left: 300px;\n    top: 389.5px;\n    background-color: #2d2d2d;\n    border-radius: 0 10px 10px 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 1;\n}\n\n.toggle-menu-icon {\n    width: 40px;\n    transition: 0.3s;\n}\n\n.content {\n    width: calc(100% - 325px);\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    background-color: #212121;\n    margin-left: 325px;\n}\n\n.main-section-window {\n    overflow: auto;\n    width: 98%;\n    height: 98%;\n    margin: auto;\n    border: 2px solid #7e7e7e;\n    border-radius: 5px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px\n}\n\n.main-section-heading {\n    max-width: 350px;\n    min-height: 53px;\n    overflow: auto;\n    margin-top: 10px;\n    font-size: 40px;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.sub-section {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    position: relative;\n}\n\n.sub-section-placeholder {\n    text-align: center;\n}\n\n.sub-heading {\n    width: fit-content;\n    display: flex;\n    align-items: center;\n    margin: auto;\n    gap: 5px;\n}\n\n.toggle {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.sub-heading > .toggle {\n    width: 16px;\n    height: 14px;\n}\n\n.toggle-img {\n    transition: 0.3s;\n    transform: rotate(180deg);\n\n}\n\n.toggle-img.rotated {\n    transform: rotate(90deg);\n}\n\n\n.sub-heading > .heading {\n    display: flex;\n    align-items: center;\n    font-size: 28px;\n    text-align: center;\n    color: white;\n    max-width: 350px;\n    overflow: auto;\n}\n\n.todo {\n    background-color: #292929;\n    font-size: 22px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    border: 2px solid #7e7e7e;\n    margin: 5px;\n    border-radius: 10px;\n    flex-wrap: wrap;\n    transition: 0.3s;\n}\n\n.second-display-menu > .todo {\n    margin: 0;\n    position: relative;\n}\n\n.todo-list {\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n}\n\n.todo.done {\n    opacity: 0.3;\n    border: 2px solid green;\n}\n\n.todo.done >  * {\n    pointer-events: none;\n}\n\n.todo.done > .todo-main >  .check-done{\n    pointer-events: all;\n}\n\n.todo-main {\n    border-radius: 5px;\n    padding: 5px;\n    gap: 5px;\n    width: 100%;\n    display: flex;\n    justify-content: space-around;\n    flex-wrap: wrap;\n}\n\n.checklist-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n}\n\n.todo-checklist {\n    margin: auto;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 3px;\n    width: 100%;\n    background-color: #303030;\n    padding: 5px 0;\n}\n\n.checklist-heading {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.checklist {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.checkbox-container {\n    width: 100%;\n    gap: 5px;\n    display: flex;\n    margin: auto;\n}\n\n.checkbox-container > .check-done-button {\n    margin: 0 !important;\n}\n\n.checklist-header {\n    display: flex;\n    width: fit-content;\n    gap: 5px;\n}\n\n.checklist-header > .toggle > .toggle-img, .project-category-header > .toggle > .toggle-img {\n    width: 13px;\n}\n\n.checkbox-label {\n    display: flex;\n    gap: 5px;\n    font-size: 18px;\n    justify-content: flex-start;\n    max-width: 300px;\n    overflow-wrap: anywhere;\n}\n\n.checkbox-input {\n    display: none;\n}\n\n.checkbox-container > .check-done-button {\n    width: 20px;\n    height: 20px;\n}\n\n.checkbox-container > .check-done-button::before {\n    position: relative;\n    top: -6px;\n    font-size: 17px;\n    opacity: 0.2;\n    content: '✓';\n    transition: 0.3s;\n}\n\n.create-checkbox {\n    display: flex;\n    gap: 5px;\n}\n\n.checkbox-title-input {\n    background-color: #272626 !important; \n    border-radius: 5px;\n}\n\n.todo-description-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-bottom: 5px;\n}\n\n.todo-description {\n    width: 100%;\n    padding-bottom: 10px;\n    font-size: 18px;\n    margin: auto;\n    text-align: center;\n}\n\n.todo-period-category {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 7px;\n}\n\n.heading {\n    font-size: 32px;\n    overflow-x: auto;\n    white-space: nowrap;\n}\n\n.set-period {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    font-weight: bold;\n}\n\n.period {\n    width: 185px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.period > input[type=\"date\"] {\n    background-color: #232323;\n    outline: none;\n    border: none;\n    padding: 5px;\n    border-radius: 5px;\n    width: 140px;\n}\n\n\n.round-button, .check-done-button {\n    margin: auto;\n    width: 28px;\n    border-radius: 100%;\n    height: 28px;\n    border: 1px solid white;\n    text-align: center;\n}\n\n.round-button#subs:hover {\n    background-color: red;\n}\n\n.round-button#subs:hover::before {\n    color: #292929;\n}\n\n.round-button#add:hover {\n    background-color: green;\n}\n\n.round-button#add:hover::before {\n    color: #292929;\n}\n\n.round-button#subs::before, .round-button#add::before{\n    transition: 0.3s;\n    position: relative;\n    font-size: 50px;\n    content: '-';\n    color: red;\n}\n\n.round-button#subs::before {\n    top: -20.5px;\n}\n\n.round-button#add::before {\n    font-size: 30px;\n    top: -6px;\n    left: -0.5px;\n    content: '+';\n    color: green;\n}\n\n.todo-duedate, .todo-title, .todo-priority-container, .check-done {\n    width: 220px;\n}    \n\n.todo-priority-container {\n    display: flex;\n}\n\n.todo-title {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n}\n\n.todo-duedate, .todo-priority {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    gap: 3px;\n}    \n\n.todo-label {\n    margin-left: auto;\n    margin-right: auto;\n    width: fit-content;\n    padding: 1px 5px;\n    border-bottom: 1px solid white;\n}\n\n.check-done {\n    display: flex;\n    align-items: center;\n}\n\n.ddate-input, .priority-value, .title-input, .todo-title-content, .checkbox-title-input, .set-c-p-input {\n    text-align: center;\n    font-size: 18px;\n    outline: none;\n    border: none;\n    background-color: inherit;\n}\n\n.priority-value, .title-input {\n    -webkit-appearance: none;\n    appearance: none;\n}\n\n.ddate-input, .priority-value {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.ddate-input {\n    width: 129px;\n}\n\n.priority-value {\n    width: 70px;\n}\n\n.title-input {\n    width: 185px;\n    font-size: 20px;\n    background-color: #2d2d2d;\n    border-radius: 5px;\n}\n\n.description-input {\n    outline: none;\n    border: none;\n    background-color: #2d2d2d;\n    height: 90%;\n    width: 90%;\n    border-radius: 5px;\n    padding: 5px;\n}\n\n.todo-title-content {\n    width: fit-content;\n    max-width: 220px;\n    max-height: 55px;\n    overflow-x: auto;\n    font-size: 20px;\n    margin-left: 31px;\n}\n\n.text-edit-button {\n    width: 26px;\n    height: 26px;\n}\n\n.check-done-input {\n    display: none;\n}\n\n.check-done-button-container {\n    margin: auto;\n}\n\n.check-done-button {\n    margin: auto;\n    width: 28px;\n    border-radius: 100%;\n    height: 28px;\n    border: 1px solid white;\n    text-align: center;\n}\n\n.check-done-button::before {\n    position: relative;\n    top: -4px;\n    font-size: 23px;\n    opacity: 0.2;\n    content: '✓';\n    transition: 0.3s;\n}\n\n.check-done-button:hover {\n    background-color: green;\n}\n\n.check-done-button:hover::before {\n    opacity: 1;\n}\n\n.check-done-button.checked::before {\n    opacity: 1;\n}\n\n.checked {\n    opacity: 1;\n    background-color: green;\n}\n\n\n/* width */\n::-webkit-scrollbar {\n    height: 5px;\n  }\n::-webkit-scrollbar {\n    height: 5px;\n    width: 8px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n    background: #222;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n    background: rgb(19, 19, 19);\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n    background: #555;\n}\n\nbutton {\n    -webkit-appearance: none;\n    appearance: none;\n    background-color: inherit;\n    border: 0;\n    outline: none;\n    padding: 0;\n}\n\n.second-display {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    background-color: rgb(0 0 0 / 30%);\n    justify-content: center;\n    align-items: center;\n    z-index: 2;\n}\n\n.second-display-menu {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n}\n\n.set-category-project {\n}\n\n.set-category-project-title {\n    background-color: #111111;\n    padding: 20px;\n    border-radius: 5px;\n}\n\n.set-c-p-label {\n    font-size: 38px;\n    text-align: center;\n}\n\n.set-c-p-input {\n    font-size: 30px;\n    background-color: #191919;\n    border-radius: 5px;\n}\n\n.select-element-menu {\n    margin: auto;\n    background-color: #111111;\n    border-radius: 5px;\n    display: flex;\n    flex-direction: column;\n\n}\n\n.select-element-menu button:first-of-type {\n    border-top: none;\n    border-radius: 5px;\n}\n\n.select-element-menu button:last-of-type {\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n\n.sem-option {\n    width: 300px;\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 28px;\n    border-top: 1px solid gray;\n}\n\n.sem-option:hover {\n    background-color: #1a1a1a;\n}\n\n.close-button {\n    transition: 0.3s;\n    width: 20px;\n    height: 20px;\n    border-top-right-radius: 7px;\n    border-bottom-left-radius: 7px;\n    position: absolute;\n    right: 0;\n    top: 0;\n    font-size: 18px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: red;\n    z-index: 1;\n}\n\n.close-button:hover {\n    background-color: white;\n    color: red;\n}\n\n.create-button {\n    width: 100px;\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #252525;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n\n.create-button:hover {\n    transition: 0.3s;\n    transform: scale(0.95) translateY(-0.5px);\n}\n\n.green-text-element {\n    color: #7cd47c;\n}\n\n.red-text-element {\n    color: #ec5c5c;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: Ubuntu;\n    src: url(fonts/Ubuntu/Ubuntu-Regular.ttf);\n}\n\n@font-face {\n    font-family: Lato;\n    src: url(fonts/Lato/Lato-Regular.ttf);\n}\n\n* {\n    font-family: Lato;\n    color: white;\n    box-sizing: border-box;\n}\n\nbody {\n    height: 100vh;\n    margin: 0;\n}\n\n.header {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    height: 55px;\n    background-color: #212121;\n}\n\n.heading {\n    font-size: 33px;\n}\n\n.attributes {\n    flex-direction: column;\n    gap: 8px;\n}\n\n.attributes, .git-attrib {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.attribute {\n    text-align: center;\n}\n\n.attribute, .attribute > * {\n    color: #797979;\n    gap: 8px;\n}\n\n.attributes {\n    padding: 5px;\n}\n\n.menu {\n    display: flex;\n    gap: 10px;\n}\n\n.function-button {\n    background-color:#3b3b3b;\n    border: 2px solid #555555;\n    border-radius: 20px;\n    font-size: 15px;\n    padding: 10px;\n    width: 135px;\n    transition: 0.3s;\n}\n\n.add-function:hover, .remove-function:hover {\n    transform: scale(0.96);\n}\n\n\n.main-content {\n    height: calc(100% - 55px);\n    display: flex;\n    background-color: #212121;\n}\n\n.project-category-header {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.side-menu {\n    transition: 0.3s;\n    position: absolute;\n    height: calc(100% - 55px);\n    z-index: 1;\n\n}\n\n.side-menu-elements {\n    box-sizing: border-box;\n    padding: 0 10px 10px 0;\n    width: 300px;\n    background-color: #2d2d2d;\n    border-right: 2px solid #222;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 100%;\n    overflow-y: auto;\n}\n\n.directory {\n    max-height: 500px;\n    margin-left: 10px;\n}\n\n.directory-elements {\n    overflow-x: auto;\n    padding: 10px 0 10px 0px;\n}\n\n.group-project {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.project-category-title {\n    font-size: 20px;\n    transition: 0.3s;\n}\n\n.category-project-icon {\n    min-width: 20px;\n    min-height: 20px;\n    border-radius: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: white;\n    color: black;\n}\n\n#first > .project-category-title {\n    font-size: 27px;\n    font-weight: 600;\n}\n\n#toggle-container > .element-content {\n    margin-left: 5px;\n    padding-left: 4px;\n    border-left: 2px solid #999999;\n}\n\n.toggle-menu {\n    position: absolute;\n    height: 50px;\n    width: 25px;\n    left: 300px;\n    top: 389.5px;\n    background-color: #2d2d2d;\n    border-radius: 0 10px 10px 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 1;\n}\n\n.toggle-menu-icon {\n    width: 40px;\n    transition: 0.3s;\n}\n\n.content {\n    width: calc(100% - 325px);\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    background-color: #212121;\n    margin-left: 325px;\n}\n\n.main-section-window {\n    overflow: auto;\n    width: 98%;\n    height: 98%;\n    margin: auto;\n    border: 2px solid #7e7e7e;\n    border-radius: 5px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px\n}\n\n.main-section-heading {\n    max-width: 350px;\n    min-height: 53px;\n    overflow: auto;\n    margin-top: 10px;\n    font-size: 40px;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.sub-section {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    position: relative;\n}\n\n.sub-section-placeholder {\n    text-align: center;\n}\n\n.sub-heading {\n    width: fit-content;\n    display: flex;\n    align-items: center;\n    margin: auto;\n    gap: 5px;\n}\n\n.toggle {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.sub-heading > .toggle {\n    width: 16px;\n    height: 14px;\n}\n\n.toggle-img {\n    transition: 0.3s;\n    transform: rotate(180deg);\n\n}\n\n.toggle-img.rotated {\n    transform: rotate(90deg);\n}\n\n\n.sub-heading > .heading {\n    display: flex;\n    align-items: center;\n    font-size: 28px;\n    text-align: center;\n    color: white;\n    max-width: 350px;\n    overflow: auto;\n}\n\n.todo {\n    background-color: #292929;\n    font-size: 22px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    border: 2px solid #7e7e7e;\n    margin: 5px;\n    border-radius: 10px;\n    flex-wrap: wrap;\n    transition: 0.3s;\n}\n\n.second-display-menu > .todo {\n    margin: 0;\n    position: relative;\n}\n\n.todo-list {\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n}\n\n.todo.done {\n    opacity: 0.3;\n    border: 2px solid green;\n}\n\n.todo.done >  * {\n    pointer-events: none;\n}\n\n.todo.done > .todo-main >  .check-done{\n    pointer-events: all;\n}\n\n.todo-main {\n    border-radius: 5px;\n    padding: 5px;\n    gap: 5px;\n    width: 100%;\n    display: flex;\n    justify-content: space-around;\n    flex-wrap: wrap;\n}\n\n.checklist-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n}\n\n.todo-checklist {\n    margin: auto;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 3px;\n    width: 100%;\n    background-color: #303030;\n    padding: 5px 0;\n}\n\n.checklist-heading {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.checklist {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.checkbox-container {\n    width: 100%;\n    gap: 5px;\n    display: flex;\n    margin: auto;\n}\n\n.checkbox-container > .check-done-button {\n    margin: 0 !important;\n}\n\n.checklist-header {\n    display: flex;\n    width: fit-content;\n    gap: 5px;\n}\n\n.checklist-header > .toggle > .toggle-img, .project-category-header > .toggle > .toggle-img {\n    width: 13px;\n}\n\n.checkbox-label {\n    display: flex;\n    gap: 5px;\n    font-size: 18px;\n    justify-content: flex-start;\n    max-width: 300px;\n    overflow-wrap: anywhere;\n}\n\n.checkbox-input {\n    display: none;\n}\n\n.checkbox-container > .check-done-button {\n    width: 20px;\n    height: 20px;\n}\n\n.checkbox-container > .check-done-button::before {\n    position: relative;\n    top: -6px;\n    font-size: 17px;\n    opacity: 0.2;\n    content: '✓';\n    transition: 0.3s;\n}\n\n.create-checkbox {\n    display: flex;\n    gap: 5px;\n}\n\n.checkbox-title-input {\n    background-color: #272626 !important; \n    border-radius: 5px;\n}\n\n.todo-description-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-bottom: 5px;\n}\n\n.todo-description {\n    width: 100%;\n    padding-bottom: 10px;\n    font-size: 18px;\n    margin: auto;\n    text-align: center;\n}\n\n.todo-period-category {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 7px;\n}\n\n.heading {\n    font-size: 32px;\n    overflow-x: auto;\n    white-space: nowrap;\n}\n\n.set-period {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    font-weight: bold;\n}\n\n.period {\n    width: 185px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.period > input[type=\"date\"] {\n    background-color: #232323;\n    outline: none;\n    border: none;\n    padding: 5px;\n    border-radius: 5px;\n    width: 140px;\n}\n\n\n.round-button, .check-done-button {\n    margin: auto;\n    width: 28px;\n    border-radius: 100%;\n    height: 28px;\n    border: 1px solid white;\n    text-align: center;\n}\n\n.round-button#subs:hover {\n    background-color: red;\n}\n\n.round-button#subs:hover::before {\n    color: #292929;\n}\n\n.round-button#add:hover {\n    background-color: green;\n}\n\n.round-button#add:hover::before {\n    color: #292929;\n}\n\n.round-button#subs::before, .round-button#add::before{\n    transition: 0.3s;\n    position: relative;\n    font-size: 50px;\n    content: '-';\n    color: red;\n}\n\n.round-button#subs::before {\n    top: -20.5px;\n}\n\n.round-button#add::before {\n    font-size: 30px;\n    top: -6px;\n    left: -0.5px;\n    content: '+';\n    color: green;\n}\n\n.todo-duedate, .todo-title, .todo-priority-container, .check-done {\n    width: 220px;\n}    \n\n.todo-priority-container {\n    display: flex;\n}\n\n.todo-title {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n}\n\n.todo-duedate, .todo-priority {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    gap: 3px;\n}    \n\n.todo-label {\n    margin-left: auto;\n    margin-right: auto;\n    width: fit-content;\n    padding: 1px 5px;\n    border-bottom: 1px solid white;\n}\n\n.check-done {\n    display: flex;\n    align-items: center;\n}\n\n.ddate-input, .priority-value, .title-input, .todo-title-content, .checkbox-title-input, .set-c-p-input {\n    text-align: center;\n    font-size: 18px;\n    outline: none;\n    border: none;\n    background-color: inherit;\n}\n\n.priority-value, .title-input {\n    -webkit-appearance: none;\n    appearance: none;\n}\n\n.ddate-input, .priority-value {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.ddate-input {\n    width: 129px;\n}\n\n.priority-value {\n    width: 70px;\n}\n\n.title-input {\n    width: 185px;\n    font-size: 20px;\n    background-color: #2d2d2d;\n    border-radius: 5px;\n}\n\n.description-input {\n    outline: none;\n    border: none;\n    background-color: #2d2d2d;\n    height: 90%;\n    width: 90%;\n    border-radius: 5px;\n    padding: 5px;\n}\n\n.todo-title-content {\n    width: fit-content;\n    max-width: 220px;\n    max-height: 55px;\n    overflow-x: auto;\n    font-size: 20px;\n    margin-left: 31px;\n}\n\n.text-edit-button {\n    width: 26px;\n    height: 26px;\n}\n\n.check-done-input {\n    display: none;\n}\n\n.check-done-button-container {\n    margin: auto;\n}\n\n.check-done-button {\n    margin: auto;\n    width: 28px;\n    border-radius: 100%;\n    height: 28px;\n    border: 1px solid white;\n    text-align: center;\n}\n\n.check-done-button::before {\n    position: relative;\n    top: -4px;\n    font-size: 23px;\n    opacity: 0.2;\n    content: '✓';\n    transition: 0.3s;\n}\n\n.check-done-button:hover {\n    background-color: green;\n}\n\n.check-done-button:hover::before {\n    opacity: 1;\n}\n\n.check-done-button.checked::before {\n    opacity: 1;\n}\n\n.checked {\n    opacity: 1;\n    background-color: green;\n}\n\n\n/* width */\n::-webkit-scrollbar {\n    height: 5px;\n  }\n::-webkit-scrollbar {\n    height: 5px;\n    width: 8px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n    background: #222;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n    background: rgb(19, 19, 19);\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n    background: #555;\n}\n\nbutton {\n    -webkit-appearance: none;\n    appearance: none;\n    background-color: inherit;\n    border: 0;\n    outline: none;\n    padding: 0;\n}\n\n.second-display {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    background-color: rgb(0 0 0 / 30%);\n    justify-content: center;\n    align-items: center;\n    z-index: 2;\n}\n\n.second-display-menu {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n}\n\n.set-category-project {\n}\n\n.set-category-project-title {\n    background-color: #111111;\n    padding: 20px;\n    border-radius: 5px;\n}\n\n.set-c-p-label {\n    font-size: 38px;\n    text-align: center;\n}\n\n.set-c-p-input {\n    font-size: 30px;\n    background-color: #191919;\n    border-radius: 5px;\n}\n\n.select-element-menu {\n    margin: auto;\n    background-color: #111111;\n    border-radius: 5px;\n    display: flex;\n    flex-direction: column;\n\n}\n\n.select-element-menu button:first-of-type {\n    border-top: none;\n    border-radius: 5px;\n}\n\n.select-element-menu button:last-of-type {\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n\n.sem-option {\n    width: 300px;\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 28px;\n    border-top: 1px solid gray;\n}\n\n.sem-option:hover {\n    background-color: #1a1a1a;\n}\n\n.close-button {\n    transition: 0.3s;\n    width: 20px;\n    height: 20px;\n    border-top-right-radius: 7px;\n    border-bottom-left-radius: 7px;\n    position: absolute;\n    right: 0;\n    top: 0;\n    font-size: 18px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: red;\n    z-index: 1;\n}\n\n.close-button:hover {\n    background-color: white;\n    color: red;\n}\n\n.create-button {\n    width: 100px;\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #252525;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n\n.create-button:hover {\n    transition: 0.3s;\n    transform: scale(0.95) translateY(-0.5px);\n}\n\n.green-text-element {\n    color: #7cd47c;\n}\n\n.red-text-element {\n    color: #ec5c5c;\n}"],"sourceRoot":""}]);
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

/***/ "./src/graphics/Arrow-down.svg":
/*!*************************************!*\
  !*** ./src/graphics/Arrow-down.svg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "6722e7abac9e30b021bb4af79228949c.svg");

/***/ }),

/***/ "./src/graphics/GitHub-Mark-Light-32px.png":
/*!*************************************************!*\
  !*** ./src/graphics/GitHub-Mark-Light-32px.png ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "266ca63177bca6f330a74e83fdc63178.png");

/***/ }),

/***/ "./src/graphics/edit-icon.png":
/*!************************************!*\
  !*** ./src/graphics/edit-icon.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "3acfbcb8327bff2ba64e556b326af324.png");

/***/ }),

/***/ "./src/graphics/save-icon.png":
/*!************************************!*\
  !*** ./src/graphics/save-icon.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "641f6fb99488658b44ed94228cc47851.png");

/***/ }),

/***/ "./src/graphics/toggle.png":
/*!*********************************!*\
  !*** ./src/graphics/toggle.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "df835655999d7aee38a866d85d71600e.png");

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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ "./src/logic.js");
/* harmony import */ var _graphics_save_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graphics/save-icon.png */ "./src/graphics/save-icon.png");
/* harmony import */ var _graphics_edit_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graphics/edit-icon.png */ "./src/graphics/edit-icon.png");
/* harmony import */ var _graphics_toggle_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graphics/toggle.png */ "./src/graphics/toggle.png");





const domModule = (function ()
{
    function adjustElementToWindowSize()
    {
        const width = window.innerWidth || document.documentElement.clientWidth
        || document.body.clientWidth;
        const content = document.querySelector('.content');
        if (width < 600)
        {
            content.style.setProperty('margin-left', '25px');
            content.style.setProperty('width', '100%');
        }
        else if (content.style.getPropertyValue('margin-left') !== '325px'
            && document.querySelector('.toggle-menu-icon').style.getPropertyValue('transform') !== 'rotate(-90deg)')
        {
            content.style.setProperty('margin-left', '325px');
        }
    }

    adjustElementToWindowSize();

    window.addEventListener('resize', () =>
    {
        adjustElementToWindowSize();
    }, true);

    const toggleMenu = document.querySelector('.toggle-menu');
    toggleMenu.addEventListener('click', () =>
    {
        const toggleIcon = toggleMenu.querySelector('.toggle-menu-icon');
        if (toggleIcon.style.getPropertyValue('transform') === 'rotate(90deg)')
        {
            toggleIcon.style.setProperty('transform', 'rotate(-90deg)');
            const content = document.querySelector('.content');
            content.style.setProperty('width', 'calc(100% - 25px)');
            content.style.setProperty('margin-left', '25px');
            toggleMenu.closest('.side-menu').style.setProperty('transform', 'translateX(-300px)');
        }
        else
        {
            toggleIcon.style.setProperty('transform', 'rotate(90deg)');
            const content = document.querySelector('.content');
            content.style.setProperty('width', 'calc(100% - 325px)');
            content.style.setProperty('margin-left', '325px');
            toggleMenu.closest('.side-menu').style.removeProperty('transform');
            adjustElementToWindowSize();
        }
    });

    let addFunctionOn = false;
    let removeFunctionOn = false;

    const periodDateInputs = document.querySelector('.set-period').querySelectorAll('input[type="date"]');
    let today = new Date();
    today = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    periodDateInputs.forEach((input) =>
    {
        input.value = today;
        input.addEventListener('change', () =>
        {
            periodDateInputChangeAction();
        });
    });
    periodDateInputChangeAction();
    function periodDateInputChangeAction()
    {
        const from = periodDateInputs[0].value;
        const to = periodDateInputs[1].value;
        let todosInPeriod = [];
        const elementContent = document.querySelector('.todo-period-list').querySelector('.element-content');
        if (from <= to)
        {
            todosInPeriod = _logic__WEBPACK_IMPORTED_MODULE_0__["default"].todos.filter((todo) => (todo.duedate >= from
                && todo.duedate <= to));
            if (todosInPeriod.length !== 0)
            {
                elementContent.textContent = '';
                todosInPeriod.forEach((todo) =>
                {
                    const newTodo = createProjectElement(-1, todo);
                    newTodo.addEventListener('click', () =>
                    {
                        addToElementAction(document.querySelector(`[data-id="${todo.route[todo.route.length - 1]}"]`));
                    });
                });
            }
        }
        else
        {
            elementContent.textContent = '-';
        }
    }
    function periodCheckRemoved()
    {
        const container = document.querySelector('.todo-period-list').querySelector('.element-content');

        if (container.lastChild)
        {
            const elements = container.querySelectorAll('.project-category-header');
            const directory = document.querySelector('.directory');
            for (let i = 0; i < elements.length; i++)
            {
                const id = +elements[i].getAttribute('data-id');
                if (!(directory.querySelector(`[data-id="${id}"]`)))
                {
                    container.removeChild(elements[i]);
                }
            }

            if (!(container.lastChild))
            {
                container.textContent = '-';
            }
        }
    }

    function checkValidityTextEmpty(textInput)
    {
        if (textInput.validity.valueMissing)
        {
            textInput.setCustomValidity('Must consist at least one character');
            textInput.reportValidity();
            return false;
        }
        return true;
    }

    const editIcons = Array.from(document.querySelectorAll('.text-edit-button'));
    editIcons.forEach((editIcon) =>
    {
        editIcon.addEventListener('click', () =>
        {
            editIconAddEventListeners(editIcon);
        });
    });
    function editIconAddEventListeners(editIcon)
    {
        const parent = editIcon.parentElement;
        const input = parent.querySelector('input');
        const contentDiv = parent.querySelector('#text-content');
        const img = editIcon.querySelector('img');
        if (editIcon.getAttribute('id') === 'read-mode')
        {
            img.setAttribute('src', _graphics_save_icon_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
            img.setAttribute('alt', 'save indicator icon');
            editIcon.setAttribute('id', 'edit-mode');
            contentDiv.style.setProperty('display', 'none');
            input.style.removeProperty('display');
            input.value = contentDiv.textContent;
        }
        else if (editIcon.getAttribute('id') === 'edit-mode')
        {
            if (checkValidityTextEmpty(input) || input.getAttribute('validate-empty') == 'false')
            {
                contentDiv.textContent = input.value;
                img.setAttribute('src', _graphics_edit_icon_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
                img.setAttribute('alt', 'edit indicator icon');
                editIcon.setAttribute('id', 'read-mode');
                contentDiv.style.removeProperty('display');
                input.style.setProperty('display', 'none');
            }
        }
    }

    const checkButtons = Array.from(document.querySelectorAll('.check-done-button')).filter((cb) => cb.getAttribute('id') != 'mainCB');
    checkButtons.forEach((checkButton) =>
    {
        checkButton.addEventListener('click', () =>
        {
            checkButtonAddEventListeners(checkButton);
        });
    });
    function checkButtonAddEventListeners(checkButton)
    {
        if (!(checkButton.classList.contains('checked')))
        {
            checkButton.classList.add('checked');
        }
        else if (checkButton.classList.contains('checked'))
        {
            checkButton.classList.remove('checked');
        }
    }

    const mainCheckButtons = Array.from(document.querySelectorAll('#mainCB'));
    mainCheckButtons.forEach((checkButton) =>
    {
        checkButton.addEventListener('click', () =>
        {
            mainCBAddEventListeners(checkButton);
        });
    });
    function mainCBAddEventListeners(checkButton)
    {
        const todo = checkButton.closest('div.todo');
        const dateInput = todo.querySelector('.ddate-input');
        if (checkButton.classList.contains('checked'))
        {
            checkButton.classList.remove('checked');
            todo.classList.remove('done');
            dateInput.removeAttribute('readonly');
        }
        else if (!(checkButton.classList.contains('checked')))
        {
            checkButton.classList.add('checked');
            const icons = todo.querySelectorAll('.text-edit-button');
            icons.forEach((icon) =>
            {
                if (icon.getAttribute('id') === 'edit-mode')
                {
                    editIconAddEventListeners(icon);
                }
            });
            dateInput.setAttribute('readonly', '');
            todo.classList.add('done');
        }
    }

    const prioritySpinners = Array.from(document.querySelectorAll('.change-priority'));
    prioritySpinners.forEach((prioritySpinner) =>
    {
        prioritySpinner.addEventListener('click', () =>
        {
            prioritySpinnersAddEventListeners(prioritySpinner);
        });
    });
    function prioritySpinnersAddEventListeners(prioritySpinner)
    {
        const id = prioritySpinner.getAttribute('id');
        const priorityContent = prioritySpinner.closest('.todo-priority-container').querySelector('.priority-value');
        let value = priorityContent.textContent;

        if (id === 'subs')
        {
            switch (value)
            {
                case 'low': value = 'high'; break;
                case 'normal': value = 'low'; break;
                case 'high': value = 'normal'; break;
            }
        }

        else if (id === 'add')
        {
            switch (value)
            {
                case 'low': value = 'normal'; break;
                case 'normal': value = 'high'; break;
                case 'high': value = 'low'; break;
            }
        }
        priorityContent.textContent = value;
    }

    const toggleButtons = Array.from(document.querySelectorAll('.toggle-img'));
    toggleButtons.forEach((toggleButton) =>
    {
        toggleButton.addEventListener('click', () =>
        {
            projectTogglesAddEventListeners(toggleButton);
        });
    });
    function projectTogglesAddEventListeners(toggleButton)
    {
        const elementsToToggle = toggleButton.closest('#toggle-container').querySelector('#togglable').querySelectorAll(':scope > *');
        if (!(toggleButton.classList.contains('rotated')))
        {
            toggleButton.classList.add('rotated');
            elementsToToggle.forEach((elementToToggle) =>
            {
                elementToToggle.style.setProperty('display', 'none');
            });
        }
        else if (toggleButton.classList.contains('rotated'))
        {
            toggleButton.classList.remove('rotated');
            elementsToToggle.forEach((elementToToggle) =>
            {
                elementToToggle.style.removeProperty('display');
            });
        }
    }

    const addCheckboxButtons = Array.from(document.querySelectorAll('.add-checkbox'));
    addCheckboxButtons.forEach((addCheckboxButton) =>
    {
        addCheckboxButton.addEventListener('click', () =>
        {
            addCheckboxButtonAction(addCheckboxButton);
        });
    });
    function addCheckboxButtonAction(addCheckboxButton)
    {
        const checklistContainer = addCheckboxButton.closest('.checklist-container');
        const checklist = checklistContainer.querySelector('.checklist');
        const titleInput = checklistContainer.querySelector('.checkbox-title-input');

        if (checkValidityTextEmpty(titleInput))
        {
            const checkboxContainer = document.createElement('div');
            checkboxContainer.classList.add('checkbox-container');

            const checkboxButton = document.createElement('div');
            checkboxButton.classList.add('check-done-button');
            checkButtons.push(checkboxButton);
            checkboxButton.addEventListener('click', () =>
            {
                checkButtonAddEventListeners(checkboxButton);
            });

            const checkboxLabel = document.createElement('div');
            checkboxLabel.classList.add('checkbox-label');

            checkboxContainer.appendChild(checkboxButton);
            checkboxContainer.appendChild(checkboxLabel);
            checkboxLabel.textContent = titleInput.value;
            titleInput.value = '';

            checklist.insertBefore(checkboxContainer, checklist.querySelector('.create-checkbox'));
        }
    }

    const closeSDButton = document.querySelector('#close-second-display');
    closeSDButton.addEventListener('click', () =>
    {
        closeSDButtonActions();
    });
    function closeSDButtonActions()
    {
        document.querySelector('.second-display').style.setProperty('display', 'none');
    }

    generateDirectory(_logic__WEBPACK_IMPORTED_MODULE_0__["default"].root); //! !!

    const addToElements = Array.from(document.querySelectorAll('.category')).concat(Array.from(document.querySelectorAll('.project')));
    addToElements.forEach((addToElement) =>
    {
        addToElement.addEventListener('mousedown', (e) =>
        {
            addToElementAction(addToElement);
            e.stopPropagation();
        });
    });
    function addToElementAction(addToElement)
    {
        if (addFunctionOn === false && removeFunctionOn === false)
        {
            const lastDisplayed = document.querySelector('[data-displayed="true"]');
            if (lastDisplayed)
            {
                lastDisplayed.removeAttribute('data-displayed');
            }
            addToElement.setAttribute('data-displayed', 'true');
            generateDirectoryElement(addToElement);
        }
    }
    function generateDirectoryElement(addToElement)
    {
        const mainSection = document.querySelector('.main-section-window');
        const subSection = mainSection.querySelector('.sub-section');
        if (subSection.lastChild)
        {
            removeChildren(subSection);
        }
        addToElement = _logic__WEBPACK_IMPORTED_MODULE_0__["default"].findByID(getElementRoute(addToElement));
        mainSection.querySelector('.main-section-heading').textContent = addToElement.title;
        addToElement.contents.forEach((element) =>
        {
            if (element.constructor.name === 'Project')
            {
                const project = document.createElement('div');
                project.classList.add('project');
                project.setAttribute('id', 'toggle-container');

                const subHeading = document.createElement('div');
                subHeading.classList.add('sub-heading');

                const toggle = document.createElement('div');
                toggle.classList.add('toggle');

                const toggleIcon = document.createElement('img');
                toggleIcon.classList.add('toggle-img');
                toggleIcon.setAttribute('src', _graphics_toggle_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
                toggleIcon.setAttribute('alt', 'icon of a toggle');
                toggleButtons.push(_graphics_toggle_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
                toggleIcon.addEventListener('click', () =>
                {
                    projectTogglesAddEventListeners(toggleIcon);
                });

                toggle.appendChild(toggleIcon);

                const heading = document.createElement('div');
                heading.classList.add('heading');
                heading.textContent = element.title;

                subHeading.appendChild(toggle);
                subHeading.appendChild(heading);

                const todoList = document.createElement('div');
                todoList.classList.add('todo-list');
                todoList.setAttribute('id', 'togglable');

                element.contents.forEach((todo) =>
                {
                    const newTodo = createTodo(todo);
                    todoList.appendChild(newTodo);
                });

                project.appendChild(subHeading);
                project.appendChild(todoList);

                document.querySelector('.sub-section').appendChild(project);
            }
            else if (element.constructor.name === 'Category')
            {
                const subHeading = document.createElement('div');
                subHeading.classList.add('sub-heading');
                subHeading.addEventListener('click', () =>
                {
                    const { id } = element;
                    generateDirectoryElement(document.querySelector(`[data-id="${id}"`));
                });

                const heading = document.createElement('div');
                heading.classList.add('heading');
                heading.textContent = element.title;

                subHeading.appendChild(heading);
                document.querySelector('.sub-section').appendChild(subHeading);
            }
            else
            {
                const todo = createTodo(element);
                subSection.appendChild(todo);
                todo.querySelector('.ddate-input').value = element.duedate;
            }
        });
    }

    const addFunctionButton = document.querySelector('.add-function');
    addFunctionButton.addEventListener('click', () =>
    {
        addFunction(addToElements);
    });
    function addFunction(addToElements)
    {
        if (addFunctionOn === false)
        {
            if (removeFunctionOn == true)
            {
                turnOffRemoveFunction(removeElements);
            }
            addFunctionOn = true;
            addToElements.forEach((addToElement) =>
            {
                addToElement.querySelector('.project-category-title').classList.add('green-text-element');

                addToElement.addEventListener('click', (e) =>
                {
                    if (addFunctionOn === true)
                    {
                        const route = getElementRoute(addToElement);
                        const parent = _logic__WEBPACK_IMPORTED_MODULE_0__["default"].findByID(route);
                        generateElementMenu(parent, addToElement, route);
                        turnOffAddFunction(addToElements);
                        e.stopPropagation();
                    }
                });
            });
        }
        else
        {
            turnOffAddFunction(addToElements);
        }
    }
    function turnOffAddFunction(addToElements)
    {
        addFunctionOn = false;
        addToElements.forEach((addToElement) =>
        {
            addToElement.querySelector('.project-category-title').classList.remove('green-text-element');
        });
    }
    function setSecondDisplay()
    {
        document.querySelector('.second-display').style.removeProperty('display', 'none');
    }
    function generateElementMenu(parent, container, route)
    {
        setSecondDisplay();
        let option;
        const { canContent } = parent;
        const menu = document.querySelector('.select-element-menu');
        menu.style.removeProperty('display', 'none');
        canContent.forEach((content) =>
        {
            option = document.createElement('button');
            option.classList.add('sem-option');
            option.textContent = content;
            option.addEventListener('click', () =>
            {
                menu.style.setProperty('display', 'none');
                const createButton = document.querySelector('.create-button');
                createButton.style.removeProperty('display');
                if (content === 'category' || content === 'project')
                {
                    const titleInputMenu = document.querySelector('.set-category-project-title');
                    titleInputMenu.style.removeProperty('display');
                    closeSDButton.addEventListener('click', () =>
                    {
                        titleInputMenu.querySelector('.set-c-p-input').value = '';
                        titleInputMenu.style.setProperty('display', 'none');
                    });
                    createButton.addEventListener('click', () =>
                    {
                        createButtonAction(createButton, parent, content, container, route);
                    }, { once: true });
                }
                else
                {
                    const todo = document.querySelector('.second-display').querySelector('.todo');
                    todo.style.removeProperty('display');
                    closeSDButton.addEventListener('click', () =>
                    {
                        clearAddTodo(todo);
                        todo.style.setProperty('display', 'none');
                    });
                    createButton.addEventListener('click', () =>
                    {
                        createButtonAction(
                            createButton,
                            parent,
                            content,
                            container,
                            route,
                            getTodoValues(todo),
                        );
                    }, { once: true });
                }
            });
            menu.appendChild(option);
        });
        closeSDButton.addEventListener('click', () =>
        {
            removeChildren(menu);
        }, { once: true });
        return menu;
    }
    function removeChildren(parent)
    {
        const removed = [];
        while (parent.firstChild)
        {
            removed.push(parent.lastChild);
            parent.removeChild(parent.lastChild);
        }
        return removed;
    }
    function generateDirectory(directory)
    {
        const directoryContent = directory.contents;

        directoryContent.forEach((element) =>
        {
            if (element.canContent)
            {
                if (element.canContent
                    [0] == 'project')
                {
                    createCategory(directory, element);
                }
                else if (element.canContent[0] === 'todo')
                {
                    createProject(directory, element);
                }
                generateDirectory(element);
            }
            else
            {
                createProjectElement(directory.id, element);
            }
        });
    }
    function createElementContainer(directory, element)
    {
        const elementContainer = document.createElement('div');
        elementContainer.setAttribute('id', 'toggle-container');
        elementContainer.setAttribute('data-id', element.id);
        elementContainer.setAttribute('data-adto', 'true');

        const header = document.createElement('div');
        header.classList.add('project-category-header');

        const toggle = document.createElement('div');
        toggle.classList.add('toggle');

        const toggleIcon = document.createElement('img');
        toggleIcon.classList.add('toggle-img');
        toggleIcon.setAttribute('src', _graphics_toggle_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
        toggleIcon.setAttribute('alt', 'icon of a toggle');
        toggleButtons.push(toggleIcon);
        toggleIcon.addEventListener('click', () =>
        {
            projectTogglesAddEventListeners(toggleIcon);
        });

        const icon = document.createElement('div');
        icon.classList.add('category-project-icon');

        const title = document.createElement('div');
        title.classList.add('project-category-title');
        title.textContent = element.title;

        const elementContainerContent = document.createElement('div');
        elementContainerContent.classList.add('element-content');
        elementContainerContent.setAttribute('id', 'togglable');

        toggle.appendChild(toggleIcon);
        header.appendChild(toggle);
        header.appendChild(icon);
        header.appendChild(title);
        elementContainer.appendChild(header);
        elementContainer.appendChild(elementContainerContent);

        const parent = document.querySelector(`[data-id="${directory.id}"]`).querySelector('.element-content');
        parent.appendChild(elementContainer);

        return elementContainer;
    }
    function createCategory(directory, element)
    {
        const category = createElementContainer(directory, element);
        category.classList.add('category');
        category.querySelector('.category-project-icon').textContent = 'C';
        return category;
    }
    function createProject(directory, element)
    {
        const project = createElementContainer(directory, element);
        project.classList.add('project');
        project.querySelector('.category-project-icon').textContent = 'P';
        return project;
    }
    function createProjectElement(directory, element)
    {
        const projectElementHeader = document.createElement('div');
        projectElementHeader.classList.add('project-category-header');
        projectElementHeader.setAttribute('data-element', 'todo');
        projectElementHeader.setAttribute('data-id', element.id);

        const projectElementIcon = document.createElement('div');
        projectElementIcon.classList.add('category-project-icon');
        projectElementIcon.textContent = 'T';

        const projectElementTitle = document.createElement('div');
        projectElementTitle.classList.add('project-category-title');
        projectElementTitle.textContent = element.title;

        projectElementHeader.appendChild(projectElementIcon);
        projectElementHeader.appendChild(projectElementTitle);

        const parent = document.querySelector(`[data-id="${directory}"]`).querySelector('.element-content');
        parent.appendChild(projectElementHeader);

        return projectElementHeader;
    }
    function clearAddTodo(todo)
    {
        todo.querySelector('.title-input').value = '';
        todo.querySelector('.ddate-input').value = '';
        todo.querySelector('.priority-value').value = 'normal';
        todo.querySelector('.description-input').value = '';
        const checklist = todo.querySelector('.checklist');
        const checkboxes = checklist.querySelectorAll('.checkbox-container');
        checkboxes.forEach((checkbox) =>
        {
            checklist.removeChild(checkbox);
        });
    }
    function createTodo(todoValues)
    {
        const todo = document.createElement('div');
        todo.classList.add('todo');

        const todoMain = document.createElement('div');
        todoMain.classList.add('todo-main');

        const todoTitle = document.createElement('div');
        todoTitle.classList.add('todo-title');

        const todoTitleContent = document.createElement('div');
        todoTitleContent.classList.add('todo-title-content');
        todoTitleContent.setAttribute('id', 'text-content');
        todoTitleContent.textContent = todoValues.title;

        const todoTitleInput = document.createElement('input');
        todoTitleInput.classList.add('title-input');
        todoTitleInput.setAttribute('type', 'text');
        todoTitleInput.setAttribute('maxlength', '20');
        todoTitleInput.setAttribute('style', 'display: none');
        todoTitleInput.setAttribute('required', '');
        todoTitleInput.addEventListener('change', () =>
        {
            todoValues.title = todoTitleInput.value;
        });

        const titleEditButton = document.createElement('button');
        titleEditButton.classList.add('text-edit-button');
        titleEditButton.setAttribute('id', 'read-mode');

        const titleEditIcon = document.createElement('img');
        titleEditIcon.classList.add('edit-icon');
        titleEditIcon.setAttribute('src', _graphics_edit_icon_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
        titleEditIcon.setAttribute('alt', 'edit indicator icon');

        editIcons.push(titleEditButton);
        titleEditButton.addEventListener('click', () =>
        {
            editIconAddEventListeners(titleEditButton);
        });

        titleEditButton.appendChild(titleEditIcon);
        todoTitle.appendChild(todoTitleContent);
        todoTitle.appendChild(todoTitleInput);
        todoTitle.appendChild(titleEditButton);

        const todoDuedate = document.createElement('div');
        todoDuedate.classList.add('todo-duedate');

        const todoDuedateLabel = document.createElement('label');
        todoDuedateLabel.classList.add('todo-label');
        todoDuedateLabel.setAttribute('for', 'dueDate');
        todoDuedateLabel.textContent = 'Due date';

        const todoDuedateInput = document.createElement('input');
        todoDuedateInput.classList.add('ddate-input');
        todoDuedateInput.setAttribute('type', 'date');
        todoDuedateInput.setAttribute('id', 'due-date');
        const dateValue = todoValues.duedate;
        todoDuedateInput.value = dateValue;
        todoDuedateInput.addEventListener('change', () =>
        {
            todoValues.duedate = todoDuedateInput.value;
            periodDateInputChangeAction();
        });

        todoDuedate.appendChild(todoDuedateLabel);
        todoDuedate.appendChild(todoDuedateInput);

        const todoPriorityContainer = document.createElement('div');
        todoPriorityContainer.classList.add('todo-priority-container');

        const changePrioritySubs = document.createElement('div');
        changePrioritySubs.classList.add('change-priority', 'round-button');
        changePrioritySubs.setAttribute('id', 'subs');
        prioritySpinners.push(changePrioritySubs);
        changePrioritySubs.addEventListener('click', () =>
        {
            prioritySpinnersAddEventListeners(changePrioritySubs);
            todoValues.priority = changePrioritySubs.closest('.todo-priority-container').querySelector('.priority-value').textContent;
        });

        const todoPriority = document.createElement('div');
        todoPriority.classList.add('todo-priority');

        const todoPriorityLabel = document.createElement('div');
        todoPriorityLabel.classList.add('todo-label');
        todoPriorityLabel.textContent = 'Priority';

        const todoPriorityValue = document.createElement('div');
        todoPriorityValue.classList.add('priority-value');
        todoPriorityValue.textContent = todoValues.priority;

        const changePriorityAdd = document.createElement('div');
        changePriorityAdd.classList.add('change-priority', 'round-button');
        changePriorityAdd.setAttribute('id', 'add');
        prioritySpinners.push(changePriorityAdd);
        changePriorityAdd.addEventListener('click', () =>
        {
            prioritySpinnersAddEventListeners(changePriorityAdd);
            todoValues.priority = changePriorityAdd.closest('.todo-priority-container').querySelector('.priority-value').textContent;
        });

        todoPriority.appendChild(todoPriorityLabel);
        todoPriority.appendChild(todoPriorityValue);
        todoPriorityContainer.appendChild(changePrioritySubs);
        todoPriorityContainer.appendChild(todoPriority);
        todoPriorityContainer.appendChild(changePriorityAdd);

        const checkDone = document.createElement('div');
        checkDone.classList.add('check-done');

        const checkDoneButtonContainer = document.createElement('div');
        checkDoneButtonContainer.classList.add('check-done-button-container');

        const checkDoneButton = document.createElement('div');
        checkDoneButton.classList.add('check-done-button');
        checkDoneButton.setAttribute('id', 'mainCB');
        mainCheckButtons.push(checkDoneButton);
        checkDoneButton.addEventListener('click', () =>
        {
            mainCBAddEventListeners(checkDoneButton);
        });

        checkDoneButtonContainer.appendChild(checkDoneButton);
        checkDone.appendChild(checkDoneButtonContainer);

        todoMain.appendChild(todoTitle);
        todoMain.appendChild(todoDuedate);
        todoMain.appendChild(todoPriorityContainer);
        todoMain.appendChild(checkDone);

        const todoCheckList = document.createElement('div');
        todoCheckList.classList.add('todo-checklist');
        todoCheckList.setAttribute('id', 'toggle-container');

        const checklistHeader = document.createElement('div');
        checklistHeader.classList.add('checklist-header');

        const checklistToggle = document.createElement('div');
        checklistToggle.classList.add('toggle');

        const checklistToggleImg = document.createElement('img');
        checklistToggleImg.classList.add('toggle-img');
        checklistToggleImg.setAttribute('src', _graphics_toggle_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
        checklistToggleImg.setAttribute('alt', 'icon of a toggle');
        toggleButtons.push(checklistToggleImg);
        checklistToggleImg.addEventListener('click', () =>
        {
            projectTogglesAddEventListeners(checklistToggleImg);
        });

        const checklistHeading = document.createElement('div');
        checklistHeading.classList.add('checklist-heading');
        checklistHeading.textContent = 'Checklist';

        const checklistContainer = document.createElement('div');
        checklistContainer.classList.add('checklist-container');
        checklistContainer.setAttribute('id', 'togglable');

        const checklist = document.createElement('div');
        checklist.classList.add('checklist');

        todoValues.checkboxes.forEach((checkboxValue) =>
        {
            const checkboxContainer = document.createElement('div');
            checkboxContainer.classList.add('checkbox-container');

            const checkboxDoneButton = document.createElement('div');
            checkboxDoneButton.classList.add('check-done-button');
            checkButtons.push(checkboxDoneButton);
            checkboxDoneButton.addEventListener('click', () =>
            {
                checkButtonAddEventListeners(checkboxDoneButton);
            });

            const checkboxLabel = document.createElement('div');
            checkboxLabel.classList.add('checkbox-label');
            checkboxLabel.textContent = checkboxValue;

            checkboxContainer.appendChild(checkboxDoneButton);
            checkboxContainer.appendChild(checkboxLabel);
            checklist.appendChild(checkboxContainer);
        });

        const createCheckbox = document.createElement('div');
        createCheckbox.classList.add('create-checkbox');

        const checkboxTitleInput = document.createElement('input');
        checkboxTitleInput.classList.add('checkbox-title-input');
        checkboxTitleInput.setAttribute('type', 'text');
        checkboxTitleInput.setAttribute('minlength', '1');
        checkboxTitleInput.setAttribute('placeholder', 'checkbox title');
        checkboxTitleInput.setAttribute('maxlength', '30');
        checkboxTitleInput.setAttribute('id', 'checklist-create');
        checkboxTitleInput.setAttribute('required', '');

        const addCheckboxButton = document.createElement('button');
        addCheckboxButton.classList.add('add-checkbox', 'round-button');
        addCheckboxButton.setAttribute('id', 'add');
        addCheckboxButtons.push(addCheckboxButton);
        addCheckboxButton.addEventListener('click', () =>
        {
            todoValues.checkboxes.push(addCheckboxButton.closest('.create-checkbox').querySelector('.checkbox-title-input').value);
            addCheckboxButtonAction(addCheckboxButton);
        });

        createCheckbox.appendChild(checkboxTitleInput);
        createCheckbox.appendChild(addCheckboxButton);

        checklistToggle.appendChild(checklistToggleImg);
        checklistHeader.appendChild(checklistToggle);
        checklistHeader.appendChild(checklistHeading);
        todoCheckList.appendChild(checklistHeader);
        checklistContainer.appendChild(checklist);
        checklistContainer.appendChild(createCheckbox);
        todoCheckList.appendChild(checklistContainer);

        const todoDescriptionContainer = document.createElement('div');
        todoDescriptionContainer.classList.add('todo-description-container');

        const todoDescription = document.createElement('div');
        todoDescription.classList.add('todo-description');
        todoDescription.setAttribute('id', 'text-content');
        todoDescription.textContent = todoValues.description;

        const descriptionInput = document.createElement('input');
        descriptionInput.classList.add('description-input', 'todo-description');
        descriptionInput.setAttribute('type', 'text');
        descriptionInput.setAttribute('maxlength', '200');
        descriptionInput.setAttribute('style', 'display: none');
        descriptionInput.setAttribute('required', '');
        descriptionInput.setAttribute('validate-empty', 'false');
        descriptionInput.addEventListener('change', () =>
        {
            todoValues.description = descriptionInput.value;
        });

        const descriptionEditButton = document.createElement('button');
        descriptionEditButton.classList.add('text-edit-button');
        descriptionEditButton.setAttribute('id', 'read-mode');

        const descriptionEditIcon = document.createElement('img');
        descriptionEditIcon.classList.add('edit-icon');
        descriptionEditIcon.setAttribute('src', _graphics_edit_icon_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
        descriptionEditIcon.setAttribute('alt', 'edit indicator icon');

        editIcons.push(descriptionEditButton);
        descriptionEditButton.addEventListener('click', () =>
        {
            editIconAddEventListeners(descriptionEditButton);
        });

        descriptionEditButton.appendChild(descriptionEditIcon);
        todoDescriptionContainer.appendChild(todoDescription);
        todoDescriptionContainer.appendChild(descriptionInput);
        todoDescriptionContainer.appendChild(descriptionEditButton);

        todo.appendChild(todoMain);
        todo.appendChild(todoCheckList);
        todo.appendChild(todoDescriptionContainer);

        return todo;
    }
    function getTodoValues(todo)
    {
        const title = todo.querySelector('.title-input').value;
        const dueDate = todo.querySelector('.ddate-input').value;
        const priority = todo.querySelector('.priority-value').textContent;

        const checkboxesElements = todo.querySelectorAll('.checkbox-label');
        const checkboxes = [];
        checkboxesElements.forEach((checkbox) =>
        {
            checkboxes.push(checkbox.textContent);
        });

        const description = todo.querySelector('.description-input').value;
        let isDone = false;
        if (todo.querySelector('check-done-button') && todo.querySelector('check-done-button').classList.contains('checked'))
        {
            isDone = true;
        }

        return {
            title,
            dueDate,
            priority,
            checkboxes,
            description,
            isDone,
        };
    }
    function getElementRoute(element)
    {
        const route = [];
        let id;
        if (element.getAttribute('data-element') === 'todo')
        {
            id = element.getAttribute('data-id');
        }
        else
        {
            id = element.closest('[data-adto="true"]').getAttribute('data-id');
        }
        route.push(+id);
        while (+id !== 0)
        {
            element = element.parentElement.closest('[data-adto="true"]');
            id = element.getAttribute('data-id');
            route.push(+id);
        }
        return route.reverse();
    }
    function BCgetInputValue(button)
    {
        let inputToValidate;
        if (button.closest('.second-display-menu').querySelector('.todo').style.getPropertyValue('display') != 'none')
        {
            inputToValidate = button.closest('.second-display-menu').querySelector('.todo').querySelector('.title-input');
        }
        else
        {
            inputToValidate = button.closest('.second-display-menu').querySelector('.set-category-project-title').querySelector('.set-c-p-input');
        }
        if (inputToValidate.validity.valueMissing)
        {
            inputToValidate.setCustomValidity('Must consist at least one character');
            inputToValidate.reportValidity();
        }
        return inputToValidate.value;
    }
    function createButtonAction(button, parent, element, container, route, values)
    {
        const inputValue = BCgetInputValue(button);
        let logicElement;
        let newElement;
        if (inputValue !== '')
        {
            if (element === 'category')
            {
                logicElement = _logic__WEBPACK_IMPORTED_MODULE_0__["default"].createCategory(inputValue, route);
                newElement = createCategory(parent, logicElement);
                newElement.addEventListener('click', () =>
                {
                    addToElementAction(newElement);
                });
            }
            else if (element === 'project')
            {
                logicElement = _logic__WEBPACK_IMPORTED_MODULE_0__["default"].createProject(inputValue, route);
                newElement = createProject(parent, logicElement);
                newElement.addEventListener('click', () =>
                {
                    addToElementAction(newElement);
                });
            }
            else
            {
                logicElement = _logic__WEBPACK_IMPORTED_MODULE_0__["default"].createTodo(
                    inputValue,
                    route,
                    values.dueDate,
                    values.priority,
                    values.checkboxes,
                    values.description,
                    values.isDone,
                );
                newElement = createProjectElement(parent.id, logicElement);
                periodDateInputChangeAction();
            }
            addToElements.push(newElement);
            removeElements.push(newElement);
            if (container.getAttribute('data-displayed') === 'true')
            {
                generateDirectoryElement(container);
            }

            closeSDButton.click();
        }
        else
        {
            button.addEventListener('click', () =>
            {
                createButtonAction(button, parent, element, container, route, values);
            }, { once: true });
        }
    }

    const removeFunctionButton = document.querySelector('.remove-function');
    let removeElements = addToElements.slice(1, addToElements.length).concat(Array.from(document.querySelectorAll('[data-element="todo"]')));
    removeFunctionButton.addEventListener('click', () =>
    {
        removeFunction(removeElements);
    });
    function removeFunction(removeElements)
    {
        if (removeFunctionOn === false)
        {
            if (addFunctionOn === true)
            {
                turnOffAddFunction(addToElements);
            }
            removeFunctionOn = true;
            removeElements.forEach((removeElement) =>
            {
                removeElement.querySelector('.project-category-title').classList.add('red-text-element');

                removeElement.addEventListener('click', () =>
                {
                    if (removeFunctionOn === true)
                    {
                        let index = removeElements.indexOf(removeElement);
                        removeElements.splice(index, 1);
                        if (removeElement.getAttribute('data-element') !== 'todo')
                        {
                            index = addToElements.indexOf(removeElement);
                            addToElements.splice(index, 1);
                        }
                        const route = getElementRoute(removeElement);
                        const logicElement = _logic__WEBPACK_IMPORTED_MODULE_0__["default"].findByID(route);
                        const logicParent = _logic__WEBPACK_IMPORTED_MODULE_0__["default"].findByID(route.slice(0, route.length - 1));
                        const parentContainer = removeElement.parentElement;
                        _logic__WEBPACK_IMPORTED_MODULE_0__["default"].removeElement(logicParent, logicElement);
                        turnOffRemoveFunction(removeElements);
                        if (removeElement.parentElement.parentElement.getAttribute('data-displayed') === 'true')
                        {
                            generateDirectoryElement(removeElement.parentElement.parentElement);
                        }
                        else if (removeElement.parentElement.parentElement.parentElement.parentElement.getAttribute('data-displayed') === 'true')
                        {
                            generateDirectoryElement(removeElement.parentElement.parentElement.parentElement.parentElement);
                        }
                        else if (removeElement.getAttribute('data-displayed') === 'true')
                        {
                            const subSection = document.querySelector('.sub-section');
                            removeChildren(subSection);
                            const placeholder = document.createElement('div');
                            placeholder.classList.add('sub-section-placeholder');
                            placeholder.textContent = 'Click an element from Your directory to view it here';
                            subSection.appendChild(placeholder);

                            document.querySelector('.main-section-heading').textContent = '';
                        }

                        parentContainer.removeChild(removeElement);
                        periodCheckRemoved();
                        removeElement.querySelectorAll('[data-element="todo"]').forEach((todo) =>
                        {
                            _logic__WEBPACK_IMPORTED_MODULE_0__["default"].todosCheckRemoved(+todo.getAttribute('data-id'));
                        });
                    }
                });
            });
        }
        else
        {
            turnOffRemoveFunction(removeElements);
        }
    }
    function turnOffRemoveFunction(removeElements)
    {
        removeFunctionOn = false;
        removeElements.forEach((removeElement) =>
        {
            removeElement.querySelector('.project-category-title').classList.remove('red-text-element');
        });
    }

    return {
    };
}());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domModule);


/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const logicModule = (function ()
{
    let idset = -1;

    class Element
    {
        constructor(title)
        {
            this.title = title;
            this.id = ++idset;
        }
    }

    class Todo extends Element
    {
        constructor(title, duedate, priority, checklist, description, route, done = false)
        {
            super(title);
            this.duedate = duedate;
            this.priority = priority;
            this.checkboxes = checklist;
            this.description = description;
            this.route = route;
            this.done = done;
        }
    }

    class Project extends Element
    {
        constructor(title, contents = [], canContent = ['todo'])
        {
            super(title);
            this.contents = contents;
            this.canContent = canContent;
        }
    }

    class Category extends Element
    {
        constructor(title, contents = [], canContent = ['project', 'category'])
        {
            super(title);
            this.contents = contents;
            this.canContent = canContent;
        }
    }

    const root = new Category('Your directory');

    function findByID(idRoute)
    {
        if (idRoute.length === 0)
        {
            return root;
        }
        let id = idRoute[1];
        let parent = root;
        for (let i = 1; i < idRoute.length;)
        {
            parent.contents.forEach((child) =>
            {
                if (child.id === id)
                {
                    parent = child;
                    id = idRoute[++i];
                }
            });
        }
        return parent;
    }

    function createElement(child, idRoute)
    {
        const parent = findByID(idRoute);
        parent.contents.push(child);
    }

    function createCategory(title, idRoute)
    {
        const category = new Category(title);
        createElement(category, idRoute);
        return category;
    }

    function createProject(title, idRoute)
    {
        const project = new Project(title);
        createElement(project, idRoute);
        return project;
    }

    function createTodo(title, idRoute, duedate, priority, checklist, description, done = false)
    {
        const todo = new Todo(title, duedate, priority, checklist, description, idRoute, done);
        createElement(todo, idRoute);
        todos.push(todo);
        return todo;
    }

    function removeElement(parent, child)
    {
        const index = parent.contents.indexOf(child);
        parent.contents = parent.contents.slice(0, index).concat(
            parent.contents.slice(index + 1, parent.contents.length),
        );
    }

    let todos = [];

    function todosCheckRemoved(id)
    {
        const todo = todos.find((element) => element.id === id);
        const index = todos.indexOf(todo);
        todos.splice(index, 1);
    }

    createCategory('Home', []);
    createProject('Cleaning', [0, 1]);
    createTodo('Do the vacuuming', [0, 1, 2], '2022-05-18', 'high', ['bedroom', 'kitchen', 'bathroom', 'living room'], 'I need to vacuum the whole house');
    createTodo('Do the ironing', [0, 1, 2], '2022-05-13', 'normal', ['pink dress shirt', 'red dress shirt'], 'I need to iron my dress shirts');
    createProject('Homework', [0, 1]);
    createTodo('Write an essay', [0, 1, 2, 5], '2022-09-13', 'high', [], 'Essay about coding');
    createTodo('Do the math exercises', [0, 1, 2, 5], '2022-05-13', 'low', ['1.2/45', '1.3/45'], 'They are quite hard');

    return {
        createTodo,
        createCategory,
        createProject,
        findByID,
        root,
        removeElement,
        todos,
        todosCheckRemoved,
    };
}());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logicModule);


/***/ }),

/***/ "./src/fonts/Lato/Lato-Regular.ttf":
/*!*****************************************!*\
  !*** ./src/fonts/Lato/Lato-Regular.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9d883d540ee2b4de8024.ttf";

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
/* harmony import */ var _graphics_GitHub_Mark_Light_32px_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graphics/GitHub-Mark-Light-32px.png */ "./src/graphics/GitHub-Mark-Light-32px.png");
/* harmony import */ var _graphics_toggle_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graphics/toggle.png */ "./src/graphics/toggle.png");
/* harmony import */ var _graphics_Arrow_down_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graphics/Arrow-down.svg */ "./src/graphics/Arrow-down.svg");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom */ "./src/dom.js");







document.querySelector('.git-attrib').querySelector('img').setAttribute('src', _graphics_GitHub_Mark_Light_32px_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
document.querySelector('.toggle-img').setAttribute('src', _graphics_toggle_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
document.querySelector('.toggle-menu-icon').setAttribute('src', _graphics_Arrow_down_svg__WEBPACK_IMPORTED_MODULE_2__["default"]); // lines 1-3 && 8-10 added just to support github pages

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGNBQWMsT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFFBQVEsVUFBVSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLFVBQVUsS0FBSyxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FB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LFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyREFBMkQsYUFBYTtBQUN4RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMkRBQTJELFVBQVU7QUFDckU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBDQUEwQywrREFBUztBQUNuRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQ0FBK0MsNERBQVM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnREFBZ0QsK0RBQVM7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDZEQUEwQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsNERBQXlCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLCtCQUErQix5REFBc0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsSUFBSSxZQUFZO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLHVEQUFvQjtBQUNqRSw0Q0FBNEMsdURBQW9CO0FBQ2hFO0FBQ0Esd0JBQXdCLDREQUF5QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsZ0VBQTZCO0FBQ3pELHlCQUF5QjtBQUN6QjtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDdm9DekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1CQUFtQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3hJM0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQitEO0FBQ2pCO0FBQ1M7O0FBRWxDO0FBQ1M7O0FBRTlCLCtFQUErRSw0RUFBVTtBQUN6RiwwREFBMEQsNERBQVM7QUFDbkUsZ0VBQWdFLGdFQUFjLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZ3JhcGhpY3MvQXJyb3ctZG93bi5zdmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2dyYXBoaWNzL0dpdEh1Yi1NYXJrLUxpZ2h0LTMycHgucG5nIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ncmFwaGljcy9lZGl0LWljb24ucG5nIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ncmFwaGljcy9zYXZlLWljb24ucG5nIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ncmFwaGljcy90b2dnbGUucG5nIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvZ2ljLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiZm9udHMvVWJ1bnR1L1VidW50dS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcImZvbnRzL0xhdG8vTGF0by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFVidW50dTtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IExhdG87XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuKiB7XFxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgaGVpZ2h0OiA1NXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xcbn1cXG5cXG4uaGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogMzNweDtcXG59XFxuXFxuLmF0dHJpYnV0ZXMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLmF0dHJpYnV0ZXMsIC5naXQtYXR0cmliIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hdHRyaWJ1dGUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5hdHRyaWJ1dGUsIC5hdHRyaWJ1dGUgPiAqIHtcXG4gICAgY29sb3I6ICM3OTc5Nzk7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4uYXR0cmlidXRlcyB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLm1lbnUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5mdW5jdGlvbi1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzYjNiM2I7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM1NTU1NTU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgd2lkdGg6IDEzNXB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4uYWRkLWZ1bmN0aW9uOmhvdmVyLCAucmVtb3ZlLWZ1bmN0aW9uOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk2KTtcXG59XFxuXFxuXFxuLm1haW4tY29udGVudCB7XFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNTVweCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XFxufVxcblxcbi5wcm9qZWN0LWNhdGVnb3J5LWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uc2lkZS1tZW51IHtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDU1cHgpO1xcbiAgICB6LWluZGV4OiAxO1xcblxcbn1cXG5cXG4uc2lkZS1tZW51LWVsZW1lbnRzIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMCAxMHB4IDEwcHggMDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZDJkO1xcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMjIyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmRpcmVjdG9yeSB7XFxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLmRpcmVjdG9yeS1lbGVtZW50cyB7XFxuICAgIG92ZXJmbG93LXg6IGF1dG87XFxuICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDBweDtcXG59XFxuXFxuLmdyb3VwLXByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0LWNhdGVnb3J5LXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4uY2F0ZWdvcnktcHJvamVjdC1pY29uIHtcXG4gICAgbWluLXdpZHRoOiAyMHB4O1xcbiAgICBtaW4taGVpZ2h0OiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuI2ZpcnN0ID4gLnByb2plY3QtY2F0ZWdvcnktdGl0bGUge1xcbiAgICBmb250LXNpemU6IDI3cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbiN0b2dnbGUtY29udGFpbmVyID4gLmVsZW1lbnQtY29udGVudCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICAgIHBhZGRpbmctbGVmdDogNHB4O1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM5OTk5OTk7XFxufVxcblxcbi50b2dnbGUtbWVudSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgbGVmdDogMzAwcHg7XFxuICAgIHRvcDogMzg5LjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmQyZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAxMHB4IDEwcHggMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi50b2dnbGUtbWVudS1pY29uIHtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMyNXB4KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xcbiAgICBtYXJnaW4tbGVmdDogMzI1cHg7XFxufVxcblxcbi5tYWluLXNlY3Rpb24td2luZG93IHtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHdpZHRoOiA5OCU7XFxuICAgIGhlaWdodDogOTglO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM3ZTdlN2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4XFxufVxcblxcbi5tYWluLXNlY3Rpb24taGVhZGluZyB7XFxuICAgIG1heC13aWR0aDogMzUwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDUzcHg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi5zdWItc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc3ViLXNlY3Rpb24tcGxhY2Vob2xkZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zdWItaGVhZGluZyB7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnRvZ2dsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc3ViLWhlYWRpbmcgPiAudG9nZ2xlIHtcXG4gICAgd2lkdGg6IDE2cHg7XFxuICAgIGhlaWdodDogMTRweDtcXG59XFxuXFxuLnRvZ2dsZS1pbWcge1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcblxcbn1cXG5cXG4udG9nZ2xlLWltZy5yb3RhdGVkIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG5cXG4uc3ViLWhlYWRpbmcgPiAuaGVhZGluZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1heC13aWR0aDogMzUwcHg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4udG9kbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTI5Mjk7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjN2U3ZTdlO1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4uc2Vjb25kLWRpc3BsYXktbWVudSA+IC50b2RvIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50b2RvLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDMwcHg7XFxufVxcblxcbi50b2RvLmRvbmUge1xcbiAgICBvcGFjaXR5OiAwLjM7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xcbn1cXG5cXG4udG9kby5kb25lID4gICoge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnRvZG8uZG9uZSA+IC50b2RvLW1haW4gPiAgLmNoZWNrLWRvbmV7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcblxcbi50b2RvLW1haW4ge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uY2hlY2tsaXN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnRvZG8tY2hlY2tsaXN0IHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDNweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XFxuICAgIHBhZGRpbmc6IDVweCAwO1xcbn1cXG5cXG4uY2hlY2tsaXN0LWhlYWRpbmcge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uY2hlY2tsaXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5jaGVja2JveC1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmNoZWNrYm94LWNvbnRhaW5lciA+IC5jaGVjay1kb25lLWJ1dHRvbiB7XFxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uY2hlY2tsaXN0LWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5jaGVja2xpc3QtaGVhZGVyID4gLnRvZ2dsZSA+IC50b2dnbGUtaW1nLCAucHJvamVjdC1jYXRlZ29yeS1oZWFkZXIgPiAudG9nZ2xlID4gLnRvZ2dsZS1pbWcge1xcbiAgICB3aWR0aDogMTNweDtcXG59XFxuXFxuLmNoZWNrYm94LWxhYmVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG59XFxuXFxuLmNoZWNrYm94LWlucHV0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNoZWNrYm94LWNvbnRhaW5lciA+IC5jaGVjay1kb25lLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5jaGVja2JveC1jb250YWluZXIgPiAuY2hlY2stZG9uZS1idXR0b246OmJlZm9yZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtNnB4O1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIG9wYWNpdHk6IDAuMjtcXG4gICAgY29udGVudDogJ+Kckyc7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5jcmVhdGUtY2hlY2tib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLmNoZWNrYm94LXRpdGxlLWlucHV0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjYyNiAhaW1wb3J0YW50OyBcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4udG9kby1kZXNjcmlwdGlvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4udG9kby1kZXNjcmlwdGlvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8tcGVyaW9kLWNhdGVnb3J5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogN3B4O1xcbn1cXG5cXG4uaGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgb3ZlcmZsb3cteDogYXV0bztcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLnNldC1wZXJpb2Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wZXJpb2Qge1xcbiAgICB3aWR0aDogMTg1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBlcmlvZCA+IGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzIzMjM7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHdpZHRoOiAxNDBweDtcXG59XFxuXFxuXFxuLnJvdW5kLWJ1dHRvbiwgLmNoZWNrLWRvbmUtYnV0dG9uIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB3aWR0aDogMjhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgaGVpZ2h0OiAyOHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucm91bmQtYnV0dG9uI3N1YnM6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5yb3VuZC1idXR0b24jc3Viczpob3Zlcjo6YmVmb3JlIHtcXG4gICAgY29sb3I6ICMyOTI5Mjk7XFxufVxcblxcbi5yb3VuZC1idXR0b24jYWRkOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5yb3VuZC1idXR0b24jYWRkOmhvdmVyOjpiZWZvcmUge1xcbiAgICBjb2xvcjogIzI5MjkyOTtcXG59XFxuXFxuLnJvdW5kLWJ1dHRvbiNzdWJzOjpiZWZvcmUsIC5yb3VuZC1idXR0b24jYWRkOjpiZWZvcmV7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbiAgICBjb250ZW50OiAnLSc7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbi5yb3VuZC1idXR0b24jc3Viczo6YmVmb3JlIHtcXG4gICAgdG9wOiAtMjAuNXB4O1xcbn1cXG5cXG4ucm91bmQtYnV0dG9uI2FkZDo6YmVmb3JlIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICB0b3A6IC02cHg7XFxuICAgIGxlZnQ6IC0wLjVweDtcXG4gICAgY29udGVudDogJysnO1xcbiAgICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi50b2RvLWR1ZWRhdGUsIC50b2RvLXRpdGxlLCAudG9kby1wcmlvcml0eS1jb250YWluZXIsIC5jaGVjay1kb25lIHtcXG4gICAgd2lkdGg6IDIyMHB4O1xcbn0gICAgXFxuXFxuLnRvZG8tcHJpb3JpdHktY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRvZG8tdGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi50b2RvLWR1ZWRhdGUsIC50b2RvLXByaW9yaXR5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBnYXA6IDNweDtcXG59ICAgIFxcblxcbi50b2RvLWxhYmVsIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAxcHggNXB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5jaGVjay1kb25lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRkYXRlLWlucHV0LCAucHJpb3JpdHktdmFsdWUsIC50aXRsZS1pbnB1dCwgLnRvZG8tdGl0bGUtY29udGVudCwgLmNoZWNrYm94LXRpdGxlLWlucHV0LCAuc2V0LWMtcC1pbnB1dCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5wcmlvcml0eS12YWx1ZSwgLnRpdGxlLWlucHV0IHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4uZGRhdGUtaW5wdXQsIC5wcmlvcml0eS12YWx1ZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi5kZGF0ZS1pbnB1dCB7XFxuICAgIHdpZHRoOiAxMjlweDtcXG59XFxuXFxuLnByaW9yaXR5LXZhbHVlIHtcXG4gICAgd2lkdGg6IDcwcHg7XFxufVxcblxcbi50aXRsZS1pbnB1dCB7XFxuICAgIHdpZHRoOiAxODVweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZDJkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1pbnB1dCB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmQyZDtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4udG9kby10aXRsZS1jb250ZW50IHtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBtYXgtd2lkdGg6IDIyMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiA1NXB4O1xcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMXB4O1xcbn1cXG5cXG4udGV4dC1lZGl0LWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAyNnB4O1xcbiAgICBoZWlnaHQ6IDI2cHg7XFxufVxcblxcbi5jaGVjay1kb25lLWlucHV0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNoZWNrLWRvbmUtYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmNoZWNrLWRvbmUtYnV0dG9uIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB3aWR0aDogMjhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgaGVpZ2h0OiAyOHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY2hlY2stZG9uZS1idXR0b246OmJlZm9yZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtNHB4O1xcbiAgICBmb250LXNpemU6IDIzcHg7XFxuICAgIG9wYWNpdHk6IDAuMjtcXG4gICAgY29udGVudDogJ+Kckyc7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5jaGVjay1kb25lLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uY2hlY2stZG9uZS1idXR0b246aG92ZXI6OmJlZm9yZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5jaGVjay1kb25lLWJ1dHRvbi5jaGVja2VkOjpiZWZvcmUge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uY2hlY2tlZCB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG5cXG4vKiB3aWR0aCAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICBoZWlnaHQ6IDVweDtcXG4gIH1cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgaGVpZ2h0OiA1cHg7XFxuICAgIHdpZHRoOiA4cHg7XFxufVxcblxcbi8qIFRyYWNrICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJhY2tncm91bmQ6ICMyMjI7XFxufVxcblxcbi8qIEhhbmRsZSAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTksIDE5LCAxOSk7XFxufVxcblxcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjNTU1O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLnNlY29uZC1kaXNwbGF5IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDAgLyAzMCUpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuLnNlY29uZC1kaXNwbGF5LW1lbnUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc2V0LWNhdGVnb3J5LXByb2plY3Qge1xcbn1cXG5cXG4uc2V0LWNhdGVnb3J5LXByb2plY3QtdGl0bGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMTExO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zZXQtYy1wLWxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAzOHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zZXQtYy1wLWlucHV0IHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxOTE5O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zZWxlY3QtZWxlbWVudC1tZW51IHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMTExO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxufVxcblxcbi5zZWxlY3QtZWxlbWVudC1tZW51IGJ1dHRvbjpmaXJzdC1vZi10eXBlIHtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uc2VsZWN0LWVsZW1lbnQtbWVudSBidXR0b246bGFzdC1vZi10eXBlIHtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcbn1cXG5cXG4uc2VtLW9wdGlvbiB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JheTtcXG59XFxuXFxuLnNlbS1vcHRpb246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhO1xcbn1cXG5cXG4uY2xvc2UtYnV0dG9uIHtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uY3JlYXRlLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI1MjUyNTtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcbn1cXG5cXG4uY3JlYXRlLWJ1dHRvbjpob3ZlciB7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSkgdHJhbnNsYXRlWSgtMC41cHgpO1xcbn1cXG5cXG4uZ3JlZW4tdGV4dC1lbGVtZW50IHtcXG4gICAgY29sb3I6ICM3Y2Q0N2M7XFxufVxcblxcbi5yZWQtdGV4dC1lbGVtZW50IHtcXG4gICAgY29sb3I6ICNlYzVjNWM7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsNENBQXlDO0FBQzdDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDRDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOzs7QUFHQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixVQUFVOztBQUVkOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1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O0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCOztBQUUxQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE1BQU07SUFDTixlQUFlO0lBQ2YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFDOUIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogVWJ1bnR1O1xcbiAgICBzcmM6IHVybChmb250cy9VYnVudHUvVWJ1bnR1LVJlZ3VsYXIudHRmKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xcbiAgICBzcmM6IHVybChmb250cy9MYXRvL0xhdG8tUmVndWxhci50dGYpO1xcbn1cXG5cXG4qIHtcXG4gICAgZm9udC1mYW1pbHk6IExhdG87XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBoZWlnaHQ6IDU1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XFxufVxcblxcbi5oZWFkaW5nIHtcXG4gICAgZm9udC1zaXplOiAzM3B4O1xcbn1cXG5cXG4uYXR0cmlidXRlcyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4uYXR0cmlidXRlcywgLmdpdC1hdHRyaWIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmF0dHJpYnV0ZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmF0dHJpYnV0ZSwgLmF0dHJpYnV0ZSA+ICoge1xcbiAgICBjb2xvcjogIzc5Nzk3OTtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi5hdHRyaWJ1dGVzIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ubWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmZ1bmN0aW9uLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IzNiM2IzYjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzU1NTU1NTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB3aWR0aDogMTM1cHg7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5hZGQtZnVuY3Rpb246aG92ZXIsIC5yZW1vdmUtZnVuY3Rpb246aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTYpO1xcbn1cXG5cXG5cXG4ubWFpbi1jb250ZW50IHtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1NXB4KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcXG59XFxuXFxuLnByb2plY3QtY2F0ZWdvcnktaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5zaWRlLW1lbnUge1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNTVweCk7XFxuICAgIHotaW5kZXg6IDE7XFxuXFxufVxcblxcbi5zaWRlLW1lbnUtZWxlbWVudHMge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwIDEwcHggMTBweCAwO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZDJkMmQ7XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMyMjI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uZGlyZWN0b3J5IHtcXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uZGlyZWN0b3J5LWVsZW1lbnRzIHtcXG4gICAgb3ZlcmZsb3cteDogYXV0bztcXG4gICAgcGFkZGluZzogMTBweCAwIDEwcHggMHB4O1xcbn1cXG5cXG4uZ3JvdXAtcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnByb2plY3QtY2F0ZWdvcnktdGl0bGUge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5jYXRlZ29yeS1wcm9qZWN0LWljb24ge1xcbiAgICBtaW4td2lkdGg6IDIwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4jZmlyc3QgPiAucHJvamVjdC1jYXRlZ29yeS10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMjdweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuI3RvZ2dsZS1jb250YWluZXIgPiAuZWxlbWVudC1jb250ZW50IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzk5OTk5OTtcXG59XFxuXFxuLnRvZ2dsZS1tZW51IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBsZWZ0OiAzMDBweDtcXG4gICAgdG9wOiAzODkuNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZDJkO1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDEwcHggMTBweCAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLnRvZ2dsZS1tZW51LWljb24ge1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzI1cHgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMjVweDtcXG59XFxuXFxuLm1haW4tc2VjdGlvbi13aW5kb3cge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgd2lkdGg6IDk4JTtcXG4gICAgaGVpZ2h0OiA5OCU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzdlN2U3ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHhcXG59XFxuXFxuLm1haW4tc2VjdGlvbi1oZWFkaW5nIHtcXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcXG4gICAgbWluLWhlaWdodDogNTNweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLnN1Yi1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zdWItc2VjdGlvbi1wbGFjZWhvbGRlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnN1Yi1oZWFkaW5nIHtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4udG9nZ2xlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zdWItaGVhZGluZyA+IC50b2dnbGUge1xcbiAgICB3aWR0aDogMTZweDtcXG4gICAgaGVpZ2h0OiAxNHB4O1xcbn1cXG5cXG4udG9nZ2xlLWltZyB7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuXFxufVxcblxcbi50b2dnbGUtaW1nLnJvdGF0ZWQge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcblxcbi5zdWItaGVhZGluZyA+IC5oZWFkaW5nIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi50b2RvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjkyOTtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM3ZTdlN2U7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5zZWNvbmQtZGlzcGxheS1tZW51ID4gLnRvZG8ge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRvZG8tbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuLnRvZG8uZG9uZSB7XFxuICAgIG9wYWNpdHk6IDAuMztcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JlZW47XFxufVxcblxcbi50b2RvLmRvbmUgPiAgKiB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4udG9kby5kb25lID4gLnRvZG8tbWFpbiA+ICAuY2hlY2stZG9uZXtcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuXFxuLnRvZG8tbWFpbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBnYXA6IDVweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5jaGVja2xpc3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4udG9kby1jaGVja2xpc3Qge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogM3B4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDtcXG4gICAgcGFkZGluZzogNXB4IDA7XFxufVxcblxcbi5jaGVja2xpc3QtaGVhZGluZyB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi5jaGVja2xpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLmNoZWNrYm94LWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uY2hlY2tib3gtY29udGFpbmVyID4gLmNoZWNrLWRvbmUtYnV0dG9uIHtcXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxufVxcblxcbi5jaGVja2xpc3QtaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLmNoZWNrbGlzdC1oZWFkZXIgPiAudG9nZ2xlID4gLnRvZ2dsZS1pbWcsIC5wcm9qZWN0LWNhdGVnb3J5LWhlYWRlciA+IC50b2dnbGUgPiAudG9nZ2xlLWltZyB7XFxuICAgIHdpZHRoOiAxM3B4O1xcbn1cXG5cXG4uY2hlY2tib3gtbGFiZWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxuICAgIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcbn1cXG5cXG4uY2hlY2tib3gtaW5wdXQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY2hlY2tib3gtY29udGFpbmVyID4gLmNoZWNrLWRvbmUtYnV0dG9uIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG59XFxuXFxuLmNoZWNrYm94LWNvbnRhaW5lciA+IC5jaGVjay1kb25lLWJ1dHRvbjo6YmVmb3JlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC02cHg7XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG4gICAgb3BhY2l0eTogMC4yO1xcbiAgICBjb250ZW50OiAn4pyTJztcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLmNyZWF0ZS1jaGVja2JveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uY2hlY2tib3gtdGl0bGUtaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyNjI2ICFpbXBvcnRhbnQ7IFxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi50b2RvLWRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcblxcbi50b2RvLWRlc2NyaXB0aW9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udG9kby1wZXJpb2QtY2F0ZWdvcnkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA3cHg7XFxufVxcblxcbi5oZWFkaW5nIHtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uc2V0LXBlcmlvZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnBlcmlvZCB7XFxuICAgIHdpZHRoOiAxODVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucGVyaW9kID4gaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjMyMztcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgd2lkdGg6IDE0MHB4O1xcbn1cXG5cXG5cXG4ucm91bmQtYnV0dG9uLCAuY2hlY2stZG9uZS1idXR0b24ge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHdpZHRoOiAyOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDI4cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5yb3VuZC1idXR0b24jc3Viczpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnJvdW5kLWJ1dHRvbiNzdWJzOmhvdmVyOjpiZWZvcmUge1xcbiAgICBjb2xvcjogIzI5MjkyOTtcXG59XFxuXFxuLnJvdW5kLWJ1dHRvbiNhZGQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnJvdW5kLWJ1dHRvbiNhZGQ6aG92ZXI6OmJlZm9yZSB7XFxuICAgIGNvbG9yOiAjMjkyOTI5O1xcbn1cXG5cXG4ucm91bmQtYnV0dG9uI3N1YnM6OmJlZm9yZSwgLnJvdW5kLWJ1dHRvbiNhZGQ6OmJlZm9yZXtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIGNvbnRlbnQ6ICctJztcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuLnJvdW5kLWJ1dHRvbiNzdWJzOjpiZWZvcmUge1xcbiAgICB0b3A6IC0yMC41cHg7XFxufVxcblxcbi5yb3VuZC1idXR0b24jYWRkOjpiZWZvcmUge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIHRvcDogLTZweDtcXG4gICAgbGVmdDogLTAuNXB4O1xcbiAgICBjb250ZW50OiAnKyc7XFxuICAgIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnRvZG8tZHVlZGF0ZSwgLnRvZG8tdGl0bGUsIC50b2RvLXByaW9yaXR5LWNvbnRhaW5lciwgLmNoZWNrLWRvbmUge1xcbiAgICB3aWR0aDogMjIwcHg7XFxufSAgICBcXG5cXG4udG9kby1wcmlvcml0eS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udG9kby10aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnRvZG8tZHVlZGF0ZSwgLnRvZG8tcHJpb3JpdHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdhcDogM3B4O1xcbn0gICAgXFxuXFxuLnRvZG8tbGFiZWwge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDFweCA1cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLmNoZWNrLWRvbmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGRhdGUtaW5wdXQsIC5wcmlvcml0eS12YWx1ZSwgLnRpdGxlLWlucHV0LCAudG9kby10aXRsZS1jb250ZW50LCAuY2hlY2tib3gtdGl0bGUtaW5wdXQsIC5zZXQtYy1wLWlucHV0IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLnByaW9yaXR5LXZhbHVlLCAudGl0bGUtaW5wdXQge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi5kZGF0ZS1pbnB1dCwgLnByaW9yaXR5LXZhbHVlIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLmRkYXRlLWlucHV0IHtcXG4gICAgd2lkdGg6IDEyOXB4O1xcbn1cXG5cXG4ucHJpb3JpdHktdmFsdWUge1xcbiAgICB3aWR0aDogNzBweDtcXG59XFxuXFxuLnRpdGxlLWlucHV0IHtcXG4gICAgd2lkdGg6IDE4NXB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZDJkMmQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLWlucHV0IHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZDJkO1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi50b2RvLXRpdGxlLWNvbnRlbnQge1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIG1heC13aWR0aDogMjIwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDU1cHg7XFxuICAgIG92ZXJmbG93LXg6IGF1dG87XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDMxcHg7XFxufVxcblxcbi50ZXh0LWVkaXQtYnV0dG9uIHtcXG4gICAgd2lkdGg6IDI2cHg7XFxuICAgIGhlaWdodDogMjZweDtcXG59XFxuXFxuLmNoZWNrLWRvbmUtaW5wdXQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY2hlY2stZG9uZS1idXR0b24tY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uY2hlY2stZG9uZS1idXR0b24ge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHdpZHRoOiAyOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDI4cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jaGVjay1kb25lLWJ1dHRvbjo6YmVmb3JlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC00cHg7XFxuICAgIGZvbnQtc2l6ZTogMjNweDtcXG4gICAgb3BhY2l0eTogMC4yO1xcbiAgICBjb250ZW50OiAn4pyTJztcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLmNoZWNrLWRvbmUtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5jaGVjay1kb25lLWJ1dHRvbjpob3Zlcjo6YmVmb3JlIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmNoZWNrLWRvbmUtYnV0dG9uLmNoZWNrZWQ6OmJlZm9yZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5jaGVja2VkIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcblxcbi8qIHdpZHRoICovXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIGhlaWdodDogNXB4O1xcbiAgfVxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICBoZWlnaHQ6IDVweDtcXG4gICAgd2lkdGg6IDhweDtcXG59XFxuXFxuLyogVHJhY2sgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgYmFja2dyb3VuZDogIzIyMjtcXG59XFxuXFxuLyogSGFuZGxlICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigxOSwgMTksIDE5KTtcXG59XFxuXFxuLyogSGFuZGxlIG9uIGhvdmVyICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICM1NTU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uc2Vjb25kLWRpc3BsYXkge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCAvIDMwJSk7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uc2Vjb25kLWRpc3BsYXktbWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zZXQtY2F0ZWdvcnktcHJvamVjdCB7XFxufVxcblxcbi5zZXQtY2F0ZWdvcnktcHJvamVjdC10aXRsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnNldC1jLXAtbGFiZWwge1xcbiAgICBmb250LXNpemU6IDM4cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNldC1jLXAtaW5wdXQge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTE5MTk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnNlbGVjdC1lbGVtZW50LW1lbnUge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG59XFxuXFxuLnNlbGVjdC1lbGVtZW50LW1lbnUgYnV0dG9uOmZpcnN0LW9mLXR5cGUge1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zZWxlY3QtZWxlbWVudC1tZW51IGJ1dHRvbjpsYXN0LW9mLXR5cGUge1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zZW0tb3B0aW9uIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmF5O1xcbn1cXG5cXG4uc2VtLW9wdGlvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMWE7XFxufVxcblxcbi5jbG9zZS1idXR0b24ge1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4O1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uY2xvc2UtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbi5jcmVhdGUtYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyNTI1O1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxufVxcblxcbi5jcmVhdGUtYnV0dG9uOmhvdmVyIHtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KSB0cmFuc2xhdGVZKC0wLjVweCk7XFxufVxcblxcbi5ncmVlbi10ZXh0LWVsZW1lbnQge1xcbiAgICBjb2xvcjogIzdjZDQ3YztcXG59XFxuXFxuLnJlZC10ZXh0LWVsZW1lbnQge1xcbiAgICBjb2xvcjogI2VjNWM1YztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjY3MjJlN2FiYWM5ZTMwYjAyMWJiNGFmNzkyMjg5NDljLnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIyNjZjYTYzMTc3YmNhNmYzMzBhNzRlODNmZGM2MzE3OC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiM2FjZmJjYjgzMjdiZmYyYmE2NGU1NTZiMzI2YWYzMjQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjY0MWY2ZmI5OTQ4ODY1OGI0NGVkOTQyMjhjYzQ3ODUxLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkZjgzNTY1NTk5OWQ3YWVlMzhhODY2ZDg1ZDcxNjAwZS5wbmdcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGxvZ2ljTW9kdWxlIGZyb20gJy4vbG9naWMnO1xuaW1wb3J0IHNhdmVJY29uIGZyb20gJy4vZ3JhcGhpY3Mvc2F2ZS1pY29uLnBuZyc7XG5pbXBvcnQgZWRpdEljb24yIGZyb20gJy4vZ3JhcGhpY3MvZWRpdC1pY29uLnBuZyc7XG5pbXBvcnQgdG9nZ2xlSW1nIGZyb20gJy4vZ3JhcGhpY3MvdG9nZ2xlLnBuZyc7XG5cbmNvbnN0IGRvbU1vZHVsZSA9IChmdW5jdGlvbiAoKVxue1xuICAgIGZ1bmN0aW9uIGFkanVzdEVsZW1lbnRUb1dpbmRvd1NpemUoKVxuICAgIHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGhcbiAgICAgICAgfHwgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgICAgIGlmICh3aWR0aCA8IDYwMClcbiAgICAgICAge1xuICAgICAgICAgICAgY29udGVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnbWFyZ2luLWxlZnQnLCAnMjVweCcpO1xuICAgICAgICAgICAgY29udGVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnd2lkdGgnLCAnMTAwJScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbnRlbnQuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLWxlZnQnKSAhPT0gJzMyNXB4J1xuICAgICAgICAgICAgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZ2dsZS1tZW51LWljb24nKS5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCd0cmFuc2Zvcm0nKSAhPT0gJ3JvdGF0ZSgtOTBkZWcpJylcbiAgICAgICAge1xuICAgICAgICAgICAgY29udGVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnbWFyZ2luLWxlZnQnLCAnMzI1cHgnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkanVzdEVsZW1lbnRUb1dpbmRvd1NpemUoKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PlxuICAgIHtcbiAgICAgICAgYWRqdXN0RWxlbWVudFRvV2luZG93U2l6ZSgpO1xuICAgIH0sIHRydWUpO1xuXG4gICAgY29uc3QgdG9nZ2xlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUtbWVudScpO1xuICAgIHRvZ2dsZU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgIHtcbiAgICAgICAgY29uc3QgdG9nZ2xlSWNvbiA9IHRvZ2dsZU1lbnUucXVlcnlTZWxlY3RvcignLnRvZ2dsZS1tZW51LWljb24nKTtcbiAgICAgICAgaWYgKHRvZ2dsZUljb24uc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgndHJhbnNmb3JtJykgPT09ICdyb3RhdGUoOTBkZWcpJylcbiAgICAgICAge1xuICAgICAgICAgICAgdG9nZ2xlSWNvbi5zdHlsZS5zZXRQcm9wZXJ0eSgndHJhbnNmb3JtJywgJ3JvdGF0ZSgtOTBkZWcpJyk7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUuc2V0UHJvcGVydHkoJ3dpZHRoJywgJ2NhbGMoMTAwJSAtIDI1cHgpJyk7XG4gICAgICAgICAgICBjb250ZW50LnN0eWxlLnNldFByb3BlcnR5KCdtYXJnaW4tbGVmdCcsICcyNXB4Jyk7XG4gICAgICAgICAgICB0b2dnbGVNZW51LmNsb3Nlc3QoJy5zaWRlLW1lbnUnKS5zdHlsZS5zZXRQcm9wZXJ0eSgndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoLTMwMHB4KScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdG9nZ2xlSWNvbi5zdHlsZS5zZXRQcm9wZXJ0eSgndHJhbnNmb3JtJywgJ3JvdGF0ZSg5MGRlZyknKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgICAgICAgICAgY29udGVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnd2lkdGgnLCAnY2FsYygxMDAlIC0gMzI1cHgpJyk7XG4gICAgICAgICAgICBjb250ZW50LnN0eWxlLnNldFByb3BlcnR5KCdtYXJnaW4tbGVmdCcsICczMjVweCcpO1xuICAgICAgICAgICAgdG9nZ2xlTWVudS5jbG9zZXN0KCcuc2lkZS1tZW51Jykuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zZm9ybScpO1xuICAgICAgICAgICAgYWRqdXN0RWxlbWVudFRvV2luZG93U2l6ZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBsZXQgYWRkRnVuY3Rpb25PbiA9IGZhbHNlO1xuICAgIGxldCByZW1vdmVGdW5jdGlvbk9uID0gZmFsc2U7XG5cbiAgICBjb25zdCBwZXJpb2REYXRlSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNldC1wZXJpb2QnKS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwiZGF0ZVwiXScpO1xuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgdG9kYXkgPSBgJHt0b2RheS5nZXRGdWxsWWVhcigpfS0ke1N0cmluZyh0b2RheS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKX0tJHtTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpfWA7XG4gICAgcGVyaW9kRGF0ZUlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT5cbiAgICB7XG4gICAgICAgIGlucHV0LnZhbHVlID0gdG9kYXk7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHBlcmlvZERhdGVJbnB1dENoYW5nZUFjdGlvbigpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBwZXJpb2REYXRlSW5wdXRDaGFuZ2VBY3Rpb24oKTtcbiAgICBmdW5jdGlvbiBwZXJpb2REYXRlSW5wdXRDaGFuZ2VBY3Rpb24oKVxuICAgIHtcbiAgICAgICAgY29uc3QgZnJvbSA9IHBlcmlvZERhdGVJbnB1dHNbMF0udmFsdWU7XG4gICAgICAgIGNvbnN0IHRvID0gcGVyaW9kRGF0ZUlucHV0c1sxXS52YWx1ZTtcbiAgICAgICAgbGV0IHRvZG9zSW5QZXJpb2QgPSBbXTtcbiAgICAgICAgY29uc3QgZWxlbWVudENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1wZXJpb2QtbGlzdCcpLnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50LWNvbnRlbnQnKTtcbiAgICAgICAgaWYgKGZyb20gPD0gdG8pXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRvZG9zSW5QZXJpb2QgPSBsb2dpY01vZHVsZS50b2Rvcy5maWx0ZXIoKHRvZG8pID0+ICh0b2RvLmR1ZWRhdGUgPj0gZnJvbVxuICAgICAgICAgICAgICAgICYmIHRvZG8uZHVlZGF0ZSA8PSB0bykpO1xuICAgICAgICAgICAgaWYgKHRvZG9zSW5QZXJpb2QubGVuZ3RoICE9PSAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRDb250ZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICAgICAgdG9kb3NJblBlcmlvZC5mb3JFYWNoKCh0b2RvKSA9PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3VG9kbyA9IGNyZWF0ZVByb2plY3RFbGVtZW50KC0xLCB0b2RvKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3VG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvRWxlbWVudEFjdGlvbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7dG9kby5yb3V0ZVt0b2RvLnJvdXRlLmxlbmd0aCAtIDFdfVwiXWApKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBlbGVtZW50Q29udGVudC50ZXh0Q29udGVudCA9ICctJztcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBwZXJpb2RDaGVja1JlbW92ZWQoKVxuICAgIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tcGVyaW9kLWxpc3QnKS5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudC1jb250ZW50Jyk7XG5cbiAgICAgICAgaWYgKGNvbnRhaW5lci5sYXN0Q2hpbGQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWNhdGVnb3J5LWhlYWRlcicpO1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0b3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpcmVjdG9yeScpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9ICtlbGVtZW50c1tpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgICAgICAgICAgICBpZiAoIShkaXJlY3RvcnkucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke2lkfVwiXWApKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChlbGVtZW50c1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIShjb250YWluZXIubGFzdENoaWxkKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSAnLSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1ZhbGlkaXR5VGV4dEVtcHR5KHRleHRJbnB1dClcbiAgICB7XG4gICAgICAgIGlmICh0ZXh0SW5wdXQudmFsaWRpdHkudmFsdWVNaXNzaW5nKVxuICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0SW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJ011c3QgY29uc2lzdCBhdCBsZWFzdCBvbmUgY2hhcmFjdGVyJyk7XG4gICAgICAgICAgICB0ZXh0SW5wdXQucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBlZGl0SWNvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZXh0LWVkaXQtYnV0dG9uJykpO1xuICAgIGVkaXRJY29ucy5mb3JFYWNoKChlZGl0SWNvbikgPT5cbiAgICB7XG4gICAgICAgIGVkaXRJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICAgICAge1xuICAgICAgICAgICAgZWRpdEljb25BZGRFdmVudExpc3RlbmVycyhlZGl0SWNvbik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGZ1bmN0aW9uIGVkaXRJY29uQWRkRXZlbnRMaXN0ZW5lcnMoZWRpdEljb24pXG4gICAge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBlZGl0SWNvbi5wYXJlbnRFbGVtZW50O1xuICAgICAgICBjb25zdCBpbnB1dCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgICAgICBjb25zdCBjb250ZW50RGl2ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXh0LWNvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgaW1nID0gZWRpdEljb24ucXVlcnlTZWxlY3RvcignaW1nJyk7XG4gICAgICAgIGlmIChlZGl0SWNvbi5nZXRBdHRyaWJ1dGUoJ2lkJykgPT09ICdyZWFkLW1vZGUnKVxuICAgICAgICB7XG4gICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBzYXZlSWNvbik7XG4gICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdhbHQnLCAnc2F2ZSBpbmRpY2F0b3IgaWNvbicpO1xuICAgICAgICAgICAgZWRpdEljb24uc2V0QXR0cmlidXRlKCdpZCcsICdlZGl0LW1vZGUnKTtcbiAgICAgICAgICAgIGNvbnRlbnREaXYuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICAgICAgaW5wdXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2Rpc3BsYXknKTtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gY29udGVudERpdi50ZXh0Q29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlZGl0SWNvbi5nZXRBdHRyaWJ1dGUoJ2lkJykgPT09ICdlZGl0LW1vZGUnKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoY2hlY2tWYWxpZGl0eVRleHRFbXB0eShpbnB1dCkgfHwgaW5wdXQuZ2V0QXR0cmlidXRlKCd2YWxpZGF0ZS1lbXB0eScpID09ICdmYWxzZScpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29udGVudERpdi50ZXh0Q29udGVudCA9IGlucHV0LnZhbHVlO1xuICAgICAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGVkaXRJY29uMik7XG4gICAgICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2VkaXQgaW5kaWNhdG9yIGljb24nKTtcbiAgICAgICAgICAgICAgICBlZGl0SWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JlYWQtbW9kZScpO1xuICAgICAgICAgICAgICAgIGNvbnRlbnREaXYuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2Rpc3BsYXknKTtcbiAgICAgICAgICAgICAgICBpbnB1dC5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjaGVja0J1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVjay1kb25lLWJ1dHRvbicpKS5maWx0ZXIoKGNiKSA9PiBjYi5nZXRBdHRyaWJ1dGUoJ2lkJykgIT0gJ21haW5DQicpO1xuICAgIGNoZWNrQnV0dG9ucy5mb3JFYWNoKChjaGVja0J1dHRvbikgPT5cbiAgICB7XG4gICAgICAgIGNoZWNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICAgICAge1xuICAgICAgICAgICAgY2hlY2tCdXR0b25BZGRFdmVudExpc3RlbmVycyhjaGVja0J1dHRvbik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGZ1bmN0aW9uIGNoZWNrQnV0dG9uQWRkRXZlbnRMaXN0ZW5lcnMoY2hlY2tCdXR0b24pXG4gICAge1xuICAgICAgICBpZiAoIShjaGVja0J1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrZWQnKSkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNoZWNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjaGVja0J1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrZWQnKSlcbiAgICAgICAge1xuICAgICAgICAgICAgY2hlY2tCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2tlZCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbWFpbkNoZWNrQnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI21haW5DQicpKTtcbiAgICBtYWluQ2hlY2tCdXR0b25zLmZvckVhY2goKGNoZWNrQnV0dG9uKSA9PlxuICAgIHtcbiAgICAgICAgY2hlY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgICAgICB7XG4gICAgICAgICAgICBtYWluQ0JBZGRFdmVudExpc3RlbmVycyhjaGVja0J1dHRvbik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGZ1bmN0aW9uIG1haW5DQkFkZEV2ZW50TGlzdGVuZXJzKGNoZWNrQnV0dG9uKVxuICAgIHtcbiAgICAgICAgY29uc3QgdG9kbyA9IGNoZWNrQnV0dG9uLmNsb3Nlc3QoJ2Rpdi50b2RvJyk7XG4gICAgICAgIGNvbnN0IGRhdGVJbnB1dCA9IHRvZG8ucXVlcnlTZWxlY3RvcignLmRkYXRlLWlucHV0Jyk7XG4gICAgICAgIGlmIChjaGVja0J1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrZWQnKSlcbiAgICAgICAge1xuICAgICAgICAgICAgY2hlY2tCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2tlZCcpO1xuICAgICAgICAgICAgdG9kby5jbGFzc0xpc3QucmVtb3ZlKCdkb25lJyk7XG4gICAgICAgICAgICBkYXRlSW5wdXQucmVtb3ZlQXR0cmlidXRlKCdyZWFkb25seScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCEoY2hlY2tCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVja2VkJykpKVxuICAgICAgICB7XG4gICAgICAgICAgICBjaGVja0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJyk7XG4gICAgICAgICAgICBjb25zdCBpY29ucyA9IHRvZG8ucXVlcnlTZWxlY3RvckFsbCgnLnRleHQtZWRpdC1idXR0b24nKTtcbiAgICAgICAgICAgIGljb25zLmZvckVhY2goKGljb24pID0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKGljb24uZ2V0QXR0cmlidXRlKCdpZCcpID09PSAnZWRpdC1tb2RlJylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGVkaXRJY29uQWRkRXZlbnRMaXN0ZW5lcnMoaWNvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICcnKTtcbiAgICAgICAgICAgIHRvZG8uY2xhc3NMaXN0LmFkZCgnZG9uZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcHJpb3JpdHlTcGlubmVycyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYW5nZS1wcmlvcml0eScpKTtcbiAgICBwcmlvcml0eVNwaW5uZXJzLmZvckVhY2goKHByaW9yaXR5U3Bpbm5lcikgPT5cbiAgICB7XG4gICAgICAgIHByaW9yaXR5U3Bpbm5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHByaW9yaXR5U3Bpbm5lcnNBZGRFdmVudExpc3RlbmVycyhwcmlvcml0eVNwaW5uZXIpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBmdW5jdGlvbiBwcmlvcml0eVNwaW5uZXJzQWRkRXZlbnRMaXN0ZW5lcnMocHJpb3JpdHlTcGlubmVyKVxuICAgIHtcbiAgICAgICAgY29uc3QgaWQgPSBwcmlvcml0eVNwaW5uZXIuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgICBjb25zdCBwcmlvcml0eUNvbnRlbnQgPSBwcmlvcml0eVNwaW5uZXIuY2xvc2VzdCgnLnRvZG8tcHJpb3JpdHktY29udGFpbmVyJykucXVlcnlTZWxlY3RvcignLnByaW9yaXR5LXZhbHVlJyk7XG4gICAgICAgIGxldCB2YWx1ZSA9IHByaW9yaXR5Q29udGVudC50ZXh0Q29udGVudDtcblxuICAgICAgICBpZiAoaWQgPT09ICdzdWJzJylcbiAgICAgICAge1xuICAgICAgICAgICAgc3dpdGNoICh2YWx1ZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjYXNlICdsb3cnOiB2YWx1ZSA9ICdoaWdoJzsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbm9ybWFsJzogdmFsdWUgPSAnbG93JzsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnaGlnaCc6IHZhbHVlID0gJ25vcm1hbCc7IGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSBpZiAoaWQgPT09ICdhZGQnKVxuICAgICAgICB7XG4gICAgICAgICAgICBzd2l0Y2ggKHZhbHVlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2xvdyc6IHZhbHVlID0gJ25vcm1hbCc7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ25vcm1hbCc6IHZhbHVlID0gJ2hpZ2gnOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdoaWdoJzogdmFsdWUgPSAnbG93JzsgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcHJpb3JpdHlDb250ZW50LnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3QgdG9nZ2xlQnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZ2dsZS1pbWcnKSk7XG4gICAgdG9nZ2xlQnV0dG9ucy5mb3JFYWNoKCh0b2dnbGVCdXR0b24pID0+XG4gICAge1xuICAgICAgICB0b2dnbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgICAgICB7XG4gICAgICAgICAgICBwcm9qZWN0VG9nZ2xlc0FkZEV2ZW50TGlzdGVuZXJzKHRvZ2dsZUJ1dHRvbik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGZ1bmN0aW9uIHByb2plY3RUb2dnbGVzQWRkRXZlbnRMaXN0ZW5lcnModG9nZ2xlQnV0dG9uKVxuICAgIHtcbiAgICAgICAgY29uc3QgZWxlbWVudHNUb1RvZ2dsZSA9IHRvZ2dsZUJ1dHRvbi5jbG9zZXN0KCcjdG9nZ2xlLWNvbnRhaW5lcicpLnF1ZXJ5U2VsZWN0b3IoJyN0b2dnbGFibGUnKS5xdWVyeVNlbGVjdG9yQWxsKCc6c2NvcGUgPiAqJyk7XG4gICAgICAgIGlmICghKHRvZ2dsZUJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3JvdGF0ZWQnKSkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRvZ2dsZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyb3RhdGVkJyk7XG4gICAgICAgICAgICBlbGVtZW50c1RvVG9nZ2xlLmZvckVhY2goKGVsZW1lbnRUb1RvZ2dsZSkgPT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50VG9Ub2dnbGUuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodG9nZ2xlQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygncm90YXRlZCcpKVxuICAgICAgICB7XG4gICAgICAgICAgICB0b2dnbGVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgncm90YXRlZCcpO1xuICAgICAgICAgICAgZWxlbWVudHNUb1RvZ2dsZS5mb3JFYWNoKChlbGVtZW50VG9Ub2dnbGUpID0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWxlbWVudFRvVG9nZ2xlLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdkaXNwbGF5Jyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFkZENoZWNrYm94QnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFkZC1jaGVja2JveCcpKTtcbiAgICBhZGRDaGVja2JveEJ1dHRvbnMuZm9yRWFjaCgoYWRkQ2hlY2tib3hCdXR0b24pID0+XG4gICAge1xuICAgICAgICBhZGRDaGVja2JveEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGFkZENoZWNrYm94QnV0dG9uQWN0aW9uKGFkZENoZWNrYm94QnV0dG9uKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gYWRkQ2hlY2tib3hCdXR0b25BY3Rpb24oYWRkQ2hlY2tib3hCdXR0b24pXG4gICAge1xuICAgICAgICBjb25zdCBjaGVja2xpc3RDb250YWluZXIgPSBhZGRDaGVja2JveEJ1dHRvbi5jbG9zZXN0KCcuY2hlY2tsaXN0LWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBjaGVja2xpc3QgPSBjaGVja2xpc3RDb250YWluZXIucXVlcnlTZWxlY3RvcignLmNoZWNrbGlzdCcpO1xuICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gY2hlY2tsaXN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveC10aXRsZS1pbnB1dCcpO1xuXG4gICAgICAgIGlmIChjaGVja1ZhbGlkaXR5VGV4dEVtcHR5KHRpdGxlSW5wdXQpKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBjaGVja2JveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY2hlY2tib3hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gtY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjaGVja2JveEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjaGVjay1kb25lLWJ1dHRvbicpO1xuICAgICAgICAgICAgY2hlY2tCdXR0b25zLnB1c2goY2hlY2tib3hCdXR0b24pO1xuICAgICAgICAgICAgY2hlY2tib3hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNoZWNrQnV0dG9uQWRkRXZlbnRMaXN0ZW5lcnMoY2hlY2tib3hCdXR0b24pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNoZWNrYm94TGFiZWwuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gtbGFiZWwnKTtcblxuICAgICAgICAgICAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3hCdXR0b24pO1xuICAgICAgICAgICAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3hMYWJlbCk7XG4gICAgICAgICAgICBjaGVja2JveExhYmVsLnRleHRDb250ZW50ID0gdGl0bGVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIHRpdGxlSW5wdXQudmFsdWUgPSAnJztcblxuICAgICAgICAgICAgY2hlY2tsaXN0Lmluc2VydEJlZm9yZShjaGVja2JveENvbnRhaW5lciwgY2hlY2tsaXN0LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtY2hlY2tib3gnKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjbG9zZVNEQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlLXNlY29uZC1kaXNwbGF5Jyk7XG4gICAgY2xvc2VTREJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAge1xuICAgICAgICBjbG9zZVNEQnV0dG9uQWN0aW9ucygpO1xuICAgIH0pO1xuICAgIGZ1bmN0aW9uIGNsb3NlU0RCdXR0b25BY3Rpb25zKClcbiAgICB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWNvbmQtZGlzcGxheScpLnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZURpcmVjdG9yeShsb2dpY01vZHVsZS5yb290KTsgLy8hICEhXG5cbiAgICBjb25zdCBhZGRUb0VsZW1lbnRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0ZWdvcnknKSkuY29uY2F0KEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKSkpO1xuICAgIGFkZFRvRWxlbWVudHMuZm9yRWFjaCgoYWRkVG9FbGVtZW50KSA9PlxuICAgIHtcbiAgICAgICAgYWRkVG9FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PlxuICAgICAgICB7XG4gICAgICAgICAgICBhZGRUb0VsZW1lbnRBY3Rpb24oYWRkVG9FbGVtZW50KTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGZ1bmN0aW9uIGFkZFRvRWxlbWVudEFjdGlvbihhZGRUb0VsZW1lbnQpXG4gICAge1xuICAgICAgICBpZiAoYWRkRnVuY3Rpb25PbiA9PT0gZmFsc2UgJiYgcmVtb3ZlRnVuY3Rpb25PbiA9PT0gZmFsc2UpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGxhc3REaXNwbGF5ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1kaXNwbGF5ZWQ9XCJ0cnVlXCJdJyk7XG4gICAgICAgICAgICBpZiAobGFzdERpc3BsYXllZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYXN0RGlzcGxheWVkLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1kaXNwbGF5ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFkZFRvRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZGlzcGxheWVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgIGdlbmVyYXRlRGlyZWN0b3J5RWxlbWVudChhZGRUb0VsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlRGlyZWN0b3J5RWxlbWVudChhZGRUb0VsZW1lbnQpXG4gICAge1xuICAgICAgICBjb25zdCBtYWluU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXNlY3Rpb24td2luZG93Jyk7XG4gICAgICAgIGNvbnN0IHN1YlNlY3Rpb24gPSBtYWluU2VjdGlvbi5xdWVyeVNlbGVjdG9yKCcuc3ViLXNlY3Rpb24nKTtcbiAgICAgICAgaWYgKHN1YlNlY3Rpb24ubGFzdENoaWxkKVxuICAgICAgICB7XG4gICAgICAgICAgICByZW1vdmVDaGlsZHJlbihzdWJTZWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBhZGRUb0VsZW1lbnQgPSBsb2dpY01vZHVsZS5maW5kQnlJRChnZXRFbGVtZW50Um91dGUoYWRkVG9FbGVtZW50KSk7XG4gICAgICAgIG1haW5TZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXNlY3Rpb24taGVhZGluZycpLnRleHRDb250ZW50ID0gYWRkVG9FbGVtZW50LnRpdGxlO1xuICAgICAgICBhZGRUb0VsZW1lbnQuY29udGVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT5cbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQuY29uc3RydWN0b3IubmFtZSA9PT0gJ1Byb2plY3QnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAndG9nZ2xlLWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc3ViSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHN1YkhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnc3ViLWhlYWRpbmcnKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QuYWRkKCd0b2dnbGUnKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRvZ2dsZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICB0b2dnbGVJY29uLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZS1pbWcnKTtcbiAgICAgICAgICAgICAgICB0b2dnbGVJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgdG9nZ2xlSW1nKTtcbiAgICAgICAgICAgICAgICB0b2dnbGVJY29uLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2ljb24gb2YgYSB0b2dnbGUnKTtcbiAgICAgICAgICAgICAgICB0b2dnbGVCdXR0b25zLnB1c2godG9nZ2xlSW1nKTtcbiAgICAgICAgICAgICAgICB0b2dnbGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUb2dnbGVzQWRkRXZlbnRMaXN0ZW5lcnModG9nZ2xlSWNvbik7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0b2dnbGUuYXBwZW5kQ2hpbGQodG9nZ2xlSWNvbik7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nJyk7XG4gICAgICAgICAgICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9IGVsZW1lbnQudGl0bGU7XG5cbiAgICAgICAgICAgICAgICBzdWJIZWFkaW5nLmFwcGVuZENoaWxkKHRvZ2dsZSk7XG4gICAgICAgICAgICAgICAgc3ViSGVhZGluZy5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdG9kb0xpc3QuY2xhc3NMaXN0LmFkZCgndG9kby1saXN0Jyk7XG4gICAgICAgICAgICAgICAgdG9kb0xpc3Quc2V0QXR0cmlidXRlKCdpZCcsICd0b2dnbGFibGUnKTtcblxuICAgICAgICAgICAgICAgIGVsZW1lbnQuY29udGVudHMuZm9yRWFjaCgodG9kbykgPT5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1RvZG8gPSBjcmVhdGVUb2RvKHRvZG8pO1xuICAgICAgICAgICAgICAgICAgICB0b2RvTGlzdC5hcHBlbmRDaGlsZChuZXdUb2RvKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQoc3ViSGVhZGluZyk7XG4gICAgICAgICAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZCh0b2RvTGlzdCk7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3ViLXNlY3Rpb24nKS5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGVsZW1lbnQuY29uc3RydWN0b3IubmFtZSA9PT0gJ0NhdGVnb3J5JylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdWJIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgc3ViSGVhZGluZy5jbGFzc0xpc3QuYWRkKCdzdWItaGVhZGluZycpO1xuICAgICAgICAgICAgICAgIHN1YkhlYWRpbmcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBpZCB9ID0gZWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVEaXJlY3RvcnlFbGVtZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtpZH1cImApKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmcnKTtcbiAgICAgICAgICAgICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gZWxlbWVudC50aXRsZTtcblxuICAgICAgICAgICAgICAgIHN1YkhlYWRpbmcuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Yi1zZWN0aW9uJykuYXBwZW5kQ2hpbGQoc3ViSGVhZGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9kbyA9IGNyZWF0ZVRvZG8oZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgc3ViU2VjdGlvbi5hcHBlbmRDaGlsZCh0b2RvKTtcbiAgICAgICAgICAgICAgICB0b2RvLnF1ZXJ5U2VsZWN0b3IoJy5kZGF0ZS1pbnB1dCcpLnZhbHVlID0gZWxlbWVudC5kdWVkYXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBhZGRGdW5jdGlvbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZnVuY3Rpb24nKTtcbiAgICBhZGRGdW5jdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAge1xuICAgICAgICBhZGRGdW5jdGlvbihhZGRUb0VsZW1lbnRzKTtcbiAgICB9KTtcbiAgICBmdW5jdGlvbiBhZGRGdW5jdGlvbihhZGRUb0VsZW1lbnRzKVxuICAgIHtcbiAgICAgICAgaWYgKGFkZEZ1bmN0aW9uT24gPT09IGZhbHNlKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAocmVtb3ZlRnVuY3Rpb25PbiA9PSB0cnVlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR1cm5PZmZSZW1vdmVGdW5jdGlvbihyZW1vdmVFbGVtZW50cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhZGRGdW5jdGlvbk9uID0gdHJ1ZTtcbiAgICAgICAgICAgIGFkZFRvRWxlbWVudHMuZm9yRWFjaCgoYWRkVG9FbGVtZW50KSA9PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGFkZFRvRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jYXRlZ29yeS10aXRsZScpLmNsYXNzTGlzdC5hZGQoJ2dyZWVuLXRleHQtZWxlbWVudCcpO1xuXG4gICAgICAgICAgICAgICAgYWRkVG9FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWRkRnVuY3Rpb25PbiA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm91dGUgPSBnZXRFbGVtZW50Um91dGUoYWRkVG9FbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGxvZ2ljTW9kdWxlLmZpbmRCeUlEKHJvdXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRWxlbWVudE1lbnUocGFyZW50LCBhZGRUb0VsZW1lbnQsIHJvdXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR1cm5PZmZBZGRGdW5jdGlvbihhZGRUb0VsZW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdHVybk9mZkFkZEZ1bmN0aW9uKGFkZFRvRWxlbWVudHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHR1cm5PZmZBZGRGdW5jdGlvbihhZGRUb0VsZW1lbnRzKVxuICAgIHtcbiAgICAgICAgYWRkRnVuY3Rpb25PbiA9IGZhbHNlO1xuICAgICAgICBhZGRUb0VsZW1lbnRzLmZvckVhY2goKGFkZFRvRWxlbWVudCkgPT5cbiAgICAgICAge1xuICAgICAgICAgICAgYWRkVG9FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNhdGVnb3J5LXRpdGxlJykuY2xhc3NMaXN0LnJlbW92ZSgnZ3JlZW4tdGV4dC1lbGVtZW50Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzZXRTZWNvbmREaXNwbGF5KClcbiAgICB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWNvbmQtZGlzcGxheScpLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVFbGVtZW50TWVudShwYXJlbnQsIGNvbnRhaW5lciwgcm91dGUpXG4gICAge1xuICAgICAgICBzZXRTZWNvbmREaXNwbGF5KCk7XG4gICAgICAgIGxldCBvcHRpb247XG4gICAgICAgIGNvbnN0IHsgY2FuQ29udGVudCB9ID0gcGFyZW50O1xuICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdC1lbGVtZW50LW1lbnUnKTtcbiAgICAgICAgbWVudS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgIGNhbkNvbnRlbnQuZm9yRWFjaCgoY29udGVudCkgPT5cbiAgICAgICAge1xuICAgICAgICAgICAgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBvcHRpb24uY2xhc3NMaXN0LmFkZCgnc2VtLW9wdGlvbicpO1xuICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICAgICAgICAgIG9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbWVudS5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgY3JlYXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1idXR0b24nKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVCdXR0b24uc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2Rpc3BsYXknKTtcbiAgICAgICAgICAgICAgICBpZiAoY29udGVudCA9PT0gJ2NhdGVnb3J5JyB8fCBjb250ZW50ID09PSAncHJvamVjdCcpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZUlucHV0TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXQtY2F0ZWdvcnktcHJvamVjdC10aXRsZScpO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZUlucHV0TWVudS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnZGlzcGxheScpO1xuICAgICAgICAgICAgICAgICAgICBjbG9zZVNEQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVJbnB1dE1lbnUucXVlcnlTZWxlY3RvcignLnNldC1jLXAtaW5wdXQnKS52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVJbnB1dE1lbnUuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlQnV0dG9uQWN0aW9uKGNyZWF0ZUJ1dHRvbiwgcGFyZW50LCBjb250ZW50LCBjb250YWluZXIsIHJvdXRlKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgeyBvbmNlOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY29uZC1kaXNwbGF5JykucXVlcnlTZWxlY3RvcignLnRvZG8nKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kby5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnZGlzcGxheScpO1xuICAgICAgICAgICAgICAgICAgICBjbG9zZVNEQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJBZGRUb2RvKHRvZG8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9kby5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVCdXR0b25BY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlQnV0dG9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRUb2RvVmFsdWVzKHRvZG8pLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgeyBvbmNlOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbWVudS5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9KTtcbiAgICAgICAgY2xvc2VTREJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlbW92ZUNoaWxkcmVuKG1lbnUpO1xuICAgICAgICB9LCB7IG9uY2U6IHRydWUgfSk7XG4gICAgICAgIHJldHVybiBtZW51O1xuICAgIH1cbiAgICBmdW5jdGlvbiByZW1vdmVDaGlsZHJlbihwYXJlbnQpXG4gICAge1xuICAgICAgICBjb25zdCByZW1vdmVkID0gW107XG4gICAgICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZClcbiAgICAgICAge1xuICAgICAgICAgICAgcmVtb3ZlZC5wdXNoKHBhcmVudC5sYXN0Q2hpbGQpO1xuICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5sYXN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZW1vdmVkO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZURpcmVjdG9yeShkaXJlY3RvcnkpXG4gICAge1xuICAgICAgICBjb25zdCBkaXJlY3RvcnlDb250ZW50ID0gZGlyZWN0b3J5LmNvbnRlbnRzO1xuXG4gICAgICAgIGRpcmVjdG9yeUNvbnRlbnQuZm9yRWFjaCgoZWxlbWVudCkgPT5cbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2FuQ29udGVudClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5jYW5Db250ZW50XG4gICAgICAgICAgICAgICAgICAgIFswXSA9PSAncHJvamVjdCcpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVDYXRlZ29yeShkaXJlY3RvcnksIGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlbGVtZW50LmNhbkNvbnRlbnRbMF0gPT09ICd0b2RvJylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVByb2plY3QoZGlyZWN0b3J5LCBlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVEaXJlY3RvcnkoZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY3JlYXRlUHJvamVjdEVsZW1lbnQoZGlyZWN0b3J5LmlkLCBlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRDb250YWluZXIoZGlyZWN0b3J5LCBlbGVtZW50KVxuICAgIHtcbiAgICAgICAgY29uc3QgZWxlbWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbGVtZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9nZ2xlLWNvbnRhaW5lcicpO1xuICAgICAgICBlbGVtZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGVsZW1lbnQuaWQpO1xuICAgICAgICBlbGVtZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1hZHRvJywgJ3RydWUnKTtcblxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY2F0ZWdvcnktaGVhZGVyJyk7XG5cbiAgICAgICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QuYWRkKCd0b2dnbGUnKTtcblxuICAgICAgICBjb25zdCB0b2dnbGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIHRvZ2dsZUljb24uY2xhc3NMaXN0LmFkZCgndG9nZ2xlLWltZycpO1xuICAgICAgICB0b2dnbGVJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgdG9nZ2xlSW1nKTtcbiAgICAgICAgdG9nZ2xlSWNvbi5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdpY29uIG9mIGEgdG9nZ2xlJyk7XG4gICAgICAgIHRvZ2dsZUJ1dHRvbnMucHVzaCh0b2dnbGVJY29uKTtcbiAgICAgICAgdG9nZ2xlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb2plY3RUb2dnbGVzQWRkRXZlbnRMaXN0ZW5lcnModG9nZ2xlSWNvbik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeS1wcm9qZWN0LWljb24nKTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNhdGVnb3J5LXRpdGxlJyk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gZWxlbWVudC50aXRsZTtcblxuICAgICAgICBjb25zdCBlbGVtZW50Q29udGFpbmVyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbGVtZW50Q29udGFpbmVyQ29udGVudC5jbGFzc0xpc3QuYWRkKCdlbGVtZW50LWNvbnRlbnQnKTtcbiAgICAgICAgZWxlbWVudENvbnRhaW5lckNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICd0b2dnbGFibGUnKTtcblxuICAgICAgICB0b2dnbGUuYXBwZW5kQ2hpbGQodG9nZ2xlSWNvbik7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0b2dnbGUpO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICAgICAgZWxlbWVudENvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50Q29udGFpbmVyQ29udGVudCk7XG5cbiAgICAgICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke2RpcmVjdG9yeS5pZH1cIl1gKS5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudC1jb250ZW50Jyk7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50Q29udGFpbmVyKTtcblxuICAgICAgICByZXR1cm4gZWxlbWVudENvbnRhaW5lcjtcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlQ2F0ZWdvcnkoZGlyZWN0b3J5LCBlbGVtZW50KVxuICAgIHtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBjcmVhdGVFbGVtZW50Q29udGFpbmVyKGRpcmVjdG9yeSwgZWxlbWVudCk7XG4gICAgICAgIGNhdGVnb3J5LmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5Jyk7XG4gICAgICAgIGNhdGVnb3J5LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeS1wcm9qZWN0LWljb24nKS50ZXh0Q29udGVudCA9ICdDJztcbiAgICAgICAgcmV0dXJuIGNhdGVnb3J5O1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KGRpcmVjdG9yeSwgZWxlbWVudClcbiAgICB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBjcmVhdGVFbGVtZW50Q29udGFpbmVyKGRpcmVjdG9yeSwgZWxlbWVudCk7XG4gICAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgICAgICBwcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeS1wcm9qZWN0LWljb24nKS50ZXh0Q29udGVudCA9ICdQJztcbiAgICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RFbGVtZW50KGRpcmVjdG9yeSwgZWxlbWVudClcbiAgICB7XG4gICAgICAgIGNvbnN0IHByb2plY3RFbGVtZW50SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3RFbGVtZW50SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY2F0ZWdvcnktaGVhZGVyJyk7XG4gICAgICAgIHByb2plY3RFbGVtZW50SGVhZGVyLnNldEF0dHJpYnV0ZSgnZGF0YS1lbGVtZW50JywgJ3RvZG8nKTtcbiAgICAgICAgcHJvamVjdEVsZW1lbnRIZWFkZXIuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgZWxlbWVudC5pZCk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdEVsZW1lbnRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3RFbGVtZW50SWNvbi5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeS1wcm9qZWN0LWljb24nKTtcbiAgICAgICAgcHJvamVjdEVsZW1lbnRJY29uLnRleHRDb250ZW50ID0gJ1QnO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RFbGVtZW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdEVsZW1lbnRUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNhdGVnb3J5LXRpdGxlJyk7XG4gICAgICAgIHByb2plY3RFbGVtZW50VGl0bGUudGV4dENvbnRlbnQgPSBlbGVtZW50LnRpdGxlO1xuXG4gICAgICAgIHByb2plY3RFbGVtZW50SGVhZGVyLmFwcGVuZENoaWxkKHByb2plY3RFbGVtZW50SWNvbik7XG4gICAgICAgIHByb2plY3RFbGVtZW50SGVhZGVyLmFwcGVuZENoaWxkKHByb2plY3RFbGVtZW50VGl0bGUpO1xuXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtkaXJlY3Rvcnl9XCJdYCkucXVlcnlTZWxlY3RvcignLmVsZW1lbnQtY29udGVudCcpO1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnRIZWFkZXIpO1xuXG4gICAgICAgIHJldHVybiBwcm9qZWN0RWxlbWVudEhlYWRlcjtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2xlYXJBZGRUb2RvKHRvZG8pXG4gICAge1xuICAgICAgICB0b2RvLnF1ZXJ5U2VsZWN0b3IoJy50aXRsZS1pbnB1dCcpLnZhbHVlID0gJyc7XG4gICAgICAgIHRvZG8ucXVlcnlTZWxlY3RvcignLmRkYXRlLWlucHV0JykudmFsdWUgPSAnJztcbiAgICAgICAgdG9kby5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHktdmFsdWUnKS52YWx1ZSA9ICdub3JtYWwnO1xuICAgICAgICB0b2RvLnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbi1pbnB1dCcpLnZhbHVlID0gJyc7XG4gICAgICAgIGNvbnN0IGNoZWNrbGlzdCA9IHRvZG8ucXVlcnlTZWxlY3RvcignLmNoZWNrbGlzdCcpO1xuICAgICAgICBjb25zdCBjaGVja2JveGVzID0gY2hlY2tsaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveC1jb250YWluZXInKTtcbiAgICAgICAgY2hlY2tib3hlcy5mb3JFYWNoKChjaGVja2JveCkgPT5cbiAgICAgICAge1xuICAgICAgICAgICAgY2hlY2tsaXN0LnJlbW92ZUNoaWxkKGNoZWNrYm94KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRvZG8odG9kb1ZhbHVlcylcbiAgICB7XG4gICAgICAgIGNvbnN0IHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKCd0b2RvJyk7XG5cbiAgICAgICAgY29uc3QgdG9kb01haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kb01haW4uY2xhc3NMaXN0LmFkZCgndG9kby1tYWluJyk7XG5cbiAgICAgICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QuYWRkKCd0b2RvLXRpdGxlJyk7XG5cbiAgICAgICAgY29uc3QgdG9kb1RpdGxlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RvVGl0bGVDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3RvZG8tdGl0bGUtY29udGVudCcpO1xuICAgICAgICB0b2RvVGl0bGVDb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAndGV4dC1jb250ZW50Jyk7XG4gICAgICAgIHRvZG9UaXRsZUNvbnRlbnQudGV4dENvbnRlbnQgPSB0b2RvVmFsdWVzLnRpdGxlO1xuXG4gICAgICAgIGNvbnN0IHRvZG9UaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdG9kb1RpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgndGl0bGUtaW5wdXQnKTtcbiAgICAgICAgdG9kb1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgdG9kb1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnMjAnKTtcbiAgICAgICAgdG9kb1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBub25lJyk7XG4gICAgICAgIHRvZG9UaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG4gICAgICAgIHRvZG9UaXRsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHRvZG9WYWx1ZXMudGl0bGUgPSB0b2RvVGl0bGVJbnB1dC52YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgdGl0bGVFZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRpdGxlRWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0ZXh0LWVkaXQtYnV0dG9uJyk7XG4gICAgICAgIHRpdGxlRWRpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JlYWQtbW9kZScpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlRWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgdGl0bGVFZGl0SWNvbi5jbGFzc0xpc3QuYWRkKCdlZGl0LWljb24nKTtcbiAgICAgICAgdGl0bGVFZGl0SWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsIGVkaXRJY29uMik7XG4gICAgICAgIHRpdGxlRWRpdEljb24uc2V0QXR0cmlidXRlKCdhbHQnLCAnZWRpdCBpbmRpY2F0b3IgaWNvbicpO1xuXG4gICAgICAgIGVkaXRJY29ucy5wdXNoKHRpdGxlRWRpdEJ1dHRvbik7XG4gICAgICAgIHRpdGxlRWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGVkaXRJY29uQWRkRXZlbnRMaXN0ZW5lcnModGl0bGVFZGl0QnV0dG9uKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGl0bGVFZGl0QnV0dG9uLmFwcGVuZENoaWxkKHRpdGxlRWRpdEljb24pO1xuICAgICAgICB0b2RvVGl0bGUuYXBwZW5kQ2hpbGQodG9kb1RpdGxlQ29udGVudCk7XG4gICAgICAgIHRvZG9UaXRsZS5hcHBlbmRDaGlsZCh0b2RvVGl0bGVJbnB1dCk7XG4gICAgICAgIHRvZG9UaXRsZS5hcHBlbmRDaGlsZCh0aXRsZUVkaXRCdXR0b24pO1xuXG4gICAgICAgIGNvbnN0IHRvZG9EdWVkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZG9EdWVkYXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZHVlZGF0ZScpO1xuXG4gICAgICAgIGNvbnN0IHRvZG9EdWVkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICB0b2RvRHVlZGF0ZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ3RvZG8tbGFiZWwnKTtcbiAgICAgICAgdG9kb0R1ZWRhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkdWVEYXRlJyk7XG4gICAgICAgIHRvZG9EdWVkYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIGRhdGUnO1xuXG4gICAgICAgIGNvbnN0IHRvZG9EdWVkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0b2RvRHVlZGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2RkYXRlLWlucHV0Jyk7XG4gICAgICAgIHRvZG9EdWVkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICAgICAgdG9kb0R1ZWRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2R1ZS1kYXRlJyk7XG4gICAgICAgIGNvbnN0IGRhdGVWYWx1ZSA9IHRvZG9WYWx1ZXMuZHVlZGF0ZTtcbiAgICAgICAgdG9kb0R1ZWRhdGVJbnB1dC52YWx1ZSA9IGRhdGVWYWx1ZTtcbiAgICAgICAgdG9kb0R1ZWRhdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PlxuICAgICAgICB7XG4gICAgICAgICAgICB0b2RvVmFsdWVzLmR1ZWRhdGUgPSB0b2RvRHVlZGF0ZUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgcGVyaW9kRGF0ZUlucHV0Q2hhbmdlQWN0aW9uKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRvZG9EdWVkYXRlLmFwcGVuZENoaWxkKHRvZG9EdWVkYXRlTGFiZWwpO1xuICAgICAgICB0b2RvRHVlZGF0ZS5hcHBlbmRDaGlsZCh0b2RvRHVlZGF0ZUlucHV0KTtcblxuICAgICAgICBjb25zdCB0b2RvUHJpb3JpdHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kb1ByaW9yaXR5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tcHJpb3JpdHktY29udGFpbmVyJyk7XG5cbiAgICAgICAgY29uc3QgY2hhbmdlUHJpb3JpdHlTdWJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNoYW5nZVByaW9yaXR5U3Vicy5jbGFzc0xpc3QuYWRkKCdjaGFuZ2UtcHJpb3JpdHknLCAncm91bmQtYnV0dG9uJyk7XG4gICAgICAgIGNoYW5nZVByaW9yaXR5U3Vicy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1YnMnKTtcbiAgICAgICAgcHJpb3JpdHlTcGlubmVycy5wdXNoKGNoYW5nZVByaW9yaXR5U3Vicyk7XG4gICAgICAgIGNoYW5nZVByaW9yaXR5U3Vicy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHByaW9yaXR5U3Bpbm5lcnNBZGRFdmVudExpc3RlbmVycyhjaGFuZ2VQcmlvcml0eVN1YnMpO1xuICAgICAgICAgICAgdG9kb1ZhbHVlcy5wcmlvcml0eSA9IGNoYW5nZVByaW9yaXR5U3Vicy5jbG9zZXN0KCcudG9kby1wcmlvcml0eS1jb250YWluZXInKS5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHktdmFsdWUnKS50ZXh0Q29udGVudDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZG9Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0b2RvLXByaW9yaXR5Jyk7XG5cbiAgICAgICAgY29uc3QgdG9kb1ByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kb1ByaW9yaXR5TGFiZWwuY2xhc3NMaXN0LmFkZCgndG9kby1sYWJlbCcpO1xuICAgICAgICB0b2RvUHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eSc7XG5cbiAgICAgICAgY29uc3QgdG9kb1ByaW9yaXR5VmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kb1ByaW9yaXR5VmFsdWUuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktdmFsdWUnKTtcbiAgICAgICAgdG9kb1ByaW9yaXR5VmFsdWUudGV4dENvbnRlbnQgPSB0b2RvVmFsdWVzLnByaW9yaXR5O1xuXG4gICAgICAgIGNvbnN0IGNoYW5nZVByaW9yaXR5QWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNoYW5nZVByaW9yaXR5QWRkLmNsYXNzTGlzdC5hZGQoJ2NoYW5nZS1wcmlvcml0eScsICdyb3VuZC1idXR0b24nKTtcbiAgICAgICAgY2hhbmdlUHJpb3JpdHlBZGQuc2V0QXR0cmlidXRlKCdpZCcsICdhZGQnKTtcbiAgICAgICAgcHJpb3JpdHlTcGlubmVycy5wdXNoKGNoYW5nZVByaW9yaXR5QWRkKTtcbiAgICAgICAgY2hhbmdlUHJpb3JpdHlBZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgICAgICB7XG4gICAgICAgICAgICBwcmlvcml0eVNwaW5uZXJzQWRkRXZlbnRMaXN0ZW5lcnMoY2hhbmdlUHJpb3JpdHlBZGQpO1xuICAgICAgICAgICAgdG9kb1ZhbHVlcy5wcmlvcml0eSA9IGNoYW5nZVByaW9yaXR5QWRkLmNsb3Nlc3QoJy50b2RvLXByaW9yaXR5LWNvbnRhaW5lcicpLnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eS12YWx1ZScpLnRleHRDb250ZW50O1xuICAgICAgICB9KTtcblxuICAgICAgICB0b2RvUHJpb3JpdHkuYXBwZW5kQ2hpbGQodG9kb1ByaW9yaXR5TGFiZWwpO1xuICAgICAgICB0b2RvUHJpb3JpdHkuYXBwZW5kQ2hpbGQodG9kb1ByaW9yaXR5VmFsdWUpO1xuICAgICAgICB0b2RvUHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hhbmdlUHJpb3JpdHlTdWJzKTtcbiAgICAgICAgdG9kb1ByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9Qcmlvcml0eSk7XG4gICAgICAgIHRvZG9Qcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGFuZ2VQcmlvcml0eUFkZCk7XG5cbiAgICAgICAgY29uc3QgY2hlY2tEb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNoZWNrRG9uZS5jbGFzc0xpc3QuYWRkKCdjaGVjay1kb25lJyk7XG5cbiAgICAgICAgY29uc3QgY2hlY2tEb25lQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNoZWNrRG9uZUJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjaGVjay1kb25lLWJ1dHRvbi1jb250YWluZXInKTtcblxuICAgICAgICBjb25zdCBjaGVja0RvbmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2hlY2tEb25lQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NoZWNrLWRvbmUtYnV0dG9uJyk7XG4gICAgICAgIGNoZWNrRG9uZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW5DQicpO1xuICAgICAgICBtYWluQ2hlY2tCdXR0b25zLnB1c2goY2hlY2tEb25lQnV0dG9uKTtcbiAgICAgICAgY2hlY2tEb25lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICAgICAge1xuICAgICAgICAgICAgbWFpbkNCQWRkRXZlbnRMaXN0ZW5lcnMoY2hlY2tEb25lQnV0dG9uKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY2hlY2tEb25lQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrRG9uZUJ1dHRvbik7XG4gICAgICAgIGNoZWNrRG9uZS5hcHBlbmRDaGlsZChjaGVja0RvbmVCdXR0b25Db250YWluZXIpO1xuXG4gICAgICAgIHRvZG9NYWluLmFwcGVuZENoaWxkKHRvZG9UaXRsZSk7XG4gICAgICAgIHRvZG9NYWluLmFwcGVuZENoaWxkKHRvZG9EdWVkYXRlKTtcbiAgICAgICAgdG9kb01haW4uYXBwZW5kQ2hpbGQodG9kb1ByaW9yaXR5Q29udGFpbmVyKTtcbiAgICAgICAgdG9kb01haW4uYXBwZW5kQ2hpbGQoY2hlY2tEb25lKTtcblxuICAgICAgICBjb25zdCB0b2RvQ2hlY2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZG9DaGVja0xpc3QuY2xhc3NMaXN0LmFkZCgndG9kby1jaGVja2xpc3QnKTtcbiAgICAgICAgdG9kb0NoZWNrTGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZ2dsZS1jb250YWluZXInKTtcblxuICAgICAgICBjb25zdCBjaGVja2xpc3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2hlY2tsaXN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2NoZWNrbGlzdC1oZWFkZXInKTtcblxuICAgICAgICBjb25zdCBjaGVja2xpc3RUb2dnbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2hlY2tsaXN0VG9nZ2xlLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZScpO1xuXG4gICAgICAgIGNvbnN0IGNoZWNrbGlzdFRvZ2dsZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjaGVja2xpc3RUb2dnbGVJbWcuY2xhc3NMaXN0LmFkZCgndG9nZ2xlLWltZycpO1xuICAgICAgICBjaGVja2xpc3RUb2dnbGVJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCB0b2dnbGVJbWcpO1xuICAgICAgICBjaGVja2xpc3RUb2dnbGVJbWcuc2V0QXR0cmlidXRlKCdhbHQnLCAnaWNvbiBvZiBhIHRvZ2dsZScpO1xuICAgICAgICB0b2dnbGVCdXR0b25zLnB1c2goY2hlY2tsaXN0VG9nZ2xlSW1nKTtcbiAgICAgICAgY2hlY2tsaXN0VG9nZ2xlSW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICAgICAge1xuICAgICAgICAgICAgcHJvamVjdFRvZ2dsZXNBZGRFdmVudExpc3RlbmVycyhjaGVja2xpc3RUb2dnbGVJbWcpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBjaGVja2xpc3RIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNoZWNrbGlzdEhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnY2hlY2tsaXN0LWhlYWRpbmcnKTtcbiAgICAgICAgY2hlY2tsaXN0SGVhZGluZy50ZXh0Q29udGVudCA9ICdDaGVja2xpc3QnO1xuXG4gICAgICAgIGNvbnN0IGNoZWNrbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjaGVja2xpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2hlY2tsaXN0LWNvbnRhaW5lcicpO1xuICAgICAgICBjaGVja2xpc3RDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICd0b2dnbGFibGUnKTtcblxuICAgICAgICBjb25zdCBjaGVja2xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2hlY2tsaXN0LmNsYXNzTGlzdC5hZGQoJ2NoZWNrbGlzdCcpO1xuXG4gICAgICAgIHRvZG9WYWx1ZXMuY2hlY2tib3hlcy5mb3JFYWNoKChjaGVja2JveFZhbHVlKSA9PlxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBjaGVja2JveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY2hlY2tib3hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gtY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94RG9uZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY2hlY2tib3hEb25lQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NoZWNrLWRvbmUtYnV0dG9uJyk7XG4gICAgICAgICAgICBjaGVja0J1dHRvbnMucHVzaChjaGVja2JveERvbmVCdXR0b24pO1xuICAgICAgICAgICAgY2hlY2tib3hEb25lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjaGVja0J1dHRvbkFkZEV2ZW50TGlzdGVuZXJzKGNoZWNrYm94RG9uZUJ1dHRvbik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgY2hlY2tib3hMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY2hlY2tib3hMYWJlbC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveC1sYWJlbCcpO1xuICAgICAgICAgICAgY2hlY2tib3hMYWJlbC50ZXh0Q29udGVudCA9IGNoZWNrYm94VmFsdWU7XG5cbiAgICAgICAgICAgIGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94RG9uZUJ1dHRvbik7XG4gICAgICAgICAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveExhYmVsKTtcbiAgICAgICAgICAgIGNoZWNrbGlzdC5hcHBlbmRDaGlsZChjaGVja2JveENvbnRhaW5lcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGNyZWF0ZUNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNyZWF0ZUNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1jaGVja2JveCcpO1xuXG4gICAgICAgIGNvbnN0IGNoZWNrYm94VGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNoZWNrYm94VGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveC10aXRsZS1pbnB1dCcpO1xuICAgICAgICBjaGVja2JveFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgY2hlY2tib3hUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnbWlubGVuZ3RoJywgJzEnKTtcbiAgICAgICAgY2hlY2tib3hUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnY2hlY2tib3ggdGl0bGUnKTtcbiAgICAgICAgY2hlY2tib3hUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgJzMwJyk7XG4gICAgICAgIGNoZWNrYm94VGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NoZWNrbGlzdC1jcmVhdGUnKTtcbiAgICAgICAgY2hlY2tib3hUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG5cbiAgICAgICAgY29uc3QgYWRkQ2hlY2tib3hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYWRkQ2hlY2tib3hCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkLWNoZWNrYm94JywgJ3JvdW5kLWJ1dHRvbicpO1xuICAgICAgICBhZGRDaGVja2JveEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZCcpO1xuICAgICAgICBhZGRDaGVja2JveEJ1dHRvbnMucHVzaChhZGRDaGVja2JveEJ1dHRvbik7XG4gICAgICAgIGFkZENoZWNrYm94QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICAgICAge1xuICAgICAgICAgICAgdG9kb1ZhbHVlcy5jaGVja2JveGVzLnB1c2goYWRkQ2hlY2tib3hCdXR0b24uY2xvc2VzdCgnLmNyZWF0ZS1jaGVja2JveCcpLnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveC10aXRsZS1pbnB1dCcpLnZhbHVlKTtcbiAgICAgICAgICAgIGFkZENoZWNrYm94QnV0dG9uQWN0aW9uKGFkZENoZWNrYm94QnV0dG9uKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY3JlYXRlQ2hlY2tib3guYXBwZW5kQ2hpbGQoY2hlY2tib3hUaXRsZUlucHV0KTtcbiAgICAgICAgY3JlYXRlQ2hlY2tib3guYXBwZW5kQ2hpbGQoYWRkQ2hlY2tib3hCdXR0b24pO1xuXG4gICAgICAgIGNoZWNrbGlzdFRvZ2dsZS5hcHBlbmRDaGlsZChjaGVja2xpc3RUb2dnbGVJbWcpO1xuICAgICAgICBjaGVja2xpc3RIZWFkZXIuYXBwZW5kQ2hpbGQoY2hlY2tsaXN0VG9nZ2xlKTtcbiAgICAgICAgY2hlY2tsaXN0SGVhZGVyLmFwcGVuZENoaWxkKGNoZWNrbGlzdEhlYWRpbmcpO1xuICAgICAgICB0b2RvQ2hlY2tMaXN0LmFwcGVuZENoaWxkKGNoZWNrbGlzdEhlYWRlcik7XG4gICAgICAgIGNoZWNrbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2xpc3QpO1xuICAgICAgICBjaGVja2xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQ2hlY2tib3gpO1xuICAgICAgICB0b2RvQ2hlY2tMaXN0LmFwcGVuZENoaWxkKGNoZWNrbGlzdENvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZG9EZXNjcmlwdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLWRlc2NyaXB0aW9uLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RvRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndG9kby1kZXNjcmlwdGlvbicpO1xuICAgICAgICB0b2RvRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsICd0ZXh0LWNvbnRlbnQnKTtcbiAgICAgICAgdG9kb0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdG9kb1ZhbHVlcy5kZXNjcmlwdGlvbjtcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbi1pbnB1dCcsICd0b2RvLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsICcyMDAnKTtcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmUnKTtcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuICAgICAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgndmFsaWRhdGUtZW1wdHknLCAnZmFsc2UnKTtcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PlxuICAgICAgICB7XG4gICAgICAgICAgICB0b2RvVmFsdWVzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25FZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uRWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0ZXh0LWVkaXQtYnV0dG9uJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uRWRpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JlYWQtbW9kZScpO1xuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uRWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgZGVzY3JpcHRpb25FZGl0SWNvbi5jbGFzc0xpc3QuYWRkKCdlZGl0LWljb24nKTtcbiAgICAgICAgZGVzY3JpcHRpb25FZGl0SWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsIGVkaXRJY29uMik7XG4gICAgICAgIGRlc2NyaXB0aW9uRWRpdEljb24uc2V0QXR0cmlidXRlKCdhbHQnLCAnZWRpdCBpbmRpY2F0b3IgaWNvbicpO1xuXG4gICAgICAgIGVkaXRJY29ucy5wdXNoKGRlc2NyaXB0aW9uRWRpdEJ1dHRvbik7XG4gICAgICAgIGRlc2NyaXB0aW9uRWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGVkaXRJY29uQWRkRXZlbnRMaXN0ZW5lcnMoZGVzY3JpcHRpb25FZGl0QnV0dG9uKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZGVzY3JpcHRpb25FZGl0QnV0dG9uLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRWRpdEljb24pO1xuICAgICAgICB0b2RvRGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0Rlc2NyaXB0aW9uKTtcbiAgICAgICAgdG9kb0Rlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xuICAgICAgICB0b2RvRGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25FZGl0QnV0dG9uKTtcblxuICAgICAgICB0b2RvLmFwcGVuZENoaWxkKHRvZG9NYWluKTtcbiAgICAgICAgdG9kby5hcHBlbmRDaGlsZCh0b2RvQ2hlY2tMaXN0KTtcbiAgICAgICAgdG9kby5hcHBlbmRDaGlsZCh0b2RvRGVzY3JpcHRpb25Db250YWluZXIpO1xuXG4gICAgICAgIHJldHVybiB0b2RvO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRUb2RvVmFsdWVzKHRvZG8pXG4gICAge1xuICAgICAgICBjb25zdCB0aXRsZSA9IHRvZG8ucXVlcnlTZWxlY3RvcignLnRpdGxlLWlucHV0JykudmFsdWU7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSB0b2RvLnF1ZXJ5U2VsZWN0b3IoJy5kZGF0ZS1pbnB1dCcpLnZhbHVlO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IHRvZG8ucXVlcnlTZWxlY3RvcignLnByaW9yaXR5LXZhbHVlJykudGV4dENvbnRlbnQ7XG5cbiAgICAgICAgY29uc3QgY2hlY2tib3hlc0VsZW1lbnRzID0gdG9kby5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3gtbGFiZWwnKTtcbiAgICAgICAgY29uc3QgY2hlY2tib3hlcyA9IFtdO1xuICAgICAgICBjaGVja2JveGVzRWxlbWVudHMuZm9yRWFjaCgoY2hlY2tib3gpID0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNoZWNrYm94ZXMucHVzaChjaGVja2JveC50ZXh0Q29udGVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdG9kby5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb24taW5wdXQnKS52YWx1ZTtcbiAgICAgICAgbGV0IGlzRG9uZSA9IGZhbHNlO1xuICAgICAgICBpZiAodG9kby5xdWVyeVNlbGVjdG9yKCdjaGVjay1kb25lLWJ1dHRvbicpICYmIHRvZG8ucXVlcnlTZWxlY3RvcignY2hlY2stZG9uZS1idXR0b24nKS5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrZWQnKSlcbiAgICAgICAge1xuICAgICAgICAgICAgaXNEb25lID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgIGR1ZURhdGUsXG4gICAgICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgICAgIGNoZWNrYm94ZXMsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGlzRG9uZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0RWxlbWVudFJvdXRlKGVsZW1lbnQpXG4gICAge1xuICAgICAgICBjb25zdCByb3V0ZSA9IFtdO1xuICAgICAgICBsZXQgaWQ7XG4gICAgICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1lbGVtZW50JykgPT09ICd0b2RvJylcbiAgICAgICAge1xuICAgICAgICAgICAgaWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgaWQgPSBlbGVtZW50LmNsb3Nlc3QoJ1tkYXRhLWFkdG89XCJ0cnVlXCJdJykuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgIH1cbiAgICAgICAgcm91dGUucHVzaCgraWQpO1xuICAgICAgICB3aGlsZSAoK2lkICE9PSAwKVxuICAgICAgICB7XG4gICAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50LmNsb3Nlc3QoJ1tkYXRhLWFkdG89XCJ0cnVlXCJdJyk7XG4gICAgICAgICAgICBpZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgICAgICByb3V0ZS5wdXNoKCtpZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvdXRlLnJldmVyc2UoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gQkNnZXRJbnB1dFZhbHVlKGJ1dHRvbilcbiAgICB7XG4gICAgICAgIGxldCBpbnB1dFRvVmFsaWRhdGU7XG4gICAgICAgIGlmIChidXR0b24uY2xvc2VzdCgnLnNlY29uZC1kaXNwbGF5LW1lbnUnKS5xdWVyeVNlbGVjdG9yKCcudG9kbycpLnN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2Rpc3BsYXknKSAhPSAnbm9uZScpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlucHV0VG9WYWxpZGF0ZSA9IGJ1dHRvbi5jbG9zZXN0KCcuc2Vjb25kLWRpc3BsYXktbWVudScpLnF1ZXJ5U2VsZWN0b3IoJy50b2RvJykucXVlcnlTZWxlY3RvcignLnRpdGxlLWlucHV0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBpbnB1dFRvVmFsaWRhdGUgPSBidXR0b24uY2xvc2VzdCgnLnNlY29uZC1kaXNwbGF5LW1lbnUnKS5xdWVyeVNlbGVjdG9yKCcuc2V0LWNhdGVnb3J5LXByb2plY3QtdGl0bGUnKS5xdWVyeVNlbGVjdG9yKCcuc2V0LWMtcC1pbnB1dCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbnB1dFRvVmFsaWRhdGUudmFsaWRpdHkudmFsdWVNaXNzaW5nKVxuICAgICAgICB7XG4gICAgICAgICAgICBpbnB1dFRvVmFsaWRhdGUuc2V0Q3VzdG9tVmFsaWRpdHkoJ011c3QgY29uc2lzdCBhdCBsZWFzdCBvbmUgY2hhcmFjdGVyJyk7XG4gICAgICAgICAgICBpbnB1dFRvVmFsaWRhdGUucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5wdXRUb1ZhbGlkYXRlLnZhbHVlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVCdXR0b25BY3Rpb24oYnV0dG9uLCBwYXJlbnQsIGVsZW1lbnQsIGNvbnRhaW5lciwgcm91dGUsIHZhbHVlcylcbiAgICB7XG4gICAgICAgIGNvbnN0IGlucHV0VmFsdWUgPSBCQ2dldElucHV0VmFsdWUoYnV0dG9uKTtcbiAgICAgICAgbGV0IGxvZ2ljRWxlbWVudDtcbiAgICAgICAgbGV0IG5ld0VsZW1lbnQ7XG4gICAgICAgIGlmIChpbnB1dFZhbHVlICE9PSAnJylcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQgPT09ICdjYXRlZ29yeScpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbG9naWNFbGVtZW50ID0gbG9naWNNb2R1bGUuY3JlYXRlQ2F0ZWdvcnkoaW5wdXRWYWx1ZSwgcm91dGUpO1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVDYXRlZ29yeShwYXJlbnQsIGxvZ2ljRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhZGRUb0VsZW1lbnRBY3Rpb24obmV3RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChlbGVtZW50ID09PSAncHJvamVjdCcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbG9naWNFbGVtZW50ID0gbG9naWNNb2R1bGUuY3JlYXRlUHJvamVjdChpbnB1dFZhbHVlLCByb3V0ZSk7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZVByb2plY3QocGFyZW50LCBsb2dpY0VsZW1lbnQpO1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9FbGVtZW50QWN0aW9uKG5ld0VsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxvZ2ljRWxlbWVudCA9IGxvZ2ljTW9kdWxlLmNyZWF0ZVRvZG8oXG4gICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXMuZHVlRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnByaW9yaXR5LFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXMuY2hlY2tib3hlcyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXMuaXNEb25lLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZVByb2plY3RFbGVtZW50KHBhcmVudC5pZCwgbG9naWNFbGVtZW50KTtcbiAgICAgICAgICAgICAgICBwZXJpb2REYXRlSW5wdXRDaGFuZ2VBY3Rpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFkZFRvRWxlbWVudHMucHVzaChuZXdFbGVtZW50KTtcbiAgICAgICAgICAgIHJlbW92ZUVsZW1lbnRzLnB1c2gobmV3RWxlbWVudCk7XG4gICAgICAgICAgICBpZiAoY29udGFpbmVyLmdldEF0dHJpYnV0ZSgnZGF0YS1kaXNwbGF5ZWQnKSA9PT0gJ3RydWUnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGdlbmVyYXRlRGlyZWN0b3J5RWxlbWVudChjb250YWluZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjbG9zZVNEQnV0dG9uLmNsaWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNyZWF0ZUJ1dHRvbkFjdGlvbihidXR0b24sIHBhcmVudCwgZWxlbWVudCwgY29udGFpbmVyLCByb3V0ZSwgdmFsdWVzKTtcbiAgICAgICAgICAgIH0sIHsgb25jZTogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZUZ1bmN0aW9uQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlbW92ZS1mdW5jdGlvbicpO1xuICAgIGxldCByZW1vdmVFbGVtZW50cyA9IGFkZFRvRWxlbWVudHMuc2xpY2UoMSwgYWRkVG9FbGVtZW50cy5sZW5ndGgpLmNvbmNhdChBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWVsZW1lbnQ9XCJ0b2RvXCJdJykpKTtcbiAgICByZW1vdmVGdW5jdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAge1xuICAgICAgICByZW1vdmVGdW5jdGlvbihyZW1vdmVFbGVtZW50cyk7XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gcmVtb3ZlRnVuY3Rpb24ocmVtb3ZlRWxlbWVudHMpXG4gICAge1xuICAgICAgICBpZiAocmVtb3ZlRnVuY3Rpb25PbiA9PT0gZmFsc2UpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmIChhZGRGdW5jdGlvbk9uID09PSB0cnVlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR1cm5PZmZBZGRGdW5jdGlvbihhZGRUb0VsZW1lbnRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbW92ZUZ1bmN0aW9uT24gPSB0cnVlO1xuICAgICAgICAgICAgcmVtb3ZlRWxlbWVudHMuZm9yRWFjaCgocmVtb3ZlRWxlbWVudCkgPT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZW1vdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNhdGVnb3J5LXRpdGxlJykuY2xhc3NMaXN0LmFkZCgncmVkLXRleHQtZWxlbWVudCcpO1xuXG4gICAgICAgICAgICAgICAgcmVtb3ZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVtb3ZlRnVuY3Rpb25PbiA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gcmVtb3ZlRWxlbWVudHMuaW5kZXhPZihyZW1vdmVFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUVsZW1lbnRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVtb3ZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudCcpICE9PSAndG9kbycpXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBhZGRUb0VsZW1lbnRzLmluZGV4T2YocmVtb3ZlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9FbGVtZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm91dGUgPSBnZXRFbGVtZW50Um91dGUocmVtb3ZlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsb2dpY0VsZW1lbnQgPSBsb2dpY01vZHVsZS5maW5kQnlJRChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsb2dpY1BhcmVudCA9IGxvZ2ljTW9kdWxlLmZpbmRCeUlEKHJvdXRlLnNsaWNlKDAsIHJvdXRlLmxlbmd0aCAtIDEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudENvbnRhaW5lciA9IHJlbW92ZUVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2ljTW9kdWxlLnJlbW92ZUVsZW1lbnQobG9naWNQYXJlbnQsIGxvZ2ljRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0dXJuT2ZmUmVtb3ZlRnVuY3Rpb24ocmVtb3ZlRWxlbWVudHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlbW92ZUVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1kaXNwbGF5ZWQnKSA9PT0gJ3RydWUnKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRGlyZWN0b3J5RWxlbWVudChyZW1vdmVFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChyZW1vdmVFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWRpc3BsYXllZCcpID09PSAndHJ1ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVEaXJlY3RvcnlFbGVtZW50KHJlbW92ZUVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChyZW1vdmVFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1kaXNwbGF5ZWQnKSA9PT0gJ3RydWUnKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1YlNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3ViLXNlY3Rpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVDaGlsZHJlbihzdWJTZWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyLmNsYXNzTGlzdC5hZGQoJ3N1Yi1zZWN0aW9uLXBsYWNlaG9sZGVyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIudGV4dENvbnRlbnQgPSAnQ2xpY2sgYW4gZWxlbWVudCBmcm9tIFlvdXIgZGlyZWN0b3J5IHRvIHZpZXcgaXQgaGVyZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViU2VjdGlvbi5hcHBlbmRDaGlsZChwbGFjZWhvbGRlcik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1zZWN0aW9uLWhlYWRpbmcnKS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRDb250YWluZXIucmVtb3ZlQ2hpbGQocmVtb3ZlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJpb2RDaGVja1JlbW92ZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZWxlbWVudD1cInRvZG9cIl0nKS5mb3JFYWNoKCh0b2RvKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2ljTW9kdWxlLnRvZG9zQ2hlY2tSZW1vdmVkKCt0b2RvLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR1cm5PZmZSZW1vdmVGdW5jdGlvbihyZW1vdmVFbGVtZW50cyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdHVybk9mZlJlbW92ZUZ1bmN0aW9uKHJlbW92ZUVsZW1lbnRzKVxuICAgIHtcbiAgICAgICAgcmVtb3ZlRnVuY3Rpb25PbiA9IGZhbHNlO1xuICAgICAgICByZW1vdmVFbGVtZW50cy5mb3JFYWNoKChyZW1vdmVFbGVtZW50KSA9PlxuICAgICAgICB7XG4gICAgICAgICAgICByZW1vdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNhdGVnb3J5LXRpdGxlJykuY2xhc3NMaXN0LnJlbW92ZSgncmVkLXRleHQtZWxlbWVudCcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgIH07XG59KCkpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Nb2R1bGU7XG4iLCJjb25zdCBsb2dpY01vZHVsZSA9IChmdW5jdGlvbiAoKVxue1xuICAgIGxldCBpZHNldCA9IC0xO1xuXG4gICAgY2xhc3MgRWxlbWVudFxuICAgIHtcbiAgICAgICAgY29uc3RydWN0b3IodGl0bGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgICAgIHRoaXMuaWQgPSArK2lkc2V0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xhc3MgVG9kbyBleHRlbmRzIEVsZW1lbnRcbiAgICB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkdWVkYXRlLCBwcmlvcml0eSwgY2hlY2tsaXN0LCBkZXNjcmlwdGlvbiwgcm91dGUsIGRvbmUgPSBmYWxzZSlcbiAgICAgICAge1xuICAgICAgICAgICAgc3VwZXIodGl0bGUpO1xuICAgICAgICAgICAgdGhpcy5kdWVkYXRlID0gZHVlZGF0ZTtcbiAgICAgICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tib3hlcyA9IGNoZWNrbGlzdDtcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgICAgIHRoaXMuZG9uZSA9IGRvbmU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGFzcyBQcm9qZWN0IGV4dGVuZHMgRWxlbWVudFxuICAgIHtcbiAgICAgICAgY29uc3RydWN0b3IodGl0bGUsIGNvbnRlbnRzID0gW10sIGNhbkNvbnRlbnQgPSBbJ3RvZG8nXSlcbiAgICAgICAge1xuICAgICAgICAgICAgc3VwZXIodGl0bGUpO1xuICAgICAgICAgICAgdGhpcy5jb250ZW50cyA9IGNvbnRlbnRzO1xuICAgICAgICAgICAgdGhpcy5jYW5Db250ZW50ID0gY2FuQ29udGVudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsYXNzIENhdGVnb3J5IGV4dGVuZHMgRWxlbWVudFxuICAgIHtcbiAgICAgICAgY29uc3RydWN0b3IodGl0bGUsIGNvbnRlbnRzID0gW10sIGNhbkNvbnRlbnQgPSBbJ3Byb2plY3QnLCAnY2F0ZWdvcnknXSlcbiAgICAgICAge1xuICAgICAgICAgICAgc3VwZXIodGl0bGUpO1xuICAgICAgICAgICAgdGhpcy5jb250ZW50cyA9IGNvbnRlbnRzO1xuICAgICAgICAgICAgdGhpcy5jYW5Db250ZW50ID0gY2FuQ29udGVudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJvb3QgPSBuZXcgQ2F0ZWdvcnkoJ1lvdXIgZGlyZWN0b3J5Jyk7XG5cbiAgICBmdW5jdGlvbiBmaW5kQnlJRChpZFJvdXRlKVxuICAgIHtcbiAgICAgICAgaWYgKGlkUm91dGUubGVuZ3RoID09PSAwKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaWQgPSBpZFJvdXRlWzFdO1xuICAgICAgICBsZXQgcGFyZW50ID0gcm9vdDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBpZFJvdXRlLmxlbmd0aDspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhcmVudC5jb250ZW50cy5mb3JFYWNoKChjaGlsZCkgPT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQuaWQgPT09IGlkKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50ID0gY2hpbGQ7XG4gICAgICAgICAgICAgICAgICAgIGlkID0gaWRSb3V0ZVsrK2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudChjaGlsZCwgaWRSb3V0ZSlcbiAgICB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGZpbmRCeUlEKGlkUm91dGUpO1xuICAgICAgICBwYXJlbnQuY29udGVudHMucHVzaChjaGlsZCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlQ2F0ZWdvcnkodGl0bGUsIGlkUm91dGUpXG4gICAge1xuICAgICAgICBjb25zdCBjYXRlZ29yeSA9IG5ldyBDYXRlZ29yeSh0aXRsZSk7XG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoY2F0ZWdvcnksIGlkUm91dGUpO1xuICAgICAgICByZXR1cm4gY2F0ZWdvcnk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSwgaWRSb3V0ZSlcbiAgICB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdCh0aXRsZSk7XG4gICAgICAgIGNyZWF0ZUVsZW1lbnQocHJvamVjdCwgaWRSb3V0ZSk7XG4gICAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRvZG8odGl0bGUsIGlkUm91dGUsIGR1ZWRhdGUsIHByaW9yaXR5LCBjaGVja2xpc3QsIGRlc2NyaXB0aW9uLCBkb25lID0gZmFsc2UpXG4gICAge1xuICAgICAgICBjb25zdCB0b2RvID0gbmV3IFRvZG8odGl0bGUsIGR1ZWRhdGUsIHByaW9yaXR5LCBjaGVja2xpc3QsIGRlc2NyaXB0aW9uLCBpZFJvdXRlLCBkb25lKTtcbiAgICAgICAgY3JlYXRlRWxlbWVudCh0b2RvLCBpZFJvdXRlKTtcbiAgICAgICAgdG9kb3MucHVzaCh0b2RvKTtcbiAgICAgICAgcmV0dXJuIHRvZG87XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlRWxlbWVudChwYXJlbnQsIGNoaWxkKVxuICAgIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBwYXJlbnQuY29udGVudHMuaW5kZXhPZihjaGlsZCk7XG4gICAgICAgIHBhcmVudC5jb250ZW50cyA9IHBhcmVudC5jb250ZW50cy5zbGljZSgwLCBpbmRleCkuY29uY2F0KFxuICAgICAgICAgICAgcGFyZW50LmNvbnRlbnRzLnNsaWNlKGluZGV4ICsgMSwgcGFyZW50LmNvbnRlbnRzLmxlbmd0aCksXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgbGV0IHRvZG9zID0gW107XG5cbiAgICBmdW5jdGlvbiB0b2Rvc0NoZWNrUmVtb3ZlZChpZClcbiAgICB7XG4gICAgICAgIGNvbnN0IHRvZG8gPSB0b2Rvcy5maW5kKChlbGVtZW50KSA9PiBlbGVtZW50LmlkID09PSBpZCk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdG9kb3MuaW5kZXhPZih0b2RvKTtcbiAgICAgICAgdG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG5cbiAgICBjcmVhdGVDYXRlZ29yeSgnSG9tZScsIFtdKTtcbiAgICBjcmVhdGVQcm9qZWN0KCdDbGVhbmluZycsIFswLCAxXSk7XG4gICAgY3JlYXRlVG9kbygnRG8gdGhlIHZhY3V1bWluZycsIFswLCAxLCAyXSwgJzIwMjItMDUtMTgnLCAnaGlnaCcsIFsnYmVkcm9vbScsICdraXRjaGVuJywgJ2JhdGhyb29tJywgJ2xpdmluZyByb29tJ10sICdJIG5lZWQgdG8gdmFjdXVtIHRoZSB3aG9sZSBob3VzZScpO1xuICAgIGNyZWF0ZVRvZG8oJ0RvIHRoZSBpcm9uaW5nJywgWzAsIDEsIDJdLCAnMjAyMi0wNS0xMycsICdub3JtYWwnLCBbJ3BpbmsgZHJlc3Mgc2hpcnQnLCAncmVkIGRyZXNzIHNoaXJ0J10sICdJIG5lZWQgdG8gaXJvbiBteSBkcmVzcyBzaGlydHMnKTtcbiAgICBjcmVhdGVQcm9qZWN0KCdIb21ld29yaycsIFswLCAxXSk7XG4gICAgY3JlYXRlVG9kbygnV3JpdGUgYW4gZXNzYXknLCBbMCwgMSwgMiwgNV0sICcyMDIyLTA5LTEzJywgJ2hpZ2gnLCBbXSwgJ0Vzc2F5IGFib3V0IGNvZGluZycpO1xuICAgIGNyZWF0ZVRvZG8oJ0RvIHRoZSBtYXRoIGV4ZXJjaXNlcycsIFswLCAxLCAyLCA1XSwgJzIwMjItMDUtMTMnLCAnbG93JywgWycxLjIvNDUnLCAnMS4zLzQ1J10sICdUaGV5IGFyZSBxdWl0ZSBoYXJkJyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGVUb2RvLFxuICAgICAgICBjcmVhdGVDYXRlZ29yeSxcbiAgICAgICAgY3JlYXRlUHJvamVjdCxcbiAgICAgICAgZmluZEJ5SUQsXG4gICAgICAgIHJvb3QsXG4gICAgICAgIHJlbW92ZUVsZW1lbnQsXG4gICAgICAgIHRvZG9zLFxuICAgICAgICB0b2Rvc0NoZWNrUmVtb3ZlZCxcbiAgICB9O1xufSgpKTtcblxuZXhwb3J0IGRlZmF1bHQgbG9naWNNb2R1bGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCBnaXRodWJJY29uIGZyb20gJy4vZ3JhcGhpY3MvR2l0SHViLU1hcmstTGlnaHQtMzJweC5wbmcnO1xuaW1wb3J0IHRvZ2dsZUltZyBmcm9tICcuL2dyYXBoaWNzL3RvZ2dsZS5wbmcnO1xuaW1wb3J0IHRvZ2dsZU1lbnVJY29uIGZyb20gJy4vZ3JhcGhpY3MvQXJyb3ctZG93bi5zdmcnO1xuXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBkb21Nb2R1bGUgZnJvbSAnLi9kb20nO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2l0LWF0dHJpYicpLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLnNldEF0dHJpYnV0ZSgnc3JjJywgZ2l0aHViSWNvbik7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlLWltZycpLnNldEF0dHJpYnV0ZSgnc3JjJywgdG9nZ2xlSW1nKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUtbWVudS1pY29uJykuc2V0QXR0cmlidXRlKCdzcmMnLCB0b2dnbGVNZW51SWNvbik7IC8vIGxpbmVzIDEtMyAmJiA4LTEwIGFkZGVkIGp1c3QgdG8gc3VwcG9ydCBnaXRodWIgcGFnZXNcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==