function soma() {
    let soma = 0
    for (i in arguments) { // Arguments, array interno de uma função
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(2))
console.log(soma(1.3, 1.3, 1.3).toFixed(2))