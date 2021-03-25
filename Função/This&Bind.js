const pessoa = {
    saudacao: 'Ola!',
    falar() {
        console.log(this.saudacao)
    }

}

pessoa.falar()

const falar = pessoa.falar

falar() // Conflito

const falardePessoa = pessoa.falar.bind(pessoa) // Referenciar o *THIS da função
falardePessoa()