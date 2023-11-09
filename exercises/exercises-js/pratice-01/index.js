// Criar função para calcular a média de 2 valores
function pratice01() {
  let media;

  function calcularMedia(val1, val2) {
    media = (val1 + val2) / 2;
    return media;
  }

  console.log(calcularMedia(1, 2));
}

// Criar uma função que multiplica um número por 2.
function pratice02() {
  let multiplicacao;

  function multiplicar(valor) {
    multiplicacao = valor * 2;
    return multiplicacao;
  }
  console.log(multiplicar(10));
}

// Criar uma função para incrementar um contador
function pratice03() {
  let contador = 0;

  function incrementarContador(valor) {
    contador++;
  }

  // Exemplo de uso da função
  incrementarContador();
  console.log(contador); // Isso imprimirá 1

  incrementarContador();
  console.log(contador); // Isso imprimirá 2
}

// Desenvolver uma função em JS que receba um array de notas, calcule a média das notas e determine se o aluno foi aprovado ou reprovado, com base em uma média mínima de 7.

function pratice04() {
  function calcularAprov(notas) {
    if (notas.length === 0) {
      return "Você não inseriu notas válidas";
    }

    let somaNotas = 0;
    for (nota of notas) {
      somaNotas += nota;
    }

    const media = somaNotas / notas.length;

    if (media >= 7) {
      return `Aluno APROVADO com Média: ${media.toFixed(2)}`;
    } else {
      return `Aluno REPROVADO com Média: ${media.toFixed(2)}  `;
    }
  }
  const notasTrimestre = [9, 8, 10];
  const resultado = calcularAprov(notasTrimestre);
  console.log(resultado);
}

function pratice05() {
  // Metodos de array
  const numeros = [1, 2, 3, 4, 5];

  function forEachComFunction() {
    // function com forEach

    numeros.forEach(function (num) {
      console.log(num * 2);
    }); // este ultimo parenteses significa que esse é o intervalor que o forEach ira executar!
  }

  function arrowFunctionComForEach() {
    // Arrow Function com forEach faz o mesmo que o exemplo acima, porém aqui não precisamos dizer que é uma função, apenas passamos o parâmetro

    numeros.forEach((num2) => {
      console.log(num2 * 2);
    });
  }
}

function pratice06() {
  const frutas = ["Morango", "Uva", "Maçã"];

  // O forEach sempre funciona no mesmo padrão (elemento, indice, array):

  // Elemento: é o primeiro parâmetro, vai mostrar o elemento do Array
  // Indice: é o segundo parâmetro, vai mostrar o indice (posição) do elemento do array
  // Array: é o terceiro parâmetro, vai mostrar o Array completo

  //exemplo de uso:
  frutas.forEach((elemento, indice, array) => {
    console.log(`#${indice}: ${elemento}`);
    console.log(array);
  });
}
pratice07()
function pratice07() {
  const pessoas = [
    { nome: "João", sexo: "M", salario: 2500 },
    { nome: "Maria", sexo: "F", salario: 3200 },
    { nome: "Pedro", sexo: "M", salario: 2000 },
    { nome: "Ana", sexo: "F", salario: 2800 },
    { nome: "Carlos", sexo: "M", salario: 3500 }
  ]
  
  // Utilizando forEach para exibir os nomes:
  console.log("== Nomes ==");
  pessoas.forEach(function(pessoa) {
    console.log(pessoa.nome);
  })
  
  // Usando findIndex para encontrar índice do primeiro homem:
  console.log("== Primeiro Homem (indice) ==");
  const indicePrimeiroHomem = pessoas.findIndex(function(pessoa){
    return pessoa.sexo === "M";
  })
  console.log(indicePrimeiroHomem);
  
  // Utilizando find para encontrar a primeira mulher:
  console.log("== Primeira Mulher ==");
  const primeiraMulher = pessoas.find(function (pessoa) {
    return pessoa.sexo === "F"
  })
  console.log(primeiraMulher);

  // Usando filter para encontrar pessoas com salário maior que 2500:
  console.log("== Salário >= R$2500 ==");
  pessoas.filter(function (pessoa) {
    if (pessoa.salario > 2500) {
      console.log(pessoa.nome);
      console.log(`R$${pessoa.salario}\n`);
    }
  })
  // Dado um array de números, exiba cada número multiplicado por 3 no console.
  // Dado um array de idades, crie um novo array contendo apenas as idades maiores ou iguais a 18.
  // Dado um array de produtos, encontre o primeiro produto que tenha o preço menor que 50.
  // Dado um array de nomes, encontre o índice do primeiro nome que tenha mais de 6 caracteres.
  
}

// Dado uma lista de números, multiplique todos por 3 e imprima no console
function praticeExtra01() {
  let arrayNumeros = [1, 2, 3, 4, 5]

  arrayNumeros.forEach((num) => {
      num *= 3
      console.log(num);
  })
}

// Com um array de números mostre apenas os maiores ou iguais á 18
function praticeExtra02() {
  let idades = [12, 16, 18, 22, 35, 48]
  let maiorIdade = []

  idades.forEach((num) => {
      if (num >= 18) {
          maiorIdade.push(num)
      }
  })
  console.log(`Array de Idades: ${idades}`);
  console.log(`Maiores de idade: ${maiorIdade}`);
}

// Dado os precos de alguns produtos, encontre o que custa menos de 50 e imprima no console
function praticeExtra03() {
  const produtos = [{
    nome: 'TV 4K Samsung NEO QLED',
    preco: 2500
}, {
  nome: 'Playstation 5',
  preco: 3899
}, {
  nome: 'Camiseta (Promoção)',
  preco: 50
}, {
  nome: 'Xbox Series X',
  preco: 3500
}]

  const achar50 = produtos.find((produto) => produto.preco === 50)
  const indexAchar50 = produtos.findIndex((produto) => produto.preco === 50)
  console.log(`O item com valor 50: ${achar50.nome}, ele está na posição: ${indexAchar50} do seu array`);
}

// De um array de nomes imprima no console o índice do maior nome
function praticeExtra04() {
  const arrayNomes = ['Jorge', 'Maria', 'Paulo', 'Andre', 'Marcelo']

  const nomeGrande = arrayNomes.findIndex((nome) => nome.length >= 6)
  console.log(`${arrayNomes[nomeGrande]} é o maior nome do seu array e ele se encontra no índice: ${nomeGrande}, `);
}