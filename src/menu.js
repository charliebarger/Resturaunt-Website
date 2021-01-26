import {createElement} from './index'

function createHeader(body) {
    let header = createElement('h3', ['menuHeader'], '', 'Menu')
    body.appendChild(header)
}

class menuSection {
    constructor(body, subheader){
        this.body = body
        this.subheader = subheader
    }
    

    createSubheader(text) {
        alert(text)
        let section = createElement('section', ['menuSection'])
        this.body.appendChild(section)
        let sectionHeader = createElement('h4', ['menuSectionHeader'], '', text)
        section.appendChild(sectionHeader)
        let wrapper = createElement('div', ['menuItems'])
        sectionHeader.appendChild(wrapper)
        return wrapper
    }
    
    createItem(item, description, parent, id) {
        let identifier = id ? id : '';
        let itemWrapper = createElement('div', ['item'], identifier)
        parent.appendChild(itemWrapper)
        let menuItem = createElement('span',['singleITem'], '', item)
        let itemDescription = createElement('span', ['itemDescription'], '', description )
        itemWrapper.append(menuItem, itemDescription)
    }
}

let starters = new menuSection()

export {createHeader, menuSection}