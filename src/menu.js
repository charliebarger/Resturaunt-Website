import {createElement} from './index'

function createHeader(body) {
    let header = createElement('h3', ['menuHeader'], '', 'Menu')
    body.appendChild(header)
}

class menuSection {
    constructor(body,header, subheader){
        this.body = body
        this.header = header
        this.subheader = subheader
    }
    

    createSubheader() {
        let section = createElement('section', ['menuSection'])
        this.body.appendChild(section)
        let sectionHeader = createElement('h4', ['menuSectionHeader'], '',this.header);
        if (this.subheader){
            let sectionSubHeader = createElement('h5', ['menuSectionSubheader'], '', this.subheader)
            section.append(sectionHeader, sectionSubHeader)
        }
        else{
            section.append(sectionHeader)
        }
        console.log('creating wrapper')
        let wrapper = createElement('div', ['menuItems'])
        section.appendChild(wrapper)
        return wrapper
    }
}

class newMenuItem{
    constructor(parent, header, subheader, price, id){
        this.parent = parent;
        this.header = header;
        this.subheader = subheader ? subheader + ' ' + `<bold>${price}</bold>` : `<bold>${price}</bold>`
        this.id = id;
    }
    
    createItem() {
        let itemWrapper = createElement('div', ['item'], this.id)
        this.parent.appendChild(itemWrapper)
        let menuItem = createElement('span',['singleITem'], '', this.header)
        let itemDescription = createElement('span', ['itemDescription'], '', this.subheader )
        itemWrapper.append(menuItem, itemDescription)
    }

}

function createNewSection(body) {
    createHeader(body)

    let starters = {header: 'Starters', subheader: '', items: [{item: "Fried Crab Claws", description: "Fried and Served with Cocktail Sauce", price: "MKT" },{item: "Peel & Eat Shrimp", description: "Steamed to Order", price: "$11"},{item: "Hush Puppies", description: "Fried to Perfection", price: "$6"},{item: "Jalapeno Poppers", description: "Filled with Cream Cheese, Wrapped with Bacon", price: "$9"}]}

    let oysters = {header: 'Appalachicola Bay Oysters', subheader: "(Served Raw or Steamed on the Half Shell", items: [{item: "Bucket", price: "$13.50", id: 'noWrap'}, {item: "Dozen", price: "$39", id: 'noWrap'}]}

    let fullMenu = [starters, oysters]

    fullMenu.forEach(menuItems => {
        let newMenuSection = new menuSection(body,menuItems.header, menuItems.subheader)
        let parent = newMenuSection.createSubheader()


        menuItems.items.forEach(part => {
            console.log(parent)
            let newSection = new newMenuItem(parent, part.item, part.description, part.price, part.id)
            newSection.createItem()
        })

    }
    )
}


export {createHeader, menuSection, createNewSection}