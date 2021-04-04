class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}


class pai extends Avo { // PASSAR HERENÇA COM AS CLASSES, SEU PROTOTIPO
    constructor(sobrenome, profissao = 'professor') {
        super(sobrenome) // chamando o sobrenome da classe AVO

        this.profissao = profissao

    }
}

class filho extends pai {
    constructor() {
        super('Silva')
    }
}


const filhos = new filho
console.log(filhos)