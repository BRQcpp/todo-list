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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: Ubuntu;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n    font-family: Lato;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n* {\n    font-family: Lato;\n    color: white;\n    box-sizing: border-box;\n}\n\nbody {\n    height: 100vh;\n    margin: 0;\n}\n\n.header {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    height: 55px;\n    background-color: #212121;\n}\n\n.heading {\n    font-size: 33px;\n}\n\n.attributes {\n    flex-direction: column;\n    gap: 8px;\n}\n\n.attributes, .git-attrib {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n}\n\n.attribute, .attribute > * {\n    color: #797979;\n}\n\n.attributes {\n    position: absolute;\n    bottom: 0;\n    padding: 5px;\n}\n\n.menu {\n    display: flex;\n    gap: 10px;\n}\n\n.function-button {\n    background-color:#3b3b3b;\n    border: 2px solid #555555;\n    border-radius: 20px;\n    font-size: 15px;\n    padding: 10px;\n    width: 135px;\n    transition: 0.3s;\n}\n\n.add-function:hover, .remove-function:hover {\n    transform: scale(0.96);\n}\n\n\n.main-content {\n    height: calc(100% - 55px);\n    display: flex;\n}\n\n.project-category-header {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.side-menu {\n    box-sizing: border-box;\n    padding: 10px 10px 10px 30px;\n    width: 300px;\n    background-color: #2d2d2d;\n    border-right: 2px solid #222;\n}\n\n.group-project {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.project-category-title {\n    font-size: 20px;\n}\n\n[data-adto=\"true\"] {\n    transition: 0.3s;\n}\n\n.category-project-icon {\n    width: 20px;\n    height: 20px;\n    border-radius: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: white;\n    color: black;\n}\n\n#first > .project-category-title {\n    font-size: 27px;\n    font-weight: 600;\n}\n\n.category-elements {\n    margin-left: 5px;\n    padding-left: 2px;\n    border-left: 2px solid #999999;\n}\n\n\n.content {\n    width: calc(100% - 300px);\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    background-color: #212121;\n}\n\n.main-section-window {\n    overflow: auto;\n    width: 98%;\n    height: 98%;\n    margin: auto;\n    border: 2px solid #7e7e7e;\n    border-radius: 5px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px\n}\n\n.main-section-heading {\n    margin-top: 10px;\n    font-size: 40px;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.sub-section {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    position: relative;\n}\n\n.sub-section-placeholder {\n    text-align: center;\n}\n\n.project {\n    background-color: #282828;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.sub-heading {\n    width: fit-content;\n    display: flex;\n    align-items: center;\n    margin: auto;\n    gap: 5px;\n}\n\n.toggle {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.sub-heading > .toggle {\n    width: 16px;\n    height: 14px;\n}\n\n.toggle-img {\n    transition: 0.3s;\n    transform: rotate(180deg);\n\n}\n\n.toggle-img.rotated {\n    transform: rotate(90deg);\n}\n\n\n.sub-heading > .heading {\n    display: flex;\n    align-items: center;\n    font-size: 28px;\n    text-align: center;\n    color: white;\n}\n\n.todo {\n    background-color: #292929;\n    font-size: 22px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    border: 2px solid #7e7e7e;\n    margin: 5px;\n    border-radius: 10px;\n    flex-wrap: wrap;\n    transition: 0.3s;\n}\n\n.second-display-menu > .todo {\n    margin: 0;\n    position: relative;\n}\n\n.todo-list {\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n}\n\n.todo.done {\n    opacity: 0.3;\n    border: 2px solid green;\n}\n\n.todo.done >  * {\n    pointer-events: none;\n}\n\n.todo.done > .todo-main >  .check-done{\n    pointer-events: all;\n}\n\n.todo-main {\n    border-radius: 5px;\n    padding: 5px;\n    gap: 5px;\n    width: 100%;\n    display: flex;\n    justify-content: space-around;\n    flex-wrap: wrap;\n}\n\n.checklist-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n}\n\n.todo-checklist {\n    margin: auto;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 3px;\n    width: 100%;\n    background-color: #303030;\n    padding: 5px 0;\n}\n\n.checklist-heading {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.checklist {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.checkbox-container {\n    width: 100%;\n    gap: 5px;\n    display: flex;\n    margin: auto;\n}\n\n.checkbox-container > .check-done-button {\n    margin: 0 !important;\n}\n\n.checklist-header {\n    display: flex;\n    width: fit-content;\n    gap: 5px;\n}\n\n.checklist-header > .toggle > .toggle-img, .project-category-header > .toggle > .toggle-img {\n    width: 13px;\n}\n\n.checkbox-label {\n    display: flex;\n    gap: 5px;\n    font-size: 18px;\n    justify-content: flex-start;\n    max-width: 300px;\n    overflow-wrap: anywhere;\n}\n\n.checkbox-input {\n    display: none;\n}\n\n.checkbox-container > .check-done-button {\n    width: 20px;\n    height: 20px;\n}\n\n.checkbox-container > .check-done-button::before {\n    position: relative;\n    top: -6px;\n    font-size: 17px;\n    opacity: 0.2;\n    content: '✓';\n    transition: 0.3s;\n}\n\n.create-checkbox {\n    display: flex;\n    gap: 5px;\n}\n\n.checkbox-title-input {\n    background-color: #272626 !important; \n    border-radius: 5px;\n}\n\n.todo-description-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-bottom: 5px;\n}\n\n.todo-description {\n    width: 100%;\n    padding-bottom: 10px;\n    font-size: 18px;\n    margin: auto;\n    text-align: center;\n}\n\n.todo-priority-container {\n    display: flex;\n    align-items: center;\n}\n\n.round-button, .check-done-button {\n    margin: auto;\n    width: 28px;\n    border-radius: 100%;\n    height: 28px;\n    border: 1px solid white;\n    text-align: center;\n}\n\n.round-button#subs:hover {\n    background-color: red;\n}\n\n.round-button#subs:hover::before {\n    color: #292929;\n}\n\n.round-button#add:hover {\n    background-color: green;\n}\n\n.round-button#add:hover::before {\n    color: #292929;\n}\n\n.round-button#subs::before, .round-button#add::before{\n    transition: 0.3s;\n    position: relative;\n    font-size: 50px;\n    content: '-';\n    color: red;\n}\n\n.round-button#subs::before {\n    top: -20.5px;\n}\n\n.round-button#add::before {\n    font-size: 30px;\n    top: -6px;\n    left: -0.5px;\n    content: '+';\n    color: green;\n}\n\n.todo-duedate, .todo-title, .todo-priority-container, .check-done {\n    width: 220px;\n}    \n\n.todo-title {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n}\n\n.todo-duedate, .todo-priority {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    gap: 3px;\n}    \n\n.todo-label {\n    margin-left: auto;\n    margin-right: auto;\n    width: fit-content;\n    padding: 1px 5px;\n    border-bottom: 1px solid white;\n}\n\n.check-done {\n    display: flex;\n    align-items: center;\n}\n\n.ddate-input, .priority-value, .title-input, .todo-title-content, .checkbox-title-input, .set-c-p-input {\n    text-align: center;\n    font-size: 18px;\n    outline: none;\n    border: none;\n    background-color: inherit;\n}\n\n.priority-value, .title-input {\n    -webkit-appearance: none;\n    appearance: none;\n}\n\n.ddate-input, .priority-value {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.ddate-input {\n    width: 129px;\n}\n\n.priority-value {\n    width: 70px;\n}\n\n.title-input {\n    width: 185px;\n    font-size: 35px;\n    background-color: #2d2d2d;\n    border-radius: 5px;\n}\n\n.description-input {\n    outline: none;\n    border: none;\n    background-color: #2d2d2d;\n    height: 90%;\n    width: 90%;\n    border-radius: 5px;\n    padding: 5px;\n}\n\n.todo-title-content {\n    width: fit-content;\n    max-width: 220px;\n    max-height: 55px;\n    overflow-x: auto;\n    font-size: 35px;\n    margin-left: 31px;\n}\n\n.text-edit-button {\n    width: 26px;\n    height: 26px;\n}\n\n.check-done-input {\n    display: none;\n}\n\n.check-done-button-container {\n    margin: auto;\n}\n\n.check-done-button {\n    margin: auto;\n    width: 28px;\n    border-radius: 100%;\n    height: 28px;\n    border: 1px solid white;\n    text-align: center;\n}\n\n.check-done-button::before {\n    position: relative;\n    top: -4px;\n    font-size: 23px;\n    opacity: 0.2;\n    content: '✓';\n    transition: 0.3s;\n}\n\n.check-done-button:hover {\n    background-color: green;\n}\n\n.check-done-button:hover::before {\n    opacity: 1;\n}\n\n.check-done-button.checked::before {\n    opacity: 1;\n}\n\n.checked {\n    opacity: 1;\n    background-color: green;\n}\n\n\n/* width */\n::-webkit-scrollbar {\n    height: 5px;\n  }\n::-webkit-scrollbar {\n    height: 5px;\n    width: 8px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n    background: #222;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n    background: rgb(19, 19, 19);\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n    background: #555;\n}\n\nbutton {\n    -webkit-appearance: none;\n    appearance: none;\n    background-color: inherit;\n    border: 0;\n    outline: none;\n    padding: 0;\n}\n\n.second-display {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    background-color: rgb(0 0 0 / 30%);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 1;\n}\n\n.second-display-menu {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n}\n\n.set-category-project {\n}\n\n.set-category-project-title {\n    background-color: #111111;\n    padding: 20px;\n    border-radius: 5px;\n}\n\n.set-c-p-label {\n    font-size: 38px;\n    text-align: center;\n}\n\n.set-c-p-input {\n    font-size: 30px;\n    background-color: #191919;\n    border-radius: 5px;\n}\n\n.select-element-menu {\n    margin: auto;\n    background-color: #111111;\n    border-radius: 5px;\n    display: flex;\n    flex-direction: column;\n\n}\n\n.select-element-menu button:first-of-type {\n    border-top: none;\n    border-radius: 5px;\n}\n\n.select-element-menu button:last-of-type {\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n\n.sem-option {\n    width: 300px;\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 28px;\n    border-top: 1px solid gray;\n}\n\n.sem-option:hover {\n    background-color: #1a1a1a;\n}\n\n.close-button {\n    transition: 0.3s;\n    width: 20px;\n    height: 20px;\n    border-top-right-radius: 7px;\n    border-bottom-left-radius: 7px;\n    position: absolute;\n    right: 0;\n    top: 0;\n    font-size: 18px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: red;\n    z-index: 1;\n}\n\n.close-button:hover {\n    background-color: white;\n    color: red;\n}\n\n.create-button {\n    width: 100px;\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #252525;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n\n.create-button:hover {\n    transition: 0.3s;\n    transform: scale(0.95) translateY(-0.5px);\n}\n\n.green-text-element {\n    color: #7cd47c;\n}\n\n.red-text-element {\n    color: #ec5c5c;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: Ubuntu;\n    src: url(fonts/Ubuntu/Ubuntu-Regular.ttf);\n}\n\n@font-face {\n    font-family: Lato;\n    src: url(fonts/Lato/Lato-Regular.ttf);\n}\n\n* {\n    font-family: Lato;\n    color: white;\n    box-sizing: border-box;\n}\n\nbody {\n    height: 100vh;\n    margin: 0;\n}\n\n.header {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    height: 55px;\n    background-color: #212121;\n}\n\n.heading {\n    font-size: 33px;\n}\n\n.attributes {\n    flex-direction: column;\n    gap: 8px;\n}\n\n.attributes, .git-attrib {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n}\n\n.attribute, .attribute > * {\n    color: #797979;\n}\n\n.attributes {\n    position: absolute;\n    bottom: 0;\n    padding: 5px;\n}\n\n.menu {\n    display: flex;\n    gap: 10px;\n}\n\n.function-button {\n    background-color:#3b3b3b;\n    border: 2px solid #555555;\n    border-radius: 20px;\n    font-size: 15px;\n    padding: 10px;\n    width: 135px;\n    transition: 0.3s;\n}\n\n.add-function:hover, .remove-function:hover {\n    transform: scale(0.96);\n}\n\n\n.main-content {\n    height: calc(100% - 55px);\n    display: flex;\n}\n\n.project-category-header {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.side-menu {\n    box-sizing: border-box;\n    padding: 10px 10px 10px 30px;\n    width: 300px;\n    background-color: #2d2d2d;\n    border-right: 2px solid #222;\n}\n\n.group-project {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.project-category-title {\n    font-size: 20px;\n}\n\n[data-adto=\"true\"] {\n    transition: 0.3s;\n}\n\n.category-project-icon {\n    width: 20px;\n    height: 20px;\n    border-radius: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: white;\n    color: black;\n}\n\n#first > .project-category-title {\n    font-size: 27px;\n    font-weight: 600;\n}\n\n.category-elements {\n    margin-left: 5px;\n    padding-left: 2px;\n    border-left: 2px solid #999999;\n}\n\n\n.content {\n    width: calc(100% - 300px);\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    background-color: #212121;\n}\n\n.main-section-window {\n    overflow: auto;\n    width: 98%;\n    height: 98%;\n    margin: auto;\n    border: 2px solid #7e7e7e;\n    border-radius: 5px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px\n}\n\n.main-section-heading {\n    margin-top: 10px;\n    font-size: 40px;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.sub-section {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    position: relative;\n}\n\n.sub-section-placeholder {\n    text-align: center;\n}\n\n.project {\n    background-color: #282828;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.sub-heading {\n    width: fit-content;\n    display: flex;\n    align-items: center;\n    margin: auto;\n    gap: 5px;\n}\n\n.toggle {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.sub-heading > .toggle {\n    width: 16px;\n    height: 14px;\n}\n\n.toggle-img {\n    transition: 0.3s;\n    transform: rotate(180deg);\n\n}\n\n.toggle-img.rotated {\n    transform: rotate(90deg);\n}\n\n\n.sub-heading > .heading {\n    display: flex;\n    align-items: center;\n    font-size: 28px;\n    text-align: center;\n    color: white;\n}\n\n.todo {\n    background-color: #292929;\n    font-size: 22px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    border: 2px solid #7e7e7e;\n    margin: 5px;\n    border-radius: 10px;\n    flex-wrap: wrap;\n    transition: 0.3s;\n}\n\n.second-display-menu > .todo {\n    margin: 0;\n    position: relative;\n}\n\n.todo-list {\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n}\n\n.todo.done {\n    opacity: 0.3;\n    border: 2px solid green;\n}\n\n.todo.done >  * {\n    pointer-events: none;\n}\n\n.todo.done > .todo-main >  .check-done{\n    pointer-events: all;\n}\n\n.todo-main {\n    border-radius: 5px;\n    padding: 5px;\n    gap: 5px;\n    width: 100%;\n    display: flex;\n    justify-content: space-around;\n    flex-wrap: wrap;\n}\n\n.checklist-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n}\n\n.todo-checklist {\n    margin: auto;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 3px;\n    width: 100%;\n    background-color: #303030;\n    padding: 5px 0;\n}\n\n.checklist-heading {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.checklist {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.checkbox-container {\n    width: 100%;\n    gap: 5px;\n    display: flex;\n    margin: auto;\n}\n\n.checkbox-container > .check-done-button {\n    margin: 0 !important;\n}\n\n.checklist-header {\n    display: flex;\n    width: fit-content;\n    gap: 5px;\n}\n\n.checklist-header > .toggle > .toggle-img, .project-category-header > .toggle > .toggle-img {\n    width: 13px;\n}\n\n.checkbox-label {\n    display: flex;\n    gap: 5px;\n    font-size: 18px;\n    justify-content: flex-start;\n    max-width: 300px;\n    overflow-wrap: anywhere;\n}\n\n.checkbox-input {\n    display: none;\n}\n\n.checkbox-container > .check-done-button {\n    width: 20px;\n    height: 20px;\n}\n\n.checkbox-container > .check-done-button::before {\n    position: relative;\n    top: -6px;\n    font-size: 17px;\n    opacity: 0.2;\n    content: '✓';\n    transition: 0.3s;\n}\n\n.create-checkbox {\n    display: flex;\n    gap: 5px;\n}\n\n.checkbox-title-input {\n    background-color: #272626 !important; \n    border-radius: 5px;\n}\n\n.todo-description-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-bottom: 5px;\n}\n\n.todo-description {\n    width: 100%;\n    padding-bottom: 10px;\n    font-size: 18px;\n    margin: auto;\n    text-align: center;\n}\n\n.todo-priority-container {\n    display: flex;\n    align-items: center;\n}\n\n.round-button, .check-done-button {\n    margin: auto;\n    width: 28px;\n    border-radius: 100%;\n    height: 28px;\n    border: 1px solid white;\n    text-align: center;\n}\n\n.round-button#subs:hover {\n    background-color: red;\n}\n\n.round-button#subs:hover::before {\n    color: #292929;\n}\n\n.round-button#add:hover {\n    background-color: green;\n}\n\n.round-button#add:hover::before {\n    color: #292929;\n}\n\n.round-button#subs::before, .round-button#add::before{\n    transition: 0.3s;\n    position: relative;\n    font-size: 50px;\n    content: '-';\n    color: red;\n}\n\n.round-button#subs::before {\n    top: -20.5px;\n}\n\n.round-button#add::before {\n    font-size: 30px;\n    top: -6px;\n    left: -0.5px;\n    content: '+';\n    color: green;\n}\n\n.todo-duedate, .todo-title, .todo-priority-container, .check-done {\n    width: 220px;\n}    \n\n.todo-title {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n}\n\n.todo-duedate, .todo-priority {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    gap: 3px;\n}    \n\n.todo-label {\n    margin-left: auto;\n    margin-right: auto;\n    width: fit-content;\n    padding: 1px 5px;\n    border-bottom: 1px solid white;\n}\n\n.check-done {\n    display: flex;\n    align-items: center;\n}\n\n.ddate-input, .priority-value, .title-input, .todo-title-content, .checkbox-title-input, .set-c-p-input {\n    text-align: center;\n    font-size: 18px;\n    outline: none;\n    border: none;\n    background-color: inherit;\n}\n\n.priority-value, .title-input {\n    -webkit-appearance: none;\n    appearance: none;\n}\n\n.ddate-input, .priority-value {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.ddate-input {\n    width: 129px;\n}\n\n.priority-value {\n    width: 70px;\n}\n\n.title-input {\n    width: 185px;\n    font-size: 35px;\n    background-color: #2d2d2d;\n    border-radius: 5px;\n}\n\n.description-input {\n    outline: none;\n    border: none;\n    background-color: #2d2d2d;\n    height: 90%;\n    width: 90%;\n    border-radius: 5px;\n    padding: 5px;\n}\n\n.todo-title-content {\n    width: fit-content;\n    max-width: 220px;\n    max-height: 55px;\n    overflow-x: auto;\n    font-size: 35px;\n    margin-left: 31px;\n}\n\n.text-edit-button {\n    width: 26px;\n    height: 26px;\n}\n\n.check-done-input {\n    display: none;\n}\n\n.check-done-button-container {\n    margin: auto;\n}\n\n.check-done-button {\n    margin: auto;\n    width: 28px;\n    border-radius: 100%;\n    height: 28px;\n    border: 1px solid white;\n    text-align: center;\n}\n\n.check-done-button::before {\n    position: relative;\n    top: -4px;\n    font-size: 23px;\n    opacity: 0.2;\n    content: '✓';\n    transition: 0.3s;\n}\n\n.check-done-button:hover {\n    background-color: green;\n}\n\n.check-done-button:hover::before {\n    opacity: 1;\n}\n\n.check-done-button.checked::before {\n    opacity: 1;\n}\n\n.checked {\n    opacity: 1;\n    background-color: green;\n}\n\n\n/* width */\n::-webkit-scrollbar {\n    height: 5px;\n  }\n::-webkit-scrollbar {\n    height: 5px;\n    width: 8px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n    background: #222;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n    background: rgb(19, 19, 19);\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n    background: #555;\n}\n\nbutton {\n    -webkit-appearance: none;\n    appearance: none;\n    background-color: inherit;\n    border: 0;\n    outline: none;\n    padding: 0;\n}\n\n.second-display {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    background-color: rgb(0 0 0 / 30%);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 1;\n}\n\n.second-display-menu {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n}\n\n.set-category-project {\n}\n\n.set-category-project-title {\n    background-color: #111111;\n    padding: 20px;\n    border-radius: 5px;\n}\n\n.set-c-p-label {\n    font-size: 38px;\n    text-align: center;\n}\n\n.set-c-p-input {\n    font-size: 30px;\n    background-color: #191919;\n    border-radius: 5px;\n}\n\n.select-element-menu {\n    margin: auto;\n    background-color: #111111;\n    border-radius: 5px;\n    display: flex;\n    flex-direction: column;\n\n}\n\n.select-element-menu button:first-of-type {\n    border-top: none;\n    border-radius: 5px;\n}\n\n.select-element-menu button:last-of-type {\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n\n.sem-option {\n    width: 300px;\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 28px;\n    border-top: 1px solid gray;\n}\n\n.sem-option:hover {\n    background-color: #1a1a1a;\n}\n\n.close-button {\n    transition: 0.3s;\n    width: 20px;\n    height: 20px;\n    border-top-right-radius: 7px;\n    border-bottom-left-radius: 7px;\n    position: absolute;\n    right: 0;\n    top: 0;\n    font-size: 18px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: red;\n    z-index: 1;\n}\n\n.close-button:hover {\n    background-color: white;\n    color: red;\n}\n\n.create-button {\n    width: 100px;\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #252525;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n\n.create-button:hover {\n    transition: 0.3s;\n    transform: scale(0.95) translateY(-0.5px);\n}\n\n.green-text-element {\n    color: #7cd47c;\n}\n\n.red-text-element {\n    color: #ec5c5c;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic.js */ "./src/logic.js");


let domModule = 
(function()
{
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
            img.setAttribute('src', 'graphics/save-icon.png');
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
                img.setAttribute('src', 'graphics/edit-icon.png');
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

    let addToElements = Array.from(document.querySelectorAll('[data-adto="true"]'));
    addToElements.forEach( addToElement =>
    {
        addToElement.addEventListener('mousedown', (e) =>
        {
            addToElementAction(addToElement);
            e.stopImmediatePropagation();
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
                            toggleImg.setAttribute('src','../dist/graphics/toggle.png');
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

        if(directoryContent.length != 0)
        {
            for(let element of directoryContent)
            {
                if(element.dueDate == undefined)
                {
                    if(element.canContent)
                    {
                        if(element.canContent[0] == 'project')
                        {
                            createCategory(directory, element);
                            generateDirectory(element);
                        }
                        else if(element.canContent[0] == 'todo')
                            createProject(directory, element);
                    }
                }
            }
        }
    }
    function createCategory(directory, element)
    {
        let category = document.createElement('div');
        category.classList.add('category');
        category.setAttribute('id', 'toggle-container');
        category.setAttribute('data-id', element.id);
        category.setAttribute('data-adto', 'true');

            let header = document.createElement('div');
            header.classList.add('project-category-header');

                let toggle = document.createElement('div');
                toggle.classList.add('toggle')

                    let toggleImg = document.createElement('img');
                    toggleImg.classList.add('toggle-img');
                    toggleImg.setAttribute('src', '../dist/graphics/toggle.png');
                    toggleImg.setAttribute('alt', 'icon of a toggle');
                    toggleButtons.push(toggleImg);
                    toggleImg.addEventListener('click', () => {projectTogglesAddEventListeners(toggleImg)});
                
                let icon = document.createElement('div');
                icon.classList.add('category-project-icon');
                icon.textContent = 'C';

                let title = document.createElement('div');
                title.classList.add('project-category-title');
                title.textContent = element.title;

            let categoryElements = document.createElement('div');
            categoryElements.classList.add('category-elements');
            categoryElements.setAttribute('id', 'togglable');

            toggle.appendChild(toggleImg);
            header.appendChild(toggle);
            header.appendChild(icon);
            header.appendChild(title);
            category.appendChild(header);
            category.appendChild(categoryElements);

        let parent = document.querySelector(`[data-id="${directory.id}"]`).querySelector('.category-elements');
        parent.appendChild(category);
        
        return category;
    }
    function createProject(directory, element)
    {
        let projectHeader = document.createElement('div');
        projectHeader.classList.add('project-category-header');
        projectHeader.setAttribute('data-element', 'project');
        projectHeader.setAttribute('data-id', element.id);
        projectHeader.setAttribute('data-adto', 'true');

            let projectIcon = document.createElement('div');
            projectIcon.classList.add('category-project-icon');
            projectIcon.textContent = 'P';

            let projectTitle = document.createElement('div');
            projectTitle.classList.add('project-category-title');
            projectTitle.textContent = element.title;

            projectHeader.appendChild(projectIcon);
            projectHeader.appendChild(projectTitle);
        
        let parent = document.querySelector(`[data-id="${directory.id}"]`).querySelector('.category-elements');
        parent.appendChild(projectHeader);

        return projectHeader;
    }
    function createAndAppendTodo(todoValues, parent)
    {
        let todo = createTodo(todoValues);
        parent.appendChild(todo);
        if(todoValues.isDone)
            mainCBAddEventListeners(todo.querySelector('.check-done-button'));
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
                        titleEditIcon.setAttribute('src', '../dist/graphics/edit-icon.png');
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
                        checklistToggleImg.setAttribute('src', '../dist/graphics/toggle.png');
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
                    descriptionEditIcon.setAttribute('src', '../dist/graphics/edit-icon.png');
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
        let id = element.closest('[data-adto="true"]').getAttribute('data-id');
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
                //addFunction(newElement);
                newElement.addEventListener('click', () => { addToElementAction(newElement)});

            }
            else if(element == 'project')
            {
                logicElement = _logic_js__WEBPACK_IMPORTED_MODULE_0__.logicModule.createProject(inputValue, route);
                newElement = createProject(parent, logicElement);
                //addFunction(newElement);
                newElement.addEventListener('click', () => { addToElementAction(newElement)});
            }
            else 
            {
                logicElement = _logic_js__WEBPACK_IMPORTED_MODULE_0__.logicModule.createTodo(inputValue, route, values.dueDate, values.priority, values.checklist, values.description);
            }
            addToElements.push(newElement);
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
    let removeElements = addToElements.slice(1, addToElements.length);
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
                        index = addToElements.indexOf(removeElement);
                        addToElements = addToElements.slice(0, index).concat(addToElements.slice(index+1, addToElements.length));
                        let id = removeElement.getAttribute('data-id');
                        let route = getElementRoute(removeElement);
                        let logicElement = _logic_js__WEBPACK_IMPORTED_MODULE_0__.logicModule.findByID(route);
                        let logicParent = _logic_js__WEBPACK_IMPORTED_MODULE_0__.logicModule.findByID(route.slice(0, route.length-1));
                        let parentContainer = removeElement.parentElement;
                        parentContainer.removeChild(removeElement);
                        _logic_js__WEBPACK_IMPORTED_MODULE_0__.logicModule.removeElement(logicParent, logicElement);
                        turnOffRemoveFunction(removeElements);
                        if(removeElement.getAttribute('data-displayed') == 'true')
                        {
                            let subSection = document.querySelector('.sub-section');
                            removeChildren(subSection);
                            let placeholder = document.createElement('div');
                            placeholder.classList.add('sub-section-placeholder');
                            placeholder.textContent = 'Click an element from Your directory to view it here';
                            subSection.appendChild(placeholder);

                            document.querySelector('.main-section-heading').textContent = '';
                        }
                        e.stopPropagation();
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
    
    let cat1 = createCategory('first category', []);
    let cat2 = createCategory('sec category', [0,1]);
    let cat3 = createCategory('rd category', [0,1]);
    let cat4 = createCategory('finsec category', [0,1, 2]);
    let cat5 = createCategory('rt category', [0,1, 2, 3]);
    let p1 = createProject('Project', [0,1, 2, 3, 5]);
    let t9 = createTodo('Todo', [0,1, 2, 3, 5, 6], '2022-09-08', 'low', ['first1', 'second2'], 'abc');
    let t1 = createTodo('Todo', [0,1], '2022-09-08', 'high', [], 'abc');
    let t2 = createTodo('Todo', [0,1], '2022-09-08', 'high', [], 'abc');
    let t3 = createTodo('Todo', [0,1], '2022-09-08', 'high', [], 'abc');
    let t4 = createTodo('Todo', [0,1], '2022-09-08', 'high', [], 'abc');
    let t5 = createTodo('Todo', [0,1], '2022-09-08', 'high', [], 'abc');


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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsYUFBYSxRQUFRLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksY0FBYyxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksUUFBUSxVQUFVLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sVUFBVSxLQUFLLFlBQVksT0FBTyxVQUFVLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLHNDQUFzQywwQkFBMEIsZ0RBQWdELEdBQUcsZ0JBQWdCLHdCQUF3Qiw0Q0FBNEMsR0FBRyxPQUFPLHdCQUF3QixtQkFBbUIsNkJBQTZCLEdBQUcsVUFBVSxvQkFBb0IsZ0JBQWdCLEdBQUcsYUFBYSxvQkFBb0IsMEJBQTBCLG9DQUFvQyxtQkFBbUIsZ0NBQWdDLEdBQUcsY0FBYyxzQkFBc0IsR0FBRyxpQkFBaUIsNkJBQTZCLGVBQWUsR0FBRyw4QkFBOEIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsZUFBZSxHQUFHLGdDQUFnQyxxQkFBcUIsR0FBRyxpQkFBaUIseUJBQXlCLGdCQUFnQixtQkFBbUIsR0FBRyxXQUFXLG9CQUFvQixnQkFBZ0IsR0FBRyxzQkFBc0IsK0JBQStCLGdDQUFnQywwQkFBMEIsc0JBQXNCLG9CQUFvQixtQkFBbUIsdUJBQXVCLEdBQUcsaURBQWlELDZCQUE2QixHQUFHLHFCQUFxQixnQ0FBZ0Msb0JBQW9CLEdBQUcsOEJBQThCLG9CQUFvQiwwQkFBMEIsZUFBZSxHQUFHLGdCQUFnQiw2QkFBNkIsbUNBQW1DLG1CQUFtQixnQ0FBZ0MsbUNBQW1DLEdBQUcsb0JBQW9CLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLEdBQUcsNkJBQTZCLHNCQUFzQixHQUFHLDBCQUEwQix1QkFBdUIsR0FBRyw0QkFBNEIsa0JBQWtCLG1CQUFtQiwwQkFBMEIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsOEJBQThCLG1CQUFtQixHQUFHLHNDQUFzQyxzQkFBc0IsdUJBQXVCLEdBQUcsd0JBQXdCLHVCQUF1Qix3QkFBd0IscUNBQXFDLEdBQUcsZ0JBQWdCLGdDQUFnQyxvQkFBb0Isc0JBQXNCLDBCQUEwQixnQ0FBZ0MsR0FBRywwQkFBMEIscUJBQXFCLGlCQUFpQixrQkFBa0IsbUJBQW1CLGdDQUFnQyx5QkFBeUIsb0JBQW9CLDZCQUE2QixrQkFBa0IsMkJBQTJCLHVCQUF1QixzQkFBc0Isd0JBQXdCLHlCQUF5QixHQUFHLGtCQUFrQixvQkFBb0IsNkJBQTZCLGdCQUFnQix5QkFBeUIsR0FBRyw4QkFBOEIseUJBQXlCLEdBQUcsY0FBYyxnQ0FBZ0Msb0JBQW9CLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLEdBQUcsa0JBQWtCLHlCQUF5QixvQkFBb0IsMEJBQTBCLG1CQUFtQixlQUFlLEdBQUcsYUFBYSxvQkFBb0IsMEJBQTBCLDhCQUE4QixHQUFHLDRCQUE0QixrQkFBa0IsbUJBQW1CLEdBQUcsaUJBQWlCLHVCQUF1QixnQ0FBZ0MsS0FBSyx5QkFBeUIsK0JBQStCLEdBQUcsK0JBQStCLG9CQUFvQiwwQkFBMEIsc0JBQXNCLHlCQUF5QixtQkFBbUIsR0FBRyxXQUFXLGdDQUFnQyxzQkFBc0Isb0JBQW9CLDZCQUE2QixnQkFBZ0IsZ0NBQWdDLGtCQUFrQiwwQkFBMEIsc0JBQXNCLHVCQUF1QixHQUFHLGtDQUFrQyxnQkFBZ0IseUJBQXlCLEdBQUcsZ0JBQWdCLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLEdBQUcsZ0JBQWdCLG1CQUFtQiw4QkFBOEIsR0FBRyxxQkFBcUIsMkJBQTJCLEdBQUcsMkNBQTJDLDBCQUEwQixHQUFHLGdCQUFnQix5QkFBeUIsbUJBQW1CLGVBQWUsa0JBQWtCLG9CQUFvQixvQ0FBb0Msc0JBQXNCLEdBQUcsMEJBQTBCLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixlQUFlLEdBQUcscUJBQXFCLG1CQUFtQixvQkFBb0IsMEJBQTBCLDZCQUE2QixlQUFlLGtCQUFrQixnQ0FBZ0MscUJBQXFCLEdBQUcsd0JBQXdCLHdCQUF3Qix5QkFBeUIsR0FBRyxnQkFBZ0Isb0JBQW9CLDZCQUE2QixlQUFlLEdBQUcseUJBQXlCLGtCQUFrQixlQUFlLG9CQUFvQixtQkFBbUIsR0FBRyw4Q0FBOEMsMkJBQTJCLEdBQUcsdUJBQXVCLG9CQUFvQix5QkFBeUIsZUFBZSxHQUFHLGlHQUFpRyxrQkFBa0IsR0FBRyxxQkFBcUIsb0JBQW9CLGVBQWUsc0JBQXNCLGtDQUFrQyx1QkFBdUIsOEJBQThCLEdBQUcscUJBQXFCLG9CQUFvQixHQUFHLDhDQUE4QyxrQkFBa0IsbUJBQW1CLEdBQUcsc0RBQXNELHlCQUF5QixnQkFBZ0Isc0JBQXNCLG1CQUFtQixtQkFBbUIsdUJBQXVCLEdBQUcsc0JBQXNCLG9CQUFvQixlQUFlLEdBQUcsMkJBQTJCLDRDQUE0Qyx5QkFBeUIsR0FBRyxpQ0FBaUMsb0JBQW9CLDZCQUE2QiwwQkFBMEIsMEJBQTBCLEdBQUcsdUJBQXVCLGtCQUFrQiwyQkFBMkIsc0JBQXNCLG1CQUFtQix5QkFBeUIsR0FBRyw4QkFBOEIsb0JBQW9CLDBCQUEwQixHQUFHLHVDQUF1QyxtQkFBbUIsa0JBQWtCLDBCQUEwQixtQkFBbUIsOEJBQThCLHlCQUF5QixHQUFHLDhCQUE4Qiw0QkFBNEIsR0FBRyxzQ0FBc0MscUJBQXFCLEdBQUcsNkJBQTZCLDhCQUE4QixHQUFHLHFDQUFxQyxxQkFBcUIsR0FBRywwREFBMEQsdUJBQXVCLHlCQUF5QixzQkFBc0IsbUJBQW1CLGlCQUFpQixHQUFHLGdDQUFnQyxtQkFBbUIsR0FBRywrQkFBK0Isc0JBQXNCLGdCQUFnQixtQkFBbUIsbUJBQW1CLG1CQUFtQixHQUFHLHVFQUF1RSxtQkFBbUIsT0FBTyxpQkFBaUIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsZUFBZSxHQUFHLG1DQUFtQyxvQkFBb0IsNkJBQTZCLHlCQUF5QixlQUFlLE9BQU8saUJBQWlCLHdCQUF3Qix5QkFBeUIseUJBQXlCLHVCQUF1QixxQ0FBcUMsR0FBRyxpQkFBaUIsb0JBQW9CLDBCQUEwQixHQUFHLDZHQUE2Ryx5QkFBeUIsc0JBQXNCLG9CQUFvQixtQkFBbUIsZ0NBQWdDLEdBQUcsbUNBQW1DLCtCQUErQix1QkFBdUIsR0FBRyxtQ0FBbUMsd0JBQXdCLHlCQUF5QixHQUFHLGtCQUFrQixtQkFBbUIsR0FBRyxxQkFBcUIsa0JBQWtCLEdBQUcsa0JBQWtCLG1CQUFtQixzQkFBc0IsZ0NBQWdDLHlCQUF5QixHQUFHLHdCQUF3QixvQkFBb0IsbUJBQW1CLGdDQUFnQyxrQkFBa0IsaUJBQWlCLHlCQUF5QixtQkFBbUIsR0FBRyx5QkFBeUIseUJBQXlCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLHNCQUFzQix3QkFBd0IsR0FBRyx1QkFBdUIsa0JBQWtCLG1CQUFtQixHQUFHLHVCQUF1QixvQkFBb0IsR0FBRyxrQ0FBa0MsbUJBQW1CLEdBQUcsd0JBQXdCLG1CQUFtQixrQkFBa0IsMEJBQTBCLG1CQUFtQiw4QkFBOEIseUJBQXlCLEdBQUcsZ0NBQWdDLHlCQUF5QixnQkFBZ0Isc0JBQXNCLG1CQUFtQixtQkFBbUIsdUJBQXVCLEdBQUcsOEJBQThCLDhCQUE4QixHQUFHLHNDQUFzQyxpQkFBaUIsR0FBRyx3Q0FBd0MsaUJBQWlCLEdBQUcsY0FBYyxpQkFBaUIsOEJBQThCLEdBQUcsd0NBQXdDLGtCQUFrQixLQUFLLHVCQUF1QixrQkFBa0IsaUJBQWlCLEdBQUcsNENBQTRDLHVCQUF1QixHQUFHLDZDQUE2QyxrQ0FBa0MsR0FBRyw0REFBNEQsdUJBQXVCLEdBQUcsWUFBWSwrQkFBK0IsdUJBQXVCLGdDQUFnQyxnQkFBZ0Isb0JBQW9CLGlCQUFpQixHQUFHLHFCQUFxQix5QkFBeUIsbUJBQW1CLGtCQUFrQix5Q0FBeUMsb0JBQW9CLDhCQUE4QiwwQkFBMEIsaUJBQWlCLEdBQUcsMEJBQTBCLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQix5QkFBeUIsR0FBRywyQkFBMkIsR0FBRyxpQ0FBaUMsZ0NBQWdDLG9CQUFvQix5QkFBeUIsR0FBRyxvQkFBb0Isc0JBQXNCLHlCQUF5QixHQUFHLG9CQUFvQixzQkFBc0IsZ0NBQWdDLHlCQUF5QixHQUFHLDBCQUEwQixtQkFBbUIsZ0NBQWdDLHlCQUF5QixvQkFBb0IsNkJBQTZCLEtBQUssK0NBQStDLHVCQUF1Qix5QkFBeUIsR0FBRyw4Q0FBOEMscUNBQXFDLHNDQUFzQyxHQUFHLGlCQUFpQixtQkFBbUIsbUJBQW1CLG9CQUFvQiw4QkFBOEIsMEJBQTBCLHNCQUFzQixpQ0FBaUMsR0FBRyx1QkFBdUIsZ0NBQWdDLEdBQUcsbUJBQW1CLHVCQUF1QixrQkFBa0IsbUJBQW1CLG1DQUFtQyxxQ0FBcUMseUJBQXlCLGVBQWUsYUFBYSxzQkFBc0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsNEJBQTRCLGlCQUFpQixHQUFHLHlCQUF5Qiw4QkFBOEIsaUJBQWlCLEdBQUcsb0JBQW9CLG1CQUFtQixtQkFBbUIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsZ0NBQWdDLHFDQUFxQyxzQ0FBc0MsR0FBRywwQkFBMEIsdUJBQXVCLGdEQUFnRCxHQUFHLHlCQUF5QixxQkFBcUIsR0FBRyx1QkFBdUIscUJBQXFCLEdBQUcsbUJBQW1CO0FBQzVsNUI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNaMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDNUJhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2Z5Qzs7QUFFbEM7QUFDUDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9HQUFvRyx5Q0FBeUM7QUFDN0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0MsK0NBQStDO0FBQy9DLGdEQUFnRDtBQUNoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DLGdEQUFnRDtBQUNoRCw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELDhDQUE4QztBQUNwRyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSw2Q0FBNkM7O0FBRTdHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQix1REFBZ0IsR0FBRzs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMkRBQW9CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFLDJDQUEyQzs7QUFFbkg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRkFBaUYsR0FBRztBQUNwRixpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLDJEQUFvQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixHQUFHLFdBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixHQUFHLFdBQVc7QUFDbkM7O0FBRUEsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLElBQUksWUFBWTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStELDJDQUEyQztBQUMxRztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5REFBeUQsYUFBYTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseURBQXlELGFBQWE7QUFDdEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNFQUFzRSwyQ0FBMkM7O0FBRWpIO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLHlDQUF5QztBQUNuSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFLG9EQUFvRDs7QUFFNUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFGQUFxRixpREFBaUQ7O0FBRXRJO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3RUFBd0UsaURBQWlEOzs7QUFHekg7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixpRUFBMEI7QUFDekQ7QUFDQTtBQUNBLDZEQUE2RCwrQkFBK0I7O0FBRTVGO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixnRUFBeUI7QUFDeEQ7QUFDQTtBQUNBLDZEQUE2RCwrQkFBK0I7QUFDNUY7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDZEQUFzQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEdBQUcsV0FBVztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywyREFBb0I7QUFDL0QsMENBQTBDLDJEQUFvQjtBQUM5RDtBQUNBO0FBQ0Esd0JBQXdCLGdFQUF5QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2o4Qk87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2SEQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7QUNyQnFCO0FBQ2dCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJmb250cy9VYnVudHUvVWJ1bnR1LVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiZm9udHMvTGF0by9MYXRvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogVWJ1bnR1O1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogTGF0bztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG4qIHtcXG4gICAgZm9udC1mYW1pbHk6IExhdG87XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBoZWlnaHQ6IDU1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XFxufVxcblxcbi5oZWFkaW5nIHtcXG4gICAgZm9udC1zaXplOiAzM3B4O1xcbn1cXG5cXG4uYXR0cmlidXRlcyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4uYXR0cmlidXRlcywgLmdpdC1hdHRyaWIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi5hdHRyaWJ1dGUsIC5hdHRyaWJ1dGUgPiAqIHtcXG4gICAgY29sb3I6ICM3OTc5Nzk7XFxufVxcblxcbi5hdHRyaWJ1dGVzIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLm1lbnUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5mdW5jdGlvbi1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzYjNiM2I7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM1NTU1NTU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgd2lkdGg6IDEzNXB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4uYWRkLWZ1bmN0aW9uOmhvdmVyLCAucmVtb3ZlLWZ1bmN0aW9uOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk2KTtcXG59XFxuXFxuXFxuLm1haW4tY29udGVudCB7XFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNTVweCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5wcm9qZWN0LWNhdGVnb3J5LWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uc2lkZS1tZW51IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMzBweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZDJkO1xcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMjIyO1xcbn1cXG5cXG4uZ3JvdXAtcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnByb2plY3QtY2F0ZWdvcnktdGl0bGUge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbltkYXRhLWFkdG89XFxcInRydWVcXFwiXSB7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5jYXRlZ29yeS1wcm9qZWN0LWljb24ge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuI2ZpcnN0ID4gLnByb2plY3QtY2F0ZWdvcnktdGl0bGUge1xcbiAgICBmb250LXNpemU6IDI3cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5jYXRlZ29yeS1lbGVtZW50cyB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM5OTk5OTk7XFxufVxcblxcblxcbi5jb250ZW50IHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwMHB4KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xcbn1cXG5cXG4ubWFpbi1zZWN0aW9uLXdpbmRvdyB7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICB3aWR0aDogOTglO1xcbiAgICBoZWlnaHQ6IDk4JTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjN2U3ZTdlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweFxcbn1cXG5cXG4ubWFpbi1zZWN0aW9uLWhlYWRpbmcge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi5zdWItc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc3ViLXNlY3Rpb24tcGxhY2Vob2xkZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uc3ViLWhlYWRpbmcge1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi50b2dnbGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnN1Yi1oZWFkaW5nID4gLnRvZ2dsZSB7XFxuICAgIHdpZHRoOiAxNnB4O1xcbiAgICBoZWlnaHQ6IDE0cHg7XFxufVxcblxcbi50b2dnbGUtaW1nIHtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG5cXG59XFxuXFxuLnRvZ2dsZS1pbWcucm90YXRlZCB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuXFxuLnN1Yi1oZWFkaW5nID4gLmhlYWRpbmcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udG9kbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTI5Mjk7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjN2U3ZTdlO1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4uc2Vjb25kLWRpc3BsYXktbWVudSA+IC50b2RvIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50b2RvLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDMwcHg7XFxufVxcblxcbi50b2RvLmRvbmUge1xcbiAgICBvcGFjaXR5OiAwLjM7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xcbn1cXG5cXG4udG9kby5kb25lID4gICoge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnRvZG8uZG9uZSA+IC50b2RvLW1haW4gPiAgLmNoZWNrLWRvbmV7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcblxcbi50b2RvLW1haW4ge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uY2hlY2tsaXN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnRvZG8tY2hlY2tsaXN0IHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDNweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XFxuICAgIHBhZGRpbmc6IDVweCAwO1xcbn1cXG5cXG4uY2hlY2tsaXN0LWhlYWRpbmcge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uY2hlY2tsaXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5jaGVja2JveC1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmNoZWNrYm94LWNvbnRhaW5lciA+IC5jaGVjay1kb25lLWJ1dHRvbiB7XFxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uY2hlY2tsaXN0LWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5jaGVja2xpc3QtaGVhZGVyID4gLnRvZ2dsZSA+IC50b2dnbGUtaW1nLCAucHJvamVjdC1jYXRlZ29yeS1oZWFkZXIgPiAudG9nZ2xlID4gLnRvZ2dsZS1pbWcge1xcbiAgICB3aWR0aDogMTNweDtcXG59XFxuXFxuLmNoZWNrYm94LWxhYmVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG59XFxuXFxuLmNoZWNrYm94LWlucHV0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNoZWNrYm94LWNvbnRhaW5lciA+IC5jaGVjay1kb25lLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5jaGVja2JveC1jb250YWluZXIgPiAuY2hlY2stZG9uZS1idXR0b246OmJlZm9yZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtNnB4O1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIG9wYWNpdHk6IDAuMjtcXG4gICAgY29udGVudDogJ+Kckyc7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5jcmVhdGUtY2hlY2tib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLmNoZWNrYm94LXRpdGxlLWlucHV0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjYyNiAhaW1wb3J0YW50OyBcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4udG9kby1kZXNjcmlwdGlvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4udG9kby1kZXNjcmlwdGlvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8tcHJpb3JpdHktY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJvdW5kLWJ1dHRvbiwgLmNoZWNrLWRvbmUtYnV0dG9uIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB3aWR0aDogMjhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgaGVpZ2h0OiAyOHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucm91bmQtYnV0dG9uI3N1YnM6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5yb3VuZC1idXR0b24jc3Viczpob3Zlcjo6YmVmb3JlIHtcXG4gICAgY29sb3I6ICMyOTI5Mjk7XFxufVxcblxcbi5yb3VuZC1idXR0b24jYWRkOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5yb3VuZC1idXR0b24jYWRkOmhvdmVyOjpiZWZvcmUge1xcbiAgICBjb2xvcjogIzI5MjkyOTtcXG59XFxuXFxuLnJvdW5kLWJ1dHRvbiNzdWJzOjpiZWZvcmUsIC5yb3VuZC1idXR0b24jYWRkOjpiZWZvcmV7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbiAgICBjb250ZW50OiAnLSc7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbi5yb3VuZC1idXR0b24jc3Viczo6YmVmb3JlIHtcXG4gICAgdG9wOiAtMjAuNXB4O1xcbn1cXG5cXG4ucm91bmQtYnV0dG9uI2FkZDo6YmVmb3JlIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICB0b3A6IC02cHg7XFxuICAgIGxlZnQ6IC0wLjVweDtcXG4gICAgY29udGVudDogJysnO1xcbiAgICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi50b2RvLWR1ZWRhdGUsIC50b2RvLXRpdGxlLCAudG9kby1wcmlvcml0eS1jb250YWluZXIsIC5jaGVjay1kb25lIHtcXG4gICAgd2lkdGg6IDIyMHB4O1xcbn0gICAgXFxuXFxuLnRvZG8tdGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi50b2RvLWR1ZWRhdGUsIC50b2RvLXByaW9yaXR5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBnYXA6IDNweDtcXG59ICAgIFxcblxcbi50b2RvLWxhYmVsIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAxcHggNXB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5jaGVjay1kb25lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRkYXRlLWlucHV0LCAucHJpb3JpdHktdmFsdWUsIC50aXRsZS1pbnB1dCwgLnRvZG8tdGl0bGUtY29udGVudCwgLmNoZWNrYm94LXRpdGxlLWlucHV0LCAuc2V0LWMtcC1pbnB1dCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5wcmlvcml0eS12YWx1ZSwgLnRpdGxlLWlucHV0IHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4uZGRhdGUtaW5wdXQsIC5wcmlvcml0eS12YWx1ZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi5kZGF0ZS1pbnB1dCB7XFxuICAgIHdpZHRoOiAxMjlweDtcXG59XFxuXFxuLnByaW9yaXR5LXZhbHVlIHtcXG4gICAgd2lkdGg6IDcwcHg7XFxufVxcblxcbi50aXRsZS1pbnB1dCB7XFxuICAgIHdpZHRoOiAxODVweDtcXG4gICAgZm9udC1zaXplOiAzNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZDJkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1pbnB1dCB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmQyZDtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4udG9kby10aXRsZS1jb250ZW50IHtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBtYXgtd2lkdGg6IDIyMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiA1NXB4O1xcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgICBmb250LXNpemU6IDM1cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMXB4O1xcbn1cXG5cXG4udGV4dC1lZGl0LWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAyNnB4O1xcbiAgICBoZWlnaHQ6IDI2cHg7XFxufVxcblxcbi5jaGVjay1kb25lLWlucHV0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNoZWNrLWRvbmUtYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmNoZWNrLWRvbmUtYnV0dG9uIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB3aWR0aDogMjhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgaGVpZ2h0OiAyOHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY2hlY2stZG9uZS1idXR0b246OmJlZm9yZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtNHB4O1xcbiAgICBmb250LXNpemU6IDIzcHg7XFxuICAgIG9wYWNpdHk6IDAuMjtcXG4gICAgY29udGVudDogJ+Kckyc7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5jaGVjay1kb25lLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uY2hlY2stZG9uZS1idXR0b246aG92ZXI6OmJlZm9yZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5jaGVjay1kb25lLWJ1dHRvbi5jaGVja2VkOjpiZWZvcmUge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uY2hlY2tlZCB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG5cXG4vKiB3aWR0aCAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICBoZWlnaHQ6IDVweDtcXG4gIH1cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgaGVpZ2h0OiA1cHg7XFxuICAgIHdpZHRoOiA4cHg7XFxufVxcblxcbi8qIFRyYWNrICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJhY2tncm91bmQ6ICMyMjI7XFxufVxcblxcbi8qIEhhbmRsZSAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTksIDE5LCAxOSk7XFxufVxcblxcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjNTU1O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLnNlY29uZC1kaXNwbGF5IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDAgLyAzMCUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLnNlY29uZC1kaXNwbGF5LW1lbnUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc2V0LWNhdGVnb3J5LXByb2plY3Qge1xcbn1cXG5cXG4uc2V0LWNhdGVnb3J5LXByb2plY3QtdGl0bGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMTExO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zZXQtYy1wLWxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAzOHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zZXQtYy1wLWlucHV0IHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxOTE5O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zZWxlY3QtZWxlbWVudC1tZW51IHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMTExO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxufVxcblxcbi5zZWxlY3QtZWxlbWVudC1tZW51IGJ1dHRvbjpmaXJzdC1vZi10eXBlIHtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uc2VsZWN0LWVsZW1lbnQtbWVudSBidXR0b246bGFzdC1vZi10eXBlIHtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcbn1cXG5cXG4uc2VtLW9wdGlvbiB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JheTtcXG59XFxuXFxuLnNlbS1vcHRpb246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhO1xcbn1cXG5cXG4uY2xvc2UtYnV0dG9uIHtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uY3JlYXRlLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI1MjUyNTtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcbn1cXG5cXG4uY3JlYXRlLWJ1dHRvbjpob3ZlciB7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSkgdHJhbnNsYXRlWSgtMC41cHgpO1xcbn1cXG5cXG4uZ3JlZW4tdGV4dC1lbGVtZW50IHtcXG4gICAgY29sb3I6ICM3Y2Q0N2M7XFxufVxcblxcbi5yZWQtdGV4dC1lbGVtZW50IHtcXG4gICAgY29sb3I6ICNlYzVjNWM7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsNENBQXlDO0FBQzdDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDRDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOzs7QUFHQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIs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Q2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFDOUIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogVWJ1bnR1O1xcbiAgICBzcmM6IHVybChmb250cy9VYnVudHUvVWJ1bnR1LVJlZ3VsYXIudHRmKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xcbiAgICBzcmM6IHVybChmb250cy9MYXRvL0xhdG8tUmVndWxhci50dGYpO1xcbn1cXG5cXG4qIHtcXG4gICAgZm9udC1mYW1pbHk6IExhdG87XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBoZWlnaHQ6IDU1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XFxufVxcblxcbi5oZWFkaW5nIHtcXG4gICAgZm9udC1zaXplOiAzM3B4O1xcbn1cXG5cXG4uYXR0cmlidXRlcyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4uYXR0cmlidXRlcywgLmdpdC1hdHRyaWIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi5hdHRyaWJ1dGUsIC5hdHRyaWJ1dGUgPiAqIHtcXG4gICAgY29sb3I6ICM3OTc5Nzk7XFxufVxcblxcbi5hdHRyaWJ1dGVzIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLm1lbnUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5mdW5jdGlvbi1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzYjNiM2I7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM1NTU1NTU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgd2lkdGg6IDEzNXB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4uYWRkLWZ1bmN0aW9uOmhvdmVyLCAucmVtb3ZlLWZ1bmN0aW9uOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk2KTtcXG59XFxuXFxuXFxuLm1haW4tY29udGVudCB7XFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNTVweCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5wcm9qZWN0LWNhdGVnb3J5LWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uc2lkZS1tZW51IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMzBweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZDJkO1xcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMjIyO1xcbn1cXG5cXG4uZ3JvdXAtcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnByb2plY3QtY2F0ZWdvcnktdGl0bGUge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbltkYXRhLWFkdG89XFxcInRydWVcXFwiXSB7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5jYXRlZ29yeS1wcm9qZWN0LWljb24ge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuI2ZpcnN0ID4gLnByb2plY3QtY2F0ZWdvcnktdGl0bGUge1xcbiAgICBmb250LXNpemU6IDI3cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5jYXRlZ29yeS1lbGVtZW50cyB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM5OTk5OTk7XFxufVxcblxcblxcbi5jb250ZW50IHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwMHB4KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xcbn1cXG5cXG4ubWFpbi1zZWN0aW9uLXdpbmRvdyB7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICB3aWR0aDogOTglO1xcbiAgICBoZWlnaHQ6IDk4JTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjN2U3ZTdlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweFxcbn1cXG5cXG4ubWFpbi1zZWN0aW9uLWhlYWRpbmcge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi5zdWItc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc3ViLXNlY3Rpb24tcGxhY2Vob2xkZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uc3ViLWhlYWRpbmcge1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi50b2dnbGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnN1Yi1oZWFkaW5nID4gLnRvZ2dsZSB7XFxuICAgIHdpZHRoOiAxNnB4O1xcbiAgICBoZWlnaHQ6IDE0cHg7XFxufVxcblxcbi50b2dnbGUtaW1nIHtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG5cXG59XFxuXFxuLnRvZ2dsZS1pbWcucm90YXRlZCB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuXFxuLnN1Yi1oZWFkaW5nID4gLmhlYWRpbmcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udG9kbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTI5Mjk7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjN2U3ZTdlO1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4uc2Vjb25kLWRpc3BsYXktbWVudSA+IC50b2RvIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50b2RvLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDMwcHg7XFxufVxcblxcbi50b2RvLmRvbmUge1xcbiAgICBvcGFjaXR5OiAwLjM7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xcbn1cXG5cXG4udG9kby5kb25lID4gICoge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnRvZG8uZG9uZSA+IC50b2RvLW1haW4gPiAgLmNoZWNrLWRvbmV7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcblxcbi50b2RvLW1haW4ge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uY2hlY2tsaXN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnRvZG8tY2hlY2tsaXN0IHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDNweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XFxuICAgIHBhZGRpbmc6IDVweCAwO1xcbn1cXG5cXG4uY2hlY2tsaXN0LWhlYWRpbmcge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uY2hlY2tsaXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5jaGVja2JveC1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmNoZWNrYm94LWNvbnRhaW5lciA+IC5jaGVjay1kb25lLWJ1dHRvbiB7XFxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uY2hlY2tsaXN0LWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5jaGVja2xpc3QtaGVhZGVyID4gLnRvZ2dsZSA+IC50b2dnbGUtaW1nLCAucHJvamVjdC1jYXRlZ29yeS1oZWFkZXIgPiAudG9nZ2xlID4gLnRvZ2dsZS1pbWcge1xcbiAgICB3aWR0aDogMTNweDtcXG59XFxuXFxuLmNoZWNrYm94LWxhYmVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG59XFxuXFxuLmNoZWNrYm94LWlucHV0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNoZWNrYm94LWNvbnRhaW5lciA+IC5jaGVjay1kb25lLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5jaGVja2JveC1jb250YWluZXIgPiAuY2hlY2stZG9uZS1idXR0b246OmJlZm9yZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtNnB4O1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIG9wYWNpdHk6IDAuMjtcXG4gICAgY29udGVudDogJ+Kckyc7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5jcmVhdGUtY2hlY2tib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLmNoZWNrYm94LXRpdGxlLWlucHV0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjYyNiAhaW1wb3J0YW50OyBcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4udG9kby1kZXNjcmlwdGlvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4udG9kby1kZXNjcmlwdGlvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8tcHJpb3JpdHktY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJvdW5kLWJ1dHRvbiwgLmNoZWNrLWRvbmUtYnV0dG9uIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB3aWR0aDogMjhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgaGVpZ2h0OiAyOHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucm91bmQtYnV0dG9uI3N1YnM6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5yb3VuZC1idXR0b24jc3Viczpob3Zlcjo6YmVmb3JlIHtcXG4gICAgY29sb3I6ICMyOTI5Mjk7XFxufVxcblxcbi5yb3VuZC1idXR0b24jYWRkOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5yb3VuZC1idXR0b24jYWRkOmhvdmVyOjpiZWZvcmUge1xcbiAgICBjb2xvcjogIzI5MjkyOTtcXG59XFxuXFxuLnJvdW5kLWJ1dHRvbiNzdWJzOjpiZWZvcmUsIC5yb3VuZC1idXR0b24jYWRkOjpiZWZvcmV7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbiAgICBjb250ZW50OiAnLSc7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbi5yb3VuZC1idXR0b24jc3Viczo6YmVmb3JlIHtcXG4gICAgdG9wOiAtMjAuNXB4O1xcbn1cXG5cXG4ucm91bmQtYnV0dG9uI2FkZDo6YmVmb3JlIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICB0b3A6IC02cHg7XFxuICAgIGxlZnQ6IC0wLjVweDtcXG4gICAgY29udGVudDogJysnO1xcbiAgICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi50b2RvLWR1ZWRhdGUsIC50b2RvLXRpdGxlLCAudG9kby1wcmlvcml0eS1jb250YWluZXIsIC5jaGVjay1kb25lIHtcXG4gICAgd2lkdGg6IDIyMHB4O1xcbn0gICAgXFxuXFxuLnRvZG8tdGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi50b2RvLWR1ZWRhdGUsIC50b2RvLXByaW9yaXR5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBnYXA6IDNweDtcXG59ICAgIFxcblxcbi50b2RvLWxhYmVsIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAxcHggNXB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5jaGVjay1kb25lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRkYXRlLWlucHV0LCAucHJpb3JpdHktdmFsdWUsIC50aXRsZS1pbnB1dCwgLnRvZG8tdGl0bGUtY29udGVudCwgLmNoZWNrYm94LXRpdGxlLWlucHV0LCAuc2V0LWMtcC1pbnB1dCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5wcmlvcml0eS12YWx1ZSwgLnRpdGxlLWlucHV0IHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4uZGRhdGUtaW5wdXQsIC5wcmlvcml0eS12YWx1ZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi5kZGF0ZS1pbnB1dCB7XFxuICAgIHdpZHRoOiAxMjlweDtcXG59XFxuXFxuLnByaW9yaXR5LXZhbHVlIHtcXG4gICAgd2lkdGg6IDcwcHg7XFxufVxcblxcbi50aXRsZS1pbnB1dCB7XFxuICAgIHdpZHRoOiAxODVweDtcXG4gICAgZm9udC1zaXplOiAzNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZDJkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1pbnB1dCB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmQyZDtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4udG9kby10aXRsZS1jb250ZW50IHtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBtYXgtd2lkdGg6IDIyMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiA1NXB4O1xcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgICBmb250LXNpemU6IDM1cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMXB4O1xcbn1cXG5cXG4udGV4dC1lZGl0LWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAyNnB4O1xcbiAgICBoZWlnaHQ6IDI2cHg7XFxufVxcblxcbi5jaGVjay1kb25lLWlucHV0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNoZWNrLWRvbmUtYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmNoZWNrLWRvbmUtYnV0dG9uIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB3aWR0aDogMjhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgaGVpZ2h0OiAyOHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY2hlY2stZG9uZS1idXR0b246OmJlZm9yZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtNHB4O1xcbiAgICBmb250LXNpemU6IDIzcHg7XFxuICAgIG9wYWNpdHk6IDAuMjtcXG4gICAgY29udGVudDogJ+Kckyc7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5jaGVjay1kb25lLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uY2hlY2stZG9uZS1idXR0b246aG92ZXI6OmJlZm9yZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5jaGVjay1kb25lLWJ1dHRvbi5jaGVja2VkOjpiZWZvcmUge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uY2hlY2tlZCB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG5cXG4vKiB3aWR0aCAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICBoZWlnaHQ6IDVweDtcXG4gIH1cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgaGVpZ2h0OiA1cHg7XFxuICAgIHdpZHRoOiA4cHg7XFxufVxcblxcbi8qIFRyYWNrICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJhY2tncm91bmQ6ICMyMjI7XFxufVxcblxcbi8qIEhhbmRsZSAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTksIDE5LCAxOSk7XFxufVxcblxcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjNTU1O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLnNlY29uZC1kaXNwbGF5IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDAgLyAzMCUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLnNlY29uZC1kaXNwbGF5LW1lbnUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc2V0LWNhdGVnb3J5LXByb2plY3Qge1xcbn1cXG5cXG4uc2V0LWNhdGVnb3J5LXByb2plY3QtdGl0bGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMTExO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zZXQtYy1wLWxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAzOHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zZXQtYy1wLWlucHV0IHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxOTE5O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zZWxlY3QtZWxlbWVudC1tZW51IHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMTExO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxufVxcblxcbi5zZWxlY3QtZWxlbWVudC1tZW51IGJ1dHRvbjpmaXJzdC1vZi10eXBlIHtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uc2VsZWN0LWVsZW1lbnQtbWVudSBidXR0b246bGFzdC1vZi10eXBlIHtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcbn1cXG5cXG4uc2VtLW9wdGlvbiB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JheTtcXG59XFxuXFxuLnNlbS1vcHRpb246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhO1xcbn1cXG5cXG4uY2xvc2UtYnV0dG9uIHtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uY3JlYXRlLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI1MjUyNTtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcbn1cXG5cXG4uY3JlYXRlLWJ1dHRvbjpob3ZlciB7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSkgdHJhbnNsYXRlWSgtMC41cHgpO1xcbn1cXG5cXG4uZ3JlZW4tdGV4dC1lbGVtZW50IHtcXG4gICAgY29sb3I6ICM3Y2Q0N2M7XFxufVxcblxcbi5yZWQtdGV4dC1lbGVtZW50IHtcXG4gICAgY29sb3I6ICNlYzVjNWM7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBsb2dpY01vZHVsZSB9IGZyb20gJy4vbG9naWMuanMnO1xuXG5leHBvcnQgbGV0IGRvbU1vZHVsZSA9IFxuKGZ1bmN0aW9uKClcbntcbiAgICBsZXQgYWRkRnVuY3Rpb25PbiA9IGZhbHNlO1xuICAgIGxldCByZW1vdmVGdW5jdGlvbk9uID0gZmFsc2U7XG5cblxuICAgIGZ1bmN0aW9uIGNoZWNrVmFsaWRpdHlUZXh0RW1wdHkodGV4dElucHV0KVxuICAgIHtcbiAgICAgICAgaWYodGV4dElucHV0LnZhbGlkaXR5LnZhbHVlTWlzc2luZylcbiAgICAgICAge1xuICAgICAgICAgICAgdGV4dElucHV0LnNldEN1c3RvbVZhbGlkaXR5KCdNdXN0IGNvbnNpc3QgYXQgbGVhc3Qgb25lIGNoYXJhY3RlcicpO1xuICAgICAgICAgICAgdGV4dElucHV0LnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGxldCBlZGl0SWNvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZXh0LWVkaXQtYnV0dG9uJykpO1xuICAgIGVkaXRJY29ucy5mb3JFYWNoKGVkaXRJY29uID0+IFxuICAgIHtcbiAgICAgICAgZWRpdEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBcbiAgICAgICAge1xuICAgICAgICAgICAgZWRpdEljb25BZGRFdmVudExpc3RlbmVycyhlZGl0SWNvbik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGZ1bmN0aW9uIGVkaXRJY29uQWRkRXZlbnRMaXN0ZW5lcnMoZWRpdEljb24pXG4gICAge1xuICAgICAgICBsZXQgcGFyZW50ID0gZWRpdEljb24ucGFyZW50RWxlbWVudDtcbiAgICAgICAgbGV0IGlucHV0ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgICAgIGxldCBjb250ZW50RGl2ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXh0LWNvbnRlbnQnKTtcbiAgICAgICAgbGV0IGltZyA9IGVkaXRJY29uLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuICAgICAgICBpZihlZGl0SWNvbi5nZXRBdHRyaWJ1dGUoJ2lkJykgPT0gJ3JlYWQtbW9kZScpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsICdncmFwaGljcy9zYXZlLWljb24ucG5nJyk7XG4gICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdhbHQnLCAnc2F2ZSBpbmRpY2F0b3IgaWNvbicpO1xuICAgICAgICAgICAgZWRpdEljb24uc2V0QXR0cmlidXRlKCdpZCcsICdlZGl0LW1vZGUnKTtcbiAgICAgICAgICAgIGNvbnRlbnREaXYuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICAgICAgaW5wdXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2Rpc3BsYXknKTtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gY29udGVudERpdi50ZXh0Q29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGVkaXRJY29uLmdldEF0dHJpYnV0ZSgnaWQnKSA9PSAnZWRpdC1tb2RlJylcbiAgICAgICAge1xuICAgICAgICAgICAgaWYoY2hlY2tWYWxpZGl0eVRleHRFbXB0eShpbnB1dCkgfHwgaW5wdXQuZ2V0QXR0cmlidXRlKCd2YWxpZGF0ZS1lbXB0eScpID09ICdmYWxzZScpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29udGVudERpdi50ZXh0Q29udGVudCA9IGlucHV0LnZhbHVlO1xuICAgICAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsICdncmFwaGljcy9lZGl0LWljb24ucG5nJyk7XG4gICAgICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2VkaXQgaW5kaWNhdG9yIGljb24nKTtcbiAgICAgICAgICAgICAgICBlZGl0SWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JlYWQtbW9kZScpO1xuICAgICAgICAgICAgICAgIGNvbnRlbnREaXYuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2Rpc3BsYXknKTtcbiAgICAgICAgICAgICAgICBpbnB1dC5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgY2hlY2tCdXR0b25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2stZG9uZS1idXR0b24nKSkuZmlsdGVyKCAoY2IpID0+IHtyZXR1cm4gY2IuZ2V0QXR0cmlidXRlKCdpZCcpICE9ICdtYWluQ0InfSk7XG4gICAgY2hlY2tCdXR0b25zLmZvckVhY2goY2hlY2tCdXR0b24gPT4gXG4gICAge1xuICAgICAgICBjaGVja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNoZWNrQnV0dG9uQWRkRXZlbnRMaXN0ZW5lcnMoY2hlY2tCdXR0b24pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBmdW5jdGlvbiBjaGVja0J1dHRvbkFkZEV2ZW50TGlzdGVuZXJzKGNoZWNrQnV0dG9uKVxuICAgIHtcbiAgICAgICAgaWYoIShjaGVja0J1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrZWQnKSkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNoZWNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGNoZWNrQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnY2hlY2tlZCcpKVxuICAgICAgICB7XG4gICAgICAgICAgICBjaGVja0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdjaGVja2VkJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgbWFpbkNoZWNrQnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI21haW5DQicpKTtcbiAgICBtYWluQ2hlY2tCdXR0b25zLmZvckVhY2goY2hlY2tCdXR0b24gPT4gXG4gICAge1xuICAgICAgICBjaGVja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIG1haW5DQkFkZEV2ZW50TGlzdGVuZXJzKGNoZWNrQnV0dG9uKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gbWFpbkNCQWRkRXZlbnRMaXN0ZW5lcnMoY2hlY2tCdXR0b24pXG4gICAge1xuICAgICAgICBsZXQgdG9kbyA9IGNoZWNrQnV0dG9uLmNsb3Nlc3QoJ2Rpdi50b2RvJyk7XG4gICAgICAgIGxldCBkYXRlSW5wdXQgPSB0b2RvLnF1ZXJ5U2VsZWN0b3IoJy5kZGF0ZS1pbnB1dCcpO1xuICAgICAgICBpZihjaGVja0J1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrZWQnKSlcbiAgICAgICAge1xuICAgICAgICAgICAgY2hlY2tCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2tlZCcpO1xuICAgICAgICAgICAgdG9kby5jbGFzc0xpc3QucmVtb3ZlKCdkb25lJyk7XG4gICAgICAgICAgICBkYXRlSW5wdXQucmVtb3ZlQXR0cmlidXRlKCdyZWFkb25seScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoIShjaGVja0J1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrZWQnKSkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNoZWNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcbiAgICAgICAgICAgIGxldCBpY29ucyA9IHRvZG8ucXVlcnlTZWxlY3RvckFsbCgnLnRleHQtZWRpdC1idXR0b24nKTtcbiAgICAgICAgICAgIGljb25zLmZvckVhY2goIGljb24gPT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZihpY29uLmdldEF0dHJpYnV0ZSgnaWQnKSA9PSAnZWRpdC1tb2RlJylcbiAgICAgICAgICAgICAgICAgICAgZWRpdEljb25BZGRFdmVudExpc3RlbmVycyhpY29uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAnJyk7XG4gICAgICAgICAgICB0b2RvLmNsYXNzTGlzdC5hZGQoJ2RvbmUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBwcmlvcml0eVNwaW5uZXJzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhbmdlLXByaW9yaXR5JykpO1xuICAgIHByaW9yaXR5U3Bpbm5lcnMuZm9yRWFjaChwcmlvcml0eVNwaW5uZXIgPT4gXG4gICAge1xuICAgICAgICBwcmlvcml0eVNwaW5uZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgICAgICB7XG4gICAgICAgICAgICBwcmlvcml0eVNwaW5uZXJzQWRkRXZlbnRMaXN0ZW5lcnMocHJpb3JpdHlTcGlubmVyKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gcHJpb3JpdHlTcGlubmVyc0FkZEV2ZW50TGlzdGVuZXJzKHByaW9yaXR5U3Bpbm5lcilcbiAgICB7XG4gICAgICAgIGxldCBpZCA9IHByaW9yaXR5U3Bpbm5lci5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgIGxldCBwcmlvcml0eUNvbnRlbnQgPSBwcmlvcml0eVNwaW5uZXIuY2xvc2VzdCgnLnRvZG8tcHJpb3JpdHktY29udGFpbmVyJykucXVlcnlTZWxlY3RvcignLnByaW9yaXR5LXZhbHVlJyk7XG4gICAgICAgIGxldCB2YWx1ZSA9IHByaW9yaXR5Q29udGVudC50ZXh0Q29udGVudDtcblxuICAgICAgICBpZihpZCA9PSAnc3VicycpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN3aXRjaCh2YWx1ZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjYXNlICdsb3cnIDogdmFsdWUgPSAnaGlnaCc7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ25vcm1hbCcgOiB2YWx1ZSA9ICdsb3cnOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdoaWdoJyA6IHZhbHVlID0gJ25vcm1hbCc7IGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSBpZihpZCA9PSAnYWRkJylcbiAgICAgICAge1xuICAgICAgICAgICAgc3dpdGNoKHZhbHVlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2xvdycgOiB2YWx1ZSA9ICdub3JtYWwnOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdub3JtYWwnIDogdmFsdWUgPSAnaGlnaCc7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2hpZ2gnIDogdmFsdWUgPSAnbG93JzsgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcHJpb3JpdHlDb250ZW50LnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgbGV0IHRvZ2dsZUJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2dnbGUtaW1nJykpO1xuICAgIHRvZ2dsZUJ1dHRvbnMuZm9yRWFjaCggKHRvZ2dsZUJ1dHRvbikgPT4gXG4gICAge1xuICAgICAgICB0b2dnbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7cHJvamVjdFRvZ2dsZXNBZGRFdmVudExpc3RlbmVycyh0b2dnbGVCdXR0b24pfSk7XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gcHJvamVjdFRvZ2dsZXNBZGRFdmVudExpc3RlbmVycyh0b2dnbGVCdXR0b24pXG4gICAge1xuICAgICAgICBsZXQgZWxlbWVudHNUb1RvZ2dsZSA9IHRvZ2dsZUJ1dHRvbi5jbG9zZXN0KCcjdG9nZ2xlLWNvbnRhaW5lcicpLnF1ZXJ5U2VsZWN0b3IoJyN0b2dnbGFibGUnKSAucXVlcnlTZWxlY3RvckFsbCgnOnNjb3BlID4gKicpO1xuICAgICAgICBpZighKHRvZ2dsZUJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3JvdGF0ZWQnKSkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRvZ2dsZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyb3RhdGVkJylcbiAgICAgICAgICAgIGVsZW1lbnRzVG9Ub2dnbGUuZm9yRWFjaCggKGVsZW1lbnRUb1RvZ2dsZSkgPT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50VG9Ub2dnbGUuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0b2dnbGVCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdyb3RhdGVkJykpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRvZ2dsZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdyb3RhdGVkJylcbiAgICAgICAgICAgIGVsZW1lbnRzVG9Ub2dnbGUuZm9yRWFjaCggKGVsZW1lbnRUb1RvZ2dsZSkgPT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50VG9Ub2dnbGUuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2Rpc3BsYXknKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGFkZENoZWNrYm94QnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFkZC1jaGVja2JveCcpKTtcbiAgICBhZGRDaGVja2JveEJ1dHRvbnMuZm9yRWFjaCggYWRkQ2hlY2tib3hCdXR0b24gPT5cbiAgICB7XG4gICAgICAgIGFkZENoZWNrYm94QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICAgICAge1xuICAgICAgICAgICAgYWRkQ2hlY2tib3hCdXR0b25BY3Rpb24oYWRkQ2hlY2tib3hCdXR0b24pO1xuICAgICAgICB9KTsgXG4gICAgfSk7XG4gICAgZnVuY3Rpb24gYWRkQ2hlY2tib3hCdXR0b25BY3Rpb24oYWRkQ2hlY2tib3hCdXR0b24pIFxuICAgIHtcbiAgICAgICAgbGV0IGNoZWNrbGlzdENvbnRhaW5lciA9IGFkZENoZWNrYm94QnV0dG9uLmNsb3Nlc3QoJy5jaGVja2xpc3QtY29udGFpbmVyJylcbiAgICAgICAgbGV0IGNoZWNrbGlzdCA9IGNoZWNrbGlzdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2hlY2tsaXN0Jyk7XG4gICAgICAgIGxldCB0aXRsZUlucHV0ID0gY2hlY2tsaXN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveC10aXRsZS1pbnB1dCcpO1xuXG4gICAgICAgIGlmKGNoZWNrVmFsaWRpdHlUZXh0RW1wdHkodGl0bGVJbnB1dCkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBjaGVja2JveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY2hlY2tib3hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gtY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICBsZXQgY2hlY2tib3hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjaGVja2JveEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjaGVjay1kb25lLWJ1dHRvbicpO1xuICAgICAgICAgICAgICAgIGNoZWNrQnV0dG9ucy5wdXNoKGNoZWNrYm94QnV0dG9uKTtcbiAgICAgICAgICAgICAgICBjaGVja2JveEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtjaGVja0J1dHRvbkFkZEV2ZW50TGlzdGVuZXJzKGNoZWNrYm94QnV0dG9uKX0pO1xuXG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrYm94TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjaGVja2JveExhYmVsLmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94LWxhYmVsJyk7XG5cbiAgICAgICAgICAgICAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveEJ1dHRvbik7XG4gICAgICAgICAgICAgICAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3hMYWJlbCk7XG4gICAgICAgICAgICAgICAgY2hlY2tib3hMYWJlbC50ZXh0Q29udGVudCA9IHRpdGxlSW5wdXQudmFsdWU7XG4gICAgICAgICAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSA9ICcnO1xuXG4gICAgICAgICAgICAgICAgY2hlY2tsaXN0Lmluc2VydEJlZm9yZShjaGVja2JveENvbnRhaW5lciwgY2hlY2tsaXN0LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtY2hlY2tib3gnKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgY2xvc2VTREJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS1zZWNvbmQtZGlzcGxheScpO1xuICAgIGNsb3NlU0RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgIHtcbiAgICAgICAgY2xvc2VTREJ1dHRvbkFjdGlvbnMoY2xvc2VTREJ1dHRvbikgXG4gICAgfSk7XG4gICAgZnVuY3Rpb24gY2xvc2VTREJ1dHRvbkFjdGlvbnMoY2xvc2VTREJ1dHRvbikgXG4gICAge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Vjb25kLWRpc3BsYXknKS5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7IFxuICAgIH1cblxuICAgIGdlbmVyYXRlRGlyZWN0b3J5KGxvZ2ljTW9kdWxlLnJvb3QpOyAvLyEhIVxuXG4gICAgbGV0IGFkZFRvRWxlbWVudHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWFkdG89XCJ0cnVlXCJdJykpO1xuICAgIGFkZFRvRWxlbWVudHMuZm9yRWFjaCggYWRkVG9FbGVtZW50ID0+XG4gICAge1xuICAgICAgICBhZGRUb0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUpID0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGFkZFRvRWxlbWVudEFjdGlvbihhZGRUb0VsZW1lbnQpO1xuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gYWRkVG9FbGVtZW50QWN0aW9uKGFkZFRvRWxlbWVudClcbiAgICB7XG4gICAgICAgIGlmKGFkZEZ1bmN0aW9uT24gPT0gZmFsc2UgJiYgcmVtb3ZlRnVuY3Rpb25PbiA9PSBmYWxzZSlcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGxhc3REaXNwbGF5ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1kaXNwbGF5ZWQ9XCJ0cnVlXCJdJyk7XG4gICAgICAgICAgICBpZihsYXN0RGlzcGxheWVkKVxuICAgICAgICAgICAgICAgIGxhc3REaXNwbGF5ZWQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWRpc3BsYXllZCcpO1xuICAgICAgICAgICAgYWRkVG9FbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1kaXNwbGF5ZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgZ2VuZXJhdGVEaXJlY3RvcnlFbGVtZW50KGFkZFRvRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVEaXJlY3RvcnlFbGVtZW50KGFkZFRvRWxlbWVudClcbiAgICB7XG4gICAgICAgIGxldCBtYWluU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXNlY3Rpb24td2luZG93Jyk7XG4gICAgICAgIGxldCBzdWJTZWN0aW9uID0gbWFpblNlY3Rpb24ucXVlcnlTZWxlY3RvcignLnN1Yi1zZWN0aW9uJyk7XG4gICAgICAgIGlmKHN1YlNlY3Rpb24ubGFzdENoaWxkKVxuICAgICAgICAgICAgcmVtb3ZlQ2hpbGRyZW4oc3ViU2VjdGlvbik7XG4gICAgICAgIGFkZFRvRWxlbWVudCA9IGxvZ2ljTW9kdWxlLmZpbmRCeUlEKGdldEVsZW1lbnRSb3V0ZShhZGRUb0VsZW1lbnQpKTtcbiAgICAgICAgbWFpblNlY3Rpb24ucXVlcnlTZWxlY3RvcignLm1haW4tc2VjdGlvbi1oZWFkaW5nJykudGV4dENvbnRlbnQgPSBhZGRUb0VsZW1lbnQudGl0bGU7XG4gICAgICAgIGZvcihsZXQgZWxlbWVudCBvZiBhZGRUb0VsZW1lbnQuY29udGVudHMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKGVsZW1lbnQuY29uc3RydWN0b3IubmFtZSA9PSAnUHJvamVjdCcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAndG9nZ2xlLWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdWJIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7ICBcbiAgICAgICAgICAgICAgICAgICAgc3ViSGVhZGluZy5jbGFzc0xpc3QuYWRkKCdzdWItaGVhZGluZycpICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b2dnbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LmFkZCgndG9nZ2xlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9nZ2xlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZUltZy5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtaW1nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywnLi4vZGlzdC9ncmFwaGljcy90b2dnbGUucG5nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlSW1nLnNldEF0dHJpYnV0ZSgnYWx0JywnaWNvbiBvZiBhIHRvZ2dsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZUJ1dHRvbnMucHVzaCh0b2dnbGVJbWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZUltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgcHJvamVjdFRvZ2dsZXNBZGRFdmVudExpc3RlbmVycyh0b2dnbGVJbWcpfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGUuYXBwZW5kQ2hpbGQodG9nZ2xlSW1nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBlbGVtZW50LnRpdGxlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJIZWFkaW5nLmFwcGVuZENoaWxkKHRvZ2dsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJIZWFkaW5nLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9kb0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0xpc3QuY2xhc3NMaXN0LmFkZCgndG9kby1saXN0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9MaXN0LnNldEF0dHJpYnV0ZSgnaWQnLCAndG9nZ2xhYmxlJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgdG9kbyBvZiBlbGVtZW50LmNvbnRlbnRzKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3VG9kbyA9IGNyZWF0ZVRvZG8odG9kbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvTGlzdC5hcHBlbmRDaGlsZChuZXdUb2RvKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQoc3ViSGVhZGluZyk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQodG9kb0xpc3QpO1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Yi1zZWN0aW9uJykuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGVsZW1lbnQuY29uc3RydWN0b3IubmFtZSA9PSAnQ2F0ZWdvcnknKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCBzdWJIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgc3ViSGVhZGluZy5jbGFzc0xpc3QuYWRkKCdzdWItaGVhZGluZycpXG4gICAgICAgICAgICAgICAgc3ViSGVhZGluZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpZCA9IGVsZW1lbnQuaWQ7XG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRGlyZWN0b3J5RWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7aWR9XCJgKSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBlbGVtZW50LnRpdGxlO1xuXG4gICAgICAgICAgICAgICAgICAgIHN1YkhlYWRpbmcuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Yi1zZWN0aW9uJykuYXBwZW5kQ2hpbGQoc3ViSGVhZGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCB0b2RvID0gY3JlYXRlVG9kbyhlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBzdWJTZWN0aW9uLmFwcGVuZENoaWxkKHRvZG8pO1xuICAgICAgICAgICAgICAgIHRvZG8ucXVlcnlTZWxlY3RvcignLmRkYXRlLWlucHV0JykudmFsdWUgPSBlbGVtZW50LmR1ZWRhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGxldCBhZGRGdW5jdGlvbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZnVuY3Rpb24nKTtcbiAgICBhZGRGdW5jdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAge1xuICAgICAgICBhZGRGdW5jdGlvbihhZGRUb0VsZW1lbnRzKTtcbiAgICB9KTtcbiAgICBmdW5jdGlvbiBhZGRGdW5jdGlvbihhZGRUb0VsZW1lbnRzKVxuICAgIHtcbiAgICAgICAgaWYoYWRkRnVuY3Rpb25PbiA9PSBmYWxzZSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYocmVtb3ZlRnVuY3Rpb25PbiA9PSB0cnVlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR1cm5PZmZSZW1vdmVGdW5jdGlvbihyZW1vdmVFbGVtZW50cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhZGRGdW5jdGlvbk9uID0gdHJ1ZTtcbiAgICAgICAgICAgIGFkZFRvRWxlbWVudHMuZm9yRWFjaCggKGFkZFRvRWxlbWVudCkgPT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhZGRUb0VsZW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY2F0ZWdvcnktdGl0bGUnKS5jbGFzc0xpc3QuYWRkKCdncmVlbi10ZXh0LWVsZW1lbnQnKTtcblxuICAgICAgICAgICAgICAgIGFkZFRvRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoYWRkRnVuY3Rpb25PbiA9PSB0cnVlKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaWQgPSBhZGRUb0VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcm91dGUgPSBnZXRFbGVtZW50Um91dGUoYWRkVG9FbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJlbnQgPSBsb2dpY01vZHVsZS5maW5kQnlJRChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWVudSA9IGdlbmVyYXRlRWxlbWVudE1lbnUocGFyZW50LCBhZGRUb0VsZW1lbnQsIHJvdXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvcHRpb25zID0gbWVudS5xdWVyeVNlbGVjdG9yQWxsKCcuc2VtLW9wdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHVybk9mZkFkZEZ1bmN0aW9uKGFkZFRvRWxlbWVudHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBcbiAgICAgICAgICAgIHR1cm5PZmZBZGRGdW5jdGlvbihhZGRUb0VsZW1lbnRzKTtcblxuICAgIH1cbiAgICBmdW5jdGlvbiB0dXJuT2ZmQWRkRnVuY3Rpb24oYWRkVG9FbGVtZW50cylcbiAgICB7XG4gICAgICAgIGFkZEZ1bmN0aW9uT24gPSBmYWxzZTtcbiAgICAgICAgYWRkVG9FbGVtZW50cy5mb3JFYWNoKCBhZGRUb0VsZW1lbnQgPT5cbiAgICAgICAge1xuICAgICAgICAgICAgYWRkVG9FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNhdGVnb3J5LXRpdGxlJykuY2xhc3NMaXN0LnJlbW92ZSgnZ3JlZW4tdGV4dC1lbGVtZW50Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzZXRTZWNvbmREaXNwbGF5KClcbiAgICB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWNvbmQtZGlzcGxheScpLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVFbGVtZW50TWVudShwYXJlbnQsIGNvbnRhaW5lciwgcm91dGUpXG4gICAge1xuICAgICAgICBzZXRTZWNvbmREaXNwbGF5KCk7XG4gICAgICAgIGxldCBvcHRpb247XG4gICAgICAgIGxldCBjYW5Db250ZW50ID0gcGFyZW50LmNhbkNvbnRlbnQ7XG4gICAgICAgIGxldCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdC1lbGVtZW50LW1lbnUnKTtcbiAgICAgICAgbWVudS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgIGZvcihsZXQgY29udGVudCBvZiBjYW5Db250ZW50KVxuICAgICAgICB7XG4gICAgICAgICAgICBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIG9wdGlvbi5jbGFzc0xpc3QuYWRkKCdzZW0tb3B0aW9uJyk7XG4gICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICAgICAgb3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBtZW51LnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICAgICAgICAgICBsZXQgY3JlYXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1idXR0b24nKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVCdXR0b24uc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2Rpc3BsYXknKTtcbiAgICAgICAgICAgICAgICBpZihjb250ZW50ID09ICdjYXRlZ29yeScgfHwgY29udGVudCA9PSAncHJvamVjdCcpXG4gICAgICAgICAgICAgICAgeyAgIFxuICAgICAgICAgICAgICAgICAgICBsZXQgdGl0bGVJbnB1dE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0LWNhdGVnb3J5LXByb2plY3QtdGl0bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVJbnB1dE1lbnUuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2Rpc3BsYXknKTtcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VTREJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlSW5wdXRNZW51LnF1ZXJ5U2VsZWN0b3IoJy5zZXQtYy1wLWlucHV0JykudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlSW5wdXRNZW51LnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZUJ1dHRvbkFjdGlvbihjcmVhdGVCdXR0b24sIHBhcmVudCwgY29udGVudCwgY29udGFpbmVyLCByb3V0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIHtvbmNlOiB0cnVlfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWNvbmQtZGlzcGxheScpLnF1ZXJ5U2VsZWN0b3IoJy50b2RvJyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG8uc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2Rpc3BsYXknKTtcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VTREJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyQWRkVG9kbyh0b2RvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZG8uc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlQnV0dG9uQWN0aW9uKGNyZWF0ZUJ1dHRvbiwgcGFyZW50LCBjb250ZW50LCBjb250YWluZXIsIHJvdXRlLCBnZXRUb2RvVmFsdWVzKHRvZG8pKTtcbiAgICAgICAgICAgICAgICAgICAgfSwge29uY2U6IHRydWV9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbWVudS5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGNsb3NlU0RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgICAgICB7XG4gICAgICAgICAgICByZW1vdmVDaGlsZHJlbihtZW51KTtcbiAgICAgICAgfSwgeyBvbmNlOiB0cnVlIH0pO1xuICAgICAgICByZXR1cm4gbWVudTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVtb3ZlQ2hpbGRyZW4ocGFyZW50KVxuICAgIHtcbiAgICAgICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSBcbiAgICAgICAge1xuICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5sYXN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlRGlyZWN0b3J5KGRpcmVjdG9yeSlcbiAgICB7XG4gICAgICAgIGxldCBkaXJlY3RvcnlDb250ZW50ID0gZGlyZWN0b3J5LmNvbnRlbnRzO1xuXG4gICAgICAgIGlmKGRpcmVjdG9yeUNvbnRlbnQubGVuZ3RoICE9IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvcihsZXQgZWxlbWVudCBvZiBkaXJlY3RvcnlDb250ZW50KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQuZHVlRGF0ZSA9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZihlbGVtZW50LmNhbkNvbnRlbnQpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQuY2FuQ29udGVudFswXSA9PSAncHJvamVjdCcpXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlQ2F0ZWdvcnkoZGlyZWN0b3J5LCBlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZURpcmVjdG9yeShlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoZWxlbWVudC5jYW5Db250ZW50WzBdID09ICd0b2RvJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVQcm9qZWN0KGRpcmVjdG9yeSwgZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlQ2F0ZWdvcnkoZGlyZWN0b3J5LCBlbGVtZW50KVxuICAgIHtcbiAgICAgICAgbGV0IGNhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhdGVnb3J5LmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5Jyk7XG4gICAgICAgIGNhdGVnb3J5LnNldEF0dHJpYnV0ZSgnaWQnLCAndG9nZ2xlLWNvbnRhaW5lcicpO1xuICAgICAgICBjYXRlZ29yeS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBlbGVtZW50LmlkKTtcbiAgICAgICAgY2F0ZWdvcnkuc2V0QXR0cmlidXRlKCdkYXRhLWFkdG8nLCAndHJ1ZScpO1xuXG4gICAgICAgICAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jYXRlZ29yeS1oZWFkZXInKTtcblxuICAgICAgICAgICAgICAgIGxldCB0b2dnbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LmFkZCgndG9nZ2xlJylcblxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9nZ2xlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUltZy5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtaW1nJyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9kaXN0L2dyYXBoaWNzL3RvZ2dsZS5wbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlSW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2ljb24gb2YgYSB0b2dnbGUnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQnV0dG9ucy5wdXNoKHRvZ2dsZUltZyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtwcm9qZWN0VG9nZ2xlc0FkZEV2ZW50TGlzdGVuZXJzKHRvZ2dsZUltZyl9KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnktcHJvamVjdC1pY29uJyk7XG4gICAgICAgICAgICAgICAgaWNvbi50ZXh0Q29udGVudCA9ICdDJztcblxuICAgICAgICAgICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY2F0ZWdvcnktdGl0bGUnKTtcbiAgICAgICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGVsZW1lbnQudGl0bGU7XG5cbiAgICAgICAgICAgIGxldCBjYXRlZ29yeUVsZW1lbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjYXRlZ29yeUVsZW1lbnRzLmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5LWVsZW1lbnRzJyk7XG4gICAgICAgICAgICBjYXRlZ29yeUVsZW1lbnRzLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9nZ2xhYmxlJyk7XG5cbiAgICAgICAgICAgIHRvZ2dsZS5hcHBlbmRDaGlsZCh0b2dnbGVJbWcpO1xuICAgICAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKHRvZ2dsZSk7XG4gICAgICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICAgICAgY2F0ZWdvcnkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICAgICAgICAgIGNhdGVnb3J5LmFwcGVuZENoaWxkKGNhdGVnb3J5RWxlbWVudHMpO1xuXG4gICAgICAgIGxldCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7ZGlyZWN0b3J5LmlkfVwiXWApLnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeS1lbGVtZW50cycpO1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2F0ZWdvcnkpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGNhdGVnb3J5O1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KGRpcmVjdG9yeSwgZWxlbWVudClcbiAgICB7XG4gICAgICAgIGxldCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3RIZWFkZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jYXRlZ29yeS1oZWFkZXInKTtcbiAgICAgICAgcHJvamVjdEhlYWRlci5zZXRBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudCcsICdwcm9qZWN0Jyk7XG4gICAgICAgIHByb2plY3RIZWFkZXIuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgZWxlbWVudC5pZCk7XG4gICAgICAgIHByb2plY3RIZWFkZXIuc2V0QXR0cmlidXRlKCdkYXRhLWFkdG8nLCAndHJ1ZScpO1xuXG4gICAgICAgICAgICBsZXQgcHJvamVjdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2plY3RJY29uLmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5LXByb2plY3QtaWNvbicpO1xuICAgICAgICAgICAgcHJvamVjdEljb24udGV4dENvbnRlbnQgPSAnUCc7XG5cbiAgICAgICAgICAgIGxldCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNhdGVnb3J5LXRpdGxlJyk7XG4gICAgICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBlbGVtZW50LnRpdGxlO1xuXG4gICAgICAgICAgICBwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKHByb2plY3RJY29uKTtcbiAgICAgICAgICAgIHByb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7ZGlyZWN0b3J5LmlkfVwiXWApLnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeS1lbGVtZW50cycpO1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRlcik7XG5cbiAgICAgICAgcmV0dXJuIHByb2plY3RIZWFkZXI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZUFuZEFwcGVuZFRvZG8odG9kb1ZhbHVlcywgcGFyZW50KVxuICAgIHtcbiAgICAgICAgbGV0IHRvZG8gPSBjcmVhdGVUb2RvKHRvZG9WYWx1ZXMpO1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodG9kbyk7XG4gICAgICAgIGlmKHRvZG9WYWx1ZXMuaXNEb25lKVxuICAgICAgICAgICAgbWFpbkNCQWRkRXZlbnRMaXN0ZW5lcnModG9kby5xdWVyeVNlbGVjdG9yKCcuY2hlY2stZG9uZS1idXR0b24nKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNsZWFyQWRkVG9kbyh0b2RvKVxuICAgIHtcbiAgICAgICAgdG9kby5xdWVyeVNlbGVjdG9yKCcudGl0bGUtaW5wdXQnKS52YWx1ZSA9ICcnO1xuICAgICAgICB0b2RvLnF1ZXJ5U2VsZWN0b3IoJy5kZGF0ZS1pbnB1dCcpLnZhbHVlID0gJyc7XG4gICAgICAgIHRvZG8ucXVlcnlTZWxlY3RvcignLnByaW9yaXR5LXZhbHVlJykudmFsdWUgPSAnbm9ybWFsJztcbiAgICAgICAgdG9kby5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb24taW5wdXQnKS52YWx1ZSA9ICcnO1xuICAgICAgICBsZXQgY2hlY2tsaXN0ID0gdG9kby5xdWVyeVNlbGVjdG9yKCcuY2hlY2tsaXN0Jyk7XG4gICAgICAgIGxldCBjaGVrYm94ZXMgPSBjaGVja2xpc3QucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrYm94LWNvbnRhaW5lcicpO1xuICAgICAgICBmb3IobGV0IGNoZWNrYm94IG9mIGNoZWtib3hlcylcbiAgICAgICAge1xuICAgICAgICAgICAgY2hlY2tsaXN0LnJlbW92ZUNoaWxkKGNoZWNrYm94KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVUb2RvKHRvZG9WYWx1ZXMpXG4gICAge1xuICAgICAgICBsZXQgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RvLmNsYXNzTGlzdC5hZGQoJ3RvZG8nKTtcbiAgICAgICAgXG4gICAgICAgICAgICBsZXQgdG9kb01haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRvZG9NYWluLmNsYXNzTGlzdC5hZGQoJ3RvZG8tbWFpbicpO1xuXG4gICAgICAgICAgICAgICAgbGV0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QuYWRkKCd0b2RvLXRpdGxlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvZG9UaXRsZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlQ29udGVudC5jbGFzc0xpc3QuYWRkKCd0b2RvLXRpdGxlLWNvbnRlbnQnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlQ29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RleHQtY29udGVudCcpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvVGl0bGVDb250ZW50LnRleHRDb250ZW50ID0gdG9kb1ZhbHVlcy50aXRsZTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9kb1RpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvVGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKCd0aXRsZS1pbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsICcyMCcpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTsgICBcbiAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ZhbHVlcy50aXRsZSA9IHRvZG9UaXRsZUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgdGl0bGVFZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlRWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0ZXh0LWVkaXQtYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlRWRpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JlYWQtbW9kZScpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0aXRsZUVkaXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZUVkaXRJY29uLmNsYXNzTGlzdC5hZGQoJ2VkaXQtaWNvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVFZGl0SWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9kaXN0L2dyYXBoaWNzL2VkaXQtaWNvbi5wbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlRWRpdEljb24uc2V0QXR0cmlidXRlKCdhbHQnLCAnZWRpdCBpbmRpY2F0b3IgaWNvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgIGVkaXRJY29ucy5wdXNoKHRpdGxlRWRpdEJ1dHRvbik7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlRWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgZWRpdEljb25BZGRFdmVudExpc3RlbmVycyh0aXRsZUVkaXRCdXR0b24pfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGl0bGVFZGl0QnV0dG9uLmFwcGVuZENoaWxkKHRpdGxlRWRpdEljb24pO1xuICAgICAgICAgICAgICAgICAgICB0b2RvVGl0bGUuYXBwZW5kQ2hpbGQodG9kb1RpdGxlQ29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZS5hcHBlbmRDaGlsZCh0b2RvVGl0bGVJbnB1dCk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZS5hcHBlbmRDaGlsZCh0aXRsZUVkaXRCdXR0b24pO1xuXG5cbiAgICAgICAgICAgICAgICBsZXQgdG9kb0R1ZWRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0b2RvRHVlZGF0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvLWR1ZWRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9kb0R1ZWRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EdWVkYXRlTGFiZWwuY2xhc3NMaXN0LmFkZCgndG9kby1sYWJlbCcpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvRHVlZGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2R1ZURhdGUnKVxuICAgICAgICAgICAgICAgICAgICB0b2RvRHVlZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBkYXRlJztcblxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9kb0R1ZWRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EdWVkYXRlSW5wdXQuY2xhc3NMaXN0LmFkZCgnZGRhdGUtaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0R1ZWRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EdWVkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdkdWUtZGF0ZScpXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRlVmFsdWUgPSB0b2RvVmFsdWVzLmR1ZWRhdGU7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EdWVkYXRlSW5wdXQudmFsdWUgPSBkYXRlVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EdWVkYXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ZhbHVlcy5kdWVkYXRlID0gdG9kb0R1ZWRhdGVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0R1ZWRhdGUuYXBwZW5kQ2hpbGQodG9kb0R1ZWRhdGVMYWJlbCk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EdWVkYXRlLmFwcGVuZENoaWxkKHRvZG9EdWVkYXRlSW5wdXQpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgdG9kb1ByaW9yaXR5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tcHJpb3JpdHktY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoYW5nZVByaW9yaXR5U3VicyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VQcmlvcml0eVN1YnMuY2xhc3NMaXN0LmFkZCgnY2hhbmdlLXByaW9yaXR5JywgJ3JvdW5kLWJ1dHRvbicpXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZVByaW9yaXR5U3Vicy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1YnMnKTtcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlTcGlubmVycy5wdXNoKGNoYW5nZVByaW9yaXR5U3Vicyk7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZVByaW9yaXR5U3Vicy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eVNwaW5uZXJzQWRkRXZlbnRMaXN0ZW5lcnMoY2hhbmdlUHJpb3JpdHlTdWJzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9WYWx1ZXMucHJpb3JpdHkgPSBjaGFuZ2VQcmlvcml0eVN1YnMuY2xvc2VzdCgnLnRvZG8tcHJpb3JpdHktY29udGFpbmVyJykucXVlcnlTZWxlY3RvcignLnByaW9yaXR5LXZhbHVlJykudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3RvZG8tcHJpb3JpdHknKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9kb1ByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eUxhYmVsLmNsYXNzTGlzdC5hZGQoJ3RvZG8tbGFiZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRvZG9Qcmlvcml0eVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHlWYWx1ZS5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS12YWx1ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5VmFsdWUudGV4dENvbnRlbnQgPSB0b2RvVmFsdWVzLnByaW9yaXR5O1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoYW5nZVByaW9yaXR5QWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZVByaW9yaXR5QWRkLmNsYXNzTGlzdC5hZGQoJ2NoYW5nZS1wcmlvcml0eScsICdyb3VuZC1idXR0b24nKVxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VQcmlvcml0eUFkZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZCcpO1xuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eVNwaW5uZXJzLnB1c2goY2hhbmdlUHJpb3JpdHlBZGQpO1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VQcmlvcml0eUFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eVNwaW5uZXJzQWRkRXZlbnRMaXN0ZW5lcnMoY2hhbmdlUHJpb3JpdHlBZGQpXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvVmFsdWVzLnByaW9yaXR5ID0gY2hhbmdlUHJpb3JpdHlBZGQuY2xvc2VzdCgnLnRvZG8tcHJpb3JpdHktY29udGFpbmVyJykucXVlcnlTZWxlY3RvcignLnByaW9yaXR5LXZhbHVlJykudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eS5hcHBlbmRDaGlsZCh0b2RvUHJpb3JpdHlMYWJlbCk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eS5hcHBlbmRDaGlsZCh0b2RvUHJpb3JpdHlWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGFuZ2VQcmlvcml0eVN1YnMpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb1ByaW9yaXR5KTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoYW5nZVByaW9yaXR5QWRkKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2tEb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY2hlY2tEb25lLmNsYXNzTGlzdC5hZGQoJ2NoZWNrLWRvbmUnKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgY2hlY2tEb25lQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrRG9uZUJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjaGVjay1kb25lLWJ1dHRvbi1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoZWNrRG9uZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tEb25lQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NoZWNrLWRvbmUtYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja0RvbmVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdtYWluQ0InKVxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbkNoZWNrQnV0dG9ucy5wdXNoKGNoZWNrRG9uZUJ1dHRvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja0RvbmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IG1haW5DQkFkZEV2ZW50TGlzdGVuZXJzKGNoZWNrRG9uZUJ1dHRvbil9KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrRG9uZUJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja0RvbmVCdXR0b24pO1xuICAgICAgICAgICAgICAgICAgICBjaGVja0RvbmUuYXBwZW5kQ2hpbGQoY2hlY2tEb25lQnV0dG9uQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0b2RvTWFpbi5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xuICAgICAgICAgICAgICAgIHRvZG9NYWluLmFwcGVuZENoaWxkKHRvZG9EdWVkYXRlKTtcbiAgICAgICAgICAgICAgICB0b2RvTWFpbi5hcHBlbmRDaGlsZCh0b2RvUHJpb3JpdHlDb250YWluZXIpO1xuICAgICAgICAgICAgICAgIHRvZG9NYWluLmFwcGVuZENoaWxkKGNoZWNrRG9uZSk7XG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGxldCB0b2RvQ2hlY2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0b2RvQ2hlY2tMaXN0LmNsYXNzTGlzdC5hZGQoJ3RvZG8tY2hlY2tsaXN0Jyk7XG4gICAgICAgICAgICB0b2RvQ2hlY2tMaXN0LnNldEF0dHJpYnV0ZSgnaWQnLCAndG9nZ2xlLWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrbGlzdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNoZWNrbGlzdEhlYWRlci5jbGFzc0xpc3QuYWRkKCdjaGVja2xpc3QtaGVhZGVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoZWNrbGlzdFRvZ2dsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3RUb2dnbGUuY2xhc3NMaXN0LmFkZCgndG9nZ2xlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGVja2xpc3RUb2dnbGVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdFRvZ2dsZUltZy5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtaW1nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3RUb2dnbGVJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vZGlzdC9ncmFwaGljcy90b2dnbGUucG5nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3RUb2dnbGVJbWcuc2V0QXR0cmlidXRlKCdhbHQnLCAnaWNvbiBvZiBhIHRvZ2dsZScpO1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVCdXR0b25zLnB1c2goY2hlY2tsaXN0VG9nZ2xlSW1nKTtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0VG9nZ2xlSW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge3Byb2plY3RUb2dnbGVzQWRkRXZlbnRMaXN0ZW5lcnMoY2hlY2tsaXN0VG9nZ2xlSW1nKX0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGVja2xpc3RIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdEhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnY2hlY2tsaXN0LWhlYWRpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0SGVhZGluZy50ZXh0Q29udGVudCA9ICdDaGVja2xpc3QnO1xuXG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNoZWNrbGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjaGVja2xpc3QtY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgY2hlY2tsaXN0Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9nZ2xhYmxlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoZWNrbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3QuY2xhc3NMaXN0LmFkZCgnY2hlY2tsaXN0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgY2hlY2tib3hWYWx1ZSBvZiB0b2RvVmFsdWVzLmNoZWNrYm94ZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoZWNrYm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gtY29udGFpbmVyJylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hlY2tib3hEb25lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrYm94RG9uZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjaGVjay1kb25lLWJ1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja0J1dHRvbnMucHVzaChjaGVja2JveERvbmVCdXR0b24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2JveERvbmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IGNoZWNrQnV0dG9uQWRkRXZlbnRMaXN0ZW5lcnMoY2hlY2tib3hEb25lQnV0dG9uKX0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGVja2JveExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrYm94TGFiZWwuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gtbGFiZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hMYWJlbC50ZXh0Q29udGVudCA9IGNoZWNrYm94VmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3hEb25lQnV0dG9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3hMYWJlbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdC5hcHBlbmRDaGlsZChjaGVja2JveENvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGNyZWF0ZUNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1jaGVja2JveCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hlY2tib3hUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrYm94VGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveC10aXRsZS1pbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2JveFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdtaW5sZW5ndGgnLCAnMScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnY2hlY2tib3ggdGl0bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrYm94VGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsICczMCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnY2hlY2tsaXN0LWNyZWF0ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhZGRDaGVja2JveEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkQ2hlY2tib3hCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkLWNoZWNrYm94JywgJ3JvdW5kLWJ1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkQ2hlY2tib3hCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdhZGQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZENoZWNrYm94QnV0dG9ucy5wdXNoKGFkZENoZWNrYm94QnV0dG9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZENoZWNrYm94QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ZhbHVlcy5jaGVja2JveGVzLnB1c2goYWRkQ2hlY2tib3hCdXR0b24uY2xvc2VzdCgnLmNyZWF0ZS1jaGVja2JveCcpLnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveC10aXRsZS1pbnB1dCcpLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRDaGVja2JveEJ1dHRvbkFjdGlvbihhZGRDaGVja2JveEJ1dHRvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTsgXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZUNoZWNrYm94LmFwcGVuZENoaWxkKGNoZWNrYm94VGl0bGVJbnB1dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVDaGVja2JveC5hcHBlbmRDaGlsZChhZGRDaGVja2JveEJ1dHRvbik7XG5cblxuICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3RUb2dnbGUuYXBwZW5kQ2hpbGQoY2hlY2tsaXN0VG9nZ2xlSW1nKTtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0SGVhZGVyLmFwcGVuZENoaWxkKGNoZWNrbGlzdFRvZ2dsZSk7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdEhlYWRlci5hcHBlbmRDaGlsZChjaGVja2xpc3RIZWFkaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0NoZWNrTGlzdC5hcHBlbmRDaGlsZChjaGVja2xpc3RIZWFkZXIpO1xuICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tsaXN0KVxuICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQ2hlY2tib3gpXG4gICAgICAgICAgICAgICAgICAgIHRvZG9DaGVja0xpc3QuYXBwZW5kQ2hpbGQoY2hlY2tsaXN0Q29udGFpbmVyKTtcblxuXG4gICAgICAgICAgICBsZXQgdG9kb0Rlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0b2RvRGVzY3JpcHRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1kZXNjcmlwdGlvbi1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgIGxldCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0b2RvRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndG9kby1kZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RleHQtY29udGVudCcpO1xuICAgICAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRvZG9WYWx1ZXMuZGVzY3JpcHRpb247XG5cbiAgICAgICAgICAgICAgICBsZXQgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbi1pbnB1dCcsICd0b2RvLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnMjAwJyk7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmUnKTtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7ICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbGlkYXRlLWVtcHR5JywgJ2ZhbHNlJyk7ICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9kb1ZhbHVlcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5wdXQudmFsdWU7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBsZXQgZGVzY3JpcHRpb25FZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25FZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RleHQtZWRpdC1idXR0b24nKTtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbkVkaXRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdyZWFkLW1vZGUnKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgZGVzY3JpcHRpb25FZGl0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbkVkaXRJY29uLmNsYXNzTGlzdC5hZGQoJ2VkaXQtaWNvbicpO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbkVkaXRJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL2Rpc3QvZ3JhcGhpY3MvZWRpdC1pY29uLnBuZycpO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbkVkaXRJY29uLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2VkaXQgaW5kaWNhdG9yIGljb24nKTtcblxuICAgICAgICAgICAgICAgIGVkaXRJY29ucy5wdXNoKGRlc2NyaXB0aW9uRWRpdEJ1dHRvbik7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25FZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBlZGl0SWNvbkFkZEV2ZW50TGlzdGVuZXJzKGRlc2NyaXB0aW9uRWRpdEJ1dHRvbil9KTtcblxuXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25FZGl0QnV0dG9uLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRWRpdEljb24pO1xuICAgICAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRGVzY3JpcHRpb24pOyAgICBcbiAgICAgICAgICAgICAgICB0b2RvRGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7ICAgIFxuICAgICAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkVkaXRCdXR0b24pOyAgICBcblxuXG4gICAgICAgICAgICB0b2RvLmFwcGVuZENoaWxkKHRvZG9NYWluKTtcbiAgICAgICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQodG9kb0NoZWNrTGlzdCk7XG4gICAgICAgICAgICB0b2RvLmFwcGVuZENoaWxkKHRvZG9EZXNjcmlwdGlvbkNvbnRhaW5lcik7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdG9kbztcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0VG9kb1ZhbHVlcyh0b2RvKVxuICAgIHtcbiAgICAgICAgbGV0IHRpdGxlID0gdG9kby5xdWVyeVNlbGVjdG9yKCcudGl0bGUtaW5wdXQnKS52YWx1ZTtcbiAgICAgICAgbGV0IGR1ZURhdGUgPSB0b2RvLnF1ZXJ5U2VsZWN0b3IoJy5kZGF0ZS1pbnB1dCcpLnZhbHVlO1xuICAgICAgICBsZXQgcHJpb3JpdHkgPSB0b2RvLnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eS12YWx1ZScpLnRleHRDb250ZW50O1xuXG4gICAgICAgIGxldCBjaGVja2JveGVzRWxlbWVudHMgPSB0b2RvLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveC1sYWJlbCcpO1xuICAgICAgICBsZXQgY2hlY2tib3hlcyA9IFtdO1xuICAgICAgICBmb3IobGV0IGNoZWNrYm94IG9mIGNoZWNrYm94ZXNFbGVtZW50cylcbiAgICAgICAge1xuICAgICAgICAgICAgY2hlY2tib3hlcy5wdXNoKGNoZWNrYm94LnRleHRDb250ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IHRvZG8ucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uLWlucHV0JykudmFsdWU7XG4gICAgICAgIGxldCBpc0RvbmUgPSBmYWxzZTtcbiAgICAgICAgaWYodG9kby5xdWVyeVNlbGVjdG9yKCdjaGVjay1kb25lLWJ1dHRvbicpICYmIHRvZG8ucXVlcnlTZWxlY3RvcignY2hlY2stZG9uZS1idXR0b24nKS5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrZWQnKSlcbiAgICAgICAgICAgIGlzRG9uZSA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgICAgIHByaW9yaXR5LFxuICAgICAgICAgICAgY2hlY2tib3hlcyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaXNEb25lXG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0RWxlbWVudFJvdXRlKGVsZW1lbnQpXG4gICAge1xuICAgICAgICBsZXQgcm91dGUgPSBbXTtcbiAgICAgICAgbGV0IGlkID0gZWxlbWVudC5jbG9zZXN0KCdbZGF0YS1hZHRvPVwidHJ1ZVwiXScpLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgICByb3V0ZS5wdXNoKCtpZCk7XG4gICAgICAgIHdoaWxlKGlkICE9IDApXG4gICAgICAgIHsgICBcbiAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQuY2xvc2VzdCgnW2RhdGEtYWR0bz1cInRydWVcIl0nKTtcbiAgICAgICAgICAgIGlkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgICAgICAgIHJvdXRlLnB1c2goK2lkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm91dGUucmV2ZXJzZSgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBCQ2dldElucHV0VmFsdWUoYnV0dG9uKVxuICAgIHtcbiAgICAgICAgbGV0IGlucHV0VG9WYWxpZGF0ZTtcbiAgICAgICAgaWYoYnV0dG9uLmNsb3Nlc3QoJy5zZWNvbmQtZGlzcGxheS1tZW51JykucXVlcnlTZWxlY3RvcignLnRvZG8nKS5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXNwbGF5JykgIT0gJ25vbmUnKVxuICAgICAgICAgICAgaW5wdXRUb1ZhbGlkYXRlID0gYnV0dG9uLmNsb3Nlc3QoJy5zZWNvbmQtZGlzcGxheS1tZW51JykucXVlcnlTZWxlY3RvcignLnRvZG8nKS5xdWVyeVNlbGVjdG9yKCcudGl0bGUtaW5wdXQnKTtcbiAgICAgICAgZWxzZSBcbiAgICAgICAgICAgIGlucHV0VG9WYWxpZGF0ZSA9IGJ1dHRvbi5jbG9zZXN0KCcuc2Vjb25kLWRpc3BsYXktbWVudScpLnF1ZXJ5U2VsZWN0b3IoJy5zZXQtY2F0ZWdvcnktcHJvamVjdC10aXRsZScpLnF1ZXJ5U2VsZWN0b3IoJy5zZXQtYy1wLWlucHV0Jyk7XG4gICAgICAgIGlmKGlucHV0VG9WYWxpZGF0ZS52YWxpZGl0eS52YWx1ZU1pc3NpbmcpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlucHV0VG9WYWxpZGF0ZS5zZXRDdXN0b21WYWxpZGl0eSgnTXVzdCBjb25zaXN0IGF0IGxlYXN0IG9uZSBjaGFyYWN0ZXInKTtcbiAgICAgICAgICAgIGlucHV0VG9WYWxpZGF0ZS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnB1dFRvVmFsaWRhdGUudmFsdWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbkFjdGlvbihidXR0b24sIHBhcmVudCwgZWxlbWVudCwgY29udGFpbmVyLCByb3V0ZSwgdmFsdWVzKVxuICAgIHtcbiAgICAgICAgbGV0IGlucHV0VmFsdWUgPSBCQ2dldElucHV0VmFsdWUoYnV0dG9uKTtcbiAgICAgICAgbGV0IGxvZ2ljRWxlbWVudDtcbiAgICAgICAgbGV0IG5ld0VsZW1lbnQ7XG4gICAgICAgIGlmKGlucHV0VmFsdWUgIT0gJycpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKGVsZW1lbnQgPT0gJ2NhdGVnb3J5JylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsb2dpY0VsZW1lbnQgPSBsb2dpY01vZHVsZS5jcmVhdGVDYXRlZ29yeShpbnB1dFZhbHVlLCByb3V0ZSk7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZUNhdGVnb3J5KHBhcmVudCwgbG9naWNFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAvL2FkZEZ1bmN0aW9uKG5ld0VsZW1lbnQpO1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IGFkZFRvRWxlbWVudEFjdGlvbihuZXdFbGVtZW50KX0pO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGVsZW1lbnQgPT0gJ3Byb2plY3QnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxvZ2ljRWxlbWVudCA9IGxvZ2ljTW9kdWxlLmNyZWF0ZVByb2plY3QoaW5wdXRWYWx1ZSwgcm91dGUpO1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVQcm9qZWN0KHBhcmVudCwgbG9naWNFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAvL2FkZEZ1bmN0aW9uKG5ld0VsZW1lbnQpO1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IGFkZFRvRWxlbWVudEFjdGlvbihuZXdFbGVtZW50KX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsb2dpY0VsZW1lbnQgPSBsb2dpY01vZHVsZS5jcmVhdGVUb2RvKGlucHV0VmFsdWUsIHJvdXRlLCB2YWx1ZXMuZHVlRGF0ZSwgdmFsdWVzLnByaW9yaXR5LCB2YWx1ZXMuY2hlY2tsaXN0LCB2YWx1ZXMuZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWRkVG9FbGVtZW50cy5wdXNoKG5ld0VsZW1lbnQpO1xuICAgICAgICAgICAgaWYoY29udGFpbmVyLmdldEF0dHJpYnV0ZSgnZGF0YS1kaXNwbGF5ZWQnKSA9PSAndHJ1ZScpXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVEaXJlY3RvcnlFbGVtZW50KGNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBjbG9zZVNEQnV0dG9uLmNsaWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBcbiAgICAgICAge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjcmVhdGVCdXR0b25BY3Rpb24oYnV0dG9uLCBwYXJlbnQsIGVsZW1lbnQsIGNvbnRhaW5lciwgcm91dGUsIHZhbHVlcyk7XG4gICAgICAgICAgICB9LCB7b25jZTogdHJ1ZX0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGxldCByZW1vdmVGdW5jdGlvbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZW1vdmUtZnVuY3Rpb24nKTtcbiAgICBsZXQgcmVtb3ZlRWxlbWVudHMgPSBhZGRUb0VsZW1lbnRzLnNsaWNlKDEsIGFkZFRvRWxlbWVudHMubGVuZ3RoKTtcbiAgICByZW1vdmVGdW5jdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAge1xuICAgICAgICByZW1vdmVGdW5jdGlvbihyZW1vdmVFbGVtZW50cyk7XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gcmVtb3ZlRnVuY3Rpb24ocmVtb3ZlRWxlbWVudHMpXG4gICAge1xuICAgICAgICBpZihyZW1vdmVGdW5jdGlvbk9uID09IGZhbHNlKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZihhZGRGdW5jdGlvbk9uID09IHRydWUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHVybk9mZkFkZEZ1bmN0aW9uKGFkZFRvRWxlbWVudHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVtb3ZlRnVuY3Rpb25PbiA9IHRydWU7XG4gICAgICAgICAgICByZW1vdmVFbGVtZW50cy5mb3JFYWNoKCAocmVtb3ZlRWxlbWVudCkgPT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZW1vdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNhdGVnb3J5LXRpdGxlJykuY2xhc3NMaXN0LmFkZCgncmVkLXRleHQtZWxlbWVudCcpO1xuXG4gICAgICAgICAgICAgICAgcmVtb3ZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWYocmVtb3ZlRnVuY3Rpb25PbiA9PSB0cnVlKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSByZW1vdmVFbGVtZW50cy5pbmRleE9mKHJlbW92ZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRWxlbWVudHMgPSByZW1vdmVFbGVtZW50cy5zbGljZSgwLCBpbmRleCkuY29uY2F0KHJlbW92ZUVsZW1lbnRzLnNsaWNlKGluZGV4KzEsIHJlbW92ZUVsZW1lbnQubGVuZ3RoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9IGFkZFRvRWxlbWVudHMuaW5kZXhPZihyZW1vdmVFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvRWxlbWVudHMgPSBhZGRUb0VsZW1lbnRzLnNsaWNlKDAsIGluZGV4KS5jb25jYXQoYWRkVG9FbGVtZW50cy5zbGljZShpbmRleCsxLCBhZGRUb0VsZW1lbnRzLmxlbmd0aCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlkID0gcmVtb3ZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByb3V0ZSA9IGdldEVsZW1lbnRSb3V0ZShyZW1vdmVFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsb2dpY0VsZW1lbnQgPSBsb2dpY01vZHVsZS5maW5kQnlJRChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbG9naWNQYXJlbnQgPSBsb2dpY01vZHVsZS5maW5kQnlJRChyb3V0ZS5zbGljZSgwLCByb3V0ZS5sZW5ndGgtMSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBhcmVudENvbnRhaW5lciA9IHJlbW92ZUVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENvbnRhaW5lci5yZW1vdmVDaGlsZChyZW1vdmVFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2ljTW9kdWxlLnJlbW92ZUVsZW1lbnQobG9naWNQYXJlbnQsIGxvZ2ljRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0dXJuT2ZmUmVtb3ZlRnVuY3Rpb24ocmVtb3ZlRWxlbWVudHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVtb3ZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGlzcGxheWVkJykgPT0gJ3RydWUnKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdWJTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Yi1zZWN0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQ2hpbGRyZW4oc3ViU2VjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIuY2xhc3NMaXN0LmFkZCgnc3ViLXNlY3Rpb24tcGxhY2Vob2xkZXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlci50ZXh0Q29udGVudCA9ICdDbGljayBhbiBlbGVtZW50IGZyb20gWW91ciBkaXJlY3RvcnkgdG8gdmlldyBpdCBoZXJlJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJTZWN0aW9uLmFwcGVuZENoaWxkKHBsYWNlaG9sZGVyKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXNlY3Rpb24taGVhZGluZycpLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIFxuICAgICAgICAgICAgdHVybk9mZlJlbW92ZUZ1bmN0aW9uKHJlbW92ZUVsZW1lbnRzKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdHVybk9mZlJlbW92ZUZ1bmN0aW9uKHJlbW92ZUVsZW1lbnRzKVxuICAgIHtcbiAgICAgICAgcmVtb3ZlRnVuY3Rpb25PbiA9IGZhbHNlO1xuICAgICAgICByZW1vdmVFbGVtZW50cy5mb3JFYWNoKCByZW1vdmVFbGVtZW50ID0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlbW92ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY2F0ZWdvcnktdGl0bGUnKS5jbGFzc0xpc3QucmVtb3ZlKCdyZWQtdGV4dC1lbGVtZW50Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgfVxufVxuKSgpOyIsImV4cG9ydCBsZXQgbG9naWNNb2R1bGUgPVxuKGZ1bmN0aW9uKClcbntcbiAgICBsZXQgaWRzZXQgPSAtMTtcblxuICAgIGNsYXNzIEVsZW1lbnRcbiAgICB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHRpdGxlKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgICAgICB0aGlzLmlkID0gKytpZHNldDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjbGFzcyBUb2RvIGV4dGVuZHMgRWxlbWVudFxuICAgIHtcbiAgICAgICAgY29uc3RydWN0b3IodGl0bGUsIGR1ZWRhdGUsIHByaW9yaXR5LCBjaGVja2xpc3QsIGRlc2NyaXB0aW9uLCBkb25lID0gZmFsc2UpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN1cGVyKHRpdGxlKTtcbiAgICAgICAgICAgIHRoaXMuZHVlZGF0ZSA9IGR1ZWRhdGU7XG4gICAgICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgICAgICB0aGlzLmNoZWNrYm94ZXMgPSBjaGVja2xpc3Q7XG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgICAgICB0aGlzLmRvbmUgPSBkb25lO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNsYXNzIFByb2plY3QgZXh0ZW5kcyBFbGVtZW50XG4gICAge1xuICAgICAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgY29udGVudHMgPSBbXSwgY2FuQ29udGVudCA9IFsndG9kbyddKVxuICAgICAgICB7XG4gICAgICAgICAgICBzdXBlcih0aXRsZSk7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRzID0gY29udGVudHM7XG4gICAgICAgICAgICB0aGlzLmNhbkNvbnRlbnQgPSBjYW5Db250ZW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNsYXNzIENhdGVnb3J5IGV4dGVuZHMgRWxlbWVudFxuICAgIHtcbiAgICAgICAgY29uc3RydWN0b3IodGl0bGUsIGNvbnRlbnRzID0gW10sIGNhbkNvbnRlbnQgPSBbJ3Byb2plY3QnLCAnY2F0ZWdvcnknXSlcbiAgICAgICAge1xuICAgICAgICAgICAgc3VwZXIodGl0bGUpO1xuICAgICAgICAgICAgdGhpcy5jb250ZW50cyA9IGNvbnRlbnRzO1xuICAgICAgICAgICAgdGhpcy5jYW5Db250ZW50ID0gY2FuQ29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBsZXQgcm9vdCA9IG5ldyBDYXRlZ29yeSgnWW91ciBkaXJlY3RvcnknKTtcbiAgICBcbiAgICBmdW5jdGlvbiBmaW5kQnlJRChpZFJvdXRlKVxuICAgIHtcbiAgICAgICAgaWYoaWRSb3V0ZS5sZW5ndGggPT0gMClcbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICBsZXQgaWQgPSBpZFJvdXRlWzFdO1xuICAgICAgICBsZXQgcGFyZW50ID0gcm9vdDtcbiAgICAgICAgZm9yKGxldCBpID0gMTsgaSA8IGlkUm91dGUubGVuZ3RoOylcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yKGxldCBjaGlsZCBvZiBwYXJlbnQuY29udGVudHMpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYoY2hpbGQuaWQgPT0gaWQpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQgPSBjaGlsZDtcbiAgICAgICAgICAgICAgICAgICAgaWQgPSBpZFJvdXRlWysraV1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudChjaGlsZCwgaWRSb3V0ZSlcbiAgICB7XG4gICAgICAgIGxldCBwYXJlbnQgPSBmaW5kQnlJRChpZFJvdXRlKTtcbiAgICAgICAgcGFyZW50LmNvbnRlbnRzLnB1c2goY2hpbGQpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBjcmVhdGVDYXRlZ29yeSh0aXRsZSwgaWRSb3V0ZSlcbiAgICB7XG4gICAgICAgIGxldCBjYXRlZ29yeSA9IG5ldyBDYXRlZ29yeSh0aXRsZSk7XG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoY2F0ZWdvcnksIGlkUm91dGUpO1xuICAgICAgICByZXR1cm4gY2F0ZWdvcnk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGUsIGlkUm91dGUpXG4gICAge1xuICAgICAgICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlKTtcbiAgICAgICAgY3JlYXRlRWxlbWVudChwcm9qZWN0LCBpZFJvdXRlKTtcbiAgICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRvZG8odGl0bGUsIGlkUm91dGUsIGR1ZWRhdGUsIHByaW9yaXR5LCBjaGVja2xpc3QsIGRlc2NyaXB0aW9uLCBkb25lID0gZmFsc2UpXG4gICAge1xuICAgICAgICBsZXQgdG9kbyA9IG5ldyBUb2RvKHRpdGxlLCBkdWVkYXRlLCBwcmlvcml0eSwgY2hlY2tsaXN0LCBkZXNjcmlwdGlvbiwgZG9uZSk7XG4gICAgICAgIGNyZWF0ZUVsZW1lbnQodG9kbywgaWRSb3V0ZSk7XG4gICAgICAgIHJldHVybiB0b2RvO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUVsZW1lbnQocGFyZW50LCBjaGlsZClcbiAgICB7XG4gICAgICAgIGxldCBpbmRleCA9IHBhcmVudC5jb250ZW50cy5pbmRleE9mKGNoaWxkKTtcbiAgICAgICAgcGFyZW50LmNvbnRlbnRzID0gcGFyZW50LmNvbnRlbnRzLnNsaWNlKDAsIGluZGV4KS5jb25jYXQocGFyZW50LmNvbnRlbnRzLnNsaWNlKGluZGV4KzEsIHBhcmVudC5jb250ZW50cy5sZW5ndGgpKTtcbiAgICB9XG4gICAgXG4gICAgbGV0IGNhdDEgPSBjcmVhdGVDYXRlZ29yeSgnZmlyc3QgY2F0ZWdvcnknLCBbXSk7XG4gICAgbGV0IGNhdDIgPSBjcmVhdGVDYXRlZ29yeSgnc2VjIGNhdGVnb3J5JywgWzAsMV0pO1xuICAgIGxldCBjYXQzID0gY3JlYXRlQ2F0ZWdvcnkoJ3JkIGNhdGVnb3J5JywgWzAsMV0pO1xuICAgIGxldCBjYXQ0ID0gY3JlYXRlQ2F0ZWdvcnkoJ2ZpbnNlYyBjYXRlZ29yeScsIFswLDEsIDJdKTtcbiAgICBsZXQgY2F0NSA9IGNyZWF0ZUNhdGVnb3J5KCdydCBjYXRlZ29yeScsIFswLDEsIDIsIDNdKTtcbiAgICBsZXQgcDEgPSBjcmVhdGVQcm9qZWN0KCdQcm9qZWN0JywgWzAsMSwgMiwgMywgNV0pO1xuICAgIGxldCB0OSA9IGNyZWF0ZVRvZG8oJ1RvZG8nLCBbMCwxLCAyLCAzLCA1LCA2XSwgJzIwMjItMDktMDgnLCAnbG93JywgWydmaXJzdDEnLCAnc2Vjb25kMiddLCAnYWJjJyk7XG4gICAgbGV0IHQxID0gY3JlYXRlVG9kbygnVG9kbycsIFswLDFdLCAnMjAyMi0wOS0wOCcsICdoaWdoJywgW10sICdhYmMnKTtcbiAgICBsZXQgdDIgPSBjcmVhdGVUb2RvKCdUb2RvJywgWzAsMV0sICcyMDIyLTA5LTA4JywgJ2hpZ2gnLCBbXSwgJ2FiYycpO1xuICAgIGxldCB0MyA9IGNyZWF0ZVRvZG8oJ1RvZG8nLCBbMCwxXSwgJzIwMjItMDktMDgnLCAnaGlnaCcsIFtdLCAnYWJjJyk7XG4gICAgbGV0IHQ0ID0gY3JlYXRlVG9kbygnVG9kbycsIFswLDFdLCAnMjAyMi0wOS0wOCcsICdoaWdoJywgW10sICdhYmMnKTtcbiAgICBsZXQgdDUgPSBjcmVhdGVUb2RvKCdUb2RvJywgWzAsMV0sICcyMDIyLTA5LTA4JywgJ2hpZ2gnLCBbXSwgJ2FiYycpO1xuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGVUb2RvLCBjcmVhdGVDYXRlZ29yeSwgY3JlYXRlUHJvamVjdCwgZmluZEJ5SUQsIHJvb3QsIHJlbW92ZUVsZW1lbnRcbiAgICB9XG59KSgpIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGRvbU1vZHVsZSB9IGZyb20gJy4vZG9tLmpzJztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==