// exemplo com herança e TypeScript
// definição de classe Animal (pai | base)
class Animal{
    //propriedade do animal
    nome: string
    idade: number

    // constructor para inicializar o nome e a idade
    constructor(nome: string, idade: number){
        this.nome = nome
        this.idade = idade
        // método para fazer o animal emitir som
        public emitirSom(): void{
            console.log(`${this.nome} está fazendo um som`)
        }
        // método para exibir informações do animal
        public exibirInfo(): void{
            console.log(`Nome: ${this.nome}, Idade: ${this.idade} anos`)
        }
    }
    // definido classe filho cachorro que herda de animal
    class Cachorro extends Animal{
        // propriedade específica da classe cachorro
        private raca: string
        
        //constructor da classe cachorro
        constructor(nome: string, idade: number, raca: string){
            // chamando o construtor da classe pai (Animal)
            super(nome, idade)
            this.raca = raca
        }
        // sobrescrever o método emitirSom da classe animal
        public emitirSom(): void {
            super.exibirInfo()
            console.log(`Raça: ${this.raca}`)
        }
    }
}
// criando um objeto da classe cachorro
const cachorro = new Cachorro("Thor", 10, "Pastor Alemão")
cachorro.emitirSom()