let contadorAtual = 0;
let contadorMax = 10;

function adicionarContador() {
  const contador = document.getElementById("contador");
  const botao = document.getElementById("button-register");
  const instaGrow = document.getElementById("instaGrow");

  if (contadorAtual >= contadorMax) {
    instaGrow.classList.add("ten-likes");
    instaGrow.innerText = `InstaGrow - Post Famoso!`;
    botao.disabled = true;
  }

  contador.innerText = `${contadorAtual}`;
}

function increment() {
  contadorAtual++;
  adicionarContador();
}

const titulo = document.createElement("h1");
titulo.innerText = `Contador de Likes`;

const presencaContainer = document.createElement('div');
presencaContainer.id = "presenca-container"

presencaContainer.innerHTML = `
  <h2 id="instaGrow">InstaGrow</h2>
  <img src="https://picsum.photos/300/300" alt="">
  <button id="button-register" onclick="increment()">Curtir</button>
  <p id="contador">0</p>
`;

document.body.appendChild(titulo)
document.body.appendChild(presencaContainer)

