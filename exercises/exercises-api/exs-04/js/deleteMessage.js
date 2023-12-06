const formNewMessage = document.getElementById("form-new-message");
const idInput = document.getElementById("id");

formNewMessage.addEventListener("submit", (event) => {
  event.preventDefault(); // impede comportamento padrão submit

  const idValue = idInput.value;
  const newMessage = {
    id: idValue
  };

  deleteMessage(newMessage);
});

async function deleteMessage(message) {
  try {
    const response = await api.delete(`/notes/${message.id}`); // End point é o ID da mensagem que desejo editar
    if (response.status === 200) {
      // Se voltar 201 de status (desta api significa sucesso)
      alert("Deletado com sucesso!");
    }
  } catch (error) {
    console.error(`Erro ao atualizar recado ${error}`);
  }
}
