const alunos = [
    { nome: "Lucas", nota: 8.9 },
    { nome: "Maria", nota: 9.4 },
    { nome: "Gabriel", nota: 6.7 }
]


// IMPERATIVO

let total = 0
for (var i = 0; i < alunos.length; i++) {
    total += alunos[i].nota
}

console.log(total / alunos.length)

//Declarativa
const getNota = alunos => alunos.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length);