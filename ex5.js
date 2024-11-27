class produto{
    constructor(nome, preco, quantidade){
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }
    calcularTotal(){
        console.log(`O valor total de ${this.quantidade} ${this.nome} é R$${this.preco*this.quantidade}`)
    }
}

const totalProduto = new produto("Nutella", 11.99, 5)
totalProduto.calcularTotal()