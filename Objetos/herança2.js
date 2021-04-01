// Cadeia de prototipos

Object.prototype.attr0 = 'Z'
const avo = {
    aatr: 'A'
}
const pai = {
    aatr2: 'B',
    __proto__: avo
}
const filho = {
    aatr3: 'C',
    __proto__: pai
}

console.log(filho.aatr, filho.aatr2, filho.aatr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}KM/H de ${this.velMax}KM/H`
    }

}


const ferrari = {
    modelo: 'F40',
    velMax: 324
    //__proto__: carro
}

const volvo = {
    modelo: 'F40',
    status() {
        return `${this.modelo}: ${super.status()}` // VAI USAR O MODELO DA VOLVO, E O SUPER CHAMA O STATUS
        // __proto__: ferrari

    }
}

Object.setPrototypeOf(ferrari, carro) // FERRARI TEM CARRO COMO SEU PROTOTYPE
Object.setPrototypeOf(volvo, carro) // VOLVO TEM CARRO COMO SEU PROTOTYPE


console.log(ferrari)
console.log(volvo)


volvo.acelarMais(410)
console.log(volvo.status())

ferrari.acelarMais(380)
console.log(ferrari.status())