import { BasePersonagem } from "./BasePersonagem";

export class Blanka extends BasePersonagem{
    constructor(){
        super("Blanka", 100, "Brasil", "Capoeira")
    }

    golpeLeve(): number {
        return this.danoAleatorio(10, 15)
    }

    golpePesado(): number {
        return this.danoAleatorio(5, 30)
    }

    golpeEspecial(): number {
        return this.danoAleatorio(30, 50)
    }
}