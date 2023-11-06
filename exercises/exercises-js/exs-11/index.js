// 0) Cadastro de produtos (nome, preço, categoria)
function pratice02() {
  const produtos = [
    { nome: "Smartphone", preco: 1500, categoria: "Eletrônicos" },
    { nome: "Notebook", preco: 2500, categoria: "Eletrônicos" },
    { nome: "Camiseta", preco: 120, categoria: "Vestuário" },
    { nome: "Torneira", preco: 600, categoria: "Luxo" },
  ];

  //Exibir
  for (let produto of produtos) {
    console.log(
      `Nome: ${produto.nome}, Preço: ${produto.preco}, Categoria: ${produto.categoria}`
    );
  }
}

// 1) Filmes (titulo, diretor, gênero) -> 5
function exercise01() {
  const filmes = [
    {
      titulo: "Jurassic Park",
      diretor: "Steven Spielberg",
      genero: "Ação/Aventura",
    },
    {
      titulo: "Batman",
      diretor: "Matt Reeves",
      genero: "Drama/Ação",
    },
    {
      titulo: "Titanic",
      diretor: "James Cameron",
      genero: "Drama",
    },
    {
      titulo: "John Wick",
      diretor: "Chad Stahelski",
      genero: "Ação",
    },
    {
      titulo: "Vingadores: Ultimado",
      diretor: "Anthony Russo & Joe Russo",
      genero: "Drama/Ação",
    },
  ];
}

// 2) Alunos (nome, idade, curso, nota) -> 5
function exercise02() {
  const alunos = [
    {
      nome: "Marcelo",
      idade: "19",
      curso: "Web Full Stack",
      nota: "10",
    },
    {
      nome: "Antônio",
      idade: "23",
      curso: "Medicina",
      nota: "9",
    },
    {
      nome: "Rosângela",
      idade: "31",
      curso: "Pedagogia",
      nota: "10",
    },
    {
      nome: "Jorge",
      idade: "25",
      curso: "Back End",
      nota: "8",
    },
    {
      nome: "Paulo",
      idade: "18",
      curso: "Front End",
      nota: "7",
    },
  ];
}

// 3) Cadastro de pessoas, mas solicitar as informações
// (nome, idade, cidade) via prompt.

function exercise03() {
  let continuar = true;
  let pessoas = [];

  while (continuar) {
    let nomePessoa = prompt("Qual o seu NOME?");
    let idadePessoa = Number(prompt("Qual a sua IDADE?"));
    let cidadePessoa = prompt("Qual a sua CIDADE?");

    let pessoaNova = {
      nome: nomePessoa,
      idade: idadePessoa,
      cidade: cidadePessoa,
    };

    let confirmarAdicionar = confirm(
      `Você deseja adicionar o usuário: ${pessoaNova.nome}?`
    );
    if (confirmarAdicionar == true) {
      pessoas.push(pessoaNova);
      console.log(`Usuário ${pessoaNova.nome}, Cadastrado com sucesso`);
    } else {
      console.log("Cadastro Cancelado.");
    }
    continuar = confirm("Deseja continuar?");
  }

  console.log("Usuários cadastrados:");

  for (pessoa of pessoas) {
    console.log(pessoa.nome);
    console.log(pessoa);
  }
}

function exercise04() {
    let continuar = true;
    let biblioteca = []

    while (continuar) {
    const titulo = prompt("Digite o titulo do livro:".toLowerCase())
    const autor = prompt("Digite o autor do livro:")
    const numeroDePaginas = prompt("Digite o N° de páginas do livro:")
    let lido = confirm("O livro já foi lido?")

    if (lido == true) {
        lido = "Sim"
    } else if (lido == false) {
        lido = "Não"
    }

    let novoLivro = {
        titulo: titulo,
        autor: autor,
        numeroDePaginas: numeroDePaginas,
        lido: lido
    }

    biblioteca.push(novoLivro)
    continuar = confirm("Deseja continuar adicionando livros?");
    }

    for (livro of biblioteca) {
        console.log(livro);
    }

    let novaBiblioteca = []

    let livroDeletar = confirm("Você Deseja deletar um livro?")

    if (livroDeletar == true) {
        let qualLivroDeletar = prompt("Qual o título do livro que deseja deletar?").toLowerCase();
        for (let i = 0; i < biblioteca.length; i++) {
            if (qualLivroDeletar === biblioteca[i].titulo) {
                let confirmarDeletar = confirm(`Deseja mesmo DELETAR o livro ${biblioteca[i].titulo}`);
                if (confirmarDeletar == true) {
                    biblioteca.splice(i, 1);
                    console.log(`O livro ${biblioteca[i].titulo} foi DELETADO`);
                    console.log(biblioteca);
                } else if (confirmarDeletar == false) {
                    console.log("Certo, Operação cancelada");
                } else {
                    console.log("Não entendi, tente novamente");
                }
            }
        }
    }

    // atualizando nova biblioteca
    for (livro of biblioteca) {
        novaBiblioteca.push(livro)
    }

    // Verificar se terminou livro
    let lidoPergunta = confirm("Você ja terminou algum livro?")
    if (lidoPergunta == true) {
        let livroLido = prompt("Qual o titulo do livro que você leu?".toLowerCase())
        
        // Verificar livro lido
        for (livro of biblioteca) {
            if (livro.titulo == livroLido) {
                livro.lido = "Sim"
            } else {
                console.log("Não encontrei o livro que você desejava");
            }
        }
        // Atualizar log
        for (livro of biblioteca) {
            console.log(livro);
        }
    }
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
    document.write(`Digite um número até de 1 até 3`);
}
