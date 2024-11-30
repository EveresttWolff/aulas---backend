import { BasePersonagem } from "./BasePersonagem";

export class Zangief extends BasePersonagem{
    constructor(){
        super("Zangief", 100, "Rússia", "Luta Livre")
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