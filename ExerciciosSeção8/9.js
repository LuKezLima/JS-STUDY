function repetir(elemnt, times = 1) {
    let array = []

    for (let i = 0; i < times; i++)
        array.push(elemnt)

    return array
};





// OUTRO MODO
function teste(i, s) {
    return Array(s).fill(i)
}


console.log(repetir('bola', 2))

console.log(teste('bola', 11))