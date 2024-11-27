import { Produto } from "./Produto";

export class Livro implements Produto{
    autor: string
    nome: string
    valorCusto: number
    comissaoAutor: number

    constructor(autor: string, nome: string){
        this.autor = autor
        this.nome = nome
        this.valorCusto = 35
        this.comissaoAutor = 5
    }
    calcularValorTotal(): number {
        return this.valorCusto + this.comissaoAutor
    }
}