import {grabBox} from '../index'
import {createElement, createHeader} from '../helpers'

function createWrappers() {
    let bodyWrapper = createElement('section', ['moreInfo']);
    let addressWrapper = createElement('div', ["contactInfo", "contactUs"])
    let phoneWrapper = createElement('div', ["contactInfo", "contactUs"])
    bodyWrapper.append(addressWrapper, phoneWrapper)
    grabBox.appendChild(bodyWrapper)
    return {addressWrapper, phoneWrapper}
}

function createAddressElements(wrapper){
    let address = createElement('address', '', '','48 6th Street, Applachicola, Fl' )
    let span1 = createElement('span', '', '',"Mon-Sat: 11am to 10pm")
    let span2 = createElement('span', '', '',"Sunday: 10am to 9pm")
    wrapper.addressWrapper.append(address, span1,span2)
}
    
function createPhoneElements(wrapper) {
    let span1 = createElement('span','','','Phone')
    let anchor1 = createElement('a', '', '','850-BAY-OYST')
    anchor1.href = "tel:407-383-3475";
    let span2 = createElement('span','','', "Email")
    let anchor2 = createElement('a', '', '', 'Send Us An Email')
    anchor2.href = "mailto: abc@example.com"
    wrapper.phoneWrapper.append(span1, anchor1,span2, anchor2)
}

function createContactPage(){
    createHeader('Contact', ['menuAboutContact', 'zeroPaddingBottom'],'We Would Love To Hear From You !')
    let wrapper = createWrappers()
    createAddressElements(wrapper)
    createPhoneElements(wrapper)
}

export {createContactPage}