import {createHeader} from './createHeader'

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
        newElement.textContent = content;
    }
    return newElement
}

createHeader()


export {createElement}