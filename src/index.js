import {createHeader} from './fixed-page-elements/createHeader'
import {createContentbox} from './fixed-page-elements/createBody'
import {removeChildren} from './helpers'
import {createHomePage} from './pages/home'
import {createMenuPage} from './pages/menu'
import {createAboutPage} from './pages/about'
import {createContactPage} from './pages/contact'

createHeader();
let grabBox = createContentbox();
createHomePage()

document.getElementById('contact').addEventListener('click', () => {
    removeChildren(grabBox)
    createContactPage()
})


document.getElementById('about').addEventListener('click', () => {
    removeChildren(grabBox)
    createAboutPage()
})

document.getElementById('menu').addEventListener('click', () => {
    removeChildren(grabBox)
    createMenuPage()
})

document.getElementById('home').addEventListener('click', () => {
    removeChildren(grabBox)
    createHomePage()
})

export {grabBox}