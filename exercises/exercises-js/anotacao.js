alert("Olá Mundo!")

// string
let nome = "Marcelo"

// number
let idade = 19
let peso = 59.2

// boolean
let estaChovendo = true
let parouDeChover = false

// variavel vazia
let sobrenome

// preenchendo variavel vazia
sobrenome = "Duarte"

// imprimir mensagem
console.log(`Olá, meu nome é ${nome} e minha idade é ${idade} anos.`)

// EXEMPLO DE CÓDIGO
const chover = true

if (chover) {
    console.log("Não vou ao parque")
}
else {
    console.log("Não vou ao parque")
}

// um array basicamente é um objeto que suas propriedades são números
const array = ['1', '2', '3', '4', '5'] 
// outro jeito de ver um array
const arrayOutro = {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    4: 5
}

// Objeto comum
const marceloDuarte = {
    nome: 'Marcelo Duarte',
    idade: 19,
    telefone: '(51) 9 xxxx-xxxx',
    cpf: 'xxx.xxx.xxx-xx',
}

// Objeto dentro de objeto e array
const treinador = {
    nome: 'Marcelo',
    idade: 19,
    pokémons: ['Pikachu', 'Squirtle', 'Bulbassaur'],
    pokébolas: {
        pokébola: 10,
        ultraball: 5,
        masterball: 1,
    }
}

console.log(treinador.nome)
// => Marcelo

console.log(treinador.pokémons[0])
// => Pikachu

console.log(treinador.pokébolas.pokébola)
// => 10


// Reduzindo Arrow Function

// Quando temos apenas 1 referencia, NÃO PRECISAMOS utilizar ()
const sayHello = name => `Hello ${name}`
console.log(sayHello('Aluno'));

// Quando não temos 1 referencia, PRECISAMOS utilizar ()
const welcome = () => "Seja bem-vindo"

// 2. Utilização de Arrow Function vs. Function
// Filtrar idades maiores ou iguais a 18

const ages = [15, 17, 18, 29, 42];

// Arrow Function
const filteredAges = ages.filter((age) => age >= 18);

// Function Normal
const filteredAges2 = ages.filter(function (age) {
  return age >= 18;
});

console.log(filteredAges);
console.log(filteredAges2);

// 3. Copiando/Criando Backup de Array antes de modifica-lo

// Criando um Array
const numberList = [1, 3, 5, 4, 7, 8, 10, 11];

// Spread Operator, copia elementos e não a referência
const copyArray = [...numberList]

// Cortando números do array original
const evenNumber = numberList.splice(0, 2);

// Mostrando array original (modificado) e sua copia com spread
console.log(numberList);
console.log(copyArray);

// 4. Utilizando SOME (Retorna true ou false) vai dizer se há pelo menos 1 elemento que cumpra
// a condição especifícada

// Criando array de temperaturas
const temperature = [10, 20, 25, 30, 35, 43]

// Verificando se há alguma temperatura maior ou igual a 32 no array
const hasHotTemperature = temperature.some(num => num >= 32)

console.log(hasHotTemperature);
// >true

// 5. Utilizando Map
// É uma função em JavaScript que permite você fazer algo para cada item em uma lista (array) e criar uma nova lista com os resultados.

const numberListNew = [1, 2, 3, 4, 5, 6]

// Criando Arrow Function que utiliza o Math.pow para elevar cada número do array ao quadrado (2)
const resultMap = numberListNew.map(num => Math.pow(num, 2))

console.log(`Result Map: ${resultMap}`);

// 6. REDUCE
// Reduz o array para um valor, acumulando o total em uma variavel (ela se chama 'acumulator' neste caso)
// a segunda é o momento que ele está no array, o atual ('currentValue' neste caso)

const sum = numberListNew.reduce((acumulator, currentValue) => acumulator + currentValue)

console.log(sum);
// Mostrando passo a passo como funciona
// acumulator + currentValue

// >0 + 1
// >1 + 2
// >3 + 3
// >6 + 4
// >10 + 5
// >15 + 6

// Final log:
// >21

// Caso deseje, pode definir um valor inicial para o acumulador (neste caso 1), a operação segue a mesma forma da anterior
const sum2 = numberListNew.reduce((acumulator, currentValue) => acumulator + currentValue, 1)
console.log(sum2);

// REVISÃO

// Lista de frutas
const fruits = ['Maça', 'Banana', 'Laranja', 'Morango', 'Pêra']

// SLICE - Retorna o intervalo do indíce do array, contando á partir do inicio (não imprime o ultimo)
const selected = fruits.slice(1, 4)

console.log(selected);
// > ['Banana', 'Laranja', 'Morango] 

// SPREAD - Espalha o array para um novo (sem alterar o principal, cria uma copia independente)
const newFruits = [...fruits]

// For OF para elemento, For IN para indice
// FOR OF
for (const fruta of fruits) {
    console.log(fruta.nome);
}

// FOR IN
for (let index in fruits) {
    console.log(fruits[index]);
}
