let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {   // FUNÇÃO ARROW SEMPRE ANONIMA, OU É POSSIVEL ARMAZENA-LA EM UMA VARIAVEL
    return 2 * a
}


dobro = (a, b) => 2 * a * b // Return está implicito

console.log(dobro(Math.PI, 10))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'

console.log(ola())


const imc = (a, p) => (p / Math.pow(a, 2) * 10000).toFixed(1)

console.log('Seu imc é ' + imc(180, 69))