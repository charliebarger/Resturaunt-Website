import {createElement, grabBox} from './index'

function removeChildren(parent){
    while (parent.firstChild){
        parent.firstChild.remove()
    }
}

function createHeader(headerContent, headerClasses, subheaderContent) {
    let header = createElement('h3', headerClasses, '', headerContent)
    if (subheaderContent){
        let subheader = createElement('h4', '', '', subheaderContent)
        grabBox.append(header, subheader)
        return
    }
    grabBox.appendChild(header)
}

export {removeChildren, createHeader}