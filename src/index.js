import {createHeader} from './createHeader'
import {createContentbox} from './createBody'
import {createHome, createHomePage} from './homepage'
import {removeChildren} from './removeItems'
import {createMenuPage} from './menu'
import {addInfo as aboutContent, createAboutPage} from './about'
import {createContactPage} from './contact'

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

createHeader();
let grabBox = createContentbox();
createHomePage()

document.getElementById('contact').addEventListener('click', () => {
    removeChildren(grabBox)
    createContactPage()
})


document.getElementById('about').addEventListener('click', () => {
    removeChildren(grabBox)
    createAboutPage()
})

document.getElementById('menu').addEventListener('click', function(){
    removeChildren(grabBox)
    createMenuPage()
})

document.getElementById('home').addEventListener('click', () => {
    removeChildren(grabBox)
    createHomePage()
})

export {createElement, grabBox}