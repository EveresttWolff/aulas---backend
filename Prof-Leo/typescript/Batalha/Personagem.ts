export interface Personagem{
    getNome(): string
    setNome(nome: string): void

    getForca(): number
    setForca(forca: number): void

    getVida(): number
    setVida(vida: number): void

    getDefesa(): number
    setDefesa(defesa: number): void

    atacar(inimigo: Personagem): void
    perderVida(dano: number): void
}
