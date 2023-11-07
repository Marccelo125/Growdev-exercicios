// Crie um objeto em JavaScript para colocar dois atributos de um
// produto. Atribua o preço e descrição do produto com o valor “90” e a
// descrição com o valor “Mouse”. Mostre no console o valor dos dois
// atributos.

function exercise01() {
  const produtos = {
    nome: "Mouse",
    preco: "90",
  };

  console.log(produtos.nome);
  console.log(produtos.preco);
}

// Crie um objeto em JavaScript para colocar 5 atributos de um
// notebook. Atribua os seguintes atributos:

// Processador = i7
// Memória = 16GB
// Preço = 5000
// HD = 1TB
// SSD = 256GB

// Por fim, mostre o nome e valor de cada atributo no console,
// exatamente como está na atividade.

function exercise02() {
  const notebook = {
    processador: "i7 10700",
    memoria: "16GB",
    preco: 5000,
    hd: "1TB",
    ssd: "256GB",
  };

  console.log(
    `Processador = ${notebook.processador}\nMemória = ${notebook.memoria}\nPreço = ${notebook.preco}\nHD = ${notebook.hd}\nSSD = ${notebook.ssd}`
  );
}

// Crie um objeto para colocar nome e duas notas. Atribua nome e
// duas notas para o primeiro objeto, que será nosso primeiro aluno.
// Agora crie mais um objeto para colocar informações do nosso
// segundo aluno. Mostre as informações de cada aluno no console.
// Mostre também a média do primeiro aluno e a média do segundo
// aluno. Por fim mostre a média desta turma de 2 alunos.

function exercise03() {
  const aluno1 = {
    nome: "Marcelo Duarte",
    nota1: 10,
    nota2: 9,
  };

  const aluno2 = {
    nome: "Jorge da Silva",
    nota1: 10,
    nota2: 9,
  };

  console.log(
    `O aluno ${aluno1.nome} obteve as seguintes notas: ${aluno1.nota1} e ${
      aluno1.nota2
    }. Portanto sua média é ${((aluno1.nota1 + aluno1.nota2) / 2).toFixed(2)}`
  );
  console.log(
    `O aluno ${aluno2.nome} obteve as seguintes notas: ${aluno2.nota1} e ${
      aluno2.nota2
    }. Portanto sua média é ${((aluno2.nota1 + aluno2.nota2) / 2).toFixed(2)}`
  );
}

// Crie um cadastro de pessoas onde o usuário informe o nome, idade
// e se está trabalhando ou não, se a pessoa estiver trabalhando

// pergunte para ele o salário que está ganhando. Para cada pessoa
// cadastrada, pergunte ao usuário se ele deseja continuar
// cadastrando ou não. No final, mostre as pessoas que estão
// desempregadas, as pessoas que estão empregadas separadas
// pelas que ganham mais que 2500 e menos que 2500.

// Exemplo de resultado:
// Pessoas desempregadas:
// Nome: Alessandro, Idade: 28
// Nome: Alessandro, Idade: 28

// Pessoas empregadas com salários menores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 1500
// Nome: Alessandro, Idade: 28, Salário: 2400

// Pessoas empregadas com salários maiores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 2700
// Nome: Alessandro, Idade: 28, Salário: 3000

function exercise04() {
  let continuar = true;

  const salarioAlto = []
  const salarioBaixo = []
  const desempregado = []

  while (continuar) {
    // Pedindo nome e idade
    const nomeUsuario = prompt("Informe o seu NOME:");
    const idadeUsuario = Number(prompt("Informe a sua IDADE:"));
    let salarioUsuario = 0;

    // Verificando se é maior de idade
    if (idadeUsuario < 18) {
      console.log("Operação CANCELADA, Usuário menor de idade");
      continuar = false;
      break;
    }

    // Verificando se trabalha
    const trabalhaUsuario = confirm("Você está trabalhando atualmente?");

    let novoUsuario = {
      nome: nomeUsuario,
      idade: idadeUsuario,
      trabalha: trabalhaUsuario,
      salario: salarioUsuario,
    };

    if (trabalhaUsuario === true) {
      // se trabalha qual o salario
      salarioUsuario = parseFloat(prompt("Qual o valor do seu SALÁRIO? R$")).toFixed(2);
      novoUsuario.salario = salarioUsuario

      if (salarioUsuario >= 2500) {
        salarioAlto.push(novoUsuario);
        console.log("Usuário cadastrado com SUCESSO");
        continuar = false;
      } else if (salarioUsuario < 2500) {
        salarioBaixo.push(novoUsuario);
        console.log("Usuário cadastrado com SUCESSO");
        continuar = false;
      } else {
        console.log("Número INVÁLIDO");
        continuar = false;
      }
    } else if (trabalhaUsuario === false) {
      desempregado.push(novoUsuario);
      continuar = false;
    }

    let cadastrarOutro = confirm('Deseja cadastrar outro usuário?')
    if (cadastrarOutro === false) {
      continuar = false;
    } else if (cadastrarOutro === true) {
      continuar = true;
    }
  }

  document.write(`<strong>Pessoas desempregadas:</strong><br />`);
  for (const usuario of desempregado) {
    document.write(`Nome: ${usuario.nome}, Idade: ${usuario.idade}<br />`);
  }
  document.write(`<strong>Pessoas empregadas com salários menores que 2500:</strong><br />`);
  for (const usuario of salarioBaixo) {
    document.write(`Nome: ${usuario.nome}, Idade: ${usuario.idade}<br />`);
  }
  document.write(`<strong>Pessoas empregadas com salários maiores que 2500:</strong><br />`);
  for (const usuario of salarioAlto) {
    document.write(`Nome: ${usuario.nome}, Idade: ${usuario.idade}<br />`);
  }
}

let selecionarExercicio = Number(
  prompt(
    "Digite o Exercício que deseja testar:\n1. Preço/Nome do produto\n2. Descrição Notebook\n3. Média dos Alunos\n4. Salarios Altos/Baixos e Desempregados\n0. Sair"
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
