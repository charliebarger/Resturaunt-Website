function removeChildren(parent){
    while (parent.firstChild){
        parent.firstChild.remove()
    }
}

export {removeChildren}