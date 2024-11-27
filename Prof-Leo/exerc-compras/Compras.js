const ask = require("readline-sync")

let num1 = Number(ask.question("Digite um número:"))
console.log(num1, typeof num1)

class Produtos{
    constructor(){
       
    }
}
class livro extends Produtos{

}
class eletronico extends Produtos{

}
class alimento extends Produtos{

}

class métodosDePagamento{
    constructor(){
        
    }
}
class pix extends métodosDePagamento{

}
class dinheiro extends métodosDePagamento{

}
class cartaoCredito extends métodosDePagamento{
    
}