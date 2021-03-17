// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}


// FUNÇÃO COM RETORNO

function soma(a, b = 0) { // B = 0 QUANDO NÃO PASSADO O VALOR
    return a + b
}

console.log(soma(2, 33))

console.log(soma(7))

