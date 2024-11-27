"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Livro_1 = require("./Livro");
var Alimento_1 = require("./Alimento");
var readline_sync_1 = require("readline-sync");
var carrinho = [];
function comprarProduto(produtoNovo) {
    carrinho.push(produtoNovo);
}
function verCarrinho() {
    console.clear();
    for (var _i = 0, carrinho_1 = carrinho; _i < carrinho_1.length; _i++) {
        var produto = carrinho_1[_i];
        console.log("".concat(produto.nome, "................").concat(produto.calcularValorTotal));
    }
    readline_sync_1.default.question("Tecle ENTER para continuar...");
}
function pagarCarrinho() {
    console.log("Pagamento efetuado, carrinho vazio.");
    carrinho = [];
}
var sustentaMenu = true;
while (sustentaMenu) {
    console.clear();
    console.log("\n    [1] - Comprar produto\n    [2] - Ver carrinho\n    [3] - Pagar\n    [4] - Sair\n    ");
    var opcaoUsuario = Number(readline_sync_1.default.question("Digite uma opção:"));
    switch (opcaoUsuario) {
        case 1:
            // comprar produto
            console.clear;
            console.log("\nQual produto vo\u00EA quer comprar?\n[1] - Livro\n[2] - Alimento\n            ");
            var opcaoProduto = Number(readline_sync_1.default.question("Digite uma opção:"));
            switch (opcaoProduto) {
                case 1:
                    var nomeLivro = readline_sync_1.default.question("Digite o nome do livro");
                    var autorLivro = readline_sync_1.default.question("Digite o nome do autor");
                    var livroComprado = new Livro_1.Livro(nomeLivro, autorLivro);
                    comprarProduto(livroComprado);
                    readline_sync_1.default.question("Livro adicionado ao carrinho, tecle ENTER para continuar...");
                case 2:
                    var nomeAlimento = readline_sync_1.default.question("Digite o nome do alimento");
                    var marcaAlimento = readline_sync_1.default.question("Digite a marca do alimento");
                    var custoAlimento = readline_sync_1.default.question("Digite o preço do alimento");
                    var ingredientesAlimento = readline_sync_1.default.question("Digite o(s) ingrediente(s) do alimento");
                    var alimentoComprado = new Alimento_1.Alimento(nomeAlimento, marcaAlimento, custoAlimento, ingredientesAlimento);
                    comprarProduto(alimentoComprado);
                    readline_sync_1.default.question("Alimento adicionado ao carrinho, tecle ENTER para continuar...");
            }
            break;
        case 2:
            //ver carrinho
            break;
        case 3:
            //pagar
            break;
        case 4:
            //sair
            break;
    }
}
