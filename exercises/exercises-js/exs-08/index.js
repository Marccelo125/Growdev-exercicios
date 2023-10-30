// 1. Faça um algoritmo que leia a idade de vários alunos de uma turma.
// O programa vai parar quando for digitada a idade 999. No final,
// mostre quantos alunos existem na turma e qual é a média de idade
// do grupo.

function exercise01() {
    let idade = 0
    let contadorAlunos = 0
    let totalIdade = 0
    
    
    while (idade != 999) {
        idade = Number(prompt("Digite a Idade:\n999 - Parar"))
        if (idade != 999) {
            totalIdade += idade
            contadorAlunos++
        }
    }

    document.write(`Total de alunos: ${contadorAlunos}<br />`)
    document.write(`Média das idades: ${totalIdade / contadorAlunos}<br />`)
}

// 2. Desenvolva um aplicativo que leia o salário e o sexo de vários
// funcionários. No final, mostre o total de salários pagos aos homens e
// o total pago às mulheres. O programa vai perguntar ao usuário se
// ele quer continuar ou não sempre que ler os dados de um
// funcionário.
function exercise02() {
    let continuar = true
    let salarioHomens = 0
    let salarioMulher = 0
    
    while (continuar) {
        let perguntaSexo = prompt("Você se identifica como Homem ou Mulher (M ou H)?").toUpperCase()
        if (perguntaSexo != "M" || perguntaSexo != "H" || perguntaSexo != "HOMEM" || perguntaSexo != "MULHER"){
            document.write(`Este número é inválido<br />`)
            return
        }
        if (perguntaSexo === "H" || perguntaSexo === "HOMEM") {
            let perguntaSalario = parseInt(prompt("Qual o seu salario? R$"))
            salarioHomens += perguntaSalario
        } else if (perguntaSexo === "M" || perguntaSexo === "MULHER") {
            let perguntaSalario = parseInt(prompt("Qual o seu salario? R$"))
            salarioMulher += perguntaSalario
        }
        continuar = confirm ("Deseja continuar?")
    }
    document.write(`Total de salários pagos aos HOMENS: ${salarioHomens.toFixed(2)}<br />`)
    document.write(`<br />Total de salários pagos as MULHERES: ${salarioMulher.toFixed(2)}`)
}

// 3. Crie um algoritmo que leia o valor inicial da contagem, o valor final e
// o incremento, mostrando em seguida todos os valores no intervalo:
// Ex:
// Digite o primeiro Valor: 3
// Digite o último Valor: 10
// Digite o incremento: 2
// Contagem: 3 5 7 9 Acabou!
function exercise03() {
    const valorInicial = Number(prompt("Digite o valor INICIAL da contagem:"))
    const valorFinal = Number(prompt("Digite o valor FINAL da contagem:"))
    const valorIncremento = Number(prompt("Digite o valor de INCREMENTO da contagem:"))
    
    document.write("Contagem: ")
    for (let valor = valorInicial; valor <= valorFinal; valor += valorIncremento) {
        document.write(valor + " ")
    } 
    document.write(valorFinal)
    document.write(" Acabou!")
}


// 4. Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar
// descontos para todos, mas especialmente para mulheres. Faça um
// programa que leia nome, sexo e o valor das compras do cliente e
// calcule o preço com desconto. Sabendo que:
// a. Homens ganham 5% de desconto
// b. Mulheres ganham 13% de desconto
function exercise04() {
    const nomeUsuario = prompt("Digite seu NOME:")
    const generoUsuario = prompt("Você se identifica como Homem ou Mulher (H ou M)?").toUpperCase()
    const descontoHomem = 0.95
    const descontoMulher = 0.87

    let valorDaCompra = parseFloat(prompt("Qual o valor da sua compra R$:"))
    
    if (generoUsuario=== "H" || generoUsuario === "HOMEM") {
        valorDaCompra *= descontoMulher
        document.write(`Você possui o desconto MASCULINO o valor da sua final da sua compra é de R$ ${valorDaCompra}`)
    } else if (generoUsuario === "M" || generoUsuario === "MULHER") {
        valorDaCompra *= descontoHomem
        document.write(`Você possui o desconto FEMININO o valor da sua final da sua compra é de R$ ${valorDaCompra}`)
    } else {
        alert(`Este caracter é inválido<br />`)
        return
    }
}
// 5. Faça um algoritmo que pergunte a distância que um passageiro
// deseja percorrer em Km. Calcule o preço da passagem, cobrando
// R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais
// longas.
function exercise05() {
    const distancia = Number(prompt("Insita a distância em KM:"))

    if (distancia <= 200) {
        document.write(`Valor da passagem é R$ ${(distancia * 0.5).toFixed(2).replace(".", ".")}`)
    } else {
        document.write(`Valor da passagem é R$ ${(distancia * 0.45).toFixed(2).replace(".", ".")}`)
    }
}
// 6. Faça um programa que leia a largura e o comprimento de um
// terreno retangular, calculando e mostrando a sua área em m2. O
// programa também deve mostrar a classificação desse terreno, de
// acordo com a lista abaixo:
// Abaixo de 100m2 = TERRENO POPULAR
// Entre 100m2 e 500m2 = TERRENO MASTER
// Acima de 500m2 = TERRENO VIP
function exercise06() {
    let eRetangular = confirm("Seu terreno é retangular?")

    if (eRetangular === true){
        const altura = parseFloat(prompt("Digite a ALTURA do terreno:<br />"))
        const comprimento = parseFloat(prompt("Digite a LARGURA do terreno:<br />"))

        const area = altura * comprimento

        document.write(`Seu TERRENO possuí uma área de: ${area}m²<br />`)
        document.write("Classificação do seu Terreno: ")
        if (area < 100) {
            document.write("TERRENO POPULAR")
        }
        if (area >= 100 && area <= 500) {
            document.write("TERRENO MASTER")
        }
        if (area > 500) {
            document.write("TERRENO VIP")
        }
    }
}


let selecionarExercicio = Number(prompt("Digite o Exercício que deseja testar:\n1. Média Alunos\n2. Salário H/M\n3. Algoritimo de contagem\n4. Promoção H/M\n5. Calculo viagem\n6. Tipo do Terreno\n0. Sair"))

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
    default:
        document.write(`Digite um número até de 1 até 6`)
}