valorSaque = parseInt(prompt("Digite o valor para saque:"))

let nota50 = 0
let nota10 = 0
let nota5 = 0
let nota1 = 0

console.log(`Valor para saque: GC$${valorSaque}`);

while (valorSaque > 0) {
    if (valorSaque >= 50) {
        valorSaque -= 50
        nota50++
    } else if (valorSaque >= 10) {
        valorSaque -= 10
        nota10++
    } else if (valorSaque >= 5) {
        valorSaque -= 5
        nota5++
    } else if (valorSaque >= 1) {
        valorSaque -= 1
        nota1++
    }
}

console.log(`GC$ 50,00 -> ${nota50}`)
console.log(`GC$ 10,00 -> ${nota10}`)
console.log(`GC$ 5,00 -> ${nota5}`)
console.log(`GC$ 1,00 -> ${nota1}`)