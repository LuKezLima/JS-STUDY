function removeProperty(obj, item) {
    let objeto = {}
    delete obj[item]
    objeto = obj
    return console.log(objeto)
}


removeProperty({a:2, bala:5, preco: 12}, "preco")