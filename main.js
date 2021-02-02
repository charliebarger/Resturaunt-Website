/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/fixed-page-elements/createBody.js":
/*!***********************************************!*\
  !*** ./src/fixed-page-elements/createBody.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createContentbox": () => /* binding */ createContentbox
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/helpers.js");
/* harmony import */ var _createHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createHeader */ "./src/fixed-page-elements/createHeader.js");



function createContentbox(){
    let main = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('main')
    _createHeader__WEBPACK_IMPORTED_MODULE_1__.body.appendChild(main)
    let box = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', ['pageContentwrapper'])
    main.appendChild(box)
    return box 
}



/***/ }),

/***/ "./src/fixed-page-elements/createHeader.js":
/*!*************************************************!*\
  !*** ./src/fixed-page-elements/createHeader.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHeader": () => /* binding */ createHeader,
/* harmony export */   "body": () => /* binding */ body
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/helpers.js");


let body = document.getElementById('content');

function createLogo(header){
    let div1 = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', ['logowapper']);
    header.appendChild(div1)
    let div2 = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('div',     ['logo'])
    div1.appendChild(div2)
    let logoTop = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('h1','',    '', "C & C's" )
    let logoBottom = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)  ('h2', '', '',"Oyster Bar")
    div2.append(logoTop, logoBottom)
}
    
function createNavBar(header) {
    let nav = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('nav')
    header.appendChild(nav)
    let list = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('ul')
    nav.appendChild(list)
    let navItems = [{content: 'Home', id: 'home' },{content: 'Menu', id: 'menu'}, {content:'About', id: 'about'}, {content: 'Contact', id:'contact'}]
    navItems.forEach(item => {
        list.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('li',['navButton'], item.id , item.content))
    });
}

function createHeader(){
    let header = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('header')
    body.appendChild(header)
    createLogo(header)
    createNavBar(header)
}




/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeChildren": () => /* binding */ removeChildren,
/* harmony export */   "createElement": () => /* binding */ createElement,
/* harmony export */   "createPageTitle": () => /* binding */ createPageTitle
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


function removeChildren(parent){
    while (parent.firstChild){
        parent.firstChild.remove()
    }
}

function createElement(type, classes, id ,content) {
    let newElement = document.createElement(type);
    if (classes){
        classes.forEach(item => {
            newElement.classList.add(item)
        });
    } 
    if(id){newElement.id = id}
    if (content){
        newElement.innerHTML = content;
    }
    return newElement
}

function createPageTitle(headerContent, headerClasses, subheaderContent) {
    let header = createElement('h3', headerClasses, '', headerContent)
    if (subheaderContent){
        let subheader = createElement('h4', '', '', subheaderContent)
        _index__WEBPACK_IMPORTED_MODULE_0__.grabBox.append(header, subheader)
        return
    }
    _index__WEBPACK_IMPORTED_MODULE_0__.grabBox.appendChild(header)
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "grabBox": () => /* binding */ grabBox
/* harmony export */ });
/* harmony import */ var _fixed_page_elements_createHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fixed-page-elements/createHeader */ "./src/fixed-page-elements/createHeader.js");
/* harmony import */ var _fixed_page_elements_createBody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fixed-page-elements/createBody */ "./src/fixed-page-elements/createBody.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home */ "./src/pages/home.js");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/menu */ "./src/pages/menu.js");
/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/about */ "./src/pages/about.js");
/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/contact */ "./src/pages/contact.js");








(0,_fixed_page_elements_createHeader__WEBPACK_IMPORTED_MODULE_0__.createHeader)();
let grabBox = (0,_fixed_page_elements_createBody__WEBPACK_IMPORTED_MODULE_1__.createContentbox)();
(0,_pages_home__WEBPACK_IMPORTED_MODULE_3__.createHomePage)()

document.getElementById('contact').addEventListener('click', () => {
    ;(0,_pages_contact__WEBPACK_IMPORTED_MODULE_6__.createContactPage)()
})

document.getElementById('about').addEventListener('click', () => {
    ;(0,_pages_about__WEBPACK_IMPORTED_MODULE_5__.createAboutPage)()
})

document.getElementById('menu').addEventListener('click', () => {
    ;(0,_pages_menu__WEBPACK_IMPORTED_MODULE_4__.createMenuPage)()
})


document.getElementById('home').addEventListener('click', () => {
    ;(0,_pages_home__WEBPACK_IMPORTED_MODULE_3__.createHomePage)()
})



/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAboutPage": () => /* binding */ createAboutPage
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/helpers.js");



function createWrappers() {
    let infoWrapper = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createElement)('div',['aboutText'])
    let aboutImageWrapper = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createElement)('section', ['aboutImageWrapper'] )
    _index__WEBPACK_IMPORTED_MODULE_0__.grabBox.append(infoWrapper, aboutImageWrapper)
    return {infoWrapper, aboutImageWrapper}
}

function companyInfo(wrapper) {
    let aboutUs = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createElement)('p', '','petitionHeader', "C & C's Oyster Bar was established in 1996 by a pair of seafood lovers,for seafood lovers. We believe Appalachicola Bay oysters are the best in the world and we are proud to serve fresh local seafood daily!")
    wrapper.infoWrapper.appendChild(aboutUs)
}

function createBayContent(wrapper) {
    let bayInfoWrapper = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createElement)('div',['bayInfo']);
    wrapper.aboutImageWrapper.append(bayInfoWrapper);
    let subheader = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createElement)('h4', '','petitionHeader', "Our Bay is in Danger!")
    let content = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createElement)('p', '', '', "The lack of freshwater flowing into our bay is killing our oysters and our way of life. Please help by signing this petition to increase the freshwater flowing out of the Appalachicola River." )
    let button = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createElement)('button',['formatButton'], '', "<a href = 'https://www.change.org/p/u-s-army-corps-of-engineers-fix-the-water-levels-in-the-acf-river-basin-to-save-oyster-population-in-apalachicola-bay' target = '_blank'>Save Our Bay</a>")
    bayInfoWrapper.append(subheader, content, button)
}

function createImageWrapperContent(wrapper) {
    let imageWrapper = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createElement)('figure',["imageWrapper"] )
    wrapper.aboutImageWrapper.append(imageWrapper)
    let image = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createElement)('img')
    image.src = "./img/IMG_4390.jpg"
    image.alt = 'Owners Holding Scallops'
    let caption = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createElement)('figcaption', '','', "Owners Chloe and Charlie holding bayscallops")
    imageWrapper.append(image, caption)
}

function createAboutPage(){
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.removeChildren)(_index__WEBPACK_IMPORTED_MODULE_0__.grabBox)
    ;(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createPageTitle)('About', ["menuAboutContact"])
    let wrapper = createWrappers()
    companyInfo(wrapper)
    createBayContent(wrapper)
    createImageWrapperContent(wrapper)
}



/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createContactPage": () => /* binding */ createContactPage
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/helpers.js");



function createWrappers() {
    let bodyWrapper = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createElement)('section', ['moreInfo']);
    let addressWrapper = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', ["contactInfo", "contactUs"])
    let phoneWrapper = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', ["contactInfo", "contactUs"])
    bodyWrapper.append(addressWrapper, phoneWrapper)
    _index__WEBPACK_IMPORTED_MODULE_0__.grabBox.appendChild(bodyWrapper)
    return {addressWrapper, phoneWrapper}
}

function createAddressElements(wrapper){
    let address = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createElement)('address', '', '','48 6th Street, Applachicola, Fl, 32320' )
    let span1 = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createElement)('span', '', '',"Mon-Sat: 11am to 10pm")
    let span2 = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createElement)('span', '', '',"Sunday: 10am to 9pm")
    wrapper.addressWrapper.append(address, span1,span2)
}
    
function createPhoneElements(wrapper) {
    let span1 = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createElement)('span','','','Phone')
    let anchor1 = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createElement)('a', '', '','850-BAY-OYST')
    anchor1.href = "tel:407-383-3475";
    let span2 = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createElement)('span','','', "Email")
    let anchor2 = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createElement)('a', '', '', 'Send Us An Email')
    anchor2.href = "mailto: abc@example.com"
    wrapper.phoneWrapper.append(span1, anchor1,span2, anchor2)
}

function createContactPage(){
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.removeChildren)(_index__WEBPACK_IMPORTED_MODULE_0__.grabBox)
    ;(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createPageTitle)('Contact', ['menuAboutContact', 'zeroPaddingBottom'],'We Would Love To Hear From You !')
    let wrapper = createWrappers()
    createAddressElements(wrapper)
    createPhoneElements(wrapper)
}



/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHomePage": () => /* binding */ createHomePage
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/helpers.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/pages/menu.js");




function appendHours(parent){
    let hours = ['Mon-Sat: 11am to 10pm', 'Sunday: 10am to 9pm' ]
    hours.forEach(hour => {
        let businessHours = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createElement)('span','','', hour)
        parent.appendChild(businessHours)
    })
}

function createButton() {
    let menuButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createElement)('button', ['formatButton'], 'view-menu-button', 'View Our Menu')
    menuButton.addEventListener('click', function() {
        ;(0,_menu__WEBPACK_IMPORTED_MODULE_2__.createMenuPage)()
    })
    return menuButton
}

function createHomeBody() {
    let bodyWrapper = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createElement)('section',['moreInfo'])
    _index__WEBPACK_IMPORTED_MODULE_0__.grabBox.append(bodyWrapper)
    let contactInfo = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', ['contactInfo'])
    let address = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createElement)('address', '', '', '48 6th Street, Applachicola, Fl')
    contactInfo.appendChild(address)
    appendHours(contactInfo)
    bodyWrapper.append(contactInfo, createButton())
}

function createHomePage() {
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.removeChildren)(_index__WEBPACK_IMPORTED_MODULE_0__.grabBox)
    ;(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createPageTitle)("Welcome to C & C's <br> Oyster Bar!", '', "Proudly Serving Appalachicola Bay Oysters")
    createHomeBody()
}



/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenuPage": () => /* binding */ createMenuPage
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/helpers.js");



//Menu Items

let starters = {header: 'Starters', subheader: '', items: [{item: "Fried Crab Claws", description: "Fried and Served with Cocktail Sauce", price: "MKT" },{item: "Peel & Eat Shrimp", description: "Steamed to Order", price: "$11"},{item: "Hush Puppies", description: "Fried to Perfection", price: "$6"},{item: "Jalapeno Poppers", description: "Filled with Cream Cheese, Wrapped with Bacon", price: "$9"}]}

let oysters = {header: 'Appalachicola Bay Oysters', subheader: "(Served Raw or Steamed on the Half Shell)", items: [{item: "Dozen", price: "$13.50", id: 'noWrap'}, {item: "Bucket", price: "$39", id: 'noWrap'}]}

let clams = {header: 'Steamed Clams', subheader: "", items: [{item: "Dozen", price: "$10", id: 'noWrap'}, {item: "Bucket", price: "$30", id: 'noWrap'}]}

let dinners = {header: 'Seafood Dinners', subheader: '(Served with Youre Choice of 2 Sides)', items: [{item: "Fried Mullet", description: "Caught Locally and Fried to Perfection", price: "$11" },{item: "Steamed Blue Crabs", description: "Caught Locally, Served in Garlic Butter", price: "$13"},{item: "Garlic Shrimp", description: "Steamed and Served in Garlic Butter", price: "$12"},{item: "Bay Scallops", description: "Florida Gulf Scallops Served in Lemon Garlic Butter", price: "$20"},{item: "Grouper Fingers", description: "Fried to Perfection", price: "$10"},{item: "Fried Catfish", description: "Sourced Locally from Lake Talquin", price: "$10"}]}

let sides = {header: 'Sides', subheader: "", items: [{item: "Cole Slaw", price: "$4",id: 'changeBasis'}, {item: "Onion Rings", price: "$7",id: 'changeBasis'}, {item: "French Fries", price: "$6",id: 'changeBasis'}, {item: "Grits", price: "$5",id: 'changeBasis'}, {item: "Mac N Cheese", price: "$8",id: 'changeBasis'}, {item: "Corn", price: "$5",id: 'changeBasis'}]}


//class to create each section header and wrapper to append menu items to 

class menuSection {
    constructor(header, subheader){
        this.header = header
        this.subheader = subheader
    }
    
    createSubheader() {
        let section = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createElement)('section', ['menuSection'])
        _index__WEBPACK_IMPORTED_MODULE_0__.grabBox.appendChild(section)
        let sectionHeader = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createElement)('h4', ['menuSectionHeader'], '',this.header);
        if (this.subheader){
            let sectionSubHeader = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createElement)('h5', ['menuSectionSubheader'], '', this.subheader)
            section.append(sectionHeader, sectionSubHeader)
        }
        else{
            section.append(sectionHeader)
        }
        let wrapper = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', ['menuItems'])
        section.appendChild(wrapper)
        return wrapper
    }
}

//creates and appends menu items

class menuItem{
    constructor(parent, header, subheader, price, id){
        this.parent = parent;
        this.header = header;
        this.subheader = subheader ? subheader + ' ' + `<bold>${price}</bold>` : `<bold>${price}</bold>`
        this.id = id;
    }
    
    createItem() {
        let itemWrapper = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', ['item'], this.id)
        this.parent.appendChild(itemWrapper)
        let menuItem = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createElement)('span',['singleITem'], '', this.header)
        let itemDescription = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createElement)('span', ['itemDescription'], '', this.subheader )
        itemWrapper.append(menuItem, itemDescription)
    }
}

//loops through array of objects and creates a new instance of menuSection then new instances of menuItem

function createNewSection() {
    let fullMenu = [starters, oysters, clams, dinners, sides]
    fullMenu.forEach(menuItems => {
        let newMenuSection = new menuSection(menuItems.header, menuItems.subheader)
        let parent = newMenuSection.createSubheader()
        menuItems.items.forEach(part => {
            let newSection = new menuItem(parent, part.item, part.description, part.price, part.id)
            newSection.createItem()
        })
    })
}

function createMenuPage() {
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.removeChildren)(_index__WEBPACK_IMPORTED_MODULE_0__.grabBox)
    ;(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createPageTitle)('Menu', ['menuHeader', "menuAboutContact"]);
    createNewSection()
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