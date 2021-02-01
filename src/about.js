import {createElement, grabBox} from './index'
import {createHeader} from './removeItems'


function createWrappers() {
    let infoWrapper = createElement('div',['aboutText'])
    let aboutImageWrapper = createElement('section', ['aboutImageWrapper'] )
    grabBox.append(infoWrapper, aboutImageWrapper)
    return {infoWrapper, aboutImageWrapper}
}

function companyInfo(wrapper) {
    let aboutUs = createElement('p', '','petitionHeader', "C & C's Oyster Bar wasestablished in 1996 by a pair of seafood lovers,for seafood lovers. We believe Appalachicola Bayoysters are the best in the world and we areproud to serve fresh local seafood daily!")
    wrapper.infoWrapper.appendChild(aboutUs)
}

function createBayContent(wrapper) {
    let bayInfoWrapper = createElement('div',['bayInfo']);
    wrapper.aboutImageWrapper.append(bayInfoWrapper);
    let subheader = createElement('h4', '','petitionHeader', "Our Bay is in Danger!")
    let content = createElement('p', '', '', "Thelack of freshwater flowing into our bay iskilling our oysters and our way of life. Pleasehelp by signing this petition to increase thefreshwater flowing out of the AppalachicoaRiver" )
    let button = createElement('button',['formatButton'], '', "Save Our Bay")
    bayInfoWrapper.append(subheader, content, button)
}

function createImageWrapperContent(wrapper) {
    let imageWrapper = createElement('figure',["imageWrapper"] )
    wrapper.aboutImageWrapper.append(imageWrapper)
    let image = createElement('img')
    image.src = "./img/IMG_4390.jpg"
    image.alt = 'Owners Holding Scallops'
    let caption = createElement('figcaption', '','', "Owners Chloe and Charlie holding bayscallops")
    imageWrapper.append(image, caption)
}

function createAboutPage(){
    createHeader('About', ["menuAboutContact"])
    let wrapper = createWrappers()
    companyInfo(wrapper)
    createBayContent(wrapper)
    createImageWrapperContent(wrapper)
}

export {createAboutPage}