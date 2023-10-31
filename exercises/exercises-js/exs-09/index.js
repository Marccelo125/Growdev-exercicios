// Crie uma variável para ler a idade de um motorista. Caso o
// motorista tenha idade maior ou igual a 18 anos imprime no console
// “Pode dirigir”, caso contrário imprima “Não pode dirigir”.

function exercise01() {
    let idadeMotorista = Number(prompt("Digite sua idade:"))
    
    if (idadeMotorista >= 18) {
        console.log("Pode dirigir")
    } else {
        console.log("Não pode dirigir");
    }
}

// Para o mesmo exercício acima insira mais uma variável a
// condicional, além de saber se o motorista tem 18 anos ou mais,
// temos que saber também se ele é habilitado para dirigir. Caso ele
// tenha idade maior ou igual a 18 anos e possua habilitação, insira no
// html “Pode dirigir” caso contrário imprima “Não pode dirigir”.

function exercise02() {
    let idadeMotorista = Number(prompt("Digite sua idade:"))

    if (idadeMotorista >= 18) {
        let possuiCnh = confirm("Você possui CNH para dirigir?")
        if (possuiCnh == true) {
            console.log("Pode dirigir")
        } else {
            console.log("Não pode dirigir");
        }
    } else {
        console.log("Não pode dirigir");
    }
}

// Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um
// número de 1 a 7 e imprimir no console o dia da Semana. Para este
// exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim
// por diante. Caso o número recebido não esteja neste intervalo
// imprimir “Dia não reconhecido”.

function exercise03() {
    let receberNumero = Number(prompt("Digite um NÚMERO de 1 á 7:"))
    let diaDaSemana

    if (receberNumero === 1) {
        diaDaSemana = "Hoje é: Domingo"
    } else if (receberNumero === 2) {
        diaDaSemana = "Hoje é: Segunda"
    } else if (receberNumero === 3) {
        diaDaSemana = "Hoje é: Terça"
    } else if (receberNumero === 4) {
        diaDaSemana = "Hoje é: Quarta"
    } else if (receberNumero === 5) {
        diaDaSemana = "Hoje é: Quinta"
    } else if (receberNumero === 6) {
        diaDaSemana = "Hoje é: Sexta"
    } else if (receberNumero === 7) {
        diaDaSemana = "Hoje é: Sábado"
    } else {
       diaDaSemana = "Número Digitado é inválido"
    }
    console.log(diaDaSemana)
}

// Reescreva o exercício 3, utilizando apenas o SWITCH.

function exercise04() {
    const diaDaSemana = parseInt(prompt("Digite o Dia da Semana:"))

    switch (diaDaSemana) {
        case 1:
            console.log("Hoje é: Domingo");
            break;
        case 2:
            console.log("Hoje é: Segunda");
            break;
        case 3:
            console.log("Hoje é: Terça");
            break;
        case 4:
            console.log("Hoje é: Quarta");
            break;
        case 5:
            console.log("Hoje é: Quinta");
            break;
        case 6:
            console.log("Hoje é: Sexta");
            break;
        case 7:
            console.log("Hoje é: Sábado");
            break;
        default:
            console.log("Você deve digitar um valor entre 1 e 7.");
    }
}

// Utilizando FOR, percorra os números de 1 a 10 e imprima no console
// os números pares.

function exercise05() {
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(`${i} é um número PAR!`);
        }
    }
}

// Insira no html 30 ( trinta ) números ímpares.

function exercise06() {
    for(let i = 1, contador = 1; contador <= 30; i += 2, contador++) {
            document.write(`${contador}. Número IMPAR: ${i}<br />`)
    }
}

// Utilizando do...while, imprima na tela a soma de todos os números
// entre 10 e 100.
function exercise07() {
    let numero = 10
    let soma = 0
    do {
        soma += numero
        numero++
    } while (numero <= 100)
    document.write(`${soma}<br />`)
}

// Crie uma variável para armazenar o salário do usuário e atribua um
// valor a essa variável. Crie a validação necessária:

// - Caso o salário seja MENOR que R$ 1.903,98, insira no html
// "ISENTO DE IR";
// - caso contrário insira "TRIBUTADO NO IR".

function exercise08() {
    let salarioUsuario = parseInt(prompt(`Digite o valor do seu salário:`).replace(",", "."))

    if (salarioUsuario < 1903.98) {
        document.write("ISENTO DE IR")
    } else if (salarioUsuario >= 1903.98) {
        document.write("TRIBUTADO NO IR")
    } else {
        document.write("Valor inválido")
    }
}

// Informe um valor a uma variável e imprima no console se o número
// é primo.

function exercise09() {
    let numeroUsuario = Number(prompt("Digite um número:"));
    let ePrimo = true;
  
    if (numeroUsuario <= 1) {
      ePrimo = false;
    } else {
      for (let i = 2; i < numeroUsuario; i++) {
        if (numeroUsuario % i === 0) {
          ePrimo = false;
          break;
        }
      }
    }
  
    if (ePrimo) {
      console.log(`O número ${numeroUsuario} É PRIMO`);
    } else {
      console.log(`O número ${numeroUsuario} NÃO É PRIMO`);
    }
}

// Tendo como entrada a altura e o sexo (codificado da seguinte
//     forma: 1 para sexo feminino e 2 para sexo masculino) de uma
//     pessoa, construa um programa que calcule e mostre seu peso ideal,
//     utilizando as seguintes fórmulas:
//     - para homens: (72.7 * Altura) – 58
//     - para mulheres: (62.1 * Altura) – 44.7

function exercise10() {
    let altura = Number(prompt("Digite sua altura em METROS:").replace(",", "."))
    let sexo = Number(prompt("Qual o seu sexo?\n1. Feminino\n2. Masculino"))
    let formula

    if (sexo == 1) {
        formula = (72.7 * altura) - 44.7
        console.log(`SEXO: FEMININO`)
        console.log(`O seu peso ideal é de: ${formula.toFixed(2)} KG`)
        
    } else if (sexo == 2) {
        formula = (62.1 * altura) - 58
        console.log(`SEXO: MASCULINO`)
        console.log(`O seu peso ideal é de: ${formula.toFixed(2)} KG`);
    } else {
        console.log(`Valor digitado inválido`);
    }
}

// Utilizando Switch, faça um programa que pergunte em que turno
// você estuda. Peça para digitar “M” para matutino ou “V” para
// vespertino ou “N” para noturno. Mostre um alerta com a mensagem
// “Bom dia!” ou “Boa tarde” ou “Boa Noite” ou “Valor inválido”,
// conforme o caso.

function exercise11() {
    let turnoEstudo = prompt("Em qual turno você estuda?\nMatutino (M)\nVespertino (V)\nNoturno (N)").toUpperCase()

    if (turnoEstudo == "MATUTINO" || turnoEstudo == "M") {
        alert("Bom Dia Estudante!")
    }else if (turnoEstudo == "VESPERTINO" || turnoEstudo == "V") {
        alert("Boa Tarde Estudante!")
    }else if (turnoEstudo == "NOTURNO" || turnoEstudo == "N") {
        alert("Boa Noite Estudante!")
    } else {
        alert("Valor inválido")
    }
}

// Para doar sangue é necessário ter entre 18 e 67 anos. Faça um
// programa que armazene a idade de uma pessoa e diga se ela pode
// doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E
// (&&).

function exercise12() {
    let idadeDoador = Number(prompt("Digite sua IDADE:"))

    if (idadeDoador >= 18 && idadeDoador <= 67) {
        alert("Você PODE doar sangue!")

    } else if (idadeDoador <= 18 || idadeDoador >= 67) {
        alert("Você NÃO PODE doar sangue!")
    } else {
        alert("Valor Inválido")
    }
}

// Faça um algoritmo que armazene um número e imprima os
// números ímpares entre 1 e o número armazenado.

function exercise13() {
    let numeroMax = Number(prompt("Digite o valor máximo para a contagem de ÍMPARES"))

    for (let i = 1; i <= numeroMax; i++) {
        if (i % 2 == 1) {
            document.write(`${i} é um número IMPAR!<br />`)
        }
    }
}

// Leia um número, utilizando WHILE multiplique este número por 3
// enquanto a soma seja menor que 500 e no final mostre qual o
// último valor

function exercise14() {
    const limite = 500
    let lerNumero = parseInt(prompt("Digite um valor:"))
    let soma = 0

    while (soma + lerNumero < limite) {
        lerNumero *= 3;
        soma += lerNumero;

        if (soma + lerNumero >= limite) {
            break
        }
    }
    document.write(`O valor final é: ${lerNumero}`)
}

// Crie um algoritmo que armazene três valores, para cada um dos
// lados de um triângulo: A, B e C. Verifique se os lados fornecidos
// formam realmente um triângulo. Se formar, deve mostrar no console
// o tipo de triângulo: isósceles, escaleno ou equilátero.
// a. Para verificar se os lados fornecidos formam um triângulo: A <
// B + C e B < A + C e C < A + B.
// b. Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou
// B=C);
// c. Triângulo escaleno: possui todos os lados diferentes (A<>B e
// B<>C e A<>C);
// d. Triângulo equilátero: possui todos os lados iguais (A=B e
// B=C);

function exercise15() {
    let ladoA = Number(prompt("Digite o valor do lado do triângulo:"));
    let ladoB = Number(prompt("Digite o valor de outro lado do triângulo:"));
    let ladoC = Number(prompt("Digite o valor de outro lado triângulo:"));
    let tipoDoTriangulo;
  
    if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
      document.write("Triângulo Válido<br />");
  
      if (ladoA === ladoB && ladoB === ladoC) {
        tipoDoTriangulo = "EQUILÁTERO";
      } else if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
        tipoDoTriangulo = "ESCALENO";
      } else {
        tipoDoTriangulo = "ISÓSCELES";
      }
      document.write(`Tipo do Triângulo: ${tipoDoTriangulo}<br />`);
    } else {
      document.write("Triângulo Inválido<br />");
    }
}

// Escreva um algoritmo que armazene o ano atual e o ano de
// nascimento de uma pessoa. Escrever uma mensagem no console
// que diga se ela poderá ou não votar este ano (não é necessário
// considerar o mês em que a pessoa nasceu).

function exercise16() {
    const anoAtual = Number(prompt("Digite o ano ATUAL:"))
    const anoNascimento = Number(prompt("Digite o seu ano de NASCIMENTO:"))

    if ((anoAtual - anoNascimento) >= 18) {
        document.write(`Idade atual: ${anoAtual - anoNascimento} Anos | você PODE VOTAR`)
    } else if ((anoAtual - anoNascimento) < 18) {
        document.write(`Idade atual: ${anoAtual - anoNascimento} Anos | você NÃO PODE VOTAR`)
    } else {
        document.write(`Os dados inseridos são inválidos`)
    }
}

// Escreva um algoritmo que armazene o número total de eleitores de
// um município, o número de votos brancos, nulos e válidos. Calcular
// e escrever o percentual que cada um representa em relação ao
// total de eleitores. O algoritmo deve fazer uma validação para que as
// porcentagens dos votos armazenados (brancos, nulos e válidos)
// respeitem o limite do número total de eleitores, ou seja, garantir que
// a soma dos votos brancos, nulos e válidos não seja maior que o
// número total de eleitores.

function exercise17() {
    let votosTotais = Number(prompt(`Digite o total de VOTOS:`))
    let votosBrancos = Number(prompt(`Digite o total de VOTOS BRANCOS:`))
    let votosNulos = Number(prompt(`Digite o total de VOTOS NULOS:`))

    if (votosBrancos >= votosTotais || votosNulos >= votosTotais || (votosNulos + votosBrancos) >= votosTotais) {
        document.write("Quantidade de votos INVÁLIDAS")
    } else {
        const percenValidatedVotes = ((votosTotais - votosBrancos - votosNulos) / votosTotais) * 100
        const percenvotosBrancos = (votosBrancos / votosTotais) * 100
        const percenvotosNulos = (votosNulos / votosTotais) * 100
        
        document.write(`A quantidade TOTAL de VOTOS é: ${votosTotais.toFixed(2)} <br />`)
        document.write(`A Porcentagem de Votos VALIDADOS é: ${percenValidatedVotes.toFixed(2)}% <br />`)
        document.write(`A Porcentagem de Votos BRANCOS é: ${percenvotosBrancos.toFixed(2)}% <br />`)
        document.write(`A Porcentagem de Votos NULOS é: ${percenvotosNulos.toFixed(2)}% <br />`)
    }
}

// Uma loja de eletrodomésticos estabeleceu as seguintes
// modalidades de pagamento para a venda de suas mercadorias:
// Escreva um algoritmo que armazene o preço de tabela e o número
// de vezes em que o pagamento será feito. Calcule o valor de cada
// parcela e o preço total da compra e imprima no console.

function exercise18() {
    const precoCompra = Number(prompt("Digite o valor total da compra?"))
    const metodoPagamento = Number(prompt("Selecione o método de pagamento:\n1. Á Vista (Desconto de 2.5%)\n2. 2 á 5 vezes (sem juros)\n3. 6 á 10 vezes (6% de juros)\n4. 11 á 15 vezes (13% de juros)"))
    let precoFinal = 0

    let pagAVista = precoCompra - ((2.5 / 100) * precoCompra)
    let pag2a5vz = precoCompra + 0;
    let pag6a10vz = precoCompra + ((6 / 100) * precoCompra)
    let pag11a15 = precoCompra + ((13 / 100) * precoCompra)

    if (metodoPagamento == 1) {
        precoFinal = pagAVista
    } else if (metodoPagamento == 2) {
        precoFinal = pag2a5vz
    } else if (metodoPagamento == 3) {
        precoFinal = pag6a10vz
    } else if (metodoPagamento == 4) {
        precoFinal = pag11a15
    } else {
        document.write(`Pagamento INVÁLIDO <br />`)
    }
    document.write(`O preço final de sua compra ficou: R$${precoFinal}`)
}

let selecionarExercicio = Number(prompt("Digite o Exercício que deseja testar:\n1. Idade Motorista\n2. Idade Motorista CNH\n3. Dia da semana\n4. ex 3 usando SWITCH\n5. PARES de 1 á 10 com FOR\n6. 30 Ímpares\n7. Soma entre 10 e 100\n8. Salario Tributado\n9. É primo\n10. Altura e Sexo\n11. M, V ou N Mensagem\n12. Doar sangue\n13. Impares numero armazenado\n14. Menor que 500\n15. Triangulos\n16. Pode Votar ou Não\n17. Total de Eleitores\n18. Compras com Descontos/Juros\n0. Sair"))


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
    case 8:
        exercise08()
        break
    case 9:
        exercise09()
        break
    case 10:
        exercise10()
        break
    case 11:
        exercise11()
        break
    case 12:
        exercise12()
        break
    case 13:
        exercise13()
        break
    case 14:
        exercise14()
        break
    case 15:
        exercise15()
        break
    case 16:
        exercise16()
        break
    case 17:
        exercise17()
        break
    case 18:
        exercise18()
        break
    default:
        document.write(`Digite um número até de 1 até 18`)
}