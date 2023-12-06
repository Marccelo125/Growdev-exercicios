const taskContainer = document.querySelector("main");

async function fetchMessages() {
  try {
    const response = await api.get("/notes");
    const tasks = response.data;

    const messagesContainer = document.querySelector(".messages-list");

    if (tasks.length > 0) {
      const card = document.createElement("div");
      card.classList.add("card");
      card.style.backgroundColor = 'red'

      card.innerHTML = `
      <h2 class="card-title" style="color: white">AVISO TESTE</h2>
      <p class="card-description" style="color: white">
      Nenhum recado cadastrado
      </p>
      `;
      messagesContainer.appendChild(card)
    }

    tasks.forEach((task) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
        <h2 class="card-title">${task.title}</h2>
        <p class="card-description">
        ${task.description}
        </p>
        `;
        messagesContainer.appendChild(card);
    });
    console.log(tasks);
  } catch (error) {
    console.error(`Erro ao buscar mensagens: ${error}`);
  }
}

async function createNewMessage() {
  const newMessage = {
    title: 'Marcelo - TESTE',
    description: '?',
    user_id: 18
  }
  try {
    const response = await api.post('/notes', newMessage) // NewMessage é o objeto que criamos e vamos passar pra API
    if (response.status === 201) { // Se voltar 201 de status (desta api significa sucesso)
      alert("Cadastrado com sucesso!")
    }
  } catch (error) {
    console.error(`Erro ao cadastrar recado ${error}`);
  }
}

async function updateMessage() {
  const idMessage = 111

  const newMessage = {
    title: 'Marselo tem que ir ao mercado ',
    description: '13h',
  }
  try {
    const response = await api.put(`/notes/${idMessage}`, newMessage) // End point é o ID da mensagem que desejo editar
    if (response.status === 201) { // Se voltar 201 de status (desta api significa sucesso)
      alert("Atualizado com sucesso!")
    }
  } catch (error) {
    console.error(`Erro ao atualizar recado ${error}`);
  }
}

async function deleteMessage() {
  const idMessage = 173

  try {
    const response = await api.delete(`/notes/${idMessage}`) // End point é o ID da mensagem que desejo deletar
    if (response.status === 201) { // Se voltar 201 de status (desta api significa sucesso)
      alert("Deletado com sucesso!")
    }
  } catch (error) {
    console.error(`Erro ao deletar recado ${error}`);
  }
}

// createNewMessage()
// updateMessage()
// deleteMessage()
fetchMessages();