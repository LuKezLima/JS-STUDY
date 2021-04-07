const nums = [1, 2, 3, 4, 5]

// map = foreach com proposito


let results = nums.map(function (a) { // GERA UM NOVO ARRAY A PARTIR DO ATUAL
    return a * 2
})

console.log(results)



const soma10 = e => e + 10
const triplo = e => e * 3
const dinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`


results = nums.map(soma10).map(triplo).map(dinheiro) // MODIFICANDO ARRAY, MUDANDO 3 VEZES O ARRAY

console.log(results);