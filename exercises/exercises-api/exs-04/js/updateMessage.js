const formNewMessage = document.getElementById("form-new-message");
const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const idInput = document.getElementById("id");

formNewMessage.addEventListener("submit", (event) => {
  event.preventDefault(); // impede comportamento padrão submit

  const titleValue = titleInput.value;
  const descriptionValue = descriptionInput.value;
  const idValue = idInput.value;

  const newMessage = {
    id: idValue,
    title: titleValue,
    description: descriptionValue,
  };

  updateMessage(newMessage);
});

async function updateMessage(message) {
    const newMessage = {
        title: message.title,
        description: message.description,
    }
  try {
    const response = await api.put(`/notes/${message.id}`, newMessage); // End point é o ID da mensagem que desejo editar
    if (response.status === 200) {
      // Se voltar 201 de status (desta api significa sucesso)
      alert("Atualizado com sucesso!");
    }
  } catch (error) {
    console.error(`Erro ao atualizar recado ${error}`);
  }
}
