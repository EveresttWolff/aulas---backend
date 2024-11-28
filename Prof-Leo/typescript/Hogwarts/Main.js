"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Aluno_1 = require("./Aluno");
var ask = require("readline-sync");
var alunos = [];
function cadastrarAluno() {
    var nome = ask.question("Digite o nome do aluno:");
    var idade = Number(ask.question("Digite a idade do aluno:"));
    var nacionalidade = ask.question("Digite a nacionalidade do aluno:");
    var classeMagica = ask.question("Digite a classe mágica do aluno:");
    var novoAluno = new Aluno_1.Aluno("", 0, "", "", "");
    novoAluno.sortearCasa();
    alunos.push(novoAluno);
    console.log("Aluno cadastrado com sucesso!");
}
function listarAlunos() {
    if (alunos.length === 0) {
        console.log("Nenhum aluno cadastrado!");
        return;
    }
    console.log("Lista de Alunos:");
    alunos.forEach(function (aluno, index) {
        console.log("\n--- Aluno ".concat(index + 1, " ---"));
        aluno.exibirInformacoes();
    });
}
function editarAluno() {
    listarAlunos();
    var index = Number(ask.question("Digite o número do aluno que deseja editar:")) - 1;
    if (index < 0 || index >= alunos.length) {
        console.log("Aluno inválido!");
        return;
    }
    var aluno = alunos[index];
    var novoNome = ask.question("Digite o novo nome (ou pressione Enter para manter o atual):");
    var novaIdade = ask.question("Digite a nova idade (ou pressione Enter para manter a atual):");
    var novaNacionalidade = ask.question("Digite a nova nacionalidade (ou pressione Enter para manter a atual):");
    var novaClasseMagica = ask.question("Digite a nova classe mágica (ou pressione Enter para manter a atual):");
    if (novoNome)
        aluno.setNome(novoNome);
    if (novaIdade)
        aluno.setIdade(Number(novaIdade));
    if (novaNacionalidade)
        aluno.setNacionalidade(novaNacionalidade);
    if (novaClasseMagica)
        aluno.setClasseMagica(novaClasseMagica);
    console.log("Aluno atualizado com sucesso!");
}
function deletarAluno() {
    listarAlunos();
    var index = Number(ask.question("Digite o número do aluno que deseja deletar:")) - 1;
    if (index < 0 || index >= alunos.length) {
        console.log("Aluno inválido!");
        return;
    }
    alunos.splice(index, 1);
    console.log("Aluno deletado com sucesso!");
}
function main() {
    while (true) {
        console.log("\nSistema de Cadastro de Alunos de Hogwarts");
        console.log("1. Cadastrar novo aluno");
        console.log("2. Ver alunos cadastrados");
        console.log("3. Editar dados de um aluno");
        console.log("4. Deletar um aluno");
        console.log("5. Sair");
        var opcao = ask.question("Escolha uma opção:");
        switch (opcao) {
            case "1":
                cadastrarAluno();
                break;
            case "2":
                listarAlunos();
                break;
            case "3":
                editarAluno();
                break;
            case "4":
                deletarAluno();
                break;
            case "5":
                console.log("Saindo do sistema. Até a próxima!");
                return;
            default:
                console.log("Opção inválida!");
        }
    }
}
main();
