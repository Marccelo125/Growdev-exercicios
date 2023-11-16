// CRUD Cadastro de veículos

//Definições básicas
let continuar = false;
const dadosVeiculos = [
  {
    id: 1699994316651,
    modelo: "Onix",
    marca: "chevrolet",
    ano: 2021,
    cor: "preto",
    preco: 80000,
  },
  {
    id: Date.now() + 1,
    modelo: "Celta",
    marca: "bmw",
    ano: 2010,
    cor: "roxo",
    preco: 20000,
  },
  {
    id: Date.now() + 1,
    modelo: "Celta",
    marca: "bmw",
    ano: 2012,
    cor: "roxo",
    preco: 500000,
  },
  {
    id: Date.now() + 1,
    modelo: "Celta",
    marca: "bmw",
    ano: 2015,
    cor: "verde",
    preco: 35000,
  },
  {
    id: Date.now() + 2,
    modelo: "Carro",
    marca: "fiat",
    ano: 1986,
    cor: "azul",
    preco: 18000,
  },
];

// Create
// Utilizar algo chamado sort
function cadastrarVeiculo() {
  let seguir = true;

  while (seguir) {
    const modelo = prompt("Qual o MODELO do seu veículo?\n0. Voltar");
    if (modelo == 0) return;

    const marca = prompt("Qual a MARCA do seu veículo?").toLowerCase();
    const ano = Number(prompt("Qual o ANO do seu veículo?"));
    const cor = prompt("Qual a COR do seu veículo?");
    const preco = parseFloat(prompt("Qual o PREÇO do seu veículo?"));

    if (modelo.length <= 1 || marca.length <= 1 || cor.length <= 2)
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
    console.log(`ID: ${novoVeiculo.id}`);
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

  const arrayComplementado = `
  ${"ID".padEnd(
    numeroMaior
  )} | Modelo      | Marca       | Ano        | Cor        | Preço\n`;
  let resultado =
    arrayComplementado + "-".padEnd(arrayComplementado.length, "-") + "\n";

  for (let carro of dadosVeiculos) {
    resultado += `${String(carro.id).padEnd(
      numeroMaior
    )} | ${carro.modelo.padEnd(12)} | ${String(carro.marca).padEnd(
      12
    )} | ${String(carro.ano).padEnd(4)} | ${String(carro.cor).padEnd(
      6
    )} | R$ ${String(carro.preco).padEnd(12)}\n`;
  }

  // Exibir em um alert
  alert(resultado);
}

// Filtrar por Marca
function filtrarMarca() {
  const marcaUsuario = prompt(
    "Qual MARCA deseja consultar?\n0. Voltar"
  ).toLowerCase();
  if (marcaUsuario === 0) return;

  let acharMarca = dadosVeiculos.filter(
    (carro) => carro.marca === marcaUsuario
  );

  // Ordenando por preço
  acharMarca.sort(function (a, b) {
    return a.preco - b.preco;
  });

  if (acharMarca.length > 0) {
    alert("Veículos encontrados:");
    let numeroMaior = 13;
    for (let carro of dadosVeiculos) {
      if (String(carro.id).length > numeroMaior) {
        numeroMaior = String(carro.id).length;
      }
    }
    for (let carro of acharMarca) {
      alert(
        `ID: ${carro.id} | Modelo: ${carro.modelo} | Marca: ${carro.marca} | Ano: ${carro.ano} | Cor: ${carro.cor} | R$ ${carro.preco}\n`
      );
    }
  } else {
    console.log("Nenhum veículo encontrado para a marca informada.");
  }
}

// Update
function atualizarVeiculo() {
  const idVeiculo = Number(prompt("Digite o ID do seu veículo:\n0. Voltar"));
  if (idVeiculo === 0) return;

  let indiceVeiculo = -1;
  dadosVeiculos.some((carro, index) => {
    if (carro.id === idVeiculo) {
      indiceVeiculo = index;
      return true;
    }
    return false;
  });

  if (indiceVeiculo !== -1) {
    const novaCor = prompt("Digite a nova COR do seu veículo:");
    const novoPreco = parseFloat(prompt("Digite o novo PREÇO do seu veículo:"));

    // Correção: Corrigindo a condição de validação de entrada.
    if (isNaN(novaCor) && !isNaN(novoPreco)) {
      const confirmarAlteracao = confirm(
        `Nova COR: ${novaCor} | Novo PREÇO: ${novoPreco}\nConfirmar novas informações?`
      );

      if (confirmarAlteracao) {
        alert("Veículo atualizado com SUCESSO!");
        // Certifica-se de que o índice do veículo é válido antes de atualizar as propriedades.
        if (dadosVeiculos[indiceVeiculo]) {
          dadosVeiculos[indiceVeiculo].cor = novaCor;
          dadosVeiculos[indiceVeiculo].preco = novoPreco;
          listarVeiculos();
        } else console.error("Erro: Índice de veículo inválido.");
      } else alert("Atualização cancelada pelo usuário.");
    } else console.error("Valor inválido.");
  } else console.log("Veículo não encontrado.");
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
      return alert("Veículo deletado com SUCESSO.");
    }
    if (!confirmarDeletar) return alert("Operação cancelada pelo usuário.");
  } else return console.error("Veículo, não encontrado.");
}

// Filtrar Carros por Faixa de Preço: Crie uma função que recebe dois argumentos, preço mínimo e preço máximo, e retorna todos os carros cujo valor está dentro desta faixa.
function declararMinEMax() {
  const precoMax = Number(prompt("Digite o preço MÁXIMO:"));
  const precoMin = Number(prompt("Digite o preço MÍNIMO:"));

  if (!isNaN(precoMax) && !isNaN(precoMin)) filtrarPorPreco(precoMin, precoMax);
  else console.log("Valores inválidos");
}

function filtrarPorPreco(precoMin, precoMax) {
  const precoFiltrado = dadosVeiculos.filter(
    (carro) => carro.preco >= precoMin && carro.preco <= precoMax
  );
  console.log(precoFiltrado);
}

function veiculoMaisCaro() {
  const maisCaro = dadosVeiculos.reduce((acumulado, atual) => {
    return acumulado.preco > atual.preco ? acumulado : atual;
  });
  console.log(maisCaro);
}

// Agrupar Carros por Marca: Escreva uma função que agrupe carros por marca e retorne um objeto cujas chaves são os nomes das marcas e os valores são arrays de carros dessa marca.
function filtrarTodasMarcas() {
  const fiat = [];
  const bmw = [];
  const chevrolet = [];

  for (carro of dadosVeiculos) {
    if (carro.marca === "fiat") fiat.push(carro);
    if (carro.marca === "bmw") bmw.push(carro);
    if (carro.marca === "chevrolet") chevrolet.push(carro);
  }
  console.log(fiat);
  console.log(bmw);
  console.log(chevrolet);
}

// Calcular a Média de Preço dos Carros: Implemente uma função que calcule e retorne a média de preço de todos os carros da lista.
function mediaCarros() {
  let valorTotal = 0;
  for (carro of dadosVeiculos) {
    valorTotal += carro.preco;
  }
  let media = valorTotal / dadosVeiculos.length;
  console.log(media);
}

// Listar Carros por Ordem Alfabética: Desenvolva uma função que retorne os carros ordenados alfabeticamente por modelo
function listarAfababeticamente() {
  dadosVeiculos.sort((modelo1, modelo2) => {
    let a = modelo1.modelo.toUpperCase(),
      b = modelo2.modelo.toUpperCase();
    return a == b ? 0 : a > b ? 1 : -1;
  });
  console.log(dadosVeiculos);
}

// Contar Carros por Cor: Elabore uma função que conte quantos carros de cada cor existem na lista e retorne um objeto com esta contagem.
function filtrarPorCor() {
  let roxo = 0
  let preto = 0
  let verde = 0
  let azul = 0

  for (carro of dadosVeiculos) {
    if (carro.cor === 'roxo') roxo++
    if (carro.cor === 'verde') verde++
    if (carro.cor === 'preto') preto++
    if (carro.cor === 'azul') azul++
  }

  console.log(`Quantidade de carros ROXOS: ${roxo}`);
  console.log(`Quantidade de carros PRETOS: ${preto}`);
  console.log(`Quantidade de carros VERDES: ${verde}`);
  console.log(`Quantidade de carros AZUIS: ${azul}`);
}

// Buscar Carros por Características Específicas: Implemente uma função que permite buscar carros por múltiplos critérios, como cor, marca, ano, etc. Como se fosse uma barra de pesquisa.
function buscarCaracteristica() {
  const caracteristica = prompt('Qual a característica do carro?').toLowerCase()
  const procurarCarac = dadosVeiculos.filter((procurar) => {
    return (
      procurar.modelo === caracteristica ||
      procurar.marca === caracteristica ||
      procurar.ano === Number(caracteristica) ||
      procurar.cor === caracteristica ||
      procurar.preco == Number(caracteristica)
    );
  });
  if (procurarCarac.length <= 0) console.log("Nada foi encontrado");
  else console.log(procurarCarac);
}

// Sair
function sair() {
  continuar = false;
  document.write("Tchau! Para reiniciar, atualize a aba do navegador.");
}

// Loop para perguntar ao usuário
while (continuar) {
  // Bem-vindo ao sistema de CRUD de veículos:

  // No momento, o sistema tem X carros cadastrados

  // Escolha uma das opções para interagir com o sistema:

  // Formatar pergunta
  let pergunta = "Bem-vindo ao sistema de CRUD de veículos:\n";
  pergunta += `No momento, o sistema tem ${dadosVeiculos.length} carros cadastrados\n`;
  pergunta += "------------------------------------------------------------\n";
  pergunta += "Escolha uma das opções para interagir com o sistema:\n";
  pergunta += "1. Cadastrar veículo\n";
  pergunta += "2. Listar todos os veículos\n";
  pergunta += "3. Filtrar veículos por marca\n";
  pergunta += "4. Atualizar Veículo\n";
  pergunta += "5. Remover Veículo\n";
  pergunta += "6. Sair do sistema";

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
