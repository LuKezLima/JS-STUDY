
Array.prototype.foreach2 = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this) // passando o indice, o valor e o array
    }
}


const aprovados = ['Lucas', 'Aldo', 'Julia', 'Gabriel']

aprovados.foreach2(function (nome, indice) { // NOME E DPS O INDICE
    console.log(`${indice + 1} ${nome}`)
})
