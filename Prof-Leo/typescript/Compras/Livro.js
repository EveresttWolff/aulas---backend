"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
var Livro = /** @class */ (function () {
    function Livro(autor, nome) {
        this.autor = autor;
        this.nome = nome;
        this.valorCusto = 35;
        this.comissaoAutor = 5;
    }
    Livro.prototype.calcularValorTotal = function () {
        return this.valorCusto + this.comissaoAutor;
    };
    return Livro;
}());
exports.Livro = Livro;
