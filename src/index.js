function createElement(type, classes, id,content) {
    let element = document.createElement(type);
    if (classes){
        classes.forEach(item => {
            newElement.classList = item
        });
    }
    if(id){element.id = id}
    newElement.textContent = content;
    return element
}