function sayHi() {
  const phraseLocal = document.querySelector("h1");
  const nameUser = prompt("Digite o seu nome:");
  const phraseUser = `E aí
  ${nameUser}! Você está deixando o seu site
  dinâmico.`;

  phraseLocal.innerText = phraseUser;
}

let counterActual = 0;

const divCounter = document.getElementById("counterActivity");
const parafCount = document.createElement("p");
parafCount.innerText = `O contador está com ${counterActual} cliques`;
divCounter.appendChild(parafCount);

function increment() {
  counterActual++
  parafCount.innerHTML = `O contador está com <strong>${counterActual}</strong> cliques`;
}

function resetButton() {
  counterActual = 0
  parafCount.innerText = ``;
}