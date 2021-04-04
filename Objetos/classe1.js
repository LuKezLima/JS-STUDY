class Lancamento {
    constructor(nome = 'generico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}


class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamento(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l), {

        });
    }

    sumario() {
        let valorconsolidado = 0
        this.lancamentos.forEach(l => {
            valorconsolidado += l.valor
        })

        return valorconsolidado
    }
}


const salario = new Lancamento("salario", 45000)
const contadeluz = new Lancamento("luz", -220)
const contas = new CicloFinanceiro(6, 2018)
contas.addLancamento(salario, contadeluz)
console.log(contas.sumario())