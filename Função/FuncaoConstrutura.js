function carro(velocidad = 200, delta = 5) {
    // atributo privado
    let velocidadeatual = 0



    // metodo publico -- this --
    this.acelerar = function () {
        if (velocidadeatual + delta <= velocidad) {
            velocidadeatual += delta
        } else {
            velocidadeatual = velocidad
        }
    }

    // metodo publico  --this--
    this.getVelocidadeAtual = function () {
        return velocidadeatual
    }
}


const uno = new carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new carro(350, 50)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
