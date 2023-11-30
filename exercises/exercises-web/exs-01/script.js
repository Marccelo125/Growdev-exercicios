let contadorAtual = 0
let contadorMax = 5

function adicionarContador() {
  let contador = document.getElementById('contador')
  let status = document.getElementById("status");
  let botao = document.getElementById("button-register")
  
  if (contadorAtual >= contadorMax) {
    status.innerText = "Voce pode começar";
    status.classList.remove("aguardando");
    status.classList.add("pode-comecar");

    botao.disabled = true
  }

  contador.innerText = `${contadorAtual}`
}

function increment() {
  contadorAtual++;
  adicionarContador();
}

