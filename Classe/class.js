// FUNÇÃO CONSTRUTORA

// function person(name) {
//     this.name = name;
    
// }
// const Officer = new person

// Officer.name = "José"

// console.log(Officer.name);


class person2{
    constructor(name,age,adress){
        this.name = name
        this.age = age
        this.adress = adress
    }


    drink(){
        return `O ${this.nome} com idade de ${this.age} anos e que mora na ${this.adress} está bebendo coffee`
    }
}



class Developer extends person2{
    constructor(name,codeLanguage){
        super(name)
        this.codeLanguage = codeLanguage

    }



    code(){
        return `${this.name} está codando em ${this.codeLanguage}`
    }
}

let person3 = new person2
person3.nome = "Gabriel"
person3.age = 20
person3.adress = "Rua Abelardo Rodrigues"

console.log("Nome:",person3.nome);
console.log(person3.age, "Anos");
console.log("Endereço:",person3.adress);
console.log(person3.drink());

let developer = new Developer("Tarsilo","Python")

console.log(developer.name);
console.log(developer.code());


