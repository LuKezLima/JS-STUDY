console.log(typeof Array, typeof new Array, typeof [])


let aprovado = new Array("Bia", "Carlos", "Ana")

console.log(aprovado)

aprovado = ['bia', 'Carlos', 'Ana']
console.log(aprovado[0]) //INDEX 0 É O PRIMEIRO ELEMENTO
console.log(aprovado[1])
console.log(aprovado[2])
console.log(aprovado[3])
console.log(aprovado[2])


aprovado[3] = 'Paulo' // ADICIONANDO O INDEX 3 AO ARRAY
console.log(aprovado[3])

aprovado.push('Abia') // ADICIONADO ELEMENTO AO ARRAY
console.log(aprovado.length)

aprovado[9] = 'Rafael'

console.log(aprovado.length)
console.log(aprovado)

aprovado.sort() // FUNÇÃO COLOCA EM ORDEM ALFABÉTICA A ARRAY, ALTERANDO O ARRAY ORIGINAL
console.log(aprovado)


delete aprovado[1] // REMOVE E DEIXA UNDEFINED, NÃO REORDENA O ARRAY
console.log(aprovado[1])
console.log(aprovado[2])

aprovado = ['Bia', 'Carlos', 'AnA']

// aprovado.splice(1, 1) // (QUAL INDEX COMEÇA, QUANTOS ELEMENTOS VAI EXCLUIR)
console.log(aprovado)
aprovado.splice(1, 2, 'Elemento1', 'Elemento2') // EXCLUI E ADICIONA ELEMENTOS
console.log(aprovado)





