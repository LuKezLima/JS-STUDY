// Object.preventExtensions

const produto = Object.preventExtensions({ // NÃO PERMITE A CRIAÇÃO DE MAIS NENHUM ATRIBUTO
    nome: 'Lucas', preco: 1.44, tag: 'promoção'
})

console.log('extensivel', Object.isExtensible(produto));
produto.nome = 'borracha'
produto.descricao = 'borracha branca' // Não é possivel adicionar novos atributos
delete produto.tag
console.log(produto)


// Object.seal

const pessoa = { nome: 'Juliana', idade: 19 }
Object.seal(pessoa) // NÃO CONSEGUE ADD NEM EXCLUIR ATRIBUTOS, SOMENTE MODIFICAR

console.log('selados', Object.isSealed(pessoa))

pessoa.nome = 'Lucas'
pessoa.sobrenome = 'Lima' // NÃO TEM EFEITO
console.log(pessoa)

// OBJECT FREEZE = SELADO + VALORES CONSTANTES- // VOCE N CONSEGUE NEM MODIFICAR


