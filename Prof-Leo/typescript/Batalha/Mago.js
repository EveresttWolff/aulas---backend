"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mago = void 0;
var Mago = /** @class */ (function () {
    function Mago(nome) {
        this.nome = nome;
        this.vida = 35;
        this.forca = 10;
        this.defesa = 6;
    }
    Mago.prototype.getNome = function () {
        return this.nome;
    };
    Mago.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Mago.prototype.getVida = function () {
        return this.vida;
    };
    Mago.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    Mago.prototype.getForca = function () {
        return this.forca;
    };
    Mago.prototype.setForca = function (forca) {
        this.forca = forca;
    };
    Mago.prototype.getDefesa = function () {
        return this.defesa;
    };
    Mago.prototype.setDefesa = function (defesa) {
        this.defesa = defesa;
    };
    Mago.prototype.perderVida = function (dano) {
        this.vida -= dano;
    };
    Mago.prototype.atacar = function (inimigo) {
        inimigo.perderVida(this.forca - inimigo.defesa);
    };
    return Mago;
}());
exports.Mago = Mago;
