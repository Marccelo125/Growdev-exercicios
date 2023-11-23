const catalogo = [
  {
    id: 1,
    nome: "Pão Francês",
    estoque: 100,
    preco: 1.5,
  },
  {
    id: 2,
    nome: "Bolo de Chocolate",
    estoque: 50,
    preco: 15.0,
  },
  {
    id: 3,
    nome: "Croissant",
    estoque: 75,
    preco: 2.0,
  },
  {
    id: 4,
    nome: "Pão Integral",
    estoque: 80,
    preco: 2.0,
  },
  {
    id: 5,
    nome: "Rosquinha",
    estoque: 60,
    preco: 1.0,
  },
  {
    id: 6,
    nome: "Torta de Morango",
    estoque: 30,
    preco: 20.0,
  },
  {
    id: 7,
    nome: "Baguete",
    estoque: 40,
    preco: 3.0,
  },
  {
    id: 8,
    nome: "Cupcake de Baunilha",
    estoque: 25,
    preco: 4.0,
  },
  {
    id: 9,
    nome: "Pão de Queijo",
    estoque: 90,
    preco: 1.8,
  },
  {
    id: 10,
    nome: "Brownie",
    estoque: 35,
    preco: 5.0,
  },
  {
    id: 11,
    nome: "Biscoito Amanteigado",
    estoque: 55,
    preco: 2.5,
  },
];

const historicoDePedidos = [
  {
    cliente: "Jorge",
    nome: "Pão",
    estoque: 30,
    preco: 11.5,
    quantidade: 23,
    dataDoPedido: 1698634800000, // 30/out
  },
  {
    cliente: "Maria",
    nome: "Baguete",
    estoque: 30,
    preco: 11.5,
    quantidade: 23,
    dataDoPedido: 1688958000000, // 10/julho
  },
  {
    cliente: "Rosa",
    nome: "Cacetinho",
    estoque: 77,
    preco: 11.5,
    quantidade: 23,
    dataDoPedido: 1700593910935, // 21/nov
  },
];

function listarProdutos() {
  const tipoLista = Number(
    prompt(
      "Qual tipo de listagem deseja?\n1. Simplificada\n2. Ordem de preço\n3. Alfabética\n0. Voltar "
    )
  );

  if (tipoLista === 0) return;

  let produtosParaExibir = [...catalogo]; // Cria uma cópia do array original

  if (tipoLista === 2) {
    // Ordena por preço
    produtosParaExibir.sort(function (a, b) {
      return a.preco - b.preco;
    });
  } else if (tipoLista === 3) {
    // Ordena alfabeticamente pelo nome sem usar localeCompare
    produtosParaExibir.sort(function (a, b) {
      const nomeA = a.nome.toLowerCase();
      const nomeB = b.nome.toLowerCase();

      if (nomeA < nomeB) return -1;
      if (nomeA > nomeB) return 1;
      return 0;
    });
  }

  // Exibe os produtos
  for (let produto of produtosParaExibir) {
    console.log(produto);
  }
}

function adicionarProduto() {
  let continuar = true;
  while (continuar) {
    const nome = prompt("Digite o NOME do produto\n0. Voltar").toLowerCase();
    if (nome == 0) return alert("Cadastro cancelado");

    for (produto of catalogo)
      if (produto.nome === nome)
        return alert("Este produto já esta cadastrado!");
    const estoque = Number(prompt("Digite o ESTOQUE do produto:"));
    const preco = Number(prompt("Digite o PREÇO do produto:"));
    novoProduto = {
      id: Date.now(),
      nome: nome,
      estoque: estoque,
      preco: preco,
    };
    catalogo.push(novoProduto);

    continuar = confirm("Deseja cadastrar outro produto?");
  }
}

function editarProduto() {
  const nomeProduto = prompt("Digite o NOME do produto:").toLowerCase();
  if (nomeProduto == 0) return;

  for (produto of catalogo) {
    if (nomeProduto === produto.nome) {
      console.log(`Achei seu produto!`);
      const editarEstoque = Number(prompt("Digite a quantidade no estoque:"));
      if (editarEstoque < 0)
        return alert("O valor do estoque não pode ser menor do que 0!");

      const editarPreco = Number(prompt("Digite o novo preço:"));

      produto.estoque = editarEstoque;
      produto.preco = editarPreco;

      alert("Produto atualizado com Sucesso!");
      listarProdutos();
    }
  }
}

function removerProduto() {
  const nomeProduto = prompt("Digite o nome do produto:\n0. Voltar");
  if (nomeProduto == 0) return;

  let indiceAchado = false;
  const indiceProduto = catalogo.findIndex((produto) => {
    if (produto.nome === nomeProduto) return (indiceAchado = true);
  });
  if (indiceAchado) {
    const confirmarDeletar = confirm(
      `Achei o Produto: ${catalogo[indiceProduto].nome}, Estoque: ${catalogo[indiceProduto].estoque}\nDeseja Apaga-lo?`
    );

    if (confirmarDeletar) {
      catalogo.splice(indiceProduto, 1);
      listarProdutos();
      return alert("Produto deletado com SUCESSO.");
    }
    if (!confirmarDeletar) return alert("Operação cancelada pelo usuário.");
  } else return console.error("Produto, não encontrado.");
}

function pedirProduto() {
  const nomeProduto = prompt("Qual produto deseja pedir?\n0. Voltar");
  if (nomeProduto === "0") {
    alert("Pedido Cancelado!");
    return;
  }

  let produtoEncontrado = false;

  for (let produto of catalogo) {
    if (produto.nome === nomeProduto) {
      const quantidadeCliente = Number(
        prompt(
          `O produto: ${produto.nome} tem estoque de: ${produto.estoque}\nDigite a quantidade desejada:`
        )
      );

      if (quantidadeCliente <= produto.estoque && quantidadeCliente > 0) {
        produto.estoque -= quantidadeCliente;

        const date = new Date();
        const pedidoAtual = {
          nomeProduto: nomeProduto,
          quantidadeProduto: quantidadeCliente,
          precoProduto: produto.preco,
          dataCompra: {
            dia: date.getDate(),
            mes: date.getMonth() + 1,
            ano: date.getFullYear(),
          },
        };

        historicoDePedidos.push(pedidoAtual);

        console.log("Pedido realizado com sucesso!");
        console.log(historicoDePedidos);
        console.log(catalogo);
      } else alert("Quantidade do produto inválida!");
      produtoEncontrado = true;
      break;
    }
  }

  if (!produtoEncontrado) {
    alert("Nome do produto inválido!");
  }
}

function somarEstoque() {
  let valorTotal = 0;
  for (let produto of catalogo) {
    let valorProduto = produto.estoque * produto.preco;
    valorTotal += valorProduto;
  }
  console.log(valorTotal);
}

function gerarRelatorio() {
  const aPartirDia = prompt("Digite a partir de que dia: ");
  const aPartirMes = prompt("Digite a partir de que mês: ");
  const aPartirAno = prompt("Digite a partir de que ano: ");

  const ateDia = prompt("Digite até de que dia: ");
  const ateMes = prompt("Digite até de que mês: ");
  const ateAno = prompt("Digite até de que ano: ");

  const tempoAPartir = new Date(
    `${aPartirMes}/${aPartirDia}/${aPartirAno}`
  ).getTime();

  const tempoAte = new Date(`${ateMes}/${ateDia}/${ateAno}`).getTime();

  const pedidosFiltradosPorData = historicoDePedidos.filter((item) => {
    return item.dataDoPedido >= tempoAPartir && item.dataDoPedido <= tempoAte;
  });

  const sum = pedidosFiltradosPorData.reduce((acc, item) => {
    return (acc += item.preco);
  }, 0);

  return alert(
    `Valor faturamento R$${sum}\nQuantidade de pedidos ${pedidosFiltradosPorData.length}`
  );
}

let perguntaUsuario = Number(
  prompt(`
  Digite uma opção:\n1. Listar produto\n2. Cadastrar produto\n3. Atualizar produto\n4. Deletar produto\n5. Fazer um pedido\n6. Somar estoque produtos\n7. Gerar relatório\n0. Sair`)
);

switch (perguntaUsuario) {
  case 0:
    break;
  case 1:
    listarProdutos();
    break;
  case 2:
    novoProduto();
    break;
  case 3:
    editarProduto();
    break;
  case 4:
    removerProduto();
    break;
  case 5:
    pedirProduto();
    break;
  case 6:
    somarEstoque();
    break;
  case 7:
    gerarRelatorio();
    break;
  case 0:
    break;
  default:
    document.write(`Digite um número até de 1 até 7`);
}
