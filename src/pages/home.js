import {grabBox} from '../index'
import {createElement, createPageTitle, removeChildren} from '../helpers'
import {createMenuPage} from './menu'

function appendHours(parent){
    let hours = ['Mon-Sat: 11am to 10pm', 'Sunday: 10am to 9pm' ]
    hours.forEach(hour => {
        let businessHours = createElement('span','','', hour)
        parent.appendChild(businessHours)
    })
}

function createButton() {
    let menuButton = createElement('button', ['formatButton'], 'view-menu-button', 'View Our Menu')
    menuButton.addEventListener('click', function() {
        createMenuPage()
    })
    return menuButton
}

function createHomeBody() {
    let bodyWrapper = createElement('section',['moreInfo'])
    grabBox.append(bodyWrapper)
    let contactInfo = createElement('div', ['contactInfo'])
    let address = createElement('address', '', '', '48 6th Street, Applachicola, Fl, 32320')
    contactInfo.appendChild(address)
    appendHours(contactInfo)
    bodyWrapper.append(contactInfo, createButton())
}

function createHomePage() {
    removeChildren(grabBox)
    createPageTitle("Welcome to C & C's <br> Oyster Bar!", '', "Proudly Serving Appalachicola Bay Oysters")
    createHomeBody()
}

export {createHomePage}