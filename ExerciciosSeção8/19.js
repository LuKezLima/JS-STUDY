
function calculateAvarage(array){
    const lenght = array.length
    let sum = 0
    let result = 0
    array.map(element => {
        sum += element
        
    });
        result = (sum/lenght)
        return console.log(result)

}

const numbers = [10,10,10]
calculateAvarage(numbers)