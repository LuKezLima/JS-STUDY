function sumNumbers(array){
    let result = 0

    array.map(e => result += e)

    console.log(result)
}

sumNumbers([1, 4,10])

