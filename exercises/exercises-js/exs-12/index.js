// Desenvolva um algoritmo para percorrer um vetor de 15 elementos
// inteiros já preenchido e imprima todos os valores pares.

function exercise01() {
  const vetor = [2, 5, 8, 12, 15, 20, 23, 28, 32, 35, 40, 44, 48, 50, 53];
  for (elemento of vetor) {
    if (vetor[elemento] % 2 === 0) {
      console.log(vetor[elemento]);
    }
  }
}

// Desenvolva um algoritmo para percorrer um vetor de 20 elementos
// inteiros e no final mostre a soma de todos os elementos.

function exercise02() {
  const vetores = [
    2, 5, 8, 12, 15, 20, 23, 28, 32, 35, 40, 44, 48, 50, 53, 62, 67, 70, 75, 80,
  ];
  let soma = 0;

  for (const elemento of vetores) {
    soma += elemento;
  }
  console.log("A soma de todos os elementos é: " + soma);
}

// Desenvolva um algoritmo que preenche um vetor com os 4
// primeiros números perfeitos.

function exercise03() {
  let numeroPerfeito = [];

  for (let num = 1; numeroPerfeito.length < 4; num++) {
    let soma = 0;
    for (let i = 1; i < num; i++) {
      if (num % i === 0) {
        soma += i;
      }
    }
    if (soma == num) {
      numeroPerfeito.push(soma);
    }
  }
  document.write(numeroPerfeito);
}

// Desenvolva um algoritmo que declare uma lista de 10 números e
// solicite um número para o usuário e no final informe se o número
// que o usuário digitou está dentro da lista ou não.

function exercise04() {
  const numeros = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
  const numeroUsuario = parseInt(prompt("Digite um número:"));

  let mensagem = "O número digitado não está na lista.";

  for (const num of numeros) {
    if (num === numeroUsuario) {
      mensagem = "O número digitado está na lista.";
    }
  }
  console.log(mensagem);
}

// Escreva um algoritmo que solicite ao usuário a entrada de 5 nomes,
// e que exiba a lista desses nomes na tela. Após exibir essa lista, o
// programa deve mostrar também os nomes na ordem inversa em
// que o usuário os digitou.

function exercise05() {
  let nomes = [];
  for (let i = 1; i <= 5; i++){
    nomes.push(prompt("Digite o nome #" + i + ":"))
  }
  console.log(nomes.reverse())
}

let selecionarExercicio = Number(
  prompt(
    "Digite o Exercício que deseja testar:\n1. Filmes (Array&Objeto)\n2. Alunos (Array&Objeto)\n3. Cadastro de pessoas\n4. Cadastro de Livros\n0. Sair"
  )
);

switch (selecionarExercicio) {
  case 0:
    break;
  case 1:
    exercise01();
    break;
  case 2:
    exercise02();
    break;
  case 3:
    exercise03();
    break;
  case 4:
    exercise04();
    break;
  default:
    document.write(`Digite um número até de 1 até 4`);
}
