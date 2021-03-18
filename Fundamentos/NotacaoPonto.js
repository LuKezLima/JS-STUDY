console.log(Math.ceil(6.1))


const obj1 = {}

obj1.nome = 'Bola'
obj1['nome'] = 'Bola2'
console.log(obj1.nome)


function Obj2(nome) {

    this.nome = nome

}


const Obj3 = new Obj2('Cadeira')
const Obj4 = new Obj2('Mesa')

console.log(Obj2.nome)
console.log(Obj3.nome)
console.log(Obj4.nome)

