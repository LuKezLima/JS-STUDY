const fabricantes = ['Mercedes', 'Audi', 'BMW']

function ImprimirNome(nome, indice) {
    console.log(`Indice ${indice + 1}. Nome ${nome}`)
}

fabricantes.forEach(ImprimirNome)

fabricantes.forEach((fabricante, i) => console.log(fabricante)
)