import { Contato } from "./Contato"

export class Agenda{
    private contatos: Contato[] = []

    //adiciona
    public adicionarContato(contato: Contato){
        this.contatos.push(contato)
    }

    //remove
    public removerContato(nome: string): boolean{
        let index = this.contatos.findIndex(c => c.getNome() === nome)
        if(index !== -1){
            this.contatos.splice(index, 1)
            return true
        }
        return false
    }

    //lista
    public listarContatos(): string{
        if(this.contatos.length === 0){
            return "A agenda está vazia."
        }
        return this.contatos.map(c => c.mostrarContato()).join("\n")
    }

    //busca
    public buscarContato(nome: string): Contato | null{
        return this.contatos.find(c => c.getNome() === nome) || null
    }

    //edita
    public editarContato(nome: string, novoContato: Contato): boolean{
        let index = this.contatos.findIndex(c => c.getNome() === nome)
        if(index !== -1){
            this.contatos[index] = novoContato
            return true
        }
        return false
    }
}