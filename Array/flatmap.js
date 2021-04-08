const escola = [{
    nome: "Turma M1",
    alunos: [{
        nome: "Julia",
        nota: 8.3
    }, {
        nome: "Lucas",
        nota: 8
    }]
}, {
    nome: "Turma N1",
    alunos: [{
        nome: "Maria",
        nota: 8.3
    }, {
        nome: "Gabriel",
        nota: 8
    }]
}]


const getNotaAluno = a => a.nota
const getnotaTurma = turma => turma.alunos.map(getNotaAluno)

const notas1 = escola.map(getnotaTurma)

console.log(notas1)


Array.prototype.flatmap = function (callback) {
    return Array.prototype.concat.apply({}.this.map(callback))
}

const notas2 = escola.flatmap(getnotaTurma)
console.log(notas2)