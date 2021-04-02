function calcularSalario(hours, moneyperhour) {
    let resultado = 0
    resultado = (hours * moneyperhour)
    return console.log(`Salário igual a R$ ${resultado}`)

}

calcularSalario(150, 40.5)
calcularSalario(200, 37)
calcularSalario(130, 20)