import {grabBox} from '../index'
import {createElement, createPageTitle, removeChildren} from '../helpers'

function createWrappers() {
    let infoWrapper = createElement('div',['aboutText'])
    let aboutImageWrapper = createElement('section', ['aboutImageWrapper'] )
    grabBox.append(infoWrapper, aboutImageWrapper)
    return {infoWrapper, aboutImageWrapper}
}

function companyInfo(wrapper) {
    let aboutUs = createElement('p', '','petitionHeader', "C & C's Oyster Bar was established in 1996 by a pair of seafood lovers,for seafood lovers. We believe Appalachicola Bay oysters are the best in the world and we are proud to serve fresh local seafood daily!")
    wrapper.infoWrapper.appendChild(aboutUs)
}

function createBayContent(wrapper) {
    let bayInfoWrapper = createElement('div',['bayInfo']);
    wrapper.aboutImageWrapper.append(bayInfoWrapper);
    let subheader = createElement('h4', '','petitionHeader', "Our Bay is in Danger!")
    let content = createElement('p', '', '', "The lack of freshwater flowing into our bay is killing our oysters and our way of life. Please help by signing this petition to increase the freshwater flowing out of the Appalachicola River." )
    let button = createElement('button',['formatButton'], '', "<a href = 'https://www.change.org/p/u-s-army-corps-of-engineers-fix-the-water-levels-in-the-acf-river-basin-to-save-oyster-population-in-apalachicola-bay' target = '_blank'>Save Our Bay</a>")
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
    removeChildren(grabBox)
    createPageTitle('About', ["menuAboutContact"])
    let wrapper = createWrappers()
    companyInfo(wrapper)
    createBayContent(wrapper)
    createImageWrapperContent(wrapper)
}

export {createAboutPage}