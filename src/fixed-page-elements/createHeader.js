import {createElement} from '../helpers'

let body = document.getElementById('content');

function createLogo(header){
    let div1 = createElement('div', ['logowapper']);
    header.appendChild(div1)
    let div2 = createElement('div',     ['logo'])
    div1.appendChild(div2)
    let logoTop = createElement('h1','',    '', "C &C's" )
    let logoBottom = createElement  ('h2', '', '',"Oyster Bar")
    div2.append(logoTop, logoBottom)
}
    
function createNavBar(header) {
    let nav = createElement('nav')
    header.appendChild(nav)
    let list = createElement('ul')
    nav.appendChild(list)
    let navItems = [{content: 'Home', id: 'home' },{content: 'Menu', id: 'menu'}, {content:'About', id: 'about'}, {content: 'Contact', id:'contact'}]
    navItems.forEach(item => {
        list.appendChild(createElement('li',['navButton'], item.id , item.content))
    });
}

function createHeader(){
    let header = createElement('header')
    body.appendChild(header)
    createLogo(header)
    createNavBar(header)
}


export {createHeader, body}