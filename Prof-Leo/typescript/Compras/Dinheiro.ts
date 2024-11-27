import { MetodosPagamento } from "./metodosPagamento";

export class Dinheiro implements MetodosPagamento{
    pagar(){
        return console.log("O usuário pagou com dinheiro.")
    }
}