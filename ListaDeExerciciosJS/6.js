console.log('====JUROS SIMPLES====')
function jurosSimples(capitalini = 0, taxa = 0, tempo = 0) {
    const juros = capitalini * (taxa / 100) * tempo
    const montante = juros + capitalini
    console.log(`O montante resultante foi de ${montante}`)
    console.log(`O juros foi de ${juros}`)
}
jurosSimples(500, 15, 10)
console.log(" ")
console.log('====JUROS COMPOSTOS====')
function jurosComposto(capitalini = 0, taxa = 0, tempo = 0) {
    const aux = 1 + (taxa / 100)
    const montante = capitalini * Math.pow(aux, tempo).toFixed(2)
    //  const a = capitalini * Math.pow((1 + (taxa / 100)), tempo).toFixed(2)
    const juros = montante - capitalini


    console.log(`O montante resultante foi de ${montante}`)
    //console.log(`O montante diferente resultante foi de ${a}`)
    console.log(`O juros foi de ${juros}`)
}
jurosComposto(500, 15, 10)


