class pessoa{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
    saudar(){
        console.log(`Olá meu nome é ${this.nome} e tenho ${this.idade} anos`)
    }
}

const pessoal = new pessoa("Camila",19)
pessoal.saudar()