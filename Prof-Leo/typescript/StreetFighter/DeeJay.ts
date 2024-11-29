import { BasePersonagem } from "./BasePersonagem";

export class DeeJay extends BasePersonagem{
    constructor(){
        super("Dee Jay", 100, "Jamaica", "Breakdance")
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