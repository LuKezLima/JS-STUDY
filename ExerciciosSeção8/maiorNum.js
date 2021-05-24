const arr = [10,4,210,3,4,62,1223,2,54,12,634,1234,12,542,1,63,146,1232,12,5,765,12,66]
function getHigher(arr){
    let x = 0
    arr.forEach(element => {
        if(x < element){
            x = element
        } else{
            x = x
        }
    });
    console.log(`O maior número da array é ${x}`);
}
getHigher(arr)
function filterQtd(arr, qtd){
    const length = qtd
    const newArray = []
    arr.forEach(element => {
        if(String(element).length == length){
            newArray.push(element)
        }
    })
    console.log(newArray);
}
filterQtd(arr,2)
function removeVogals(string){
    let newString = ''
    newString = string.replace('a', '').replace('e', '').replace('i', '').replace('o', '').replace('u', '')
    console.log(newString);
}
removeVogals('Lucas')


const alunosNotas = {
    Lucas: [9,5,7,8,6],
    Maria: [5,6,7,8,9],
    Joana: [9,9,7,5,4],
    Tiago: [10,5,4,8,5],
}

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

recerberMelhorEstudante(alunosNotas)

console.log(Object.entries(alunosNotas).forEach(e => {console.log(e[1].reduce((e,total) => e + total)/e[1].length)
}));
