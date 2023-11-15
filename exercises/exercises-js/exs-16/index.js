// CRUD Cadastro de veículos

//Definições básicas
let continuar = true;
const dadosVeiculos = [
  {
    id: 1699994316651,
    modelo: "Onix",
    marca: "Chevrolet",
    ano: 2021,
    cor: "Preto",
    preco: 80000,
  },
  {
    id: Date.now() + 1,
    modelo: "Celta",
    marca: "BMW",
    ano: 2010,
    cor: "Roxo",
    preco: 20000,
  },
  {
    id: Date.now() + 1,
    modelo: "Celta",
    marca: "BMW",
    ano: 2012,
    cor: "Roxo",
    preco: 500000,
  },
  {
    id: Date.now() + 1,
    modelo: "Celta",
    marca: "BMW",
    ano: 2015,
    cor: "Roxo",
    preco: 35000,
  },
  {
    id: Date.now() + 2,
    modelo: "Fusca",
    marca: "Volkswagen",
    ano: 1986,
    cor: "Azul",
    preco: 18000,
  },
];

// Create
// Utilizar algo chamado sort
function cadastrarVeiculo() {
  let seguir = true;

  while (seguir) {
    const modelo = prompt("Qual o MODELO do seu veículo?\n0. Voltar");
    if (modelo == 0) return

    const marca = prompt("Qual a MARCA do seu veículo?").toLowerCase();
    const ano = Number(prompt("Qual o ANO do seu veículo?"));
    const cor = prompt("Qual a COR do seu veículo?");
    const preco = parseFloat(prompt("Qual o PREÇO do seu veículo?"));

    if (modelo.length <= 1 || marca.length <= 2 || cor.length <= 2)
      return console.error(
        "Não foi possivel concluír seu cadastro. Modelo, marca ou cor inválidos."
      );

    if (isNaN(ano) || isNaN(preco))
      return console.error(
        "Não foi possivel concluír seu cadastro, Ano ou Preço inválidos"
      );

    const novoVeiculo = {
      id: Date.now(),
      modelo: modelo,
      marca: marca,
      ano: ano,
      cor: cor,
      preco: preco,
    };
    dadosVeiculos.push(novoVeiculo);

    // Mostrar para o user
    // # Fazer lista organizada (prj1 - 3ktalentos)
    console.log(`Veículo cadastrado com SUCESSO:`);
    console.log(`Modelo: ${novoVeiculo.modelo}`);
    console.log(`Marca: ${novoVeiculo.marca}`);
    console.log(`Ano: ${novoVeiculo.ano}`);
    console.log(`Cor: ${novoVeiculo.cor}`);
    console.log(`Preço: R$${novoVeiculo.preco}`);

    seguir = confirm("Deseja Adicionar outro veículo?");
  }
}

// Read
function listarVeiculos() {
  let numeroMaior = 13;
  for (let carro of dadosVeiculos) {
    if (String(carro.id).length > numeroMaior) {
      numeroMaior = String(carro.id).length;
    }
  }

  // Ordenando por preço
  dadosVeiculos.sort(function (a, b) {
    return a.preco - b.preco;
  });

  const arrayComplementado = `${"ID".padEnd(
    numeroMaior
  )} | Modelo       | Marca        | Ano  | Cor    | Preço       `;
  console.log(arrayComplementado);
  console.log("-".padEnd(arrayComplementado.length, "-"));

  for (let carro of dadosVeiculos) {
    console.log(
      `${String(carro.id).padEnd(numeroMaior)} | ${carro.modelo.padEnd(
        12
      )} | ${String(carro.marca).padEnd(12)} | ${String(carro.ano).padEnd(
        4
      )} | ${String(carro.cor).padEnd(6)} | R$ ${String(carro.preco).padEnd(
        12
      )}`
    );
  }
}

// Filtrar por Marca
function filtrarMarca() {
  const marcaUsuario = prompt("Qual MARCA deseja consultar?\n0. Voltar").toLowerCase();
  if (marcaUsuario === 0) return;

  let acharMarca = dadosVeiculos.filter(
    (carro) => carro.marca === marcaUsuario
  );

  // Ordenando por preço
  acharMarca.sort(function (a, b) {
    return a.preco - b.preco;
  });

  if (acharMarca.length > 0) {
    console.log("Veículos encontrados:");

    for (let carro of acharMarca) {
      console.log(carro);
    }
  } else {
    console.log("Nenhum veículo encontrado para a marca informada.");
  }
}

// Update
function atualizarVeiculo() {
  const idVeiculo = Number(prompt("Digite o ID do seu veículo:\n0. Voltar"));
  if (idVeiculo === 0) return;

  let indiceAchado = false;
  const indiceVeiculo = dadosVeiculos.findIndex((carro) => {
    if (carro.id === idVeiculo) {
      indiceAchado = true;
    }
    return;
  });

  if (indiceAchado) {
    const novaCor = prompt("Digite a nova COR do seu veículo:");
    const novoPreco = parseFloat(prompt("Digite o novo PREÇO do seu veículo:"));

    // # Este if diz que se o novaCor der NEGATIVO para é um numero (!isNaN) entra no IF
    if (!isNaN(novaCor) || isNaN(novoPreco))
      return console.error("Valor inválido.");

    const confirmarAlteracao = confirm(
      `Nova COR: ${novaCor} | Novo PREÇO: ${novoPreco}\nConfirmar novas informações?`
    );

    if (confirmarAlteracao) {
      console.log("Veiculo atualizado com SUCESSO!");
      dadosVeiculos[indiceVeiculo].cor = novaCor;
      dadosVeiculos[indiceVeiculo].preco = novoPreco;

      console.log(listarVeiculos());
    } else return console.log("Atualização cancelada pelo usuário.");
  } else return console.log("Veículo, não encontrado.");
}

// Delete
function deletarVeiculo() {
  const idVeiculo = Number(prompt("Digite o ID do seu veículo:\n0. Voltar"));
  if (idVeiculo === 0) return;

  let indiceAchado = false;
  const indiceVeiculo = dadosVeiculos.findIndex((carro) => {
    if (carro.id === idVeiculo) return (indiceAchado = true);
  });
  if (indiceAchado) {
    const confirmarDeletar = confirm(
      `Achei o Veículo: ${dadosVeiculos[indiceVeiculo].modelo}, da cor: ${dadosVeiculos[indiceVeiculo].cor}\nDeseja Apaga-lo?`
    );

    if (confirmarDeletar) {
      dadosVeiculos.splice(indiceVeiculo, 1);
      return console.log("Veículo deletado com SUCESSO.");
    }
    if (!confirmarDeletar)
      return console.log("Operação cancelada pelo usuário.");
  } else return console.error("Veículo, não encontrado.");
}

// Sair
function sair() {
  continuar = false;
  document.write("Tchau! Para reiniciar, atualize a aba do navegador.");
}

// Loop para perguntar ao usuário
while (continuar) {
  // Formatar pergunta
  let pergunta = "CADASTRO DE VEÍCULOS\n";
  pergunta += "---------------------------\n";
  pergunta += "Escolha uma opção:\n";
  pergunta += "1. Cadastrar Veículo\n";
  pergunta += "2. Listar Veículos\n";
  pergunta += "3. Procurar Veículo\n";
  pergunta += "4. Atualizar Veículo\n";
  pergunta += "5. Deletar Veículo\n";
  pergunta += "6. Sair";

  // Guardar resposta
  let resposta = Number(prompt(pergunta));

  // Identificar resposta e chamar função
  switch (resposta) {
    case 1:
      cadastrarVeiculo();
      break;
    case 2:
      listarVeiculos();
      break;
    case 3:
      filtrarMarca();
      break;
    case 4:
      atualizarVeiculo();
      break;
    case 5:
      deletarVeiculo();
      break;
    case 6:
      sair();
      break;
  }
}
