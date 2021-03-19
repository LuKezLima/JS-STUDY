const pessoa = {
    nome: 'Lucas',
    idade: '20',
    endereço: {
        logradouro: "Rua Guilherme maw",
        cep: '01105040'
    }
}

const {   // DESESTRUTURAÇÃO
    nome, idade
} = pessoa
console.log(nome, idade)



const {                 // DESESTRUTURAÇÃO TROCANDO A VARIAVEL
    nome: n, idade: i
} = pessoa

console.log(n, i)


const {  // DESESTRUTURANDO UM OBJETO QUE ESTAVA DENTRO DE OUTRO OBJETO
    endereço: { logradouro, cep }
} = pessoa
console.log(logradouro, cep)




const escola = {
    nomes: 'FECAP',
    rua: 'AV. Liberdade',
    Modalidade: 'Técnico',
    Alunos: {
        ano3: 'Lucas',
        ano2: 'Maria',
        ano1: 'joao'
    }
}


const {
    nomes, rua, Modalidade
} = escola

console.log(nomes, rua, Modalidade)


const {
    nomes: na, rua: r, Modalidade: M
} = escola

console.log(na, r, M)


const {
    Alunos: {
        ano3,
        ano2: a,
        ano1
    }
} = escola

console.log(ano3, a, ano1)



const violao = {
    modelo: 'fender',
    corda: 'aço',
    corpo: 'madeira canadense'
}

const {
    modelo,
    corda
} = violao
console.log(modelo, corda)



const {
    modelo: Mo,
    corpo: co
} = violao

console.log('O modelo do seu violão é o', Mo, 'e o corpo é feito de', co)
