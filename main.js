/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createBody.js":
/*!***************************!*\
  !*** ./src/createBody.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createContentbox": () => /* binding */ createContentbox
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _createHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createHeader */ "./src/createHeader.js");



function createContentbox(){
    let main = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('main')
    _createHeader__WEBPACK_IMPORTED_MODULE_1__.body.appendChild(main)
    let box = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', ['pageContentwrapper'])
    main.appendChild(box)
    return box 
}



/***/ }),

/***/ "./src/createHeader.js":
/*!*****************************!*\
  !*** ./src/createHeader.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHeader": () => /* binding */ createHeader,
/* harmony export */   "body": () => /* binding */ body
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");



let body = document.getElementById('content');


let createHeader = () => {
    let header = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('header')
    body.appendChild(header)

    function createLogo(){
        let div1 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', ['logowapper']);
        header.appendChild(div1)
        let div2 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('div',     ['logo'])
        div1.appendChild(div2)
        let logoTop = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('h1','',    '', "C & C's" )
        let logoBottom = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createElement)  ('h2', '', '', "Oyster Bar")
        div2.append(logoTop, logoBottom)
    }
    
    function createNavBar() {
        let nav = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('nav')
        header.appendChild(nav)
        let list = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('ul')
        nav.appendChild(list)
        let navItems = [{content: 'Home', id: 'home' }, {content: 'Menu', id: 'menu'}, {content: 'About', id: 'about'}, {content: 'Contact', id: 'menu'}]

        navItems.forEach(item => {
            console.log(item.id)
            console.log(item.content)
            list.appendChild((0,_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('li', ['navButton'], item.id , item.content))
        });
    }

    createLogo()
    createNavBar()
}




/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHeader": () => /* binding */ createHeader,
/* harmony export */   "createBody": () => /* binding */ createBody
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


function createHeader() {
    let heading = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('h3', '', '', "Welcome to C & C's <br> Oyster Bar!")
    let subHeading = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('h4', '', '', 'Proudly Serving Appalachicola Bay Oysters' ) 
    _index__WEBPACK_IMPORTED_MODULE_0__.grabBox.append(heading, subHeading)
}

function createBody(params) {
    let bodyWrapper = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('section',['moreInfo'])
    _index__WEBPACK_IMPORTED_MODULE_0__.grabBox.append(bodyWrapper)
    let contactInfo = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', ['contactInfo'])
    bodyWrapper.appendChild(contactInfo)
    let address = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('address', '', '', '48 6th Street, Applachicola, Fl')
    contactInfo.appendChild(address)
    
    let hours = ['Mon-Sat: 11am to 10pm', 'Sunday: 10am to 9pm' ]

    hours.forEach(hour => {
        let businessHours = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('span','','', hour)
        contactInfo.appendChild(businessHours)
    })

    let menuButton = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', ['formatButton'], '', 'View Our Menu')
    bodyWrapper.appendChild(menuButton)
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => /* binding */ createElement,
/* harmony export */   "grabBox": () => /* binding */ grabBox
/* harmony export */ });
/* harmony import */ var _createHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createHeader */ "./src/createHeader.js");
/* harmony import */ var _createBody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createBody */ "./src/createBody.js");
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");
/* harmony import */ var _removeItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./removeItems */ "./src/removeItems.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ "./src/menu.js");






function createElement(type, classes, id ,content) {
    let newElement = document.createElement(type);
    if (classes){
        classes.forEach(item => {
            console.log(item)
            newElement.classList.add(item)
        });
    } 
    if(id){newElement.id = id}
    if (content){
        newElement.innerHTML = content;
    }
    return newElement
}

(0,_createHeader__WEBPACK_IMPORTED_MODULE_0__.createHeader)();
let grabBox = (0,_createBody__WEBPACK_IMPORTED_MODULE_1__.createContentbox)();
(0,_homepage__WEBPACK_IMPORTED_MODULE_2__.createHeader)()
;(0,_homepage__WEBPACK_IMPORTED_MODULE_2__.createBody)()

document.getElementById('menu').addEventListener('click', function(){
    ;(0,_removeItems__WEBPACK_IMPORTED_MODULE_3__.removeChildren)(grabBox)
    ;(0,_menu__WEBPACK_IMPORTED_MODULE_4__.createHeader)(grabBox)
    let starters = new _menu__WEBPACK_IMPORTED_MODULE_4__.menuSection(grabBox, 'Starters')
    starters.createSubheader(starters.subheader)
})

document.getElementById('home').addEventListener('click', () => {
    ;(0,_removeItems__WEBPACK_IMPORTED_MODULE_3__.removeChildren)(grabBox)
    ;(0,_homepage__WEBPACK_IMPORTED_MODULE_2__.createHeader)()
    ;(0,_homepage__WEBPACK_IMPORTED_MODULE_2__.createBody)()
})



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHeader": () => /* binding */ createHeader,
/* harmony export */   "menuSection": () => /* binding */ menuSection
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


function createHeader(body) {
    let header = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('h3', ['menuHeader'], '', 'Menu')
    body.appendChild(header)
}

class menuSection {
    constructor(body, subheader){
        this.body = body
        this.subheader = subheader
    }
    

    createSubheader(text) {
        alert(text)
        let section = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('section', ['menuSection'])
        this.body.appendChild(section)
        let sectionHeader = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('h4', ['menuSectionHeader'], '', text)
        section.appendChild(sectionHeader)
        let wrapper = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', ['menuItems'])
        sectionHeader.appendChild(wrapper)
        return wrapper
    }
    
    createItem(item, description, parent, id) {
        let identifier = id ? id : '';
        let itemWrapper = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', ['item'], identifier)
        parent.appendChild(itemWrapper)
        let menuItem = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('span',['singleITem'], '', item)
        let itemDescription = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', ['itemDescription'], '', description )
        itemWrapper.append(menuItem, itemDescription)
    }
}

let starters = new menuSection()



/***/ }),

/***/ "./src/removeItems.js":
/*!****************************!*\
  !*** ./src/removeItems.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeChildren": () => /* binding */ removeChildren
/* harmony export */ });
function removeChildren(parent){
    while (parent.firstChild){
        parent.firstChild.remove()
    }
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/index.js");
/******/ })()
;
//# sourceMappingURL=main.js.map