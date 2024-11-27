class pessoa{
    #nome
    #idade
    constructor(nome, idade){
        this.#nome = nome
        this.#idade = idade
    }
    obterNome(){
        return `O nome da pessoa é ${this.#nome}`
    }
    obterIdade(){
        return `${this.#nome} tem ${this.#idade} anos`
    }
    definirIdade(novaIdade){
        if(novaIdade > 0){
            this,this.#idade = novaIdade
        }else{
            console.log("Idade inválida")
        }
    }
    
}

const pessoal = new pessoa('Bob', 24)
console.log(pessoal.obterNome())
console.log(pessoal.obterIdade())
pessoal.definirIdade(36) // altera a idade
console.log(pessoal.obterIdade())