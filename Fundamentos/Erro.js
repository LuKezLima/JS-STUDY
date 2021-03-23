function tratarErroelancar(erro) {
    throw new Error('Ocorreu um erro')
}

function imprimirNomeGritado(obj) {

    try {
        console.log(obj.name.toUpperCase() + '!!!')
    }
    catch (e) {
        tratarErroelancar(e)
    } finally {
        console.log('Final')
    }

    console.log(obj.name.toUpperCase() + '!!!')

}

const obj = {
    name: 'roberto'
}
imprimirNomeGritado(obj)