const produtos = [
    {
        nome: "Notebook",
        preco: 2499,
        fragil: true
    },
    {
        nome: "Ipad Pro",
        preco: 4199,
        fragil: true
    },
    {
        nome: "Copo de vidro",
        preco: 12.49,
        fragil: true
    },
    {
        nome: "Copo de plástico",
        preco: 18.99,
        fragil: false
    },
]

function caro(e) {
    return e.preco >= 500
}
function fragil(e) {
    return e.fragil == true
}



console.log(produtos.filter(caro).filter(fragil)) // retorna true or false, vai gerar um array menor ou igual
