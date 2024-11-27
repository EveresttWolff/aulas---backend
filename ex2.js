class lampada{
    ligar(){
        this.estado = "ligada"
        console.log("A lâmpada está ligada!")
    }
    desligar(){
        this.estado = "desligada"
        console.log("A lâmpada está desligada!")
    }
}
const Lampada = new lampada()
Lampada.cor = 'branca'
Lampada.ligar()
Lampada.desligar()

console.log(`A lâmpada é ${Lampada.cor} quando ligada`)