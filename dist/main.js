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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: Ubuntu;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n    font-family: Lato;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n* {\n    font-family: Lato;\n    color: white;\n    box-sizing: border-box;\n}\n\nbody {\n    height: 100vh;\n    margin: 0;\n}\n\n.header {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    height: 55px;\n    background-color: #212121;\n}\n\n.heading {\n    font-size: 33px;\n}\n\n.attributes {\n    flex-direction: column;\n    gap: 8px;\n}\n\n.attributes, .git-attrib {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n}\n\n.attribute, .attribute > * {\n    color: #797979;\n}\n\n.attributes {\n    position: absolute;\n    bottom: 0;\n    padding: 5px;\n}\n\n.menu {\n    display: flex;\n    gap: 10px;\n}\n\n.function-button {\n    background-color:#3b3b3b;\n    border: 2px solid #555555;\n    border-radius: 20px;\n    font-size: 15px;\n    padding: 10px;\n    width: 135px;\n    transition: 0.3s;\n}\n\n.add-function:hover, .remove-function:hover {\n    transform: scale(0.96);\n}\n\n\n.main-content {\n    height: calc(100% - 55px);\n    display: flex;\n}\n\n.project-category-header {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.side-menu {\n    box-sizing: border-box;\n    padding: 10px 10px 10px 30px;\n    width: 300px;\n    background-color: #2d2d2d;\n    border-right: 2px solid #222;\n}\n\n.group-project {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.project-category-title {\n    font-size: 20px;\n}\n\n[data-adto=\"true\"] {\n    transition: 0.3s;\n}\n\n.category-project-icon {\n    width: 20px;\n    height: 20px;\n    border-radius: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: white;\n    color: black;\n}\n\n#first > .project-category-title {\n    font-size: 27px;\n    font-weight: 600;\n}\n\n.category-elements {\n    margin-left: 5px;\n    padding-left: 2px;\n    border-left: 2px solid #999999;\n}\n\n\n.content {\n    width: calc(100% - 300px);\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    background-color: #212121;\n}\n\n.main-section-window {\n    overflow: auto;\n    width: 98%;\n    height: 98%;\n    margin: auto;\n    border: 2px solid #7e7e7e;\n    border-radius: 5px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px\n}\n\n.main-section-heading {\n    margin-top: 10px;\n    font-size: 40px;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.sub-section {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    position: relative;\n}\n\n.sub-section-placeholder {\n    text-align: center;\n}\n\n.project {\n    background-color: #282828;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.sub-heading {\n    width: fit-content;\n    display: flex;\n    align-items: center;\n    margin: auto;\n    gap: 5px;\n}\n\n.toggle {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.sub-heading > .toggle {\n    width: 16px;\n    height: 14px;\n}\n\n.toggle-img {\n    transition: 0.3s;\n    transform: rotate(180deg);\n\n}\n\n.toggle-img.rotated {\n    transform: rotate(90deg);\n}\n\n\n.sub-heading > .heading {\n    display: flex;\n    align-items: center;\n    font-size: 28px;\n    text-align: center;\n    color: white;\n}\n\n.todo {\n    background-color: #292929;\n    font-size: 22px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    border: 2px solid #7e7e7e;\n    margin: 5px;\n    border-radius: 10px;\n    flex-wrap: wrap;\n    transition: 0.3s;\n}\n\n.second-display-menu > .todo {\n    margin: 0;\n    position: relative;\n}\n\n.todo-list {\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n}\n\n.todo.done {\n    opacity: 0.3;\n    border: 2px solid green;\n}\n\n.todo.done >  * {\n    pointer-events: none;\n}\n\n.todo.done > .todo-main >  .check-done{\n    pointer-events: all;\n}\n\n.todo-main {\n    border-radius: 5px;\n    padding: 5px;\n    gap: 5px;\n    width: 100%;\n    display: flex;\n    justify-content: space-around;\n    flex-wrap: wrap;\n}\n\n.checklist-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n}\n\n.todo-checklist {\n    margin: auto;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 3px;\n    width: 100%;\n    background-color: #303030;\n    padding: 5px 0;\n}\n\n.checklist-heading {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.checklist {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.checkbox-container {\n    width: 100%;\n    gap: 5px;\n    display: flex;\n    margin: auto;\n}\n\n.checkbox-container > .check-done-button {\n    margin: 0 !important;\n}\n\n.checklist-header {\n    display: flex;\n    width: fit-content;\n    gap: 5px;\n}\n\n.checklist-header > .toggle > .toggle-img, .project-category-header > .toggle > .toggle-img {\n    width: 13px;\n}\n\n.checkbox-label {\n    display: flex;\n    gap: 5px;\n    font-size: 18px;\n    justify-content: flex-start;\n    max-width: 300px;\n    overflow-wrap: anywhere;\n}\n\n.checkbox-input {\n    display: none;\n}\n\n.checkbox-container > .check-done-button {\n    width: 20px;\n    height: 20px;\n}\n\n.checkbox-container > .check-done-button::before {\n    position: relative;\n    top: -6px;\n    font-size: 17px;\n    opacity: 0.2;\n    content: '✓';\n    transition: 0.3s;\n}\n\n.create-checkbox {\n    display: flex;\n    gap: 5px;\n}\n\n.checkbox-title-input {\n    background-color: #272626 !important; \n    border-radius: 5px;\n}\n\n.todo-description-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-bottom: 5px;\n}\n\n.todo-description {\n    width: 100%;\n    padding-bottom: 10px;\n    font-size: 18px;\n    margin: auto;\n    text-align: center;\n}\n\n.todo-priority-container {\n    display: flex;\n    align-items: center;\n}\n\n.round-button, .check-done-button {\n    margin: auto;\n    width: 28px;\n    border-radius: 100%;\n    height: 28px;\n    border: 1px solid white;\n    text-align: center;\n}\n\n.round-button#subs:hover {\n    background-color: red;\n}\n\n.round-button#subs:hover::before {\n    color: #292929;\n}\n\n.round-button#add:hover {\n    background-color: green;\n}\n\n.round-button#add:hover::before {\n    color: #292929;\n}\n\n.round-button#subs::before, .round-button#add::before{\n    transition: 0.3s;\n    position: relative;\n    font-size: 50px;\n    content: '-';\n    color: red;\n}\n\n.round-button#subs::before {\n    top: -20.5px;\n}\n\n.round-button#add::before {\n    font-size: 30px;\n    top: -6px;\n    left: -0.5px;\n    content: '+';\n    color: green;\n}\n\n.todo-duedate, .todo-title, .todo-priority-container, .check-done {\n    width: 220px;\n}    \n\n.todo-title {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n}\n\n.todo-duedate, .todo-priority {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    gap: 3px;\n}    \n\n.todo-label {\n    margin-left: auto;\n    margin-right: auto;\n    width: fit-content;\n    padding: 1px 5px;\n    border-bottom: 1px solid white;\n}\n\n.check-done {\n    display: flex;\n    align-items: center;\n}\n\n.ddate-input, .priority-value, .title-input, .todo-title-content, .checkbox-title-input, .set-c-p-input {\n    text-align: center;\n    font-size: 18px;\n    outline: none;\n    border: none;\n    background-color: inherit;\n}\n\n.priority-value, .title-input {\n    -webkit-appearance: none;\n    appearance: none;\n}\n\n.ddate-input, .priority-value {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.ddate-input {\n    width: 129px;\n}\n\n.priority-value {\n    width: 70px;\n}\n\n.title-input {\n    width: 185px;\n    font-size: 20px;\n    background-color: #2d2d2d;\n    border-radius: 5px;\n}\n\n.description-input {\n    outline: none;\n    border: none;\n    background-color: #2d2d2d;\n    height: 90%;\n    width: 90%;\n    border-radius: 5px;\n    padding: 5px;\n}\n\n.todo-title-content {\n    width: fit-content;\n    max-width: 220px;\n    max-height: 55px;\n    overflow-x: auto;\n    font-size: 20px;\n    margin-left: 31px;\n}\n\n.text-edit-button {\n    width: 26px;\n    height: 26px;\n}\n\n.check-done-input {\n    display: none;\n}\n\n.check-done-button-container {\n    margin: auto;\n}\n\n.check-done-button {\n    margin: auto;\n    width: 28px;\n    border-radius: 100%;\n    height: 28px;\n    border: 1px solid white;\n    text-align: center;\n}\n\n.check-done-button::before {\n    position: relative;\n    top: -4px;\n    font-size: 23px;\n    opacity: 0.2;\n    content: '✓';\n    transition: 0.3s;\n}\n\n.check-done-button:hover {\n    background-color: green;\n}\n\n.check-done-button:hover::before {\n    opacity: 1;\n}\n\n.check-done-button.checked::before {\n    opacity: 1;\n}\n\n.checked {\n    opacity: 1;\n    background-color: green;\n}\n\n\n/* width */\n::-webkit-scrollbar {\n    height: 5px;\n  }\n::-webkit-scrollbar {\n    height: 5px;\n    width: 8px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n    background: #222;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n    background: rgb(19, 19, 19);\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n    background: #555;\n}\n\nbutton {\n    -webkit-appearance: none;\n    appearance: none;\n    background-color: inherit;\n    border: 0;\n    outline: none;\n    padding: 0;\n}\n\n.second-display {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    background-color: rgb(0 0 0 / 30%);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 1;\n}\n\n.second-display-menu {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n}\n\n.set-category-project {\n}\n\n.set-category-project-title {\n    background-color: #111111;\n    padding: 20px;\n    border-radius: 5px;\n}\n\n.set-c-p-label {\n    font-size: 38px;\n    text-align: center;\n}\n\n.set-c-p-input {\n    font-size: 30px;\n    background-color: #191919;\n    border-radius: 5px;\n}\n\n.select-element-menu {\n    margin: auto;\n    background-color: #111111;\n    border-radius: 5px;\n    display: flex;\n    flex-direction: column;\n\n}\n\n.select-element-menu button:first-of-type {\n    border-top: none;\n    border-radius: 5px;\n}\n\n.select-element-menu button:last-of-type {\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n\n.sem-option {\n    width: 300px;\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 28px;\n    border-top: 1px solid gray;\n}\n\n.sem-option:hover {\n    background-color: #1a1a1a;\n}\n\n.close-button {\n    transition: 0.3s;\n    width: 20px;\n    height: 20px;\n    border-top-right-radius: 7px;\n    border-bottom-left-radius: 7px;\n    position: absolute;\n    right: 0;\n    top: 0;\n    font-size: 18px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: red;\n    z-index: 1;\n}\n\n.close-button:hover {\n    background-color: white;\n    color: red;\n}\n\n.create-button {\n    width: 100px;\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #252525;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n\n.create-button:hover {\n    transition: 0.3s;\n    transform: scale(0.95) translateY(-0.5px);\n}\n\n.green-text-element {\n    color: #7cd47c;\n}\n\n.red-text-element {\n    color: #ec5c5c;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: Ubuntu;\n    src: url(fonts/Ubuntu/Ubuntu-Regular.ttf);\n}\n\n@font-face {\n    font-family: Lato;\n    src: url(fonts/Lato/Lato-Regular.ttf);\n}\n\n* {\n    font-family: Lato;\n    color: white;\n    box-sizing: border-box;\n}\n\nbody {\n    height: 100vh;\n    margin: 0;\n}\n\n.header {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    height: 55px;\n    background-color: #212121;\n}\n\n.heading {\n    font-size: 33px;\n}\n\n.attributes {\n    flex-direction: column;\n    gap: 8px;\n}\n\n.attributes, .git-attrib {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n}\n\n.attribute, .attribute > * {\n    color: #797979;\n}\n\n.attributes {\n    position: absolute;\n    bottom: 0;\n    padding: 5px;\n}\n\n.menu {\n    display: flex;\n    gap: 10px;\n}\n\n.function-button {\n    background-color:#3b3b3b;\n    border: 2px solid #555555;\n    border-radius: 20px;\n    font-size: 15px;\n    padding: 10px;\n    width: 135px;\n    transition: 0.3s;\n}\n\n.add-function:hover, .remove-function:hover {\n    transform: scale(0.96);\n}\n\n\n.main-content {\n    height: calc(100% - 55px);\n    display: flex;\n}\n\n.project-category-header {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.side-menu {\n    box-sizing: border-box;\n    padding: 10px 10px 10px 30px;\n    width: 300px;\n    background-color: #2d2d2d;\n    border-right: 2px solid #222;\n}\n\n.group-project {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.project-category-title {\n    font-size: 20px;\n}\n\n[data-adto=\"true\"] {\n    transition: 0.3s;\n}\n\n.category-project-icon {\n    width: 20px;\n    height: 20px;\n    border-radius: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: white;\n    color: black;\n}\n\n#first > .project-category-title {\n    font-size: 27px;\n    font-weight: 600;\n}\n\n.category-elements {\n    margin-left: 5px;\n    padding-left: 2px;\n    border-left: 2px solid #999999;\n}\n\n\n.content {\n    width: calc(100% - 300px);\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    background-color: #212121;\n}\n\n.main-section-window {\n    overflow: auto;\n    width: 98%;\n    height: 98%;\n    margin: auto;\n    border: 2px solid #7e7e7e;\n    border-radius: 5px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px\n}\n\n.main-section-heading {\n    margin-top: 10px;\n    font-size: 40px;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.sub-section {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    position: relative;\n}\n\n.sub-section-placeholder {\n    text-align: center;\n}\n\n.project {\n    background-color: #282828;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.sub-heading {\n    width: fit-content;\n    display: flex;\n    align-items: center;\n    margin: auto;\n    gap: 5px;\n}\n\n.toggle {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.sub-heading > .toggle {\n    width: 16px;\n    height: 14px;\n}\n\n.toggle-img {\n    transition: 0.3s;\n    transform: rotate(180deg);\n\n}\n\n.toggle-img.rotated {\n    transform: rotate(90deg);\n}\n\n\n.sub-heading > .heading {\n    display: flex;\n    align-items: center;\n    font-size: 28px;\n    text-align: center;\n    color: white;\n}\n\n.todo {\n    background-color: #292929;\n    font-size: 22px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    border: 2px solid #7e7e7e;\n    margin: 5px;\n    border-radius: 10px;\n    flex-wrap: wrap;\n    transition: 0.3s;\n}\n\n.second-display-menu > .todo {\n    margin: 0;\n    position: relative;\n}\n\n.todo-list {\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n}\n\n.todo.done {\n    opacity: 0.3;\n    border: 2px solid green;\n}\n\n.todo.done >  * {\n    pointer-events: none;\n}\n\n.todo.done > .todo-main >  .check-done{\n    pointer-events: all;\n}\n\n.todo-main {\n    border-radius: 5px;\n    padding: 5px;\n    gap: 5px;\n    width: 100%;\n    display: flex;\n    justify-content: space-around;\n    flex-wrap: wrap;\n}\n\n.checklist-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n}\n\n.todo-checklist {\n    margin: auto;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 3px;\n    width: 100%;\n    background-color: #303030;\n    padding: 5px 0;\n}\n\n.checklist-heading {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.checklist {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.checkbox-container {\n    width: 100%;\n    gap: 5px;\n    display: flex;\n    margin: auto;\n}\n\n.checkbox-container > .check-done-button {\n    margin: 0 !important;\n}\n\n.checklist-header {\n    display: flex;\n    width: fit-content;\n    gap: 5px;\n}\n\n.checklist-header > .toggle > .toggle-img, .project-category-header > .toggle > .toggle-img {\n    width: 13px;\n}\n\n.checkbox-label {\n    display: flex;\n    gap: 5px;\n    font-size: 18px;\n    justify-content: flex-start;\n    max-width: 300px;\n    overflow-wrap: anywhere;\n}\n\n.checkbox-input {\n    display: none;\n}\n\n.checkbox-container > .check-done-button {\n    width: 20px;\n    height: 20px;\n}\n\n.checkbox-container > .check-done-button::before {\n    position: relative;\n    top: -6px;\n    font-size: 17px;\n    opacity: 0.2;\n    content: '✓';\n    transition: 0.3s;\n}\n\n.create-checkbox {\n    display: flex;\n    gap: 5px;\n}\n\n.checkbox-title-input {\n    background-color: #272626 !important; \n    border-radius: 5px;\n}\n\n.todo-description-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-bottom: 5px;\n}\n\n.todo-description {\n    width: 100%;\n    padding-bottom: 10px;\n    font-size: 18px;\n    margin: auto;\n    text-align: center;\n}\n\n.todo-priority-container {\n    display: flex;\n    align-items: center;\n}\n\n.round-button, .check-done-button {\n    margin: auto;\n    width: 28px;\n    border-radius: 100%;\n    height: 28px;\n    border: 1px solid white;\n    text-align: center;\n}\n\n.round-button#subs:hover {\n    background-color: red;\n}\n\n.round-button#subs:hover::before {\n    color: #292929;\n}\n\n.round-button#add:hover {\n    background-color: green;\n}\n\n.round-button#add:hover::before {\n    color: #292929;\n}\n\n.round-button#subs::before, .round-button#add::before{\n    transition: 0.3s;\n    position: relative;\n    font-size: 50px;\n    content: '-';\n    color: red;\n}\n\n.round-button#subs::before {\n    top: -20.5px;\n}\n\n.round-button#add::before {\n    font-size: 30px;\n    top: -6px;\n    left: -0.5px;\n    content: '+';\n    color: green;\n}\n\n.todo-duedate, .todo-title, .todo-priority-container, .check-done {\n    width: 220px;\n}    \n\n.todo-title {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n}\n\n.todo-duedate, .todo-priority {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    gap: 3px;\n}    \n\n.todo-label {\n    margin-left: auto;\n    margin-right: auto;\n    width: fit-content;\n    padding: 1px 5px;\n    border-bottom: 1px solid white;\n}\n\n.check-done {\n    display: flex;\n    align-items: center;\n}\n\n.ddate-input, .priority-value, .title-input, .todo-title-content, .checkbox-title-input, .set-c-p-input {\n    text-align: center;\n    font-size: 18px;\n    outline: none;\n    border: none;\n    background-color: inherit;\n}\n\n.priority-value, .title-input {\n    -webkit-appearance: none;\n    appearance: none;\n}\n\n.ddate-input, .priority-value {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.ddate-input {\n    width: 129px;\n}\n\n.priority-value {\n    width: 70px;\n}\n\n.title-input {\n    width: 185px;\n    font-size: 20px;\n    background-color: #2d2d2d;\n    border-radius: 5px;\n}\n\n.description-input {\n    outline: none;\n    border: none;\n    background-color: #2d2d2d;\n    height: 90%;\n    width: 90%;\n    border-radius: 5px;\n    padding: 5px;\n}\n\n.todo-title-content {\n    width: fit-content;\n    max-width: 220px;\n    max-height: 55px;\n    overflow-x: auto;\n    font-size: 20px;\n    margin-left: 31px;\n}\n\n.text-edit-button {\n    width: 26px;\n    height: 26px;\n}\n\n.check-done-input {\n    display: none;\n}\n\n.check-done-button-container {\n    margin: auto;\n}\n\n.check-done-button {\n    margin: auto;\n    width: 28px;\n    border-radius: 100%;\n    height: 28px;\n    border: 1px solid white;\n    text-align: center;\n}\n\n.check-done-button::before {\n    position: relative;\n    top: -4px;\n    font-size: 23px;\n    opacity: 0.2;\n    content: '✓';\n    transition: 0.3s;\n}\n\n.check-done-button:hover {\n    background-color: green;\n}\n\n.check-done-button:hover::before {\n    opacity: 1;\n}\n\n.check-done-button.checked::before {\n    opacity: 1;\n}\n\n.checked {\n    opacity: 1;\n    background-color: green;\n}\n\n\n/* width */\n::-webkit-scrollbar {\n    height: 5px;\n  }\n::-webkit-scrollbar {\n    height: 5px;\n    width: 8px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n    background: #222;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n    background: rgb(19, 19, 19);\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n    background: #555;\n}\n\nbutton {\n    -webkit-appearance: none;\n    appearance: none;\n    background-color: inherit;\n    border: 0;\n    outline: none;\n    padding: 0;\n}\n\n.second-display {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    background-color: rgb(0 0 0 / 30%);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 1;\n}\n\n.second-display-menu {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n}\n\n.set-category-project {\n}\n\n.set-category-project-title {\n    background-color: #111111;\n    padding: 20px;\n    border-radius: 5px;\n}\n\n.set-c-p-label {\n    font-size: 38px;\n    text-align: center;\n}\n\n.set-c-p-input {\n    font-size: 30px;\n    background-color: #191919;\n    border-radius: 5px;\n}\n\n.select-element-menu {\n    margin: auto;\n    background-color: #111111;\n    border-radius: 5px;\n    display: flex;\n    flex-direction: column;\n\n}\n\n.select-element-menu button:first-of-type {\n    border-top: none;\n    border-radius: 5px;\n}\n\n.select-element-menu button:last-of-type {\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n\n.sem-option {\n    width: 300px;\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 28px;\n    border-top: 1px solid gray;\n}\n\n.sem-option:hover {\n    background-color: #1a1a1a;\n}\n\n.close-button {\n    transition: 0.3s;\n    width: 20px;\n    height: 20px;\n    border-top-right-radius: 7px;\n    border-bottom-left-radius: 7px;\n    position: absolute;\n    right: 0;\n    top: 0;\n    font-size: 18px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: red;\n    z-index: 1;\n}\n\n.close-button:hover {\n    background-color: white;\n    color: red;\n}\n\n.create-button {\n    width: 100px;\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #252525;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n\n.create-button:hover {\n    transition: 0.3s;\n    transform: scale(0.95) translateY(-0.5px);\n}\n\n.green-text-element {\n    color: #7cd47c;\n}\n\n.red-text-element {\n    color: #ec5c5c;\n}"],"sourceRoot":""}]);
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
                    toggleImg.setAttribute('src', _graphics_toggle_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
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
    
    let cat1 = createCategory('Home', []);
    let prj1 = createProject('Cleaning', [0, 1]);
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsYUFBYSxRQUFRLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksY0FBYyxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksUUFBUSxVQUFVLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sVUFBVSxLQUFL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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0dEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7O0FDckJxQjtBQUNnQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ncmFwaGljcy9lZGl0LWljb24ucG5nIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ncmFwaGljcy9zYXZlLWljb24ucG5nIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ncmFwaGljcy90b2dnbGUucG5nIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvZ2ljLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiZm9udHMvVWJ1bnR1L1VidW50dS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcImZvbnRzL0xhdG8vTGF0by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFVidW50dTtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IExhdG87XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuKiB7XFxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgaGVpZ2h0OiA1NXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xcbn1cXG5cXG4uaGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogMzNweDtcXG59XFxuXFxuLmF0dHJpYnV0ZXMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLmF0dHJpYnV0ZXMsIC5naXQtYXR0cmliIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4uYXR0cmlidXRlLCAuYXR0cmlidXRlID4gKiB7XFxuICAgIGNvbG9yOiAjNzk3OTc5O1xcbn1cXG5cXG4uYXR0cmlidXRlcyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5tZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZnVuY3Rpb24tYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojM2IzYjNiO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNTU1NTU1O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHdpZHRoOiAxMzVweDtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLmFkZC1mdW5jdGlvbjpob3ZlciwgLnJlbW92ZS1mdW5jdGlvbjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45Nik7XFxufVxcblxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDU1cHgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucHJvamVjdC1jYXRlZ29yeS1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnNpZGUtbWVudSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDMwcHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmQyZDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzIyMjtcXG59XFxuXFxuLmdyb3VwLXByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0LWNhdGVnb3J5LXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG5bZGF0YS1hZHRvPVxcXCJ0cnVlXFxcIl0ge1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4uY2F0ZWdvcnktcHJvamVjdC1pY29uIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbiNmaXJzdCA+IC5wcm9qZWN0LWNhdGVnb3J5LXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyN3B4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uY2F0ZWdvcnktZWxlbWVudHMge1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjOTk5OTk5O1xcbn1cXG5cXG5cXG4uY29udGVudCB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMDBweCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcXG59XFxuXFxuLm1haW4tc2VjdGlvbi13aW5kb3cge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgd2lkdGg6IDk4JTtcXG4gICAgaGVpZ2h0OiA5OCU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzdlN2U3ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHhcXG59XFxuXFxuLm1haW4tc2VjdGlvbi1oZWFkaW5nIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uc3ViLXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnN1Yi1zZWN0aW9uLXBsYWNlaG9sZGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnN1Yi1oZWFkaW5nIHtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4udG9nZ2xlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zdWItaGVhZGluZyA+IC50b2dnbGUge1xcbiAgICB3aWR0aDogMTZweDtcXG4gICAgaGVpZ2h0OiAxNHB4O1xcbn1cXG5cXG4udG9nZ2xlLWltZyB7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuXFxufVxcblxcbi50b2dnbGUtaW1nLnJvdGF0ZWQge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcblxcbi5zdWItaGVhZGluZyA+IC5oZWFkaW5nIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRvZG8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTI5O1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzdlN2U3ZTtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLnNlY29uZC1kaXNwbGF5LW1lbnUgPiAudG9kbyB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udG9kby1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4udG9kby5kb25lIHtcXG4gICAgb3BhY2l0eTogMC4zO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmVlbjtcXG59XFxuXFxuLnRvZG8uZG9uZSA+ICAqIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi50b2RvLmRvbmUgPiAudG9kby1tYWluID4gIC5jaGVjay1kb25le1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG4udG9kby1tYWluIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGdhcDogNXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmNoZWNrbGlzdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi50b2RvLWNoZWNrbGlzdCB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAzcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwO1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG59XFxuXFxuLmNoZWNrbGlzdC1oZWFkaW5nIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLmNoZWNrbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uY2hlY2tib3gtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdhcDogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5jaGVja2JveC1jb250YWluZXIgPiAuY2hlY2stZG9uZS1idXR0b24ge1xcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcXG59XFxuXFxuLmNoZWNrbGlzdC1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uY2hlY2tsaXN0LWhlYWRlciA+IC50b2dnbGUgPiAudG9nZ2xlLWltZywgLnByb2plY3QtY2F0ZWdvcnktaGVhZGVyID4gLnRvZ2dsZSA+IC50b2dnbGUtaW1nIHtcXG4gICAgd2lkdGg6IDEzcHg7XFxufVxcblxcbi5jaGVja2JveC1sYWJlbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxufVxcblxcbi5jaGVja2JveC1pbnB1dCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jaGVja2JveC1jb250YWluZXIgPiAuY2hlY2stZG9uZS1idXR0b24ge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uY2hlY2tib3gtY29udGFpbmVyID4gLmNoZWNrLWRvbmUtYnV0dG9uOjpiZWZvcmUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogLTZweDtcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcbiAgICBvcGFjaXR5OiAwLjI7XFxuICAgIGNvbnRlbnQ6ICfinJMnO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4uY3JlYXRlLWNoZWNrYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5jaGVja2JveC10aXRsZS1pbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzI2MjYgIWltcG9ydGFudDsgXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnRvZG8tZGVzY3JpcHRpb24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuLnRvZG8tZGVzY3JpcHRpb24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50b2RvLXByaW9yaXR5LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yb3VuZC1idXR0b24sIC5jaGVjay1kb25lLWJ1dHRvbiB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgd2lkdGg6IDI4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIGhlaWdodDogMjhweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnJvdW5kLWJ1dHRvbiNzdWJzOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ucm91bmQtYnV0dG9uI3N1YnM6aG92ZXI6OmJlZm9yZSB7XFxuICAgIGNvbG9yOiAjMjkyOTI5O1xcbn1cXG5cXG4ucm91bmQtYnV0dG9uI2FkZDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4ucm91bmQtYnV0dG9uI2FkZDpob3Zlcjo6YmVmb3JlIHtcXG4gICAgY29sb3I6ICMyOTI5Mjk7XFxufVxcblxcbi5yb3VuZC1idXR0b24jc3Viczo6YmVmb3JlLCAucm91bmQtYnV0dG9uI2FkZDo6YmVmb3Jle1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgY29udGVudDogJy0nO1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4ucm91bmQtYnV0dG9uI3N1YnM6OmJlZm9yZSB7XFxuICAgIHRvcDogLTIwLjVweDtcXG59XFxuXFxuLnJvdW5kLWJ1dHRvbiNhZGQ6OmJlZm9yZSB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgdG9wOiAtNnB4O1xcbiAgICBsZWZ0OiAtMC41cHg7XFxuICAgIGNvbnRlbnQ6ICcrJztcXG4gICAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4udG9kby1kdWVkYXRlLCAudG9kby10aXRsZSwgLnRvZG8tcHJpb3JpdHktY29udGFpbmVyLCAuY2hlY2stZG9uZSB7XFxuICAgIHdpZHRoOiAyMjBweDtcXG59ICAgIFxcblxcbi50b2RvLXRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4udG9kby1kdWVkYXRlLCAudG9kby1wcmlvcml0eSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZ2FwOiAzcHg7XFxufSAgICBcXG5cXG4udG9kby1sYWJlbCB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgcGFkZGluZzogMXB4IDVweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uY2hlY2stZG9uZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kZGF0ZS1pbnB1dCwgLnByaW9yaXR5LXZhbHVlLCAudGl0bGUtaW5wdXQsIC50b2RvLXRpdGxlLWNvbnRlbnQsIC5jaGVja2JveC10aXRsZS1pbnB1dCwgLnNldC1jLXAtaW5wdXQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4ucHJpb3JpdHktdmFsdWUsIC50aXRsZS1pbnB1dCB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLmRkYXRlLWlucHV0LCAucHJpb3JpdHktdmFsdWUge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uZGRhdGUtaW5wdXQge1xcbiAgICB3aWR0aDogMTI5cHg7XFxufVxcblxcbi5wcmlvcml0eS12YWx1ZSB7XFxuICAgIHdpZHRoOiA3MHB4O1xcbn1cXG5cXG4udGl0bGUtaW5wdXQge1xcbiAgICB3aWR0aDogMTg1cHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmQyZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uZGVzY3JpcHRpb24taW5wdXQge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZDJkMmQ7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnRvZG8tdGl0bGUtY29udGVudCB7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgbWF4LXdpZHRoOiAyMjBweDtcXG4gICAgbWF4LWhlaWdodDogNTVweDtcXG4gICAgb3ZlcmZsb3cteDogYXV0bztcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMzFweDtcXG59XFxuXFxuLnRleHQtZWRpdC1idXR0b24ge1xcbiAgICB3aWR0aDogMjZweDtcXG4gICAgaGVpZ2h0OiAyNnB4O1xcbn1cXG5cXG4uY2hlY2stZG9uZS1pbnB1dCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jaGVjay1kb25lLWJ1dHRvbi1jb250YWluZXIge1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5jaGVjay1kb25lLWJ1dHRvbiB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgd2lkdGg6IDI4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIGhlaWdodDogMjhweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNoZWNrLWRvbmUtYnV0dG9uOjpiZWZvcmUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogLTRweDtcXG4gICAgZm9udC1zaXplOiAyM3B4O1xcbiAgICBvcGFjaXR5OiAwLjI7XFxuICAgIGNvbnRlbnQ6ICfinJMnO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4uY2hlY2stZG9uZS1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmNoZWNrLWRvbmUtYnV0dG9uOmhvdmVyOjpiZWZvcmUge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uY2hlY2stZG9uZS1idXR0b24uY2hlY2tlZDo6YmVmb3JlIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmNoZWNrZWQge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuXFxuLyogd2lkdGggKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgaGVpZ2h0OiA1cHg7XFxuICB9XFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIGhlaWdodDogNXB4O1xcbiAgICB3aWR0aDogOHB4O1xcbn1cXG5cXG4vKiBUcmFjayAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBiYWNrZ3JvdW5kOiAjMjIyO1xcbn1cXG5cXG4vKiBIYW5kbGUgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDE5LCAxOSwgMTkpO1xcbn1cXG5cXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzU1NTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5zZWNvbmQtZGlzcGxheSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMCAwIC8gMzAlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5zZWNvbmQtZGlzcGxheS1tZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNldC1jYXRlZ29yeS1wcm9qZWN0IHtcXG59XFxuXFxuLnNldC1jYXRlZ29yeS1wcm9qZWN0LXRpdGxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTExMTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uc2V0LWMtcC1sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMzhweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc2V0LWMtcC1pbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5MTkxOTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uc2VsZWN0LWVsZW1lbnQtbWVudSB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTExMTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbn1cXG5cXG4uc2VsZWN0LWVsZW1lbnQtbWVudSBidXR0b246Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnNlbGVjdC1lbGVtZW50LW1lbnUgYnV0dG9uOmxhc3Qtb2YtdHlwZSB7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnNlbS1vcHRpb24ge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXk7XFxufVxcblxcbi5zZW0tb3B0aW9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhMWExYTtcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbiB7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDdweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5jbG9zZS1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmNyZWF0ZS1idXR0b24ge1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNTI1MjU7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmNyZWF0ZS1idXR0b246aG92ZXIge1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpIHRyYW5zbGF0ZVkoLTAuNXB4KTtcXG59XFxuXFxuLmdyZWVuLXRleHQtZWxlbWVudCB7XFxuICAgIGNvbG9yOiAjN2NkNDdjO1xcbn1cXG5cXG4ucmVkLXRleHQtZWxlbWVudCB7XFxuICAgIGNvbG9yOiAjZWM1YzVjO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLDRDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiw0Q0FBcUM7QUFDekM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxj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OEJBQThCO0lBQzlCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLDRCQUE0QjtJQUM1Qiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixNQUFNO0lBQ04sZUFBZTtJQUNmLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsOEJBQThCO0lBQzlCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFVidW50dTtcXG4gICAgc3JjOiB1cmwoZm9udHMvVWJ1bnR1L1VidW50dS1SZWd1bGFyLnR0Zik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogTGF0bztcXG4gICAgc3JjOiB1cmwoZm9udHMvTGF0by9MYXRvLVJlZ3VsYXIudHRmKTtcXG59XFxuXFxuKiB7XFxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgaGVpZ2h0OiA1NXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xcbn1cXG5cXG4uaGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogMzNweDtcXG59XFxuXFxuLmF0dHJpYnV0ZXMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLmF0dHJpYnV0ZXMsIC5naXQtYXR0cmliIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4uYXR0cmlidXRlLCAuYXR0cmlidXRlID4gKiB7XFxuICAgIGNvbG9yOiAjNzk3OTc5O1xcbn1cXG5cXG4uYXR0cmlidXRlcyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5tZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZnVuY3Rpb24tYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojM2IzYjNiO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNTU1NTU1O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHdpZHRoOiAxMzVweDtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLmFkZC1mdW5jdGlvbjpob3ZlciwgLnJlbW92ZS1mdW5jdGlvbjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45Nik7XFxufVxcblxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDU1cHgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucHJvamVjdC1jYXRlZ29yeS1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnNpZGUtbWVudSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDMwcHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmQyZDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzIyMjtcXG59XFxuXFxuLmdyb3VwLXByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0LWNhdGVnb3J5LXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG5bZGF0YS1hZHRvPVxcXCJ0cnVlXFxcIl0ge1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4uY2F0ZWdvcnktcHJvamVjdC1pY29uIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbiNmaXJzdCA+IC5wcm9qZWN0LWNhdGVnb3J5LXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyN3B4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uY2F0ZWdvcnktZWxlbWVudHMge1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjOTk5OTk5O1xcbn1cXG5cXG5cXG4uY29udGVudCB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMDBweCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcXG59XFxuXFxuLm1haW4tc2VjdGlvbi13aW5kb3cge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgd2lkdGg6IDk4JTtcXG4gICAgaGVpZ2h0OiA5OCU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzdlN2U3ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHhcXG59XFxuXFxuLm1haW4tc2VjdGlvbi1oZWFkaW5nIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uc3ViLXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnN1Yi1zZWN0aW9uLXBsYWNlaG9sZGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnN1Yi1oZWFkaW5nIHtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4udG9nZ2xlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zdWItaGVhZGluZyA+IC50b2dnbGUge1xcbiAgICB3aWR0aDogMTZweDtcXG4gICAgaGVpZ2h0OiAxNHB4O1xcbn1cXG5cXG4udG9nZ2xlLWltZyB7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuXFxufVxcblxcbi50b2dnbGUtaW1nLnJvdGF0ZWQge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcblxcbi5zdWItaGVhZGluZyA+IC5oZWFkaW5nIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRvZG8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTI5O1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzdlN2U3ZTtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLnNlY29uZC1kaXNwbGF5LW1lbnUgPiAudG9kbyB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udG9kby1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4udG9kby5kb25lIHtcXG4gICAgb3BhY2l0eTogMC4zO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmVlbjtcXG59XFxuXFxuLnRvZG8uZG9uZSA+ICAqIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi50b2RvLmRvbmUgPiAudG9kby1tYWluID4gIC5jaGVjay1kb25le1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG4udG9kby1tYWluIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGdhcDogNXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmNoZWNrbGlzdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi50b2RvLWNoZWNrbGlzdCB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAzcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwO1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG59XFxuXFxuLmNoZWNrbGlzdC1oZWFkaW5nIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLmNoZWNrbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uY2hlY2tib3gtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdhcDogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5jaGVja2JveC1jb250YWluZXIgPiAuY2hlY2stZG9uZS1idXR0b24ge1xcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcXG59XFxuXFxuLmNoZWNrbGlzdC1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uY2hlY2tsaXN0LWhlYWRlciA+IC50b2dnbGUgPiAudG9nZ2xlLWltZywgLnByb2plY3QtY2F0ZWdvcnktaGVhZGVyID4gLnRvZ2dsZSA+IC50b2dnbGUtaW1nIHtcXG4gICAgd2lkdGg6IDEzcHg7XFxufVxcblxcbi5jaGVja2JveC1sYWJlbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxufVxcblxcbi5jaGVja2JveC1pbnB1dCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jaGVja2JveC1jb250YWluZXIgPiAuY2hlY2stZG9uZS1idXR0b24ge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uY2hlY2tib3gtY29udGFpbmVyID4gLmNoZWNrLWRvbmUtYnV0dG9uOjpiZWZvcmUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogLTZweDtcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcbiAgICBvcGFjaXR5OiAwLjI7XFxuICAgIGNvbnRlbnQ6ICfinJMnO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4uY3JlYXRlLWNoZWNrYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5jaGVja2JveC10aXRsZS1pbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzI2MjYgIWltcG9ydGFudDsgXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnRvZG8tZGVzY3JpcHRpb24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuLnRvZG8tZGVzY3JpcHRpb24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50b2RvLXByaW9yaXR5LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yb3VuZC1idXR0b24sIC5jaGVjay1kb25lLWJ1dHRvbiB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgd2lkdGg6IDI4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIGhlaWdodDogMjhweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnJvdW5kLWJ1dHRvbiNzdWJzOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ucm91bmQtYnV0dG9uI3N1YnM6aG92ZXI6OmJlZm9yZSB7XFxuICAgIGNvbG9yOiAjMjkyOTI5O1xcbn1cXG5cXG4ucm91bmQtYnV0dG9uI2FkZDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4ucm91bmQtYnV0dG9uI2FkZDpob3Zlcjo6YmVmb3JlIHtcXG4gICAgY29sb3I6ICMyOTI5Mjk7XFxufVxcblxcbi5yb3VuZC1idXR0b24jc3Viczo6YmVmb3JlLCAucm91bmQtYnV0dG9uI2FkZDo6YmVmb3Jle1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgY29udGVudDogJy0nO1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4ucm91bmQtYnV0dG9uI3N1YnM6OmJlZm9yZSB7XFxuICAgIHRvcDogLTIwLjVweDtcXG59XFxuXFxuLnJvdW5kLWJ1dHRvbiNhZGQ6OmJlZm9yZSB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgdG9wOiAtNnB4O1xcbiAgICBsZWZ0OiAtMC41cHg7XFxuICAgIGNvbnRlbnQ6ICcrJztcXG4gICAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4udG9kby1kdWVkYXRlLCAudG9kby10aXRsZSwgLnRvZG8tcHJpb3JpdHktY29udGFpbmVyLCAuY2hlY2stZG9uZSB7XFxuICAgIHdpZHRoOiAyMjBweDtcXG59ICAgIFxcblxcbi50b2RvLXRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4udG9kby1kdWVkYXRlLCAudG9kby1wcmlvcml0eSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZ2FwOiAzcHg7XFxufSAgICBcXG5cXG4udG9kby1sYWJlbCB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgcGFkZGluZzogMXB4IDVweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uY2hlY2stZG9uZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kZGF0ZS1pbnB1dCwgLnByaW9yaXR5LXZhbHVlLCAudGl0bGUtaW5wdXQsIC50b2RvLXRpdGxlLWNvbnRlbnQsIC5jaGVja2JveC10aXRsZS1pbnB1dCwgLnNldC1jLXAtaW5wdXQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4ucHJpb3JpdHktdmFsdWUsIC50aXRsZS1pbnB1dCB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLmRkYXRlLWlucHV0LCAucHJpb3JpdHktdmFsdWUge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uZGRhdGUtaW5wdXQge1xcbiAgICB3aWR0aDogMTI5cHg7XFxufVxcblxcbi5wcmlvcml0eS12YWx1ZSB7XFxuICAgIHdpZHRoOiA3MHB4O1xcbn1cXG5cXG4udGl0bGUtaW5wdXQge1xcbiAgICB3aWR0aDogMTg1cHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmQyZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uZGVzY3JpcHRpb24taW5wdXQge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZDJkMmQ7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnRvZG8tdGl0bGUtY29udGVudCB7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgbWF4LXdpZHRoOiAyMjBweDtcXG4gICAgbWF4LWhlaWdodDogNTVweDtcXG4gICAgb3ZlcmZsb3cteDogYXV0bztcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMzFweDtcXG59XFxuXFxuLnRleHQtZWRpdC1idXR0b24ge1xcbiAgICB3aWR0aDogMjZweDtcXG4gICAgaGVpZ2h0OiAyNnB4O1xcbn1cXG5cXG4uY2hlY2stZG9uZS1pbnB1dCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jaGVjay1kb25lLWJ1dHRvbi1jb250YWluZXIge1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5jaGVjay1kb25lLWJ1dHRvbiB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgd2lkdGg6IDI4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIGhlaWdodDogMjhweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNoZWNrLWRvbmUtYnV0dG9uOjpiZWZvcmUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogLTRweDtcXG4gICAgZm9udC1zaXplOiAyM3B4O1xcbiAgICBvcGFjaXR5OiAwLjI7XFxuICAgIGNvbnRlbnQ6ICfinJMnO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4uY2hlY2stZG9uZS1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmNoZWNrLWRvbmUtYnV0dG9uOmhvdmVyOjpiZWZvcmUge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uY2hlY2stZG9uZS1idXR0b24uY2hlY2tlZDo6YmVmb3JlIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmNoZWNrZWQge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuXFxuLyogd2lkdGggKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgaGVpZ2h0OiA1cHg7XFxuICB9XFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIGhlaWdodDogNXB4O1xcbiAgICB3aWR0aDogOHB4O1xcbn1cXG5cXG4vKiBUcmFjayAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBiYWNrZ3JvdW5kOiAjMjIyO1xcbn1cXG5cXG4vKiBIYW5kbGUgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDE5LCAxOSwgMTkpO1xcbn1cXG5cXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzU1NTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5zZWNvbmQtZGlzcGxheSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMCAwIC8gMzAlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5zZWNvbmQtZGlzcGxheS1tZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNldC1jYXRlZ29yeS1wcm9qZWN0IHtcXG59XFxuXFxuLnNldC1jYXRlZ29yeS1wcm9qZWN0LXRpdGxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTExMTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uc2V0LWMtcC1sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMzhweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc2V0LWMtcC1pbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5MTkxOTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uc2VsZWN0LWVsZW1lbnQtbWVudSB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTExMTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbn1cXG5cXG4uc2VsZWN0LWVsZW1lbnQtbWVudSBidXR0b246Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnNlbGVjdC1lbGVtZW50LW1lbnUgYnV0dG9uOmxhc3Qtb2YtdHlwZSB7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnNlbS1vcHRpb24ge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXk7XFxufVxcblxcbi5zZW0tb3B0aW9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhMWExYTtcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbiB7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDdweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5jbG9zZS1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmNyZWF0ZS1idXR0b24ge1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNTI1MjU7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmNyZWF0ZS1idXR0b246aG92ZXIge1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpIHRyYW5zbGF0ZVkoLTAuNXB4KTtcXG59XFxuXFxuLmdyZWVuLXRleHQtZWxlbWVudCB7XFxuICAgIGNvbG9yOiAjN2NkNDdjO1xcbn1cXG5cXG4ucmVkLXRleHQtZWxlbWVudCB7XFxuICAgIGNvbG9yOiAjZWM1YzVjO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiM2FjZmJjYjgzMjdiZmYyYmE2NGU1NTZiMzI2YWYzMjQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjY0MWY2ZmI5OTQ4ODY1OGI0NGVkOTQyMjhjYzQ3ODUxLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkZjgzNTY1NTk5OWQ3YWVlMzhhODY2ZDg1ZDcxNjAwZS5wbmdcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgbG9naWNNb2R1bGUgfSBmcm9tICcuL2xvZ2ljLmpzJztcbmltcG9ydCAgc2F2ZUljb24gIGZyb20gJy4vZ3JhcGhpY3Mvc2F2ZS1pY29uLnBuZyc7XG5pbXBvcnQgIGVkaXRJY29uMiAgZnJvbSAnLi9ncmFwaGljcy9lZGl0LWljb24ucG5nJztcbmltcG9ydCAgdG9nZ2xlSWNvbiAgZnJvbSAnLi9ncmFwaGljcy90b2dnbGUucG5nJztcblxuZXhwb3J0IGxldCBkb21Nb2R1bGUgPSBcbihmdW5jdGlvbigpXG57XG4gICAgbGV0IGFkZEZ1bmN0aW9uT24gPSBmYWxzZTtcbiAgICBsZXQgcmVtb3ZlRnVuY3Rpb25PbiA9IGZhbHNlO1xuXG5cbiAgICBmdW5jdGlvbiBjaGVja1ZhbGlkaXR5VGV4dEVtcHR5KHRleHRJbnB1dClcbiAgICB7XG4gICAgICAgIGlmKHRleHRJbnB1dC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRleHRJbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnTXVzdCBjb25zaXN0IGF0IGxlYXN0IG9uZSBjaGFyYWN0ZXInKTtcbiAgICAgICAgICAgIHRleHRJbnB1dC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBsZXQgZWRpdEljb25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGV4dC1lZGl0LWJ1dHRvbicpKTtcbiAgICBlZGl0SWNvbnMuZm9yRWFjaChlZGl0SWNvbiA9PiBcbiAgICB7XG4gICAgICAgIGVkaXRJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gXG4gICAgICAgIHtcbiAgICAgICAgICAgIGVkaXRJY29uQWRkRXZlbnRMaXN0ZW5lcnMoZWRpdEljb24pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBmdW5jdGlvbiBlZGl0SWNvbkFkZEV2ZW50TGlzdGVuZXJzKGVkaXRJY29uKVxuICAgIHtcbiAgICAgICAgbGV0IHBhcmVudCA9IGVkaXRJY29uLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGxldCBpbnB1dCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgICAgICBsZXQgY29udGVudERpdiA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCcjdGV4dC1jb250ZW50Jyk7XG4gICAgICAgIGxldCBpbWcgPSBlZGl0SWNvbi5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcbiAgICAgICAgaWYoZWRpdEljb24uZ2V0QXR0cmlidXRlKCdpZCcpID09ICdyZWFkLW1vZGUnKVxuICAgICAgICB7XG4gICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBzYXZlSWNvbik7XG4gICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdhbHQnLCAnc2F2ZSBpbmRpY2F0b3IgaWNvbicpO1xuICAgICAgICAgICAgZWRpdEljb24uc2V0QXR0cmlidXRlKCdpZCcsICdlZGl0LW1vZGUnKTtcbiAgICAgICAgICAgIGNvbnRlbnREaXYuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICAgICAgaW5wdXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2Rpc3BsYXknKTtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gY29udGVudERpdi50ZXh0Q29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGVkaXRJY29uLmdldEF0dHJpYnV0ZSgnaWQnKSA9PSAnZWRpdC1tb2RlJylcbiAgICAgICAge1xuICAgICAgICAgICAgaWYoY2hlY2tWYWxpZGl0eVRleHRFbXB0eShpbnB1dCkgfHwgaW5wdXQuZ2V0QXR0cmlidXRlKCd2YWxpZGF0ZS1lbXB0eScpID09ICdmYWxzZScpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29udGVudERpdi50ZXh0Q29udGVudCA9IGlucHV0LnZhbHVlO1xuICAgICAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGVkaXRJY29uMik7XG4gICAgICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2VkaXQgaW5kaWNhdG9yIGljb24nKTtcbiAgICAgICAgICAgICAgICBlZGl0SWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JlYWQtbW9kZScpO1xuICAgICAgICAgICAgICAgIGNvbnRlbnREaXYuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2Rpc3BsYXknKTtcbiAgICAgICAgICAgICAgICBpbnB1dC5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgY2hlY2tCdXR0b25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2stZG9uZS1idXR0b24nKSkuZmlsdGVyKCAoY2IpID0+IHtyZXR1cm4gY2IuZ2V0QXR0cmlidXRlKCdpZCcpICE9ICdtYWluQ0InfSk7XG4gICAgY2hlY2tCdXR0b25zLmZvckVhY2goY2hlY2tCdXR0b24gPT4gXG4gICAge1xuICAgICAgICBjaGVja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNoZWNrQnV0dG9uQWRkRXZlbnRMaXN0ZW5lcnMoY2hlY2tCdXR0b24pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBmdW5jdGlvbiBjaGVja0J1dHRvbkFkZEV2ZW50TGlzdGVuZXJzKGNoZWNrQnV0dG9uKVxuICAgIHtcbiAgICAgICAgaWYoIShjaGVja0J1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrZWQnKSkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNoZWNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGNoZWNrQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnY2hlY2tlZCcpKVxuICAgICAgICB7XG4gICAgICAgICAgICBjaGVja0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdjaGVja2VkJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgbWFpbkNoZWNrQnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI21haW5DQicpKTtcbiAgICBtYWluQ2hlY2tCdXR0b25zLmZvckVhY2goY2hlY2tCdXR0b24gPT4gXG4gICAge1xuICAgICAgICBjaGVja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIG1haW5DQkFkZEV2ZW50TGlzdGVuZXJzKGNoZWNrQnV0dG9uKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gbWFpbkNCQWRkRXZlbnRMaXN0ZW5lcnMoY2hlY2tCdXR0b24pXG4gICAge1xuICAgICAgICBsZXQgdG9kbyA9IGNoZWNrQnV0dG9uLmNsb3Nlc3QoJ2Rpdi50b2RvJyk7XG4gICAgICAgIGxldCBkYXRlSW5wdXQgPSB0b2RvLnF1ZXJ5U2VsZWN0b3IoJy5kZGF0ZS1pbnB1dCcpO1xuICAgICAgICBpZihjaGVja0J1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrZWQnKSlcbiAgICAgICAge1xuICAgICAgICAgICAgY2hlY2tCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2tlZCcpO1xuICAgICAgICAgICAgdG9kby5jbGFzc0xpc3QucmVtb3ZlKCdkb25lJyk7XG4gICAgICAgICAgICBkYXRlSW5wdXQucmVtb3ZlQXR0cmlidXRlKCdyZWFkb25seScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoIShjaGVja0J1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrZWQnKSkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNoZWNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcbiAgICAgICAgICAgIGxldCBpY29ucyA9IHRvZG8ucXVlcnlTZWxlY3RvckFsbCgnLnRleHQtZWRpdC1idXR0b24nKTtcbiAgICAgICAgICAgIGljb25zLmZvckVhY2goIGljb24gPT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZihpY29uLmdldEF0dHJpYnV0ZSgnaWQnKSA9PSAnZWRpdC1tb2RlJylcbiAgICAgICAgICAgICAgICAgICAgZWRpdEljb25BZGRFdmVudExpc3RlbmVycyhpY29uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAnJyk7XG4gICAgICAgICAgICB0b2RvLmNsYXNzTGlzdC5hZGQoJ2RvbmUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBwcmlvcml0eVNwaW5uZXJzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhbmdlLXByaW9yaXR5JykpO1xuICAgIHByaW9yaXR5U3Bpbm5lcnMuZm9yRWFjaChwcmlvcml0eVNwaW5uZXIgPT4gXG4gICAge1xuICAgICAgICBwcmlvcml0eVNwaW5uZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgICAgICB7XG4gICAgICAgICAgICBwcmlvcml0eVNwaW5uZXJzQWRkRXZlbnRMaXN0ZW5lcnMocHJpb3JpdHlTcGlubmVyKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gcHJpb3JpdHlTcGlubmVyc0FkZEV2ZW50TGlzdGVuZXJzKHByaW9yaXR5U3Bpbm5lcilcbiAgICB7XG4gICAgICAgIGxldCBpZCA9IHByaW9yaXR5U3Bpbm5lci5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgIGxldCBwcmlvcml0eUNvbnRlbnQgPSBwcmlvcml0eVNwaW5uZXIuY2xvc2VzdCgnLnRvZG8tcHJpb3JpdHktY29udGFpbmVyJykucXVlcnlTZWxlY3RvcignLnByaW9yaXR5LXZhbHVlJyk7XG4gICAgICAgIGxldCB2YWx1ZSA9IHByaW9yaXR5Q29udGVudC50ZXh0Q29udGVudDtcblxuICAgICAgICBpZihpZCA9PSAnc3VicycpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN3aXRjaCh2YWx1ZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjYXNlICdsb3cnIDogdmFsdWUgPSAnaGlnaCc7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ25vcm1hbCcgOiB2YWx1ZSA9ICdsb3cnOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdoaWdoJyA6IHZhbHVlID0gJ25vcm1hbCc7IGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSBpZihpZCA9PSAnYWRkJylcbiAgICAgICAge1xuICAgICAgICAgICAgc3dpdGNoKHZhbHVlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2xvdycgOiB2YWx1ZSA9ICdub3JtYWwnOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdub3JtYWwnIDogdmFsdWUgPSAnaGlnaCc7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2hpZ2gnIDogdmFsdWUgPSAnbG93JzsgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcHJpb3JpdHlDb250ZW50LnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgbGV0IHRvZ2dsZUJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2dnbGUtaW1nJykpO1xuICAgIHRvZ2dsZUJ1dHRvbnMuZm9yRWFjaCggKHRvZ2dsZUJ1dHRvbikgPT4gXG4gICAge1xuICAgICAgICB0b2dnbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7cHJvamVjdFRvZ2dsZXNBZGRFdmVudExpc3RlbmVycyh0b2dnbGVCdXR0b24pfSk7XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gcHJvamVjdFRvZ2dsZXNBZGRFdmVudExpc3RlbmVycyh0b2dnbGVCdXR0b24pXG4gICAge1xuICAgICAgICBsZXQgZWxlbWVudHNUb1RvZ2dsZSA9IHRvZ2dsZUJ1dHRvbi5jbG9zZXN0KCcjdG9nZ2xlLWNvbnRhaW5lcicpLnF1ZXJ5U2VsZWN0b3IoJyN0b2dnbGFibGUnKSAucXVlcnlTZWxlY3RvckFsbCgnOnNjb3BlID4gKicpO1xuICAgICAgICBpZighKHRvZ2dsZUJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3JvdGF0ZWQnKSkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRvZ2dsZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyb3RhdGVkJylcbiAgICAgICAgICAgIGVsZW1lbnRzVG9Ub2dnbGUuZm9yRWFjaCggKGVsZW1lbnRUb1RvZ2dsZSkgPT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50VG9Ub2dnbGUuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0b2dnbGVCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdyb3RhdGVkJykpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRvZ2dsZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdyb3RhdGVkJylcbiAgICAgICAgICAgIGVsZW1lbnRzVG9Ub2dnbGUuZm9yRWFjaCggKGVsZW1lbnRUb1RvZ2dsZSkgPT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50VG9Ub2dnbGUuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2Rpc3BsYXknKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGFkZENoZWNrYm94QnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFkZC1jaGVja2JveCcpKTtcbiAgICBhZGRDaGVja2JveEJ1dHRvbnMuZm9yRWFjaCggYWRkQ2hlY2tib3hCdXR0b24gPT5cbiAgICB7XG4gICAgICAgIGFkZENoZWNrYm94QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICAgICAge1xuICAgICAgICAgICAgYWRkQ2hlY2tib3hCdXR0b25BY3Rpb24oYWRkQ2hlY2tib3hCdXR0b24pO1xuICAgICAgICB9KTsgXG4gICAgfSk7XG4gICAgZnVuY3Rpb24gYWRkQ2hlY2tib3hCdXR0b25BY3Rpb24oYWRkQ2hlY2tib3hCdXR0b24pIFxuICAgIHtcbiAgICAgICAgbGV0IGNoZWNrbGlzdENvbnRhaW5lciA9IGFkZENoZWNrYm94QnV0dG9uLmNsb3Nlc3QoJy5jaGVja2xpc3QtY29udGFpbmVyJylcbiAgICAgICAgbGV0IGNoZWNrbGlzdCA9IGNoZWNrbGlzdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2hlY2tsaXN0Jyk7XG4gICAgICAgIGxldCB0aXRsZUlucHV0ID0gY2hlY2tsaXN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveC10aXRsZS1pbnB1dCcpO1xuXG4gICAgICAgIGlmKGNoZWNrVmFsaWRpdHlUZXh0RW1wdHkodGl0bGVJbnB1dCkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBjaGVja2JveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY2hlY2tib3hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gtY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICBsZXQgY2hlY2tib3hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjaGVja2JveEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjaGVjay1kb25lLWJ1dHRvbicpO1xuICAgICAgICAgICAgICAgIGNoZWNrQnV0dG9ucy5wdXNoKGNoZWNrYm94QnV0dG9uKTtcbiAgICAgICAgICAgICAgICBjaGVja2JveEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtjaGVja0J1dHRvbkFkZEV2ZW50TGlzdGVuZXJzKGNoZWNrYm94QnV0dG9uKX0pO1xuXG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrYm94TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjaGVja2JveExhYmVsLmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94LWxhYmVsJyk7XG5cbiAgICAgICAgICAgICAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveEJ1dHRvbik7XG4gICAgICAgICAgICAgICAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3hMYWJlbCk7XG4gICAgICAgICAgICAgICAgY2hlY2tib3hMYWJlbC50ZXh0Q29udGVudCA9IHRpdGxlSW5wdXQudmFsdWU7XG4gICAgICAgICAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSA9ICcnO1xuXG4gICAgICAgICAgICAgICAgY2hlY2tsaXN0Lmluc2VydEJlZm9yZShjaGVja2JveENvbnRhaW5lciwgY2hlY2tsaXN0LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtY2hlY2tib3gnKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgY2xvc2VTREJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS1zZWNvbmQtZGlzcGxheScpO1xuICAgIGNsb3NlU0RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgIHtcbiAgICAgICAgY2xvc2VTREJ1dHRvbkFjdGlvbnMoY2xvc2VTREJ1dHRvbikgXG4gICAgfSk7XG4gICAgZnVuY3Rpb24gY2xvc2VTREJ1dHRvbkFjdGlvbnMoY2xvc2VTREJ1dHRvbikgXG4gICAge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Vjb25kLWRpc3BsYXknKS5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7IFxuICAgIH1cblxuICAgIGdlbmVyYXRlRGlyZWN0b3J5KGxvZ2ljTW9kdWxlLnJvb3QpOyAvLyEhIVxuXG4gICAgbGV0IGFkZFRvRWxlbWVudHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWFkdG89XCJ0cnVlXCJdJykpO1xuICAgIGFkZFRvRWxlbWVudHMuZm9yRWFjaCggYWRkVG9FbGVtZW50ID0+XG4gICAge1xuICAgICAgICBhZGRUb0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUpID0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGFkZFRvRWxlbWVudEFjdGlvbihhZGRUb0VsZW1lbnQpO1xuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gYWRkVG9FbGVtZW50QWN0aW9uKGFkZFRvRWxlbWVudClcbiAgICB7XG4gICAgICAgIGlmKGFkZEZ1bmN0aW9uT24gPT0gZmFsc2UgJiYgcmVtb3ZlRnVuY3Rpb25PbiA9PSBmYWxzZSlcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGxhc3REaXNwbGF5ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1kaXNwbGF5ZWQ9XCJ0cnVlXCJdJyk7XG4gICAgICAgICAgICBpZihsYXN0RGlzcGxheWVkKVxuICAgICAgICAgICAgICAgIGxhc3REaXNwbGF5ZWQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWRpc3BsYXllZCcpO1xuICAgICAgICAgICAgYWRkVG9FbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1kaXNwbGF5ZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgZ2VuZXJhdGVEaXJlY3RvcnlFbGVtZW50KGFkZFRvRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVEaXJlY3RvcnlFbGVtZW50KGFkZFRvRWxlbWVudClcbiAgICB7XG4gICAgICAgIGxldCBtYWluU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXNlY3Rpb24td2luZG93Jyk7XG4gICAgICAgIGxldCBzdWJTZWN0aW9uID0gbWFpblNlY3Rpb24ucXVlcnlTZWxlY3RvcignLnN1Yi1zZWN0aW9uJyk7XG4gICAgICAgIGlmKHN1YlNlY3Rpb24ubGFzdENoaWxkKVxuICAgICAgICAgICAgcmVtb3ZlQ2hpbGRyZW4oc3ViU2VjdGlvbik7XG4gICAgICAgIGFkZFRvRWxlbWVudCA9IGxvZ2ljTW9kdWxlLmZpbmRCeUlEKGdldEVsZW1lbnRSb3V0ZShhZGRUb0VsZW1lbnQpKTtcbiAgICAgICAgbWFpblNlY3Rpb24ucXVlcnlTZWxlY3RvcignLm1haW4tc2VjdGlvbi1oZWFkaW5nJykudGV4dENvbnRlbnQgPSBhZGRUb0VsZW1lbnQudGl0bGU7XG4gICAgICAgIGZvcihsZXQgZWxlbWVudCBvZiBhZGRUb0VsZW1lbnQuY29udGVudHMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKGVsZW1lbnQuY29uc3RydWN0b3IubmFtZSA9PSAnUHJvamVjdCcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAndG9nZ2xlLWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdWJIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7ICBcbiAgICAgICAgICAgICAgICAgICAgc3ViSGVhZGluZy5jbGFzc0xpc3QuYWRkKCdzdWItaGVhZGluZycpICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b2dnbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LmFkZCgndG9nZ2xlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9nZ2xlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZUltZy5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtaW1nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgdG9nZ2xlSWNvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlSW1nLnNldEF0dHJpYnV0ZSgnYWx0JywnaWNvbiBvZiBhIHRvZ2dsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZUJ1dHRvbnMucHVzaCh0b2dnbGVJbWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZUltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgcHJvamVjdFRvZ2dsZXNBZGRFdmVudExpc3RlbmVycyh0b2dnbGVJbWcpfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGUuYXBwZW5kQ2hpbGQodG9nZ2xlSW1nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBlbGVtZW50LnRpdGxlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJIZWFkaW5nLmFwcGVuZENoaWxkKHRvZ2dsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJIZWFkaW5nLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9kb0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0xpc3QuY2xhc3NMaXN0LmFkZCgndG9kby1saXN0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9MaXN0LnNldEF0dHJpYnV0ZSgnaWQnLCAndG9nZ2xhYmxlJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgdG9kbyBvZiBlbGVtZW50LmNvbnRlbnRzKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3VG9kbyA9IGNyZWF0ZVRvZG8odG9kbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvTGlzdC5hcHBlbmRDaGlsZChuZXdUb2RvKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQoc3ViSGVhZGluZyk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQodG9kb0xpc3QpO1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Yi1zZWN0aW9uJykuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGVsZW1lbnQuY29uc3RydWN0b3IubmFtZSA9PSAnQ2F0ZWdvcnknKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCBzdWJIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgc3ViSGVhZGluZy5jbGFzc0xpc3QuYWRkKCdzdWItaGVhZGluZycpXG4gICAgICAgICAgICAgICAgc3ViSGVhZGluZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpZCA9IGVsZW1lbnQuaWQ7XG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRGlyZWN0b3J5RWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7aWR9XCJgKSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBlbGVtZW50LnRpdGxlO1xuXG4gICAgICAgICAgICAgICAgICAgIHN1YkhlYWRpbmcuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Yi1zZWN0aW9uJykuYXBwZW5kQ2hpbGQoc3ViSGVhZGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCB0b2RvID0gY3JlYXRlVG9kbyhlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBzdWJTZWN0aW9uLmFwcGVuZENoaWxkKHRvZG8pO1xuICAgICAgICAgICAgICAgIHRvZG8ucXVlcnlTZWxlY3RvcignLmRkYXRlLWlucHV0JykudmFsdWUgPSBlbGVtZW50LmR1ZWRhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGxldCBhZGRGdW5jdGlvbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZnVuY3Rpb24nKTtcbiAgICBhZGRGdW5jdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAge1xuICAgICAgICBhZGRGdW5jdGlvbihhZGRUb0VsZW1lbnRzKTtcbiAgICB9KTtcbiAgICBmdW5jdGlvbiBhZGRGdW5jdGlvbihhZGRUb0VsZW1lbnRzKVxuICAgIHtcbiAgICAgICAgaWYoYWRkRnVuY3Rpb25PbiA9PSBmYWxzZSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYocmVtb3ZlRnVuY3Rpb25PbiA9PSB0cnVlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR1cm5PZmZSZW1vdmVGdW5jdGlvbihyZW1vdmVFbGVtZW50cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhZGRGdW5jdGlvbk9uID0gdHJ1ZTtcbiAgICAgICAgICAgIGFkZFRvRWxlbWVudHMuZm9yRWFjaCggKGFkZFRvRWxlbWVudCkgPT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhZGRUb0VsZW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY2F0ZWdvcnktdGl0bGUnKS5jbGFzc0xpc3QuYWRkKCdncmVlbi10ZXh0LWVsZW1lbnQnKTtcblxuICAgICAgICAgICAgICAgIGFkZFRvRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoYWRkRnVuY3Rpb25PbiA9PSB0cnVlKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaWQgPSBhZGRUb0VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcm91dGUgPSBnZXRFbGVtZW50Um91dGUoYWRkVG9FbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJlbnQgPSBsb2dpY01vZHVsZS5maW5kQnlJRChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWVudSA9IGdlbmVyYXRlRWxlbWVudE1lbnUocGFyZW50LCBhZGRUb0VsZW1lbnQsIHJvdXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvcHRpb25zID0gbWVudS5xdWVyeVNlbGVjdG9yQWxsKCcuc2VtLW9wdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHVybk9mZkFkZEZ1bmN0aW9uKGFkZFRvRWxlbWVudHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBcbiAgICAgICAgICAgIHR1cm5PZmZBZGRGdW5jdGlvbihhZGRUb0VsZW1lbnRzKTtcblxuICAgIH1cbiAgICBmdW5jdGlvbiB0dXJuT2ZmQWRkRnVuY3Rpb24oYWRkVG9FbGVtZW50cylcbiAgICB7XG4gICAgICAgIGFkZEZ1bmN0aW9uT24gPSBmYWxzZTtcbiAgICAgICAgYWRkVG9FbGVtZW50cy5mb3JFYWNoKCBhZGRUb0VsZW1lbnQgPT5cbiAgICAgICAge1xuICAgICAgICAgICAgYWRkVG9FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNhdGVnb3J5LXRpdGxlJykuY2xhc3NMaXN0LnJlbW92ZSgnZ3JlZW4tdGV4dC1lbGVtZW50Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzZXRTZWNvbmREaXNwbGF5KClcbiAgICB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWNvbmQtZGlzcGxheScpLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVFbGVtZW50TWVudShwYXJlbnQsIGNvbnRhaW5lciwgcm91dGUpXG4gICAge1xuICAgICAgICBzZXRTZWNvbmREaXNwbGF5KCk7XG4gICAgICAgIGxldCBvcHRpb247XG4gICAgICAgIGxldCBjYW5Db250ZW50ID0gcGFyZW50LmNhbkNvbnRlbnQ7XG4gICAgICAgIGxldCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdC1lbGVtZW50LW1lbnUnKTtcbiAgICAgICAgbWVudS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgIGZvcihsZXQgY29udGVudCBvZiBjYW5Db250ZW50KVxuICAgICAgICB7XG4gICAgICAgICAgICBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIG9wdGlvbi5jbGFzc0xpc3QuYWRkKCdzZW0tb3B0aW9uJyk7XG4gICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICAgICAgb3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBtZW51LnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICAgICAgICAgICBsZXQgY3JlYXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1idXR0b24nKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVCdXR0b24uc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2Rpc3BsYXknKTtcbiAgICAgICAgICAgICAgICBpZihjb250ZW50ID09ICdjYXRlZ29yeScgfHwgY29udGVudCA9PSAncHJvamVjdCcpXG4gICAgICAgICAgICAgICAgeyAgIFxuICAgICAgICAgICAgICAgICAgICBsZXQgdGl0bGVJbnB1dE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0LWNhdGVnb3J5LXByb2plY3QtdGl0bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVJbnB1dE1lbnUuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2Rpc3BsYXknKTtcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VTREJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlSW5wdXRNZW51LnF1ZXJ5U2VsZWN0b3IoJy5zZXQtYy1wLWlucHV0JykudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlSW5wdXRNZW51LnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZUJ1dHRvbkFjdGlvbihjcmVhdGVCdXR0b24sIHBhcmVudCwgY29udGVudCwgY29udGFpbmVyLCByb3V0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIHtvbmNlOiB0cnVlfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWNvbmQtZGlzcGxheScpLnF1ZXJ5U2VsZWN0b3IoJy50b2RvJyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG8uc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2Rpc3BsYXknKTtcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VTREJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyQWRkVG9kbyh0b2RvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZG8uc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlQnV0dG9uQWN0aW9uKGNyZWF0ZUJ1dHRvbiwgcGFyZW50LCBjb250ZW50LCBjb250YWluZXIsIHJvdXRlLCBnZXRUb2RvVmFsdWVzKHRvZG8pKTtcbiAgICAgICAgICAgICAgICAgICAgfSwge29uY2U6IHRydWV9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbWVudS5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGNsb3NlU0RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgICAgICB7XG4gICAgICAgICAgICByZW1vdmVDaGlsZHJlbihtZW51KTtcbiAgICAgICAgfSwgeyBvbmNlOiB0cnVlIH0pO1xuICAgICAgICByZXR1cm4gbWVudTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVtb3ZlQ2hpbGRyZW4ocGFyZW50KVxuICAgIHtcbiAgICAgICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSBcbiAgICAgICAge1xuICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5sYXN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlRGlyZWN0b3J5KGRpcmVjdG9yeSlcbiAgICB7XG4gICAgICAgIGxldCBkaXJlY3RvcnlDb250ZW50ID0gZGlyZWN0b3J5LmNvbnRlbnRzO1xuXG4gICAgICAgIGlmKGRpcmVjdG9yeUNvbnRlbnQubGVuZ3RoICE9IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvcihsZXQgZWxlbWVudCBvZiBkaXJlY3RvcnlDb250ZW50KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQuZHVlRGF0ZSA9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZihlbGVtZW50LmNhbkNvbnRlbnQpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQuY2FuQ29udGVudFswXSA9PSAncHJvamVjdCcpXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlQ2F0ZWdvcnkoZGlyZWN0b3J5LCBlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZURpcmVjdG9yeShlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoZWxlbWVudC5jYW5Db250ZW50WzBdID09ICd0b2RvJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVQcm9qZWN0KGRpcmVjdG9yeSwgZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlQ2F0ZWdvcnkoZGlyZWN0b3J5LCBlbGVtZW50KVxuICAgIHtcbiAgICAgICAgbGV0IGNhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhdGVnb3J5LmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5Jyk7XG4gICAgICAgIGNhdGVnb3J5LnNldEF0dHJpYnV0ZSgnaWQnLCAndG9nZ2xlLWNvbnRhaW5lcicpO1xuICAgICAgICBjYXRlZ29yeS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBlbGVtZW50LmlkKTtcbiAgICAgICAgY2F0ZWdvcnkuc2V0QXR0cmlidXRlKCdkYXRhLWFkdG8nLCAndHJ1ZScpO1xuXG4gICAgICAgICAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jYXRlZ29yeS1oZWFkZXInKTtcblxuICAgICAgICAgICAgICAgIGxldCB0b2dnbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LmFkZCgndG9nZ2xlJylcblxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9nZ2xlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUltZy5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtaW1nJyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHRvZ2dsZUljb24pO1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVJbWcuc2V0QXR0cmlidXRlKCdhbHQnLCAnaWNvbiBvZiBhIHRvZ2dsZScpO1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVCdXR0b25zLnB1c2godG9nZ2xlSW1nKTtcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlSW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge3Byb2plY3RUb2dnbGVzQWRkRXZlbnRMaXN0ZW5lcnModG9nZ2xlSW1nKX0pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeS1wcm9qZWN0LWljb24nKTtcbiAgICAgICAgICAgICAgICBpY29uLnRleHRDb250ZW50ID0gJ0MnO1xuXG4gICAgICAgICAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jYXRlZ29yeS10aXRsZScpO1xuICAgICAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gZWxlbWVudC50aXRsZTtcblxuICAgICAgICAgICAgbGV0IGNhdGVnb3J5RWxlbWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNhdGVnb3J5RWxlbWVudHMuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnktZWxlbWVudHMnKTtcbiAgICAgICAgICAgIGNhdGVnb3J5RWxlbWVudHMuc2V0QXR0cmlidXRlKCdpZCcsICd0b2dnbGFibGUnKTtcblxuICAgICAgICAgICAgdG9nZ2xlLmFwcGVuZENoaWxkKHRvZ2dsZUltZyk7XG4gICAgICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodG9nZ2xlKTtcbiAgICAgICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChpY29uKTtcbiAgICAgICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgICAgICBjYXRlZ29yeS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgICAgICAgICAgY2F0ZWdvcnkuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlFbGVtZW50cyk7XG5cbiAgICAgICAgbGV0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtkaXJlY3RvcnkuaWR9XCJdYCkucXVlcnlTZWxlY3RvcignLmNhdGVnb3J5LWVsZW1lbnRzJyk7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjYXRlZ29yeSk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gY2F0ZWdvcnk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoZGlyZWN0b3J5LCBlbGVtZW50KVxuICAgIHtcbiAgICAgICAgbGV0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdEhlYWRlci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNhdGVnb3J5LWhlYWRlcicpO1xuICAgICAgICBwcm9qZWN0SGVhZGVyLnNldEF0dHJpYnV0ZSgnZGF0YS1lbGVtZW50JywgJ3Byb2plY3QnKTtcbiAgICAgICAgcHJvamVjdEhlYWRlci5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBlbGVtZW50LmlkKTtcbiAgICAgICAgcHJvamVjdEhlYWRlci5zZXRBdHRyaWJ1dGUoJ2RhdGEtYWR0bycsICd0cnVlJyk7XG5cbiAgICAgICAgICAgIGxldCBwcm9qZWN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvamVjdEljb24uY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnktcHJvamVjdC1pY29uJyk7XG4gICAgICAgICAgICBwcm9qZWN0SWNvbi50ZXh0Q29udGVudCA9ICdQJztcblxuICAgICAgICAgICAgbGV0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY2F0ZWdvcnktdGl0bGUnKTtcbiAgICAgICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IGVsZW1lbnQudGl0bGU7XG5cbiAgICAgICAgICAgIHByb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQocHJvamVjdEljb24pO1xuICAgICAgICAgICAgcHJvamVjdEhlYWRlci5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICAgICAgICBcbiAgICAgICAgbGV0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtkaXJlY3RvcnkuaWR9XCJdYCkucXVlcnlTZWxlY3RvcignLmNhdGVnb3J5LWVsZW1lbnRzJyk7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKTtcblxuICAgICAgICByZXR1cm4gcHJvamVjdEhlYWRlcjtcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlQW5kQXBwZW5kVG9kbyh0b2RvVmFsdWVzLCBwYXJlbnQpXG4gICAge1xuICAgICAgICBsZXQgdG9kbyA9IGNyZWF0ZVRvZG8odG9kb1ZhbHVlcyk7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0b2RvKTtcbiAgICAgICAgaWYodG9kb1ZhbHVlcy5pc0RvbmUpXG4gICAgICAgICAgICBtYWluQ0JBZGRFdmVudExpc3RlbmVycyh0b2RvLnF1ZXJ5U2VsZWN0b3IoJy5jaGVjay1kb25lLWJ1dHRvbicpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2xlYXJBZGRUb2RvKHRvZG8pXG4gICAge1xuICAgICAgICB0b2RvLnF1ZXJ5U2VsZWN0b3IoJy50aXRsZS1pbnB1dCcpLnZhbHVlID0gJyc7XG4gICAgICAgIHRvZG8ucXVlcnlTZWxlY3RvcignLmRkYXRlLWlucHV0JykudmFsdWUgPSAnJztcbiAgICAgICAgdG9kby5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHktdmFsdWUnKS52YWx1ZSA9ICdub3JtYWwnO1xuICAgICAgICB0b2RvLnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbi1pbnB1dCcpLnZhbHVlID0gJyc7XG4gICAgICAgIGxldCBjaGVja2xpc3QgPSB0b2RvLnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2xpc3QnKTtcbiAgICAgICAgbGV0IGNoZWtib3hlcyA9IGNoZWNrbGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3gtY29udGFpbmVyJyk7XG4gICAgICAgIGZvcihsZXQgY2hlY2tib3ggb2YgY2hla2JveGVzKVxuICAgICAgICB7XG4gICAgICAgICAgICBjaGVja2xpc3QucmVtb3ZlQ2hpbGQoY2hlY2tib3gpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRvZG8odG9kb1ZhbHVlcylcbiAgICB7XG4gICAgICAgIGxldCB0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZG8uY2xhc3NMaXN0LmFkZCgndG9kbycpO1xuICAgICAgICBcbiAgICAgICAgICAgIGxldCB0b2RvTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdG9kb01haW4uY2xhc3NMaXN0LmFkZCgndG9kby1tYWluJyk7XG5cbiAgICAgICAgICAgICAgICBsZXQgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdGl0bGUnKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9kb1RpdGxlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvVGl0bGVDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3RvZG8tdGl0bGUtY29udGVudCcpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvVGl0bGVDb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAndGV4dC1jb250ZW50Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZUNvbnRlbnQudGV4dENvbnRlbnQgPSB0b2RvVmFsdWVzLnRpdGxlO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b2RvVGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWlucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgJzIwJyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpOyAgIFxuICAgICAgICAgICAgICAgICAgICB0b2RvVGl0bGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvVmFsdWVzLnRpdGxlID0gdG9kb1RpdGxlSW5wdXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB0aXRsZUVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVFZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RleHQtZWRpdC1idXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVFZGl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAncmVhZC1tb2RlJyk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRpdGxlRWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlRWRpdEljb24uY2xhc3NMaXN0LmFkZCgnZWRpdC1pY29uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZUVkaXRJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgZWRpdEljb24yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlRWRpdEljb24uc2V0QXR0cmlidXRlKCdhbHQnLCAnZWRpdCBpbmRpY2F0b3IgaWNvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgIGVkaXRJY29ucy5wdXNoKHRpdGxlRWRpdEJ1dHRvbik7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlRWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgZWRpdEljb25BZGRFdmVudExpc3RlbmVycyh0aXRsZUVkaXRCdXR0b24pfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGl0bGVFZGl0QnV0dG9uLmFwcGVuZENoaWxkKHRpdGxlRWRpdEljb24pO1xuICAgICAgICAgICAgICAgICAgICB0b2RvVGl0bGUuYXBwZW5kQ2hpbGQodG9kb1RpdGxlQ29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZS5hcHBlbmRDaGlsZCh0b2RvVGl0bGVJbnB1dCk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZS5hcHBlbmRDaGlsZCh0aXRsZUVkaXRCdXR0b24pO1xuXG5cbiAgICAgICAgICAgICAgICBsZXQgdG9kb0R1ZWRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0b2RvRHVlZGF0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvLWR1ZWRhdGUnKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9kb0R1ZWRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EdWVkYXRlTGFiZWwuY2xhc3NMaXN0LmFkZCgndG9kby1sYWJlbCcpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvRHVlZGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2R1ZURhdGUnKVxuICAgICAgICAgICAgICAgICAgICB0b2RvRHVlZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBkYXRlJztcblxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9kb0R1ZWRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EdWVkYXRlSW5wdXQuY2xhc3NMaXN0LmFkZCgnZGRhdGUtaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0R1ZWRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EdWVkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdkdWUtZGF0ZScpXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRlVmFsdWUgPSB0b2RvVmFsdWVzLmR1ZWRhdGU7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EdWVkYXRlSW5wdXQudmFsdWUgPSBkYXRlVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EdWVkYXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ZhbHVlcy5kdWVkYXRlID0gdG9kb0R1ZWRhdGVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9kb0R1ZWRhdGUuYXBwZW5kQ2hpbGQodG9kb0R1ZWRhdGVMYWJlbCk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EdWVkYXRlLmFwcGVuZENoaWxkKHRvZG9EdWVkYXRlSW5wdXQpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgdG9kb1ByaW9yaXR5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tcHJpb3JpdHktY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoYW5nZVByaW9yaXR5U3VicyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VQcmlvcml0eVN1YnMuY2xhc3NMaXN0LmFkZCgnY2hhbmdlLXByaW9yaXR5JywgJ3JvdW5kLWJ1dHRvbicpXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZVByaW9yaXR5U3Vicy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1YnMnKTtcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlTcGlubmVycy5wdXNoKGNoYW5nZVByaW9yaXR5U3Vicyk7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZVByaW9yaXR5U3Vicy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eVNwaW5uZXJzQWRkRXZlbnRMaXN0ZW5lcnMoY2hhbmdlUHJpb3JpdHlTdWJzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9WYWx1ZXMucHJpb3JpdHkgPSBjaGFuZ2VQcmlvcml0eVN1YnMuY2xvc2VzdCgnLnRvZG8tcHJpb3JpdHktY29udGFpbmVyJykucXVlcnlTZWxlY3RvcignLnByaW9yaXR5LXZhbHVlJykudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3RvZG8tcHJpb3JpdHknKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9kb1ByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eUxhYmVsLmNsYXNzTGlzdC5hZGQoJ3RvZG8tbGFiZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRvZG9Qcmlvcml0eVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHlWYWx1ZS5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS12YWx1ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5VmFsdWUudGV4dENvbnRlbnQgPSB0b2RvVmFsdWVzLnByaW9yaXR5O1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoYW5nZVByaW9yaXR5QWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZVByaW9yaXR5QWRkLmNsYXNzTGlzdC5hZGQoJ2NoYW5nZS1wcmlvcml0eScsICdyb3VuZC1idXR0b24nKVxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VQcmlvcml0eUFkZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZCcpO1xuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eVNwaW5uZXJzLnB1c2goY2hhbmdlUHJpb3JpdHlBZGQpO1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VQcmlvcml0eUFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eVNwaW5uZXJzQWRkRXZlbnRMaXN0ZW5lcnMoY2hhbmdlUHJpb3JpdHlBZGQpXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvVmFsdWVzLnByaW9yaXR5ID0gY2hhbmdlUHJpb3JpdHlBZGQuY2xvc2VzdCgnLnRvZG8tcHJpb3JpdHktY29udGFpbmVyJykucXVlcnlTZWxlY3RvcignLnByaW9yaXR5LXZhbHVlJykudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eS5hcHBlbmRDaGlsZCh0b2RvUHJpb3JpdHlMYWJlbCk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eS5hcHBlbmRDaGlsZCh0b2RvUHJpb3JpdHlWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGFuZ2VQcmlvcml0eVN1YnMpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb1ByaW9yaXR5KTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoYW5nZVByaW9yaXR5QWRkKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2tEb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY2hlY2tEb25lLmNsYXNzTGlzdC5hZGQoJ2NoZWNrLWRvbmUnKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgY2hlY2tEb25lQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrRG9uZUJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjaGVjay1kb25lLWJ1dHRvbi1jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoZWNrRG9uZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tEb25lQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NoZWNrLWRvbmUtYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja0RvbmVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdtYWluQ0InKVxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbkNoZWNrQnV0dG9ucy5wdXNoKGNoZWNrRG9uZUJ1dHRvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja0RvbmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IG1haW5DQkFkZEV2ZW50TGlzdGVuZXJzKGNoZWNrRG9uZUJ1dHRvbil9KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrRG9uZUJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja0RvbmVCdXR0b24pO1xuICAgICAgICAgICAgICAgICAgICBjaGVja0RvbmUuYXBwZW5kQ2hpbGQoY2hlY2tEb25lQnV0dG9uQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0b2RvTWFpbi5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xuICAgICAgICAgICAgICAgIHRvZG9NYWluLmFwcGVuZENoaWxkKHRvZG9EdWVkYXRlKTtcbiAgICAgICAgICAgICAgICB0b2RvTWFpbi5hcHBlbmRDaGlsZCh0b2RvUHJpb3JpdHlDb250YWluZXIpO1xuICAgICAgICAgICAgICAgIHRvZG9NYWluLmFwcGVuZENoaWxkKGNoZWNrRG9uZSk7XG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGxldCB0b2RvQ2hlY2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0b2RvQ2hlY2tMaXN0LmNsYXNzTGlzdC5hZGQoJ3RvZG8tY2hlY2tsaXN0Jyk7XG4gICAgICAgICAgICB0b2RvQ2hlY2tMaXN0LnNldEF0dHJpYnV0ZSgnaWQnLCAndG9nZ2xlLWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrbGlzdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNoZWNrbGlzdEhlYWRlci5jbGFzc0xpc3QuYWRkKCdjaGVja2xpc3QtaGVhZGVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoZWNrbGlzdFRvZ2dsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3RUb2dnbGUuY2xhc3NMaXN0LmFkZCgndG9nZ2xlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGVja2xpc3RUb2dnbGVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdFRvZ2dsZUltZy5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtaW1nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3RUb2dnbGVJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCB0b2dnbGVJY29uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdFRvZ2dsZUltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdpY29uIG9mIGEgdG9nZ2xlJyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUJ1dHRvbnMucHVzaChjaGVja2xpc3RUb2dnbGVJbWcpO1xuICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3RUb2dnbGVJbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7cHJvamVjdFRvZ2dsZXNBZGRFdmVudExpc3RlbmVycyhjaGVja2xpc3RUb2dnbGVJbWcpfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoZWNrbGlzdEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0SGVhZGluZy5jbGFzc0xpc3QuYWRkKCdjaGVja2xpc3QtaGVhZGluZycpO1xuICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3RIZWFkaW5nLnRleHRDb250ZW50ID0gJ0NoZWNrbGlzdCc7XG5cbiAgICAgICAgICAgICAgICBsZXQgY2hlY2tsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY2hlY2tsaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NoZWNrbGlzdC1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICBjaGVja2xpc3RDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICd0b2dnbGFibGUnKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgY2hlY2tsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdC5jbGFzc0xpc3QuYWRkKCdjaGVja2xpc3QnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBjaGVja2JveFZhbHVlIG9mIHRvZG9WYWx1ZXMuY2hlY2tib3hlcylcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hlY2tib3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2JveENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjaGVja2JveC1jb250YWluZXInKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGVja2JveERvbmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hEb25lQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NoZWNrLWRvbmUtYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrQnV0dG9ucy5wdXNoKGNoZWNrYm94RG9uZUJ1dHRvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrYm94RG9uZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgY2hlY2tCdXR0b25BZGRFdmVudExpc3RlbmVycyhjaGVja2JveERvbmVCdXR0b24pfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoZWNrYm94TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hMYWJlbC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveC1sYWJlbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2JveExhYmVsLnRleHRDb250ZW50ID0gY2hlY2tib3hWYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveERvbmVCdXR0b24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveExhYmVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0LmFwcGVuZENoaWxkKGNoZWNrYm94Q29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBsZXQgY3JlYXRlQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlQ2hlY2tib3guY2xhc3NMaXN0LmFkZCgnY3JlYXRlLWNoZWNrYm94Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGVja2JveFRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hUaXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94LXRpdGxlLWlucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2JveFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrYm94VGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbmxlbmd0aCcsICcxJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2JveFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdjaGVja2JveCB0aXRsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgJzMwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2JveFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdjaGVja2xpc3QtY3JlYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2JveFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFkZENoZWNrYm94QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRDaGVja2JveEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtY2hlY2tib3gnLCAncm91bmQtYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRDaGVja2JveEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkQ2hlY2tib3hCdXR0b25zLnB1c2goYWRkQ2hlY2tib3hCdXR0b24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkQ2hlY2tib3hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvVmFsdWVzLmNoZWNrYm94ZXMucHVzaChhZGRDaGVja2JveEJ1dHRvbi5jbG9zZXN0KCcuY3JlYXRlLWNoZWNrYm94JykucXVlcnlTZWxlY3RvcignLmNoZWNrYm94LXRpdGxlLWlucHV0JykudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZENoZWNrYm94QnV0dG9uQWN0aW9uKGFkZENoZWNrYm94QnV0dG9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlQ2hlY2tib3guYXBwZW5kQ2hpbGQoY2hlY2tib3hUaXRsZUlucHV0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZUNoZWNrYm94LmFwcGVuZENoaWxkKGFkZENoZWNrYm94QnV0dG9uKTtcblxuXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdFRvZ2dsZS5hcHBlbmRDaGlsZChjaGVja2xpc3RUb2dnbGVJbWcpO1xuICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3RIZWFkZXIuYXBwZW5kQ2hpbGQoY2hlY2tsaXN0VG9nZ2xlKTtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0SGVhZGVyLmFwcGVuZENoaWxkKGNoZWNrbGlzdEhlYWRpbmcpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvQ2hlY2tMaXN0LmFwcGVuZENoaWxkKGNoZWNrbGlzdEhlYWRlcik7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2xpc3QpXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVDaGVja2JveClcbiAgICAgICAgICAgICAgICAgICAgdG9kb0NoZWNrTGlzdC5hcHBlbmRDaGlsZChjaGVja2xpc3RDb250YWluZXIpO1xuXG5cbiAgICAgICAgICAgIGxldCB0b2RvRGVzY3JpcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLWRlc2NyaXB0aW9uLWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgbGV0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICAgICAgdG9kb0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAndGV4dC1jb250ZW50Jyk7XG4gICAgICAgICAgICAgICAgdG9kb0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdG9kb1ZhbHVlcy5kZXNjcmlwdGlvbjtcblxuICAgICAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uLWlucHV0JywgJ3RvZG8tZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsICcyMDAnKTtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogbm9uZScpO1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTsgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgndmFsaWRhdGUtZW1wdHknLCAnZmFsc2UnKTsgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2RvVmFsdWVzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbkVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbkVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgndGV4dC1lZGl0LWJ1dHRvbicpO1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uRWRpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JlYWQtbW9kZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbkVkaXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uRWRpdEljb24uY2xhc3NMaXN0LmFkZCgnZWRpdC1pY29uJyk7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uRWRpdEljb24uc2V0QXR0cmlidXRlKCdzcmMnLCBlZGl0SWNvbjIpO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbkVkaXRJY29uLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2VkaXQgaW5kaWNhdG9yIGljb24nKTtcblxuICAgICAgICAgICAgICAgIGVkaXRJY29ucy5wdXNoKGRlc2NyaXB0aW9uRWRpdEJ1dHRvbik7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25FZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBlZGl0SWNvbkFkZEV2ZW50TGlzdGVuZXJzKGRlc2NyaXB0aW9uRWRpdEJ1dHRvbil9KTtcblxuXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25FZGl0QnV0dG9uLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRWRpdEljb24pO1xuICAgICAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRGVzY3JpcHRpb24pOyAgICBcbiAgICAgICAgICAgICAgICB0b2RvRGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7ICAgIFxuICAgICAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkVkaXRCdXR0b24pOyAgICBcblxuXG4gICAgICAgICAgICB0b2RvLmFwcGVuZENoaWxkKHRvZG9NYWluKTtcbiAgICAgICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQodG9kb0NoZWNrTGlzdCk7XG4gICAgICAgICAgICB0b2RvLmFwcGVuZENoaWxkKHRvZG9EZXNjcmlwdGlvbkNvbnRhaW5lcik7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdG9kbztcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0VG9kb1ZhbHVlcyh0b2RvKVxuICAgIHtcbiAgICAgICAgbGV0IHRpdGxlID0gdG9kby5xdWVyeVNlbGVjdG9yKCcudGl0bGUtaW5wdXQnKS52YWx1ZTtcbiAgICAgICAgbGV0IGR1ZURhdGUgPSB0b2RvLnF1ZXJ5U2VsZWN0b3IoJy5kZGF0ZS1pbnB1dCcpLnZhbHVlO1xuICAgICAgICBsZXQgcHJpb3JpdHkgPSB0b2RvLnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eS12YWx1ZScpLnRleHRDb250ZW50O1xuXG4gICAgICAgIGxldCBjaGVja2JveGVzRWxlbWVudHMgPSB0b2RvLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveC1sYWJlbCcpO1xuICAgICAgICBsZXQgY2hlY2tib3hlcyA9IFtdO1xuICAgICAgICBmb3IobGV0IGNoZWNrYm94IG9mIGNoZWNrYm94ZXNFbGVtZW50cylcbiAgICAgICAge1xuICAgICAgICAgICAgY2hlY2tib3hlcy5wdXNoKGNoZWNrYm94LnRleHRDb250ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IHRvZG8ucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uLWlucHV0JykudmFsdWU7XG4gICAgICAgIGxldCBpc0RvbmUgPSBmYWxzZTtcbiAgICAgICAgaWYodG9kby5xdWVyeVNlbGVjdG9yKCdjaGVjay1kb25lLWJ1dHRvbicpICYmIHRvZG8ucXVlcnlTZWxlY3RvcignY2hlY2stZG9uZS1idXR0b24nKS5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrZWQnKSlcbiAgICAgICAgICAgIGlzRG9uZSA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgICAgIHByaW9yaXR5LFxuICAgICAgICAgICAgY2hlY2tib3hlcyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaXNEb25lXG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0RWxlbWVudFJvdXRlKGVsZW1lbnQpXG4gICAge1xuICAgICAgICBsZXQgcm91dGUgPSBbXTtcbiAgICAgICAgbGV0IGlkID0gZWxlbWVudC5jbG9zZXN0KCdbZGF0YS1hZHRvPVwidHJ1ZVwiXScpLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgICByb3V0ZS5wdXNoKCtpZCk7XG4gICAgICAgIHdoaWxlKGlkICE9IDApXG4gICAgICAgIHsgICBcbiAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQuY2xvc2VzdCgnW2RhdGEtYWR0bz1cInRydWVcIl0nKTtcbiAgICAgICAgICAgIGlkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgICAgICAgIHJvdXRlLnB1c2goK2lkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm91dGUucmV2ZXJzZSgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBCQ2dldElucHV0VmFsdWUoYnV0dG9uKVxuICAgIHtcbiAgICAgICAgbGV0IGlucHV0VG9WYWxpZGF0ZTtcbiAgICAgICAgaWYoYnV0dG9uLmNsb3Nlc3QoJy5zZWNvbmQtZGlzcGxheS1tZW51JykucXVlcnlTZWxlY3RvcignLnRvZG8nKS5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXNwbGF5JykgIT0gJ25vbmUnKVxuICAgICAgICAgICAgaW5wdXRUb1ZhbGlkYXRlID0gYnV0dG9uLmNsb3Nlc3QoJy5zZWNvbmQtZGlzcGxheS1tZW51JykucXVlcnlTZWxlY3RvcignLnRvZG8nKS5xdWVyeVNlbGVjdG9yKCcudGl0bGUtaW5wdXQnKTtcbiAgICAgICAgZWxzZSBcbiAgICAgICAgICAgIGlucHV0VG9WYWxpZGF0ZSA9IGJ1dHRvbi5jbG9zZXN0KCcuc2Vjb25kLWRpc3BsYXktbWVudScpLnF1ZXJ5U2VsZWN0b3IoJy5zZXQtY2F0ZWdvcnktcHJvamVjdC10aXRsZScpLnF1ZXJ5U2VsZWN0b3IoJy5zZXQtYy1wLWlucHV0Jyk7XG4gICAgICAgIGlmKGlucHV0VG9WYWxpZGF0ZS52YWxpZGl0eS52YWx1ZU1pc3NpbmcpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlucHV0VG9WYWxpZGF0ZS5zZXRDdXN0b21WYWxpZGl0eSgnTXVzdCBjb25zaXN0IGF0IGxlYXN0IG9uZSBjaGFyYWN0ZXInKTtcbiAgICAgICAgICAgIGlucHV0VG9WYWxpZGF0ZS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnB1dFRvVmFsaWRhdGUudmFsdWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbkFjdGlvbihidXR0b24sIHBhcmVudCwgZWxlbWVudCwgY29udGFpbmVyLCByb3V0ZSwgdmFsdWVzKVxuICAgIHtcbiAgICAgICAgbGV0IGlucHV0VmFsdWUgPSBCQ2dldElucHV0VmFsdWUoYnV0dG9uKTtcbiAgICAgICAgbGV0IGxvZ2ljRWxlbWVudDtcbiAgICAgICAgbGV0IG5ld0VsZW1lbnQ7XG4gICAgICAgIGlmKGlucHV0VmFsdWUgIT0gJycpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKGVsZW1lbnQgPT0gJ2NhdGVnb3J5JylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsb2dpY0VsZW1lbnQgPSBsb2dpY01vZHVsZS5jcmVhdGVDYXRlZ29yeShpbnB1dFZhbHVlLCByb3V0ZSk7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudCA9IGNyZWF0ZUNhdGVnb3J5KHBhcmVudCwgbG9naWNFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAvL2FkZEZ1bmN0aW9uKG5ld0VsZW1lbnQpO1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IGFkZFRvRWxlbWVudEFjdGlvbihuZXdFbGVtZW50KX0pO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGVsZW1lbnQgPT0gJ3Byb2plY3QnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxvZ2ljRWxlbWVudCA9IGxvZ2ljTW9kdWxlLmNyZWF0ZVByb2plY3QoaW5wdXRWYWx1ZSwgcm91dGUpO1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQgPSBjcmVhdGVQcm9qZWN0KHBhcmVudCwgbG9naWNFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAvL2FkZEZ1bmN0aW9uKG5ld0VsZW1lbnQpO1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IGFkZFRvRWxlbWVudEFjdGlvbihuZXdFbGVtZW50KX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsb2dpY0VsZW1lbnQgPSBsb2dpY01vZHVsZS5jcmVhdGVUb2RvKGlucHV0VmFsdWUsIHJvdXRlLCB2YWx1ZXMuZHVlRGF0ZSwgdmFsdWVzLnByaW9yaXR5LCB2YWx1ZXMuY2hlY2tsaXN0LCB2YWx1ZXMuZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWRkVG9FbGVtZW50cy5wdXNoKG5ld0VsZW1lbnQpO1xuICAgICAgICAgICAgaWYoY29udGFpbmVyLmdldEF0dHJpYnV0ZSgnZGF0YS1kaXNwbGF5ZWQnKSA9PSAndHJ1ZScpXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVEaXJlY3RvcnlFbGVtZW50KGNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBjbG9zZVNEQnV0dG9uLmNsaWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBcbiAgICAgICAge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjcmVhdGVCdXR0b25BY3Rpb24oYnV0dG9uLCBwYXJlbnQsIGVsZW1lbnQsIGNvbnRhaW5lciwgcm91dGUsIHZhbHVlcyk7XG4gICAgICAgICAgICB9LCB7b25jZTogdHJ1ZX0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGxldCByZW1vdmVGdW5jdGlvbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZW1vdmUtZnVuY3Rpb24nKTtcbiAgICBsZXQgcmVtb3ZlRWxlbWVudHMgPSBhZGRUb0VsZW1lbnRzLnNsaWNlKDEsIGFkZFRvRWxlbWVudHMubGVuZ3RoKTtcbiAgICByZW1vdmVGdW5jdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAge1xuICAgICAgICByZW1vdmVGdW5jdGlvbihyZW1vdmVFbGVtZW50cyk7XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gcmVtb3ZlRnVuY3Rpb24ocmVtb3ZlRWxlbWVudHMpXG4gICAge1xuICAgICAgICBpZihyZW1vdmVGdW5jdGlvbk9uID09IGZhbHNlKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZihhZGRGdW5jdGlvbk9uID09IHRydWUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHVybk9mZkFkZEZ1bmN0aW9uKGFkZFRvRWxlbWVudHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVtb3ZlRnVuY3Rpb25PbiA9IHRydWU7XG4gICAgICAgICAgICByZW1vdmVFbGVtZW50cy5mb3JFYWNoKCAocmVtb3ZlRWxlbWVudCkgPT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZW1vdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNhdGVnb3J5LXRpdGxlJykuY2xhc3NMaXN0LmFkZCgncmVkLXRleHQtZWxlbWVudCcpO1xuXG4gICAgICAgICAgICAgICAgcmVtb3ZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWYocmVtb3ZlRnVuY3Rpb25PbiA9PSB0cnVlKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSByZW1vdmVFbGVtZW50cy5pbmRleE9mKHJlbW92ZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRWxlbWVudHMgPSByZW1vdmVFbGVtZW50cy5zbGljZSgwLCBpbmRleCkuY29uY2F0KHJlbW92ZUVsZW1lbnRzLnNsaWNlKGluZGV4KzEsIHJlbW92ZUVsZW1lbnQubGVuZ3RoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9IGFkZFRvRWxlbWVudHMuaW5kZXhPZihyZW1vdmVFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvRWxlbWVudHMgPSBhZGRUb0VsZW1lbnRzLnNsaWNlKDAsIGluZGV4KS5jb25jYXQoYWRkVG9FbGVtZW50cy5zbGljZShpbmRleCsxLCBhZGRUb0VsZW1lbnRzLmxlbmd0aCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlkID0gcmVtb3ZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByb3V0ZSA9IGdldEVsZW1lbnRSb3V0ZShyZW1vdmVFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsb2dpY0VsZW1lbnQgPSBsb2dpY01vZHVsZS5maW5kQnlJRChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbG9naWNQYXJlbnQgPSBsb2dpY01vZHVsZS5maW5kQnlJRChyb3V0ZS5zbGljZSgwLCByb3V0ZS5sZW5ndGgtMSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBhcmVudENvbnRhaW5lciA9IHJlbW92ZUVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENvbnRhaW5lci5yZW1vdmVDaGlsZChyZW1vdmVFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2ljTW9kdWxlLnJlbW92ZUVsZW1lbnQobG9naWNQYXJlbnQsIGxvZ2ljRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0dXJuT2ZmUmVtb3ZlRnVuY3Rpb24ocmVtb3ZlRWxlbWVudHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVtb3ZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGlzcGxheWVkJykgPT0gJ3RydWUnKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdWJTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Yi1zZWN0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQ2hpbGRyZW4oc3ViU2VjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIuY2xhc3NMaXN0LmFkZCgnc3ViLXNlY3Rpb24tcGxhY2Vob2xkZXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlci50ZXh0Q29udGVudCA9ICdDbGljayBhbiBlbGVtZW50IGZyb20gWW91ciBkaXJlY3RvcnkgdG8gdmlldyBpdCBoZXJlJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJTZWN0aW9uLmFwcGVuZENoaWxkKHBsYWNlaG9sZGVyKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXNlY3Rpb24taGVhZGluZycpLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIFxuICAgICAgICAgICAgdHVybk9mZlJlbW92ZUZ1bmN0aW9uKHJlbW92ZUVsZW1lbnRzKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdHVybk9mZlJlbW92ZUZ1bmN0aW9uKHJlbW92ZUVsZW1lbnRzKVxuICAgIHtcbiAgICAgICAgcmVtb3ZlRnVuY3Rpb25PbiA9IGZhbHNlO1xuICAgICAgICByZW1vdmVFbGVtZW50cy5mb3JFYWNoKCByZW1vdmVFbGVtZW50ID0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlbW92ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY2F0ZWdvcnktdGl0bGUnKS5jbGFzc0xpc3QucmVtb3ZlKCdyZWQtdGV4dC1lbGVtZW50Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgfVxufVxuKSgpOyIsImV4cG9ydCBsZXQgbG9naWNNb2R1bGUgPVxuKGZ1bmN0aW9uKClcbntcbiAgICBsZXQgaWRzZXQgPSAtMTtcblxuICAgIGNsYXNzIEVsZW1lbnRcbiAgICB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHRpdGxlKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgICAgICB0aGlzLmlkID0gKytpZHNldDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjbGFzcyBUb2RvIGV4dGVuZHMgRWxlbWVudFxuICAgIHtcbiAgICAgICAgY29uc3RydWN0b3IodGl0bGUsIGR1ZWRhdGUsIHByaW9yaXR5LCBjaGVja2xpc3QsIGRlc2NyaXB0aW9uLCBkb25lID0gZmFsc2UpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN1cGVyKHRpdGxlKTtcbiAgICAgICAgICAgIHRoaXMuZHVlZGF0ZSA9IGR1ZWRhdGU7XG4gICAgICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgICAgICB0aGlzLmNoZWNrYm94ZXMgPSBjaGVja2xpc3Q7XG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgICAgICB0aGlzLmRvbmUgPSBkb25lO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNsYXNzIFByb2plY3QgZXh0ZW5kcyBFbGVtZW50XG4gICAge1xuICAgICAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgY29udGVudHMgPSBbXSwgY2FuQ29udGVudCA9IFsndG9kbyddKVxuICAgICAgICB7XG4gICAgICAgICAgICBzdXBlcih0aXRsZSk7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRzID0gY29udGVudHM7XG4gICAgICAgICAgICB0aGlzLmNhbkNvbnRlbnQgPSBjYW5Db250ZW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNsYXNzIENhdGVnb3J5IGV4dGVuZHMgRWxlbWVudFxuICAgIHtcbiAgICAgICAgY29uc3RydWN0b3IodGl0bGUsIGNvbnRlbnRzID0gW10sIGNhbkNvbnRlbnQgPSBbJ3Byb2plY3QnLCAnY2F0ZWdvcnknXSlcbiAgICAgICAge1xuICAgICAgICAgICAgc3VwZXIodGl0bGUpO1xuICAgICAgICAgICAgdGhpcy5jb250ZW50cyA9IGNvbnRlbnRzO1xuICAgICAgICAgICAgdGhpcy5jYW5Db250ZW50ID0gY2FuQ29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBsZXQgcm9vdCA9IG5ldyBDYXRlZ29yeSgnWW91ciBkaXJlY3RvcnknKTtcbiAgICBcbiAgICBmdW5jdGlvbiBmaW5kQnlJRChpZFJvdXRlKVxuICAgIHtcbiAgICAgICAgaWYoaWRSb3V0ZS5sZW5ndGggPT0gMClcbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICBsZXQgaWQgPSBpZFJvdXRlWzFdO1xuICAgICAgICBsZXQgcGFyZW50ID0gcm9vdDtcbiAgICAgICAgZm9yKGxldCBpID0gMTsgaSA8IGlkUm91dGUubGVuZ3RoOylcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yKGxldCBjaGlsZCBvZiBwYXJlbnQuY29udGVudHMpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYoY2hpbGQuaWQgPT0gaWQpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQgPSBjaGlsZDtcbiAgICAgICAgICAgICAgICAgICAgaWQgPSBpZFJvdXRlWysraV1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudChjaGlsZCwgaWRSb3V0ZSlcbiAgICB7XG4gICAgICAgIGxldCBwYXJlbnQgPSBmaW5kQnlJRChpZFJvdXRlKTtcbiAgICAgICAgcGFyZW50LmNvbnRlbnRzLnB1c2goY2hpbGQpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBjcmVhdGVDYXRlZ29yeSh0aXRsZSwgaWRSb3V0ZSlcbiAgICB7XG4gICAgICAgIGxldCBjYXRlZ29yeSA9IG5ldyBDYXRlZ29yeSh0aXRsZSk7XG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoY2F0ZWdvcnksIGlkUm91dGUpO1xuICAgICAgICByZXR1cm4gY2F0ZWdvcnk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGUsIGlkUm91dGUpXG4gICAge1xuICAgICAgICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlKTtcbiAgICAgICAgY3JlYXRlRWxlbWVudChwcm9qZWN0LCBpZFJvdXRlKTtcbiAgICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRvZG8odGl0bGUsIGlkUm91dGUsIGR1ZWRhdGUsIHByaW9yaXR5LCBjaGVja2xpc3QsIGRlc2NyaXB0aW9uLCBkb25lID0gZmFsc2UpXG4gICAge1xuICAgICAgICBsZXQgdG9kbyA9IG5ldyBUb2RvKHRpdGxlLCBkdWVkYXRlLCBwcmlvcml0eSwgY2hlY2tsaXN0LCBkZXNjcmlwdGlvbiwgZG9uZSk7XG4gICAgICAgIGNyZWF0ZUVsZW1lbnQodG9kbywgaWRSb3V0ZSk7XG4gICAgICAgIHJldHVybiB0b2RvO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUVsZW1lbnQocGFyZW50LCBjaGlsZClcbiAgICB7XG4gICAgICAgIGxldCBpbmRleCA9IHBhcmVudC5jb250ZW50cy5pbmRleE9mKGNoaWxkKTtcbiAgICAgICAgcGFyZW50LmNvbnRlbnRzID0gcGFyZW50LmNvbnRlbnRzLnNsaWNlKDAsIGluZGV4KS5jb25jYXQocGFyZW50LmNvbnRlbnRzLnNsaWNlKGluZGV4KzEsIHBhcmVudC5jb250ZW50cy5sZW5ndGgpKTtcbiAgICB9XG4gICAgXG4gICAgbGV0IGNhdDEgPSBjcmVhdGVDYXRlZ29yeSgnSG9tZScsIFtdKTtcbiAgICBsZXQgcHJqMSA9IGNyZWF0ZVByb2plY3QoJ0NsZWFuaW5nJywgWzAsIDFdKTtcbiAgICBsZXQgdDEgPSBjcmVhdGVUb2RvKCdEbyB0aGUgdmFjdXVtaW5nJywgWzAsMSwgMl0sICcyMDIyLTA5LTA4JywgJ2hpZ2gnLCBbJ2JlZHJvb20nLCAna2l0Y2hlbicsICdiYXRocm9vbScsICdsaXZpbmcgcm9vbSddLCAnSSBuZWVkIHRvIHZhY3V1bSB0aGUgd2hvbGUgaG91c2UnKTtcbiAgICBsZXQgdDIgPSBjcmVhdGVUb2RvKCdEbyB0aGUgaXJvbmluZycsIFswLDEsIDJdLCAnMjAyMi0wOS0xMScsICdub3JtYWwnLCBbJ3BpbmsgZHJlc3Mgc2hpcnQnLCAncmVkIGRyZXNzIHNoaXJ0J10sICdJIG5lZWQgdG8gaXJvbiBteSBkcmVzcyBzaGlydHMnKTtcblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlVG9kbywgY3JlYXRlQ2F0ZWdvcnksIGNyZWF0ZVByb2plY3QsIGZpbmRCeUlELCByb290LCByZW1vdmVFbGVtZW50XG4gICAgfVxufSkoKSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBkb21Nb2R1bGUgfSBmcm9tICcuL2RvbS5qcyc7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=