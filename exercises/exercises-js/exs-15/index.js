function exercise01() {
  const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99, 1290.00, 15000.00];

  const salarioAlto = salarios.findIndex(function(num) {
    return num >= 7000
  })
  console.log(salarioAlto);
}

function exercise02() {
  const rainbow = ["Vermelho", "Laranja", "Preto", "Azul"];

  rainbow.splice(2, 1)
  rainbow.splice(2, 0, "Amarelo", "Verde");
  rainbow.splice(0, 0, "Roxo");
  console.log(rainbow);
}

function exercise03() {
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
      }
      if (salarioUsuario < 2500) {
        salarioBaixo.push(novoUsuario);
        console.log("Usuário cadastrado com SUCESSO");
        continuar = false;
      } else {
        console.log("Número INVÁLIDO");
        continuar = false;
      }
    }
    if (trabalhaUsuario === false) {
      desempregado.push(novoUsuario);
      continuar = false;
    }

    // Verificar continuar
    let cadastrarOutro = confirm('Deseja cadastrar outro usuário?')
    if (cadastrarOutro === false) continuar = false;
    if (cadastrarOutro === true) continuar = true;
  }

  document.write(`<strong>Pessoas desempregadas:</strong><br />`);
  for (const usuario of desempregado) {
    document.write(`Nome: ${usuario.nome}, Idade: ${usuario.idade}<br />`);
  }

  document.write(`<strong>Pessoas empregadas com salários menores que 2500:</strong><br />`);
  for (const usuario of salarioBaixo) {
    document.write(`Nome: ${usuario.nome}, Idade: ${usuario.idade}, Salário: ${usuario.salario}<br />`);
  }

  document.write(`<strong>Pessoas empregadas com salários maiores que 2500:</strong><br />`);
  for (const usuario of salarioAlto) {
    document.write(`Nome: ${usuario.nome}, Idade: ${usuario.idade}, Salário: ${usuario.salario}<br />`);
  }
}