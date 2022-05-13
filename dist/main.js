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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: Ubuntu;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n    font-family: Lato;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n* {\n    font-family: Lato;\n    color: white;\n    box-sizing: border-box;\n}\n\nbody {\n    height: 100vh;\n    margin: 0;\n}\n\n.header {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    height: 55px;\n    background-color: #212121;\n}\n\n.heading {\n    font-size: 33px;\n}\n\n.attributes {\n    flex-direction: column;\n    gap: 8px;\n}\n\n.attributes, .git-attrib {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.attribute {\n    text-align: center;\n}\n\n.attribute, .attribute > * {\n    color: #797979;\n    gap: 8px;\n}\n\n.attributes {\n    padding: 5px;\n}\n\n.menu {\n    display: flex;\n    gap: 10px;\n}\n\n.function-button {\n    background-color:#3b3b3b;\n    border: 2px solid #555555;\n    border-radius: 20px;\n    font-size: 15px;\n    padding: 10px;\n    width: 135px;\n    transition: 0.3s;\n}\n\n.add-function:hover, .remove-function:hover {\n    transform: scale(0.96);\n}\n\n\n.main-content {\n    height: calc(100% - 55px);\n    display: flex;\n    background-color: #212121;\n}\n\n.project-category-header {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.side-menu {\n    transition: 0.3s;\n}\n\n.side-menu-elements {\n    box-sizing: border-box;\n    padding: 0 10px 10px 0;\n    width: 300px;\n    background-color: #2d2d2d;\n    border-right: 2px solid #222;\n    position: absolute;\n    z-index: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: calc(100% - 55px);\n    overflow-y: auto;\n}\n\n.directory {\n    max-height: 500px;\n    margin-left: 10px;\n}\n\n.directory-elements {\n    overflow-x: auto;\n    padding: 10px 0 10px 0px;\n}\n\n.group-project {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.project-category-title {\n    font-size: 20px;\n    transition: 0.3s;\n}\n\n.category-project-icon {\n    min-width: 20px;\n    min-height: 20px;\n    border-radius: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: white;\n    color: black;\n}\n\n#first > .project-category-title {\n    font-size: 27px;\n    font-weight: 600;\n}\n\n#toggle-container > .element-content {\n    margin-left: 5px;\n    padding-left: 4px;\n    border-left: 2px solid #999999;\n}\n\n.toggle-menu {\n    position: absolute;\n    height: 50px;\n    width: 25px;\n    left: 300px;\n    top: 389.5px;\n    background-color: #2d2d2d;\n    border-radius: 0 10px 10px 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 1;\n}\n\n.toggle-menu-icon {\n    width: 40px;\n    transition: 0.3s;\n}\n\n.content {\n    width: calc(100% - 325px);\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    background-color: #212121;\n    margin-left: 325px;\n}\n\n.main-section-window {\n    overflow: auto;\n    width: 98%;\n    height: 98%;\n    margin: auto;\n    border: 2px solid #7e7e7e;\n    border-radius: 5px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px\n}\n\n.main-section-heading {\n    max-width: 350px;\n    min-height: 53px;\n    overflow: auto;\n    margin-top: 10px;\n    font-size: 40px;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.sub-section {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    position: relative;\n}\n\n.sub-section-placeholder {\n    text-align: center;\n}\n\n.sub-heading {\n    width: fit-content;\n    display: flex;\n    align-items: center;\n    margin: auto;\n    gap: 5px;\n}\n\n.toggle {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.sub-heading > .toggle {\n    width: 16px;\n    height: 14px;\n}\n\n.toggle-img {\n    transition: 0.3s;\n    transform: rotate(180deg);\n\n}\n\n.toggle-img.rotated {\n    transform: rotate(90deg);\n}\n\n\n.sub-heading > .heading {\n    display: flex;\n    align-items: center;\n    font-size: 28px;\n    text-align: center;\n    color: white;\n    max-width: 350px;\n    overflow: auto;\n}\n\n.todo {\n    background-color: #292929;\n    font-size: 22px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    border: 2px solid #7e7e7e;\n    margin: 5px;\n    border-radius: 10px;\n    flex-wrap: wrap;\n    transition: 0.3s;\n}\n\n.second-display-menu > .todo {\n    margin: 0;\n    position: relative;\n}\n\n.todo-list {\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n}\n\n.todo.done {\n    opacity: 0.3;\n    border: 2px solid green;\n}\n\n.todo.done >  * {\n    pointer-events: none;\n}\n\n.todo.done > .todo-main >  .check-done{\n    pointer-events: all;\n}\n\n.todo-main {\n    border-radius: 5px;\n    padding: 5px;\n    gap: 5px;\n    width: 100%;\n    display: flex;\n    justify-content: space-around;\n    flex-wrap: wrap;\n}\n\n.checklist-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n}\n\n.todo-checklist {\n    margin: auto;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 3px;\n    width: 100%;\n    background-color: #303030;\n    padding: 5px 0;\n}\n\n.checklist-heading {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.checklist {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.checkbox-container {\n    width: 100%;\n    gap: 5px;\n    display: flex;\n    margin: auto;\n}\n\n.checkbox-container > .check-done-button {\n    margin: 0 !important;\n}\n\n.checklist-header {\n    display: flex;\n    width: fit-content;\n    gap: 5px;\n}\n\n.checklist-header > .toggle > .toggle-img, .project-category-header > .toggle > .toggle-img {\n    width: 13px;\n}\n\n.checkbox-label {\n    display: flex;\n    gap: 5px;\n    font-size: 18px;\n    justify-content: flex-start;\n    max-width: 300px;\n    overflow-wrap: anywhere;\n}\n\n.checkbox-input {\n    display: none;\n}\n\n.checkbox-container > .check-done-button {\n    width: 20px;\n    height: 20px;\n}\n\n.checkbox-container > .check-done-button::before {\n    position: relative;\n    top: -6px;\n    font-size: 17px;\n    opacity: 0.2;\n    content: '✓';\n    transition: 0.3s;\n}\n\n.create-checkbox {\n    display: flex;\n    gap: 5px;\n}\n\n.checkbox-title-input {\n    background-color: #272626 !important; \n    border-radius: 5px;\n}\n\n.todo-description-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-bottom: 5px;\n}\n\n.todo-description {\n    width: 100%;\n    padding-bottom: 10px;\n    font-size: 18px;\n    margin: auto;\n    text-align: center;\n}\n\n.todo-period-category {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 7px;\n}\n\n.heading {\n    font-size: 32px;\n}\n\n.set-period {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    font-weight: bold;\n}\n\n.period {\n    width: 185px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.period > input[type=\"date\"] {\n    background-color: #232323;\n    outline: none;\n    border: none;\n    padding: 5px;\n    border-radius: 5px;\n    width: 140px;\n}\n\n\n.round-button, .check-done-button {\n    margin: auto;\n    width: 28px;\n    border-radius: 100%;\n    height: 28px;\n    border: 1px solid white;\n    text-align: center;\n}\n\n.round-button#subs:hover {\n    background-color: red;\n}\n\n.round-button#subs:hover::before {\n    color: #292929;\n}\n\n.round-button#add:hover {\n    background-color: green;\n}\n\n.round-button#add:hover::before {\n    color: #292929;\n}\n\n.round-button#subs::before, .round-button#add::before{\n    transition: 0.3s;\n    position: relative;\n    font-size: 50px;\n    content: '-';\n    color: red;\n}\n\n.round-button#subs::before {\n    top: -20.5px;\n}\n\n.round-button#add::before {\n    font-size: 30px;\n    top: -6px;\n    left: -0.5px;\n    content: '+';\n    color: green;\n}\n\n.todo-duedate, .todo-title, .todo-priority-container, .check-done {\n    width: 220px;\n}    \n\n.todo-priority-container {\n    display: flex;\n}\n\n.todo-title {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n}\n\n.todo-duedate, .todo-priority {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    gap: 3px;\n}    \n\n.todo-label {\n    margin-left: auto;\n    margin-right: auto;\n    width: fit-content;\n    padding: 1px 5px;\n    border-bottom: 1px solid white;\n}\n\n.check-done {\n    display: flex;\n    align-items: center;\n}\n\n.ddate-input, .priority-value, .title-input, .todo-title-content, .checkbox-title-input, .set-c-p-input {\n    text-align: center;\n    font-size: 18px;\n    outline: none;\n    border: none;\n    background-color: inherit;\n}\n\n.priority-value, .title-input {\n    -webkit-appearance: none;\n    appearance: none;\n}\n\n.ddate-input, .priority-value {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.ddate-input {\n    width: 129px;\n}\n\n.priority-value {\n    width: 70px;\n}\n\n.title-input {\n    width: 185px;\n    font-size: 20px;\n    background-color: #2d2d2d;\n    border-radius: 5px;\n}\n\n.description-input {\n    outline: none;\n    border: none;\n    background-color: #2d2d2d;\n    height: 90%;\n    width: 90%;\n    border-radius: 5px;\n    padding: 5px;\n}\n\n.todo-title-content {\n    width: fit-content;\n    max-width: 220px;\n    max-height: 55px;\n    overflow-x: auto;\n    font-size: 20px;\n    margin-left: 31px;\n}\n\n.text-edit-button {\n    width: 26px;\n    height: 26px;\n}\n\n.check-done-input {\n    display: none;\n}\n\n.check-done-button-container {\n    margin: auto;\n}\n\n.check-done-button {\n    margin: auto;\n    width: 28px;\n    border-radius: 100%;\n    height: 28px;\n    border: 1px solid white;\n    text-align: center;\n}\n\n.check-done-button::before {\n    position: relative;\n    top: -4px;\n    font-size: 23px;\n    opacity: 0.2;\n    content: '✓';\n    transition: 0.3s;\n}\n\n.check-done-button:hover {\n    background-color: green;\n}\n\n.check-done-button:hover::before {\n    opacity: 1;\n}\n\n.check-done-button.checked::before {\n    opacity: 1;\n}\n\n.checked {\n    opacity: 1;\n    background-color: green;\n}\n\n\n/* width */\n::-webkit-scrollbar {\n    height: 5px;\n  }\n::-webkit-scrollbar {\n    height: 5px;\n    width: 8px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n    background: #222;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n    background: rgb(19, 19, 19);\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n    background: #555;\n}\n\nbutton {\n    -webkit-appearance: none;\n    appearance: none;\n    background-color: inherit;\n    border: 0;\n    outline: none;\n    padding: 0;\n}\n\n.second-display {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    background-color: rgb(0 0 0 / 30%);\n    justify-content: center;\n    align-items: center;\n    z-index: 2;\n}\n\n.second-display-menu {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n}\n\n.set-category-project {\n}\n\n.set-category-project-title {\n    background-color: #111111;\n    padding: 20px;\n    border-radius: 5px;\n}\n\n.set-c-p-label {\n    font-size: 38px;\n    text-align: center;\n}\n\n.set-c-p-input {\n    font-size: 30px;\n    background-color: #191919;\n    border-radius: 5px;\n}\n\n.select-element-menu {\n    margin: auto;\n    background-color: #111111;\n    border-radius: 5px;\n    display: flex;\n    flex-direction: column;\n\n}\n\n.select-element-menu button:first-of-type {\n    border-top: none;\n    border-radius: 5px;\n}\n\n.select-element-menu button:last-of-type {\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n\n.sem-option {\n    width: 300px;\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 28px;\n    border-top: 1px solid gray;\n}\n\n.sem-option:hover {\n    background-color: #1a1a1a;\n}\n\n.close-button {\n    transition: 0.3s;\n    width: 20px;\n    height: 20px;\n    border-top-right-radius: 7px;\n    border-bottom-left-radius: 7px;\n    position: absolute;\n    right: 0;\n    top: 0;\n    font-size: 18px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: red;\n    z-index: 1;\n}\n\n.close-button:hover {\n    background-color: white;\n    color: red;\n}\n\n.create-button {\n    width: 100px;\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #252525;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n\n.create-button:hover {\n    transition: 0.3s;\n    transform: scale(0.95) translateY(-0.5px);\n}\n\n.green-text-element {\n    color: #7cd47c;\n}\n\n.red-text-element {\n    color: #ec5c5c;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: Ubuntu;\n    src: url(fonts/Ubuntu/Ubuntu-Regular.ttf);\n}\n\n@font-face {\n    font-family: Lato;\n    src: url(fonts/Lato/Lato-Regular.ttf);\n}\n\n* {\n    font-family: Lato;\n    color: white;\n    box-sizing: border-box;\n}\n\nbody {\n    height: 100vh;\n    margin: 0;\n}\n\n.header {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    height: 55px;\n    background-color: #212121;\n}\n\n.heading {\n    font-size: 33px;\n}\n\n.attributes {\n    flex-direction: column;\n    gap: 8px;\n}\n\n.attributes, .git-attrib {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.attribute {\n    text-align: center;\n}\n\n.attribute, .attribute > * {\n    color: #797979;\n    gap: 8px;\n}\n\n.attributes {\n    padding: 5px;\n}\n\n.menu {\n    display: flex;\n    gap: 10px;\n}\n\n.function-button {\n    background-color:#3b3b3b;\n    border: 2px solid #555555;\n    border-radius: 20px;\n    font-size: 15px;\n    padding: 10px;\n    width: 135px;\n    transition: 0.3s;\n}\n\n.add-function:hover, .remove-function:hover {\n    transform: scale(0.96);\n}\n\n\n.main-content {\n    height: calc(100% - 55px);\n    display: flex;\n    background-color: #212121;\n}\n\n.project-category-header {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.side-menu {\n    transition: 0.3s;\n}\n\n.side-menu-elements {\n    box-sizing: border-box;\n    padding: 0 10px 10px 0;\n    width: 300px;\n    background-color: #2d2d2d;\n    border-right: 2px solid #222;\n    position: absolute;\n    z-index: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: calc(100% - 55px);\n    overflow-y: auto;\n}\n\n.directory {\n    max-height: 500px;\n    margin-left: 10px;\n}\n\n.directory-elements {\n    overflow-x: auto;\n    padding: 10px 0 10px 0px;\n}\n\n.group-project {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.project-category-title {\n    font-size: 20px;\n    transition: 0.3s;\n}\n\n.category-project-icon {\n    min-width: 20px;\n    min-height: 20px;\n    border-radius: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: white;\n    color: black;\n}\n\n#first > .project-category-title {\n    font-size: 27px;\n    font-weight: 600;\n}\n\n#toggle-container > .element-content {\n    margin-left: 5px;\n    padding-left: 4px;\n    border-left: 2px solid #999999;\n}\n\n.toggle-menu {\n    position: absolute;\n    height: 50px;\n    width: 25px;\n    left: 300px;\n    top: 389.5px;\n    background-color: #2d2d2d;\n    border-radius: 0 10px 10px 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 1;\n}\n\n.toggle-menu-icon {\n    width: 40px;\n    transition: 0.3s;\n}\n\n.content {\n    width: calc(100% - 325px);\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    background-color: #212121;\n    margin-left: 325px;\n}\n\n.main-section-window {\n    overflow: auto;\n    width: 98%;\n    height: 98%;\n    margin: auto;\n    border: 2px solid #7e7e7e;\n    border-radius: 5px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px\n}\n\n.main-section-heading {\n    max-width: 350px;\n    min-height: 53px;\n    overflow: auto;\n    margin-top: 10px;\n    font-size: 40px;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.sub-section {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    position: relative;\n}\n\n.sub-section-placeholder {\n    text-align: center;\n}\n\n.sub-heading {\n    width: fit-content;\n    display: flex;\n    align-items: center;\n    margin: auto;\n    gap: 5px;\n}\n\n.toggle {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.sub-heading > .toggle {\n    width: 16px;\n    height: 14px;\n}\n\n.toggle-img {\n    transition: 0.3s;\n    transform: rotate(180deg);\n\n}\n\n.toggle-img.rotated {\n    transform: rotate(90deg);\n}\n\n\n.sub-heading > .heading {\n    display: flex;\n    align-items: center;\n    font-size: 28px;\n    text-align: center;\n    color: white;\n    max-width: 350px;\n    overflow: auto;\n}\n\n.todo {\n    background-color: #292929;\n    font-size: 22px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    border: 2px solid #7e7e7e;\n    margin: 5px;\n    border-radius: 10px;\n    flex-wrap: wrap;\n    transition: 0.3s;\n}\n\n.second-display-menu > .todo {\n    margin: 0;\n    position: relative;\n}\n\n.todo-list {\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n}\n\n.todo.done {\n    opacity: 0.3;\n    border: 2px solid green;\n}\n\n.todo.done >  * {\n    pointer-events: none;\n}\n\n.todo.done > .todo-main >  .check-done{\n    pointer-events: all;\n}\n\n.todo-main {\n    border-radius: 5px;\n    padding: 5px;\n    gap: 5px;\n    width: 100%;\n    display: flex;\n    justify-content: space-around;\n    flex-wrap: wrap;\n}\n\n.checklist-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n}\n\n.todo-checklist {\n    margin: auto;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 3px;\n    width: 100%;\n    background-color: #303030;\n    padding: 5px 0;\n}\n\n.checklist-heading {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.checklist {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.checkbox-container {\n    width: 100%;\n    gap: 5px;\n    display: flex;\n    margin: auto;\n}\n\n.checkbox-container > .check-done-button {\n    margin: 0 !important;\n}\n\n.checklist-header {\n    display: flex;\n    width: fit-content;\n    gap: 5px;\n}\n\n.checklist-header > .toggle > .toggle-img, .project-category-header > .toggle > .toggle-img {\n    width: 13px;\n}\n\n.checkbox-label {\n    display: flex;\n    gap: 5px;\n    font-size: 18px;\n    justify-content: flex-start;\n    max-width: 300px;\n    overflow-wrap: anywhere;\n}\n\n.checkbox-input {\n    display: none;\n}\n\n.checkbox-container > .check-done-button {\n    width: 20px;\n    height: 20px;\n}\n\n.checkbox-container > .check-done-button::before {\n    position: relative;\n    top: -6px;\n    font-size: 17px;\n    opacity: 0.2;\n    content: '✓';\n    transition: 0.3s;\n}\n\n.create-checkbox {\n    display: flex;\n    gap: 5px;\n}\n\n.checkbox-title-input {\n    background-color: #272626 !important; \n    border-radius: 5px;\n}\n\n.todo-description-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-bottom: 5px;\n}\n\n.todo-description {\n    width: 100%;\n    padding-bottom: 10px;\n    font-size: 18px;\n    margin: auto;\n    text-align: center;\n}\n\n.todo-period-category {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 7px;\n}\n\n.heading {\n    font-size: 32px;\n}\n\n.set-period {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    font-weight: bold;\n}\n\n.period {\n    width: 185px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.period > input[type=\"date\"] {\n    background-color: #232323;\n    outline: none;\n    border: none;\n    padding: 5px;\n    border-radius: 5px;\n    width: 140px;\n}\n\n\n.round-button, .check-done-button {\n    margin: auto;\n    width: 28px;\n    border-radius: 100%;\n    height: 28px;\n    border: 1px solid white;\n    text-align: center;\n}\n\n.round-button#subs:hover {\n    background-color: red;\n}\n\n.round-button#subs:hover::before {\n    color: #292929;\n}\n\n.round-button#add:hover {\n    background-color: green;\n}\n\n.round-button#add:hover::before {\n    color: #292929;\n}\n\n.round-button#subs::before, .round-button#add::before{\n    transition: 0.3s;\n    position: relative;\n    font-size: 50px;\n    content: '-';\n    color: red;\n}\n\n.round-button#subs::before {\n    top: -20.5px;\n}\n\n.round-button#add::before {\n    font-size: 30px;\n    top: -6px;\n    left: -0.5px;\n    content: '+';\n    color: green;\n}\n\n.todo-duedate, .todo-title, .todo-priority-container, .check-done {\n    width: 220px;\n}    \n\n.todo-priority-container {\n    display: flex;\n}\n\n.todo-title {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n}\n\n.todo-duedate, .todo-priority {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    gap: 3px;\n}    \n\n.todo-label {\n    margin-left: auto;\n    margin-right: auto;\n    width: fit-content;\n    padding: 1px 5px;\n    border-bottom: 1px solid white;\n}\n\n.check-done {\n    display: flex;\n    align-items: center;\n}\n\n.ddate-input, .priority-value, .title-input, .todo-title-content, .checkbox-title-input, .set-c-p-input {\n    text-align: center;\n    font-size: 18px;\n    outline: none;\n    border: none;\n    background-color: inherit;\n}\n\n.priority-value, .title-input {\n    -webkit-appearance: none;\n    appearance: none;\n}\n\n.ddate-input, .priority-value {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.ddate-input {\n    width: 129px;\n}\n\n.priority-value {\n    width: 70px;\n}\n\n.title-input {\n    width: 185px;\n    font-size: 20px;\n    background-color: #2d2d2d;\n    border-radius: 5px;\n}\n\n.description-input {\n    outline: none;\n    border: none;\n    background-color: #2d2d2d;\n    height: 90%;\n    width: 90%;\n    border-radius: 5px;\n    padding: 5px;\n}\n\n.todo-title-content {\n    width: fit-content;\n    max-width: 220px;\n    max-height: 55px;\n    overflow-x: auto;\n    font-size: 20px;\n    margin-left: 31px;\n}\n\n.text-edit-button {\n    width: 26px;\n    height: 26px;\n}\n\n.check-done-input {\n    display: none;\n}\n\n.check-done-button-container {\n    margin: auto;\n}\n\n.check-done-button {\n    margin: auto;\n    width: 28px;\n    border-radius: 100%;\n    height: 28px;\n    border: 1px solid white;\n    text-align: center;\n}\n\n.check-done-button::before {\n    position: relative;\n    top: -4px;\n    font-size: 23px;\n    opacity: 0.2;\n    content: '✓';\n    transition: 0.3s;\n}\n\n.check-done-button:hover {\n    background-color: green;\n}\n\n.check-done-button:hover::before {\n    opacity: 1;\n}\n\n.check-done-button.checked::before {\n    opacity: 1;\n}\n\n.checked {\n    opacity: 1;\n    background-color: green;\n}\n\n\n/* width */\n::-webkit-scrollbar {\n    height: 5px;\n  }\n::-webkit-scrollbar {\n    height: 5px;\n    width: 8px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n    background: #222;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n    background: rgb(19, 19, 19);\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n    background: #555;\n}\n\nbutton {\n    -webkit-appearance: none;\n    appearance: none;\n    background-color: inherit;\n    border: 0;\n    outline: none;\n    padding: 0;\n}\n\n.second-display {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    background-color: rgb(0 0 0 / 30%);\n    justify-content: center;\n    align-items: center;\n    z-index: 2;\n}\n\n.second-display-menu {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n}\n\n.set-category-project {\n}\n\n.set-category-project-title {\n    background-color: #111111;\n    padding: 20px;\n    border-radius: 5px;\n}\n\n.set-c-p-label {\n    font-size: 38px;\n    text-align: center;\n}\n\n.set-c-p-input {\n    font-size: 30px;\n    background-color: #191919;\n    border-radius: 5px;\n}\n\n.select-element-menu {\n    margin: auto;\n    background-color: #111111;\n    border-radius: 5px;\n    display: flex;\n    flex-direction: column;\n\n}\n\n.select-element-menu button:first-of-type {\n    border-top: none;\n    border-radius: 5px;\n}\n\n.select-element-menu button:last-of-type {\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n\n.sem-option {\n    width: 300px;\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 28px;\n    border-top: 1px solid gray;\n}\n\n.sem-option:hover {\n    background-color: #1a1a1a;\n}\n\n.close-button {\n    transition: 0.3s;\n    width: 20px;\n    height: 20px;\n    border-top-right-radius: 7px;\n    border-bottom-left-radius: 7px;\n    position: absolute;\n    right: 0;\n    top: 0;\n    font-size: 18px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: red;\n    z-index: 1;\n}\n\n.close-button:hover {\n    background-color: white;\n    color: red;\n}\n\n.create-button {\n    width: 100px;\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #252525;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n\n.create-button:hover {\n    transition: 0.3s;\n    transform: scale(0.95) translateY(-0.5px);\n}\n\n.green-text-element {\n    color: #7cd47c;\n}\n\n.red-text-element {\n    color: #ec5c5c;\n}"],"sourceRoot":""}]);
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


    let periodDateInputs = document.querySelector('.set-period').querySelectorAll('input[type="date"]');
    let today = new Date();
    today =  today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0');
    periodDateInputs.forEach( input =>
    {
        input.value = today;
        input.addEventListener('change', () => { periodDateInputChangeAction() });
        periodDateInputChangeAction();
    });
    function periodDateInputChangeAction()
    {
        let from = periodDateInputs[0].value;
        let to = periodDateInputs[1].value;
        let todosInPeriod = [];
        let elementContent = document.querySelector('.todo-period-list').querySelector('.element-content');
        if(from <= to)
        {
            todosInPeriod = _logic_js__WEBPACK_IMPORTED_MODULE_0__.logicModule.todos.filter( (todo) => 
            {
                return (todo.duedate >= from &&  todo.duedate <= to);
            });
            elementContent.textContent = '';
        }
        else 
            elementContent.textContent = '-';

        todosInPeriod.forEach(todo =>
        {
            let newTodo = createProjectElement(-1, todo);
            newTodo.addEventListener('click', () => { addToElementAction(document.querySelector(`[data-id="${todo.route[todo.route.length-1]}"]`))});
        });

    }
    function periodCheckRemoved()
    {
        let container = document.querySelector('.todo-period-list').querySelector('.element-content');

        if(container.lastChild)
        {
            let elements = container.querySelectorAll('.project-category-header');   
            let directory = document.querySelector('.directory');
            for(let element of elements)
            {
                let id = element.getAttribute('data-id');
                if(!(directory.querySelector(`[data-id="${id}"]`)))
                {
                    container.removeChild(element);
                }
            }

            if(!(container.lastChild))
                container.textContent = '-';
        }
    }

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
        let removed = [];
        while (parent.firstChild) 
        {
            removed.push(parent.lastChild);
            parent.removeChild(parent.lastChild);
        }
        return removed;
    }
    function generateDirectory(directory)
    {
        let directoryContent = directory.contents;

            for(let element of directoryContent)
            {
                if(element.canContent)
                {
                    if(element.canContent
                        [0] == 'project')
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
                    createProjectElement(directory.id, element)
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
        
        let parent = document.querySelector(`[data-id="${directory}"]`).querySelector('.element-content');
        parent.appendChild(projectElementHeader);
        //periodDateInputChangeAction();

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
                        periodDateInputChangeAction();
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
                newElement = createProjectElement(parent.id, logicElement);
                periodDateInputChangeAction();
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
                       periodCheckRemoved();
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
        constructor(title, route)
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
            this.route = route,
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
        let todo = new Todo(title, duedate, priority, checklist, description, idRoute, done);
        createElement(todo, idRoute);
        todos.push(todo);
        return todo;
    }

    function removeElement(parent, child)
    {
        let index = parent.contents.indexOf(child);
        parent.contents = parent.contents.slice(0, index).concat(parent.contents.slice(index+1, parent.contents.length));
    }
    
    let todos = [];

    let cat1 = createCategory('Home', []);
    let prj1 = createProject('Cleaning', [0, 1]);
    let t1 = createTodo('Do the vacuuming', [0,1, 2], '2022-05-18', 'high', ['bedroom', 'kitchen', 'bathroom', 'living room'], 'I need to vacuum the whole house');
    let t2 = createTodo('Do the ironing', [0,1, 2], '2022-05-13', 'normal', ['pink dress shirt', 'red dress shirt'], 'I need to iron my dress shirts');
    let prj2 = createProject('Homework', [0, 1]);
    let t3 = createTodo('Write an essay', [0,1, 2, 5], '2022-09-13', 'high', [], 'Essay about coding');
    let t4 = createTodo('Do the math exercises', [0,1, 2, 5], '2022-05-13', 'low', ['1.2/45', '1.3/45'], 'They are quite hard');


    return {
        createTodo, createCategory, createProject, findByID, root, removeElement, todos
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxjQUFjLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFFBQVEsVUFBVSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLFVBQVUsS0FBSyxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFh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QUFFekQsK0VBQStFLDRFQUFVO0FBQ3pGLDBEQUEwRCw0REFBVTtBQUNwRSxnRUFBZ0UsZ0VBQWM7O0FBRXpEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2dyYXBoaWNzL0Fycm93LWRvd24uc3ZnIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ncmFwaGljcy9HaXRIdWItTWFyay1MaWdodC0zMnB4LnBuZyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZ3JhcGhpY3MvZWRpdC1pY29uLnBuZyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZ3JhcGhpY3Mvc2F2ZS1pY29uLnBuZyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZ3JhcGhpY3MvdG9nZ2xlLnBuZyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImZvbnRzL1VidW50dS9VYnVudHUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJmb250cy9MYXRvL0xhdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBVYnVudHU7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcbioge1xcbiAgICBmb250LWZhbWlseTogTGF0bztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGhlaWdodDogNTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcXG59XFxuXFxuLmhlYWRpbmcge1xcbiAgICBmb250LXNpemU6IDMzcHg7XFxufVxcblxcbi5hdHRyaWJ1dGVzIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi5hdHRyaWJ1dGVzLCAuZ2l0LWF0dHJpYiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYXR0cmlidXRlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYXR0cmlidXRlLCAuYXR0cmlidXRlID4gKiB7XFxuICAgIGNvbG9yOiAjNzk3OTc5O1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLmF0dHJpYnV0ZXMge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5tZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZnVuY3Rpb24tYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojM2IzYjNiO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNTU1NTU1O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHdpZHRoOiAxMzVweDtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLmFkZC1mdW5jdGlvbjpob3ZlciwgLnJlbW92ZS1mdW5jdGlvbjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45Nik7XFxufVxcblxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDU1cHgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xcbn1cXG5cXG4ucHJvamVjdC1jYXRlZ29yeS1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnNpZGUtbWVudSB7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5zaWRlLW1lbnUtZWxlbWVudHMge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwIDEwcHggMTBweCAwO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZDJkMmQ7XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMyMjI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDU1cHgpO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uZGlyZWN0b3J5IHtcXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uZGlyZWN0b3J5LWVsZW1lbnRzIHtcXG4gICAgb3ZlcmZsb3cteDogYXV0bztcXG4gICAgcGFkZGluZzogMTBweCAwIDEwcHggMHB4O1xcbn1cXG5cXG4uZ3JvdXAtcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnByb2plY3QtY2F0ZWdvcnktdGl0bGUge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5jYXRlZ29yeS1wcm9qZWN0LWljb24ge1xcbiAgICBtaW4td2lkdGg6IDIwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4jZmlyc3QgPiAucHJvamVjdC1jYXRlZ29yeS10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMjdweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuI3RvZ2dsZS1jb250YWluZXIgPiAuZWxlbWVudC1jb250ZW50IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzk5OTk5OTtcXG59XFxuXFxuLnRvZ2dsZS1tZW51IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBsZWZ0OiAzMDBweDtcXG4gICAgdG9wOiAzODkuNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZDJkO1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDEwcHggMTBweCAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLnRvZ2dsZS1tZW51LWljb24ge1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzI1cHgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMjVweDtcXG59XFxuXFxuLm1haW4tc2VjdGlvbi13aW5kb3cge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgd2lkdGg6IDk4JTtcXG4gICAgaGVpZ2h0OiA5OCU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzdlN2U3ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHhcXG59XFxuXFxuLm1haW4tc2VjdGlvbi1oZWFkaW5nIHtcXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcXG4gICAgbWluLWhlaWdodDogNTNweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLnN1Yi1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zdWItc2VjdGlvbi1wbGFjZWhvbGRlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnN1Yi1oZWFkaW5nIHtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4udG9nZ2xlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zdWItaGVhZGluZyA+IC50b2dnbGUge1xcbiAgICB3aWR0aDogMTZweDtcXG4gICAgaGVpZ2h0OiAxNHB4O1xcbn1cXG5cXG4udG9nZ2xlLWltZyB7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuXFxufVxcblxcbi50b2dnbGUtaW1nLnJvdGF0ZWQge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcblxcbi5zdWItaGVhZGluZyA+IC5oZWFkaW5nIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi50b2RvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjkyOTtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM3ZTdlN2U7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5zZWNvbmQtZGlzcGxheS1tZW51ID4gLnRvZG8ge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRvZG8tbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuLnRvZG8uZG9uZSB7XFxuICAgIG9wYWNpdHk6IDAuMztcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JlZW47XFxufVxcblxcbi50b2RvLmRvbmUgPiAgKiB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4udG9kby5kb25lID4gLnRvZG8tbWFpbiA+ICAuY2hlY2stZG9uZXtcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuXFxuLnRvZG8tbWFpbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBnYXA6IDVweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5jaGVja2xpc3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4udG9kby1jaGVja2xpc3Qge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogM3B4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDtcXG4gICAgcGFkZGluZzogNXB4IDA7XFxufVxcblxcbi5jaGVja2xpc3QtaGVhZGluZyB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi5jaGVja2xpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLmNoZWNrYm94LWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uY2hlY2tib3gtY29udGFpbmVyID4gLmNoZWNrLWRvbmUtYnV0dG9uIHtcXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxufVxcblxcbi5jaGVja2xpc3QtaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLmNoZWNrbGlzdC1oZWFkZXIgPiAudG9nZ2xlID4gLnRvZ2dsZS1pbWcsIC5wcm9qZWN0LWNhdGVnb3J5LWhlYWRlciA+IC50b2dnbGUgPiAudG9nZ2xlLWltZyB7XFxuICAgIHdpZHRoOiAxM3B4O1xcbn1cXG5cXG4uY2hlY2tib3gtbGFiZWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxuICAgIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcbn1cXG5cXG4uY2hlY2tib3gtaW5wdXQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY2hlY2tib3gtY29udGFpbmVyID4gLmNoZWNrLWRvbmUtYnV0dG9uIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG59XFxuXFxuLmNoZWNrYm94LWNvbnRhaW5lciA+IC5jaGVjay1kb25lLWJ1dHRvbjo6YmVmb3JlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC02cHg7XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG4gICAgb3BhY2l0eTogMC4yO1xcbiAgICBjb250ZW50OiAn4pyTJztcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLmNyZWF0ZS1jaGVja2JveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uY2hlY2tib3gtdGl0bGUtaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyNjI2ICFpbXBvcnRhbnQ7IFxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi50b2RvLWRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcblxcbi50b2RvLWRlc2NyaXB0aW9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udG9kby1wZXJpb2QtY2F0ZWdvcnkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA3cHg7XFxufVxcblxcbi5oZWFkaW5nIHtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbn1cXG5cXG4uc2V0LXBlcmlvZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnBlcmlvZCB7XFxuICAgIHdpZHRoOiAxODVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucGVyaW9kID4gaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjMyMztcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgd2lkdGg6IDE0MHB4O1xcbn1cXG5cXG5cXG4ucm91bmQtYnV0dG9uLCAuY2hlY2stZG9uZS1idXR0b24ge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHdpZHRoOiAyOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDI4cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5yb3VuZC1idXR0b24jc3Viczpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnJvdW5kLWJ1dHRvbiNzdWJzOmhvdmVyOjpiZWZvcmUge1xcbiAgICBjb2xvcjogIzI5MjkyOTtcXG59XFxuXFxuLnJvdW5kLWJ1dHRvbiNhZGQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnJvdW5kLWJ1dHRvbiNhZGQ6aG92ZXI6OmJlZm9yZSB7XFxuICAgIGNvbG9yOiAjMjkyOTI5O1xcbn1cXG5cXG4ucm91bmQtYnV0dG9uI3N1YnM6OmJlZm9yZSwgLnJvdW5kLWJ1dHRvbiNhZGQ6OmJlZm9yZXtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIGNvbnRlbnQ6ICctJztcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuLnJvdW5kLWJ1dHRvbiNzdWJzOjpiZWZvcmUge1xcbiAgICB0b3A6IC0yMC41cHg7XFxufVxcblxcbi5yb3VuZC1idXR0b24jYWRkOjpiZWZvcmUge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIHRvcDogLTZweDtcXG4gICAgbGVmdDogLTAuNXB4O1xcbiAgICBjb250ZW50OiAnKyc7XFxuICAgIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnRvZG8tZHVlZGF0ZSwgLnRvZG8tdGl0bGUsIC50b2RvLXByaW9yaXR5LWNvbnRhaW5lciwgLmNoZWNrLWRvbmUge1xcbiAgICB3aWR0aDogMjIwcHg7XFxufSAgICBcXG5cXG4udG9kby1wcmlvcml0eS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udG9kby10aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnRvZG8tZHVlZGF0ZSwgLnRvZG8tcHJpb3JpdHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdhcDogM3B4O1xcbn0gICAgXFxuXFxuLnRvZG8tbGFiZWwge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDFweCA1cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLmNoZWNrLWRvbmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGRhdGUtaW5wdXQsIC5wcmlvcml0eS12YWx1ZSwgLnRpdGxlLWlucHV0LCAudG9kby10aXRsZS1jb250ZW50LCAuY2hlY2tib3gtdGl0bGUtaW5wdXQsIC5zZXQtYy1wLWlucHV0IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLnByaW9yaXR5LXZhbHVlLCAudGl0bGUtaW5wdXQge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi5kZGF0ZS1pbnB1dCwgLnByaW9yaXR5LXZhbHVlIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLmRkYXRlLWlucHV0IHtcXG4gICAgd2lkdGg6IDEyOXB4O1xcbn1cXG5cXG4ucHJpb3JpdHktdmFsdWUge1xcbiAgICB3aWR0aDogNzBweDtcXG59XFxuXFxuLnRpdGxlLWlucHV0IHtcXG4gICAgd2lkdGg6IDE4NXB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZDJkMmQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLWlucHV0IHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZDJkO1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi50b2RvLXRpdGxlLWNvbnRlbnQge1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIG1heC13aWR0aDogMjIwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDU1cHg7XFxuICAgIG92ZXJmbG93LXg6IGF1dG87XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDMxcHg7XFxufVxcblxcbi50ZXh0LWVkaXQtYnV0dG9uIHtcXG4gICAgd2lkdGg6IDI2cHg7XFxuICAgIGhlaWdodDogMjZweDtcXG59XFxuXFxuLmNoZWNrLWRvbmUtaW5wdXQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY2hlY2stZG9uZS1idXR0b24tY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uY2hlY2stZG9uZS1idXR0b24ge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHdpZHRoOiAyOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDI4cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jaGVjay1kb25lLWJ1dHRvbjo6YmVmb3JlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC00cHg7XFxuICAgIGZvbnQtc2l6ZTogMjNweDtcXG4gICAgb3BhY2l0eTogMC4yO1xcbiAgICBjb250ZW50OiAn4pyTJztcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLmNoZWNrLWRvbmUtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5jaGVjay1kb25lLWJ1dHRvbjpob3Zlcjo6YmVmb3JlIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmNoZWNrLWRvbmUtYnV0dG9uLmNoZWNrZWQ6OmJlZm9yZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5jaGVja2VkIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcblxcbi8qIHdpZHRoICovXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIGhlaWdodDogNXB4O1xcbiAgfVxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICBoZWlnaHQ6IDVweDtcXG4gICAgd2lkdGg6IDhweDtcXG59XFxuXFxuLyogVHJhY2sgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgYmFja2dyb3VuZDogIzIyMjtcXG59XFxuXFxuLyogSGFuZGxlICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigxOSwgMTksIDE5KTtcXG59XFxuXFxuLyogSGFuZGxlIG9uIGhvdmVyICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICM1NTU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uc2Vjb25kLWRpc3BsYXkge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCAvIDMwJSk7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uc2Vjb25kLWRpc3BsYXktbWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zZXQtY2F0ZWdvcnktcHJvamVjdCB7XFxufVxcblxcbi5zZXQtY2F0ZWdvcnktcHJvamVjdC10aXRsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnNldC1jLXAtbGFiZWwge1xcbiAgICBmb250LXNpemU6IDM4cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNldC1jLXAtaW5wdXQge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTE5MTk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnNlbGVjdC1lbGVtZW50LW1lbnUge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG59XFxuXFxuLnNlbGVjdC1lbGVtZW50LW1lbnUgYnV0dG9uOmZpcnN0LW9mLXR5cGUge1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zZWxlY3QtZWxlbWVudC1tZW51IGJ1dHRvbjpsYXN0LW9mLXR5cGUge1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zZW0tb3B0aW9uIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmF5O1xcbn1cXG5cXG4uc2VtLW9wdGlvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMWE7XFxufVxcblxcbi5jbG9zZS1idXR0b24ge1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4O1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uY2xvc2UtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbi5jcmVhdGUtYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyNTI1O1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxufVxcblxcbi5jcmVhdGUtYnV0dG9uOmhvdmVyIHtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KSB0cmFuc2xhdGVZKC0wLjVweCk7XFxufVxcblxcbi5ncmVlbi10ZXh0LWVsZW1lbnQge1xcbiAgICBjb2xvcjogIzdjZDQ3YztcXG59XFxuXFxuLnJlZC10ZXh0LWVsZW1lbnQge1xcbiAgICBjb2xvcjogI2VjNWM1YztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQiw0Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsNENBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsUUFBUTtBQUNaOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixT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ZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLDhCQUE4QjtJQUM5QiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBVYnVudHU7XFxuICAgIHNyYzogdXJsKGZvbnRzL1VidW50dS9VYnVudHUtUmVndWxhci50dGYpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IExhdG87XFxuICAgIHNyYzogdXJsKGZvbnRzL0xhdG8vTGF0by1SZWd1bGFyLnR0Zik7XFxufVxcblxcbioge1xcbiAgICBmb250LWZhbWlseTogTGF0bztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGhlaWdodDogNTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcXG59XFxuXFxuLmhlYWRpbmcge1xcbiAgICBmb250LXNpemU6IDMzcHg7XFxufVxcblxcbi5hdHRyaWJ1dGVzIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi5hdHRyaWJ1dGVzLCAuZ2l0LWF0dHJpYiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYXR0cmlidXRlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYXR0cmlidXRlLCAuYXR0cmlidXRlID4gKiB7XFxuICAgIGNvbG9yOiAjNzk3OTc5O1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLmF0dHJpYnV0ZXMge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5tZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZnVuY3Rpb24tYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojM2IzYjNiO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNTU1NTU1O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHdpZHRoOiAxMzVweDtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLmFkZC1mdW5jdGlvbjpob3ZlciwgLnJlbW92ZS1mdW5jdGlvbjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45Nik7XFxufVxcblxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDU1cHgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xcbn1cXG5cXG4ucHJvamVjdC1jYXRlZ29yeS1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnNpZGUtbWVudSB7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5zaWRlLW1lbnUtZWxlbWVudHMge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwIDEwcHggMTBweCAwO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZDJkMmQ7XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMyMjI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDU1cHgpO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uZGlyZWN0b3J5IHtcXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uZGlyZWN0b3J5LWVsZW1lbnRzIHtcXG4gICAgb3ZlcmZsb3cteDogYXV0bztcXG4gICAgcGFkZGluZzogMTBweCAwIDEwcHggMHB4O1xcbn1cXG5cXG4uZ3JvdXAtcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnByb2plY3QtY2F0ZWdvcnktdGl0bGUge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5jYXRlZ29yeS1wcm9qZWN0LWljb24ge1xcbiAgICBtaW4td2lkdGg6IDIwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4jZmlyc3QgPiAucHJvamVjdC1jYXRlZ29yeS10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMjdweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuI3RvZ2dsZS1jb250YWluZXIgPiAuZWxlbWVudC1jb250ZW50IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzk5OTk5OTtcXG59XFxuXFxuLnRvZ2dsZS1tZW51IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBsZWZ0OiAzMDBweDtcXG4gICAgdG9wOiAzODkuNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZDJkO1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDEwcHggMTBweCAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLnRvZ2dsZS1tZW51LWljb24ge1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzI1cHgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMjVweDtcXG59XFxuXFxuLm1haW4tc2VjdGlvbi13aW5kb3cge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgd2lkdGg6IDk4JTtcXG4gICAgaGVpZ2h0OiA5OCU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzdlN2U3ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHhcXG59XFxuXFxuLm1haW4tc2VjdGlvbi1oZWFkaW5nIHtcXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcXG4gICAgbWluLWhlaWdodDogNTNweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLnN1Yi1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zdWItc2VjdGlvbi1wbGFjZWhvbGRlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnN1Yi1oZWFkaW5nIHtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4udG9nZ2xlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zdWItaGVhZGluZyA+IC50b2dnbGUge1xcbiAgICB3aWR0aDogMTZweDtcXG4gICAgaGVpZ2h0OiAxNHB4O1xcbn1cXG5cXG4udG9nZ2xlLWltZyB7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuXFxufVxcblxcbi50b2dnbGUtaW1nLnJvdGF0ZWQge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcblxcbi5zdWItaGVhZGluZyA+IC5oZWFkaW5nIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi50b2RvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjkyOTtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM3ZTdlN2U7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5zZWNvbmQtZGlzcGxheS1tZW51ID4gLnRvZG8ge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRvZG8tbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuLnRvZG8uZG9uZSB7XFxuICAgIG9wYWNpdHk6IDAuMztcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JlZW47XFxufVxcblxcbi50b2RvLmRvbmUgPiAgKiB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4udG9kby5kb25lID4gLnRvZG8tbWFpbiA+ICAuY2hlY2stZG9uZXtcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuXFxuLnRvZG8tbWFpbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBnYXA6IDVweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5jaGVja2xpc3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4udG9kby1jaGVja2xpc3Qge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogM3B4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDtcXG4gICAgcGFkZGluZzogNXB4IDA7XFxufVxcblxcbi5jaGVja2xpc3QtaGVhZGluZyB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi5jaGVja2xpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLmNoZWNrYm94LWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uY2hlY2tib3gtY29udGFpbmVyID4gLmNoZWNrLWRvbmUtYnV0dG9uIHtcXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxufVxcblxcbi5jaGVja2xpc3QtaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLmNoZWNrbGlzdC1oZWFkZXIgPiAudG9nZ2xlID4gLnRvZ2dsZS1pbWcsIC5wcm9qZWN0LWNhdGVnb3J5LWhlYWRlciA+IC50b2dnbGUgPiAudG9nZ2xlLWltZyB7XFxuICAgIHdpZHRoOiAxM3B4O1xcbn1cXG5cXG4uY2hlY2tib3gtbGFiZWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxuICAgIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcbn1cXG5cXG4uY2hlY2tib3gtaW5wdXQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY2hlY2tib3gtY29udGFpbmVyID4gLmNoZWNrLWRvbmUtYnV0dG9uIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG59XFxuXFxuLmNoZWNrYm94LWNvbnRhaW5lciA+IC5jaGVjay1kb25lLWJ1dHRvbjo6YmVmb3JlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC02cHg7XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG4gICAgb3BhY2l0eTogMC4yO1xcbiAgICBjb250ZW50OiAn4pyTJztcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLmNyZWF0ZS1jaGVja2JveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uY2hlY2tib3gtdGl0bGUtaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyNjI2ICFpbXBvcnRhbnQ7IFxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi50b2RvLWRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcblxcbi50b2RvLWRlc2NyaXB0aW9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udG9kby1wZXJpb2QtY2F0ZWdvcnkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA3cHg7XFxufVxcblxcbi5oZWFkaW5nIHtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbn1cXG5cXG4uc2V0LXBlcmlvZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnBlcmlvZCB7XFxuICAgIHdpZHRoOiAxODVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucGVyaW9kID4gaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjMyMztcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgd2lkdGg6IDE0MHB4O1xcbn1cXG5cXG5cXG4ucm91bmQtYnV0dG9uLCAuY2hlY2stZG9uZS1idXR0b24ge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHdpZHRoOiAyOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDI4cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5yb3VuZC1idXR0b24jc3Viczpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnJvdW5kLWJ1dHRvbiNzdWJzOmhvdmVyOjpiZWZvcmUge1xcbiAgICBjb2xvcjogIzI5MjkyOTtcXG59XFxuXFxuLnJvdW5kLWJ1dHRvbiNhZGQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnJvdW5kLWJ1dHRvbiNhZGQ6aG92ZXI6OmJlZm9yZSB7XFxuICAgIGNvbG9yOiAjMjkyOTI5O1xcbn1cXG5cXG4ucm91bmQtYnV0dG9uI3N1YnM6OmJlZm9yZSwgLnJvdW5kLWJ1dHRvbiNhZGQ6OmJlZm9yZXtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIGNvbnRlbnQ6ICctJztcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuLnJvdW5kLWJ1dHRvbiNzdWJzOjpiZWZvcmUge1xcbiAgICB0b3A6IC0yMC41cHg7XFxufVxcblxcbi5yb3VuZC1idXR0b24jYWRkOjpiZWZvcmUge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIHRvcDogLTZweDtcXG4gICAgbGVmdDogLTAuNXB4O1xcbiAgICBjb250ZW50OiAnKyc7XFxuICAgIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnRvZG8tZHVlZGF0ZSwgLnRvZG8tdGl0bGUsIC50b2RvLXByaW9yaXR5LWNvbnRhaW5lciwgLmNoZWNrLWRvbmUge1xcbiAgICB3aWR0aDogMjIwcHg7XFxufSAgICBcXG5cXG4udG9kby1wcmlvcml0eS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udG9kby10aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnRvZG8tZHVlZGF0ZSwgLnRvZG8tcHJpb3JpdHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdhcDogM3B4O1xcbn0gICAgXFxuXFxuLnRvZG8tbGFiZWwge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDFweCA1cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLmNoZWNrLWRvbmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGRhdGUtaW5wdXQsIC5wcmlvcml0eS12YWx1ZSwgLnRpdGxlLWlucHV0LCAudG9kby10aXRsZS1jb250ZW50LCAuY2hlY2tib3gtdGl0bGUtaW5wdXQsIC5zZXQtYy1wLWlucHV0IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLnByaW9yaXR5LXZhbHVlLCAudGl0bGUtaW5wdXQge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi5kZGF0ZS1pbnB1dCwgLnByaW9yaXR5LXZhbHVlIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLmRkYXRlLWlucHV0IHtcXG4gICAgd2lkdGg6IDEyOXB4O1xcbn1cXG5cXG4ucHJpb3JpdHktdmFsdWUge1xcbiAgICB3aWR0aDogNzBweDtcXG59XFxuXFxuLnRpdGxlLWlucHV0IHtcXG4gICAgd2lkdGg6IDE4NXB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZDJkMmQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLWlucHV0IHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZDJkO1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi50b2RvLXRpdGxlLWNvbnRlbnQge1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIG1heC13aWR0aDogMjIwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDU1cHg7XFxuICAgIG92ZXJmbG93LXg6IGF1dG87XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDMxcHg7XFxufVxcblxcbi50ZXh0LWVkaXQtYnV0dG9uIHtcXG4gICAgd2lkdGg6IDI2cHg7XFxuICAgIGhlaWdodDogMjZweDtcXG59XFxuXFxuLmNoZWNrLWRvbmUtaW5wdXQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY2hlY2stZG9uZS1idXR0b24tY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uY2hlY2stZG9uZS1idXR0b24ge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHdpZHRoOiAyOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDI4cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jaGVjay1kb25lLWJ1dHRvbjo6YmVmb3JlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC00cHg7XFxuICAgIGZvbnQtc2l6ZTogMjNweDtcXG4gICAgb3BhY2l0eTogMC4yO1xcbiAgICBjb250ZW50OiAn4pyTJztcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLmNoZWNrLWRvbmUtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5jaGVjay1kb25lLWJ1dHRvbjpob3Zlcjo6YmVmb3JlIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmNoZWNrLWRvbmUtYnV0dG9uLmNoZWNrZWQ6OmJlZm9yZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5jaGVja2VkIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcblxcbi8qIHdpZHRoICovXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIGhlaWdodDogNXB4O1xcbiAgfVxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICBoZWlnaHQ6IDVweDtcXG4gICAgd2lkdGg6IDhweDtcXG59XFxuXFxuLyogVHJhY2sgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgYmFja2dyb3VuZDogIzIyMjtcXG59XFxuXFxuLyogSGFuZGxlICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigxOSwgMTksIDE5KTtcXG59XFxuXFxuLyogSGFuZGxlIG9uIGhvdmVyICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICM1NTU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uc2Vjb25kLWRpc3BsYXkge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCAvIDMwJSk7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uc2Vjb25kLWRpc3BsYXktbWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zZXQtY2F0ZWdvcnktcHJvamVjdCB7XFxufVxcblxcbi5zZXQtY2F0ZWdvcnktcHJvamVjdC10aXRsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnNldC1jLXAtbGFiZWwge1xcbiAgICBmb250LXNpemU6IDM4cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNldC1jLXAtaW5wdXQge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTE5MTk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnNlbGVjdC1lbGVtZW50LW1lbnUge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG59XFxuXFxuLnNlbGVjdC1lbGVtZW50LW1lbnUgYnV0dG9uOmZpcnN0LW9mLXR5cGUge1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zZWxlY3QtZWxlbWVudC1tZW51IGJ1dHRvbjpsYXN0LW9mLXR5cGUge1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zZW0tb3B0aW9uIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmF5O1xcbn1cXG5cXG4uc2VtLW9wdGlvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMWE7XFxufVxcblxcbi5jbG9zZS1idXR0b24ge1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4O1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uY2xvc2UtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbi5jcmVhdGUtYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyNTI1O1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxufVxcblxcbi5jcmVhdGUtYnV0dG9uOmhvdmVyIHtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KSB0cmFuc2xhdGVZKC0wLjVweCk7XFxufVxcblxcbi5ncmVlbi10ZXh0LWVsZW1lbnQge1xcbiAgICBjb2xvcjogIzdjZDQ3YztcXG59XFxuXFxuLnJlZC10ZXh0LWVsZW1lbnQge1xcbiAgICBjb2xvcjogI2VjNWM1YztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjY3MjJlN2FiYWM5ZTMwYjAyMWJiNGFmNzkyMjg5NDljLnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIyNjZjYTYzMTc3YmNhNmYzMzBhNzRlODNmZGM2MzE3OC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiM2FjZmJjYjgzMjdiZmYyYmE2NGU1NTZiMzI2YWYzMjQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjY0MWY2ZmI5OTQ4ODY1OGI0NGVkOTQyMjhjYzQ3ODUxLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkZjgzNTY1NTk5OWQ3YWVlMzhhODY2ZDg1ZDcxNjAwZS5wbmdcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgbG9naWNNb2R1bGUgfSBmcm9tICcuL2xvZ2ljLmpzJztcbmltcG9ydCAgc2F2ZUljb24gIGZyb20gJy4vZ3JhcGhpY3Mvc2F2ZS1pY29uLnBuZyc7XG5pbXBvcnQgIGVkaXRJY29uMiAgZnJvbSAnLi9ncmFwaGljcy9lZGl0LWljb24ucG5nJztcbmltcG9ydCAgdG9nZ2xlSWNvbiAgZnJvbSAnLi9ncmFwaGljcy90b2dnbGUucG5nJztcblxuXG5leHBvcnQgbGV0IGRvbU1vZHVsZSA9IFxuKGZ1bmN0aW9uKClcbntcblxuICAgIGxldCBsYXN0V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggfHwgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcbiAgICBmdW5jdGlvbiBhZGp1c3RFbGVtZW50VG9XaW5kb3dTaXplKCkgXG4gICAge1xuICAgICAgICBsZXQgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggfHwgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcbiAgICAgICAgbGV0IGNvbnRlbnQgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICAgICAgaWYod2lkdGggPCA2MDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUuc2V0UHJvcGVydHkoJ21hcmdpbi1sZWZ0JywgJzBweCcpO1xuICAgICAgICAgICAgY29udGVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnd2lkdGgnLCAnMTAwJScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoY29udGVudC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdtYXJnaW4tbGVmdCcpICE9ICczMjVweCcgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZ2dsZS1tZW51LWljb24nKS5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCd0cmFuc2Zvcm0nKSAhPSAncm90YXRlKC05MGRlZyknKVxuICAgICAgICAgICAgY29udGVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnbWFyZ2luLWxlZnQnLCAnMzI1cHgnKTtcbiAgICB9XG5cbiAgICBhZGp1c3RFbGVtZW50VG9XaW5kb3dTaXplKCk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgYWRqdXN0RWxlbWVudFRvV2luZG93U2l6ZSgpO1xuICAgIH0sIHRydWUpO1xuXG4gICAgbGV0IHRvZ2dsZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlLW1lbnUnKTtcbiAgICB0b2dnbGVNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PlxuICAgIHtcbiAgICAgICAgbGV0IHRvZ2dsZUljb24gPSB0b2dnbGVNZW51LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUtbWVudS1pY29uJyk7XG4gICAgICAgIGlmKHRvZ2dsZUljb24uc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgndHJhbnNmb3JtJykgPT0gJ3JvdGF0ZSg5MGRlZyknKVxuICAgICAgICB7XG4gICAgICAgICAgICB0b2dnbGVJY29uLnN0eWxlLnNldFByb3BlcnR5KCd0cmFuc2Zvcm0nLCAncm90YXRlKC05MGRlZyknKTtcbiAgICAgICAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUuc2V0UHJvcGVydHkoJ3dpZHRoJywgJ2NhbGMoMTAwJSAtIDI1cHgpJyk7XG4gICAgICAgICAgICBjb250ZW50LnN0eWxlLnNldFByb3BlcnR5KCdtYXJnaW4tbGVmdCcsICcyNXB4Jyk7XG4gICAgICAgICAgICB0b2dnbGVNZW51LmNsb3Nlc3QoJy5zaWRlLW1lbnUnKS5zdHlsZS5zZXRQcm9wZXJ0eSgndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoLTMwMHB4KScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRvZ2dsZUljb24uc3R5bGUuc2V0UHJvcGVydHkoJ3RyYW5zZm9ybScsICdyb3RhdGUoOTBkZWcpJyk7XG4gICAgICAgICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgICAgICAgICBjb250ZW50LnN0eWxlLnNldFByb3BlcnR5KCd3aWR0aCcsICdjYWxjKDEwMCUgLSAzMjVweCknKTtcbiAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUuc2V0UHJvcGVydHkoJ21hcmdpbi1sZWZ0JywgJzMyNXB4Jyk7XG4gICAgICAgICAgICB0b2dnbGVNZW51LmNsb3Nlc3QoJy5zaWRlLW1lbnUnKS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNmb3JtJyk7XG4gICAgICAgICAgICBhZGp1c3RFbGVtZW50VG9XaW5kb3dTaXplKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBcblxuXG4gICAgbGV0IGFkZEZ1bmN0aW9uT24gPSBmYWxzZTtcbiAgICBsZXQgcmVtb3ZlRnVuY3Rpb25PbiA9IGZhbHNlO1xuXG5cbiAgICBsZXQgcGVyaW9kRGF0ZUlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXQtcGVyaW9kJykucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cImRhdGVcIl0nKTtcbiAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIHRvZGF5ID0gIHRvZGF5LmdldEZ1bGxZZWFyKCkgKyAnLScgKyBTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJykgKyAnLScgKyBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgIHBlcmlvZERhdGVJbnB1dHMuZm9yRWFjaCggaW5wdXQgPT5cbiAgICB7XG4gICAgICAgIGlucHV0LnZhbHVlID0gdG9kYXk7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHsgcGVyaW9kRGF0ZUlucHV0Q2hhbmdlQWN0aW9uKCkgfSk7XG4gICAgICAgIHBlcmlvZERhdGVJbnB1dENoYW5nZUFjdGlvbigpO1xuICAgIH0pO1xuICAgIGZ1bmN0aW9uIHBlcmlvZERhdGVJbnB1dENoYW5nZUFjdGlvbigpXG4gICAge1xuICAgICAgICBsZXQgZnJvbSA9IHBlcmlvZERhdGVJbnB1dHNbMF0udmFsdWU7XG4gICAgICAgIGxldCB0byA9IHBlcmlvZERhdGVJbnB1dHNbMV0udmFsdWU7XG4gICAgICAgIGxldCB0b2Rvc0luUGVyaW9kID0gW107XG4gICAgICAgIGxldCBlbGVtZW50Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLXBlcmlvZC1saXN0JykucXVlcnlTZWxlY3RvcignLmVsZW1lbnQtY29udGVudCcpO1xuICAgICAgICBpZihmcm9tIDw9IHRvKVxuICAgICAgICB7XG4gICAgICAgICAgICB0b2Rvc0luUGVyaW9kID0gbG9naWNNb2R1bGUudG9kb3MuZmlsdGVyKCAodG9kbykgPT4gXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICh0b2RvLmR1ZWRhdGUgPj0gZnJvbSAmJiAgdG9kby5kdWVkYXRlIDw9IHRvKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZWxlbWVudENvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIFxuICAgICAgICAgICAgZWxlbWVudENvbnRlbnQudGV4dENvbnRlbnQgPSAnLSc7XG5cbiAgICAgICAgdG9kb3NJblBlcmlvZC5mb3JFYWNoKHRvZG8gPT5cbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IG5ld1RvZG8gPSBjcmVhdGVQcm9qZWN0RWxlbWVudCgtMSwgdG9kbyk7XG4gICAgICAgICAgICBuZXdUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBhZGRUb0VsZW1lbnRBY3Rpb24oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke3RvZG8ucm91dGVbdG9kby5yb3V0ZS5sZW5ndGgtMV19XCJdYCkpfSk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuICAgIGZ1bmN0aW9uIHBlcmlvZENoZWNrUmVtb3ZlZCgpXG4gICAge1xuICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tcGVyaW9kLWxpc3QnKS5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudC1jb250ZW50Jyk7XG5cbiAgICAgICAgaWYoY29udGFpbmVyLmxhc3RDaGlsZClcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWNhdGVnb3J5LWhlYWRlcicpOyAgIFxuICAgICAgICAgICAgbGV0IGRpcmVjdG9yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXJlY3RvcnknKTtcbiAgICAgICAgICAgIGZvcihsZXQgZWxlbWVudCBvZiBlbGVtZW50cylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsZXQgaWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgICAgICAgICAgIGlmKCEoZGlyZWN0b3J5LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtpZH1cIl1gKSkpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZighKGNvbnRhaW5lci5sYXN0Q2hpbGQpKVxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9ICctJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrVmFsaWRpdHlUZXh0RW1wdHkodGV4dElucHV0KVxuICAgIHtcbiAgICAgICAgaWYodGV4dElucHV0LnZhbGlkaXR5LnZhbHVlTWlzc2luZylcbiAgICAgICAge1xuICAgICAgICAgICAgdGV4dElucHV0LnNldEN1c3RvbVZhbGlkaXR5KCdNdXN0IGNvbnNpc3QgYXQgbGVhc3Qgb25lIGNoYXJhY3RlcicpO1xuICAgICAgICAgICAgdGV4dElucHV0LnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGxldCBlZGl0SWNvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZXh0LWVkaXQtYnV0dG9uJykpO1xuICAgIGVkaXRJY29ucy5mb3JFYWNoKGVkaXRJY29uID0+IFxuICAgIHtcbiAgICAgICAgZWRpdEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBcbiAgICAgICAge1xuICAgICAgICAgICAgZWRpdEljb25BZGRFdmVudExpc3RlbmVycyhlZGl0SWNvbik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGZ1bmN0aW9uIGVkaXRJY29uQWRkRXZlbnRMaXN0ZW5lcnMoZWRpdEljb24pXG4gICAge1xuICAgICAgICBsZXQgcGFyZW50ID0gZWRpdEljb24ucGFyZW50RWxlbWVudDtcbiAgICAgICAgbGV0IGlucHV0ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgICAgIGxldCBjb250ZW50RGl2ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXh0LWNvbnRlbnQnKTtcbiAgICAgICAgbGV0IGltZyA9IGVkaXRJY29uLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuICAgICAgICBpZihlZGl0SWNvbi5nZXRBdHRyaWJ1dGUoJ2lkJykgPT0gJ3JlYWQtbW9kZScpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNhdmVJY29uKTtcbiAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdzYXZlIGluZGljYXRvciBpY29uJyk7XG4gICAgICAgICAgICBlZGl0SWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VkaXQtbW9kZScpO1xuICAgICAgICAgICAgY29udGVudERpdi5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgICAgICBpbnB1dC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnZGlzcGxheScpO1xuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBjb250ZW50RGl2LnRleHRDb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoZWRpdEljb24uZ2V0QXR0cmlidXRlKCdpZCcpID09ICdlZGl0LW1vZGUnKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZihjaGVja1ZhbGlkaXR5VGV4dEVtcHR5KGlucHV0KSB8fCBpbnB1dC5nZXRBdHRyaWJ1dGUoJ3ZhbGlkYXRlLWVtcHR5JykgPT0gJ2ZhbHNlJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb250ZW50RGl2LnRleHRDb250ZW50ID0gaW5wdXQudmFsdWU7XG4gICAgICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgZWRpdEljb24yKTtcbiAgICAgICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdhbHQnLCAnZWRpdCBpbmRpY2F0b3IgaWNvbicpO1xuICAgICAgICAgICAgICAgIGVkaXRJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAncmVhZC1tb2RlJyk7XG4gICAgICAgICAgICAgICAgY29udGVudERpdi5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnZGlzcGxheScpO1xuICAgICAgICAgICAgICAgIGlucHV0LnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBjaGVja0J1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVjay1kb25lLWJ1dHRvbicpKS5maWx0ZXIoIChjYikgPT4ge3JldHVybiBjYi5nZXRBdHRyaWJ1dGUoJ2lkJykgIT0gJ21haW5DQid9KTtcbiAgICBjaGVja0J1dHRvbnMuZm9yRWFjaChjaGVja0J1dHRvbiA9PiBcbiAgICB7XG4gICAgICAgIGNoZWNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICAgICAge1xuICAgICAgICAgICAgY2hlY2tCdXR0b25BZGRFdmVudExpc3RlbmVycyhjaGVja0J1dHRvbik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGZ1bmN0aW9uIGNoZWNrQnV0dG9uQWRkRXZlbnRMaXN0ZW5lcnMoY2hlY2tCdXR0b24pXG4gICAge1xuICAgICAgICBpZighKGNoZWNrQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnY2hlY2tlZCcpKSlcbiAgICAgICAge1xuICAgICAgICAgICAgY2hlY2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoY2hlY2tCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVja2VkJykpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNoZWNrQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrZWQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBtYWluQ2hlY2tCdXR0b25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjbWFpbkNCJykpO1xuICAgIG1haW5DaGVja0J1dHRvbnMuZm9yRWFjaChjaGVja0J1dHRvbiA9PiBcbiAgICB7XG4gICAgICAgIGNoZWNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICAgICAge1xuICAgICAgICAgICAgbWFpbkNCQWRkRXZlbnRMaXN0ZW5lcnMoY2hlY2tCdXR0b24pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBmdW5jdGlvbiBtYWluQ0JBZGRFdmVudExpc3RlbmVycyhjaGVja0J1dHRvbilcbiAgICB7XG4gICAgICAgIGxldCB0b2RvID0gY2hlY2tCdXR0b24uY2xvc2VzdCgnZGl2LnRvZG8nKTtcbiAgICAgICAgbGV0IGRhdGVJbnB1dCA9IHRvZG8ucXVlcnlTZWxlY3RvcignLmRkYXRlLWlucHV0Jyk7XG4gICAgICAgIGlmKGNoZWNrQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnY2hlY2tlZCcpKVxuICAgICAgICB7XG4gICAgICAgICAgICBjaGVja0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdjaGVja2VkJyk7XG4gICAgICAgICAgICB0b2RvLmNsYXNzTGlzdC5yZW1vdmUoJ2RvbmUnKTtcbiAgICAgICAgICAgIGRhdGVJbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ3JlYWRvbmx5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZighKGNoZWNrQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnY2hlY2tlZCcpKSlcbiAgICAgICAge1xuICAgICAgICAgICAgY2hlY2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpO1xuICAgICAgICAgICAgbGV0IGljb25zID0gdG9kby5xdWVyeVNlbGVjdG9yQWxsKCcudGV4dC1lZGl0LWJ1dHRvbicpO1xuICAgICAgICAgICAgaWNvbnMuZm9yRWFjaCggaWNvbiA9PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKGljb24uZ2V0QXR0cmlidXRlKCdpZCcpID09ICdlZGl0LW1vZGUnKVxuICAgICAgICAgICAgICAgICAgICBlZGl0SWNvbkFkZEV2ZW50TGlzdGVuZXJzKGljb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICcnKTtcbiAgICAgICAgICAgIHRvZG8uY2xhc3NMaXN0LmFkZCgnZG9uZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHByaW9yaXR5U3Bpbm5lcnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFuZ2UtcHJpb3JpdHknKSk7XG4gICAgcHJpb3JpdHlTcGlubmVycy5mb3JFYWNoKHByaW9yaXR5U3Bpbm5lciA9PiBcbiAgICB7XG4gICAgICAgIHByaW9yaXR5U3Bpbm5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHByaW9yaXR5U3Bpbm5lcnNBZGRFdmVudExpc3RlbmVycyhwcmlvcml0eVNwaW5uZXIpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBmdW5jdGlvbiBwcmlvcml0eVNwaW5uZXJzQWRkRXZlbnRMaXN0ZW5lcnMocHJpb3JpdHlTcGlubmVyKVxuICAgIHtcbiAgICAgICAgbGV0IGlkID0gcHJpb3JpdHlTcGlubmVyLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgbGV0IHByaW9yaXR5Q29udGVudCA9IHByaW9yaXR5U3Bpbm5lci5jbG9zZXN0KCcudG9kby1wcmlvcml0eS1jb250YWluZXInKS5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHktdmFsdWUnKTtcbiAgICAgICAgbGV0IHZhbHVlID0gcHJpb3JpdHlDb250ZW50LnRleHRDb250ZW50O1xuXG4gICAgICAgIGlmKGlkID09ICdzdWJzJylcbiAgICAgICAge1xuICAgICAgICAgICAgc3dpdGNoKHZhbHVlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2xvdycgOiB2YWx1ZSA9ICdoaWdoJzsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbm9ybWFsJyA6IHZhbHVlID0gJ2xvdyc7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2hpZ2gnIDogdmFsdWUgPSAnbm9ybWFsJzsgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIGlmKGlkID09ICdhZGQnKVxuICAgICAgICB7XG4gICAgICAgICAgICBzd2l0Y2godmFsdWUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2FzZSAnbG93JyA6IHZhbHVlID0gJ25vcm1hbCc7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ25vcm1hbCcgOiB2YWx1ZSA9ICdoaWdoJzsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnaGlnaCcgOiB2YWx1ZSA9ICdsb3cnOyBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwcmlvcml0eUNvbnRlbnQudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBsZXQgdG9nZ2xlQnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZ2dsZS1pbWcnKSk7XG4gICAgdG9nZ2xlQnV0dG9ucy5mb3JFYWNoKCAodG9nZ2xlQnV0dG9uKSA9PiBcbiAgICB7XG4gICAgICAgIHRvZ2dsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtwcm9qZWN0VG9nZ2xlc0FkZEV2ZW50TGlzdGVuZXJzKHRvZ2dsZUJ1dHRvbil9KTtcbiAgICB9KTtcbiAgICBmdW5jdGlvbiBwcm9qZWN0VG9nZ2xlc0FkZEV2ZW50TGlzdGVuZXJzKHRvZ2dsZUJ1dHRvbilcbiAgICB7XG4gICAgICAgIGxldCBlbGVtZW50c1RvVG9nZ2xlID0gdG9nZ2xlQnV0dG9uLmNsb3Nlc3QoJyN0b2dnbGUtY29udGFpbmVyJykucXVlcnlTZWxlY3RvcignI3RvZ2dsYWJsZScpIC5xdWVyeVNlbGVjdG9yQWxsKCc6c2NvcGUgPiAqJyk7XG4gICAgICAgIGlmKCEodG9nZ2xlQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygncm90YXRlZCcpKSlcbiAgICAgICAge1xuICAgICAgICAgICAgdG9nZ2xlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3JvdGF0ZWQnKVxuICAgICAgICAgICAgZWxlbWVudHNUb1RvZ2dsZS5mb3JFYWNoKCAoZWxlbWVudFRvVG9nZ2xlKSA9PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRUb1RvZ2dsZS5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRvZ2dsZUJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3JvdGF0ZWQnKSlcbiAgICAgICAge1xuICAgICAgICAgICAgdG9nZ2xlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3JvdGF0ZWQnKVxuICAgICAgICAgICAgZWxlbWVudHNUb1RvZ2dsZS5mb3JFYWNoKCAoZWxlbWVudFRvVG9nZ2xlKSA9PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRUb1RvZ2dsZS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnZGlzcGxheScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgYWRkQ2hlY2tib3hCdXR0b25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWRkLWNoZWNrYm94JykpO1xuICAgIGFkZENoZWNrYm94QnV0dG9ucy5mb3JFYWNoKCBhZGRDaGVja2JveEJ1dHRvbiA9PlxuICAgIHtcbiAgICAgICAgYWRkQ2hlY2tib3hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgICAgICB7XG4gICAgICAgICAgICBhZGRDaGVja2JveEJ1dHRvbkFjdGlvbihhZGRDaGVja2JveEJ1dHRvbik7XG4gICAgICAgIH0pOyBcbiAgICB9KTtcbiAgICBmdW5jdGlvbiBhZGRDaGVja2JveEJ1dHRvbkFjdGlvbihhZGRDaGVja2JveEJ1dHRvbikgXG4gICAge1xuICAgICAgICBsZXQgY2hlY2tsaXN0Q29udGFpbmVyID0gYWRkQ2hlY2tib3hCdXR0b24uY2xvc2VzdCgnLmNoZWNrbGlzdC1jb250YWluZXInKVxuICAgICAgICBsZXQgY2hlY2tsaXN0ID0gY2hlY2tsaXN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2xpc3QnKTtcbiAgICAgICAgbGV0IHRpdGxlSW5wdXQgPSBjaGVja2xpc3RDb250YWluZXIucXVlcnlTZWxlY3RvcignLmNoZWNrYm94LXRpdGxlLWlucHV0Jyk7XG5cbiAgICAgICAgaWYoY2hlY2tWYWxpZGl0eVRleHRFbXB0eSh0aXRsZUlucHV0KSlcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGNoZWNrYm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjaGVja2JveENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjaGVja2JveC1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgIGxldCBjaGVja2JveEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNoZWNrYm94QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NoZWNrLWRvbmUtYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgY2hlY2tCdXR0b25zLnB1c2goY2hlY2tib3hCdXR0b24pO1xuICAgICAgICAgICAgICAgIGNoZWNrYm94QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge2NoZWNrQnV0dG9uQWRkRXZlbnRMaXN0ZW5lcnMoY2hlY2tib3hCdXR0b24pfSk7XG5cbiAgICAgICAgICAgICAgICBsZXQgY2hlY2tib3hMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNoZWNrYm94TGFiZWwuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gtbGFiZWwnKTtcblxuICAgICAgICAgICAgICAgIGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94QnV0dG9uKTtcbiAgICAgICAgICAgICAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveExhYmVsKTtcbiAgICAgICAgICAgICAgICBjaGVja2JveExhYmVsLnRleHRDb250ZW50ID0gdGl0bGVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aXRsZUlucHV0LnZhbHVlID0gJyc7XG5cbiAgICAgICAgICAgICAgICBjaGVja2xpc3QuaW5zZXJ0QmVmb3JlKGNoZWNrYm94Q29udGFpbmVyLCBjaGVja2xpc3QucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1jaGVja2JveCcpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBjbG9zZVNEQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlLXNlY29uZC1kaXNwbGF5Jyk7XG4gICAgY2xvc2VTREJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAge1xuICAgICAgICBjbG9zZVNEQnV0dG9uQWN0aW9ucyhjbG9zZVNEQnV0dG9uKSBcbiAgICB9KTtcbiAgICBmdW5jdGlvbiBjbG9zZVNEQnV0dG9uQWN0aW9ucyhjbG9zZVNEQnV0dG9uKSBcbiAgICB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWNvbmQtZGlzcGxheScpLnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTsgXG4gICAgfVxuXG4gICBnZW5lcmF0ZURpcmVjdG9yeShsb2dpY01vZHVsZS5yb290KTsgLy8hISFcblxuICAgIGxldCBhZGRUb0VsZW1lbnRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0ZWdvcnknKSkuY29uY2F0KEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKSkpO1xuICAgIGFkZFRvRWxlbWVudHMuZm9yRWFjaCggYWRkVG9FbGVtZW50ID0+XG4gICAge1xuICAgICAgICBhZGRUb0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUpID0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGFkZFRvRWxlbWVudEFjdGlvbihhZGRUb0VsZW1lbnQpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gYWRkVG9FbGVtZW50QWN0aW9uKGFkZFRvRWxlbWVudClcbiAgICB7XG4gICAgICAgIGlmKGFkZEZ1bmN0aW9uT24gPT0gZmFsc2UgJiYgcmVtb3ZlRnVuY3Rpb25PbiA9PSBmYWxzZSlcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGxhc3REaXNwbGF5ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1kaXNwbGF5ZWQ9XCJ0cnVlXCJdJyk7XG4gICAgICAgICAgICBpZihsYXN0RGlzcGxheWVkKVxuICAgICAgICAgICAgICAgIGxhc3REaXNwbGF5ZWQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWRpc3BsYXllZCcpO1xuICAgICAgICAgICAgYWRkVG9FbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1kaXNwbGF5ZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgZ2VuZXJhdGVEaXJlY3RvcnlFbGVtZW50KGFkZFRvRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVEaXJlY3RvcnlFbGVtZW50KGFkZFRvRWxlbWVudClcbiAgICB7XG4gICAgICAgIGxldCBtYWluU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXNlY3Rpb24td2luZG93Jyk7XG4gICAgICAgIGxldCBzdWJTZWN0aW9uID0gbWFpblNlY3Rpb24ucXVlcnlTZWxlY3RvcignLnN1Yi1zZWN0aW9uJyk7XG4gICAgICAgIGlmKHN1YlNlY3Rpb24ubGFzdENoaWxkKVxuICAgICAgICAgICAgcmVtb3ZlQ2hpbGRyZW4oc3ViU2VjdGlvbik7XG4gICAgICAgIGFkZFRvRWxlbWVudCA9IGxvZ2ljTW9kdWxlLmZpbmRCeUlEKGdldEVsZW1lbnRSb3V0ZShhZGRUb0VsZW1lbnQpKTtcbiAgICAgICAgbWFpblNlY3Rpb24ucXVlcnlTZWxlY3RvcignLm1haW4tc2VjdGlvbi1oZWFkaW5nJykudGV4dENvbnRlbnQgPSBhZGRUb0VsZW1lbnQudGl0bGU7XG4gICAgICAgIGZvcihsZXQgZWxlbWVudCBvZiBhZGRUb0VsZW1lbnQuY29udGVudHMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKGVsZW1lbnQuY29uc3RydWN0b3IubmFtZSA9PSAnUHJvamVjdCcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAndG9nZ2xlLWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdWJIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7ICBcbiAgICAgICAgICAgICAgICAgICAgc3ViSGVhZGluZy5jbGFzc0xpc3QuYWRkKCdzdWItaGVhZGluZycpICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b2dnbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LmFkZCgndG9nZ2xlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9nZ2xlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZUltZy5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtaW1nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgdG9nZ2xlSWNvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlSW1nLnNldEF0dHJpYnV0ZSgnYWx0JywnaWNvbiBvZiBhIHRvZ2dsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZUJ1dHRvbnMucHVzaCh0b2dnbGVJbWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZUltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgcHJvamVjdFRvZ2dsZXNBZGRFdmVudExpc3RlbmVycyh0b2dnbGVJbWcpfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGUuYXBwZW5kQ2hpbGQodG9nZ2xlSW1nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBlbGVtZW50LnRpdGxlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJIZWFkaW5nLmFwcGVuZENoaWxkKHRvZ2dsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJIZWFkaW5nLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9kb0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0xpc3QuY2xhc3NMaXN0LmFkZCgndG9kby1saXN0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9MaXN0LnNldEF0dHJpYnV0ZSgnaWQnLCAndG9nZ2xhYmxlJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgdG9kbyBvZiBlbGVtZW50LmNvbnRlbnRzKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3VG9kbyA9IGNyZWF0ZVRvZG8odG9kbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvTGlzdC5hcHBlbmRDaGlsZChuZXdUb2RvKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQoc3ViSGVhZGluZyk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQodG9kb0xpc3QpO1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Yi1zZWN0aW9uJykuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGVsZW1lbnQuY29uc3RydWN0b3IubmFtZSA9PSAnQ2F0ZWdvcnknKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCBzdWJIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgc3ViSGVhZGluZy5jbGFzc0xpc3QuYWRkKCdzdWItaGVhZGluZycpXG4gICAgICAgICAgICAgICAgc3ViSGVhZGluZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpZCA9IGVsZW1lbnQuaWQ7XG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRGlyZWN0b3J5RWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7aWR9XCJgKSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBlbGVtZW50LnRpdGxlO1xuXG4gICAgICAgICAgICAgICAgICAgIHN1YkhlYWRpbmcuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Yi1zZWN0aW9uJykuYXBwZW5kQ2hpbGQoc3ViSGVhZGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCB0b2RvID0gY3JlYXRlVG9kbyhlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBzdWJTZWN0aW9uLmFwcGVuZENoaWxkKHRvZG8pO1xuICAgICAgICAgICAgICAgIHRvZG8ucXVlcnlTZWxlY3RvcignLmRkYXRlLWlucHV0JykudmFsdWUgPSBlbGVtZW50LmR1ZWRhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGxldCBhZGRGdW5jdGlvbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZnVuY3Rpb24nKTtcbiAgICBhZGRGdW5jdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAge1xuICAgICAgICBhZGRGdW5jdGlvbihhZGRUb0VsZW1lbnRzKTtcbiAgICB9KTtcbiAgICBmdW5jdGlvbiBhZGRGdW5jdGlvbihhZGRUb0VsZW1lbnRzKVxuICAgIHtcbiAgICAgICAgaWYoYWRkRnVuY3Rpb25PbiA9PSBmYWxzZSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYocmVtb3ZlRnVuY3Rpb25PbiA9PSB0cnVlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR1cm5PZmZSZW1vdmVGdW5jdGlvbihyZW1vdmVFbGVtZW50cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhZGRGdW5jdGlvbk9uID0gdHJ1ZTtcbiAgICAgICAgICAgIGFkZFRvRWxlbWVudHMuZm9yRWFjaCggKGFkZFRvRWxlbWVudCkgPT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhZGRUb0VsZW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY2F0ZWdvcnktdGl0bGUnKS5jbGFzc0xpc3QuYWRkKCdncmVlbi10ZXh0LWVsZW1lbnQnKTtcblxuICAgICAgICAgICAgICAgIGFkZFRvRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoYWRkRnVuY3Rpb25PbiA9PSB0cnVlKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaWQgPSBhZGRUb0VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcm91dGUgPSBnZXRFbGVtZW50Um91dGUoYWRkVG9FbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJlbnQgPSBsb2dpY01vZHVsZS5maW5kQnlJRChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWVudSA9IGdlbmVyYXRlRWxlbWVudE1lbnUocGFyZW50LCBhZGRUb0VsZW1lbnQsIHJvdXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvcHRpb25zID0gbWVudS5xdWVyeVNlbGVjdG9yQWxsKCcuc2VtLW9wdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHVybk9mZkFkZEZ1bmN0aW9uKGFkZFRvRWxlbWVudHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBcbiAgICAgICAgICAgIHR1cm5PZmZBZGRGdW5jdGlvbihhZGRUb0VsZW1lbnRzKTtcblxuICAgIH1cbiAgICBmdW5jdGlvbiB0dXJuT2ZmQWRkRnVuY3Rpb24oYWRkVG9FbGVtZW50cylcbiAgICB7XG4gICAgICAgIGFkZEZ1bmN0aW9uT24gPSBmYWxzZTtcbiAgICAgICAgYWRkVG9FbGVtZW50cy5mb3JFYWNoKCBhZGRUb0VsZW1lbnQgPT5cbiAgICAgICAge1xuICAgICAgICAgICAgYWRkVG9FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNhdGVnb3J5LXRpdGxlJykuY2xhc3NMaXN0LnJlbW92ZSgnZ3JlZW4tdGV4dC1lbGVtZW50Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzZXRTZWNvbmREaXNwbGF5KClcbiAgICB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWNvbmQtZGlzcGxheScpLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVFbGVtZW50TWVudShwYXJlbnQsIGNvbnRhaW5lciwgcm91dGUpXG4gICAge1xuICAgICAgICBzZXRTZWNvbmREaXNwbGF5KCk7XG4gICAgICAgIGxldCBvcHRpb247XG4gICAgICAgIGxldCBjYW5Db250ZW50ID0gcGFyZW50LmNhbkNvbnRlbnQ7XG4gICAgICAgIGxldCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdC1lbGVtZW50LW1lbnUnKTtcbiAgICAgICAgbWVudS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgIGZvcihsZXQgY29udGVudCBvZiBjYW5Db250ZW50KVxuICAgICAgICB7XG4gICAgICAgICAgICBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIG9wdGlvbi5jbGFzc0xpc3QuYWRkKCdzZW0tb3B0aW9uJyk7XG4gICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICAgICAgb3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBtZW51LnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICAgICAgICAgICBsZXQgY3JlYXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1idXR0b24nKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVCdXR0b24uc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2Rpc3BsYXknKTtcbiAgICAgICAgICAgICAgICBpZihjb250ZW50ID09ICdjYXRlZ29yeScgfHwgY29udGVudCA9PSAncHJvamVjdCcpXG4gICAgICAgICAgICAgICAgeyAgIFxuICAgICAgICAgICAgICAgICAgICBsZXQgdGl0bGVJbnB1dE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0LWNhdGVnb3J5LXByb2plY3QtdGl0bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVJbnB1dE1lbnUuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2Rpc3BsYXknKTtcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VTREJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlSW5wdXRNZW51LnF1ZXJ5U2VsZWN0b3IoJy5zZXQtYy1wLWlucHV0JykudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlSW5wdXRNZW51LnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZUJ1dHRvbkFjdGlvbihjcmVhdGVCdXR0b24sIHBhcmVudCwgY29udGVudCwgY29udGFpbmVyLCByb3V0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIHtvbmNlOiB0cnVlfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWNvbmQtZGlzcGxheScpLnF1ZXJ5U2VsZWN0b3IoJy50b2RvJyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG8uc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2Rpc3BsYXknKTtcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VTREJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyQWRkVG9kbyh0b2RvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZG8uc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlQnV0dG9uQWN0aW9uKGNyZWF0ZUJ1dHRvbiwgcGFyZW50LCBjb250ZW50LCBjb250YWluZXIsIHJvdXRlLCBnZXRUb2RvVmFsdWVzKHRvZG8pKTtcbiAgICAgICAgICAgICAgICAgICAgfSwge29uY2U6IHRydWV9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbWVudS5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGNsb3NlU0RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgICAgICB7XG4gICAgICAgICAgICByZW1vdmVDaGlsZHJlbihtZW51KTtcbiAgICAgICAgfSwgeyBvbmNlOiB0cnVlIH0pO1xuICAgICAgICByZXR1cm4gbWVudTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVtb3ZlQ2hpbGRyZW4ocGFyZW50KVxuICAgIHtcbiAgICAgICAgbGV0IHJlbW92ZWQgPSBbXTtcbiAgICAgICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSBcbiAgICAgICAge1xuICAgICAgICAgICAgcmVtb3ZlZC5wdXNoKHBhcmVudC5sYXN0Q2hpbGQpO1xuICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5sYXN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZW1vdmVkO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZURpcmVjdG9yeShkaXJlY3RvcnkpXG4gICAge1xuICAgICAgICBsZXQgZGlyZWN0b3J5Q29udGVudCA9IGRpcmVjdG9yeS5jb250ZW50cztcblxuICAgICAgICAgICAgZm9yKGxldCBlbGVtZW50IG9mIGRpcmVjdG9yeUNvbnRlbnQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYoZWxlbWVudC5jYW5Db250ZW50KVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoZWxlbWVudC5jYW5Db250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBbMF0gPT0gJ3Byb2plY3QnKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVDYXRlZ29yeShkaXJlY3RvcnksIGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoZWxlbWVudC5jYW5Db250ZW50WzBdID09ICd0b2RvJylcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlUHJvamVjdChkaXJlY3RvcnksIGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRGlyZWN0b3J5KGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVByb2plY3RFbGVtZW50KGRpcmVjdG9yeS5pZCwgZWxlbWVudClcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50Q29udGFpbmVyKGRpcmVjdG9yeSwgZWxlbWVudClcbiAgICB7XG4gICAgICAgIGxldCBlbGVtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVsZW1lbnRDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICd0b2dnbGUtY29udGFpbmVyJyk7XG4gICAgICAgIGVsZW1lbnRDb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgZWxlbWVudC5pZCk7XG4gICAgICAgIGVsZW1lbnRDb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLWFkdG8nLCAndHJ1ZScpO1xuXG4gICAgICAgICAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jYXRlZ29yeS1oZWFkZXInKTtcblxuICAgICAgICAgICAgICAgIGxldCB0b2dnbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LmFkZCgndG9nZ2xlJylcblxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9nZ2xlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUltZy5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtaW1nJyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHRvZ2dsZUljb24pO1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVJbWcuc2V0QXR0cmlidXRlKCdhbHQnLCAnaWNvbiBvZiBhIHRvZ2dsZScpO1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVCdXR0b25zLnB1c2godG9nZ2xlSW1nKTtcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlSW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge3Byb2plY3RUb2dnbGVzQWRkRXZlbnRMaXN0ZW5lcnModG9nZ2xlSW1nKX0pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeS1wcm9qZWN0LWljb24nKTtcblxuICAgICAgICAgICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY2F0ZWdvcnktdGl0bGUnKTtcbiAgICAgICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGVsZW1lbnQudGl0bGU7XG5cbiAgICAgICAgICAgIGxldCBlbGVtZW50Q29udGFpbmVyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZWxlbWVudENvbnRhaW5lckNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZWxlbWVudC1jb250ZW50Jyk7XG4gICAgICAgICAgICBlbGVtZW50Q29udGFpbmVyQ29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZ2dsYWJsZScpO1xuXG4gICAgICAgICAgICB0b2dnbGUuYXBwZW5kQ2hpbGQodG9nZ2xlSW1nKTtcbiAgICAgICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0b2dnbGUpO1xuICAgICAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGljb24pO1xuICAgICAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgICAgIGVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICAgICAgICAgIGVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudENvbnRhaW5lckNvbnRlbnQpO1xuXG4gICAgICAgIGxldCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7ZGlyZWN0b3J5LmlkfVwiXWApLnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50LWNvbnRlbnQnKTtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnRDb250YWluZXIpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRDb250YWluZXI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNhdGVnb3J5KGRpcmVjdG9yeSwgZWxlbWVudClcbiAgICB7XG4gICAgICAgIGxldCBjYXRlZ29yeSA9IGNyZWF0ZUVsZW1lbnRDb250YWluZXIoZGlyZWN0b3J5LCBlbGVtZW50KTtcbiAgICAgICAgY2F0ZWdvcnkuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnknKTtcbiAgICAgICAgY2F0ZWdvcnkucXVlcnlTZWxlY3RvcignLmNhdGVnb3J5LXByb2plY3QtaWNvbicpLnRleHRDb250ZW50ID0gJ0MnO1xuICAgICAgICByZXR1cm4gY2F0ZWdvcnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoZGlyZWN0b3J5LCBlbGVtZW50KVxuICAgIHtcbiAgICAgICAgbGV0IHByb2plY3QgPSBjcmVhdGVFbGVtZW50Q29udGFpbmVyKGRpcmVjdG9yeSwgZWxlbWVudCk7XG4gICAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgICAgICBwcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeS1wcm9qZWN0LWljb24nKS50ZXh0Q29udGVudCA9ICdQJztcbiAgICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RFbGVtZW50KGRpcmVjdG9yeSwgZWxlbWVudClcbiAgICB7XG4gICAgICAgIGxldCBwcm9qZWN0RWxlbWVudEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0RWxlbWVudEhlYWRlci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNhdGVnb3J5LWhlYWRlcicpO1xuICAgICAgICBwcm9qZWN0RWxlbWVudEhlYWRlci5zZXRBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudCcsICd0b2RvJyk7XG4gICAgICAgIHByb2plY3RFbGVtZW50SGVhZGVyLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGVsZW1lbnQuaWQpO1xuXG4gICAgICAgICAgICBsZXQgcHJvamVjdEVsZW1lbnRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwcm9qZWN0RWxlbWVudEljb24uY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnktcHJvamVjdC1pY29uJyk7XG4gICAgICAgICAgICBwcm9qZWN0RWxlbWVudEljb24udGV4dENvbnRlbnQgPSAnVCc7XG5cbiAgICAgICAgICAgIGxldCBwcm9qZWN0RWxlbWVudFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwcm9qZWN0RWxlbWVudFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY2F0ZWdvcnktdGl0bGUnKTtcbiAgICAgICAgICAgIHByb2plY3RFbGVtZW50VGl0bGUudGV4dENvbnRlbnQgPSBlbGVtZW50LnRpdGxlO1xuXG4gICAgICAgICAgICBwcm9qZWN0RWxlbWVudEhlYWRlci5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbWVudEljb24pO1xuICAgICAgICAgICAgcHJvamVjdEVsZW1lbnRIZWFkZXIuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnRUaXRsZSk7XG4gICAgICAgIFxuICAgICAgICBsZXQgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke2RpcmVjdG9yeX1cIl1gKS5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudC1jb250ZW50Jyk7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbWVudEhlYWRlcik7XG4gICAgICAgIC8vcGVyaW9kRGF0ZUlucHV0Q2hhbmdlQWN0aW9uKCk7XG5cbiAgICAgICAgcmV0dXJuIHByb2plY3RFbGVtZW50SGVhZGVyO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjbGVhckFkZFRvZG8odG9kbylcbiAgICB7XG4gICAgICAgIHRvZG8ucXVlcnlTZWxlY3RvcignLnRpdGxlLWlucHV0JykudmFsdWUgPSAnJztcbiAgICAgICAgdG9kby5xdWVyeVNlbGVjdG9yKCcuZGRhdGUtaW5wdXQnKS52YWx1ZSA9ICcnO1xuICAgICAgICB0b2RvLnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eS12YWx1ZScpLnZhbHVlID0gJ25vcm1hbCc7XG4gICAgICAgIHRvZG8ucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uLWlucHV0JykudmFsdWUgPSAnJztcbiAgICAgICAgbGV0IGNoZWNrbGlzdCA9IHRvZG8ucXVlcnlTZWxlY3RvcignLmNoZWNrbGlzdCcpO1xuICAgICAgICBsZXQgY2hla2JveGVzID0gY2hlY2tsaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveC1jb250YWluZXInKTtcbiAgICAgICAgZm9yKGxldCBjaGVja2JveCBvZiBjaGVrYm94ZXMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNoZWNrbGlzdC5yZW1vdmVDaGlsZChjaGVja2JveCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlVG9kbyh0b2RvVmFsdWVzKVxuICAgIHtcbiAgICAgICAgbGV0IHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKCd0b2RvJyk7XG4gICAgICAgIFxuICAgICAgICAgICAgbGV0IHRvZG9NYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0b2RvTWFpbi5jbGFzc0xpc3QuYWRkKCd0b2RvLW1haW4nKTtcblxuICAgICAgICAgICAgICAgIGxldCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LmFkZCgndG9kby10aXRsZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b2RvVGl0bGVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgndG9kby10aXRsZS1jb250ZW50Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZUNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICd0ZXh0LWNvbnRlbnQnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlQ29udGVudC50ZXh0Q29udGVudCA9IHRvZG9WYWx1ZXMudGl0bGU7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvZG9UaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgndGl0bGUtaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnMjAnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBub25lJyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7ICAgXG4gICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9WYWx1ZXMudGl0bGUgPSB0b2RvVGl0bGVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHRpdGxlRWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZUVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgndGV4dC1lZGl0LWJ1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZUVkaXRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdyZWFkLW1vZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGl0bGVFZGl0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVFZGl0SWNvbi5jbGFzc0xpc3QuYWRkKCdlZGl0LWljb24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlRWRpdEljb24uc2V0QXR0cmlidXRlKCdzcmMnLCBlZGl0SWNvbjIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVFZGl0SWNvbi5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdlZGl0IGluZGljYXRvciBpY29uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgZWRpdEljb25zLnB1c2godGl0bGVFZGl0QnV0dG9uKTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBlZGl0SWNvbkFkZEV2ZW50TGlzdGVuZXJzKHRpdGxlRWRpdEJ1dHRvbil9KTtcblxuICAgICAgICAgICAgICAgICAgICB0aXRsZUVkaXRCdXR0b24uYXBwZW5kQ2hpbGQodGl0bGVFZGl0SWNvbik7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZS5hcHBlbmRDaGlsZCh0b2RvVGl0bGVDb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlLmFwcGVuZENoaWxkKHRvZG9UaXRsZUlucHV0KTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlLmFwcGVuZENoaWxkKHRpdGxlRWRpdEJ1dHRvbik7XG5cblxuICAgICAgICAgICAgICAgIGxldCB0b2RvRHVlZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHRvZG9EdWVkYXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZHVlZGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b2RvRHVlZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0R1ZWRhdGVMYWJlbC5jbGFzc0xpc3QuYWRkKCd0b2RvLWxhYmVsJyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EdWVkYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZHVlRGF0ZScpXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EdWVkYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIGRhdGUnO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b2RvRHVlZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0R1ZWRhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdkZGF0ZS1pbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvRHVlZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJylcbiAgICAgICAgICAgICAgICAgICAgdG9kb0R1ZWRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2R1ZS1kYXRlJylcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGVWYWx1ZSA9IHRvZG9WYWx1ZXMuZHVlZGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0R1ZWRhdGVJbnB1dC52YWx1ZSA9IGRhdGVWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0R1ZWRhdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvVmFsdWVzLmR1ZWRhdGUgPSB0b2RvRHVlZGF0ZUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGVyaW9kRGF0ZUlucHV0Q2hhbmdlQWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EdWVkYXRlLmFwcGVuZENoaWxkKHRvZG9EdWVkYXRlTGFiZWwpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvRHVlZGF0ZS5hcHBlbmRDaGlsZCh0b2RvRHVlZGF0ZUlucHV0KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IHRvZG9Qcmlvcml0eUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLXByaW9yaXR5LWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGFuZ2VQcmlvcml0eVN1YnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlUHJpb3JpdHlTdWJzLmNsYXNzTGlzdC5hZGQoJ2NoYW5nZS1wcmlvcml0eScsICdyb3VuZC1idXR0b24nKVxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VQcmlvcml0eVN1YnMuc2V0QXR0cmlidXRlKCdpZCcsICdzdWJzJyk7XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5U3Bpbm5lcnMucHVzaChjaGFuZ2VQcmlvcml0eVN1YnMpO1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VQcmlvcml0eVN1YnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlTcGlubmVyc0FkZEV2ZW50TGlzdGVuZXJzKGNoYW5nZVByaW9yaXR5U3Vicyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvVmFsdWVzLnByaW9yaXR5ID0gY2hhbmdlUHJpb3JpdHlTdWJzLmNsb3Nlc3QoJy50b2RvLXByaW9yaXR5LWNvbnRhaW5lcicpLnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eS12YWx1ZScpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0b2RvLXByaW9yaXR5JylcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRvZG9Qcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHlMYWJlbC5jbGFzc0xpc3QuYWRkKCd0b2RvLWxhYmVsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eSc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b2RvUHJpb3JpdHlWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5VmFsdWUuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktdmFsdWUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eVZhbHVlLnRleHRDb250ZW50ID0gdG9kb1ZhbHVlcy5wcmlvcml0eTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGFuZ2VQcmlvcml0eUFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VQcmlvcml0eUFkZC5jbGFzc0xpc3QuYWRkKCdjaGFuZ2UtcHJpb3JpdHknLCAncm91bmQtYnV0dG9uJylcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlUHJpb3JpdHlBZGQuc2V0QXR0cmlidXRlKCdpZCcsICdhZGQnKTtcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlTcGlubmVycy5wdXNoKGNoYW5nZVByaW9yaXR5QWRkKTtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlUHJpb3JpdHlBZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlTcGlubmVyc0FkZEV2ZW50TGlzdGVuZXJzKGNoYW5nZVByaW9yaXR5QWRkKVxuICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ZhbHVlcy5wcmlvcml0eSA9IGNoYW5nZVByaW9yaXR5QWRkLmNsb3Nlc3QoJy50b2RvLXByaW9yaXR5LWNvbnRhaW5lcicpLnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eS12YWx1ZScpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHkuYXBwZW5kQ2hpbGQodG9kb1ByaW9yaXR5TGFiZWwpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHkuYXBwZW5kQ2hpbGQodG9kb1ByaW9yaXR5VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hhbmdlUHJpb3JpdHlTdWJzKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9Qcmlvcml0eSk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGFuZ2VQcmlvcml0eUFkZCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrRG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNoZWNrRG9uZS5jbGFzc0xpc3QuYWRkKCdjaGVjay1kb25lJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoZWNrRG9uZUJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBjaGVja0RvbmVCdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2hlY2stZG9uZS1idXR0b24tY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGVja0RvbmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrRG9uZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjaGVjay1kb25lLWJ1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tEb25lQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbkNCJylcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5DaGVja0J1dHRvbnMucHVzaChjaGVja0RvbmVCdXR0b24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tEb25lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBtYWluQ0JBZGRFdmVudExpc3RlbmVycyhjaGVja0RvbmVCdXR0b24pfSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjaGVja0RvbmVCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tEb25lQnV0dG9uKTtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tEb25lLmFwcGVuZENoaWxkKGNoZWNrRG9uZUJ1dHRvbkNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdG9kb01haW4uYXBwZW5kQ2hpbGQodG9kb1RpdGxlKTtcbiAgICAgICAgICAgICAgICB0b2RvTWFpbi5hcHBlbmRDaGlsZCh0b2RvRHVlZGF0ZSk7XG4gICAgICAgICAgICAgICAgdG9kb01haW4uYXBwZW5kQ2hpbGQodG9kb1ByaW9yaXR5Q29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICB0b2RvTWFpbi5hcHBlbmRDaGlsZChjaGVja0RvbmUpO1xuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBsZXQgdG9kb0NoZWNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdG9kb0NoZWNrTGlzdC5jbGFzc0xpc3QuYWRkKCd0b2RvLWNoZWNrbGlzdCcpO1xuICAgICAgICAgICAgdG9kb0NoZWNrTGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZ2dsZS1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgIGxldCBjaGVja2xpc3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjaGVja2xpc3RIZWFkZXIuY2xhc3NMaXN0LmFkZCgnY2hlY2tsaXN0LWhlYWRlcicpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGVja2xpc3RUb2dnbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0VG9nZ2xlLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hlY2tsaXN0VG9nZ2xlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3RUb2dnbGVJbWcuY2xhc3NMaXN0LmFkZCgndG9nZ2xlLWltZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0VG9nZ2xlSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgdG9nZ2xlSWNvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3RUb2dnbGVJbWcuc2V0QXR0cmlidXRlKCdhbHQnLCAnaWNvbiBvZiBhIHRvZ2dsZScpO1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVCdXR0b25zLnB1c2goY2hlY2tsaXN0VG9nZ2xlSW1nKTtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0VG9nZ2xlSW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge3Byb2plY3RUb2dnbGVzQWRkRXZlbnRMaXN0ZW5lcnMoY2hlY2tsaXN0VG9nZ2xlSW1nKX0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGVja2xpc3RIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdEhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnY2hlY2tsaXN0LWhlYWRpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0SGVhZGluZy50ZXh0Q29udGVudCA9ICdDaGVja2xpc3QnO1xuXG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNoZWNrbGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjaGVja2xpc3QtY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgY2hlY2tsaXN0Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9nZ2xhYmxlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoZWNrbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3QuY2xhc3NMaXN0LmFkZCgnY2hlY2tsaXN0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgY2hlY2tib3hWYWx1ZSBvZiB0b2RvVmFsdWVzLmNoZWNrYm94ZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoZWNrYm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gtY29udGFpbmVyJylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hlY2tib3hEb25lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrYm94RG9uZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjaGVjay1kb25lLWJ1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja0J1dHRvbnMucHVzaChjaGVja2JveERvbmVCdXR0b24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2JveERvbmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IGNoZWNrQnV0dG9uQWRkRXZlbnRMaXN0ZW5lcnMoY2hlY2tib3hEb25lQnV0dG9uKX0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGVja2JveExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrYm94TGFiZWwuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gtbGFiZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hMYWJlbC50ZXh0Q29udGVudCA9IGNoZWNrYm94VmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3hEb25lQnV0dG9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3hMYWJlbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdC5hcHBlbmRDaGlsZChjaGVja2JveENvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGNyZWF0ZUNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1jaGVja2JveCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hlY2tib3hUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrYm94VGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveC10aXRsZS1pbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2JveFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdtaW5sZW5ndGgnLCAnMScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnY2hlY2tib3ggdGl0bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrYm94VGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsICczMCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnY2hlY2tsaXN0LWNyZWF0ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhZGRDaGVja2JveEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkQ2hlY2tib3hCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkLWNoZWNrYm94JywgJ3JvdW5kLWJ1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkQ2hlY2tib3hCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdhZGQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZENoZWNrYm94QnV0dG9ucy5wdXNoKGFkZENoZWNrYm94QnV0dG9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZENoZWNrYm94QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ZhbHVlcy5jaGVja2JveGVzLnB1c2goYWRkQ2hlY2tib3hCdXR0b24uY2xvc2VzdCgnLmNyZWF0ZS1jaGVja2JveCcpLnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveC10aXRsZS1pbnB1dCcpLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRDaGVja2JveEJ1dHRvbkFjdGlvbihhZGRDaGVja2JveEJ1dHRvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTsgXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZUNoZWNrYm94LmFwcGVuZENoaWxkKGNoZWNrYm94VGl0bGVJbnB1dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVDaGVja2JveC5hcHBlbmRDaGlsZChhZGRDaGVja2JveEJ1dHRvbik7XG5cblxuICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3RUb2dnbGUuYXBwZW5kQ2hpbGQoY2hlY2tsaXN0VG9nZ2xlSW1nKTtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0SGVhZGVyLmFwcGVuZENoaWxkKGNoZWNrbGlzdFRvZ2dsZSk7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdEhlYWRlci5hcHBlbmRDaGlsZChjaGVja2xpc3RIZWFkaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0NoZWNrTGlzdC5hcHBlbmRDaGlsZChjaGVja2xpc3RIZWFkZXIpO1xuICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tsaXN0KVxuICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQ2hlY2tib3gpXG4gICAgICAgICAgICAgICAgICAgIHRvZG9DaGVja0xpc3QuYXBwZW5kQ2hpbGQoY2hlY2tsaXN0Q29udGFpbmVyKTtcblxuXG4gICAgICAgICAgICBsZXQgdG9kb0Rlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0b2RvRGVzY3JpcHRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1kZXNjcmlwdGlvbi1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgIGxldCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0b2RvRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndG9kby1kZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RleHQtY29udGVudCcpO1xuICAgICAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRvZG9WYWx1ZXMuZGVzY3JpcHRpb247XG5cbiAgICAgICAgICAgICAgICBsZXQgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbi1pbnB1dCcsICd0b2RvLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnMjAwJyk7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmUnKTtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7ICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbGlkYXRlLWVtcHR5JywgJ2ZhbHNlJyk7ICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9kb1ZhbHVlcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5wdXQudmFsdWU7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBsZXQgZGVzY3JpcHRpb25FZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25FZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RleHQtZWRpdC1idXR0b24nKTtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbkVkaXRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdyZWFkLW1vZGUnKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgZGVzY3JpcHRpb25FZGl0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbkVkaXRJY29uLmNsYXNzTGlzdC5hZGQoJ2VkaXQtaWNvbicpO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbkVkaXRJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgZWRpdEljb24yKTtcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25FZGl0SWNvbi5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdlZGl0IGluZGljYXRvciBpY29uJyk7XG5cbiAgICAgICAgICAgICAgICBlZGl0SWNvbnMucHVzaChkZXNjcmlwdGlvbkVkaXRCdXR0b24pO1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uRWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgZWRpdEljb25BZGRFdmVudExpc3RlbmVycyhkZXNjcmlwdGlvbkVkaXRCdXR0b24pfSk7XG5cblxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uRWRpdEJ1dHRvbi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkVkaXRJY29uKTtcbiAgICAgICAgICAgICAgICB0b2RvRGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0Rlc2NyaXB0aW9uKTsgICAgXG4gICAgICAgICAgICAgICAgdG9kb0Rlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpOyAgICBcbiAgICAgICAgICAgICAgICB0b2RvRGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25FZGl0QnV0dG9uKTsgICAgXG5cblxuICAgICAgICAgICAgdG9kby5hcHBlbmRDaGlsZCh0b2RvTWFpbik7XG4gICAgICAgICAgICB0b2RvLmFwcGVuZENoaWxkKHRvZG9DaGVja0xpc3QpO1xuICAgICAgICAgICAgdG9kby5hcHBlbmRDaGlsZCh0b2RvRGVzY3JpcHRpb25Db250YWluZXIpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRvZG87XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFRvZG9WYWx1ZXModG9kbylcbiAgICB7XG4gICAgICAgIGxldCB0aXRsZSA9IHRvZG8ucXVlcnlTZWxlY3RvcignLnRpdGxlLWlucHV0JykudmFsdWU7XG4gICAgICAgIGxldCBkdWVEYXRlID0gdG9kby5xdWVyeVNlbGVjdG9yKCcuZGRhdGUtaW5wdXQnKS52YWx1ZTtcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gdG9kby5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHktdmFsdWUnKS50ZXh0Q29udGVudDtcblxuICAgICAgICBsZXQgY2hlY2tib3hlc0VsZW1lbnRzID0gdG9kby5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3gtbGFiZWwnKTtcbiAgICAgICAgbGV0IGNoZWNrYm94ZXMgPSBbXTtcbiAgICAgICAgZm9yKGxldCBjaGVja2JveCBvZiBjaGVja2JveGVzRWxlbWVudHMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNoZWNrYm94ZXMucHVzaChjaGVja2JveC50ZXh0Q29udGVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSB0b2RvLnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbi1pbnB1dCcpLnZhbHVlO1xuICAgICAgICBsZXQgaXNEb25lID0gZmFsc2U7XG4gICAgICAgIGlmKHRvZG8ucXVlcnlTZWxlY3RvcignY2hlY2stZG9uZS1idXR0b24nKSAmJiB0b2RvLnF1ZXJ5U2VsZWN0b3IoJ2NoZWNrLWRvbmUtYnV0dG9uJykuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVja2VkJykpXG4gICAgICAgICAgICBpc0RvbmUgPSB0cnVlO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgIGR1ZURhdGUsXG4gICAgICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgICAgIGNoZWNrYm94ZXMsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGlzRG9uZVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldEVsZW1lbnRSb3V0ZShlbGVtZW50KVxuICAgIHtcbiAgICAgICAgbGV0IHJvdXRlID0gW107XG4gICAgICAgIGxldCBpZDtcbiAgICAgICAgaWYoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudCcpID09ICd0b2RvJylcbiAgICAgICAgICAgIGlkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgaWQgPSBlbGVtZW50LmNsb3Nlc3QoJ1tkYXRhLWFkdG89XCJ0cnVlXCJdJykuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgIHJvdXRlLnB1c2goK2lkKTtcbiAgICAgICAgd2hpbGUoaWQgIT0gMClcbiAgICAgICAgeyAgIFxuICAgICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudC5jbG9zZXN0KCdbZGF0YS1hZHRvPVwidHJ1ZVwiXScpO1xuICAgICAgICAgICAgaWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgICAgICAgcm91dGUucHVzaCgraWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb3V0ZS5yZXZlcnNlKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIEJDZ2V0SW5wdXRWYWx1ZShidXR0b24pXG4gICAge1xuICAgICAgICBsZXQgaW5wdXRUb1ZhbGlkYXRlO1xuICAgICAgICBpZihidXR0b24uY2xvc2VzdCgnLnNlY29uZC1kaXNwbGF5LW1lbnUnKS5xdWVyeVNlbGVjdG9yKCcudG9kbycpLnN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2Rpc3BsYXknKSAhPSAnbm9uZScpXG4gICAgICAgICAgICBpbnB1dFRvVmFsaWRhdGUgPSBidXR0b24uY2xvc2VzdCgnLnNlY29uZC1kaXNwbGF5LW1lbnUnKS5xdWVyeVNlbGVjdG9yKCcudG9kbycpLnF1ZXJ5U2VsZWN0b3IoJy50aXRsZS1pbnB1dCcpO1xuICAgICAgICBlbHNlIFxuICAgICAgICAgICAgaW5wdXRUb1ZhbGlkYXRlID0gYnV0dG9uLmNsb3Nlc3QoJy5zZWNvbmQtZGlzcGxheS1tZW51JykucXVlcnlTZWxlY3RvcignLnNldC1jYXRlZ29yeS1wcm9qZWN0LXRpdGxlJykucXVlcnlTZWxlY3RvcignLnNldC1jLXAtaW5wdXQnKTtcbiAgICAgICAgaWYoaW5wdXRUb1ZhbGlkYXRlLnZhbGlkaXR5LnZhbHVlTWlzc2luZylcbiAgICAgICAge1xuICAgICAgICAgICAgaW5wdXRUb1ZhbGlkYXRlLnNldEN1c3RvbVZhbGlkaXR5KCdNdXN0IGNvbnNpc3QgYXQgbGVhc3Qgb25lIGNoYXJhY3RlcicpO1xuICAgICAgICAgICAgaW5wdXRUb1ZhbGlkYXRlLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlucHV0VG9WYWxpZGF0ZS52YWx1ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlQnV0dG9uQWN0aW9uKGJ1dHRvbiwgcGFyZW50LCBlbGVtZW50LCBjb250YWluZXIsIHJvdXRlLCB2YWx1ZXMpXG4gICAge1xuICAgICAgICBsZXQgaW5wdXRWYWx1ZSA9IEJDZ2V0SW5wdXRWYWx1ZShidXR0b24pO1xuICAgICAgICBsZXQgbG9naWNFbGVtZW50O1xuICAgICAgICBsZXQgbmV3RWxlbWVudDtcbiAgICAgICAgaWYoaW5wdXRWYWx1ZSAhPSAnJylcbiAgICAgICAge1xuICAgICAgICAgICAgaWYoZWxlbWVudCA9PSAnY2F0ZWdvcnknKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxvZ2ljRWxlbWVudCA9IGxvZ2ljTW9kdWxlLmNyZWF0ZUNhdGVnb3J5KGlucHV0VmFsdWUsIHJvdXRlKTtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50ID0gY3JlYXRlQ2F0ZWdvcnkocGFyZW50LCBsb2dpY0VsZW1lbnQpO1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IGFkZFRvRWxlbWVudEFjdGlvbihuZXdFbGVtZW50KX0pO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGVsZW1lbnQgPT0gJ3Byb2plY3QnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxvZ2ljRWxlbWVudCA9IGxvZ2ljTW9kdWxlLmNyZWF0ZVByb2plY3QoaW5wdXRWYWx1ZSwgcm91dGUpO1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVQcm9qZWN0KHBhcmVudCwgbG9naWNFbGVtZW50KTtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBhZGRUb0VsZW1lbnRBY3Rpb24obmV3RWxlbWVudCl9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbG9naWNFbGVtZW50ID0gbG9naWNNb2R1bGUuY3JlYXRlVG9kbyhpbnB1dFZhbHVlLCByb3V0ZSwgdmFsdWVzLmR1ZURhdGUsIHZhbHVlcy5wcmlvcml0eSwgdmFsdWVzLmNoZWNrYm94ZXMsIHZhbHVlcy5kZXNjcmlwdGlvbiwgdmFsdWVzLmlzRG9uZSk7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZVByb2plY3RFbGVtZW50KHBhcmVudC5pZCwgbG9naWNFbGVtZW50KTtcbiAgICAgICAgICAgICAgICBwZXJpb2REYXRlSW5wdXRDaGFuZ2VBY3Rpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFkZFRvRWxlbWVudHMucHVzaChuZXdFbGVtZW50KTtcbiAgICAgICAgICAgIHJlbW92ZUVsZW1lbnRzLnB1c2gobmV3RWxlbWVudCk7XG4gICAgICAgICAgICBpZihjb250YWluZXIuZ2V0QXR0cmlidXRlKCdkYXRhLWRpc3BsYXllZCcpID09ICd0cnVlJylcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZURpcmVjdG9yeUVsZW1lbnQoY29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGNsb3NlU0RCdXR0b24uY2xpY2soKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIFxuICAgICAgICB7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNyZWF0ZUJ1dHRvbkFjdGlvbihidXR0b24sIHBhcmVudCwgZWxlbWVudCwgY29udGFpbmVyLCByb3V0ZSwgdmFsdWVzKTtcbiAgICAgICAgICAgIH0sIHtvbmNlOiB0cnVlfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgbGV0IHJlbW92ZUZ1bmN0aW9uQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlbW92ZS1mdW5jdGlvbicpO1xuICAgIGxldCByZW1vdmVFbGVtZW50cyA9IGFkZFRvRWxlbWVudHMuc2xpY2UoMSwgYWRkVG9FbGVtZW50cy5sZW5ndGgpLmNvbmNhdChBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWVsZW1lbnQ9XCJ0b2RvXCJdJykpKTtcbiAgICByZW1vdmVGdW5jdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAge1xuICAgICAgICByZW1vdmVGdW5jdGlvbihyZW1vdmVFbGVtZW50cyk7XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gcmVtb3ZlRnVuY3Rpb24ocmVtb3ZlRWxlbWVudHMpXG4gICAge1xuICAgICAgICBpZihyZW1vdmVGdW5jdGlvbk9uID09IGZhbHNlKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZihhZGRGdW5jdGlvbk9uID09IHRydWUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHVybk9mZkFkZEZ1bmN0aW9uKGFkZFRvRWxlbWVudHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVtb3ZlRnVuY3Rpb25PbiA9IHRydWU7XG4gICAgICAgICAgICByZW1vdmVFbGVtZW50cy5mb3JFYWNoKCAocmVtb3ZlRWxlbWVudCkgPT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZW1vdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNhdGVnb3J5LXRpdGxlJykuY2xhc3NMaXN0LmFkZCgncmVkLXRleHQtZWxlbWVudCcpO1xuXG4gICAgICAgICAgICAgICAgcmVtb3ZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWYocmVtb3ZlRnVuY3Rpb25PbiA9PSB0cnVlKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSByZW1vdmVFbGVtZW50cy5pbmRleE9mKHJlbW92ZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRWxlbWVudHMgPSByZW1vdmVFbGVtZW50cy5zbGljZSgwLCBpbmRleCkuY29uY2F0KHJlbW92ZUVsZW1lbnRzLnNsaWNlKGluZGV4KzEsIHJlbW92ZUVsZW1lbnQubGVuZ3RoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZW1vdmVFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1lbGVtZW50JykgIT0gJ3RvZG8nKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID0gYWRkVG9FbGVtZW50cy5pbmRleE9mKHJlbW92ZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvRWxlbWVudHMgPSBhZGRUb0VsZW1lbnRzLnNsaWNlKDAsIGluZGV4KS5jb25jYXQoYWRkVG9FbGVtZW50cy5zbGljZShpbmRleCsxLCBhZGRUb0VsZW1lbnRzLmxlbmd0aCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlkID0gcmVtb3ZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByb3V0ZSA9IGdldEVsZW1lbnRSb3V0ZShyZW1vdmVFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsb2dpY0VsZW1lbnQgPSBsb2dpY01vZHVsZS5maW5kQnlJRChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbG9naWNQYXJlbnQgPSBsb2dpY01vZHVsZS5maW5kQnlJRChyb3V0ZS5zbGljZSgwLCByb3V0ZS5sZW5ndGgtMSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBhcmVudENvbnRhaW5lciA9IHJlbW92ZUVsZW1lbnQucGFyZW50RWxlbWVudDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbG9naWNNb2R1bGUucmVtb3ZlRWxlbWVudChsb2dpY1BhcmVudCwgbG9naWNFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR1cm5PZmZSZW1vdmVGdW5jdGlvbihyZW1vdmVFbGVtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZW1vdmVFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGlzcGxheWVkJykgPT0gJ3RydWUnKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRGlyZWN0b3J5RWxlbWVudChyZW1vdmVFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKHJlbW92ZUVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGlzcGxheWVkJykgPT0gJ3RydWUnKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRGlyZWN0b3J5RWxlbWVudChyZW1vdmVFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihyZW1vdmVFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1kaXNwbGF5ZWQnKSA9PSAndHJ1ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN1YlNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3ViLXNlY3Rpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVDaGlsZHJlbihzdWJTZWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlci5jbGFzc0xpc3QuYWRkKCdzdWItc2VjdGlvbi1wbGFjZWhvbGRlcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyLnRleHRDb250ZW50ID0gJ0NsaWNrIGFuIGVsZW1lbnQgZnJvbSBZb3VyIGRpcmVjdG9yeSB0byB2aWV3IGl0IGhlcmUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YlNlY3Rpb24uYXBwZW5kQ2hpbGQocGxhY2Vob2xkZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tc2VjdGlvbi1oZWFkaW5nJykudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRDb250YWluZXIucmVtb3ZlQ2hpbGQocmVtb3ZlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgIHBlcmlvZENoZWNrUmVtb3ZlZCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIFxuICAgICAgICAgICAgdHVybk9mZlJlbW92ZUZ1bmN0aW9uKHJlbW92ZUVsZW1lbnRzKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdHVybk9mZlJlbW92ZUZ1bmN0aW9uKHJlbW92ZUVsZW1lbnRzKVxuICAgIHtcbiAgICAgICAgcmVtb3ZlRnVuY3Rpb25PbiA9IGZhbHNlO1xuICAgICAgICByZW1vdmVFbGVtZW50cy5mb3JFYWNoKCByZW1vdmVFbGVtZW50ID0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlbW92ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY2F0ZWdvcnktdGl0bGUnKS5jbGFzc0xpc3QucmVtb3ZlKCdyZWQtdGV4dC1lbGVtZW50Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gIFxuXG5cbiAgICByZXR1cm4ge1xuICAgIH1cbn1cbikoKTsiLCJleHBvcnQgbGV0IGxvZ2ljTW9kdWxlID1cbihmdW5jdGlvbigpXG57XG4gICAgbGV0IGlkc2V0ID0gLTE7XG5cbiAgICBjbGFzcyBFbGVtZW50XG4gICAge1xuICAgICAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgcm91dGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgICAgIHRoaXMuaWQgPSArK2lkc2V0O1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNsYXNzIFRvZG8gZXh0ZW5kcyBFbGVtZW50XG4gICAge1xuICAgICAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZHVlZGF0ZSwgcHJpb3JpdHksIGNoZWNrbGlzdCwgZGVzY3JpcHRpb24sIHJvdXRlLCBkb25lID0gZmFsc2UpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN1cGVyKHRpdGxlKTtcbiAgICAgICAgICAgIHRoaXMuZHVlZGF0ZSA9IGR1ZWRhdGU7XG4gICAgICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgICAgICB0aGlzLmNoZWNrYm94ZXMgPSBjaGVja2xpc3Q7XG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgICAgICB0aGlzLnJvdXRlID0gcm91dGUsXG4gICAgICAgICAgICB0aGlzLmRvbmUgPSBkb25lO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNsYXNzIFByb2plY3QgZXh0ZW5kcyBFbGVtZW50XG4gICAge1xuICAgICAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgY29udGVudHMgPSBbXSwgY2FuQ29udGVudCA9IFsndG9kbyddKVxuICAgICAgICB7XG4gICAgICAgICAgICBzdXBlcih0aXRsZSk7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRzID0gY29udGVudHM7XG4gICAgICAgICAgICB0aGlzLmNhbkNvbnRlbnQgPSBjYW5Db250ZW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNsYXNzIENhdGVnb3J5IGV4dGVuZHMgRWxlbWVudFxuICAgIHtcbiAgICAgICAgY29uc3RydWN0b3IodGl0bGUsIGNvbnRlbnRzID0gW10sIGNhbkNvbnRlbnQgPSBbJ3Byb2plY3QnLCAnY2F0ZWdvcnknXSlcbiAgICAgICAge1xuICAgICAgICAgICAgc3VwZXIodGl0bGUpO1xuICAgICAgICAgICAgdGhpcy5jb250ZW50cyA9IGNvbnRlbnRzO1xuICAgICAgICAgICAgdGhpcy5jYW5Db250ZW50ID0gY2FuQ29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBsZXQgcm9vdCA9IG5ldyBDYXRlZ29yeSgnWW91ciBkaXJlY3RvcnknKTtcbiAgICBcbiAgICBmdW5jdGlvbiBmaW5kQnlJRChpZFJvdXRlKVxuICAgIHtcbiAgICAgICAgaWYoaWRSb3V0ZS5sZW5ndGggPT0gMClcbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICBsZXQgaWQgPSBpZFJvdXRlWzFdO1xuICAgICAgICBsZXQgcGFyZW50ID0gcm9vdDtcbiAgICAgICAgZm9yKGxldCBpID0gMTsgaSA8IGlkUm91dGUubGVuZ3RoOylcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yKGxldCBjaGlsZCBvZiBwYXJlbnQuY29udGVudHMpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYoY2hpbGQuaWQgPT0gaWQpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQgPSBjaGlsZDtcbiAgICAgICAgICAgICAgICAgICAgaWQgPSBpZFJvdXRlWysraV1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudChjaGlsZCwgaWRSb3V0ZSlcbiAgICB7XG4gICAgICAgIGxldCBwYXJlbnQgPSBmaW5kQnlJRChpZFJvdXRlKTtcbiAgICAgICAgcGFyZW50LmNvbnRlbnRzLnB1c2goY2hpbGQpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBjcmVhdGVDYXRlZ29yeSh0aXRsZSwgaWRSb3V0ZSlcbiAgICB7XG4gICAgICAgIGxldCBjYXRlZ29yeSA9IG5ldyBDYXRlZ29yeSh0aXRsZSk7XG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoY2F0ZWdvcnksIGlkUm91dGUpO1xuICAgICAgICByZXR1cm4gY2F0ZWdvcnk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGUsIGlkUm91dGUpXG4gICAge1xuICAgICAgICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlKTtcbiAgICAgICAgY3JlYXRlRWxlbWVudChwcm9qZWN0LCBpZFJvdXRlKTtcbiAgICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRvZG8odGl0bGUsIGlkUm91dGUsIGR1ZWRhdGUsIHByaW9yaXR5LCBjaGVja2xpc3QsIGRlc2NyaXB0aW9uLCBkb25lID0gZmFsc2UpXG4gICAge1xuICAgICAgICBsZXQgdG9kbyA9IG5ldyBUb2RvKHRpdGxlLCBkdWVkYXRlLCBwcmlvcml0eSwgY2hlY2tsaXN0LCBkZXNjcmlwdGlvbiwgaWRSb3V0ZSwgZG9uZSk7XG4gICAgICAgIGNyZWF0ZUVsZW1lbnQodG9kbywgaWRSb3V0ZSk7XG4gICAgICAgIHRvZG9zLnB1c2godG9kbyk7XG4gICAgICAgIHJldHVybiB0b2RvO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUVsZW1lbnQocGFyZW50LCBjaGlsZClcbiAgICB7XG4gICAgICAgIGxldCBpbmRleCA9IHBhcmVudC5jb250ZW50cy5pbmRleE9mKGNoaWxkKTtcbiAgICAgICAgcGFyZW50LmNvbnRlbnRzID0gcGFyZW50LmNvbnRlbnRzLnNsaWNlKDAsIGluZGV4KS5jb25jYXQocGFyZW50LmNvbnRlbnRzLnNsaWNlKGluZGV4KzEsIHBhcmVudC5jb250ZW50cy5sZW5ndGgpKTtcbiAgICB9XG4gICAgXG4gICAgbGV0IHRvZG9zID0gW107XG5cbiAgICBsZXQgY2F0MSA9IGNyZWF0ZUNhdGVnb3J5KCdIb21lJywgW10pO1xuICAgIGxldCBwcmoxID0gY3JlYXRlUHJvamVjdCgnQ2xlYW5pbmcnLCBbMCwgMV0pO1xuICAgIGxldCB0MSA9IGNyZWF0ZVRvZG8oJ0RvIHRoZSB2YWN1dW1pbmcnLCBbMCwxLCAyXSwgJzIwMjItMDUtMTgnLCAnaGlnaCcsIFsnYmVkcm9vbScsICdraXRjaGVuJywgJ2JhdGhyb29tJywgJ2xpdmluZyByb29tJ10sICdJIG5lZWQgdG8gdmFjdXVtIHRoZSB3aG9sZSBob3VzZScpO1xuICAgIGxldCB0MiA9IGNyZWF0ZVRvZG8oJ0RvIHRoZSBpcm9uaW5nJywgWzAsMSwgMl0sICcyMDIyLTA1LTEzJywgJ25vcm1hbCcsIFsncGluayBkcmVzcyBzaGlydCcsICdyZWQgZHJlc3Mgc2hpcnQnXSwgJ0kgbmVlZCB0byBpcm9uIG15IGRyZXNzIHNoaXJ0cycpO1xuICAgIGxldCBwcmoyID0gY3JlYXRlUHJvamVjdCgnSG9tZXdvcmsnLCBbMCwgMV0pO1xuICAgIGxldCB0MyA9IGNyZWF0ZVRvZG8oJ1dyaXRlIGFuIGVzc2F5JywgWzAsMSwgMiwgNV0sICcyMDIyLTA5LTEzJywgJ2hpZ2gnLCBbXSwgJ0Vzc2F5IGFib3V0IGNvZGluZycpO1xuICAgIGxldCB0NCA9IGNyZWF0ZVRvZG8oJ0RvIHRoZSBtYXRoIGV4ZXJjaXNlcycsIFswLDEsIDIsIDVdLCAnMjAyMi0wNS0xMycsICdsb3cnLCBbJzEuMi80NScsICcxLjMvNDUnXSwgJ1RoZXkgYXJlIHF1aXRlIGhhcmQnKTtcblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlVG9kbywgY3JlYXRlQ2F0ZWdvcnksIGNyZWF0ZVByb2plY3QsIGZpbmRCeUlELCByb290LCByZW1vdmVFbGVtZW50LCB0b2Rvc1xuICAgIH1cbn0pKCkiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIlxuaW1wb3J0ICBnaXRodWJJY29uICBmcm9tICcuL2dyYXBoaWNzL0dpdEh1Yi1NYXJrLUxpZ2h0LTMycHgucG5nJztcbmltcG9ydCAgdG9nZ2xlSWNvbiAgZnJvbSAnLi9ncmFwaGljcy90b2dnbGUucG5nJztcbmltcG9ydCAgdG9nZ2xlTWVudUljb24gIGZyb20gJy4vZ3JhcGhpY3MvQXJyb3ctZG93bi5zdmcnO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2l0LWF0dHJpYicpLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLnNldEF0dHJpYnV0ZSgnc3JjJywgZ2l0aHViSWNvbik7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlLWltZycpLnNldEF0dHJpYnV0ZSgnc3JjJywgdG9nZ2xlSWNvbik7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlLW1lbnUtaWNvbicpLnNldEF0dHJpYnV0ZSgnc3JjJywgdG9nZ2xlTWVudUljb24pO1xuXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGRvbU1vZHVsZSB9IGZyb20gJy4vZG9tLmpzJzsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=