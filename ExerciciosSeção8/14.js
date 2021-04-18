function becomeArray(obj) {
    let array = []
    for (const i in obj) {
        array.push([i, obj[i]])

    }
     return console.log(array)
}

becomeArray({
    nome: "Lucas",
    profissao: "Desenvolvedor",
    idade: 20,
    nacionalidade: "Brasileiro"
})