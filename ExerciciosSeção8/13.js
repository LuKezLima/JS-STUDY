function filterNumbers(arrays){
    return arrays.filter( e => typeof e === 'number')
}
const array = ["a","b", 5, 10]
console.log(filterNumbers(array))




function filter2(array){
    let results = []
    array.forEach(element => {
        if(typeof element == 'number'){
            results.push(element)
            array.slice(element,1)
        }
    });
    return console.log(results)
}
filter2(array)