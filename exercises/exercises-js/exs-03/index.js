function passOrNot() {
    const grade1 = parseFloat(prompt("Digite a PRIMEIRA NOTA:"))
    const grade2 = parseFloat(prompt("Digite a SEGUNDA NOTA:"))
    const grade3 = parseFloat(prompt("Digite a TERCEIRA NOTA:"))

    let gradeAverage = (grade1 + grade2 + grade3) / 3
    let newGrade
    let message
    
    if ((grade1 || grade2 || grade3) != Number) {
        message = ("Você não digitou um número. Tente novamente")
    }

    if ((grade1 || grade2 || grade3) > 10) {
        message = ("Você digitou um número acima de 10!")
    }

    if (gradeAverage >= 9) {
        message = (`Aprovado com nota exelente.\n 
        Nota Final: ${gradeAverage}`)
    } else if (gradeAverage >= 7 && gradeAverage <= 9) {
        message = (`Aprovado com uma nota boa.\n
        Nota Final: ${gradeAverage}`)
        message = (`Nota Final: ${gradeAverage}`)
    } else if (gradeAverage < 7){
        newGrade = parseFloat(prompt("Adicione a NOTA de RECUPERAÇÃO:"))
        gradeAverage = (grade1 + grade2 + grade3 + newGrade) / 4
        if (gradeAverage >= 6) {
            message = (`Aprovado na RECUPERAÇÃO.\n
            Nota Final: ${gradeAverage}`)
        } else if (gradeAverage < 6) {
            message = (`Reprovado, estude e pratique mais.\n
            Nota Final: ${gradeAverage}`)
        } else if (gradeAverage = NaN) {
            message = ("Você não digitou um número. Tente novamente")
        }
    }
    document.write(message)
}

function whatDayIsToday() {
    const dayOfWeek = parseInt(prompt("Digite o Dia da Semana:"))
    let dayName
    
    switch (dayOfWeek) {
        case 1:
            dayName = "Domingo"
            break
        case 2:
            dayName = "Segunda"
            break
        case 3:
            dayName = "Terça"
            break
        case 4:
            dayName = "Quarta"
            break
        case 5:
            dayName = "Quinta"
            break
        case 6:
            dayName = "Sexta"
            break
        case 7:
            dayName = "Sábado"
            break
        default:
            dayName = "Você deve digitar um valor entre 1 e 7."
    }
    document.write(`Hoje é: ${dayName}`)
}

function whatMonthIsThis() {
    const monthNumber = parseInt(prompt("Digite o número do mês:"))
    let monthName

    switch (monthNumber) {
        case 1:
            monthName = "Janeiro"
            break
        case 2:
            monthName = "Fevereiro"
            break
        case 3:
            monthName = "Março"
            break
        case 4:
            monthName = "Abril"
            break
        case 5:
            monthName = "Maio"
            break
        case 6:
            monthName = "Junho"
            break
        case 7:
            monthName = "Julho"
            break
        case 8:
            monthName = "Agosto"
            break
        case 9:
            monthName = "Setembro"
            break
        case 10:
            monthName = "Outubro"
            break
        case 11:
            monthName = "Novembro"
            break
        case 12:
            monthName = "Dezembro"
            break
        default:
            message = "Você deve digitar um valor de 1 a 12."
            break
    }
    if (monthNumber > 12) {
        document.write(message)
    } else {
        message = `O mês correspondente ao número ${monthNumber} é ${monthName}`
        document.write(message)
    }
}

let selectExercise = Number(prompt("Digite o Exercício que deseja testar:\n1. Calculo de Média\n2. Dia da Semana\n3. Nome do Mês\n0. Sair"))

switch (selectExercise) {
    case 0:
        break
    case 1:
        passOrNot()
        break
    case 2:
        whatDayIsToday()
        break
    case 3:
        whatMonthIsThis()
        break
    default:
        document.write(`Digite um número até de 1 até 3`)
}