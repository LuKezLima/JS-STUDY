console.log('01)', '1' == 1) // O VALOR É IGUAL? -- TRUE
console.log('02)', '1' === 1) // O VALOR E O TIPO SÃO IGUAIS? -- FALSE -- UM É STRING O OUTRO NUMBER
console.log('03)', '3' != 3) // 3 É DIFERENTE DE 3? NÃO LEVA EM CONSIDEREÇÃO O TIPO, SÓ O VALOR
console.log('04)', '3' !== 3) // 3 É  ESTRITAMENTE DIFERENTE DE 3? LEVA EM CONSIDERAÇÃO O TIPO
console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)


const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)


console.log('11)', d1.getTime() == d2.getTime()) // Comparando o number, são iguais o tipo e o msm valor

console.log('12)', undefined == null)
console.log('13)', undefined === null)
