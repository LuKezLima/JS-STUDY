function returnEven(array) {
    let newArray = []

    array.forEach((i, element) => {
        if (element % 2 == 0 && i % 2 == 0) {
            newArray.push(i)
        }
    });
    return console.log(newArray)

}

returnEven([10,70,22,43])