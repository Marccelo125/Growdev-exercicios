// PRATICANDO CRUD (CREATE, READ, UPDATE e DELETE)
//Lista
const alunosSicredi = [
  {
    id: 1,
    nome: "Bruno",
    email: "bruno@aluno.com",
  },
];

function acharPorEmail(email) {
  const aluno = alunosSicredi.find((aluno) => aluno.email === email);
  return aluno;
}

//Create
function cadastroAluno(nome, email) {
  const novoAluno = {
    id: Date.now(), // Pega a data em segundos desde 1970
    nome: nome,
    email: email,
  };
}

function listarAlunos() {
    const lista = alunosSicredi.map(aluno => {
        return {
            nome: aluno.nome,
            email: aluno.email 
        }
    })
    console.log(lista);
}

function deletarAluno(id) {
  const indice = alunosSicredi.findIndex((aluno) => aluno.id === id);
  console.log(`O aluno: ${alunosSicredi[indice].nome} foi deletado`);
  alunosSicredi.splice(indice, 1);

  // Utilizando filter, porém o filter vai criar uma nova lista
  // Caso tenham muitos usuário cadastrados pode se tornar maçante
  // alunosSicredi = alunosSicredi.filter(aluno => aluno.id !== id)
}

function editarAluno(id, novoNome, novoEmail) {
    // Utilizando findIndex
    const indice = alunosSicredi.findIndex(aluno => aluno.id === id)
    alunosSicredi[indice] = {
        id, 
        nome: novoNome, 
        email:novoEmail,
    }

    // Utilizando map()
  //   alunosSicredi = alunosSicredi.map((aluno) => {
  //     if (aluno.id === id) {
  //       return {
  //         id,
  //         nome: novoNome,
  //         email: novoEmail,
  //       };
  //     }
  //   });
}

// Pegar id por email
// const idDoBruno = acharPorEmail('bruno@aluno.com').id