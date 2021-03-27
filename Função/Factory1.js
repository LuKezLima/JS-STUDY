// FUNÇÃO FACTORY É UMA FUNÇÃO QUE RETORNA UM OBJETO {}

const prod1 = {
    nome: "Leite",
    preço: '12'
}

const prod2 = {
    nome: "Pão",
    preço: '125'
}

// PARA NÃO EXISTIR ESSA REPETIÇÃO DE CÓDIGO, SÓ PARA CRIAR OUTRO PRODUTO
//.
//.
//.
//.

//Factory simples

function criarPessoa() {
    return {
        nome: 'Ana',
        idade: '14'
    }
}

console.log(criarPessoa())