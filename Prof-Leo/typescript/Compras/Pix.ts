import { MetodosPagamento } from "./MetodosPagamento"
export class Pix implements MetodosPagamento{
    pagar(){
        return console.log("O usuário pagou via pix.")
    }
}