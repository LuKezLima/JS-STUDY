// function doaThat(){
//     return Promise.resolve('Lucas')
// }


// function reject(){
//     return Promise.reject()
// }


// doaThat().then( name => console.log(name))

// reject().catch(e => console.log("Erro brusco"))



// function Promisetrabalhada() {

//     return new Promise(function (resolve,reject) {

//         setTimeout(() => {
//             resolve("Hello world")
//         }, 3000);
       


//       //  reject("Deu erro rapaiz")
//     })
    
// }


// Promisetrabalhada().then((results) => console.log(results));

// Promisetrabalhada().catch(results2 => console.log(results2));


   window
   .fetch('https://viacep.com.br/ws/01105040/json/')
   .then(function(data){
        data
        .json()
        .then(function(endereco ){
            console.log(endereco);
            

        })
    
    })
