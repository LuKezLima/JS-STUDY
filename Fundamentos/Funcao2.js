// ARMAZENANDO UMA FUNÇÃO EM UMA VÁRIAVEL

const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// ARMAZENANDO UMA FUNÇÃO arrow EM UMA VÁRIAVEL

const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 8))

// RETORNO IMPLÍCITO, SEM O USO DO RETURN
const subtraco = (a, b) => a - b
console.log(subtraco(6, 2))