import { Produto } from "./Produto";

export class Alimento implements Produto{
    nome: string
    marca: string
    custo: number
    constructor(nome: string, marca: string, custo: number){
        this.nome = nome
        this.marca = marca
        this.custo = custo
    }
    calcularValorTotal(): number {
        return this.custo
    }
}