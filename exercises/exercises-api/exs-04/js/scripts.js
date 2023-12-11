const messagesContainer = document.querySelector('.messages-list')

async function fetchMessages() {
  try {
    const response = await api.get('/notes')
    const messages = response.data

    console.log(messages)

    messagesContainer.innerHTML = ''

    messages.forEach(message => {
      const messageCard = document.createElement('div')
      messageCard.classList.add('card')

      messageCard.innerHTML = `
        <h2 class="card-title">${message.title}</h2>
        <p class="card-description">${message.description}</p>
        <div class="card-icons">
          <i class="fas fa-solid fa-trash" data-id=${message.id}></i>
          <i class="fas fa-regular fa-edit" data-id=${message.id}></i>
        </div>
      `

      messagesContainer.appendChild(messageCard)

      const deleteIcon = messageCard.querySelector('.fa-trash')

      deleteIcon.addEventListener('click', () => {
        const messageId = deleteIcon.getAttribute('data-id')

        deleteMessage(messageId)
      })

      const editIcon = messageCard.querySelector('.fa-edit')
      editIcon.addEventListener('click', () => {
        const messageId = editIcon.getAttribute('data-id')

        navigateToEditPage(messageId)
      })
    });

    if (messages.length === 0) {
      const h3 = document.createElement('h3')
      h3.textContent = 'Nenhum recado cadastrado.'
      messagesContainer.appendChild(h3)
    }
  } catch (error) {
    console.log('Erro ao buscar mensagens', error)
  }
}

fetchMessages()

function navigateToEditPage(messageId) {
  location.href = `editar-recado.html?id=${messageId}`
}

