function createNavBar(){
    let header = document.createElement('header')
    document.getElementById('content').appendChild(header)
    let  parent = header
    for (let x = 0; x < 2; x++){
        let div = document.createElement('div');
        if (x == 0){
            div.classList = 'logowrapper';
        }
        else{
            div.classList = 'logo';
        }
        parent.appendChild(div)
        parent = div;
    }
}

function navigateMe() {
    createElement('header',)
}

function createElement(type, parent, classes = '', content = '') {
    let newElement = document.createElement(type);
    newElement.textContent = content
    if (classes){
        classes.forEach(item => {
            newElement.classList = item
        });
    }
    parent.appendChild(newElement)
    return newElement
}