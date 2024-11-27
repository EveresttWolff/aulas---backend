import { Livro } from "./Livro";
import { Alimento } from "./Alimento";
import { Produto } from "./Produto";
import { Eletronico } from "./Eletronico";
const ask = require ("readline-sync"); 

let carrinho: Array<Produto> = []

function comprarProduto(produtoNovo: Produto): void{
    carrinho.push(produtoNovo)
}

function verCarrinho(): void{
    console.clear()
    for(let produto of carrinho){
        console.log(`${produto.nome}................${produto.calcularValorTotal}`)
    }
    ask.question("Tecle ENTER para continuar...")
}

function pagarCarrinho(): void{
    console.log("Pagamento efetuado, carrinho vazio.")
    carrinho = []
}

let sustentaMenu: boolean = true

while(sustentaMenu){
    console.clear()
    console.log(`
    [1] - Comprar produto
    [2] - Ver carrinho
    [3] - Pagar
    [4] - Sair
    `)

    let opcaoUsuario = Number(ask.question("Digite uma opção:"))

    switch(opcaoUsuario){
        case 1:
            // comprar produto
            console.clear
            console.log(`
Qual produto voê quer comprar?
[1] - Livro
[2] - Alimento
            `)
            let opcaoProduto = Number(ask.question("Digite uma opção:"))
            switch(opcaoProduto){
                case 1:
                    let nomeLivro: string = ask.question("Digite o nome do livro")
                    let autorLivro: string = ask.question("Digite o nome do autor")
                    let livroComprado = new Livro(nomeLivro, autorLivro)
                    comprarProduto(livroComprado)
                    ask.question("Livro adicionado ao carrinho, tecle ENTER para continuar...")
                case 2:
                    let nomeAlimento: string = ask.question("Digite o nome do alimento")
                    let marcaAlimento: string = ask.question("Digite a marca do alimento")
                    let custoAlimento: number = ask.question("Digite o preço do alimento")
                    let alimentoComprado = new Alimento(nomeAlimento, marcaAlimento, custoAlimento)
                    comprarProduto(alimentoComprado)
                    ask.question("Alimento adicionado ao carrinho, tecle ENTER para continuar...")
            }
            break
        case 2:
            //ver carrinho
            break
        case 3:
            //pagar
            break
        case 4:
            //sair
            break
    }
}