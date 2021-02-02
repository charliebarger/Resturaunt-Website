import {createElement} from '../helpers'
import {body} from './createHeader'

function createContentbox(){
    let main = createElement('main')
    body.appendChild(main)
    let box = createElement('div', ['pageContentwrapper'])
    main.appendChild(box)
    return box 
}

export {createContentbox}