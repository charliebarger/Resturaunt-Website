import { createBody } from './homepage';
import {createElement, grabBox} from './index'


function createChildrenOfContent() {
    let header = createElement('h3', ["menuAboutContact"], '', 'About');
    let section = createElement('section');
    grabBox.append(header, section)
    return section
}

function createWrappers() {
    let sectionWrapper = createChildrenOfContent()
    let infoWrapper = createElement('div',['aboutText'])
    let aboutImageWrapper = createElement('section', ['aboutImageWrapper'] )
    sectionWrapper.append(infoWrapper, aboutImageWrapper)
    return {infoWrapper, aboutImageWrapper}
}

function addInfo() {
    let wrapper = createWrappers()
    companyInfo()
    function companyInfo() {
        let parent = wrapper.infoWrapper
        let subheader = createElement('p', '', 'petitionHeader', "C & C's Oyster Bar was established in 1996 by a pair of seafood lovers, for seafood lovers. We believe Appalachicola Bay oysters are the best in the world and we are proud to serve fresh local seafood daily!")
        parent.appendChild(subheader)
    }

    let bayInfoWrapper = createElement('div', ['bayInfo'])
    createBayContent()
    wrapper.aboutImageWrapper.append(bayInfoWrapper)

    function createBayContent(params) {
        let subheader = createElement('h4', '', 'petitionHeader', "Our Bay is in Danger!")
        let content = createElement('p', '', '', "The lack of freshwater flowing into our bay is killing our oysters and our way of life. Please help by signing this petition to increase the freshwater flowing out of the Appalachicoa River" )
        let button = createElement('button', ['formatButton'], '', "Save Our Bay")
        bayInfoWrapper.append(subheader, content, button)
    }

    let imageWrapper = createElement('figure', ["imageWrapper"] )
    createImageWrapperContent()
    wrapper.aboutImageWrapper.append(imageWrapper)

    function createImageWrapperContent() {
        let image = createElement('img')
        image.src = "./img/IMG_4390.jpg"
        image.alt = 'Owners Holding Scallops'
        let caption = createElement('figcaption', '', '', "Owners Chloe and Charlie holding bay scallops")
        imageWrapper.append(image, caption)
    }


}

export {addInfo}