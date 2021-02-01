import {createElement, grabBox} from './index'

function createChildren() {
    let header = createElement('h3',['menuAboutContact'],'zeroPaddingBottom', 'Contact Us');
    let subheader = createElement('h4', '', '', 'We Would Love To Hear From You!');
    let bodyWrapper = createElement('section', ['moreInfo']);
    grabBox.append(header, subheader, bodyWrapper)
    return bodyWrapper
}


function createWrappers() {
    let parent = createChildren()
    let addressWrapper = createElement('div', ["contactInfo", "contactUs"])
    let phoneWrapper = createElement('div', ["contactInfo", "contactUs"])
    parent.append(addressWrapper, phoneWrapper)
    return {addressWrapper, phoneWrapper}
}

function createElements() {
    let wrapper = createWrappers()
    createAddressElements()
    createPhoneElements()
    function createAddressElements(){
        let address = createElement('address', '', '', '48 6th Street, Applachicola, Fl' )
        let span1 = createElement('span', '', '', "Mon-Sat: 11am to 10pm")
        let span2 = createElement('span', '', '', "Sunday: 10am to 9pm")
        wrapper.addressWrapper.append(address, span1, span2)
    }
    
    function createPhoneElements() {
        let span1 = createElement('span','','','Phone')
        let anchor1 = createElement('a', '', '', '850-BAY-OYST')
        anchor1.href = "tel:407-383-3475";
        let span2 = createElement('span','','', "Email")
        let anchor2 = createElement('a', '', '', 'Send Us An Email')
        anchor2.href = "mailto: abc@example.com"
        wrapper.phoneWrapper.append(span1, anchor1, span2, anchor2)
    }

}

export {createElements}