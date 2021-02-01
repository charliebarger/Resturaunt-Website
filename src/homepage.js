import {grabBox, createElement} from './index'
import {createHeader} from './removeItems'

function appendHours(parent){
    let hours = ['Mon-Sat: 11am to 10pm', 'Sunday: 10am to 9pm' ]
    hours.forEach(hour => {
        let businessHours = createElement('span','','', hour)
        parent.appendChild(businessHours)
    })
}

function createHomeBody() {
    let bodyWrapper = createElement('section',['moreInfo'])
    grabBox.append(bodyWrapper)
    let contactInfo = createElement('div', ['contactInfo'])
    let address = createElement('address', '', '', '48 6th Street, Applachicola, Fl')
    contactInfo.appendChild(address)
    appendHours(contactInfo)
    let menuButton = createElement('button', ['formatButton'], '', 'View Our Menu')
    bodyWrapper.append(contactInfo, menuButton)
}

function createHomePage() {
    createHeader("Welcome to C & C's <br> Oyster Bar!", '', "Proudly Serving Appalachicola Bay Oysters")
    createHomeBody()
}

export {createHomePage}