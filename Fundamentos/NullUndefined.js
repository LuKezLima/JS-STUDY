let valor // NADA ATRIBUIDO, NÃO FOI INICIALIZADA
console.log(valor)

valor = null // AUSENCIA DE VALOR

console.log(valor)
// console.log(valor.toString()) // ERRO

const produto = {
}
console.log(produto.preco)

console.log(produto)

console.log(typeof produto)

produto.preco = 12
produto.nome = "Areia"

console.log(produto)

produto.preco = undefined // EVITE ATRIBUIR UNDEFINED

console.log(!!produto.preco)
// DELETE produto.preco // ZERA O VALOR DO ATRIBUTO
console.log(produto)

produto.preco = null

