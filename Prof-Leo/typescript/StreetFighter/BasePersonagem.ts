import { Personagem } from "./Personagem";

export class BasePersonagem implements Personagem{
    nome: string
    vida: number
    nacionalidade: string
    estiloLuta: string
    private golpeEspecialUsado: boolean = false

    constructor(nome:string, vida: number, nacionalidade: string, estiloLuta: string){
        this.nome = nome
        this.vida = vida
        this.nacionalidade = nacionalidade
        this.estiloLuta = estiloLuta
    }

    getNome(): string {
        return this.nome
    }

    setNome(nome: string): void {
        this.nome = nome
    }

    getVida(): number {
        return this.vida
    }

    setVida(vida: number): void {
        this.vida = vida
    }

    getNacionalidade(): string {
        return this.nacionalidade
    }

    setNacionalidade(nacionalidade: string): void {
        this.nacionalidade = nacionalidade
    }

    getEstiloLuta(): string {
        return this.estiloLuta
    }

    setEstiloLuta(estiloLuta: string): void {
        this.estiloLuta = estiloLuta
    }

    golpeLeve(): number {
        throw new Error("Método não implementado!")
    }

    golpePesado(): number {
        throw new Error("Método não implementado!")
    }

    golpeEspecial(): number {
        if (this.golpeEspecialUsado){
            console.log(`${this.nome} já usou seu golpe especial!`)
            return 0
        }
        this.golpeEspecialUsado = true
        return this.danoAleatorio(30,50)
    }

    protected danoAleatorio(min: number, max:number): number{
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
}