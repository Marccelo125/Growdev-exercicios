const data = [
  {
    nome: "Roger Medeiros",
    sexo: "M",
    salario: 3250,
  },
  {
    nome: "Carolina Silva",
    sexo: "F",
    salario: 1200,
  },
  {
    nome: "Cristina Avila",
    sexo: "F",
    salario: 8100,
  },
  {
    nome: "Gustavo Hoffman",
    sexo: "M",
    salario: 5200.35,
  },
  {
    nome: "Eva Trindade",
    sexo: "F",
    salario: 2501,
  },
  {
    nome: "Andre Mathias",
    sexo: "M",
    salario: 1750,
  },
  {
    nome: "Joice Castro da Silva",
    sexo: "F",
    salario: 3350.25,
  },
];

// 1. Imprima no console a quantidade de pessoas Total.
console.log(`O TOTAL de pessoas na lista: ${data.length}`);
console.log("============================================================");

// 2. Imprima no console a quantidade de pessoas pessoas do sexo Feminino.
const mulheres = data.filter((pessoa) => pessoa.sexo === "F");
console.log(`O TOTAL de pessoas do sexo Feminino: ${mulheres.length}`);
console.log("============================================================");

// 3. Imprima no console a soma do salário de todas as pessoas.
let salariosTotais = 0;
for (pessoa of data) salariosTotais += pessoa.salario;
console.log(`O TOTAL dos salários: ${salariosTotais}`);
console.log("============================================================");

// 4. Imprima no console a média do salário de todas as pessoas.
let mediaSalarios = (salariosTotais / data.length)
console.log(`A MÉDIA do salário de todas as pessoas é: ${mediaSalarios.toFixed(2)}`);
console.log("============================================================");

// 5. Imprima no console a soma do salário de todos as pessoas do sexo Masculino
let somaSalarioHomens = 0
const homens = data.filter((pessoa) => pessoa.sexo === "M");
for (homem of homens) somaSalarioHomens += homem.salario
// Outra maneira
// for (pessoa of data) if (pessoa.sexo === "M") somaSalarioHomens += pessoa.salario
console.log(`A SOMA do salário de todos os homens é: ${somaSalarioHomens.toFixed(2)}`);
console.log("============================================================");

// 6. Imprima no console a média do salário de todas as pessoas do sexo Masculino
somaSalarioHomens / homens.length
console.log(`A MÉDIA do salário de todos os homens é: ${somaSalarioHomens.toFixed(2)}`);
console.log("============================================================");

// 7. Utilize a função Some, para descobrir se existe algum salário
// superior a R$ 7.000, imprima verdadeiro no console caso exista, caso contrário falso.
const superior7k = data.some((pessoa) => pessoa.salario > 7000);
console.log(`Na lista há salario superior a R$7.000? ${superior7k}`);
console.log("============================================================");

// 8. Utilize a função findIndex, para descobrir a posição da pessoa de nome 'Eva Trindade'.
const acharEva = data.findIndex((pessoa) => pessoa.nome === "Eva Trindade")
console.log(`Eva Trindade se encontra no índice ${acharEva} da lista`);
console.log("============================================================");

// 9. Utilize a função filter, para filtrar todas pessoas que o nome possua o sobrenome "Silva".
const pessoasComSobrenomeSilva = data.filter((pessoa) => pessoa.nome.includes("Silva"))
console.log(`Estas são as pessoas com sobrenome Silva:`);
for (silva of pessoasComSobrenomeSilva) console.log(silva.nome);
console.log("============================================================");

// 10. Imprima os nomes utilizando o MAP
const imprimirNomesComMap = data.map(pessoa => pessoa.nome);
console.log("Imprimindo os nomes utilizando MAP");
console.log(imprimirNomesComMap);