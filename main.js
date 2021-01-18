/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const grabDiv = document.getElementById("content");

let header = document.createElement('header')

grabDiv.appendChild(header)

let resturauntName = document.createElement('h1')

resturauntName.textContent = "C & C's Oyster Bar"
header.appendChild(resturauntName)

let main = document.createElement('main')

grabDiv.appendChild(main)

let frontImage = document.createElement("img")

frontImage.src = "./img/ben-stern-4n96lyJd2Xs-unsplash.jpg"

main.appendChild(frontImage)
/******/ })()
;
//# sourceMappingURL=main.js.map