if (!localStorage.getItem('usuario')) {
    location.href = 'index.html'
}

const main = document.querySelector('main')
let userString = localStorage.getItem('usuario');
let userObj = JSON.parse(userString);
showUser(userObj)

const logoutButton = document.getElementById('logout-button');

logoutButton.addEventListener('click', function() {
    localStorage.clear();
    location.href = 'index.html';
});

function showUser(user) {
    const userContainer = document.createElement('div')
    userContainer.classList.add('logged-user')
    userContainer.innerHTML = `
    <img src="${user.avatar}"></img>
    <p><strong>Nome</strong>: ${user.name}</p>
    <p><strong>Email</strong>: ${user.login}</p>
    <button class="btn-logout" id="logout-button">Desconectar</button>
    `
    main.appendChild(userContainer)
}