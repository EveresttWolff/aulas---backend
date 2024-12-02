"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Contato_1 = require("./Contato");
var Agenda_1 = require("./Agenda");
var ask = require('readline-sync');
function main() {
    var agenda = new Agenda_1.Agenda;
    var sustentaMenu = true;
    while (sustentaMenu) {
        console.clear();
        console.log("Escolha uma opção:\n");
        console.log("1 - Adicionar contato");
        console.log("2 - Remover contato");
        console.log("3 - Listar todos os contatos");
        console.log("4 - Buscar contato");
        console.log("5 - Editar contato");
        console.log("6 - Sair\n");
        var opcao = ask.question("Digite a opção desejada: ");
        switch (opcao) {
            case "1":
                var nome = ask.question("Digite um nome: ");
                var telefone = ask.question("Digite um telefone: ");
                var email = ask.question("Digite um email: ");
                agenda.adicionarContato(new Contato_1.Contato(nome, telefone, email));
                console.log("\nNovo contato adicionado.");
                break;
            case "2":
                var nomeRemover = ask.question("Digite o nome do contato para remover: ");
                if (agenda.removerContato(nomeRemover)) {
                    console.log("\nO contato foi removido.");
                }
                else {
                    console.log("\nContato não encontrado.");
                }
                break;
            case "3":
                console.log("Contatos cadastrados:\n");
                console.log(agenda.listarContatos());
                break;
            case "4":
                var nomeBuscar = ask.question("Digite o nome do contato para buscar: ");
                var contatoEncontrado = agenda.buscarContato(nomeBuscar);
                if (contatoEncontrado) {
                    console.log("Contato encontrado:\n");
                    console.log(contatoEncontrado.mostrarContato());
                }
                else {
                    console.log("Contato não encontrado.");
                }
                break;
            case "5":
                var nomeEditar = ask.question("Digite o nome do contato para editar: ");
                var contatoExistente = agenda.buscarContato(nomeEditar);
                if (contatoExistente) {
                    var novoNome = ask.question("Digite o novo nome: ");
                    var novoTelefone = ask.question("Digite o novo telefone: ");
                    var novoEmail = ask.question("Digite o novo email: ");
                    agenda.editarContato(nomeEditar, new Contato_1.Contato(novoNome, novoTelefone, novoEmail));
                    console.log("O contato foi editado.");
                }
                else {
                    console.log("Contato não encontrado.");
                }
                break;
            case "6":
                sustentaMenu = false;
                console.log("Saindo do sistema...");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
                break;
        }
        setTimeout(function () {
        }, 5000);
    }
}
main();
