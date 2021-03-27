class pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log('Meu nome é ' + this.pessoa)
    }
}

const p1 = new pessoa('João')

p1.falar()

const criarPessoa = nomes => {
    return {
        falar: () => console.log("Meu nome é " + nomes)
    }
}

const p2 = criarPessoa('Miguel')

p2.falar()