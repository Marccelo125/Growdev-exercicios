// EXERCÍCIO 1

// let alunoNota1 = 7
// let alunoNota2 = 5
// let alunoNota3 = 3

// let peso1 = 3
// let peso2 = 5
// let peso3 = 3

// const media = (alunoNota1 * peso1 + alunoNota2 * peso2 + alunoNota3 * peso3) / 10

// if (media >= 7) {
//     console.log(`APROVADO! Sua média total foi: ${media}`)
// } else {
//     console.log(`REPROVADO! Estude mais pois sua média total foi: ${media}`)
// }

// EXERCÍCIO 2
// Com a data de hoje 18/10/2023

// let anos = 35
// let meses = 10
// let dias = 18

// const idadeEmDias = (anos * 365) + (meses * 30) + dias
// const idadeEmMeses = anos * 30

// console.log(`${anos} anos você tem:\n
// ${idadeEmDias} Meses\n
// ${idadeEmMeses} Dias`)

// EXERCÍCIO 3
const num1 = 10
const num2 = 5

let operador = "+"
let resultado = "Operador Inválido"

if (operador === "+") {
    resultado = num1 + num2
}
if (operador === "-") {
    resultado = num1 - num2
}
if (operador === "*") {
    resultado = num1 * num2
}
if (operador === "/") {
    resultado = num1 / num2
}

console.log("Resultado:", resultado)