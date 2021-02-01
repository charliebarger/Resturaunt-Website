import {createHeader} from './createHeader'
import {createContentbox} from './createBody'
import {createHome, createHomePage} from './homepage'
import {removeChildren} from './removeItems'
import {createHeader as menuHeader, createNewSection, menuSection} from './menu'
import {addInfo as aboutContent} from './about'
import {createElements} from './contact'

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
    createElements()
})


document.getElementById('about').addEventListener('click', () => {
    removeChildren(grabBox)
    aboutContent()
})

document.getElementById('menu').addEventListener('click', function(){
    removeChildren(grabBox)
    createNewSection(grabBox)
})

document.getElementById('home').addEventListener('click', () => {
    removeChildren(grabBox)
    createHomePage()
})

export {createElement, grabBox}