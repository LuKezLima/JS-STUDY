// usando a notação literal

const obj1 = {
    nome: "pá"
}
console.log(obj1)

// Objeto em JS
console.log(typeof Object, typeof new Object)

const obj2 = new Object
console.log(obj2)

// Funções construtoras

function produto(nome, preco, desc) {
    this.nome = nome // o this torna o parametro publico
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new produto('caneta', 8, 0.2)
const p2 = new produto('not', 2500, 0.35)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())


// Função Factory
function criarFuncionario(nome, salariobase, faltas) {
    return {
        nome,
        salariobase,
        faltas,
        getSalario() {
            return ((salariobase / 30) * (30 - faltas)).toFixed(0)
        }
    }
}

const p5 = new criarFuncionario('Joao', 2000, 10)
const p7 = new criarFuncionario('Maria', 2500, 3)
console.log(`O funcionário ${p5.nome} tem o salário base de ${p5.salariobase} e com um total de ${p5.faltas} faltas recebeu no mês ${p5.getSalario()}`)
console.log(`O funcionário ${p7.nome} tem o salário base de ${p7.salariobase} e com um total de ${p7.faltas} faltas recebeu no mês ${p7.getSalario()}`)


// uma função famosa que retorna objeto

const fromJSON = JSON.parse('{"info": "Sou legal"}')
console.log(fromJSON.info)

