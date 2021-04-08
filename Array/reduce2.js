const alunos = [
    { nome: "Lucas", nota: 7.3, bolsista: true },
    { nome: "Maria", nota: 9.2, bolsista: false },
    { nome: "Pedro ", nota: 9.8, bolsista: true },
    { nome: "Ana ", nota: 9.8, bolsista: false },
]

console.log(alunos.map(a => a.bolsista))


const todosBolsistas = (resultado, bolsista) => resultado && bolsista

console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))


const algumaBolsa = (resultado, bolsista) => resultado || bolsista

console.log(alunos.map(a => a.bolsista).reduce(algumaBolsa))