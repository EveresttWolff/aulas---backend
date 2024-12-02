"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Agenda = void 0;
var Agenda = /** @class */ (function () {
    function Agenda() {
        this.contatos = [];
    }
    //adiciona
    Agenda.prototype.adicionarContato = function (contato) {
        this.contatos.push(contato);
    };
    //remove
    Agenda.prototype.removerContato = function (nome) {
        var index = this.contatos.findIndex(function (c) { return c.getNome() === nome; });
        if (index !== -1) {
            this.contatos.splice(index, 1);
            return true;
        }
        return false;
    };
    //lista
    Agenda.prototype.listarContatos = function () {
        if (this.contatos.length === 0) {
            return "A agenda está vazia.";
        }
        return this.contatos.map(function (c) { return c.mostrarContato(); }).join("\n");
    };
    //busca
    Agenda.prototype.buscarContato = function (nome) {
        return this.contatos.find(function (c) { return c.getNome() === nome; }) || null;
    };
    //edita
    Agenda.prototype.editarContato = function (nome, novoContato) {
        var index = this.contatos.findIndex(function (c) { return c.getNome() === nome; });
        if (index !== -1) {
            this.contatos[index] = novoContato;
            return true;
        }
        return false;
    };
    return Agenda;
}());
exports.Agenda = Agenda;
