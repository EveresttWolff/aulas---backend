class docesCamila{
    #receitas
    #totalDoces
    constructor(receitas, totalDoces){
        this.#receitas = receitas
        this.#totalDoces = totalDoces
    }
    adicionarReceita(receita){
        
        console.log("Receita adicionada com sucesso!")
    }
    mostrarReceitas(){
        console.log(this.#receitas)
    }
    produzirDoce(receita){
        if(receita === this.#receitas(receita)){
            this.totalDoces += 1
            console.log("Um doce foi produzido")
        }console.log("Receita não encontrada")
    }
    mostrarTotalDoces(){
        console.log(`Total de doces : ${this.#totalDoces}`)
    }
}

const doceria = docesCamila()
console.log(doceria.adicionarReceita())
console.log(doceria.mostrarReceitas())
console.log(doceria.produzirDoce())
console.log(doceria.mostrarTotalDoces())
