import { BasePersonagem } from "./BasePersonagem";

export class Cammy extends BasePersonagem{
    constructor(){
        super("Cammy", 100, "Reino Unido", "Técnicas de luta da Shadaloo")
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