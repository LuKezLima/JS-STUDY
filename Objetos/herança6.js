function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula("Até breve", 456)
console.log(aula1, aula2)

// simulando o new
function novo(func, ...params) {
    const obj = {}
    obj.__proto__ = func.prototype
    func.apply()
    f.apply(obj, params)
    return obj

}