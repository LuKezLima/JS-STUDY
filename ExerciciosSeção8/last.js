// function bestStudent(obj){
//     let acumulador = 0
//     let media = 0
//     let medias = []

//     for(const i  in obj) {
//         let array = obj[i]

//         array.forEach(element => {
//             acumulador = acumulador + element
            
//         });
//         media = acumulador / array.length
//         medias.push(media)
//         console.log(`A média do aluno ${i} é ${media}`)
//         acumulador = 0
//         let maiormedia = Math.max.apply(null, medias)
//             if(maiormedia == media){
//                 console.log(i,media)
//             }
//             }
        
//         console.log(Math.max.apply(null, medias))
// }



// const NotasAlunos = {
//         joão: [7,8,5,1,5],
//         Maria: [6,4,7,3,2],
//         Lucas: [9,8,9,8,9],
//         Cristian: [7,6,8,5,4]
// }


// bestStudent(NotasAlunos)




const soma = array => array.reduce((acumulador, atual) => acumulador + atual, 0)
const media = array => soma(array) / array.length
function recerberMelhorEstudante(estudantes) {
const estudantesComMedias = Object.entries(estudantes).map( estudante => {
const chave = 0,
valor = 1
return { nome: estudante[chave], media: media(estudante[valor]) }
})
const estudantesOrdenados = estudantesComMedias.sort( (estudanteA, estudanteB) => estudanteB.media - estudanteA.media )
const melhorEstudante = estudantesOrdenados[0]
return melhorEstudante
}

recerberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6], 
    Mariana: [9, 6.6, 7.9, 8], 
    Carla: [7, 7, 8, 9] 
    })