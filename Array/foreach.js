const aprovados = ['Lucas', 'Aldo', 'Julia', 'Gabriel']

aprovados.forEach(function (nome, indice) { // NOME E DPS O INDICE
    console.log(`${indice + 1} ${nome}`)
})


aprovados.forEach((nome,indice) => console.log(nome, indice))

const exibirAprovados = aprovado => console.log((aprovado))

aprovados.forEach(exibirAprovados)