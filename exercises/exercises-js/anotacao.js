// alert("Olá Mundo!")

// // string
// let nome = "Marcelo"

// // number
// let idade = 19
// let peso = 59.2

// // boolean
// let estaChovendo = true
// let parouDeChover = false

// // variavel vazia
// let sobrenome

// // preenchendo variavel vazia
// sobrenome = "Duarte"

// // imprimir mensagem
// console.log(`Olá, meu nome é ${nome} e minha idade é ${idade} anos.`)

// // EXEMPLO DE CÓDIGO
// const chover = true

// if (chover) {
//     console.log("Não vou ao parque")
// }
// else {
//     console.log("Não vou ao parque")
// }

// // um array basicamente é um objeto que suas propriedades são números
// const array = ['1', '2', '3', '4', '5'] 
// // outro jeito de ver um array
// const arrayOutro = {
//     0: 1,
//     1: 2,
//     2: 3,
//     3: 4,
//     4: 5
// }

// // Objeto comum
// const marceloDuarte = {
//     nome: 'Marcelo Duarte',
//     idade: 19,
//     telefone: '(51) 9 xxxx-xxxx',
//     cpf: 'xxx.xxx.xxx-xx',
// }

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
