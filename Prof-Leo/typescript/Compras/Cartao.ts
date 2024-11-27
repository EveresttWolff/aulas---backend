import { MetodosPagamento } from "./metodosPagamento";

export class Cartao implements MetodosPagamento{
    pagar(){
        return console.log("O usuário passou no crédito.")
    }
}