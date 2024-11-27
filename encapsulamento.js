class conta{
    #saldo = +8000 //privado
    constructor(nome){
        this.nome = nome
    }
    //método público para adicionar saldo
    depositar(valor){
        if(valor > 0){
            this.#saldo += valor
            return `Depósito de R$ ${valor} realizado`
        }
        return `Valor inválido`
    }
    //método público para acessar saldo
    obterSaldo(){
        return `O saldo é R$ ${this.#saldo} reais`
    }
}

const conta1 = new conta('Caleb')
conta1.depositar(124)
console.log(conta1.obterSaldo())
