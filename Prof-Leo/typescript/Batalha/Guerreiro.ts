import { Personagem } from "./Personagem";

export class Guerreiro implements Personagem{
    private nome: string
    private forca: number
    private vida: number
    private defesa: number

    constructor(nome: string){
        this.nome = nome
        this.forca = 10
        this.defesa = 6
        this.vida = 35
    }

    public getNome(): string{
        return this.nome
    }

    public setNome(nome: string){
        this.nome = nome
    }

    public getForca(): number {
        return this.forca
    }

    public setForca(forca: number): void {
        this.forca = forca
    }

    public getVida(): number {
        return this.vida
    }

    public setVida(vida: number): void {
        this.vida = vida
    }

    public getDefesa(): number {
        return this.defesa
    }

    public setDefesa(defesa: number): void {
        this.defesa = defesa
    }

    public perderVida(dano: number): void {
        this.vida -= dano
    }

    public atacar(inimigo: Personagem): void {
        inimigo.perderVida(this.forca - inimigo.getDefesa())
    }

}