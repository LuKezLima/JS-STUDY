function removeProperty(obj, item) {
    let objeto = {}
    delete obj[item]
    objeto = obj
    return console.log(objeto)
}

const pessoa = {
    nome: "Lucas",
    pai: "Edson",
    mãe: "Maria"
}


removeProperty(pessoa, "pai")