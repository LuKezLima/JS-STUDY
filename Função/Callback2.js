const notas = [7, 5, 6, 2, 5, 2, 10, 12, 41, 13]

// Sem Callback

let notasbaixas = []

for (let i in notas) {
    if (notas[i] < 7) {
        notasbaixas.push(notas[i])
    }
}

console.log(notasbaixas)





// Com Callback
const notasbaixas2 = notas.filter(function (nota) {
    return nota <= 7
})

console.log(notasbaixas2, '2')


const notasBaixas3 = notas.filter(nota => nota <= 7)
console.log(notasBaixas3)