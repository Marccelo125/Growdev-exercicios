// * FAZER UM LET CONTINUAR GLOBAL, ASSIM POSSO USAR RETURN E SO PARAR QND O USER QUISER

const tasks = [
  {
    title: "Limpar a Casa - 0",
    description: "random description",
    completed: true,
  },
  {
    title: "Cortar Grama - 1",
    description: "random description",
    completed: false,
  },
  {
    title: "Lavar Louça - 2",
    description: "random description",
    completed: false,
  },
];

// 1.
function createTask(title, description) {
  let continuar = true;

  while (continuar) {
    title = prompt("Digite o título da tarefa:");
    description = prompt("Digite a descrição da tarefa:");
    completed = confirm("A tarefa está completa?");

    if (!title) {
      console.log("O titulo é obrigatório.");
    } else {
      tasks.push({
        title: title,
        description: description,
        completed: true,
      });
      console.log(tasks);
    }
    continuar = confirm("Deseja Adicionar outra tarefa?");
  }
}

// createTask('Titulo legau', 'Outra descrição')

// 2.
function listTasks() {
  console.log(`-------------------`);
  console.log(`Tarefas Cadastradas`);
  console.log(`-------------------`);

  tasks.forEach((tasks, i) => {
    tasks.completed ? "Completa" : "InCompleta";

    console.log(`${i + 1}° Tarefa: ${tasks.title} 
    Descrição: ${tasks.description} 
    Status: ${tasks.completed}`);
  });
}

// listTasks()

// 3.
function updateTaskStatus(index, completed) {
  index = Number(prompt("Qual o índice da lista?"));
  if (index + 1 >= 0 && index < tasks.length) {
    completed = confirm("A tafera está completa?");
    tasks[index].completed = completed;
    console.log(tasks[index]);
  } else console.log("Índice inexistente, informe um índice existente!");
}

// updateTaskStatus(1, true);

// 4.
function updateTask(index, newTitle, newDescription) {
  index = Number(prompt("Qual o índice da lista?"));
  if (index >= 0 && index < tasks.length) {
    newTitle = prompt("Qual o novo título?");
    newDescription = prompt("Qual a nova descrição?");

    if (newTitle && newDescription) {
      tasks[index].title = newTitle;
      tasks[index].description = newDescription;
    } else console.log("Título ou descrição fornecido é inválido");
  } else console.log("Indíce fornecido é inválido");
  console.log(tasks);
}

// 5.
function deleteTask(index) {
  index = Number(prompt("Qual o índice da lista?"));
  if (index >= 0 && index < tasks.length) {
    tasks.splice(index, 1);
    console.log("Tarefa apagada com sucesso!");
    console.log(tasks);
  } else console.log("O indíce fornecido não é válido");
}

// deleteTask(1)

let selecionarFuncao = Number(
  prompt(
    "Digite a função que deseja executar:\n1. Adicionar Tarefa\n2. Listar Tarefas\n3. Atualizar status da tarefa\n4. Atualizar Título e Descrição\n5. Deletar tarefa\n0. Sair"
  )
);

switch (selecionarFuncao) {
  case 1:
    createTask();
    break;
  case 2:
    listTasks();
    break;
  case 3:
    updateTaskStatus();
    break;
  case 4:
    updateTask();
    break;
  case 5:
    deleteTask();
    break;
  default:
    console.log("Selecione uma opção entre 1 e 5");
    break;
}
