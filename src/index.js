import {createHeader} from './createHeader'
import {createContentbox} from './createBody'
import {createHeader as homeHeader, createBody as homeBody} from './homepage'
import {removeChildren} from './removeItems'
import {createHeader as menuHeader, createNewSection, menuSection} from './menu'
import {addInfo as aboutContent} from './about'
import {createElements} from './contact'

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

createHeader();
let grabBox = createContentbox();
homeHeader()
homeBody()

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
    homeHeader()
    homeBody()
})

export {createElement, grabBox}