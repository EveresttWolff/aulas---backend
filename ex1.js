class cachorro{
    latir(){
        console.log("Au!Au!")
    }
    aniversario(){
        this.idade += 1
    }
}

const meuCachorro = new cachorro()
meuCachorro.nome = "Thor"
meuCachorro.idade = 10

meuCachorro.latir()
meuCachorro.aniversario

console.log(`Idade do ${meuCachorro.nome}: ${meuCachorro.idade}`)