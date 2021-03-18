// PAR NOME/VALOR
const saudacao = 'Olá!' // Contexto Lógico/Léxico 1


function exec() {
    const saudacao = 'Manda' // Contexto Léxico 2
    return saudacao

}


// OBJETOS SÃO GRUPOS ALINHADOS DE PARES NOME/VALOR

const client = {
    nome: 'Pedro',
    peso: '69',
    idade: '23',
    endereco: {
        rua: 'Maw mendes',
        logradouro: 'veri gudi'
    }
}

console.log(saudacao)
console.log(exec())
console.log(client)

