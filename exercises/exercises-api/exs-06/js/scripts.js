const messagesContainer = document.querySelector(".messages-list");
const createMessageButton = document.querySelector("#newMessageButton");

const prevPage = document.getElementById("prevPage");
const nextPage = document.getElementById("nextPage");

// Variáveis globais
let currentPage = 1;
let totalPages = 1;

createMessageButton.addEventListener("click", (e) => {
  e.preventDefault();
  location.href = "./cadastrar-recado.html";
});

async function fetchMessages(page) {
  try {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      alert("Você precisa fazer login para visualizar os recados.");
      location.href = "index.html";
      return;
    }

    const params = {
      page,
      perPage: 3,
    };

    const response = await api.get(`/notes/${userId}`, { params });
    const messages = response.data.userMessages;

    console.log(messages);

    totalPages = response.data.totalPages;

    messagesContainer.innerHTML = "";

    messages.forEach((message) => {
      const messageCard = document.createElement("div");
      messageCard.classList.add("card");

      messageCard.innerHTML = `
        <h2 class="card-title">${message.title}</h2>
        <p class="card-description">${message.description}</p>
        <div class="card-icons">
          <i class="fas fa-solid fa-trash" data-id=${message.id}></i>
          <i class="fas fa-regular fa-edit" data-id=${message.id}></i>
        </div>
      `;

      messagesContainer.appendChild(messageCard);

      const deleteIcon = messageCard.querySelector(".fa-trash");

      deleteIcon.addEventListener("click", () => {
        const messageId = deleteIcon.getAttribute("data-id");

        deleteMessage(messageId);
      });

      const editIcon = messageCard.querySelector(".fa-edit");
      editIcon.addEventListener("click", () => {
        const messageId = editIcon.getAttribute("data-id");

        navigateToEditPage(messageId);
      });
    });

    if (messages.length === 0) {
      const h3 = document.createElement("h3");
      h3.textContent = "Nenhum recado cadastrado.";
      messagesContainer.appendChild(h3);
    }
  } catch (error) {
    console.log("Erro ao buscar mensagens", error);
  }
}

function navigateToEditPage(messageId) {
  location.href = `editar-recado.html?id=${messageId}`;
}

prevPage.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    fetchMessages(currentPage);
  }
});

nextPage.addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    fetchMessages(currentPage);
  }
});

async function numberPage(page) {
  await fetchMessages(currentPage);
  const pageNumbers = document.getElementById("pageNumbers");

  if (!pageNumbers.children.length) {
    for (let contador = 1; contador <= totalPages; contador++) {
      pageNumbers.innerHTML += `<button onclick=fetchMessages(${contador}) >${contador}</button>`;
    }
  }
}

numberPage(currentPage);
