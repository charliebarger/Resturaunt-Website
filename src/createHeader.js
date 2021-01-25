import {createElement} from './index'


let body = document.getElementById('content');


let createHeader = () => {
    let header = createElement('header')
    body.appendChild(header)

    function createLogo(){
        let div1 = createElement('div', ['logowapper']);
        header.appendChild(div1)
        let div2 = createElement('div',     ['logo'])
        div1.appendChild(div2)
        let logoTop = createElement('h1','',    '', "C & C's" )
        let logoBottom = createElement  ('h2', '', '', "Oyster Bar")
        div2.append(logoTop, logoBottom)
    }
    
    function createNavBar() {
        let nav = createElement('nav')
        header.appendChild(nav)
        let list = createElement('ul')
        nav.appendChild(list)
        let navItems = ['Home', 'Menu', 'About', 'Contact']

        navItems.forEach(item => {
            list.appendChild(createElement('li', ['navButton'], '', item))
        });
    }

    createLogo()
    createNavBar()
}


export {createHeader, body}