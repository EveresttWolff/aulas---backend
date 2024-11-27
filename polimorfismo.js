// classe jogador
class Jogador{
    constructor(nome, numero){
        this.nome = nome
        this.numero = numero
    }
    // método para ação do jogador
    jogar(){
        console.log(`${this.nome}(#${this.numero}) está em campo!`)
    }
}
// subclasse para o atacante
class atacante extends Jogador{
    //sobreescrever o método jogar
    jogar(){
        console.log(`${this.nome}(#${this.numero}) está em campo`)
    }
}
// subclasse para o meioCampo
class meioCampo extends Jogador{
    //sobreescrever o método jogar
    jogar(){
        console.log(`${this.nome}(#${this.numero}) está construindo o jogo`)
    }
}
// subclasse para o defensor
class defensor extends Jogador{
    //sobreescrever o método jogar
    jogar(){
        console.log(`${this.nome}(#${this.numero}) está organizando a defesa`)
    }
}
// função para testar o polimorfismo do time
function executarJogo(jogadores){
    jogadores.forEach(jogador => {
        jogador.jogar()
    });
}
//criar instâncias
const jogador1 = new atacante("Messi", 10)
const jogador2 = new meioCampo("Kross", 8)
const jogador3 = new defensor("Geromito", 3)
// array dos jogadores do time
const time = [jogador1, jogador2, jogador3]
// executar o método jogar()
executarJogo(time)