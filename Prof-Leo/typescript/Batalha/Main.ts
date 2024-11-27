import { Guerreiro } from "./Guerreiro";
import { Mago } from "./Mago";
import { Personagem } from "./Personagem";

let mago1 = new Mago("Ronaldinho")
let guerreiro1 = new Guerreiro("alexandre o grande")

function verificaMorte(personagem: Personagem){
    return personagem.getVida() > 0
}


let combateRolando: boolean = true

while(combateRolando){
    mago1.atacar(guerreiro1)
    if (!verificaMorte(guerreiro1)){
        combateRolando = false
        console.log(`${guerreiro1.getNome()} morreu`)
        break
    } else {
        console.log(`${mago1.getNome()} atirou magiazinha em ${guerreiro1.getNome()}`)
    }

    guerreiro1.atacar(mago1)
    if (!verificaMorte(mago1)){
        combateRolando = false
        console.log(`${mago1.getNome()} morreu`)
        break
    } else {
        console.log(`${guerreiro1.getNome()} afundou a cabeça de ${mago1.getNome()}`)
    }
}
