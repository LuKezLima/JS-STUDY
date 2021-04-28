function bestStudent(obj){
    let acumulador = 0
    let media = 0
    let medias = []

    for(const i  in obj) {
        let array = obj[i]

        array.forEach(element => {
            acumulador = acumulador + element
            
        });
        media = acumulador / array.length
        medias.push(media)
        console.log(`A média do aluno ${i} é ${media}`)
        acumulador = 0
        let maiormedia = Math.max.apply(null, medias)
            if(maiormedia == media){
                console.log(i,media)
            }
            }
        
        console.log(Math.max.apply(null, medias))
}



const NotasAlunos = {
        joão: [7,8,5,1,5],
        Maria: [6,4,7,3,2],
        Lucas: [9,8,9,8,9],
        Cristian: [7,6,8,5,4]
}


bestStudent(NotasAlunos)


 // const resultado = obj[i].reduce(function (acumulador, atual) {
        //     console.log(acumulador, atual)
        //     return acumulador + atual

        // // array.map(function(e){
        // //     console.log(media = media + e)
        // //     let totalfinal = media
        // //     console.log(totalfinal)
        // // })
        // //     console.log(i, array, obj[i].length)

        // // }