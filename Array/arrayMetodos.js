
const pilotos = ['vettel', 'Alonso', 'Raikkonen', 'Massa']
console.log(pilotos)
pilotos.pop() // REMOVE O ULTIMO ELEMENTO

console.log(pilotos)

pilotos.push("Verstappen") // ADICIONA NA ULTIMA POSICAO
console.log(pilotos)


pilotos.shift() // REMOVE O PRIMEIRO ITEM DA ARRAY
console.log(pilotos)


pilotos.unshift("Hamilton") // ADICIONA NO PRIMEIRO ITEM DA ARRAY
console.log(pilotos)


//SPLICE PODE ADICIONAR E REMOVER ELEMENTOS

pilotos.splice(2, 0, 'Bottas', 'Massa') // A PARTIR DO INDICE 2, SEM RETIRAR NGM VAI ADICIONAR OS DOIS
console.log(pilotos)


pilotos.splice(3, 1) // MASSA ELIMINADO
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // CRIA UM NOVO ARRAY A PARTIR DE OUTRO ARRAY A PARTIR DO INDICE 2
console.log(algunsPilotos)


const algunsPilotos1 = pilotos.slice(1, 4) // GERA UMA ARRAY DO INDICE 1 ATÉ O 4, SEM PEGAR O 4
console.log(algunsPilotos1)