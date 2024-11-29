import { BasePersonagem } from "./BasePersonagem";

export class Honda extends BasePersonagem{
    constructor(){
        super("Honda", 100, "Japão", "Sumô")
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