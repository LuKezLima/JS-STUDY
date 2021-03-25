// Função JS é First-Class Object 
//Higher-order function


//Criar de forma literal
function fun1() {
    return console.log(`Seu nome é ${nome}`)
}


//Armazenar a função em uma variavel

const fun2 = function () {  // Função Anonima
}

//Armazenar em uma Array

const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))


// Armazenar em um atributo de objeto

const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())


// Passar função como parametro


function run(fun) {
    fun()
}

run(function () { console.log("Executando") })


// Uma função pode retornar/conter função

function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)