let qualquer = "legal"

console.log(qualquer)
console.log(typeof qualquer)

qualquer = 24.124
console.log(qualquer)
console.log(typeof qualquer)


//CALCULO IMC
let alt = 1.74;
let peso = 65;

//let imc = peso / (alt * alt)
let imc = peso / Math.pow(alt, 2)

console.log("SEU IMC É:" + imc.toFixed(2))