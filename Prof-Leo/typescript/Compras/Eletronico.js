"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Eletronico = void 0;
var Eletronico = /** @class */ (function () {
    function Eletronico(modelo, marca, garantia, preco, taxa) {
        this.modelo = modelo;
        this.marca = marca;
        this.garantia = garantia;
        this.preco = preco;
        this.taxa = taxa;
    }
    Eletronico.prototype.calcularValorTotal = function () {
        return this.preco + this.taxa;
    };
    return Eletronico;
}());
exports.Eletronico = Eletronico;
