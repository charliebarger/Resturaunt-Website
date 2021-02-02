import {grabBox} from './index'

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
        grabBox.append(header, subheader)
        return
    }
    grabBox.appendChild(header)
}

export {removeChildren, createElement, createPageTitle}