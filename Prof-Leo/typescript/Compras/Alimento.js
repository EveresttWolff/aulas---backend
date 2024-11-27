"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alimento = void 0;
var Alimento = /** @class */ (function () {
    function Alimento(nome, marca, custo, ingredientes) {
        this.nome = nome;
        this.marca = marca;
        this.custo = custo;
        this.ingredientes = ingredientes;
    }
    Alimento.prototype.calcularValorTotal = function () {
        return this.custo;
    };
    return Alimento;
}());
exports.Alimento = Alimento;
