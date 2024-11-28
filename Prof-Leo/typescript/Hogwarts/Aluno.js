"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
var Aluno = /** @class */ (function () {
    function Aluno(nome, idade, nacionalidade, casa, classeMagica) {
        if (casa === void 0) { casa = null; }
        this.nome = nome;
        this.idade = idade;
        this.nacionalidade = nacionalidade;
        this.casa = casa;
        this.classeMagica = classeMagica;
    }
    Aluno.prototype.getNome = function () {
        return this.nome;
    };
    Aluno.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Aluno.prototype.getIdade = function () {
        return this.idade;
    };
    Aluno.prototype.setIdade = function (idade) {
        this.idade = idade;
    };
    Aluno.prototype.getNacionalidade = function () {
        return this.nacionalidade;
    };
    Aluno.prototype.setNacionalidade = function (nacionalidade) {
        this.nacionalidade = nacionalidade;
    };
    Aluno.prototype.getCasa = function () {
        return this.casa;
    };
    Aluno.prototype.setCasa = function (casa) {
        this.casa = casa;
    };
    Aluno.prototype.getClasseMagica = function () {
        return this.classeMagica;
    };
    Aluno.prototype.setClasseMagica = function (classeMagica) {
        this.classeMagica = classeMagica;
    };
    Aluno.prototype.sortearCasa = function () {
        var indice = Math.floor(Math.random() * Aluno.casas.length);
        this.casa = Aluno.casas[indice];
    };
    Aluno.prototype.exibirInformacoes = function () {
        console.log("\n        Nome: ".concat(this.nome, "\n        Idade: ").concat(this.idade, "\n        Nacionalidade: ").concat(this.nacionalidade, "\n        Casa: ").concat(this.casa, "\n        Classe M\u00E1gica: ").concat(this.classeMagica, "\n        "));
    };
    Aluno.casas = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
    Aluno.classesMagicas = ["Feitiçaria e Encantamentos", "Poções", "Transfiguração", "Defesa Contra as Artes das Trevas", "Herbologia", "Astronomia", "História da Magia", "Cuidado de Criaturas Mágicas", "Voo", "Magia Experimental", "Divinação", "Runas Antigas"];
    return Aluno;
}());
exports.Aluno = Aluno;
