import {createElement, grabBox} from './index'
import {createHeader} from './removeItems'

//Menu Items

let starters = {header: 'Starters', subheader: '', items: [{item: "Fried Crab Claws", description: "Fried and Served with Cocktail Sauce", price: "MKT" },{item: "Peel & Eat Shrimp", description: "Steamed to Order", price: "$11"},{item: "Hush Puppies", description: "Fried to Perfection", price: "$6"},{item: "Jalapeno Poppers", description: "Filled with Cream Cheese, Wrapped with Bacon", price: "$9"}]}

let oysters = {header: 'Appalachicola Bay Oysters', subheader: "(Served Raw or Steamed on the Half Shell)", items: [{item: "Dozen", price: "$13.50", id: 'noWrap'}, {item: "Bucket", price: "$39", id: 'noWrap'}]}

let clams = {header: 'Steamed Clams', subheader: "", items: [{item: "Dozen", price: "$10", id: 'noWrap'}, {item: "Bucket", price: "$30", id: 'noWrap'}]}

let dinners = {header: 'Seafood Dinners', subheader: '(Served with Youre Choice of 2 Sides)', items: [{item: "Fried Mullet", description: "Caught Locally and Fried to Perfection", price: "$11" },{item: "Steamed Blue Crabs", description: "Caught Locally, Served in Garlic Butter", price: "$13"},{item: "Garlic Shrimp", description: "Steamed and Served in Garlic Butter", price: "$12"},{item: "Bay Scallops", description: "Florida Gulf Scallops Served in Lemon Garlic Butter", price: "$20"},{item: "Grouper Fingers", description: "Fried to Perfection", price: "$10"},{item: "Fried Catfish", description: "Sourced Locally from Lake Talquin", price: "$10"}]}

let sides = {header: 'Sides', subheader: "", items: [{item: "Cole Slaw", price: "$4",id: 'changeBasis'}, {item: "Onion Rings", price: "$7",id: 'changeBasis'}, {item: "French Fries", price: "$6",id: 'changeBasis'}, {item: "Grits", price: "$5",id: 'changeBasis'}, {item: "Mac N Cheese", price: "$8",id: 'changeBasis'}, {item: "Corn", price: "$5",id: 'changeBasis'}]}


//class to create each section header and wrapper to append menu items to 

class menuSection {

    constructor(header, subheader){
        this.header = header
        this.subheader = subheader
    }
    
    createSubheader() {
        let section = createElement('section', ['menuSection'])
        grabBox.appendChild(section)
        let sectionHeader = createElement('h4', ['menuSectionHeader'], '',this.header);
        if (this.subheader){
            let sectionSubHeader = createElement('h5', ['menuSectionSubheader'], '', this.subheader)
            section.append(sectionHeader, sectionSubHeader)
        }
        else{
            section.append(sectionHeader)
        }
        let wrapper = createElement('div', ['menuItems'])
        section.appendChild(wrapper)
        return wrapper
    }
}

//creates and appends menu items

class menuItem{

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

//loops through array of objects and creates a new instance of menuSection then new instances of menuItem

function createNewSection() {
    let fullMenu = [starters, oysters, clams, dinners, sides]
    fullMenu.forEach(menuItems => {
        let newMenuSection = new menuSection(menuItems.header, menuItems.subheader)
        let parent = newMenuSection.createSubheader()
        menuItems.items.forEach(part => {
            let newSection = new menuItem(parent, part.item, part.description, part.price, part.id)
            newSection.createItem()
        })
    })
}

function createMenuPage() {
    createHeader('Menu', ['menuHeader', "menuAboutContact"]);
    createNewSection()
}


export {createMenuPage}