const pessoa = {
    nome: 'Lucas',
    idade: 13,
    peso: 57
}

console.log(Object.keys(pessoa)) // FUNÇÃO KEYS RETORNA AS CHAVES DO OBJETO
console.log(Object.values(pessoa)) // FUNÇÃO VALUES RETORNA OS VALORES DO OBJETO
// console.log(Object.entries(pessoa))

// Object.entries(pessoa).forEach(([chave, valor] => {
//     console.log(`${chave}: ${valor}`)

// });

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2001'
})

console.log(pessoa.dataNascimento)


// Object.ASSIGN

const destino = { a: 1 }
const o2 = { b: 2 }
const o1 = { c: 3, a: 4 }
const obj = Object.assign(destino, o1, o2) // Insere dentro do destino os atributos, e se ja existir irá ser sobrescrito

console.log(destino)

Object.freeze(obj)
obj.c = 1234
console.log(obj)