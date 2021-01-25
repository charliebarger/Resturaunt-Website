import {grabBox, createElement} from './index'

function createHeader() {
    let heading = createElement('h3', '', '', "Welcome to C & C's <br> Oyster Bar!")
    let subHeading = createElement('h4', '', '', 'Proudly Serving Appalachicola Bay Oysters' ) 
    grabBox.append(heading, subHeading)
}

function createBody(params) {
    let bodyWrapper = createElement('section',['moreInfo'])
    grabBox.append(bodyWrapper)
    let contactInfo = createElement('div', ['contactInfo'])
    bodyWrapper.appendChild(contactInfo)
    let address = createElement('address', '', '', '48 6th Street, Applachicola, Fl')
    contactInfo.appendChild(address)
    
    let hours = ['Mon-Sat: 11am to 10pm', 'Sunday: 10am to 9pm' ]

    hours.forEach(hour => {
        let businessHours = createElement('span','','', hour)
        contactInfo.appendChild(businessHours)
    })

    let menuButton = createElement('button', ['formatButton'], '', 'View Our Menu')
    bodyWrapper.appendChild(menuButton)
}

export {createHeader, createBody}