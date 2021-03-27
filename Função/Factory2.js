function criarProduto(nome, preco, desconto = 0.1) {
    const valorfinal = preco - (preco * desconto)
    const prod = {
        nome,
        preco,
        valorfinal
    }
    return prod
}

console.log(criarProduto('Notebook', 1400))