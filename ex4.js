class livro{
    constructor(titulo, autor){
        this.titulo = titulo
        this.autor = autor
    }
    mostrarDetalhes(){
        console.log(`"Livro: <${this.titulo}>, Autor: <${this.autor}>"`)
    }
}

const novoLivro = new livro("O rei da Terra do Nunca", "Nikki St. Crowe")
novoLivro.mostrarDetalhes()