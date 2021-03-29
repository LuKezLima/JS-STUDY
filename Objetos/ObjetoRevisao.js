// Coleção de pares (chave e valor -> nome: 'Lucas')

const produto = new Object

produto.nome = 'cadeira'
produto['marca do produto'] = 'generica'

produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['marca do produto']
console.log(produto)


const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'raul',
        idade: 24,
        endereço: {
            logradouro: 'Rua abc',
            numero: 44
        }
    },
    condutores: [
        {
            nome: 'junior',
            idade: 19
        },
        {
            nome: 'Ana',
            idade: 28
        }
    ]



}

carro.proprietario.endereço.numero = 1000
carro['proprietario']['endereço']['logradouro'] = 'Av Hello'

console.log(carro)

delete carro.condutores
delete carro.proprietario.endereço

console.log(carro)
console.log(carro.condutores) // Undefined

console.log(carro.condutores.length)