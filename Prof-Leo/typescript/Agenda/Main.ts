import { Contato } from "./Contato";
import { Agenda } from "./Agenda";
const ask = require('readline-sync')

function main(): void{
    let agenda = new Agenda
    let sustentaMenu = true

    while (sustentaMenu) {
        console.clear()

        console.log("Escolha uma opção:\n")
        console.log("1 - Adicionar contato")
        console.log("2 - Remover contato")
        console.log("3 - Listar todos os contatos")
        console.log("4 - Buscar contato")
        console.log("5 - Editar contato")
        console.log("6 - Sair\n")
    
        let opcao = ask.question("Digite a opção desejada: ")

            switch (opcao) {
                case "1":
                    let nome = ask.question("Digite um nome: ")
                    let telefone = ask.question("Digite um telefone: ")
                    let email = ask.question("Digite um email: ")
                    agenda.adicionarContato(new Contato(nome, telefone, email))
                    console.log("\nNovo contato adicionado.")
                break

                case "2":
                    let nomeRemover = ask.question("Digite o nome do contato para remover: ")
                    if(agenda.removerContato(nomeRemover)){
                        console.log("\nO contato foi removido.")
                    } else {
                        console.log("\nContato não encontrado.")
                    }
                break

                case "3":
                    console.log("Contatos cadastrados:\n")
                    console.log(agenda.listarContatos())
                break

                case "4":
                    let nomeBuscar = ask.question("Digite o nome do contato para buscar: ")
                    let contatoEncontrado = agenda.buscarContato(nomeBuscar)
                    if(contatoEncontrado){
                        console.log("Contato encontrado:\n")
                        console.log(contatoEncontrado.mostrarContato())
                    } else {
                        console.log("Contato não encontrado.")
                    }
                break

                case "5":
                    let nomeEditar = ask.question("Digite o nome do contato para editar: ")
                    let contatoExistente = agenda.buscarContato(nomeEditar)
                    if(contatoExistente){
                        let novoNome = ask.question("Digite o novo nome: ")
                        let novoTelefone = ask.question("Digite o novo telefone: ")
                        let novoEmail = ask.question("Digite o novo email: ")
                        agenda.editarContato(nomeEditar, new Contato( novoNome, novoTelefone, novoEmail)
                        )
                        console.log("O contato foi editado.")
                    } else {
                        console.log("Contato não encontrado.")
                    }
                break

                case "6":
                    sustentaMenu = false;
                    console.log("Saindo do sistema...");
                break
            
                default:
                    console.log("Opção inválida. Tente novamente.");
                break
            }
    }
}
main()