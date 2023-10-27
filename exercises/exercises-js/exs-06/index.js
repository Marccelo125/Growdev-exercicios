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

function exercise02() {
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
}


// Execício 03
// Escreva um algoritmo que faça a tabuada de um número e
// apresente o resultado de acordo com o modelo a seguir, sabendo
// que o multiplicando deverá ser fornecido pelo usuário (n) e a
// quantidade de iterações também (i).

function exercise03() {
    const valorTabuada = Number(prompt("Digite o número da tabuada:"))
    const iteracoes = Number(prompt("Digite a quantidade de iterações:"))

    for (let i = 0; i <= iteracoes; i++) {
        let calculo = valorTabuada * i
        document.write(`${valorTabuada} X ${i} = ${calculo}`)
    }
}

// Execício 04
// Escreva um algoritmo que percorra os números inteiros entre 1 e 250
// e verifique quais números são múltiplos de 3 e quais são múltiplos
// de 5.

function exercise04() { 
    let multiplo3 = ""
    let multiplo5 = ""

    for(let i = 0; i < 250; i++) {
        if (i % 3 == 0) {
            multiplo3 += i + ", "
        }
        if (i % 5 == 0) {
            multiplo5 += i + ", "
        }
    }
    document.write (`<strong>Divisível por 3:</strong> ${multiplo3} <br />`)
    document.write (`<br /> <strong>Divisível por 5:</strong> ${multiplo5}`)
}

// Execício 05
// Faça um programa usando a estrutura “for” que leia um número
// inteiro positivo e mostre na tela uma contagem de 0 até o valor
// digitado.

function exercise05() {
    const numeroIntPositivo = Number(prompt("Digite um número INTEIRO E POSITIVO:"));
    let contagem = "Contando: ";

    for (let i = 0; i <= numeroIntPositivo; i++) {
        console.log(i)
        contagem += i + " ";
    }
    document.write(contagem)
}

// Execício 06
// Desenvolva um algoritmo que mostre uma contagem regressiva de
// 30 até 1, marcando os números que forem primos, exatamente
// como mostrado abaixo:

function exercise06() {
    for (let i = 30; i >= 1; i--) {
        let primo = true;
    
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                primo = false;
                break;
            }
        }
        if (primo) {
            contagem += `[${i}] ,`
        } else {
            contagem += i + ","
        }
    }
}


// Execício 07
// Desenvolva um algoritmo que leia 10 números, calcule e escreva a
// média aritmética dos valores lidos, a quantidade de valores
// positivos, a quantidade de valores negativos e o percentual de
// valores negativos e positivos.


function exercise07() {
    let totalSomado = 0
    let numerosPositivos = 0
    let numerosNegativos = 0
    
    for (let i = 0; i <= 10; i++) {
        let lerNumero = Number(prompt("Digite um número:"));
        totalSomado += lerNumero
    
        if (lerNumero >= 0) {
            numerosPositivos++
        } else {
            numerosNegativos++
        }
    }
    
    let mediaNumeros = totalSomado / 10
    let porcentagemPositivos = (numerosPositivos / 10) * 100
    let porcentagemNegativos = (numerosNegativos / 10) * 100
    
    console.log(`Média aritimetica: ${mediaNumeros}`)
    console.log(`Total de números POSITIVOS: ${numerosPositivos}`);
    console.log(`Total de números NEGATIVOS: ${numerosNegativos}`);
    console.log(`Média de números POSITIVOS: ${porcentagemPositivos}`);
    console.log(`Média de números NEGATIVOS: ${porcentagemNegativos}`);
}

let selecionarExercicio = Number(prompt("Digite o Exercício que deseja testar:\n1. Maior/menor Altura\n2. Pedro e Lucas Alturas\n3. Tabuada com limite\n4. Multiplos de 3 e 5\n5. Inteiro e positivo\n6. Contagem regressiva (primos)\n7. Média aritimetica\n0. Sair"))

switch (selecionarExercicio) {
    case 0:
        break
    case 1:
        exercise01()
        break
    case 2:
        exercise02()
        break
    case 3:
        exercise03()
        break
    case 4:
        exercise04()
        break
    case 5:
        exercise05()
        break
    case 6:
        exercise06()
        break
    case 7:
        exercise07()
        break
    default:
        document.write(`Digite um número até de 1 até 7`)
}