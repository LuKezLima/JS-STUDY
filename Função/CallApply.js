function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: "notebook",
    preco: 4500,
    desc: 0.15,
    getPreco
}

console.log(produto.getPreco())

const carro = {
    preco: 5000,
    desc: 0.2
}

console.log(getPreco.call(carro))

console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.5, '$')) // CALL PRIMEIRO O CONTEXTO DPS OS PARAMETROS

console.log(getPreco.apply(carro, [0.1, '$']))  // APPLY CONTEXTO E OS PARAMETROS DENTRO DE UMA ARRAY
