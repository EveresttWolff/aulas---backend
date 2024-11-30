import { BasePersonagem } from "./BasePersonagem"
import { Personagem } from "./Personagem"
import { Ryu } from "./Ryu"
import { Ken } from "./Ken"
import { Blanka } from "./Blanka"
import { Zangief } from "./Zangief"
import { Honda } from "./Honda"
import { Bison } from "./Bison"
import { Cammy } from "./Cammy"
import { DeeJay } from "./DeeJay"
const ask = require ("readline-sync")

function selecionarPersonagem() {
  console.log("Selecione um personagem:")
  console.log("1. Ryu")
  console.log("2. Ken")
  console.log("3. Blanka")
  console.log("4. Zangief")
  console.log("5. Honda")
  console.log("6. Bison")
  console.log("7. Cammy")
  console.log("8. Dee Jay")

  let escolha = ask.questionInt("Escolha: ")

  switch (escolha) {
    case 1:
      return new Ryu()
    case 2:
      return new Ken()
    case 3:
      return new Blanka()
    case 4:
      return new Zangief()
    case 5:
      return new Honda()
    case 6:
      return new Bison()
    case 7:
      return new Cammy()
    case 8:
      return new DeeJay()
    default:
      console.log("Escolha inválida! O Ryu será selecionado por padrão.")
      return new Ryu()
  }
}

function iniciarBatalha(personagem1: Ryu, personagem2: Ryu): void {
  console.log("A batalha começou!")
  let turno = 1

  while (personagem1.getVida() > 0 && personagem2.getVida() > 0) {
    let atacante = turno % 2 === 1 ? personagem1 : personagem2
    let defensor = turno % 2 === 1 ? personagem2 : personagem1

    console.log(`${atacante.getNome()}, escolha seu ataque:`)
    console.log("1. Golpe Leve")
    console.log("2. Golpe Pesado")
    console.log("3. Golpe Especial")

    let escolha = ask.questionInt("Escolha: ")
    let dano = 0

    switch (escolha) {
      case 1:
        dano = atacante.golpeLeve()
        break
      case 2:
        dano = atacante.golpePesado()
        break
      case 3:
        dano = atacante.golpeEspecial()
        break
      default:
        console.log("Escolha inválida! Nenhum dano causado.")
    }

    defensor.setVida(defensor.getVida() - dano)
    console.log(`${atacante.getNome()} causou ${dano} de dano!`)
    console.log(`${defensor.getNome()} tem ${defensor.getVida()} de vida restante.`)

    turno++
  }

  let vencedor = personagem1.getVida() > 0 ? personagem1 : personagem2
  console.log(`A batalha terminou! O vencedor é ${vencedor.getNome()}!`)
}

let personagem1 = selecionarPersonagem()
let personagem2 = selecionarPersonagem()

iniciarBatalha(personagem1, personagem2)