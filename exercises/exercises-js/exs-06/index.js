// Execício 01
// Desenvolva um algoritmo que leia a altura de 15 pessoas. Este
// programa deverá calcular e mostrar:
// a. A menor altura do grupo;
// b. A maior altura do grupo;

function exercise01() {
    let alturaMenor = Infinity
    let alturaMaior = -Infinity
    
    for (i = 0; i <= 5; i++) {
        const altura = Number(prompt("Digite a altura em METROS:"))
    
        if (altura > alturaMaior) {
            alturaMaior = altura
            console.log(`A MAIOR altura agora é: ${alturaMaior}`);
        } else if (altura < alturaMenor) {
            alturaMenor = altura
            console.log(`A MENOR altura agora é: ${alturaMenor}`);
        }
    }
    console.log(`A MAIOR altura FINAL foi: ${alturaMaior}`);
    console.log(`A MENOR altura FINAL foi: ${alturaMenor}`);
}

// Execício 02
// Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto
// Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
// Construa um algoritmo que calcule e imprima quantos anos serão
// necessários para que:
// a. Lucas e Pedro tenham o mesmo tamanho;
// b. Lucas seja maior que Pedro.

let pedroHeight = 1.5
let lucasHeight = 1.1
let years = 0

const pedroGrow = 0.02
const lucasGrow = 0.03

while (pedroHeight >= lucasHeight) {
    pedroHeight += pedroGrow
    lucasHeight += lucasGrow
    years++
}
console.log(`Pedro: ${pedroHeight.toFixed(2)}`);
console.log(`Lucas: ${lucasHeight.toFixed(2)}`);
console.log(`Lucas e Pedro tenham o mesmo tamanho: ${years - 1} Anos.`);
console.log(`Lucas seja maior que Pedro: ${years} Anos.`);



// Execício 03
// Execício 04
// Execício 05
// Execício 06
// Execício 07
// Execício 08