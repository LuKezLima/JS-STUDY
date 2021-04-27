function calculateEtanol(qtd){
    const etanol = 4.42
    let total = 0
    if(qtd >20){
        total = (etanol*0.97) * qtd
    } else if(qtd > 30){
        total = (etanol*0.95) * qtd
    }else{
        total = etanol*qtd
    }
    return total

}

console.log(calculateEtanol(100))






function calculateGas(qtd){
    const gasolina =  5.18
    let total = 0
    if(qtd >20){
        total = (gasolina*0.97) * qtd
    } else if(qtd > 30){
        total = (gasolina*0.95) * qtd
    }else{
        total = gasolina*qtd
    }
    return console.log(total)
}

calculateGas(100)