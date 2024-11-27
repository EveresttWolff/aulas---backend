class carro extends transporte{
    mover(){
        console.log("O carro está dirigindo na estrada")
    }
}

class aviao extends transporte{
    mover(){
        console.log("O avião está voando no céu")
    }
}

const meuCarro = new carro("Fusca")
const meuAviao = new aviao("Boeing 456")
meuCarro.mover()
meuAviao.mover()