
function calculateMedia(array){
    const lenght = array.lenght
    let sum = 0
    let result = 0
    array.map(element => {
        sum += element
        
    });
        result = (sum/lenght)
        return console.log(result)
}


const numbers = [2,3,5,2,10]
calculateMedia(numbers)