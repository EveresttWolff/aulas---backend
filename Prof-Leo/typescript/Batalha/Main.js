"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mago_1 = require("./Mago");
var Mago_2 = require("./Mago");
var mago1 = new Mago_2.Mago("Ronaldinho");
var guerreiro1 = new Mago_1.Guerreiro("Alexandre o Grande");
function verificaMorte(personagem) {
    return personagem.getVida() > 0;
}
var combateRolando = true;
while (combateRolando) {
    mago1.atacar(guerreiro1);
    if (!verificaMorte) {
        combateRolando = false;
        console.log("".concat(guerreiro1.getNome, " morreu"));
        break;
    }
    else {
        console.log("".concat(mago1.getNome, " atirou magiazinha em ").concat(guerreiro1.getNome));
    }
    guerreiro1.atacar(mago1);
    if (!verificaMorte) {
        combateRolando = false;
        console.log("".concat(mago1.getNome, " morreu"));
        break;
    }
    else {
        console.log("".concat(guerreiro1.getNome, " afundou a cabe\u00E7a de ").concat(mago1.getNome));
    }
}
