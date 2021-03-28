
function contaDivisao(dividendo, divisor) {
    const resultado = (dividendo / divisor).toFixed(1)
    const resto = dividendo % divisor
    return console.log(` O resultado da divisão é ${resultado} e o resto é ${resto}`)
}

contaDivisao(8, 3)