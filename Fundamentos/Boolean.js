let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(Boolean(isAtivo))

isAtivo = 1
console.log(!isAtivo)

console.log("OS VERDADEIROSs")
console.log(!!3)
console.log(!!-1)
console.log(!!` `)
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("OS FALSOS")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))


let nome = 'Lucas'
console.log(nome, 'desconhecido')