function totalExpense(array){
    let result = 0

    array.map(element => {
        result += element.preco
        
    });

  return console.log(result)

}


const products = [

{
    nome: "Jornal Online",
    categoria: "Informação",
    preco: 89.99
},
{
    nome: "Cinema",
    categoria: "Entretenimento",
    preco: 180
}

]


totalExpense(products)