
function checkLeapYear(year) {
    const divisivelPorQuatro = year % 4 == 0
    const divisivelPorCem = year % 100 == 0
    const divisivelPorQuatrocentos = year % 400 == 0
    if ((divisivelPorQuatro && !divisivelPorCem) || divisivelPorQuatrocentos){
        return console.log("bissexto")
    }
    else{
        return console.log("Não é bissexto")
    }
}

checkLeapYear(2020)