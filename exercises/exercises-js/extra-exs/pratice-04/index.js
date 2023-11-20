// CRUD RESTAURANTE
// https://thin-board-3ae.notion.site/Atividade-gerenciamento-de-restaurante-763e04b02c2d4ca3a81ce25afc01c81e

const pratosCadastrados = [
  {
    nome: "lasanha",
    descricao: "Lorem ipsum",
    preco: "10",
    categoria: "prato principal",
    disponibilidade: true,
  },
  {
    nome: "macarrao",
    descricao: "Lorem ipsum",
    preco: "10",
    categoria: "prato principal",
    disponibilidade: false,
  },
  {
    nome: "churrasco",
    descricao: "Lorem ipsum",
    preco: "15",
    categoria: "prato principal",
    disponibilidade: true,
  },
];

function cadastrarPrato() {
  let continuarCadastro = true;
  while (continuarCadastro) {
    const nome = prompt("Insira o NOME do PRATO:").toLowerCase();
    if (isNaN(nome)) {
      console.error("NOME inválido");
      return;
    }

    for (prato of pratosCadastrados) {
      if (prato.nome === nome || nome.length <= 2) {
        console.error("Este prato já existe!");
        return;
      }
    }

    const descricao = prompt("Insira a DESCRIÇÃO do PRATO:");
    if (isNaN(descricao)) {
      console.error("DESCRIÇÃO inválida");
      return;
    }

    const preco = String(prompt("Insira o PREÇO do prato:"));
    if (preco.length < 1) {
      console.error("PREÇO inválido");
      return;
    }

    const categoria = prompt("Insira a CATEGORIA do PRATO:").toLowerCase();
    if (
      categoria !== "prato principal" ||
      categoria !== "entradas" ||
      categoria !== "sobremesas" ||
      nome.length <= 2
    ) {
      console.error("CATEGORIA inválida");
      return;
    }

    const disponibilidade = confirm("O prato está disponível?");

    pratosCadastrados.push({
      nome: nome,
      descricao: descricao,
      preco: preco,
      disponibilidade: disponibilidade,
    });
    console.log(pratosCadastrados);
    continuarCadastro = confirm("Deseja cadastrar outro prato?");
  }
}

function listarPratos() {
  lista = "";

  pratosCadastrados.forEach((prato) => {
    if (prato.disponibilidade) {
      lista += `\n Nome: ${
        prato.nome.charAt(0).toUpperCase() + prato.nome.substring(1)
      } | Descrição: ${prato.descricao} | Preço: ${prato.preco} \n`;
    }
  });
  alert(lista);
}

function buscarPrato() {
  let perguntaUsuario = String(prompt("Digite o Nome, Categoria ou Preço do prato").toLowerCase());

  for (prato of pratosCadastrados) {
    if (
      prato.nome.includes(perguntaUsuario) ||
      prato.categoria.includes(perguntaUsuario) ||
      prato.preco.includes(perguntaUsuario)
    ) {
      console.log(
        `\n Nome: ${
          prato.nome.charAt(0).toUpperCase() + prato.nome.substring(1)
        } | Descrição: ${prato.descricao} | Preço: ${prato.preco} \n`
      );
    }
  }
}

function atualizarPratos() {
  let nomeDoPrato = prompt(
    "Qual o NOME do prato que você deseja editar?\n0. Voltar"
  ).toLowerCase();

  if (nomeDoPrato == 0) {
    console.log("Voltando");
    return;
  }

  for (prato of pratosCadastrados) {
    if (prato.nome.includes(nomeDoPrato)) {
      let pergunta = Number(
        prompt(
          "O que você deseja editar deste prato:\n1. Nome\n2. Descrição\n3. Preço\n4. Categoria\n5. Disponibilidade\n0. Voltar"
        )
      );

      switch (pergunta) {
        case 1:
          prato.nome = prompt("Digite o novo NOME para o prato:");
          console.log(prato.nome);
          return;
        case 2:
          prato.descricao = prompt("Digite a nova DESCRIÇÃO para o prato:");
          console.log(prato.nome);
          console.log(prato.descricao);
          return;
        case 3:
          prato.preco = prompt("Digite o novo PREÇO para o prato:");
          console.log(prato.nome);
          console.log(prato.preco);
          return;
        case 4:
          prato.categoria = prompt("Digite a nova CATEGORIA para o prato:");
          console.log(prato.nome);
          console.log(prato.categoria);
          return;
        case 5:
          prato.disponibilidade = confirm(
            "Digite a DISPONIBILIDADE para o prato:"
          );
          console.log(prato.nome);
          console.log(prato.disponibilidade);
          return;
        case 0:
          console.log("Voltando");
          return;
        default:
          console.error("Digite um número de 1 á 5!");
          return;
      }
    } else return console.error("Prato não encontrado!");
  }
}

function excluirPrato() {
  let pratoExcluir = prompt(
    "Qual o NOME do prato que deseja excluir\n0. Voltar"
  ).toLowerCase();

  if (pratoExcluir == 0) {
    console.log("Voltando");
    return;
  }

  for (prato of pratosCadastrados) {
    if (prato.nome === pratoExcluir) {
      let indicePrato = pratosCadastrados.indexOf(prato);
      pratosCadastrados.splice(indicePrato, 1);
      console.log("Prato excluído com SUCESSO!");
      console.log(pratosCadastrados);
    }
  }
}

let selecionarFuncao = Number(prompt(
  `Bem-vindo\nO que você deseja?\n1. Cadastrar um Prato\n2. Listar os ${pratosCadastrados.length} pratos\n3. Buscar Prato\n4. Atualizar Prato\n5. Excluír Prato\n0. Sair`
));

switch (selecionarFuncao) {
  case 1:
    cadastrarPrato()
    break;
  case 2:
    listarPratos()
    break;
  case 3:
    buscarPrato()
    break;
  case 4:
    atualizarPratos()
    break;
  case 5:
    excluirPrato()
    break;
  case 0:
    break;
  default:
    console.log('Digite um número entre 1 e 5!');
    break;
}
