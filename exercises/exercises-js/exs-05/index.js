// Exercício 01 - Contator com While
function exercise01() {
    const userNumber = prompt("Digite um número para iniciar a contagem:")
    
    if (userNumber < 0 || userNumber <= 0) {
        console.log("Por favor digite um número POSITIVO e MAIOR que zero!")
    }
    
    let initialNumber = 1
    let numbersForm = ""
    
    while (userNumber >= initialNumber) {
        numbersForm += initialNumber + " "
        initialNumber++
    }
    document.write(`${numbersForm} Acabou!`)
}

// Exercício 02 - Idades com Do While
function exercise02() {
    let ageUser = 0
    let stillProceed = false
    let ageTotal = 0
    let ageAverange = 0
    let ageCount = 0
    let ageMature = 0

    do {
        ageUser = Number(prompt('Digite o valor de uma idade:'))
        stillProceed = confirm('Deseja continuar adicionando idades?')

        if (ageUser >= 21){
            ageMature += 1
        }

        ageTotal += ageUser
        ageCount++

    } while(stillProceed)

    ageAverange = ageTotal / ageCount

    document.write(`Foram digitadas: ${ageCount} idades<br />
    A média dessas idades é: ${ageAverange.toFixed(0)}
    <br />Número de pessoas maiores de idade: ${ageMature}`)
}


// Exercício 03 - Tabuada com For
function exercise03() {
    const valorTabuada = Number(prompt("Digite o número da tabuada:"))

    for (let i = 0; i <= 10; i++) {
        let calculo = valorTabuada * i
        document.write(`5 X ${i} = ${calculo}`)
    }
}

// Exercício 04 Contagem com For
function exercise04() {
    const valorContagem = Number(prompt("Digite o número da contagem:"))

    if (valorContagem < 0 || valorContagem <= 0) {
        console.log("Por favor digite um número POSITIVO e MAIOR que zero!")
    }

    for (let i = 1; i <= valorContagem; i++) {
        console.log("Contando: " + i)
    }
    console.log("Acabou!")
}

let selecionarExercicio = Number(prompt("Digite o Exercício que deseja testar:\n1. Contator com While\n2. Idades com Do While\n3. Tabuada com For\n4. Contagem com For\n0. Sair"))


switch (selecionarExercicio) {
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
    default:
        document.write(`Digite um número até de 1 até 4`)
}