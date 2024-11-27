import { Produto } from "./Produto";

export class Eletronico implements Produto {
    nome: string
    modelo: string
    marca: string
    garantia: string
    preco: number
    taxa: number

    constructor(modelo: string, marca: string, garantia: string, preco: number, taxa: number) {
        this.modelo = modelo
        this.marca = marca
        this.garantia = garantia
        this.preco = preco
        this.taxa = taxa
    }
    calcularValorTotal(): number {
        return this.preco + this.taxa
    }
}