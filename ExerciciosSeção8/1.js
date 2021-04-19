// const ola = nome => console.log(`Olá, ${nome}`)
// console.log(ola('Lucas'))
// console.log(ola('Maria'))
// console.log(ola('Julia'))

// ola('Lucasf')


function myFunction(obj) {
    let result = 0
    let number = Number(obj.number)
    let percentage= Number(obj.percentage)
    result = number * (percentage/100)   
 
    return console.log(result)
 }

 const obj = {
    number: 100,
    percentage: 70
 }

 myFunction(obj)