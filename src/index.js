import {createHeader} from './createHeader'
import {createContentbox} from './createBody'
import {createHeader as homeHeader, createBody as homeBody} from './homepage'

function createElement(type, classes, id,content) {
    let newElement = document.createElement(type);
    if (classes){
        classes.forEach(item => {
            console.log(item)
            newElement.classList.add(item)
        });
    }
    if(id){element.id = id}
    if (content){
        newElement.innerHTML = content;
    }
    return newElement
}

createHeader();
let grabBox = createContentbox();
homeHeader()
homeBody()

export {createElement, grabBox}