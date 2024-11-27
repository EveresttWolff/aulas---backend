// criando uma class 'pessoa'
class Pessoa{
    nome: string
    idade: number
    constructor(nome:string, idade:number){
        this.nome
        this.idade
    }
    // método para apresentar
    apresentar():void{
        console.log(`Olá cpx, meu nome é ${this.nome} e tenho ${this.idade} anos.`)
        
    }
}
// criando um objeto da classe pessoa
const pessoa = new Pessoa("Caleb", 38)
pessoa.apresentar()