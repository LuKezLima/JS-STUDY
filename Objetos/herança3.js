const pai = {
    nome: 'pedro',
    cabelo: 'preto'
}

const filha1 = Object.create(pai) // CRIOU UM OBJETO COM O FORMATO DO OBJETO PAI, O OBJETO PAI FOI O PROTOTIPO
filha1.nome = 'Ana'
console.log(filha1.cabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})


console.log(filha2.nome)

filha2.nome = 'Carla'
console.log(`A filha ${filha2.nome} tem cabelo de cor ${filha2.cabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))


for (let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}