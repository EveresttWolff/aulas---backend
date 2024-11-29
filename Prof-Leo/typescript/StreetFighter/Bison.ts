import { BasePersonagem } from "./BasePersonagem";

export class Bison extends BasePersonagem{
    constructor(){
        super("Bison", 100, "???", "Psycho Power")
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