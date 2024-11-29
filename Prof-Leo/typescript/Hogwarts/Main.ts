import { Aluno } from "./Aluno";
const ask = require ("readline-sync")

let alunos: Aluno[] = []

function cadastrarAluno(): void{
    let nome = ask.question("Digite o nome do aluno:")
    let idade = Number(ask.question("Digite a idade do aluno:"))
    let nacionalidade = ask.question("Digite a nacionalidade do aluno:")
    let classeMagica = ask.question("Digite a classe mágica do aluno:")

    let novoAluno = new Aluno(nome, idade, nacionalidade, null, classeMagica)
    novoAluno.sortearCasa()
    ask.question(novoAluno.exibirInformacoes())
    alunos.push(novoAluno)
    console.log("Aluno cadastrado com sucesso!")
}

function listarAlunos(): void {
    if (alunos.length === 0) {
        console.log("Nenhum aluno cadastrado!")
        return
    }
    console.log("Lista de Alunos:")
    for(let i in alunos){
        console.log(`\n--- Aluno ${Number(i) + 1} ---`)
        console.log(`Nome: ${alunos[i].getNome()}\nIdade: ${alunos[i].getIdade()}\nNacionalidade: ${alunos[i].getNacionalidade}\nCasa: ${alunos[i].getCasa}\nClasse Mágica: ${alunos[i].getClasseMagica}`)
    }
    ask.question("continuar...")
}

function editarAluno(): void{
    listarAlunos()
    let index = Number(ask.question("Digite o número do aluno que deseja editar:")) - 1

    if(index < 0 || index >= alunos.length){
        console.log("Aluno inválido!")
        return
    }

    let aluno = alunos[index]
    let novoNome = ask.question("Digite o novo nome (ou pressione Enter para manter o atual):")
    let novaIdade = ask.question("Digite a nova idade (ou pressione Enter para manter a atual):")
    let novaNacionalidade = ask.question("Digite a nova nacionalidade (ou pressione Enter para manter a atual):")
    let novaClasseMagica = ask.question("Digite a nova classe mágica (ou pressione Enter para manter a atual):")

    if (novoNome) aluno.setNome(novoNome)
    if (novaIdade) aluno.setIdade(Number(novaIdade))
    if (novaNacionalidade) aluno.setNacionalidade(novaNacionalidade)
    if (novaClasseMagica) aluno.setClasseMagica(novaClasseMagica)

    console.log("Aluno atualizado com sucesso!")
}

function deletarAluno():void{
    listarAlunos()
    let index = Number(ask.question("Digite o número do aluno que deseja deletar:")) - 1

    if(index < 0 || index >= alunos.length){
        console.log("Aluno inválido!")
        return
    }

    alunos.splice(index, 1)
    console.log("Aluno deletado com sucesso!")
}

function main(): void{
    while(true){
        console.log("\nSistema de Cadastro de Alunos de Hogwarts")
        console.log("1. Cadastrar novo aluno")
        console.log("2. Ver alunos cadastrados")
        console.log("3. Editar dados de um aluno")
        console.log("4. Deletar um aluno")
        console.log("5. Sair")

        let opcao = ask.question("Escolha uma opção:")
        switch(opcao){
            case "1":
                cadastrarAluno()
                break
            case "2":
                listarAlunos()
                break
            case "3":
                editarAluno()
                break
            case "4":
                deletarAluno()
                break
            case "5":
                console.log("Saindo do sistema. Até a próxima!")
                return
            default:
                console.log("Opção inválida!")
        }
    }
}
main()