import { BasePersonagem } from "./BasePersonagem";

export class Ryu extends BasePersonagem{
    constructor(){
        super("Ryu", 100, "Japão", "Karatê")
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