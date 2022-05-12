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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: Ubuntu;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n    font-family: Lato;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n* {\n    font-family: Lato;\n    color: white;\n    box-sizing: border-box;\n}\n\nbody {\n    height: 100vh;\n    margin: 0;\n}\n\n.header {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    height: 55px;\n    background-color: #212121;\n}\n\n.heading {\n    font-size: 33px;\n}\n\n.attributes {\n    flex-direction: column;\n    gap: 8px;\n}\n\n.attributes, .git-attrib {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.attribute {\n    text-align: center;\n}\n\n.attribute, .attribute > * {\n    color: #797979;\n    gap: 8px;\n}\n\n.attributes {\n    padding: 5px;\n}\n\n.menu {\n    display: flex;\n    gap: 10px;\n}\n\n.function-button {\n    background-color:#3b3b3b;\n    border: 2px solid #555555;\n    border-radius: 20px;\n    font-size: 15px;\n    padding: 10px;\n    width: 135px;\n    transition: 0.3s;\n}\n\n.add-function:hover, .remove-function:hover {\n    transform: scale(0.96);\n}\n\n\n.main-content {\n    height: calc(100% - 55px);\n    display: flex;\n    background-color: #212121;\n}\n\n.project-category-header {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.side-menu-elements {\n    box-sizing: border-box;\n    padding: 0 10px 10px 0;\n    width: 300px;\n    background-color: #2d2d2d;\n    border-right: 2px solid #222;\n    position: absolute;\n    z-index: 1;\n    transition: 0.3s;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: calc(100% - 55px);\n    overflow-y: auto;\n}\n\n.directory {\n    max-height: 500px;\n    margin-left: 10px;\n}\n\n.directory-elements {\n    overflow-x: auto;\n    padding: 10px 0 10px 0px;\n}\n\n.group-project {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.project-category-title {\n    font-size: 20px;\n    transition: 0.3s;\n}\n\n.category-project-icon {\n    min-width: 20px;\n    min-height: 20px;\n    border-radius: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: white;\n    color: black;\n}\n\n#first > .project-category-title {\n    font-size: 27px;\n    font-weight: 600;\n}\n\n.element-content {\n    margin-left: 5px;\n    padding-left: 4px;\n    border-left: 2px solid #999999;\n}\n\n.toggle-menu {\n    position: absolute;\n    height: 50px;\n    width: 25px;\n    left: 300px;\n    top: 389.5px;\n    background-color: #2d2d2d;\n    border-radius: 0 10px 10px 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.toggle-menu-icon {\n    width: 40px;\n    transition: 0.3s;\n}\n\n.content {\n    width: calc(100% - 325px);\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    background-color: #212121;\n    margin-left: 325px;\n}\n\n.main-section-window {\n    overflow: auto;\n    width: 98%;\n    height: 98%;\n    margin: auto;\n    border: 2px solid #7e7e7e;\n    border-radius: 5px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px\n}\n\n.main-section-heading {\n    max-width: 350px;\n    min-height: 53px;\n    overflow: auto;\n    margin-top: 10px;\n    font-size: 40px;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.sub-section {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    position: relative;\n}\n\n.sub-section-placeholder {\n    text-align: center;\n}\n\n.sub-heading {\n    width: fit-content;\n    display: flex;\n    align-items: center;\n    margin: auto;\n    gap: 5px;\n}\n\n.toggle {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.sub-heading > .toggle {\n    width: 16px;\n    height: 14px;\n}\n\n.toggle-img {\n    transition: 0.3s;\n    transform: rotate(180deg);\n\n}\n\n.toggle-img.rotated {\n    transform: rotate(90deg);\n}\n\n\n.sub-heading > .heading {\n    display: flex;\n    align-items: center;\n    font-size: 28px;\n    text-align: center;\n    color: white;\n    max-width: 350px;\n    overflow: auto;\n}\n\n.todo {\n    background-color: #292929;\n    font-size: 22px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    border: 2px solid #7e7e7e;\n    margin: 5px;\n    border-radius: 10px;\n    flex-wrap: wrap;\n    transition: 0.3s;\n}\n\n.second-display-menu > .todo {\n    margin: 0;\n    position: relative;\n}\n\n.todo-list {\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n}\n\n.todo.done {\n    opacity: 0.3;\n    border: 2px solid green;\n}\n\n.todo.done >  * {\n    pointer-events: none;\n}\n\n.todo.done > .todo-main >  .check-done{\n    pointer-events: all;\n}\n\n.todo-main {\n    border-radius: 5px;\n    padding: 5px;\n    gap: 5px;\n    width: 100%;\n    display: flex;\n    justify-content: space-around;\n    flex-wrap: wrap;\n}\n\n.checklist-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n}\n\n.todo-checklist {\n    margin: auto;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 3px;\n    width: 100%;\n    background-color: #303030;\n    padding: 5px 0;\n}\n\n.checklist-heading {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.checklist {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.checkbox-container {\n    width: 100%;\n    gap: 5px;\n    display: flex;\n    margin: auto;\n}\n\n.checkbox-container > .check-done-button {\n    margin: 0 !important;\n}\n\n.checklist-header {\n    display: flex;\n    width: fit-content;\n    gap: 5px;\n}\n\n.checklist-header > .toggle > .toggle-img, .project-category-header > .toggle > .toggle-img {\n    width: 13px;\n}\n\n.checkbox-label {\n    display: flex;\n    gap: 5px;\n    font-size: 18px;\n    justify-content: flex-start;\n    max-width: 300px;\n    overflow-wrap: anywhere;\n}\n\n.checkbox-input {\n    display: none;\n}\n\n.checkbox-container > .check-done-button {\n    width: 20px;\n    height: 20px;\n}\n\n.checkbox-container > .check-done-button::before {\n    position: relative;\n    top: -6px;\n    font-size: 17px;\n    opacity: 0.2;\n    content: '✓';\n    transition: 0.3s;\n}\n\n.create-checkbox {\n    display: flex;\n    gap: 5px;\n}\n\n.checkbox-title-input {\n    background-color: #272626 !important; \n    border-radius: 5px;\n}\n\n.todo-description-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-bottom: 5px;\n}\n\n.todo-description {\n    width: 100%;\n    padding-bottom: 10px;\n    font-size: 18px;\n    margin: auto;\n    text-align: center;\n}\n\n.todo-period-category {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: 115px;\n    justify-content: center;\n    gap: 7px;\n}\n\n.heading {\n    font-size: 32px;\n}\n\n.set-period {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    font-weight: bold;\n}\n\n.period {\n    width: 185px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.period > input[type=\"date\"] {\n    background-color: #232323;\n    outline: none;\n    border: none;\n    padding: 5px;\n    border-radius: 5px;\n    width: 140px;\n}\n\n.round-button, .check-done-button {\n    margin: auto;\n    width: 28px;\n    border-radius: 100%;\n    height: 28px;\n    border: 1px solid white;\n    text-align: center;\n}\n\n.round-button#subs:hover {\n    background-color: red;\n}\n\n.round-button#subs:hover::before {\n    color: #292929;\n}\n\n.round-button#add:hover {\n    background-color: green;\n}\n\n.round-button#add:hover::before {\n    color: #292929;\n}\n\n.round-button#subs::before, .round-button#add::before{\n    transition: 0.3s;\n    position: relative;\n    font-size: 50px;\n    content: '-';\n    color: red;\n}\n\n.round-button#subs::before {\n    top: -20.5px;\n}\n\n.round-button#add::before {\n    font-size: 30px;\n    top: -6px;\n    left: -0.5px;\n    content: '+';\n    color: green;\n}\n\n.todo-duedate, .todo-title, .todo-priority-container, .check-done {\n    width: 220px;\n}    \n\n.todo-title {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n}\n\n.todo-duedate, .todo-priority {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    gap: 3px;\n}    \n\n.todo-label {\n    margin-left: auto;\n    margin-right: auto;\n    width: fit-content;\n    padding: 1px 5px;\n    border-bottom: 1px solid white;\n}\n\n.check-done {\n    display: flex;\n    align-items: center;\n}\n\n.ddate-input, .priority-value, .title-input, .todo-title-content, .checkbox-title-input, .set-c-p-input {\n    text-align: center;\n    font-size: 18px;\n    outline: none;\n    border: none;\n    background-color: inherit;\n}\n\n.priority-value, .title-input {\n    -webkit-appearance: none;\n    appearance: none;\n}\n\n.ddate-input, .priority-value {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.ddate-input {\n    width: 129px;\n}\n\n.priority-value {\n    width: 70px;\n}\n\n.title-input {\n    width: 185px;\n    font-size: 20px;\n    background-color: #2d2d2d;\n    border-radius: 5px;\n}\n\n.description-input {\n    outline: none;\n    border: none;\n    background-color: #2d2d2d;\n    height: 90%;\n    width: 90%;\n    border-radius: 5px;\n    padding: 5px;\n}\n\n.todo-title-content {\n    width: fit-content;\n    max-width: 220px;\n    max-height: 55px;\n    overflow-x: auto;\n    font-size: 20px;\n    margin-left: 31px;\n}\n\n.text-edit-button {\n    width: 26px;\n    height: 26px;\n}\n\n.check-done-input {\n    display: none;\n}\n\n.check-done-button-container {\n    margin: auto;\n}\n\n.check-done-button {\n    margin: auto;\n    width: 28px;\n    border-radius: 100%;\n    height: 28px;\n    border: 1px solid white;\n    text-align: center;\n}\n\n.check-done-button::before {\n    position: relative;\n    top: -4px;\n    font-size: 23px;\n    opacity: 0.2;\n    content: '✓';\n    transition: 0.3s;\n}\n\n.check-done-button:hover {\n    background-color: green;\n}\n\n.check-done-button:hover::before {\n    opacity: 1;\n}\n\n.check-done-button.checked::before {\n    opacity: 1;\n}\n\n.checked {\n    opacity: 1;\n    background-color: green;\n}\n\n\n/* width */\n::-webkit-scrollbar {\n    height: 5px;\n  }\n::-webkit-scrollbar {\n    height: 5px;\n    width: 8px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n    background: #222;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n    background: rgb(19, 19, 19);\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n    background: #555;\n}\n\nbutton {\n    -webkit-appearance: none;\n    appearance: none;\n    background-color: inherit;\n    border: 0;\n    outline: none;\n    padding: 0;\n}\n\n.second-display {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    background-color: rgb(0 0 0 / 30%);\n    justify-content: center;\n    align-items: center;\n    z-index: 2;\n}\n\n.second-display-menu {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n}\n\n.set-category-project {\n}\n\n.set-category-project-title {\n    background-color: #111111;\n    padding: 20px;\n    border-radius: 5px;\n}\n\n.set-c-p-label {\n    font-size: 38px;\n    text-align: center;\n}\n\n.set-c-p-input {\n    font-size: 30px;\n    background-color: #191919;\n    border-radius: 5px;\n}\n\n.select-element-menu {\n    margin: auto;\n    background-color: #111111;\n    border-radius: 5px;\n    display: flex;\n    flex-direction: column;\n\n}\n\n.select-element-menu button:first-of-type {\n    border-top: none;\n    border-radius: 5px;\n}\n\n.select-element-menu button:last-of-type {\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n\n.sem-option {\n    width: 300px;\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 28px;\n    border-top: 1px solid gray;\n}\n\n.sem-option:hover {\n    background-color: #1a1a1a;\n}\n\n.close-button {\n    transition: 0.3s;\n    width: 20px;\n    height: 20px;\n    border-top-right-radius: 7px;\n    border-bottom-left-radius: 7px;\n    position: absolute;\n    right: 0;\n    top: 0;\n    font-size: 18px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: red;\n    z-index: 1;\n}\n\n.close-button:hover {\n    background-color: white;\n    color: red;\n}\n\n.create-button {\n    width: 100px;\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #252525;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n\n.create-button:hover {\n    transition: 0.3s;\n    transform: scale(0.95) translateY(-0.5px);\n}\n\n.green-text-element {\n    color: #7cd47c;\n}\n\n.red-text-element {\n    color: #ec5c5c;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: Ubuntu;\n    src: url(fonts/Ubuntu/Ubuntu-Regular.ttf);\n}\n\n@font-face {\n    font-family: Lato;\n    src: url(fonts/Lato/Lato-Regular.ttf);\n}\n\n* {\n    font-family: Lato;\n    color: white;\n    box-sizing: border-box;\n}\n\nbody {\n    height: 100vh;\n    margin: 0;\n}\n\n.header {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    height: 55px;\n    background-color: #212121;\n}\n\n.heading {\n    font-size: 33px;\n}\n\n.attributes {\n    flex-direction: column;\n    gap: 8px;\n}\n\n.attributes, .git-attrib {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.attribute {\n    text-align: center;\n}\n\n.attribute, .attribute > * {\n    color: #797979;\n    gap: 8px;\n}\n\n.attributes {\n    padding: 5px;\n}\n\n.menu {\n    display: flex;\n    gap: 10px;\n}\n\n.function-button {\n    background-color:#3b3b3b;\n    border: 2px solid #555555;\n    border-radius: 20px;\n    font-size: 15px;\n    padding: 10px;\n    width: 135px;\n    transition: 0.3s;\n}\n\n.add-function:hover, .remove-function:hover {\n    transform: scale(0.96);\n}\n\n\n.main-content {\n    height: calc(100% - 55px);\n    display: flex;\n    background-color: #212121;\n}\n\n.project-category-header {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.side-menu-elements {\n    box-sizing: border-box;\n    padding: 0 10px 10px 0;\n    width: 300px;\n    background-color: #2d2d2d;\n    border-right: 2px solid #222;\n    position: absolute;\n    z-index: 1;\n    transition: 0.3s;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: calc(100% - 55px);\n    overflow-y: auto;\n}\n\n.directory {\n    max-height: 500px;\n    margin-left: 10px;\n}\n\n.directory-elements {\n    overflow-x: auto;\n    padding: 10px 0 10px 0px;\n}\n\n.group-project {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.project-category-title {\n    font-size: 20px;\n    transition: 0.3s;\n}\n\n.category-project-icon {\n    min-width: 20px;\n    min-height: 20px;\n    border-radius: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: white;\n    color: black;\n}\n\n#first > .project-category-title {\n    font-size: 27px;\n    font-weight: 600;\n}\n\n.element-content {\n    margin-left: 5px;\n    padding-left: 4px;\n    border-left: 2px solid #999999;\n}\n\n.toggle-menu {\n    position: absolute;\n    height: 50px;\n    width: 25px;\n    left: 300px;\n    top: 389.5px;\n    background-color: #2d2d2d;\n    border-radius: 0 10px 10px 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.toggle-menu-icon {\n    width: 40px;\n    transition: 0.3s;\n}\n\n.content {\n    width: calc(100% - 325px);\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    background-color: #212121;\n    margin-left: 325px;\n}\n\n.main-section-window {\n    overflow: auto;\n    width: 98%;\n    height: 98%;\n    margin: auto;\n    border: 2px solid #7e7e7e;\n    border-radius: 5px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px\n}\n\n.main-section-heading {\n    max-width: 350px;\n    min-height: 53px;\n    overflow: auto;\n    margin-top: 10px;\n    font-size: 40px;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.sub-section {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    position: relative;\n}\n\n.sub-section-placeholder {\n    text-align: center;\n}\n\n.sub-heading {\n    width: fit-content;\n    display: flex;\n    align-items: center;\n    margin: auto;\n    gap: 5px;\n}\n\n.toggle {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.sub-heading > .toggle {\n    width: 16px;\n    height: 14px;\n}\n\n.toggle-img {\n    transition: 0.3s;\n    transform: rotate(180deg);\n\n}\n\n.toggle-img.rotated {\n    transform: rotate(90deg);\n}\n\n\n.sub-heading > .heading {\n    display: flex;\n    align-items: center;\n    font-size: 28px;\n    text-align: center;\n    color: white;\n    max-width: 350px;\n    overflow: auto;\n}\n\n.todo {\n    background-color: #292929;\n    font-size: 22px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    border: 2px solid #7e7e7e;\n    margin: 5px;\n    border-radius: 10px;\n    flex-wrap: wrap;\n    transition: 0.3s;\n}\n\n.second-display-menu > .todo {\n    margin: 0;\n    position: relative;\n}\n\n.todo-list {\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n}\n\n.todo.done {\n    opacity: 0.3;\n    border: 2px solid green;\n}\n\n.todo.done >  * {\n    pointer-events: none;\n}\n\n.todo.done > .todo-main >  .check-done{\n    pointer-events: all;\n}\n\n.todo-main {\n    border-radius: 5px;\n    padding: 5px;\n    gap: 5px;\n    width: 100%;\n    display: flex;\n    justify-content: space-around;\n    flex-wrap: wrap;\n}\n\n.checklist-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n}\n\n.todo-checklist {\n    margin: auto;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 3px;\n    width: 100%;\n    background-color: #303030;\n    padding: 5px 0;\n}\n\n.checklist-heading {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.checklist {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.checkbox-container {\n    width: 100%;\n    gap: 5px;\n    display: flex;\n    margin: auto;\n}\n\n.checkbox-container > .check-done-button {\n    margin: 0 !important;\n}\n\n.checklist-header {\n    display: flex;\n    width: fit-content;\n    gap: 5px;\n}\n\n.checklist-header > .toggle > .toggle-img, .project-category-header > .toggle > .toggle-img {\n    width: 13px;\n}\n\n.checkbox-label {\n    display: flex;\n    gap: 5px;\n    font-size: 18px;\n    justify-content: flex-start;\n    max-width: 300px;\n    overflow-wrap: anywhere;\n}\n\n.checkbox-input {\n    display: none;\n}\n\n.checkbox-container > .check-done-button {\n    width: 20px;\n    height: 20px;\n}\n\n.checkbox-container > .check-done-button::before {\n    position: relative;\n    top: -6px;\n    font-size: 17px;\n    opacity: 0.2;\n    content: '✓';\n    transition: 0.3s;\n}\n\n.create-checkbox {\n    display: flex;\n    gap: 5px;\n}\n\n.checkbox-title-input {\n    background-color: #272626 !important; \n    border-radius: 5px;\n}\n\n.todo-description-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-bottom: 5px;\n}\n\n.todo-description {\n    width: 100%;\n    padding-bottom: 10px;\n    font-size: 18px;\n    margin: auto;\n    text-align: center;\n}\n\n.todo-period-category {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: 115px;\n    justify-content: center;\n    gap: 7px;\n}\n\n.heading {\n    font-size: 32px;\n}\n\n.set-period {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    font-weight: bold;\n}\n\n.period {\n    width: 185px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.period > input[type=\"date\"] {\n    background-color: #232323;\n    outline: none;\n    border: none;\n    padding: 5px;\n    border-radius: 5px;\n    width: 140px;\n}\n\n.round-button, .check-done-button {\n    margin: auto;\n    width: 28px;\n    border-radius: 100%;\n    height: 28px;\n    border: 1px solid white;\n    text-align: center;\n}\n\n.round-button#subs:hover {\n    background-color: red;\n}\n\n.round-button#subs:hover::before {\n    color: #292929;\n}\n\n.round-button#add:hover {\n    background-color: green;\n}\n\n.round-button#add:hover::before {\n    color: #292929;\n}\n\n.round-button#subs::before, .round-button#add::before{\n    transition: 0.3s;\n    position: relative;\n    font-size: 50px;\n    content: '-';\n    color: red;\n}\n\n.round-button#subs::before {\n    top: -20.5px;\n}\n\n.round-button#add::before {\n    font-size: 30px;\n    top: -6px;\n    left: -0.5px;\n    content: '+';\n    color: green;\n}\n\n.todo-duedate, .todo-title, .todo-priority-container, .check-done {\n    width: 220px;\n}    \n\n.todo-title {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n}\n\n.todo-duedate, .todo-priority {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    gap: 3px;\n}    \n\n.todo-label {\n    margin-left: auto;\n    margin-right: auto;\n    width: fit-content;\n    padding: 1px 5px;\n    border-bottom: 1px solid white;\n}\n\n.check-done {\n    display: flex;\n    align-items: center;\n}\n\n.ddate-input, .priority-value, .title-input, .todo-title-content, .checkbox-title-input, .set-c-p-input {\n    text-align: center;\n    font-size: 18px;\n    outline: none;\n    border: none;\n    background-color: inherit;\n}\n\n.priority-value, .title-input {\n    -webkit-appearance: none;\n    appearance: none;\n}\n\n.ddate-input, .priority-value {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.ddate-input {\n    width: 129px;\n}\n\n.priority-value {\n    width: 70px;\n}\n\n.title-input {\n    width: 185px;\n    font-size: 20px;\n    background-color: #2d2d2d;\n    border-radius: 5px;\n}\n\n.description-input {\n    outline: none;\n    border: none;\n    background-color: #2d2d2d;\n    height: 90%;\n    width: 90%;\n    border-radius: 5px;\n    padding: 5px;\n}\n\n.todo-title-content {\n    width: fit-content;\n    max-width: 220px;\n    max-height: 55px;\n    overflow-x: auto;\n    font-size: 20px;\n    margin-left: 31px;\n}\n\n.text-edit-button {\n    width: 26px;\n    height: 26px;\n}\n\n.check-done-input {\n    display: none;\n}\n\n.check-done-button-container {\n    margin: auto;\n}\n\n.check-done-button {\n    margin: auto;\n    width: 28px;\n    border-radius: 100%;\n    height: 28px;\n    border: 1px solid white;\n    text-align: center;\n}\n\n.check-done-button::before {\n    position: relative;\n    top: -4px;\n    font-size: 23px;\n    opacity: 0.2;\n    content: '✓';\n    transition: 0.3s;\n}\n\n.check-done-button:hover {\n    background-color: green;\n}\n\n.check-done-button:hover::before {\n    opacity: 1;\n}\n\n.check-done-button.checked::before {\n    opacity: 1;\n}\n\n.checked {\n    opacity: 1;\n    background-color: green;\n}\n\n\n/* width */\n::-webkit-scrollbar {\n    height: 5px;\n  }\n::-webkit-scrollbar {\n    height: 5px;\n    width: 8px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n    background: #222;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n    background: rgb(19, 19, 19);\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n    background: #555;\n}\n\nbutton {\n    -webkit-appearance: none;\n    appearance: none;\n    background-color: inherit;\n    border: 0;\n    outline: none;\n    padding: 0;\n}\n\n.second-display {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    background-color: rgb(0 0 0 / 30%);\n    justify-content: center;\n    align-items: center;\n    z-index: 2;\n}\n\n.second-display-menu {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n}\n\n.set-category-project {\n}\n\n.set-category-project-title {\n    background-color: #111111;\n    padding: 20px;\n    border-radius: 5px;\n}\n\n.set-c-p-label {\n    font-size: 38px;\n    text-align: center;\n}\n\n.set-c-p-input {\n    font-size: 30px;\n    background-color: #191919;\n    border-radius: 5px;\n}\n\n.select-element-menu {\n    margin: auto;\n    background-color: #111111;\n    border-radius: 5px;\n    display: flex;\n    flex-direction: column;\n\n}\n\n.select-element-menu button:first-of-type {\n    border-top: none;\n    border-radius: 5px;\n}\n\n.select-element-menu button:last-of-type {\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n\n.sem-option {\n    width: 300px;\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 28px;\n    border-top: 1px solid gray;\n}\n\n.sem-option:hover {\n    background-color: #1a1a1a;\n}\n\n.close-button {\n    transition: 0.3s;\n    width: 20px;\n    height: 20px;\n    border-top-right-radius: 7px;\n    border-bottom-left-radius: 7px;\n    position: absolute;\n    right: 0;\n    top: 0;\n    font-size: 18px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: red;\n    z-index: 1;\n}\n\n.close-button:hover {\n    background-color: white;\n    color: red;\n}\n\n.create-button {\n    width: 100px;\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #252525;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n\n.create-button:hover {\n    transition: 0.3s;\n    transform: scale(0.95) translateY(-0.5px);\n}\n\n.green-text-element {\n    color: #7cd47c;\n}\n\n.red-text-element {\n    color: #ec5c5c;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "domModule": () => (/* binding */ domModule)
/* harmony export */ });
/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic.js */ "./src/logic.js");
/* harmony import */ var _graphics_save_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graphics/save-icon.png */ "./src/graphics/save-icon.png");
/* harmony import */ var _graphics_edit_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graphics/edit-icon.png */ "./src/graphics/edit-icon.png");
/* harmony import */ var _graphics_toggle_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graphics/toggle.png */ "./src/graphics/toggle.png");






let domModule = 
(function()
{

    let lastWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    function adjustElementToWindowSize() 
    {
        let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        let content =  document.querySelector('.content');
        if(width < 600)
        {
            content.style.setProperty('margin-left', '0px');
            content.style.setProperty('width', '100%');
        }
        else if(content.style.getPropertyValue('margin-left') != '325px' && document.querySelector('.toggle-menu-icon').style.getPropertyValue('transform') != 'rotate(-90deg)')
            content.style.setProperty('margin-left', '325px');
    }

    adjustElementToWindowSize();

    window.addEventListener('resize', function(event) {
        adjustElementToWindowSize();
    }, true);

    let toggleMenu = document.querySelector('.toggle-menu');
    toggleMenu.addEventListener('click', ()=>
    {
        let toggleIcon = toggleMenu.querySelector('.toggle-menu-icon');
        if(toggleIcon.style.getPropertyValue('transform') == 'rotate(90deg)')
        {
            toggleIcon.style.setProperty('transform', 'rotate(-90deg)');
            let content = document.querySelector('.content');
            content.style.setProperty('width', 'calc(100% - 25px)');
            content.style.setProperty('margin-left', '25px');
            toggleMenu.closest('.side-menu').style.setProperty('transform', 'translateX(-300px)');
        }
        else 
        {
            toggleIcon.style.setProperty('transform', 'rotate(90deg)');
            let content = document.querySelector('.content');
            content.style.setProperty('width', 'calc(100% - 325px)');
            content.style.setProperty('margin-left', '325px');
            toggleMenu.closest('.side-menu').style.removeProperty('transform');
            adjustElementToWindowSize();
        }
    });
    


    let addFunctionOn = false;
    let removeFunctionOn = false;


    function checkValidityTextEmpty(textInput)
    {
        if(textInput.validity.valueMissing)
        {
            textInput.setCustomValidity('Must consist at least one character');
            textInput.reportValidity();
            return false;
        }
        else 
            return true;
    }

    let editIcons = Array.from(document.querySelectorAll('.text-edit-button'));
    editIcons.forEach(editIcon => 
    {
        editIcon.addEventListener('click', () => 
        {
            editIconAddEventListeners(editIcon);
        });
    });
    function editIconAddEventListeners(editIcon)
    {
        let parent = editIcon.parentElement;
        let input = parent.querySelector('input');
        let contentDiv = parent.querySelector('#text-content');
        let img = editIcon.querySelector('img');
        if(editIcon.getAttribute('id') == 'read-mode')
        {
            img.setAttribute('src', _graphics_save_icon_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
            img.setAttribute('alt', 'save indicator icon');
            editIcon.setAttribute('id', 'edit-mode');
            contentDiv.style.setProperty('display', 'none');
            input.style.removeProperty('display');
            input.value = contentDiv.textContent;
        }
        else if(editIcon.getAttribute('id') == 'edit-mode')
        {
            if(checkValidityTextEmpty(input) || input.getAttribute('validate-empty') == 'false')
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
        if(!(checkButton.classList.contains('checked')))
        {
            checkButton.classList.add('checked');
        }
        else if(checkButton.classList.contains('checked'))
        {
            checkButton.classList.remove('checked');
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
            let icons = todo.querySelectorAll('.text-edit-button');
            icons.forEach( icon =>
            {
                if(icon.getAttribute('id') == 'edit-mode')
                    editIconAddEventListeners(icon);
            });
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
        let id = prioritySpinner.getAttribute('id');
        let priorityContent = prioritySpinner.closest('.todo-priority-container').querySelector('.priority-value');
        let value = priorityContent.textContent;

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
        priorityContent.textContent = value;
    }

    let toggleButtons = Array.from(document.querySelectorAll('.toggle-img'));
    toggleButtons.forEach( (toggleButton) => 
    {
        toggleButton.addEventListener('click', () => {projectTogglesAddEventListeners(toggleButton)});
    });
    function projectTogglesAddEventListeners(toggleButton)
    {
        let elementsToToggle = toggleButton.closest('#toggle-container').querySelector('#togglable') .querySelectorAll(':scope > *');
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
    }

    let addCheckboxButtons = Array.from(document.querySelectorAll('.add-checkbox'));
    addCheckboxButtons.forEach( addCheckboxButton =>
    {
        addCheckboxButton.addEventListener('click', () =>
        {
            addCheckboxButtonAction(addCheckboxButton);
        }); 
    });
    function addCheckboxButtonAction(addCheckboxButton) 
    {
        let checklistContainer = addCheckboxButton.closest('.checklist-container')
        let checklist = checklistContainer.querySelector('.checklist');
        let titleInput = checklistContainer.querySelector('.checkbox-title-input');

        if(checkValidityTextEmpty(titleInput))
        {
            let checkboxContainer = document.createElement('div');
            checkboxContainer.classList.add('checkbox-container');

                let checkboxButton = document.createElement('div');
                checkboxButton.classList.add('check-done-button');
                checkButtons.push(checkboxButton);
                checkboxButton.addEventListener('click', () => {checkButtonAddEventListeners(checkboxButton)});

                let checkboxLabel = document.createElement('div');
                checkboxLabel.classList.add('checkbox-label');

                checkboxContainer.appendChild(checkboxButton);
                checkboxContainer.appendChild(checkboxLabel);
                checkboxLabel.textContent = titleInput.value;
                titleInput.value = '';

                checklist.insertBefore(checkboxContainer, checklist.querySelector('.create-checkbox'));
        }
    }

    let closeSDButton = document.querySelector('#close-second-display');
    closeSDButton.addEventListener('click', () =>
    {
        closeSDButtonActions(closeSDButton) 
    });
    function closeSDButtonActions(closeSDButton) 
    {
        document.querySelector('.second-display').style.setProperty('display', 'none'); 
    }

   generateDirectory(_logic_js__WEBPACK_IMPORTED_MODULE_0__.logicModule.root); //!!!

    let addToElements = Array.from(document.querySelectorAll('.category')).concat(Array.from(document.querySelectorAll('.project')));
    addToElements.forEach( addToElement =>
    {
        addToElement.addEventListener('mousedown', (e) =>
        {
            addToElementAction(addToElement);
            e.stopPropagation();
        });
    });
    function addToElementAction(addToElement)
    {
        if(addFunctionOn == false && removeFunctionOn == false)
        {
            let lastDisplayed = document.querySelector('[data-displayed="true"]');
            if(lastDisplayed)
                lastDisplayed.removeAttribute('data-displayed');
            addToElement.setAttribute('data-displayed', 'true');
            generateDirectoryElement(addToElement);
        }
    }
    function generateDirectoryElement(addToElement)
    {
        let mainSection = document.querySelector('.main-section-window');
        let subSection = mainSection.querySelector('.sub-section');
        if(subSection.lastChild)
            removeChildren(subSection);
        addToElement = _logic_js__WEBPACK_IMPORTED_MODULE_0__.logicModule.findByID(getElementRoute(addToElement));
        mainSection.querySelector('.main-section-heading').textContent = addToElement.title;
        for(let element of addToElement.contents)
        {
            if(element.constructor.name == 'Project')
            {
                let project = document.createElement('div');
                project.classList.add('project');
                project.setAttribute('id', 'toggle-container');

                    let subHeading = document.createElement('div');  
                    subHeading.classList.add('sub-heading')    
                    
                        let toggle = document.createElement('div'); 
                        toggle.classList.add('toggle');

                            let toggleImg = document.createElement('img'); 
                            toggleImg.classList.add('toggle-img');
                            toggleImg.setAttribute('src', _graphics_toggle_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
                            toggleImg.setAttribute('alt','icon of a toggle');
                            toggleButtons.push(toggleImg);
                            toggleImg.addEventListener('click', () => { projectTogglesAddEventListeners(toggleImg)});

                            toggle.appendChild(toggleImg);
                        
                        let heading = document.createElement('div'); 
                        heading.classList.add('heading');
                        heading.textContent = element.title;

                        subHeading.appendChild(toggle);
                        subHeading.appendChild(heading);
                
                    let todoList = document.createElement('div');
                    todoList.classList.add('todo-list');
                    todoList.setAttribute('id', 'togglable');
                
                    for(let todo of element.contents)
                    {
                        let newTodo = createTodo(todo);
                        todoList.appendChild(newTodo);
                    }

                    project.appendChild(subHeading);
                    project.appendChild(todoList);

                document.querySelector('.sub-section').appendChild(project);
            }
            else if(element.constructor.name == 'Category')
            {
                let subHeading = document.createElement('div');
                subHeading.classList.add('sub-heading')
                subHeading.addEventListener('click', ()=>
                {
                    let id = element.id;
                    generateDirectoryElement(document.querySelector(`[data-id="${id}"`));
                });

                    let heading = document.createElement('div');
                    heading.classList.add('heading');
                    heading.textContent = element.title;

                    subHeading.appendChild(heading);
                document.querySelector('.sub-section').appendChild(subHeading);
            }
            else 
            {
                let todo = createTodo(element);
                subSection.appendChild(todo);
                todo.querySelector('.ddate-input').value = element.duedate;
            }
        }

    }

    let addFunctionButton = document.querySelector('.add-function');
    addFunctionButton.addEventListener('click', () =>
    {
        addFunction(addToElements);
    });
    function addFunction(addToElements)
    {
        if(addFunctionOn == false)
        {
            if(removeFunctionOn == true)
            {
                turnOffRemoveFunction(removeElements);
            }
            addFunctionOn = true;
            addToElements.forEach( (addToElement) =>
            {
                addToElement.querySelector('.project-category-title').classList.add('green-text-element');

                addToElement.addEventListener('click', (e) =>
                {
                    if(addFunctionOn == true)
                    {
                        let id = addToElement.getAttribute('data-id');
                        let route = getElementRoute(addToElement);
                        let parent = _logic_js__WEBPACK_IMPORTED_MODULE_0__.logicModule.findByID(route);
                        let menu = generateElementMenu(parent, addToElement, route);
                        let options = menu.querySelectorAll('.sem-option');
                        turnOffAddFunction(addToElements);
                        e.stopPropagation();
                    }
                });
            });
        }
        else 
            turnOffAddFunction(addToElements);

    }
    function turnOffAddFunction(addToElements)
    {
        addFunctionOn = false;
        addToElements.forEach( addToElement =>
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
        let canContent = parent.canContent;
        let menu = document.querySelector('.select-element-menu');
        menu.style.removeProperty('display', 'none');
        for(let content of canContent)
        {
            option = document.createElement('button');
            option.classList.add('sem-option');
            option.textContent = content;
            option.addEventListener('click', () =>
            {
                menu.style.setProperty('display', 'none');
                let createButton = document.querySelector('.create-button');
                createButton.style.removeProperty('display');
                if(content == 'category' || content == 'project')
                {   
                    let titleInputMenu = document.querySelector('.set-category-project-title');
                    titleInputMenu.style.removeProperty('display');
                    closeSDButton.addEventListener('click', () =>
                    {
                        titleInputMenu.querySelector('.set-c-p-input').value = '';
                        titleInputMenu.style.setProperty('display', 'none');
                    });
                    createButton.addEventListener('click', () =>
                    {
                        createButtonAction(createButton, parent, content, container, route);
                    }, {once: true});
                }
                else 
                {
                    let todo = document.querySelector('.second-display').querySelector('.todo');
                    todo.style.removeProperty('display');
                    closeSDButton.addEventListener('click', () =>
                    {
                        clearAddTodo(todo);
                        todo.style.setProperty('display', 'none');
                    });
                    createButton.addEventListener('click', () =>
                    {
                        createButtonAction(createButton, parent, content, container, route, getTodoValues(todo));
                    }, {once: true});
                }

            });
            menu.appendChild(option);
        }
        closeSDButton.addEventListener('click', () =>
        {
            removeChildren(menu);
        }, { once: true });
        return menu;
    }
    function removeChildren(parent)
    {
        while (parent.firstChild) 
        {
            parent.removeChild(parent.lastChild);
        }
    }
    function generateDirectory(directory)
    {
        let directoryContent = directory.contents;

            for(let element of directoryContent)
            {
                if(element.canContent)
                {
                    if(element.canContent[0] == 'project')
                    {
                        createCategory(directory, element);
                    }
                    else if(element.canContent[0] == 'todo')
                    {
                        createProject(directory, element);
                    }
                    generateDirectory(element);
                }
                else
                    createProjectElement(directory, element)
        }
    }
    function createElementContainer(directory, element)
    {
        let elementContainer = document.createElement('div');
        elementContainer.setAttribute('id', 'toggle-container');
        elementContainer.setAttribute('data-id', element.id);
        elementContainer.setAttribute('data-adto', 'true');

            let header = document.createElement('div');
            header.classList.add('project-category-header');

                let toggle = document.createElement('div');
                toggle.classList.add('toggle')

                    let toggleImg = document.createElement('img');
                    toggleImg.classList.add('toggle-img');
                    toggleImg.setAttribute('src', _graphics_toggle_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
                    toggleImg.setAttribute('alt', 'icon of a toggle');
                    toggleButtons.push(toggleImg);
                    toggleImg.addEventListener('click', () => {projectTogglesAddEventListeners(toggleImg)});
                
                let icon = document.createElement('div');
                icon.classList.add('category-project-icon');

                let title = document.createElement('div');
                title.classList.add('project-category-title');
                title.textContent = element.title;

            let elementContainerContent = document.createElement('div');
            elementContainerContent.classList.add('element-content');
            elementContainerContent.setAttribute('id', 'togglable');

            toggle.appendChild(toggleImg);
            header.appendChild(toggle);
            header.appendChild(icon);
            header.appendChild(title);
            elementContainer.appendChild(header);
            elementContainer.appendChild(elementContainerContent);

        let parent = document.querySelector(`[data-id="${directory.id}"]`).querySelector('.element-content');
        parent.appendChild(elementContainer);
        
        return elementContainer;
    }
    function createCategory(directory, element)
    {
        let category = createElementContainer(directory, element);
        category.classList.add('category');
        category.querySelector('.category-project-icon').textContent = 'C';
        return category;
    }
    function createProject(directory, element)
    {
        let project = createElementContainer(directory, element);
        project.classList.add('project');
        project.querySelector('.category-project-icon').textContent = 'P';
        return project;
    }
    function createProjectElement(directory, element)
    {
        let projectElementHeader = document.createElement('div');
        projectElementHeader.classList.add('project-category-header');
        projectElementHeader.setAttribute('data-element', 'todo');
        projectElementHeader.setAttribute('data-id', element.id);

            let projectElementIcon = document.createElement('div');
            projectElementIcon.classList.add('category-project-icon');
            projectElementIcon.textContent = 'T';

            let projectElementTitle = document.createElement('div');
            projectElementTitle.classList.add('project-category-title');
            projectElementTitle.textContent = element.title;

            projectElementHeader.appendChild(projectElementIcon);
            projectElementHeader.appendChild(projectElementTitle);
        
        let parent = document.querySelector(`[data-id="${directory.id}"]`).querySelector('.element-content');
        parent.appendChild(projectElementHeader);

        return projectElementHeader;
    }

    function clearAddTodo(todo)
    {
        todo.querySelector('.title-input').value = '';
        todo.querySelector('.ddate-input').value = '';
        todo.querySelector('.priority-value').value = 'normal';
        todo.querySelector('.description-input').value = '';
        let checklist = todo.querySelector('.checklist');
        let chekboxes = checklist.querySelectorAll('.checkbox-container');
        for(let checkbox of chekboxes)
        {
            checklist.removeChild(checkbox);
        }
    }
    function createTodo(todoValues)
    {
        let todo = document.createElement('div');
        todo.classList.add('todo');
        
            let todoMain = document.createElement('div');
            todoMain.classList.add('todo-main');

                let todoTitle = document.createElement('div');
                todoTitle.classList.add('todo-title');

                    let todoTitleContent = document.createElement('div');
                    todoTitleContent.classList.add('todo-title-content');
                    todoTitleContent.setAttribute('id', 'text-content');
                    todoTitleContent.textContent = todoValues.title;

                    let todoTitleInput = document.createElement('input');
                    todoTitleInput.classList.add('title-input');
                    todoTitleInput.setAttribute('type', 'text');
                    todoTitleInput.setAttribute('maxlength', '20');
                    todoTitleInput.setAttribute('style', 'display: none');
                    todoTitleInput.setAttribute('required', '');   
                    todoTitleInput.addEventListener('change', () =>
                    {
                        todoValues.title = todoTitleInput.value;
                    });

                    let titleEditButton = document.createElement('button');
                    titleEditButton.classList.add('text-edit-button');
                    titleEditButton.setAttribute('id', 'read-mode');
                    
                        let titleEditIcon = document.createElement('img');
                        titleEditIcon.classList.add('edit-icon');
                        titleEditIcon.setAttribute('src', _graphics_edit_icon_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
                        titleEditIcon.setAttribute('alt', 'edit indicator icon');

                    editIcons.push(titleEditButton);
                    titleEditButton.addEventListener('click', () => { editIconAddEventListeners(titleEditButton)});

                    titleEditButton.appendChild(titleEditIcon);
                    todoTitle.appendChild(todoTitleContent);
                    todoTitle.appendChild(todoTitleInput);
                    todoTitle.appendChild(titleEditButton);


                let todoDuedate = document.createElement('div');
                todoDuedate.classList.add('todo-duedate');

                    let todoDuedateLabel = document.createElement('label');
                    todoDuedateLabel.classList.add('todo-label');
                    todoDuedateLabel.setAttribute('for', 'dueDate')
                    todoDuedateLabel.textContent = 'Due date';

                    let todoDuedateInput = document.createElement('input');
                    todoDuedateInput.classList.add('ddate-input');
                    todoDuedateInput.setAttribute('type', 'date')
                    todoDuedateInput.setAttribute('id', 'due-date')
                    let dateValue = todoValues.duedate;
                    todoDuedateInput.value = dateValue;
                    todoDuedateInput.addEventListener('change', () =>
                    {
                        todoValues.duedate = todoDuedateInput.value;
                    });

                    todoDuedate.appendChild(todoDuedateLabel);
                    todoDuedate.appendChild(todoDuedateInput);
                
                    
                let todoPriorityContainer = document.createElement('div');
                todoPriorityContainer.classList.add('todo-priority-container');

                    let changePrioritySubs = document.createElement('div');
                    changePrioritySubs.classList.add('change-priority', 'round-button')
                    changePrioritySubs.setAttribute('id', 'subs');
                    prioritySpinners.push(changePrioritySubs);
                    changePrioritySubs.addEventListener('click', () => 
                    {
                        prioritySpinnersAddEventListeners(changePrioritySubs);
                        todoValues.priority = changePrioritySubs.closest('.todo-priority-container').querySelector('.priority-value').textContent;
                    });

                    let todoPriority = document.createElement('div');
                    todoPriority.classList.add('todo-priority')

                        let todoPriorityLabel = document.createElement('div');
                        todoPriorityLabel.classList.add('todo-label');
                        todoPriorityLabel.textContent = 'Priority';

                        let todoPriorityValue = document.createElement('div');
                        todoPriorityValue.classList.add('priority-value');
                        todoPriorityValue.textContent = todoValues.priority;
                    
                    let changePriorityAdd = document.createElement('div');
                    changePriorityAdd.classList.add('change-priority', 'round-button')
                    changePriorityAdd.setAttribute('id', 'add');
                    prioritySpinners.push(changePriorityAdd);
                    changePriorityAdd.addEventListener('click', () => 
                    {
                        prioritySpinnersAddEventListeners(changePriorityAdd)
                        todoValues.priority = changePriorityAdd.closest('.todo-priority-container').querySelector('.priority-value').textContent;
                    });

                    todoPriority.appendChild(todoPriorityLabel);
                    todoPriority.appendChild(todoPriorityValue);
                    todoPriorityContainer.appendChild(changePrioritySubs);
                    todoPriorityContainer.appendChild(todoPriority);
                    todoPriorityContainer.appendChild(changePriorityAdd);
                
                let checkDone = document.createElement('div');
                checkDone.classList.add('check-done');

                    let checkDoneButtonContainer = document.createElement('div');
                    checkDoneButtonContainer.classList.add('check-done-button-container');

                        let checkDoneButton = document.createElement('div');
                        checkDoneButton.classList.add('check-done-button');
                        checkDoneButton.setAttribute('id', 'mainCB')
                        mainCheckButtons.push(checkDoneButton);
                        checkDoneButton.addEventListener('click', () => { mainCBAddEventListeners(checkDoneButton)});
                    
                    checkDoneButtonContainer.appendChild(checkDoneButton);
                    checkDone.appendChild(checkDoneButtonContainer);
                
                todoMain.appendChild(todoTitle);
                todoMain.appendChild(todoDuedate);
                todoMain.appendChild(todoPriorityContainer);
                todoMain.appendChild(checkDone);
                

            let todoCheckList = document.createElement('div');
            todoCheckList.classList.add('todo-checklist');
            todoCheckList.setAttribute('id', 'toggle-container');

                let checklistHeader = document.createElement('div');
                checklistHeader.classList.add('checklist-header');

                    let checklistToggle = document.createElement('div');
                    checklistToggle.classList.add('toggle');

                        let checklistToggleImg = document.createElement('img');
                        checklistToggleImg.classList.add('toggle-img');
                        checklistToggleImg.setAttribute('src', _graphics_toggle_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
                        checklistToggleImg.setAttribute('alt', 'icon of a toggle');
                    toggleButtons.push(checklistToggleImg);
                    checklistToggleImg.addEventListener('click', () => {projectTogglesAddEventListeners(checklistToggleImg)});

                    let checklistHeading = document.createElement('div');
                    checklistHeading.classList.add('checklist-heading');
                    checklistHeading.textContent = 'Checklist';

                let checklistContainer = document.createElement('div');
                checklistContainer.classList.add('checklist-container');
                checklistContainer.setAttribute('id', 'togglable');

                    let checklist = document.createElement('div');
                    checklist.classList.add('checklist');

                        for(let checkboxValue of todoValues.checkboxes)
                        {
                            let checkboxContainer = document.createElement('div');
                            checkboxContainer.classList.add('checkbox-container')

                                let checkboxDoneButton = document.createElement('div');
                                checkboxDoneButton.classList.add('check-done-button');
                                checkButtons.push(checkboxDoneButton);
                                checkboxDoneButton.addEventListener('click', () => { checkButtonAddEventListeners(checkboxDoneButton)});

                                let checkboxLabel = document.createElement('div');
                                checkboxLabel.classList.add('checkbox-label');
                                checkboxLabel.textContent = checkboxValue;

                                checkboxContainer.appendChild(checkboxDoneButton);
                                checkboxContainer.appendChild(checkboxLabel);
                                checklist.appendChild(checkboxContainer);
                        }

                    let createCheckbox = document.createElement('div');
                    createCheckbox.classList.add('create-checkbox');

                        let checkboxTitleInput = document.createElement('input');
                        checkboxTitleInput.classList.add('checkbox-title-input');
                        checkboxTitleInput.setAttribute('type', 'text');
                        checkboxTitleInput.setAttribute('minlength', '1');
                        checkboxTitleInput.setAttribute('placeholder', 'checkbox title');
                        checkboxTitleInput.setAttribute('maxlength', '30');
                        checkboxTitleInput.setAttribute('id', 'checklist-create');
                        checkboxTitleInput.setAttribute('required', '');

                        let addCheckboxButton = document.createElement('button');
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
                    checklistContainer.appendChild(checklist)
                    checklistContainer.appendChild(createCheckbox)
                    todoCheckList.appendChild(checklistContainer);


            let todoDescriptionContainer = document.createElement('div');
            todoDescriptionContainer.classList.add('todo-description-container');

                let todoDescription = document.createElement('div');
                todoDescription.classList.add('todo-description');
                todoDescription.setAttribute('id', 'text-content');
                todoDescription.textContent = todoValues.description;

                let descriptionInput = document.createElement('input');
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

                let descriptionEditButton = document.createElement('button');
                descriptionEditButton.classList.add('text-edit-button');
                descriptionEditButton.setAttribute('id', 'read-mode');

                    let descriptionEditIcon = document.createElement('img');
                    descriptionEditIcon.classList.add('edit-icon');
                    descriptionEditIcon.setAttribute('src', _graphics_edit_icon_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
                    descriptionEditIcon.setAttribute('alt', 'edit indicator icon');

                editIcons.push(descriptionEditButton);
                descriptionEditButton.addEventListener('click', () => { editIconAddEventListeners(descriptionEditButton)});


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
        let title = todo.querySelector('.title-input').value;
        let dueDate = todo.querySelector('.ddate-input').value;
        let priority = todo.querySelector('.priority-value').textContent;

        let checkboxesElements = todo.querySelectorAll('.checkbox-label');
        let checkboxes = [];
        for(let checkbox of checkboxesElements)
        {
            checkboxes.push(checkbox.textContent);
        }

        let description = todo.querySelector('.description-input').value;
        let isDone = false;
        if(todo.querySelector('check-done-button') && todo.querySelector('check-done-button').classList.contains('checked'))
            isDone = true;

        return {
            title,
            dueDate,
            priority,
            checkboxes,
            description,
            isDone
        }
    }
    function getElementRoute(element)
    {
        let route = [];
        let id;
        if(element.getAttribute('data-element') == 'todo')
            id = element.getAttribute('data-id');
        else
            id = element.closest('[data-adto="true"]').getAttribute('data-id');
        route.push(+id);
        while(id != 0)
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
        if(button.closest('.second-display-menu').querySelector('.todo').style.getPropertyValue('display') != 'none')
            inputToValidate = button.closest('.second-display-menu').querySelector('.todo').querySelector('.title-input');
        else 
            inputToValidate = button.closest('.second-display-menu').querySelector('.set-category-project-title').querySelector('.set-c-p-input');
        if(inputToValidate.validity.valueMissing)
        {
            inputToValidate.setCustomValidity('Must consist at least one character');
            inputToValidate.reportValidity();
        }
        return inputToValidate.value;
    }
    function createButtonAction(button, parent, element, container, route, values)
    {
        let inputValue = BCgetInputValue(button);
        let logicElement;
        let newElement;
        if(inputValue != '')
        {
            if(element == 'category')
            {
                logicElement = _logic_js__WEBPACK_IMPORTED_MODULE_0__.logicModule.createCategory(inputValue, route);
                newElement = createCategory(parent, logicElement);
                newElement.addEventListener('click', () => { addToElementAction(newElement)});

            }
            else if(element == 'project')
            {
                logicElement = _logic_js__WEBPACK_IMPORTED_MODULE_0__.logicModule.createProject(inputValue, route);
                newElement = createProject(parent, logicElement);
                newElement.addEventListener('click', () => { addToElementAction(newElement)});
            }
            else 
            {
                logicElement = _logic_js__WEBPACK_IMPORTED_MODULE_0__.logicModule.createTodo(inputValue, route, values.dueDate, values.priority, values.checkboxes, values.description, values.isDone);
                newElement = createProjectElement(parent, logicElement);
            }
            addToElements.push(newElement);
            removeElements.push(newElement);
            if(container.getAttribute('data-displayed') == 'true')
                generateDirectoryElement(container);
                
            closeSDButton.click();
        }
        else 
        {
            button.addEventListener('click', () =>
            {
                createButtonAction(button, parent, element, container, route, values);
            }, {once: true});
        }
    }
    
    let removeFunctionButton = document.querySelector('.remove-function');
    let removeElements = addToElements.slice(1, addToElements.length).concat(Array.from(document.querySelectorAll('[data-element="todo"]')));
    removeFunctionButton.addEventListener('click', () =>
    {
        removeFunction(removeElements);
    });
    function removeFunction(removeElements)
    {
        if(removeFunctionOn == false)
        {
            if(addFunctionOn == true)
            {
                turnOffAddFunction(addToElements);
            }
            removeFunctionOn = true;
            removeElements.forEach( (removeElement) =>
            {
                removeElement.querySelector('.project-category-title').classList.add('red-text-element');

                removeElement.addEventListener('click', (e) =>
                {
                    if(removeFunctionOn == true)
                    {
                        let index = removeElements.indexOf(removeElement);
                        removeElements = removeElements.slice(0, index).concat(removeElements.slice(index+1, removeElement.length));
                        if(removeElement.getAttribute('data-element') != 'todo')
                        {
                            index = addToElements.indexOf(removeElement);
                            addToElements = addToElements.slice(0, index).concat(addToElements.slice(index+1, addToElements.length));
                        }
                        let id = removeElement.getAttribute('data-id');
                        let route = getElementRoute(removeElement);
                        let logicElement = _logic_js__WEBPACK_IMPORTED_MODULE_0__.logicModule.findByID(route);
                        let logicParent = _logic_js__WEBPACK_IMPORTED_MODULE_0__.logicModule.findByID(route.slice(0, route.length-1));
                        let parentContainer = removeElement.parentElement;

                        _logic_js__WEBPACK_IMPORTED_MODULE_0__.logicModule.removeElement(logicParent, logicElement);
                        turnOffRemoveFunction(removeElements);
                        if(removeElement.parentElement.parentElement.getAttribute('data-displayed') == 'true')
                        {
                            generateDirectoryElement(removeElement.parentElement.parentElement);
                        }
                        else if(removeElement.parentElement.parentElement.parentElement.parentElement.getAttribute('data-displayed') == 'true')
                        {
                            generateDirectoryElement(removeElement.parentElement.parentElement.parentElement.parentElement);
                        }
                        else if(removeElement.getAttribute('data-displayed') == 'true')
                        {
                            let subSection = document.querySelector('.sub-section');
                            removeChildren(subSection);
                            let placeholder = document.createElement('div');
                            placeholder.classList.add('sub-section-placeholder');
                            placeholder.textContent = 'Click an element from Your directory to view it here';
                            subSection.appendChild(placeholder);

                            document.querySelector('.main-section-heading').textContent = '';
                        }
                        parentContainer.removeChild(removeElement);

                    }
                });
            });
        }
        else 
            turnOffRemoveFunction(removeElements);
    }
    function turnOffRemoveFunction(removeElements)
    {
        removeFunctionOn = false;
        removeElements.forEach( removeElement =>
        {
            removeElement.querySelector('.project-category-title').classList.remove('red-text-element');
        });
    }

    return {
    }
}
)();

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logicModule": () => (/* binding */ logicModule)
/* harmony export */ });
let logicModule =
(function()
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
        constructor(title, duedate, priority, checklist, description, done = false)
        {
            super(title);
            this.duedate = duedate;
            this.priority = priority;
            this.checkboxes = checklist;
            this.description = description;
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
    
    let root = new Category('Your directory');
    
    function findByID(idRoute)
    {
        if(idRoute.length == 0)
            return root;
        let id = idRoute[1];
        let parent = root;
        for(let i = 1; i < idRoute.length;)
        {
            for(let child of parent.contents)
            {
                if(child.id == id)
                {
                    parent = child;
                    id = idRoute[++i]
                }
            }
        }
        return parent;
    }
    
    function createElement(child, idRoute)
    {
        let parent = findByID(idRoute);
        parent.contents.push(child);
    }
    
    function createCategory(title, idRoute)
    {
        let category = new Category(title);
        createElement(category, idRoute);
        return category;
    }
    
    function createProject(title, idRoute)
    {
        let project = new Project(title);
        createElement(project, idRoute);
        return project;
    }
    
    function createTodo(title, idRoute, duedate, priority, checklist, description, done = false)
    {
        let todo = new Todo(title, duedate, priority, checklist, description, done);
        createElement(todo, idRoute);
        return todo;
    }

    function removeElement(parent, child)
    {
        let index = parent.contents.indexOf(child);
        parent.contents = parent.contents.slice(0, index).concat(parent.contents.slice(index+1, parent.contents.length));
    }
    
    let cat1 = createCategory('Home', []);
    let prj1 = createProject('Cleaning222222222222222222222222222222222222', [0, 1]);
    let t1 = createTodo('Do the vacuuming', [0,1, 2], '2022-09-08', 'high', ['bedroom', 'kitchen', 'bathroom', 'living room'], 'I need to vacuum the whole house');
    let t2 = createTodo('Do the ironing', [0,1, 2], '2022-09-11', 'normal', ['pink dress shirt', 'red dress shirt'], 'I need to iron my dress shirts');


    return {
        createTodo, createCategory, createProject, findByID, root, removeElement
    }
})()

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
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");





document.querySelector('.git-attrib').querySelector('img').setAttribute('src', _graphics_GitHub_Mark_Light_32px_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
document.querySelector('.toggle-img').setAttribute('src', _graphics_toggle_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
document.querySelector('.toggle-menu-icon').setAttribute('src', _graphics_Arrow_down_svg__WEBPACK_IMPORTED_MODULE_2__["default"]);



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGNBQWMsT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxRQUFRLFVBQVUsS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxVQUFVLEtBQUssWUFBWSxPQUFPLFVBQVUsS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVks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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0RBQWtELDREQUFVO0FBQzVEO0FBQ0E7QUFDQSwrREFBK0QsMkNBQTJDO0FBQzFHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5REFBeUQsYUFBYTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsYUFBYTtBQUN0RTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCwrREFBUztBQUNuRTs7QUFFQTtBQUNBLHNFQUFzRSwyQ0FBMkM7O0FBRWpIO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJpRTtBQUNoQjtBQUNROztBQUV6RCwrRUFBK0UsNEVBQVU7QUFDekYsMERBQTBELDREQUFVO0FBQ3BFLGdFQUFnRSxnRUFBYzs7QUFFekQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZ3JhcGhpY3MvQXJyb3ctZG93bi5zdmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2dyYXBoaWNzL0dpdEh1Yi1NYXJrLUxpZ2h0LTMycHgucG5nIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ncmFwaGljcy9lZGl0LWljb24ucG5nIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ncmFwaGljcy9zYXZlLWljb24ucG5nIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ncmFwaGljcy90b2dnbGUucG5nIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvZ2ljLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiZm9udHMvVWJ1bnR1L1VidW50dS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcImZvbnRzL0xhdG8vTGF0by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFVidW50dTtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IExhdG87XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuKiB7XFxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgaGVpZ2h0OiA1NXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xcbn1cXG5cXG4uaGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogMzNweDtcXG59XFxuXFxuLmF0dHJpYnV0ZXMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLmF0dHJpYnV0ZXMsIC5naXQtYXR0cmliIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hdHRyaWJ1dGUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5hdHRyaWJ1dGUsIC5hdHRyaWJ1dGUgPiAqIHtcXG4gICAgY29sb3I6ICM3OTc5Nzk7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4uYXR0cmlidXRlcyB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLm1lbnUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5mdW5jdGlvbi1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzYjNiM2I7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM1NTU1NTU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgd2lkdGg6IDEzNXB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4uYWRkLWZ1bmN0aW9uOmhvdmVyLCAucmVtb3ZlLWZ1bmN0aW9uOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk2KTtcXG59XFxuXFxuXFxuLm1haW4tY29udGVudCB7XFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNTVweCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XFxufVxcblxcbi5wcm9qZWN0LWNhdGVnb3J5LWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uc2lkZS1tZW51LWVsZW1lbnRzIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMCAxMHB4IDEwcHggMDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZDJkO1xcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMjIyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1NXB4KTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmRpcmVjdG9yeSB7XFxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLmRpcmVjdG9yeS1lbGVtZW50cyB7XFxuICAgIG92ZXJmbG93LXg6IGF1dG87XFxuICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDBweDtcXG59XFxuXFxuLmdyb3VwLXByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0LWNhdGVnb3J5LXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4uY2F0ZWdvcnktcHJvamVjdC1pY29uIHtcXG4gICAgbWluLXdpZHRoOiAyMHB4O1xcbiAgICBtaW4taGVpZ2h0OiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuI2ZpcnN0ID4gLnByb2plY3QtY2F0ZWdvcnktdGl0bGUge1xcbiAgICBmb250LXNpemU6IDI3cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5lbGVtZW50LWNvbnRlbnQge1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjOTk5OTk5O1xcbn1cXG5cXG4udG9nZ2xlLW1lbnUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGxlZnQ6IDMwMHB4O1xcbiAgICB0b3A6IDM4OS41cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZDJkMmQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9nZ2xlLW1lbnUtaWNvbiB7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMjVweCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcXG4gICAgbWFyZ2luLWxlZnQ6IDMyNXB4O1xcbn1cXG5cXG4ubWFpbi1zZWN0aW9uLXdpbmRvdyB7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICB3aWR0aDogOTglO1xcbiAgICBoZWlnaHQ6IDk4JTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjN2U3ZTdlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweFxcbn1cXG5cXG4ubWFpbi1zZWN0aW9uLWhlYWRpbmcge1xcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xcbiAgICBtaW4taGVpZ2h0OiA1M3B4O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uc3ViLXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnN1Yi1zZWN0aW9uLXBsYWNlaG9sZGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc3ViLWhlYWRpbmcge1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi50b2dnbGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnN1Yi1oZWFkaW5nID4gLnRvZ2dsZSB7XFxuICAgIHdpZHRoOiAxNnB4O1xcbiAgICBoZWlnaHQ6IDE0cHg7XFxufVxcblxcbi50b2dnbGUtaW1nIHtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG5cXG59XFxuXFxuLnRvZ2dsZS1pbWcucm90YXRlZCB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuXFxuLnN1Yi1oZWFkaW5nID4gLmhlYWRpbmcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLnRvZG8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTI5O1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzdlN2U3ZTtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLnNlY29uZC1kaXNwbGF5LW1lbnUgPiAudG9kbyB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udG9kby1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4udG9kby5kb25lIHtcXG4gICAgb3BhY2l0eTogMC4zO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmVlbjtcXG59XFxuXFxuLnRvZG8uZG9uZSA+ICAqIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi50b2RvLmRvbmUgPiAudG9kby1tYWluID4gIC5jaGVjay1kb25le1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG4udG9kby1tYWluIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGdhcDogNXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmNoZWNrbGlzdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi50b2RvLWNoZWNrbGlzdCB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAzcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwO1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG59XFxuXFxuLmNoZWNrbGlzdC1oZWFkaW5nIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLmNoZWNrbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uY2hlY2tib3gtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdhcDogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5jaGVja2JveC1jb250YWluZXIgPiAuY2hlY2stZG9uZS1idXR0b24ge1xcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcXG59XFxuXFxuLmNoZWNrbGlzdC1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uY2hlY2tsaXN0LWhlYWRlciA+IC50b2dnbGUgPiAudG9nZ2xlLWltZywgLnByb2plY3QtY2F0ZWdvcnktaGVhZGVyID4gLnRvZ2dsZSA+IC50b2dnbGUtaW1nIHtcXG4gICAgd2lkdGg6IDEzcHg7XFxufVxcblxcbi5jaGVja2JveC1sYWJlbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxufVxcblxcbi5jaGVja2JveC1pbnB1dCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jaGVja2JveC1jb250YWluZXIgPiAuY2hlY2stZG9uZS1idXR0b24ge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uY2hlY2tib3gtY29udGFpbmVyID4gLmNoZWNrLWRvbmUtYnV0dG9uOjpiZWZvcmUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogLTZweDtcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcbiAgICBvcGFjaXR5OiAwLjI7XFxuICAgIGNvbnRlbnQ6ICfinJMnO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4uY3JlYXRlLWNoZWNrYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5jaGVja2JveC10aXRsZS1pbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzI2MjYgIWltcG9ydGFudDsgXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnRvZG8tZGVzY3JpcHRpb24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuLnRvZG8tZGVzY3JpcHRpb24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50b2RvLXBlcmlvZC1jYXRlZ29yeSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDExNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA3cHg7XFxufVxcblxcbi5oZWFkaW5nIHtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbn1cXG5cXG4uc2V0LXBlcmlvZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnBlcmlvZCB7XFxuICAgIHdpZHRoOiAxODVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucGVyaW9kID4gaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjMyMztcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgd2lkdGg6IDE0MHB4O1xcbn1cXG5cXG4ucm91bmQtYnV0dG9uLCAuY2hlY2stZG9uZS1idXR0b24ge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHdpZHRoOiAyOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDI4cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5yb3VuZC1idXR0b24jc3Viczpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnJvdW5kLWJ1dHRvbiNzdWJzOmhvdmVyOjpiZWZvcmUge1xcbiAgICBjb2xvcjogIzI5MjkyOTtcXG59XFxuXFxuLnJvdW5kLWJ1dHRvbiNhZGQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnJvdW5kLWJ1dHRvbiNhZGQ6aG92ZXI6OmJlZm9yZSB7XFxuICAgIGNvbG9yOiAjMjkyOTI5O1xcbn1cXG5cXG4ucm91bmQtYnV0dG9uI3N1YnM6OmJlZm9yZSwgLnJvdW5kLWJ1dHRvbiNhZGQ6OmJlZm9yZXtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIGNvbnRlbnQ6ICctJztcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuLnJvdW5kLWJ1dHRvbiNzdWJzOjpiZWZvcmUge1xcbiAgICB0b3A6IC0yMC41cHg7XFxufVxcblxcbi5yb3VuZC1idXR0b24jYWRkOjpiZWZvcmUge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIHRvcDogLTZweDtcXG4gICAgbGVmdDogLTAuNXB4O1xcbiAgICBjb250ZW50OiAnKyc7XFxuICAgIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnRvZG8tZHVlZGF0ZSwgLnRvZG8tdGl0bGUsIC50b2RvLXByaW9yaXR5LWNvbnRhaW5lciwgLmNoZWNrLWRvbmUge1xcbiAgICB3aWR0aDogMjIwcHg7XFxufSAgICBcXG5cXG4udG9kby10aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnRvZG8tZHVlZGF0ZSwgLnRvZG8tcHJpb3JpdHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdhcDogM3B4O1xcbn0gICAgXFxuXFxuLnRvZG8tbGFiZWwge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDFweCA1cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLmNoZWNrLWRvbmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGRhdGUtaW5wdXQsIC5wcmlvcml0eS12YWx1ZSwgLnRpdGxlLWlucHV0LCAudG9kby10aXRsZS1jb250ZW50LCAuY2hlY2tib3gtdGl0bGUtaW5wdXQsIC5zZXQtYy1wLWlucHV0IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLnByaW9yaXR5LXZhbHVlLCAudGl0bGUtaW5wdXQge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi5kZGF0ZS1pbnB1dCwgLnByaW9yaXR5LXZhbHVlIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLmRkYXRlLWlucHV0IHtcXG4gICAgd2lkdGg6IDEyOXB4O1xcbn1cXG5cXG4ucHJpb3JpdHktdmFsdWUge1xcbiAgICB3aWR0aDogNzBweDtcXG59XFxuXFxuLnRpdGxlLWlucHV0IHtcXG4gICAgd2lkdGg6IDE4NXB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZDJkMmQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLWlucHV0IHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZDJkO1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi50b2RvLXRpdGxlLWNvbnRlbnQge1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIG1heC13aWR0aDogMjIwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDU1cHg7XFxuICAgIG92ZXJmbG93LXg6IGF1dG87XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDMxcHg7XFxufVxcblxcbi50ZXh0LWVkaXQtYnV0dG9uIHtcXG4gICAgd2lkdGg6IDI2cHg7XFxuICAgIGhlaWdodDogMjZweDtcXG59XFxuXFxuLmNoZWNrLWRvbmUtaW5wdXQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY2hlY2stZG9uZS1idXR0b24tY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uY2hlY2stZG9uZS1idXR0b24ge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHdpZHRoOiAyOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDI4cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jaGVjay1kb25lLWJ1dHRvbjo6YmVmb3JlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC00cHg7XFxuICAgIGZvbnQtc2l6ZTogMjNweDtcXG4gICAgb3BhY2l0eTogMC4yO1xcbiAgICBjb250ZW50OiAn4pyTJztcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLmNoZWNrLWRvbmUtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5jaGVjay1kb25lLWJ1dHRvbjpob3Zlcjo6YmVmb3JlIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmNoZWNrLWRvbmUtYnV0dG9uLmNoZWNrZWQ6OmJlZm9yZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5jaGVja2VkIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcblxcbi8qIHdpZHRoICovXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIGhlaWdodDogNXB4O1xcbiAgfVxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICBoZWlnaHQ6IDVweDtcXG4gICAgd2lkdGg6IDhweDtcXG59XFxuXFxuLyogVHJhY2sgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgYmFja2dyb3VuZDogIzIyMjtcXG59XFxuXFxuLyogSGFuZGxlICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigxOSwgMTksIDE5KTtcXG59XFxuXFxuLyogSGFuZGxlIG9uIGhvdmVyICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICM1NTU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uc2Vjb25kLWRpc3BsYXkge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCAvIDMwJSk7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uc2Vjb25kLWRpc3BsYXktbWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zZXQtY2F0ZWdvcnktcHJvamVjdCB7XFxufVxcblxcbi5zZXQtY2F0ZWdvcnktcHJvamVjdC10aXRsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnNldC1jLXAtbGFiZWwge1xcbiAgICBmb250LXNpemU6IDM4cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNldC1jLXAtaW5wdXQge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTE5MTk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnNlbGVjdC1lbGVtZW50LW1lbnUge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG59XFxuXFxuLnNlbGVjdC1lbGVtZW50LW1lbnUgYnV0dG9uOmZpcnN0LW9mLXR5cGUge1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zZWxlY3QtZWxlbWVudC1tZW51IGJ1dHRvbjpsYXN0LW9mLXR5cGUge1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zZW0tb3B0aW9uIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmF5O1xcbn1cXG5cXG4uc2VtLW9wdGlvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMWE7XFxufVxcblxcbi5jbG9zZS1idXR0b24ge1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4O1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uY2xvc2UtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbi5jcmVhdGUtYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyNTI1O1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxufVxcblxcbi5jcmVhdGUtYnV0dG9uOmhvdmVyIHtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KSB0cmFuc2xhdGVZKC0wLjVweCk7XFxufVxcblxcbi5ncmVlbi10ZXh0LWVsZW1lbnQge1xcbiAgICBjb2xvcjogIzdjZDQ3YztcXG59XFxuXFxuLnJlZC10ZXh0LWVsZW1lbnQge1xcbiAgICBjb2xvcjogI2VjNWM1YztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQiw0Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsNENBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7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QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLDRCQUE0QjtJQUM1Qiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixNQUFNO0lBQ04sZUFBZTtJQUNmLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsOEJBQThCO0lBQzlCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFVidW50dTtcXG4gICAgc3JjOiB1cmwoZm9udHMvVWJ1bnR1L1VidW50dS1SZWd1bGFyLnR0Zik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogTGF0bztcXG4gICAgc3JjOiB1cmwoZm9udHMvTGF0by9MYXRvLVJlZ3VsYXIudHRmKTtcXG59XFxuXFxuKiB7XFxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgaGVpZ2h0OiA1NXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xcbn1cXG5cXG4uaGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogMzNweDtcXG59XFxuXFxuLmF0dHJpYnV0ZXMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLmF0dHJpYnV0ZXMsIC5naXQtYXR0cmliIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hdHRyaWJ1dGUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5hdHRyaWJ1dGUsIC5hdHRyaWJ1dGUgPiAqIHtcXG4gICAgY29sb3I6ICM3OTc5Nzk7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4uYXR0cmlidXRlcyB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLm1lbnUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5mdW5jdGlvbi1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzYjNiM2I7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM1NTU1NTU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgd2lkdGg6IDEzNXB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4uYWRkLWZ1bmN0aW9uOmhvdmVyLCAucmVtb3ZlLWZ1bmN0aW9uOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk2KTtcXG59XFxuXFxuXFxuLm1haW4tY29udGVudCB7XFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNTVweCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XFxufVxcblxcbi5wcm9qZWN0LWNhdGVnb3J5LWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uc2lkZS1tZW51LWVsZW1lbnRzIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMCAxMHB4IDEwcHggMDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZDJkO1xcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMjIyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1NXB4KTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmRpcmVjdG9yeSB7XFxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLmRpcmVjdG9yeS1lbGVtZW50cyB7XFxuICAgIG92ZXJmbG93LXg6IGF1dG87XFxuICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDBweDtcXG59XFxuXFxuLmdyb3VwLXByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0LWNhdGVnb3J5LXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4uY2F0ZWdvcnktcHJvamVjdC1pY29uIHtcXG4gICAgbWluLXdpZHRoOiAyMHB4O1xcbiAgICBtaW4taGVpZ2h0OiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuI2ZpcnN0ID4gLnByb2plY3QtY2F0ZWdvcnktdGl0bGUge1xcbiAgICBmb250LXNpemU6IDI3cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5lbGVtZW50LWNvbnRlbnQge1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjOTk5OTk5O1xcbn1cXG5cXG4udG9nZ2xlLW1lbnUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGxlZnQ6IDMwMHB4O1xcbiAgICB0b3A6IDM4OS41cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZDJkMmQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9nZ2xlLW1lbnUtaWNvbiB7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMjVweCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcXG4gICAgbWFyZ2luLWxlZnQ6IDMyNXB4O1xcbn1cXG5cXG4ubWFpbi1zZWN0aW9uLXdpbmRvdyB7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICB3aWR0aDogOTglO1xcbiAgICBoZWlnaHQ6IDk4JTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjN2U3ZTdlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweFxcbn1cXG5cXG4ubWFpbi1zZWN0aW9uLWhlYWRpbmcge1xcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xcbiAgICBtaW4taGVpZ2h0OiA1M3B4O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uc3ViLXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnN1Yi1zZWN0aW9uLXBsYWNlaG9sZGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc3ViLWhlYWRpbmcge1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi50b2dnbGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnN1Yi1oZWFkaW5nID4gLnRvZ2dsZSB7XFxuICAgIHdpZHRoOiAxNnB4O1xcbiAgICBoZWlnaHQ6IDE0cHg7XFxufVxcblxcbi50b2dnbGUtaW1nIHtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG5cXG59XFxuXFxuLnRvZ2dsZS1pbWcucm90YXRlZCB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuXFxuLnN1Yi1oZWFkaW5nID4gLmhlYWRpbmcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLnRvZG8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTI5O1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzdlN2U3ZTtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLnNlY29uZC1kaXNwbGF5LW1lbnUgPiAudG9kbyB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udG9kby1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4udG9kby5kb25lIHtcXG4gICAgb3BhY2l0eTogMC4zO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmVlbjtcXG59XFxuXFxuLnRvZG8uZG9uZSA+ICAqIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi50b2RvLmRvbmUgPiAudG9kby1tYWluID4gIC5jaGVjay1kb25le1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG4udG9kby1tYWluIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGdhcDogNXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmNoZWNrbGlzdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi50b2RvLWNoZWNrbGlzdCB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAzcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwO1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG59XFxuXFxuLmNoZWNrbGlzdC1oZWFkaW5nIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLmNoZWNrbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uY2hlY2tib3gtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdhcDogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5jaGVja2JveC1jb250YWluZXIgPiAuY2hlY2stZG9uZS1idXR0b24ge1xcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcXG59XFxuXFxuLmNoZWNrbGlzdC1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uY2hlY2tsaXN0LWhlYWRlciA+IC50b2dnbGUgPiAudG9nZ2xlLWltZywgLnByb2plY3QtY2F0ZWdvcnktaGVhZGVyID4gLnRvZ2dsZSA+IC50b2dnbGUtaW1nIHtcXG4gICAgd2lkdGg6IDEzcHg7XFxufVxcblxcbi5jaGVja2JveC1sYWJlbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxufVxcblxcbi5jaGVja2JveC1pbnB1dCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jaGVja2JveC1jb250YWluZXIgPiAuY2hlY2stZG9uZS1idXR0b24ge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uY2hlY2tib3gtY29udGFpbmVyID4gLmNoZWNrLWRvbmUtYnV0dG9uOjpiZWZvcmUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogLTZweDtcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcbiAgICBvcGFjaXR5OiAwLjI7XFxuICAgIGNvbnRlbnQ6ICfinJMnO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4uY3JlYXRlLWNoZWNrYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5jaGVja2JveC10aXRsZS1pbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzI2MjYgIWltcG9ydGFudDsgXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnRvZG8tZGVzY3JpcHRpb24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuLnRvZG8tZGVzY3JpcHRpb24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50b2RvLXBlcmlvZC1jYXRlZ29yeSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDExNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA3cHg7XFxufVxcblxcbi5oZWFkaW5nIHtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbn1cXG5cXG4uc2V0LXBlcmlvZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnBlcmlvZCB7XFxuICAgIHdpZHRoOiAxODVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucGVyaW9kID4gaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjMyMztcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgd2lkdGg6IDE0MHB4O1xcbn1cXG5cXG4ucm91bmQtYnV0dG9uLCAuY2hlY2stZG9uZS1idXR0b24ge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHdpZHRoOiAyOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDI4cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5yb3VuZC1idXR0b24jc3Viczpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnJvdW5kLWJ1dHRvbiNzdWJzOmhvdmVyOjpiZWZvcmUge1xcbiAgICBjb2xvcjogIzI5MjkyOTtcXG59XFxuXFxuLnJvdW5kLWJ1dHRvbiNhZGQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnJvdW5kLWJ1dHRvbiNhZGQ6aG92ZXI6OmJlZm9yZSB7XFxuICAgIGNvbG9yOiAjMjkyOTI5O1xcbn1cXG5cXG4ucm91bmQtYnV0dG9uI3N1YnM6OmJlZm9yZSwgLnJvdW5kLWJ1dHRvbiNhZGQ6OmJlZm9yZXtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIGNvbnRlbnQ6ICctJztcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuLnJvdW5kLWJ1dHRvbiNzdWJzOjpiZWZvcmUge1xcbiAgICB0b3A6IC0yMC41cHg7XFxufVxcblxcbi5yb3VuZC1idXR0b24jYWRkOjpiZWZvcmUge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIHRvcDogLTZweDtcXG4gICAgbGVmdDogLTAuNXB4O1xcbiAgICBjb250ZW50OiAnKyc7XFxuICAgIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnRvZG8tZHVlZGF0ZSwgLnRvZG8tdGl0bGUsIC50b2RvLXByaW9yaXR5LWNvbnRhaW5lciwgLmNoZWNrLWRvbmUge1xcbiAgICB3aWR0aDogMjIwcHg7XFxufSAgICBcXG5cXG4udG9kby10aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnRvZG8tZHVlZGF0ZSwgLnRvZG8tcHJpb3JpdHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdhcDogM3B4O1xcbn0gICAgXFxuXFxuLnRvZG8tbGFiZWwge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDFweCA1cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLmNoZWNrLWRvbmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGRhdGUtaW5wdXQsIC5wcmlvcml0eS12YWx1ZSwgLnRpdGxlLWlucHV0LCAudG9kby10aXRsZS1jb250ZW50LCAuY2hlY2tib3gtdGl0bGUtaW5wdXQsIC5zZXQtYy1wLWlucHV0IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLnByaW9yaXR5LXZhbHVlLCAudGl0bGUtaW5wdXQge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi5kZGF0ZS1pbnB1dCwgLnByaW9yaXR5LXZhbHVlIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLmRkYXRlLWlucHV0IHtcXG4gICAgd2lkdGg6IDEyOXB4O1xcbn1cXG5cXG4ucHJpb3JpdHktdmFsdWUge1xcbiAgICB3aWR0aDogNzBweDtcXG59XFxuXFxuLnRpdGxlLWlucHV0IHtcXG4gICAgd2lkdGg6IDE4NXB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZDJkMmQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLWlucHV0IHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZDJkO1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi50b2RvLXRpdGxlLWNvbnRlbnQge1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIG1heC13aWR0aDogMjIwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDU1cHg7XFxuICAgIG92ZXJmbG93LXg6IGF1dG87XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDMxcHg7XFxufVxcblxcbi50ZXh0LWVkaXQtYnV0dG9uIHtcXG4gICAgd2lkdGg6IDI2cHg7XFxuICAgIGhlaWdodDogMjZweDtcXG59XFxuXFxuLmNoZWNrLWRvbmUtaW5wdXQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY2hlY2stZG9uZS1idXR0b24tY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uY2hlY2stZG9uZS1idXR0b24ge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHdpZHRoOiAyOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDI4cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jaGVjay1kb25lLWJ1dHRvbjo6YmVmb3JlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC00cHg7XFxuICAgIGZvbnQtc2l6ZTogMjNweDtcXG4gICAgb3BhY2l0eTogMC4yO1xcbiAgICBjb250ZW50OiAn4pyTJztcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLmNoZWNrLWRvbmUtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5jaGVjay1kb25lLWJ1dHRvbjpob3Zlcjo6YmVmb3JlIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmNoZWNrLWRvbmUtYnV0dG9uLmNoZWNrZWQ6OmJlZm9yZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5jaGVja2VkIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcblxcbi8qIHdpZHRoICovXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIGhlaWdodDogNXB4O1xcbiAgfVxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICBoZWlnaHQ6IDVweDtcXG4gICAgd2lkdGg6IDhweDtcXG59XFxuXFxuLyogVHJhY2sgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgYmFja2dyb3VuZDogIzIyMjtcXG59XFxuXFxuLyogSGFuZGxlICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigxOSwgMTksIDE5KTtcXG59XFxuXFxuLyogSGFuZGxlIG9uIGhvdmVyICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICM1NTU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uc2Vjb25kLWRpc3BsYXkge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCAvIDMwJSk7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uc2Vjb25kLWRpc3BsYXktbWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zZXQtY2F0ZWdvcnktcHJvamVjdCB7XFxufVxcblxcbi5zZXQtY2F0ZWdvcnktcHJvamVjdC10aXRsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnNldC1jLXAtbGFiZWwge1xcbiAgICBmb250LXNpemU6IDM4cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNldC1jLXAtaW5wdXQge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTE5MTk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnNlbGVjdC1lbGVtZW50LW1lbnUge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG59XFxuXFxuLnNlbGVjdC1lbGVtZW50LW1lbnUgYnV0dG9uOmZpcnN0LW9mLXR5cGUge1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zZWxlY3QtZWxlbWVudC1tZW51IGJ1dHRvbjpsYXN0LW9mLXR5cGUge1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zZW0tb3B0aW9uIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmF5O1xcbn1cXG5cXG4uc2VtLW9wdGlvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMWE7XFxufVxcblxcbi5jbG9zZS1idXR0b24ge1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4O1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uY2xvc2UtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbi5jcmVhdGUtYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyNTI1O1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxufVxcblxcbi5jcmVhdGUtYnV0dG9uOmhvdmVyIHtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KSB0cmFuc2xhdGVZKC0wLjVweCk7XFxufVxcblxcbi5ncmVlbi10ZXh0LWVsZW1lbnQge1xcbiAgICBjb2xvcjogIzdjZDQ3YztcXG59XFxuXFxuLnJlZC10ZXh0LWVsZW1lbnQge1xcbiAgICBjb2xvcjogI2VjNWM1YztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjY3MjJlN2FiYWM5ZTMwYjAyMWJiNGFmNzkyMjg5NDljLnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIyNjZjYTYzMTc3YmNhNmYzMzBhNzRlODNmZGM2MzE3OC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiM2FjZmJjYjgzMjdiZmYyYmE2NGU1NTZiMzI2YWYzMjQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjY0MWY2ZmI5OTQ4ODY1OGI0NGVkOTQyMjhjYzQ3ODUxLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkZjgzNTY1NTk5OWQ3YWVlMzhhODY2ZDg1ZDcxNjAwZS5wbmdcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgbG9naWNNb2R1bGUgfSBmcm9tICcuL2xvZ2ljLmpzJztcbmltcG9ydCAgc2F2ZUljb24gIGZyb20gJy4vZ3JhcGhpY3Mvc2F2ZS1pY29uLnBuZyc7XG5pbXBvcnQgIGVkaXRJY29uMiAgZnJvbSAnLi9ncmFwaGljcy9lZGl0LWljb24ucG5nJztcbmltcG9ydCAgdG9nZ2xlSWNvbiAgZnJvbSAnLi9ncmFwaGljcy90b2dnbGUucG5nJztcblxuXG5leHBvcnQgbGV0IGRvbU1vZHVsZSA9IFxuKGZ1bmN0aW9uKClcbntcblxuICAgIGxldCBsYXN0V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggfHwgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcbiAgICBmdW5jdGlvbiBhZGp1c3RFbGVtZW50VG9XaW5kb3dTaXplKCkgXG4gICAge1xuICAgICAgICBsZXQgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggfHwgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcbiAgICAgICAgbGV0IGNvbnRlbnQgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICAgICAgaWYod2lkdGggPCA2MDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUuc2V0UHJvcGVydHkoJ21hcmdpbi1sZWZ0JywgJzBweCcpO1xuICAgICAgICAgICAgY29udGVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnd2lkdGgnLCAnMTAwJScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoY29udGVudC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdtYXJnaW4tbGVmdCcpICE9ICczMjVweCcgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZ2dsZS1tZW51LWljb24nKS5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCd0cmFuc2Zvcm0nKSAhPSAncm90YXRlKC05MGRlZyknKVxuICAgICAgICAgICAgY29udGVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnbWFyZ2luLWxlZnQnLCAnMzI1cHgnKTtcbiAgICB9XG5cbiAgICBhZGp1c3RFbGVtZW50VG9XaW5kb3dTaXplKCk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgYWRqdXN0RWxlbWVudFRvV2luZG93U2l6ZSgpO1xuICAgIH0sIHRydWUpO1xuXG4gICAgbGV0IHRvZ2dsZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlLW1lbnUnKTtcbiAgICB0b2dnbGVNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PlxuICAgIHtcbiAgICAgICAgbGV0IHRvZ2dsZUljb24gPSB0b2dnbGVNZW51LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUtbWVudS1pY29uJyk7XG4gICAgICAgIGlmKHRvZ2dsZUljb24uc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgndHJhbnNmb3JtJykgPT0gJ3JvdGF0ZSg5MGRlZyknKVxuICAgICAgICB7XG4gICAgICAgICAgICB0b2dnbGVJY29uLnN0eWxlLnNldFByb3BlcnR5KCd0cmFuc2Zvcm0nLCAncm90YXRlKC05MGRlZyknKTtcbiAgICAgICAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUuc2V0UHJvcGVydHkoJ3dpZHRoJywgJ2NhbGMoMTAwJSAtIDI1cHgpJyk7XG4gICAgICAgICAgICBjb250ZW50LnN0eWxlLnNldFByb3BlcnR5KCdtYXJnaW4tbGVmdCcsICcyNXB4Jyk7XG4gICAgICAgICAgICB0b2dnbGVNZW51LmNsb3Nlc3QoJy5zaWRlLW1lbnUnKS5zdHlsZS5zZXRQcm9wZXJ0eSgndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoLTMwMHB4KScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRvZ2dsZUljb24uc3R5bGUuc2V0UHJvcGVydHkoJ3RyYW5zZm9ybScsICdyb3RhdGUoOTBkZWcpJyk7XG4gICAgICAgICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgICAgICAgICBjb250ZW50LnN0eWxlLnNldFByb3BlcnR5KCd3aWR0aCcsICdjYWxjKDEwMCUgLSAzMjVweCknKTtcbiAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUuc2V0UHJvcGVydHkoJ21hcmdpbi1sZWZ0JywgJzMyNXB4Jyk7XG4gICAgICAgICAgICB0b2dnbGVNZW51LmNsb3Nlc3QoJy5zaWRlLW1lbnUnKS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNmb3JtJyk7XG4gICAgICAgICAgICBhZGp1c3RFbGVtZW50VG9XaW5kb3dTaXplKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBcblxuXG4gICAgbGV0IGFkZEZ1bmN0aW9uT24gPSBmYWxzZTtcbiAgICBsZXQgcmVtb3ZlRnVuY3Rpb25PbiA9IGZhbHNlO1xuXG5cbiAgICBmdW5jdGlvbiBjaGVja1ZhbGlkaXR5VGV4dEVtcHR5KHRleHRJbnB1dClcbiAgICB7XG4gICAgICAgIGlmKHRleHRJbnB1dC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRleHRJbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnTXVzdCBjb25zaXN0IGF0IGxlYXN0IG9uZSBjaGFyYWN0ZXInKTtcbiAgICAgICAgICAgIHRleHRJbnB1dC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBsZXQgZWRpdEljb25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGV4dC1lZGl0LWJ1dHRvbicpKTtcbiAgICBlZGl0SWNvbnMuZm9yRWFjaChlZGl0SWNvbiA9PiBcbiAgICB7XG4gICAgICAgIGVkaXRJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gXG4gICAgICAgIHtcbiAgICAgICAgICAgIGVkaXRJY29uQWRkRXZlbnRMaXN0ZW5lcnMoZWRpdEljb24pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBmdW5jdGlvbiBlZGl0SWNvbkFkZEV2ZW50TGlzdGVuZXJzKGVkaXRJY29uKVxuICAgIHtcbiAgICAgICAgbGV0IHBhcmVudCA9IGVkaXRJY29uLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGxldCBpbnB1dCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgICAgICBsZXQgY29udGVudERpdiA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCcjdGV4dC1jb250ZW50Jyk7XG4gICAgICAgIGxldCBpbWcgPSBlZGl0SWNvbi5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcbiAgICAgICAgaWYoZWRpdEljb24uZ2V0QXR0cmlidXRlKCdpZCcpID09ICdyZWFkLW1vZGUnKVxuICAgICAgICB7XG4gICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBzYXZlSWNvbik7XG4gICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdhbHQnLCAnc2F2ZSBpbmRpY2F0b3IgaWNvbicpO1xuICAgICAgICAgICAgZWRpdEljb24uc2V0QXR0cmlidXRlKCdpZCcsICdlZGl0LW1vZGUnKTtcbiAgICAgICAgICAgIGNvbnRlbnREaXYuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICAgICAgaW5wdXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2Rpc3BsYXknKTtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gY29udGVudERpdi50ZXh0Q29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGVkaXRJY29uLmdldEF0dHJpYnV0ZSgnaWQnKSA9PSAnZWRpdC1tb2RlJylcbiAgICAgICAge1xuICAgICAgICAgICAgaWYoY2hlY2tWYWxpZGl0eVRleHRFbXB0eShpbnB1dCkgfHwgaW5wdXQuZ2V0QXR0cmlidXRlKCd2YWxpZGF0ZS1lbXB0eScpID09ICdmYWxzZScpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29udGVudERpdi50ZXh0Q29udGVudCA9IGlucHV0LnZhbHVlO1xuICAgICAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGVkaXRJY29uMik7XG4gICAgICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2VkaXQgaW5kaWNhdG9yIGljb24nKTtcbiAgICAgICAgICAgICAgICBlZGl0SWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JlYWQtbW9kZScpO1xuICAgICAgICAgICAgICAgIGNvbnRlbnREaXYuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2Rpc3BsYXknKTtcbiAgICAgICAgICAgICAgICBpbnB1dC5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgY2hlY2tCdXR0b25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2stZG9uZS1idXR0b24nKSkuZmlsdGVyKCAoY2IpID0+IHtyZXR1cm4gY2IuZ2V0QXR0cmlidXRlKCdpZCcpICE9ICdtYWluQ0InfSk7XG4gICAgY2hlY2tCdXR0b25zLmZvckVhY2goY2hlY2tCdXR0b24gPT4gXG4gICAge1xuICAgICAgICBjaGVja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNoZWNrQnV0dG9uQWRkRXZlbnRMaXN0ZW5lcnMoY2hlY2tCdXR0b24pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBmdW5jdGlvbiBjaGVja0J1dHRvbkFkZEV2ZW50TGlzdGVuZXJzKGNoZWNrQnV0dG9uKVxuICAgIHtcbiAgICAgICAgaWYoIShjaGVja0J1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrZWQnKSkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNoZWNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGNoZWNrQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnY2hlY2tlZCcpKVxuICAgICAgICB7XG4gICAgICAgICAgICBjaGVja0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdjaGVja2VkJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgbWFpbkNoZWNrQnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI21haW5DQicpKTtcbiAgICBtYWluQ2hlY2tCdXR0b25zLmZvckVhY2goY2hlY2tCdXR0b24gPT4gXG4gICAge1xuICAgICAgICBjaGVja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIG1haW5DQkFkZEV2ZW50TGlzdGVuZXJzKGNoZWNrQnV0dG9uKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gbWFpbkNCQWRkRXZlbnRMaXN0ZW5lcnMoY2hlY2tCdXR0b24pXG4gICAge1xuICAgICAgICBsZXQgdG9kbyA9IGNoZWNrQnV0dG9uLmNsb3Nlc3QoJ2Rpdi50b2RvJyk7XG4gICAgICAgIGxldCBkYXRlSW5wdXQgPSB0b2RvLnF1ZXJ5U2VsZWN0b3IoJy5kZGF0ZS1pbnB1dCcpO1xuICAgICAgICBpZihjaGVja0J1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrZWQnKSlcbiAgICAgICAge1xuICAgICAgICAgICAgY2hlY2tCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2tlZCcpO1xuICAgICAgICAgICAgdG9kby5jbGFzc0xpc3QucmVtb3ZlKCdkb25lJyk7XG4gICAgICAgICAgICBkYXRlSW5wdXQucmVtb3ZlQXR0cmlidXRlKCdyZWFkb25seScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoIShjaGVja0J1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrZWQnKSkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNoZWNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcbiAgICAgICAgICAgIGxldCBpY29ucyA9IHRvZG8ucXVlcnlTZWxlY3RvckFsbCgnLnRleHQtZWRpdC1idXR0b24nKTtcbiAgICAgICAgICAgIGljb25zLmZvckVhY2goIGljb24gPT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZihpY29uLmdldEF0dHJpYnV0ZSgnaWQnKSA9PSAnZWRpdC1tb2RlJylcbiAgICAgICAgICAgICAgICAgICAgZWRpdEljb25BZGRFdmVudExpc3RlbmVycyhpY29uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAnJyk7XG4gICAgICAgICAgICB0b2RvLmNsYXNzTGlzdC5hZGQoJ2RvbmUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBwcmlvcml0eVNwaW5uZXJzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhbmdlLXByaW9yaXR5JykpO1xuICAgIHByaW9yaXR5U3Bpbm5lcnMuZm9yRWFjaChwcmlvcml0eVNwaW5uZXIgPT4gXG4gICAge1xuICAgICAgICBwcmlvcml0eVNwaW5uZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgICAgICB7XG4gICAgICAgICAgICBwcmlvcml0eVNwaW5uZXJzQWRkRXZlbnRMaXN0ZW5lcnMocHJpb3JpdHlTcGlubmVyKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gcHJpb3JpdHlTcGlubmVyc0FkZEV2ZW50TGlzdGVuZXJzKHByaW9yaXR5U3Bpbm5lcilcbiAgICB7XG4gICAgICAgIGxldCBpZCA9IHByaW9yaXR5U3Bpbm5lci5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgIGxldCBwcmlvcml0eUNvbnRlbnQgPSBwcmlvcml0eVNwaW5uZXIuY2xvc2VzdCgnLnRvZG8tcHJpb3JpdHktY29udGFpbmVyJykucXVlcnlTZWxlY3RvcignLnByaW9yaXR5LXZhbHVlJyk7XG4gICAgICAgIGxldCB2YWx1ZSA9IHByaW9yaXR5Q29udGVudC50ZXh0Q29udGVudDtcblxuICAgICAgICBpZihpZCA9PSAnc3VicycpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN3aXRjaCh2YWx1ZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjYXNlICdsb3cnIDogdmFsdWUgPSAnaGlnaCc7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ25vcm1hbCcgOiB2YWx1ZSA9ICdsb3cnOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdoaWdoJyA6IHZhbHVlID0gJ25vcm1hbCc7IGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSBpZihpZCA9PSAnYWRkJylcbiAgICAgICAge1xuICAgICAgICAgICAgc3dpdGNoKHZhbHVlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2xvdycgOiB2YWx1ZSA9ICdub3JtYWwnOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdub3JtYWwnIDogdmFsdWUgPSAnaGlnaCc7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2hpZ2gnIDogdmFsdWUgPSAnbG93JzsgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcHJpb3JpdHlDb250ZW50LnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgbGV0IHRvZ2dsZUJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2dnbGUtaW1nJykpO1xuICAgIHRvZ2dsZUJ1dHRvbnMuZm9yRWFjaCggKHRvZ2dsZUJ1dHRvbikgPT4gXG4gICAge1xuICAgICAgICB0b2dnbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7cHJvamVjdFRvZ2dsZXNBZGRFdmVudExpc3RlbmVycyh0b2dnbGVCdXR0b24pfSk7XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gcHJvamVjdFRvZ2dsZXNBZGRFdmVudExpc3RlbmVycyh0b2dnbGVCdXR0b24pXG4gICAge1xuICAgICAgICBsZXQgZWxlbWVudHNUb1RvZ2dsZSA9IHRvZ2dsZUJ1dHRvbi5jbG9zZXN0KCcjdG9nZ2xlLWNvbnRhaW5lcicpLnF1ZXJ5U2VsZWN0b3IoJyN0b2dnbGFibGUnKSAucXVlcnlTZWxlY3RvckFsbCgnOnNjb3BlID4gKicpO1xuICAgICAgICBpZighKHRvZ2dsZUJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3JvdGF0ZWQnKSkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRvZ2dsZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyb3RhdGVkJylcbiAgICAgICAgICAgIGVsZW1lbnRzVG9Ub2dnbGUuZm9yRWFjaCggKGVsZW1lbnRUb1RvZ2dsZSkgPT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50VG9Ub2dnbGUuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0b2dnbGVCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdyb3RhdGVkJykpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRvZ2dsZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdyb3RhdGVkJylcbiAgICAgICAgICAgIGVsZW1lbnRzVG9Ub2dnbGUuZm9yRWFjaCggKGVsZW1lbnRUb1RvZ2dsZSkgPT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50VG9Ub2dnbGUuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2Rpc3BsYXknKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGFkZENoZWNrYm94QnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFkZC1jaGVja2JveCcpKTtcbiAgICBhZGRDaGVja2JveEJ1dHRvbnMuZm9yRWFjaCggYWRkQ2hlY2tib3hCdXR0b24gPT5cbiAgICB7XG4gICAgICAgIGFkZENoZWNrYm94QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICAgICAge1xuICAgICAgICAgICAgYWRkQ2hlY2tib3hCdXR0b25BY3Rpb24oYWRkQ2hlY2tib3hCdXR0b24pO1xuICAgICAgICB9KTsgXG4gICAgfSk7XG4gICAgZnVuY3Rpb24gYWRkQ2hlY2tib3hCdXR0b25BY3Rpb24oYWRkQ2hlY2tib3hCdXR0b24pIFxuICAgIHtcbiAgICAgICAgbGV0IGNoZWNrbGlzdENvbnRhaW5lciA9IGFkZENoZWNrYm94QnV0dG9uLmNsb3Nlc3QoJy5jaGVja2xpc3QtY29udGFpbmVyJylcbiAgICAgICAgbGV0IGNoZWNrbGlzdCA9IGNoZWNrbGlzdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2hlY2tsaXN0Jyk7XG4gICAgICAgIGxldCB0aXRsZUlucHV0ID0gY2hlY2tsaXN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveC10aXRsZS1pbnB1dCcpO1xuXG4gICAgICAgIGlmKGNoZWNrVmFsaWRpdHlUZXh0RW1wdHkodGl0bGVJbnB1dCkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBjaGVja2JveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY2hlY2tib3hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gtY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICBsZXQgY2hlY2tib3hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjaGVja2JveEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjaGVjay1kb25lLWJ1dHRvbicpO1xuICAgICAgICAgICAgICAgIGNoZWNrQnV0dG9ucy5wdXNoKGNoZWNrYm94QnV0dG9uKTtcbiAgICAgICAgICAgICAgICBjaGVja2JveEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtjaGVja0J1dHRvbkFkZEV2ZW50TGlzdGVuZXJzKGNoZWNrYm94QnV0dG9uKX0pO1xuXG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrYm94TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjaGVja2JveExhYmVsLmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94LWxhYmVsJyk7XG5cbiAgICAgICAgICAgICAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveEJ1dHRvbik7XG4gICAgICAgICAgICAgICAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3hMYWJlbCk7XG4gICAgICAgICAgICAgICAgY2hlY2tib3hMYWJlbC50ZXh0Q29udGVudCA9IHRpdGxlSW5wdXQudmFsdWU7XG4gICAgICAgICAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSA9ICcnO1xuXG4gICAgICAgICAgICAgICAgY2hlY2tsaXN0Lmluc2VydEJlZm9yZShjaGVja2JveENvbnRhaW5lciwgY2hlY2tsaXN0LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtY2hlY2tib3gnKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgY2xvc2VTREJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS1zZWNvbmQtZGlzcGxheScpO1xuICAgIGNsb3NlU0RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgIHtcbiAgICAgICAgY2xvc2VTREJ1dHRvbkFjdGlvbnMoY2xvc2VTREJ1dHRvbikgXG4gICAgfSk7XG4gICAgZnVuY3Rpb24gY2xvc2VTREJ1dHRvbkFjdGlvbnMoY2xvc2VTREJ1dHRvbikgXG4gICAge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Vjb25kLWRpc3BsYXknKS5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7IFxuICAgIH1cblxuICAgZ2VuZXJhdGVEaXJlY3RvcnkobG9naWNNb2R1bGUucm9vdCk7IC8vISEhXG5cbiAgICBsZXQgYWRkVG9FbGVtZW50cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGVnb3J5JykpLmNvbmNhdChBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0JykpKTtcbiAgICBhZGRUb0VsZW1lbnRzLmZvckVhY2goIGFkZFRvRWxlbWVudCA9PlxuICAgIHtcbiAgICAgICAgYWRkVG9FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PlxuICAgICAgICB7XG4gICAgICAgICAgICBhZGRUb0VsZW1lbnRBY3Rpb24oYWRkVG9FbGVtZW50KTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGZ1bmN0aW9uIGFkZFRvRWxlbWVudEFjdGlvbihhZGRUb0VsZW1lbnQpXG4gICAge1xuICAgICAgICBpZihhZGRGdW5jdGlvbk9uID09IGZhbHNlICYmIHJlbW92ZUZ1bmN0aW9uT24gPT0gZmFsc2UpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBsYXN0RGlzcGxheWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZGlzcGxheWVkPVwidHJ1ZVwiXScpO1xuICAgICAgICAgICAgaWYobGFzdERpc3BsYXllZClcbiAgICAgICAgICAgICAgICBsYXN0RGlzcGxheWVkLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1kaXNwbGF5ZWQnKTtcbiAgICAgICAgICAgIGFkZFRvRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZGlzcGxheWVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgIGdlbmVyYXRlRGlyZWN0b3J5RWxlbWVudChhZGRUb0VsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlRGlyZWN0b3J5RWxlbWVudChhZGRUb0VsZW1lbnQpXG4gICAge1xuICAgICAgICBsZXQgbWFpblNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1zZWN0aW9uLXdpbmRvdycpO1xuICAgICAgICBsZXQgc3ViU2VjdGlvbiA9IG1haW5TZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5zdWItc2VjdGlvbicpO1xuICAgICAgICBpZihzdWJTZWN0aW9uLmxhc3RDaGlsZClcbiAgICAgICAgICAgIHJlbW92ZUNoaWxkcmVuKHN1YlNlY3Rpb24pO1xuICAgICAgICBhZGRUb0VsZW1lbnQgPSBsb2dpY01vZHVsZS5maW5kQnlJRChnZXRFbGVtZW50Um91dGUoYWRkVG9FbGVtZW50KSk7XG4gICAgICAgIG1haW5TZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXNlY3Rpb24taGVhZGluZycpLnRleHRDb250ZW50ID0gYWRkVG9FbGVtZW50LnRpdGxlO1xuICAgICAgICBmb3IobGV0IGVsZW1lbnQgb2YgYWRkVG9FbGVtZW50LmNvbnRlbnRzKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZihlbGVtZW50LmNvbnN0cnVjdG9yLm5hbWUgPT0gJ1Byb2plY3QnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gICAgICAgICAgICAgICAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZ2dsZS1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgc3ViSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAgXG4gICAgICAgICAgICAgICAgICAgIHN1YkhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnc3ViLWhlYWRpbmcnKSAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9nZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRvZ2dsZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVJbWcuY2xhc3NMaXN0LmFkZCgndG9nZ2xlLWltZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZUltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHRvZ2dsZUljb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZUltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsJ2ljb24gb2YgYSB0b2dnbGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVCdXR0b25zLnB1c2godG9nZ2xlSW1nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVJbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHByb2plY3RUb2dnbGVzQWRkRXZlbnRMaXN0ZW5lcnModG9nZ2xlSW1nKX0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlLmFwcGVuZENoaWxkKHRvZ2dsZUltZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gZWxlbWVudC50aXRsZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViSGVhZGluZy5hcHBlbmRDaGlsZCh0b2dnbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ViSGVhZGluZy5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvZG9MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9MaXN0LmNsYXNzTGlzdC5hZGQoJ3RvZG8tbGlzdCcpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvTGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZ2dsYWJsZScpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IHRvZG8gb2YgZWxlbWVudC5jb250ZW50cylcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1RvZG8gPSBjcmVhdGVUb2RvKHRvZG8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQobmV3VG9kbyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHN1YkhlYWRpbmcpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHRvZG9MaXN0KTtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWItc2VjdGlvbicpLmFwcGVuZENoaWxkKHByb2plY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihlbGVtZW50LmNvbnN0cnVjdG9yLm5hbWUgPT0gJ0NhdGVnb3J5JylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsZXQgc3ViSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHN1YkhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnc3ViLWhlYWRpbmcnKVxuICAgICAgICAgICAgICAgIHN1YkhlYWRpbmcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaWQgPSBlbGVtZW50LmlkO1xuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZURpcmVjdG9yeUVsZW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke2lkfVwiYCkpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnaGVhZGluZycpO1xuICAgICAgICAgICAgICAgICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gZWxlbWVudC50aXRsZTtcblxuICAgICAgICAgICAgICAgICAgICBzdWJIZWFkaW5nLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWItc2VjdGlvbicpLmFwcGVuZENoaWxkKHN1YkhlYWRpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsZXQgdG9kbyA9IGNyZWF0ZVRvZG8oZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgc3ViU2VjdGlvbi5hcHBlbmRDaGlsZCh0b2RvKTtcbiAgICAgICAgICAgICAgICB0b2RvLnF1ZXJ5U2VsZWN0b3IoJy5kZGF0ZS1pbnB1dCcpLnZhbHVlID0gZWxlbWVudC5kdWVkYXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBsZXQgYWRkRnVuY3Rpb25CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWZ1bmN0aW9uJyk7XG4gICAgYWRkRnVuY3Rpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgIHtcbiAgICAgICAgYWRkRnVuY3Rpb24oYWRkVG9FbGVtZW50cyk7XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gYWRkRnVuY3Rpb24oYWRkVG9FbGVtZW50cylcbiAgICB7XG4gICAgICAgIGlmKGFkZEZ1bmN0aW9uT24gPT0gZmFsc2UpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHJlbW92ZUZ1bmN0aW9uT24gPT0gdHJ1ZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0dXJuT2ZmUmVtb3ZlRnVuY3Rpb24ocmVtb3ZlRWxlbWVudHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWRkRnVuY3Rpb25PbiA9IHRydWU7XG4gICAgICAgICAgICBhZGRUb0VsZW1lbnRzLmZvckVhY2goIChhZGRUb0VsZW1lbnQpID0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYWRkVG9FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNhdGVnb3J5LXRpdGxlJykuY2xhc3NMaXN0LmFkZCgnZ3JlZW4tdGV4dC1lbGVtZW50Jyk7XG5cbiAgICAgICAgICAgICAgICBhZGRUb0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGFkZEZ1bmN0aW9uT24gPT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlkID0gYWRkVG9FbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJvdXRlID0gZ2V0RWxlbWVudFJvdXRlKGFkZFRvRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGFyZW50ID0gbG9naWNNb2R1bGUuZmluZEJ5SUQocm91dGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1lbnUgPSBnZW5lcmF0ZUVsZW1lbnRNZW51KHBhcmVudCwgYWRkVG9FbGVtZW50LCByb3V0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3B0aW9ucyA9IG1lbnUucXVlcnlTZWxlY3RvckFsbCgnLnNlbS1vcHRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR1cm5PZmZBZGRGdW5jdGlvbihhZGRUb0VsZW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgXG4gICAgICAgICAgICB0dXJuT2ZmQWRkRnVuY3Rpb24oYWRkVG9FbGVtZW50cyk7XG5cbiAgICB9XG4gICAgZnVuY3Rpb24gdHVybk9mZkFkZEZ1bmN0aW9uKGFkZFRvRWxlbWVudHMpXG4gICAge1xuICAgICAgICBhZGRGdW5jdGlvbk9uID0gZmFsc2U7XG4gICAgICAgIGFkZFRvRWxlbWVudHMuZm9yRWFjaCggYWRkVG9FbGVtZW50ID0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGFkZFRvRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jYXRlZ29yeS10aXRsZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2dyZWVuLXRleHQtZWxlbWVudCcpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0U2Vjb25kRGlzcGxheSgpXG4gICAge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Vjb25kLWRpc3BsYXknKS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlRWxlbWVudE1lbnUocGFyZW50LCBjb250YWluZXIsIHJvdXRlKVxuICAgIHtcbiAgICAgICAgc2V0U2Vjb25kRGlzcGxheSgpO1xuICAgICAgICBsZXQgb3B0aW9uO1xuICAgICAgICBsZXQgY2FuQ29udGVudCA9IHBhcmVudC5jYW5Db250ZW50O1xuICAgICAgICBsZXQgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3QtZWxlbWVudC1tZW51Jyk7XG4gICAgICAgIG1lbnUuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICBmb3IobGV0IGNvbnRlbnQgb2YgY2FuQ29udGVudClcbiAgICAgICAge1xuICAgICAgICAgICAgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBvcHRpb24uY2xhc3NMaXN0LmFkZCgnc2VtLW9wdGlvbicpO1xuICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICAgICAgICAgIG9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbWVudS5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgICAgICAgICAgbGV0IGNyZWF0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgY3JlYXRlQnV0dG9uLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdkaXNwbGF5Jyk7XG4gICAgICAgICAgICAgICAgaWYoY29udGVudCA9PSAnY2F0ZWdvcnknIHx8IGNvbnRlbnQgPT0gJ3Byb2plY3QnKVxuICAgICAgICAgICAgICAgIHsgICBcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRpdGxlSW5wdXRNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNldC1jYXRlZ29yeS1wcm9qZWN0LXRpdGxlJyk7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlSW5wdXRNZW51LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdkaXNwbGF5Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNsb3NlU0RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZUlucHV0TWVudS5xdWVyeVNlbGVjdG9yKCcuc2V0LWMtcC1pbnB1dCcpLnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZUlucHV0TWVudS5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVCdXR0b25BY3Rpb24oY3JlYXRlQnV0dG9uLCBwYXJlbnQsIGNvbnRlbnQsIGNvbnRhaW5lciwgcm91dGUpO1xuICAgICAgICAgICAgICAgICAgICB9LCB7b25jZTogdHJ1ZX0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Vjb25kLWRpc3BsYXknKS5xdWVyeVNlbGVjdG9yKCcudG9kbycpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdkaXNwbGF5Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNsb3NlU0RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckFkZFRvZG8odG9kbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvLnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZUJ1dHRvbkFjdGlvbihjcmVhdGVCdXR0b24sIHBhcmVudCwgY29udGVudCwgY29udGFpbmVyLCByb3V0ZSwgZ2V0VG9kb1ZhbHVlcyh0b2RvKSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIHtvbmNlOiB0cnVlfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG1lbnUuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBjbG9zZVNEQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICAgICAge1xuICAgICAgICAgICAgcmVtb3ZlQ2hpbGRyZW4obWVudSk7XG4gICAgICAgIH0sIHsgb25jZTogdHJ1ZSB9KTtcbiAgICAgICAgcmV0dXJuIG1lbnU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlbW92ZUNoaWxkcmVuKHBhcmVudClcbiAgICB7XG4gICAgICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkgXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQubGFzdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZURpcmVjdG9yeShkaXJlY3RvcnkpXG4gICAge1xuICAgICAgICBsZXQgZGlyZWN0b3J5Q29udGVudCA9IGRpcmVjdG9yeS5jb250ZW50cztcblxuICAgICAgICAgICAgZm9yKGxldCBlbGVtZW50IG9mIGRpcmVjdG9yeUNvbnRlbnQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYoZWxlbWVudC5jYW5Db250ZW50KVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoZWxlbWVudC5jYW5Db250ZW50WzBdID09ICdwcm9qZWN0JylcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlQ2F0ZWdvcnkoZGlyZWN0b3J5LCBlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKGVsZW1lbnQuY2FuQ29udGVudFswXSA9PSAndG9kbycpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZVByb2plY3QoZGlyZWN0b3J5LCBlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZURpcmVjdG9yeShlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVQcm9qZWN0RWxlbWVudChkaXJlY3RvcnksIGVsZW1lbnQpXG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudENvbnRhaW5lcihkaXJlY3RvcnksIGVsZW1lbnQpXG4gICAge1xuICAgICAgICBsZXQgZWxlbWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbGVtZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9nZ2xlLWNvbnRhaW5lcicpO1xuICAgICAgICBlbGVtZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGVsZW1lbnQuaWQpO1xuICAgICAgICBlbGVtZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1hZHRvJywgJ3RydWUnKTtcblxuICAgICAgICAgICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY2F0ZWdvcnktaGVhZGVyJyk7XG5cbiAgICAgICAgICAgICAgICBsZXQgdG9nZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZScpXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvZ2dsZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVJbWcuY2xhc3NMaXN0LmFkZCgndG9nZ2xlLWltZycpO1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCB0b2dnbGVJY29uKTtcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlSW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2ljb24gb2YgYSB0b2dnbGUnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQnV0dG9ucy5wdXNoKHRvZ2dsZUltZyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtwcm9qZWN0VG9nZ2xlc0FkZEV2ZW50TGlzdGVuZXJzKHRvZ2dsZUltZyl9KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnktcHJvamVjdC1pY29uJyk7XG5cbiAgICAgICAgICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNhdGVnb3J5LXRpdGxlJyk7XG4gICAgICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBlbGVtZW50LnRpdGxlO1xuXG4gICAgICAgICAgICBsZXQgZWxlbWVudENvbnRhaW5lckNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGVsZW1lbnRDb250YWluZXJDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2VsZW1lbnQtY29udGVudCcpO1xuICAgICAgICAgICAgZWxlbWVudENvbnRhaW5lckNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICd0b2dnbGFibGUnKTtcblxuICAgICAgICAgICAgdG9nZ2xlLmFwcGVuZENoaWxkKHRvZ2dsZUltZyk7XG4gICAgICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodG9nZ2xlKTtcbiAgICAgICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChpY29uKTtcbiAgICAgICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgICAgICBlbGVtZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgICAgICAgICBlbGVtZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnRDb250YWluZXJDb250ZW50KTtcblxuICAgICAgICBsZXQgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke2RpcmVjdG9yeS5pZH1cIl1gKS5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudC1jb250ZW50Jyk7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50Q29udGFpbmVyKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBlbGVtZW50Q29udGFpbmVyO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVDYXRlZ29yeShkaXJlY3RvcnksIGVsZW1lbnQpXG4gICAge1xuICAgICAgICBsZXQgY2F0ZWdvcnkgPSBjcmVhdGVFbGVtZW50Q29udGFpbmVyKGRpcmVjdG9yeSwgZWxlbWVudCk7XG4gICAgICAgIGNhdGVnb3J5LmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5Jyk7XG4gICAgICAgIGNhdGVnb3J5LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeS1wcm9qZWN0LWljb24nKS50ZXh0Q29udGVudCA9ICdDJztcbiAgICAgICAgcmV0dXJuIGNhdGVnb3J5O1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KGRpcmVjdG9yeSwgZWxlbWVudClcbiAgICB7XG4gICAgICAgIGxldCBwcm9qZWN0ID0gY3JlYXRlRWxlbWVudENvbnRhaW5lcihkaXJlY3RvcnksIGVsZW1lbnQpO1xuICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAgICAgcHJvamVjdC5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcnktcHJvamVjdC1pY29uJykudGV4dENvbnRlbnQgPSAnUCc7XG4gICAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0RWxlbWVudChkaXJlY3RvcnksIGVsZW1lbnQpXG4gICAge1xuICAgICAgICBsZXQgcHJvamVjdEVsZW1lbnRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdEVsZW1lbnRIZWFkZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jYXRlZ29yeS1oZWFkZXInKTtcbiAgICAgICAgcHJvamVjdEVsZW1lbnRIZWFkZXIuc2V0QXR0cmlidXRlKCdkYXRhLWVsZW1lbnQnLCAndG9kbycpO1xuICAgICAgICBwcm9qZWN0RWxlbWVudEhlYWRlci5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBlbGVtZW50LmlkKTtcblxuICAgICAgICAgICAgbGV0IHByb2plY3RFbGVtZW50SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvamVjdEVsZW1lbnRJY29uLmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5LXByb2plY3QtaWNvbicpO1xuICAgICAgICAgICAgcHJvamVjdEVsZW1lbnRJY29uLnRleHRDb250ZW50ID0gJ1QnO1xuXG4gICAgICAgICAgICBsZXQgcHJvamVjdEVsZW1lbnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvamVjdEVsZW1lbnRUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNhdGVnb3J5LXRpdGxlJyk7XG4gICAgICAgICAgICBwcm9qZWN0RWxlbWVudFRpdGxlLnRleHRDb250ZW50ID0gZWxlbWVudC50aXRsZTtcblxuICAgICAgICAgICAgcHJvamVjdEVsZW1lbnRIZWFkZXIuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnRJY29uKTtcbiAgICAgICAgICAgIHByb2plY3RFbGVtZW50SGVhZGVyLmFwcGVuZENoaWxkKHByb2plY3RFbGVtZW50VGl0bGUpO1xuICAgICAgICBcbiAgICAgICAgbGV0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtkaXJlY3RvcnkuaWR9XCJdYCkucXVlcnlTZWxlY3RvcignLmVsZW1lbnQtY29udGVudCcpO1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnRIZWFkZXIpO1xuXG4gICAgICAgIHJldHVybiBwcm9qZWN0RWxlbWVudEhlYWRlcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhckFkZFRvZG8odG9kbylcbiAgICB7XG4gICAgICAgIHRvZG8ucXVlcnlTZWxlY3RvcignLnRpdGxlLWlucHV0JykudmFsdWUgPSAnJztcbiAgICAgICAgdG9kby5xdWVyeVNlbGVjdG9yKCcuZGRhdGUtaW5wdXQnKS52YWx1ZSA9ICcnO1xuICAgICAgICB0b2RvLnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eS12YWx1ZScpLnZhbHVlID0gJ25vcm1hbCc7XG4gICAgICAgIHRvZG8ucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uLWlucHV0JykudmFsdWUgPSAnJztcbiAgICAgICAgbGV0IGNoZWNrbGlzdCA9IHRvZG8ucXVlcnlTZWxlY3RvcignLmNoZWNrbGlzdCcpO1xuICAgICAgICBsZXQgY2hla2JveGVzID0gY2hlY2tsaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveC1jb250YWluZXInKTtcbiAgICAgICAgZm9yKGxldCBjaGVja2JveCBvZiBjaGVrYm94ZXMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNoZWNrbGlzdC5yZW1vdmVDaGlsZChjaGVja2JveCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlVG9kbyh0b2RvVmFsdWVzKVxuICAgIHtcbiAgICAgICAgbGV0IHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKCd0b2RvJyk7XG4gICAgICAgIFxuICAgICAgICAgICAgbGV0IHRvZG9NYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0b2RvTWFpbi5jbGFzc0xpc3QuYWRkKCd0b2RvLW1haW4nKTtcblxuICAgICAgICAgICAgICAgIGxldCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LmFkZCgndG9kby10aXRsZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b2RvVGl0bGVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgndG9kby10aXRsZS1jb250ZW50Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZUNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICd0ZXh0LWNvbnRlbnQnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlQ29udGVudC50ZXh0Q29udGVudCA9IHRvZG9WYWx1ZXMudGl0bGU7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvZG9UaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgndGl0bGUtaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnMjAnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBub25lJyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7ICAgXG4gICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9WYWx1ZXMudGl0bGUgPSB0b2RvVGl0bGVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHRpdGxlRWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZUVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgndGV4dC1lZGl0LWJ1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZUVkaXRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdyZWFkLW1vZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGl0bGVFZGl0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVFZGl0SWNvbi5jbGFzc0xpc3QuYWRkKCdlZGl0LWljb24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlRWRpdEljb24uc2V0QXR0cmlidXRlKCdzcmMnLCBlZGl0SWNvbjIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVFZGl0SWNvbi5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdlZGl0IGluZGljYXRvciBpY29uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgZWRpdEljb25zLnB1c2godGl0bGVFZGl0QnV0dG9uKTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBlZGl0SWNvbkFkZEV2ZW50TGlzdGVuZXJzKHRpdGxlRWRpdEJ1dHRvbil9KTtcblxuICAgICAgICAgICAgICAgICAgICB0aXRsZUVkaXRCdXR0b24uYXBwZW5kQ2hpbGQodGl0bGVFZGl0SWNvbik7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZS5hcHBlbmRDaGlsZCh0b2RvVGl0bGVDb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlLmFwcGVuZENoaWxkKHRvZG9UaXRsZUlucHV0KTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlLmFwcGVuZENoaWxkKHRpdGxlRWRpdEJ1dHRvbik7XG5cblxuICAgICAgICAgICAgICAgIGxldCB0b2RvRHVlZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHRvZG9EdWVkYXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZHVlZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b2RvRHVlZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0R1ZWRhdGVMYWJlbC5jbGFzc0xpc3QuYWRkKCd0b2RvLWxhYmVsJyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EdWVkYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZHVlRGF0ZScpXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EdWVkYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIGRhdGUnO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b2RvRHVlZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0R1ZWRhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdkZGF0ZS1pbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvRHVlZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJylcbiAgICAgICAgICAgICAgICAgICAgdG9kb0R1ZWRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2R1ZS1kYXRlJylcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGVWYWx1ZSA9IHRvZG9WYWx1ZXMuZHVlZGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0R1ZWRhdGVJbnB1dC52YWx1ZSA9IGRhdGVWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0R1ZWRhdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvVmFsdWVzLmR1ZWRhdGUgPSB0b2RvRHVlZGF0ZUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvRHVlZGF0ZS5hcHBlbmRDaGlsZCh0b2RvRHVlZGF0ZUxhYmVsKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0R1ZWRhdGUuYXBwZW5kQ2hpbGQodG9kb0R1ZWRhdGVJbnB1dCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCB0b2RvUHJpb3JpdHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHlDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1wcmlvcml0eS1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgY2hhbmdlUHJpb3JpdHlTdWJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZVByaW9yaXR5U3Vicy5jbGFzc0xpc3QuYWRkKCdjaGFuZ2UtcHJpb3JpdHknLCAncm91bmQtYnV0dG9uJylcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlUHJpb3JpdHlTdWJzLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VicycpO1xuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eVNwaW5uZXJzLnB1c2goY2hhbmdlUHJpb3JpdHlTdWJzKTtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlUHJpb3JpdHlTdWJzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5U3Bpbm5lcnNBZGRFdmVudExpc3RlbmVycyhjaGFuZ2VQcmlvcml0eVN1YnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ZhbHVlcy5wcmlvcml0eSA9IGNoYW5nZVByaW9yaXR5U3Vicy5jbG9zZXN0KCcudG9kby1wcmlvcml0eS1jb250YWluZXInKS5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHktdmFsdWUnKS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndG9kby1wcmlvcml0eScpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b2RvUHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5TGFiZWwuY2xhc3NMaXN0LmFkZCgndG9kby1sYWJlbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHknO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9kb1ByaW9yaXR5VmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eVZhbHVlLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LXZhbHVlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHlWYWx1ZS50ZXh0Q29udGVudCA9IHRvZG9WYWx1ZXMucHJpb3JpdHk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBsZXQgY2hhbmdlUHJpb3JpdHlBZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlUHJpb3JpdHlBZGQuY2xhc3NMaXN0LmFkZCgnY2hhbmdlLXByaW9yaXR5JywgJ3JvdW5kLWJ1dHRvbicpXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZVByaW9yaXR5QWRkLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkJyk7XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5U3Bpbm5lcnMucHVzaChjaGFuZ2VQcmlvcml0eUFkZCk7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZVByaW9yaXR5QWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5U3Bpbm5lcnNBZGRFdmVudExpc3RlbmVycyhjaGFuZ2VQcmlvcml0eUFkZClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9WYWx1ZXMucHJpb3JpdHkgPSBjaGFuZ2VQcmlvcml0eUFkZC5jbG9zZXN0KCcudG9kby1wcmlvcml0eS1jb250YWluZXInKS5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHktdmFsdWUnKS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5LmFwcGVuZENoaWxkKHRvZG9Qcmlvcml0eUxhYmVsKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5LmFwcGVuZENoaWxkKHRvZG9Qcmlvcml0eVZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoYW5nZVByaW9yaXR5U3Vicyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvUHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hhbmdlUHJpb3JpdHlBZGQpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBjaGVja0RvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjaGVja0RvbmUuY2xhc3NMaXN0LmFkZCgnY2hlY2stZG9uZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGVja0RvbmVCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tEb25lQnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NoZWNrLWRvbmUtYnV0dG9uLWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hlY2tEb25lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja0RvbmVCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2hlY2stZG9uZS1idXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrRG9uZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW5DQicpXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluQ2hlY2tCdXR0b25zLnB1c2goY2hlY2tEb25lQnV0dG9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrRG9uZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgbWFpbkNCQWRkRXZlbnRMaXN0ZW5lcnMoY2hlY2tEb25lQnV0dG9uKX0pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tEb25lQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrRG9uZUJ1dHRvbik7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrRG9uZS5hcHBlbmRDaGlsZChjaGVja0RvbmVCdXR0b25Db250YWluZXIpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRvZG9NYWluLmFwcGVuZENoaWxkKHRvZG9UaXRsZSk7XG4gICAgICAgICAgICAgICAgdG9kb01haW4uYXBwZW5kQ2hpbGQodG9kb0R1ZWRhdGUpO1xuICAgICAgICAgICAgICAgIHRvZG9NYWluLmFwcGVuZENoaWxkKHRvZG9Qcmlvcml0eUNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgdG9kb01haW4uYXBwZW5kQ2hpbGQoY2hlY2tEb25lKTtcbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgbGV0IHRvZG9DaGVja0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRvZG9DaGVja0xpc3QuY2xhc3NMaXN0LmFkZCgndG9kby1jaGVja2xpc3QnKTtcbiAgICAgICAgICAgIHRvZG9DaGVja0xpc3Quc2V0QXR0cmlidXRlKCdpZCcsICd0b2dnbGUtY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICBsZXQgY2hlY2tsaXN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY2hlY2tsaXN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2NoZWNrbGlzdC1oZWFkZXInKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgY2hlY2tsaXN0VG9nZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdFRvZ2dsZS5jbGFzc0xpc3QuYWRkKCd0b2dnbGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoZWNrbGlzdFRvZ2dsZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0VG9nZ2xlSW1nLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZS1pbWcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdFRvZ2dsZUltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHRvZ2dsZUljb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0VG9nZ2xlSW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2ljb24gb2YgYSB0b2dnbGUnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQnV0dG9ucy5wdXNoKGNoZWNrbGlzdFRvZ2dsZUltZyk7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdFRvZ2dsZUltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtwcm9qZWN0VG9nZ2xlc0FkZEV2ZW50TGlzdGVuZXJzKGNoZWNrbGlzdFRvZ2dsZUltZyl9KTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgY2hlY2tsaXN0SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3RIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2NoZWNrbGlzdC1oZWFkaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdEhlYWRpbmcudGV4dENvbnRlbnQgPSAnQ2hlY2tsaXN0JztcblxuICAgICAgICAgICAgICAgIGxldCBjaGVja2xpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjaGVja2xpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2hlY2tsaXN0LWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgIGNoZWNrbGlzdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZ2dsYWJsZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGVja2xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0LmNsYXNzTGlzdC5hZGQoJ2NoZWNrbGlzdCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGNoZWNrYm94VmFsdWUgb2YgdG9kb1ZhbHVlcy5jaGVja2JveGVzKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGVja2JveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrYm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94LWNvbnRhaW5lcicpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoZWNrYm94RG9uZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2JveERvbmVCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2hlY2stZG9uZS1idXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tCdXR0b25zLnB1c2goY2hlY2tib3hEb25lQnV0dG9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hEb25lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBjaGVja0J1dHRvbkFkZEV2ZW50TGlzdGVuZXJzKGNoZWNrYm94RG9uZUJ1dHRvbil9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hlY2tib3hMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2JveExhYmVsLmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94LWxhYmVsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrYm94TGFiZWwudGV4dENvbnRlbnQgPSBjaGVja2JveFZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94RG9uZUJ1dHRvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94TGFiZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3QuYXBwZW5kQ2hpbGQoY2hlY2tib3hDb250YWluZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBjcmVhdGVDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVDaGVja2JveC5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtY2hlY2tib3gnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoZWNrYm94VGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2JveFRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gtdGl0bGUtaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrYm94VGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnbWlubGVuZ3RoJywgJzEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrYm94VGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ2NoZWNrYm94IHRpdGxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2JveFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnMzAnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrYm94VGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NoZWNrbGlzdC1jcmVhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrYm94VGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWRkQ2hlY2tib3hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZENoZWNrYm94QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZC1jaGVja2JveCcsICdyb3VuZC1idXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZENoZWNrYm94QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRDaGVja2JveEJ1dHRvbnMucHVzaChhZGRDaGVja2JveEJ1dHRvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRDaGVja2JveEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9WYWx1ZXMuY2hlY2tib3hlcy5wdXNoKGFkZENoZWNrYm94QnV0dG9uLmNsb3Nlc3QoJy5jcmVhdGUtY2hlY2tib3gnKS5xdWVyeVNlbGVjdG9yKCcuY2hlY2tib3gtdGl0bGUtaW5wdXQnKS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkQ2hlY2tib3hCdXR0b25BY3Rpb24oYWRkQ2hlY2tib3hCdXR0b24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVDaGVja2JveC5hcHBlbmRDaGlsZChjaGVja2JveFRpdGxlSW5wdXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlQ2hlY2tib3guYXBwZW5kQ2hpbGQoYWRkQ2hlY2tib3hCdXR0b24pO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0VG9nZ2xlLmFwcGVuZENoaWxkKGNoZWNrbGlzdFRvZ2dsZUltZyk7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdEhlYWRlci5hcHBlbmRDaGlsZChjaGVja2xpc3RUb2dnbGUpO1xuICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3RIZWFkZXIuYXBwZW5kQ2hpbGQoY2hlY2tsaXN0SGVhZGluZyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9DaGVja0xpc3QuYXBwZW5kQ2hpbGQoY2hlY2tsaXN0SGVhZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrbGlzdClcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUNoZWNrYm94KVxuICAgICAgICAgICAgICAgICAgICB0b2RvQ2hlY2tMaXN0LmFwcGVuZENoaWxkKGNoZWNrbGlzdENvbnRhaW5lcik7XG5cblxuICAgICAgICAgICAgbGV0IHRvZG9EZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdG9kb0Rlc2NyaXB0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGVzY3JpcHRpb24tY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICBsZXQgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdG9kb0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgICAgICB0b2RvRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsICd0ZXh0LWNvbnRlbnQnKTtcbiAgICAgICAgICAgICAgICB0b2RvRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0b2RvVmFsdWVzLmRlc2NyaXB0aW9uO1xuXG4gICAgICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24taW5wdXQnLCAndG9kby1kZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgJzIwMCcpO1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBub25lJyk7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpOyAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCd2YWxpZGF0ZS1lbXB0eScsICdmYWxzZScpOyAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9WYWx1ZXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbklucHV0LnZhbHVlO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uRWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uRWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0ZXh0LWVkaXQtYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25FZGl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAncmVhZC1tb2RlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uRWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25FZGl0SWNvbi5jbGFzc0xpc3QuYWRkKCdlZGl0LWljb24nKTtcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25FZGl0SWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsIGVkaXRJY29uMik7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uRWRpdEljb24uc2V0QXR0cmlidXRlKCdhbHQnLCAnZWRpdCBpbmRpY2F0b3IgaWNvbicpO1xuXG4gICAgICAgICAgICAgICAgZWRpdEljb25zLnB1c2goZGVzY3JpcHRpb25FZGl0QnV0dG9uKTtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbkVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IGVkaXRJY29uQWRkRXZlbnRMaXN0ZW5lcnMoZGVzY3JpcHRpb25FZGl0QnV0dG9uKX0pO1xuXG5cbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbkVkaXRCdXR0b24uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25FZGl0SWNvbik7XG4gICAgICAgICAgICAgICAgdG9kb0Rlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9EZXNjcmlwdGlvbik7ICAgIFxuICAgICAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTsgICAgXG4gICAgICAgICAgICAgICAgdG9kb0Rlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRWRpdEJ1dHRvbik7ICAgIFxuXG5cbiAgICAgICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQodG9kb01haW4pO1xuICAgICAgICAgICAgdG9kby5hcHBlbmRDaGlsZCh0b2RvQ2hlY2tMaXN0KTtcbiAgICAgICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQodG9kb0Rlc2NyaXB0aW9uQ29udGFpbmVyKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0b2RvO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRUb2RvVmFsdWVzKHRvZG8pXG4gICAge1xuICAgICAgICBsZXQgdGl0bGUgPSB0b2RvLnF1ZXJ5U2VsZWN0b3IoJy50aXRsZS1pbnB1dCcpLnZhbHVlO1xuICAgICAgICBsZXQgZHVlRGF0ZSA9IHRvZG8ucXVlcnlTZWxlY3RvcignLmRkYXRlLWlucHV0JykudmFsdWU7XG4gICAgICAgIGxldCBwcmlvcml0eSA9IHRvZG8ucXVlcnlTZWxlY3RvcignLnByaW9yaXR5LXZhbHVlJykudGV4dENvbnRlbnQ7XG5cbiAgICAgICAgbGV0IGNoZWNrYm94ZXNFbGVtZW50cyA9IHRvZG8ucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrYm94LWxhYmVsJyk7XG4gICAgICAgIGxldCBjaGVja2JveGVzID0gW107XG4gICAgICAgIGZvcihsZXQgY2hlY2tib3ggb2YgY2hlY2tib3hlc0VsZW1lbnRzKVxuICAgICAgICB7XG4gICAgICAgICAgICBjaGVja2JveGVzLnB1c2goY2hlY2tib3gudGV4dENvbnRlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gdG9kby5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb24taW5wdXQnKS52YWx1ZTtcbiAgICAgICAgbGV0IGlzRG9uZSA9IGZhbHNlO1xuICAgICAgICBpZih0b2RvLnF1ZXJ5U2VsZWN0b3IoJ2NoZWNrLWRvbmUtYnV0dG9uJykgJiYgdG9kby5xdWVyeVNlbGVjdG9yKCdjaGVjay1kb25lLWJ1dHRvbicpLmNsYXNzTGlzdC5jb250YWlucygnY2hlY2tlZCcpKVxuICAgICAgICAgICAgaXNEb25lID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICBkdWVEYXRlLFxuICAgICAgICAgICAgcHJpb3JpdHksXG4gICAgICAgICAgICBjaGVja2JveGVzLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBpc0RvbmVcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRFbGVtZW50Um91dGUoZWxlbWVudClcbiAgICB7XG4gICAgICAgIGxldCByb3V0ZSA9IFtdO1xuICAgICAgICBsZXQgaWQ7XG4gICAgICAgIGlmKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWVsZW1lbnQnKSA9PSAndG9kbycpXG4gICAgICAgICAgICBpZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGlkID0gZWxlbWVudC5jbG9zZXN0KCdbZGF0YS1hZHRvPVwidHJ1ZVwiXScpLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgICByb3V0ZS5wdXNoKCtpZCk7XG4gICAgICAgIHdoaWxlKGlkICE9IDApXG4gICAgICAgIHsgICBcbiAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQuY2xvc2VzdCgnW2RhdGEtYWR0bz1cInRydWVcIl0nKTtcbiAgICAgICAgICAgIGlkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgICAgICAgIHJvdXRlLnB1c2goK2lkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm91dGUucmV2ZXJzZSgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBCQ2dldElucHV0VmFsdWUoYnV0dG9uKVxuICAgIHtcbiAgICAgICAgbGV0IGlucHV0VG9WYWxpZGF0ZTtcbiAgICAgICAgaWYoYnV0dG9uLmNsb3Nlc3QoJy5zZWNvbmQtZGlzcGxheS1tZW51JykucXVlcnlTZWxlY3RvcignLnRvZG8nKS5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXNwbGF5JykgIT0gJ25vbmUnKVxuICAgICAgICAgICAgaW5wdXRUb1ZhbGlkYXRlID0gYnV0dG9uLmNsb3Nlc3QoJy5zZWNvbmQtZGlzcGxheS1tZW51JykucXVlcnlTZWxlY3RvcignLnRvZG8nKS5xdWVyeVNlbGVjdG9yKCcudGl0bGUtaW5wdXQnKTtcbiAgICAgICAgZWxzZSBcbiAgICAgICAgICAgIGlucHV0VG9WYWxpZGF0ZSA9IGJ1dHRvbi5jbG9zZXN0KCcuc2Vjb25kLWRpc3BsYXktbWVudScpLnF1ZXJ5U2VsZWN0b3IoJy5zZXQtY2F0ZWdvcnktcHJvamVjdC10aXRsZScpLnF1ZXJ5U2VsZWN0b3IoJy5zZXQtYy1wLWlucHV0Jyk7XG4gICAgICAgIGlmKGlucHV0VG9WYWxpZGF0ZS52YWxpZGl0eS52YWx1ZU1pc3NpbmcpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlucHV0VG9WYWxpZGF0ZS5zZXRDdXN0b21WYWxpZGl0eSgnTXVzdCBjb25zaXN0IGF0IGxlYXN0IG9uZSBjaGFyYWN0ZXInKTtcbiAgICAgICAgICAgIGlucHV0VG9WYWxpZGF0ZS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnB1dFRvVmFsaWRhdGUudmFsdWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbkFjdGlvbihidXR0b24sIHBhcmVudCwgZWxlbWVudCwgY29udGFpbmVyLCByb3V0ZSwgdmFsdWVzKVxuICAgIHtcbiAgICAgICAgbGV0IGlucHV0VmFsdWUgPSBCQ2dldElucHV0VmFsdWUoYnV0dG9uKTtcbiAgICAgICAgbGV0IGxvZ2ljRWxlbWVudDtcbiAgICAgICAgbGV0IG5ld0VsZW1lbnQ7XG4gICAgICAgIGlmKGlucHV0VmFsdWUgIT0gJycpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKGVsZW1lbnQgPT0gJ2NhdGVnb3J5JylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsb2dpY0VsZW1lbnQgPSBsb2dpY01vZHVsZS5jcmVhdGVDYXRlZ29yeShpbnB1dFZhbHVlLCByb3V0ZSk7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZUNhdGVnb3J5KHBhcmVudCwgbG9naWNFbGVtZW50KTtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBhZGRUb0VsZW1lbnRBY3Rpb24obmV3RWxlbWVudCl9KTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihlbGVtZW50ID09ICdwcm9qZWN0JylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsb2dpY0VsZW1lbnQgPSBsb2dpY01vZHVsZS5jcmVhdGVQcm9qZWN0KGlucHV0VmFsdWUsIHJvdXRlKTtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlUHJvamVjdChwYXJlbnQsIGxvZ2ljRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgYWRkVG9FbGVtZW50QWN0aW9uKG5ld0VsZW1lbnQpfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxvZ2ljRWxlbWVudCA9IGxvZ2ljTW9kdWxlLmNyZWF0ZVRvZG8oaW5wdXRWYWx1ZSwgcm91dGUsIHZhbHVlcy5kdWVEYXRlLCB2YWx1ZXMucHJpb3JpdHksIHZhbHVlcy5jaGVja2JveGVzLCB2YWx1ZXMuZGVzY3JpcHRpb24sIHZhbHVlcy5pc0RvbmUpO1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVQcm9qZWN0RWxlbWVudChwYXJlbnQsIGxvZ2ljRWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhZGRUb0VsZW1lbnRzLnB1c2gobmV3RWxlbWVudCk7XG4gICAgICAgICAgICByZW1vdmVFbGVtZW50cy5wdXNoKG5ld0VsZW1lbnQpO1xuICAgICAgICAgICAgaWYoY29udGFpbmVyLmdldEF0dHJpYnV0ZSgnZGF0YS1kaXNwbGF5ZWQnKSA9PSAndHJ1ZScpXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVEaXJlY3RvcnlFbGVtZW50KGNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBjbG9zZVNEQnV0dG9uLmNsaWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBcbiAgICAgICAge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjcmVhdGVCdXR0b25BY3Rpb24oYnV0dG9uLCBwYXJlbnQsIGVsZW1lbnQsIGNvbnRhaW5lciwgcm91dGUsIHZhbHVlcyk7XG4gICAgICAgICAgICB9LCB7b25jZTogdHJ1ZX0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGxldCByZW1vdmVGdW5jdGlvbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZW1vdmUtZnVuY3Rpb24nKTtcbiAgICBsZXQgcmVtb3ZlRWxlbWVudHMgPSBhZGRUb0VsZW1lbnRzLnNsaWNlKDEsIGFkZFRvRWxlbWVudHMubGVuZ3RoKS5jb25jYXQoQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1lbGVtZW50PVwidG9kb1wiXScpKSk7XG4gICAgcmVtb3ZlRnVuY3Rpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgIHtcbiAgICAgICAgcmVtb3ZlRnVuY3Rpb24ocmVtb3ZlRWxlbWVudHMpO1xuICAgIH0pO1xuICAgIGZ1bmN0aW9uIHJlbW92ZUZ1bmN0aW9uKHJlbW92ZUVsZW1lbnRzKVxuICAgIHtcbiAgICAgICAgaWYocmVtb3ZlRnVuY3Rpb25PbiA9PSBmYWxzZSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYoYWRkRnVuY3Rpb25PbiA9PSB0cnVlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR1cm5PZmZBZGRGdW5jdGlvbihhZGRUb0VsZW1lbnRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbW92ZUZ1bmN0aW9uT24gPSB0cnVlO1xuICAgICAgICAgICAgcmVtb3ZlRWxlbWVudHMuZm9yRWFjaCggKHJlbW92ZUVsZW1lbnQpID0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jYXRlZ29yeS10aXRsZScpLmNsYXNzTGlzdC5hZGQoJ3JlZC10ZXh0LWVsZW1lbnQnKTtcblxuICAgICAgICAgICAgICAgIHJlbW92ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHJlbW92ZUZ1bmN0aW9uT24gPT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gcmVtb3ZlRWxlbWVudHMuaW5kZXhPZihyZW1vdmVFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUVsZW1lbnRzID0gcmVtb3ZlRWxlbWVudHMuc2xpY2UoMCwgaW5kZXgpLmNvbmNhdChyZW1vdmVFbGVtZW50cy5zbGljZShpbmRleCsxLCByZW1vdmVFbGVtZW50Lmxlbmd0aCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVtb3ZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudCcpICE9ICd0b2RvJylcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9IGFkZFRvRWxlbWVudHMuaW5kZXhPZihyZW1vdmVFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb0VsZW1lbnRzID0gYWRkVG9FbGVtZW50cy5zbGljZSgwLCBpbmRleCkuY29uY2F0KGFkZFRvRWxlbWVudHMuc2xpY2UoaW5kZXgrMSwgYWRkVG9FbGVtZW50cy5sZW5ndGgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpZCA9IHJlbW92ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcm91dGUgPSBnZXRFbGVtZW50Um91dGUocmVtb3ZlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbG9naWNFbGVtZW50ID0gbG9naWNNb2R1bGUuZmluZEJ5SUQocm91dGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxvZ2ljUGFyZW50ID0gbG9naWNNb2R1bGUuZmluZEJ5SUQocm91dGUuc2xpY2UoMCwgcm91dGUubGVuZ3RoLTEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJlbnRDb250YWluZXIgPSByZW1vdmVFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2ljTW9kdWxlLnJlbW92ZUVsZW1lbnQobG9naWNQYXJlbnQsIGxvZ2ljRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0dXJuT2ZmUmVtb3ZlRnVuY3Rpb24ocmVtb3ZlRWxlbWVudHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVtb3ZlRWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWRpc3BsYXllZCcpID09ICd0cnVlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZURpcmVjdG9yeUVsZW1lbnQocmVtb3ZlRWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihyZW1vdmVFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWRpc3BsYXllZCcpID09ICd0cnVlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZURpcmVjdG9yeUVsZW1lbnQocmVtb3ZlRWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYocmVtb3ZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGlzcGxheWVkJykgPT0gJ3RydWUnKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdWJTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Yi1zZWN0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQ2hpbGRyZW4oc3ViU2VjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIuY2xhc3NMaXN0LmFkZCgnc3ViLXNlY3Rpb24tcGxhY2Vob2xkZXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlci50ZXh0Q29udGVudCA9ICdDbGljayBhbiBlbGVtZW50IGZyb20gWW91ciBkaXJlY3RvcnkgdG8gdmlldyBpdCBoZXJlJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJTZWN0aW9uLmFwcGVuZENoaWxkKHBsYWNlaG9sZGVyKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXNlY3Rpb24taGVhZGluZycpLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRDb250YWluZXIucmVtb3ZlQ2hpbGQocmVtb3ZlRWxlbWVudCk7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBcbiAgICAgICAgICAgIHR1cm5PZmZSZW1vdmVGdW5jdGlvbihyZW1vdmVFbGVtZW50cyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHR1cm5PZmZSZW1vdmVGdW5jdGlvbihyZW1vdmVFbGVtZW50cylcbiAgICB7XG4gICAgICAgIHJlbW92ZUZ1bmN0aW9uT24gPSBmYWxzZTtcbiAgICAgICAgcmVtb3ZlRWxlbWVudHMuZm9yRWFjaCggcmVtb3ZlRWxlbWVudCA9PlxuICAgICAgICB7XG4gICAgICAgICAgICByZW1vdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNhdGVnb3J5LXRpdGxlJykuY2xhc3NMaXN0LnJlbW92ZSgncmVkLXRleHQtZWxlbWVudCcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgIH1cbn1cbikoKTsiLCJleHBvcnQgbGV0IGxvZ2ljTW9kdWxlID1cbihmdW5jdGlvbigpXG57XG4gICAgbGV0IGlkc2V0ID0gLTE7XG5cbiAgICBjbGFzcyBFbGVtZW50XG4gICAge1xuICAgICAgICBjb25zdHJ1Y3Rvcih0aXRsZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICAgICAgdGhpcy5pZCA9ICsraWRzZXQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgY2xhc3MgVG9kbyBleHRlbmRzIEVsZW1lbnRcbiAgICB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkdWVkYXRlLCBwcmlvcml0eSwgY2hlY2tsaXN0LCBkZXNjcmlwdGlvbiwgZG9uZSA9IGZhbHNlKVxuICAgICAgICB7XG4gICAgICAgICAgICBzdXBlcih0aXRsZSk7XG4gICAgICAgICAgICB0aGlzLmR1ZWRhdGUgPSBkdWVkYXRlO1xuICAgICAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICAgICAgdGhpcy5jaGVja2JveGVzID0gY2hlY2tsaXN0O1xuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgdGhpcy5kb25lID0gZG9uZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjbGFzcyBQcm9qZWN0IGV4dGVuZHMgRWxlbWVudFxuICAgIHtcbiAgICAgICAgY29uc3RydWN0b3IodGl0bGUsIGNvbnRlbnRzID0gW10sIGNhbkNvbnRlbnQgPSBbJ3RvZG8nXSlcbiAgICAgICAge1xuICAgICAgICAgICAgc3VwZXIodGl0bGUpO1xuICAgICAgICAgICAgdGhpcy5jb250ZW50cyA9IGNvbnRlbnRzO1xuICAgICAgICAgICAgdGhpcy5jYW5Db250ZW50ID0gY2FuQ29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjbGFzcyBDYXRlZ29yeSBleHRlbmRzIEVsZW1lbnRcbiAgICB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBjb250ZW50cyA9IFtdLCBjYW5Db250ZW50ID0gWydwcm9qZWN0JywgJ2NhdGVnb3J5J10pXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN1cGVyKHRpdGxlKTtcbiAgICAgICAgICAgIHRoaXMuY29udGVudHMgPSBjb250ZW50cztcbiAgICAgICAgICAgIHRoaXMuY2FuQ29udGVudCA9IGNhbkNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgbGV0IHJvb3QgPSBuZXcgQ2F0ZWdvcnkoJ1lvdXIgZGlyZWN0b3J5Jyk7XG4gICAgXG4gICAgZnVuY3Rpb24gZmluZEJ5SUQoaWRSb3V0ZSlcbiAgICB7XG4gICAgICAgIGlmKGlkUm91dGUubGVuZ3RoID09IDApXG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgbGV0IGlkID0gaWRSb3V0ZVsxXTtcbiAgICAgICAgbGV0IHBhcmVudCA9IHJvb3Q7XG4gICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPCBpZFJvdXRlLmxlbmd0aDspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvcihsZXQgY2hpbGQgb2YgcGFyZW50LmNvbnRlbnRzKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKGNoaWxkLmlkID09IGlkKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50ID0gY2hpbGQ7XG4gICAgICAgICAgICAgICAgICAgIGlkID0gaWRSb3V0ZVsrK2ldXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoY2hpbGQsIGlkUm91dGUpXG4gICAge1xuICAgICAgICBsZXQgcGFyZW50ID0gZmluZEJ5SUQoaWRSb3V0ZSk7XG4gICAgICAgIHBhcmVudC5jb250ZW50cy5wdXNoKGNoaWxkKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gY3JlYXRlQ2F0ZWdvcnkodGl0bGUsIGlkUm91dGUpXG4gICAge1xuICAgICAgICBsZXQgY2F0ZWdvcnkgPSBuZXcgQ2F0ZWdvcnkodGl0bGUpO1xuICAgICAgICBjcmVhdGVFbGVtZW50KGNhdGVnb3J5LCBpZFJvdXRlKTtcbiAgICAgICAgcmV0dXJuIGNhdGVnb3J5O1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlLCBpZFJvdXRlKVxuICAgIHtcbiAgICAgICAgbGV0IHByb2plY3QgPSBuZXcgUHJvamVjdCh0aXRsZSk7XG4gICAgICAgIGNyZWF0ZUVsZW1lbnQocHJvamVjdCwgaWRSb3V0ZSk7XG4gICAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBjcmVhdGVUb2RvKHRpdGxlLCBpZFJvdXRlLCBkdWVkYXRlLCBwcmlvcml0eSwgY2hlY2tsaXN0LCBkZXNjcmlwdGlvbiwgZG9uZSA9IGZhbHNlKVxuICAgIHtcbiAgICAgICAgbGV0IHRvZG8gPSBuZXcgVG9kbyh0aXRsZSwgZHVlZGF0ZSwgcHJpb3JpdHksIGNoZWNrbGlzdCwgZGVzY3JpcHRpb24sIGRvbmUpO1xuICAgICAgICBjcmVhdGVFbGVtZW50KHRvZG8sIGlkUm91dGUpO1xuICAgICAgICByZXR1cm4gdG9kbztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVFbGVtZW50KHBhcmVudCwgY2hpbGQpXG4gICAge1xuICAgICAgICBsZXQgaW5kZXggPSBwYXJlbnQuY29udGVudHMuaW5kZXhPZihjaGlsZCk7XG4gICAgICAgIHBhcmVudC5jb250ZW50cyA9IHBhcmVudC5jb250ZW50cy5zbGljZSgwLCBpbmRleCkuY29uY2F0KHBhcmVudC5jb250ZW50cy5zbGljZShpbmRleCsxLCBwYXJlbnQuY29udGVudHMubGVuZ3RoKSk7XG4gICAgfVxuICAgIFxuICAgIGxldCBjYXQxID0gY3JlYXRlQ2F0ZWdvcnkoJ0hvbWUnLCBbXSk7XG4gICAgbGV0IHByajEgPSBjcmVhdGVQcm9qZWN0KCdDbGVhbmluZzIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMicsIFswLCAxXSk7XG4gICAgbGV0IHQxID0gY3JlYXRlVG9kbygnRG8gdGhlIHZhY3V1bWluZycsIFswLDEsIDJdLCAnMjAyMi0wOS0wOCcsICdoaWdoJywgWydiZWRyb29tJywgJ2tpdGNoZW4nLCAnYmF0aHJvb20nLCAnbGl2aW5nIHJvb20nXSwgJ0kgbmVlZCB0byB2YWN1dW0gdGhlIHdob2xlIGhvdXNlJyk7XG4gICAgbGV0IHQyID0gY3JlYXRlVG9kbygnRG8gdGhlIGlyb25pbmcnLCBbMCwxLCAyXSwgJzIwMjItMDktMTEnLCAnbm9ybWFsJywgWydwaW5rIGRyZXNzIHNoaXJ0JywgJ3JlZCBkcmVzcyBzaGlydCddLCAnSSBuZWVkIHRvIGlyb24gbXkgZHJlc3Mgc2hpcnRzJyk7XG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZVRvZG8sIGNyZWF0ZUNhdGVnb3J5LCBjcmVhdGVQcm9qZWN0LCBmaW5kQnlJRCwgcm9vdCwgcmVtb3ZlRWxlbWVudFxuICAgIH1cbn0pKCkiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIlxuaW1wb3J0ICBnaXRodWJJY29uICBmcm9tICcuL2dyYXBoaWNzL0dpdEh1Yi1NYXJrLUxpZ2h0LTMycHgucG5nJztcbmltcG9ydCAgdG9nZ2xlSWNvbiAgZnJvbSAnLi9ncmFwaGljcy90b2dnbGUucG5nJztcbmltcG9ydCAgdG9nZ2xlTWVudUljb24gIGZyb20gJy4vZ3JhcGhpY3MvQXJyb3ctZG93bi5zdmcnO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2l0LWF0dHJpYicpLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLnNldEF0dHJpYnV0ZSgnc3JjJywgZ2l0aHViSWNvbik7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlLWltZycpLnNldEF0dHJpYnV0ZSgnc3JjJywgdG9nZ2xlSWNvbik7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlLW1lbnUtaWNvbicpLnNldEF0dHJpYnV0ZSgnc3JjJywgdG9nZ2xlTWVudUljb24pO1xuXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGRvbU1vZHVsZSB9IGZyb20gJy4vZG9tLmpzJzsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=