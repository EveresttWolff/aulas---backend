import { BasePersonagem } from "./BasePersonagem";

export class Ken extends BasePersonagem{
    constructor(){
        super("Ken", 100, "EUA", "Kickboxing")
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