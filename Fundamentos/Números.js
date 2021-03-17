const peso1 = 1
const peso2 = Number("2")

console.log(peso1, peso2);


console.log(Number.isInteger(peso2), Number.isInteger(peso1))

const avaliacao1 = 6.4
const avaliacao2 = 7.2

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso2 + peso1)

console.log("Sua Média Semestral é:" + media.toFixed(2)) // TO FIXED ELIMINA AS CASAS DECIMAIS

console.log(media.toString(2)) // CONVERTE EM BINÁRIO
console.log(typeof media)