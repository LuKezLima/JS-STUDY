const sequencia = {
    _valor: 1, // COLOCAR _ É UMA CONVENÇÃO, DIZ QUE VOCE PRETENDE ACESSAR ELA SOMENTE DENTRO DO OBJETO
    get valor() {
        return this._valor++
    },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 100
console.log(sequencia.valor, sequencia.valor)
