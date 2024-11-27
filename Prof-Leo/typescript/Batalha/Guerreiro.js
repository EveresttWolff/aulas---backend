"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guerreiro = void 0;
var Guerreiro = /** @class */ (function () {
    function Guerreiro(nome) {
        this.nome = nome;
        this.vida = 100;
        this.forca = 8;
        this.defesa = 8;
    }
    Guerreiro.prototype.atacar = function (inimigo) {
        var dano = this.forca - inimigo.defesa;
        if (dano > 0) {
            inimigo.perderVida(dano);
        }
        console.log("".concat(this.nome, " atacou."));
    };
    Guerreiro.prototype.perderVida = function (dano) {
        this.vida -= dano;
        if (this.vida < 0)
            this.vida = 0;
        console.log("".concat(this.nome, " tomou ").concat(dano, " de dano."));
    };
    return Guerreiro;
}());
exports.Guerreiro = Guerreiro;
