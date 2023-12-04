const taskContainer = document.querySelector("main");

async function fetchTasks() {
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
fetchTasks();
