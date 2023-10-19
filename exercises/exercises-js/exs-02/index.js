/*1. Crie uma variável JavaScript e coloque nela o valor de sua idade.
Mostre no html usando o document.write() o dado contido na
variável junto da frase "Minha idade é x anos", sendo "x" o valor
armazenado na sua variável. */
document.write(`Exercício 01</br>`)

const myage = 19
document.write(`Minha idade é ${myage} anos <br />`)

// documente.write (console.log que mostra na pág html)

/*2. Crie três variáveis JavaScript, em duas delas atribua os valores que
você quiser e na outra atribua o valor da soma das duas primeiras
variáveis. Apresente valor da soma no documento html junto da
frase "A resultado da soma de x e y é z", sendo x o valor armazenado
na primeira variável, y o valor armazenado segunda variável e z o
valor armazenado na terceira variável */

document.write(`<br>Exercício 02`)

const num1 = 10
const num2 = 20
const sum = num1 + num2
document.write(`<br>O resultado da soma de ${num1} e ${num2} é ${sum} <br />`)

/*3. Crie três variáveis, na primeira variável coloque o total de uma
compra, por exemplo 149.90. Na segunda variável coloque a
quantidade de parcelas, por exemplo 2. Na terceira variável coloque
o valor da parcela. Apresente no documento html as seguintes

informações:
"O valor total da compra foi R$_,_"
"Forma de pagamento: _x de R$_,_" */

document.write(`<br>Exercício 03`)

const total = 200.5
const installments = 24
const installmentsValue = total / installments

document.write(`<br>O valor total da compra foi R$ ${total.toString().replace(".", ",")} <br />`)
document.write(`Forma de pagamento é ${installments}x de R$ ${installmentsValue.toFixed(2).replace(".", ",")} <br />`)

/*4. Crie duas variáveis. Na primeira coloque um total de minutos e
defina um valor para ela (por exemplo, minutos = 120). 
Na segunda coloque o total em segundos destes minutos armazenados na
primeira variável. Apresente no documento html a seguinte informação:
"_ minutos equivale à _ segundos!" */

document.write(`<br>Exercício 04`)

const minutes = 120
const seconds = minutes * 60

document.write(`<br>${minutes} minutos equivale à ${seconds} segundos! <br />`)

/*5. Crie cinco variáveis. Na primeira armazene o nome de um aluno. Na
segunda, terceira e quarta coloque 3 notas (valores de 0 à 10).
Calcule a média das notas e armazene na quinta variável criada.
Apresente no documento html a seguinte informação:

"O aluno _____ ficou com média _,_" */

document.write(`<br>Exercício 05`)

const studentName = "Marcelo"
const grade1 = 5.5
const grade2 = 7.5
const grade3 = 10.0

const averange = ((5 + 7 + 10) * 3) / 10
document.write(`<br>O aluno ${studentName} ficou com média ${averange.toFixed(1).replace(",", ".")}<br />`)


/* 6. Desenvolva um algoritmo que armazene o valor 10 em uma variável
A e o valor 20 em uma variável B. A seguir (utilizando apenas
atribuições entre variáveis) troque os seus conteúdos fazendo com
que o valor que está em A passe para B e vice-versa. Ao final,
escrever os valores que ficaram armazenados nas variáveis. */

document.write(`<br>Exercício 06`)

let valueA = 10
let valueB = 20
const valueC = valueA

valueA = valueB 
valueB = valueC

document.write(`<br>Valores armazenados:<br>`)
document.write(`<br>Valor A: ${valueA} <br />`)
document.write(`<br>Valor B: ${valueB}<br />`)


/* 7. Desenvolva um algoritmo para ler o número total de eleitores de um
município, o número de votos brancos, nulos e válidos. Calcular e
escrever o percentual que cada um representa em relação ao total
de eleitores. */

document.write(`<br>Exercício 07`)

let votersTotal = Number(prompt(`Total de VOTOS:`))
let whiteVotes = Number(prompt(`Total de VOTOS BRANCOS:`))
let nullVotes = Number(prompt(`Total de VOTOS NULOS:`))

const percenValidatedVotes = ((votersTotal - whiteVotes - nullVotes) / votersTotal) * 100
const percenWhiteVotes = (whiteVotes / votersTotal) * 100
const percenNullVotes = (nullVotes / votersTotal) * 100

document.write(`<br>A quantidade TOTAL de VOTOS é: ${votersTotal.toFixed(2)} <br />`)
document.write(`<br>A Porcentagem de Votos VALIDADOS é: ${percenValidatedVotes.toFixed(2)}% <br />`)
document.write(`A Porcentagem de Votos BRANCOS é: ${percenWhiteVotes.toFixed(2)}% <br />`)
document.write(`A Porcentagem de Votos NULOS é: ${percenNullVotes.toFixed(2)}% <br />`)

/* 8. Desenvolva um algoritmo para ler dois valores e imprimir uma das
três mensagens a seguir:

a. ‘Números iguais’, caso os números sejam iguais;
b. ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
c. ‘Segundo maior’, caso o segundo seja maior que o primeiro. */

document.write(`<br>Exercício 08`)

const firstValue = 2
const secondValue = 1
let message

if (firstValue === secondValue) {
    message = `<br>Números Iguais <br />`
} else if (firstValue > secondValue){
    message = `<br>Primeiro é maior <br />`
} else {
    message = `<br>Primeiro é maior <br />`
} 

document.write(message)

/* 9. As maçãs desta estação custam R$0,30 se forem compradas
menos do que uma dúzia, e R$0,25 se forem compradas pelo menos
doze. Desenvolva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra. */

document.write(`<br>Exercício 09`)

const apple = 20

if (apple >= 12) {
    document.write(`<br> Valor total maçãs R$: ${(apple* 0.30).toFixed(2).replace(".", ",")}<br />`)

} else {
    document.write(`<br> Valor total maçãs R$: ${(apple* 0.25).toFixed(2).replace(".", ",")}<br />`)
}


/* 10. Escreva um algoritmo que tenha como valores de entradas o nome
e idade do usuário e imprima no terminal o nome, a idade e o ano
de nascimento do usuário. Ex: “Nome: Pedro, Idade: 22 anos, nasceu
em 2000”. OBS: Pegue o ano atual como base */

document.write(`<br>Exercício 10`)

const name = "Matheus"
const age = 17
document.write(`<br> Nome: ${name} Idade ${age} ano que nasceu ${2023 - age}<br />`)

/* 11. Crie um algoritmo que armazene um número inteiro positivo, e gere
um alerta com as seguintes mensagens:
a. “Número é par!”, se o valor armazenado for par;
b. “Número é impar!”, se o valor armazenado for ímpar; */

document.write(`<br>Exercício 11`)

const numberIsOdd = 10

if (numberIsOdd % 2 === 0) {
    document.write(`<br>O número ${numberIsOdd} é PAR! <br />`)
} else {
    document.write(`<br>O número ${numberIsOdd} é IMPAR! <br />`)
}

/* 12. Escreva um algoritmo que armazene o ano atual e o ano de
nascimento de uma pessoa. Escrever uma mensagem no console
que diga se ela poderá ou não votar este ano (não é necessário
considerar o mês em que a pessoa nasceu). */

document.write(`<br>Exercício 12`)

const actualYear = new Date().getFullYear()
const bornYear = 2004

const isAbleToVote = actualYear - bornYear

if (isAbleToVote >= 16) {
    document.write(`<br> Você ja completou 18 anos, você PODE VOTAR! <br />`)
} else {
    document.write(`<br> Você ainda não tem 18 anos, você NÃO PODE VOTAR! <br />`)
}