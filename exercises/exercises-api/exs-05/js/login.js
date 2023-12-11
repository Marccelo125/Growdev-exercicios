const main = document.querySelector('main')
let userString = localStorage.getItem('usuário');
let userObj = JSON.parse(userString);
showUser(userObj)

function showUser(user) {
    const userContainer = document.createElement('div')
    userContainer.classList.add('logged-user')
    userContainer.innerHTML = `
    <img src="${user.avatar}"></img>
    <p>Nome: ${user.name}</p>
    <p>Email: ${user.login}</p>
    `
    main.appendChild(userContainer)
}