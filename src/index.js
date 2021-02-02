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
    createContactPage()
})

document.getElementById('about').addEventListener('click', () => {
    createAboutPage()
})

document.getElementById('menu').addEventListener('click', () => {
    createMenuPage()
})


document.getElementById('home').addEventListener('click', () => {
    createHomePage()
})

export {grabBox}