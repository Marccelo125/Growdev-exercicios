const taskContainer = document.querySelector("main");

async function fetchTasks() {
  try {
    const response = await api.get("/notes");
    const tasks = response.data;

    const messagesContainer = document.querySelector("main");
    const messagesList = document.createElement("div");
    messagesList.classList.add("messages-list");

    tasks.forEach((task) => {
      const card = document.createElement("div");
      const cardTitle = document.createElement("h2");
      const cardDescription = document.createElement("p");

      card.classList.add("card");
      cardTitle.classList.add("card-title");
      cardDescription.classList.add("card-description");

      cardTitle.innerText = `${task.title}`;
      cardDescription.innerText = `${task.description}`;

      card.appendChild(cardTitle);
      card.appendChild(cardDescription);
      messagesList.appendChild(card);
    });
    messagesContainer.appendChild(messagesList);
    console.log(tasks);
  } catch (error) {
    console.error(`Erro ao buscar mensagens: ${error}`);
  }
}
fetchTasks();
