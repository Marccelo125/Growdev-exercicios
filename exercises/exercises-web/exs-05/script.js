const planetsContainer = document.querySelector("#planetsContainer");
const buttonStart = document.querySelector("#buttonStart");
const divSpin = document.querySelector("#divSpin");

function calculateMass(name, massValue, massExponent) {
  const mass = massValue * Math.pow(10, massExponent);
  return console.log(`Mass of : ${name} is ${mass}`);
}

buttonStart.addEventListener("click", () => {
  buttonStart.style.display = "none";
  getBoodies();
});

async function getBoodies() {
  divSpin.innerHTML = `<span class="loader"></span>`;
  const result = await axios.get(
    "https://api.le-systeme-solaire.net/rest/bodies"
  );
  divSpin.innerHTML = "";
  const stars = result.data.bodies;
  const planets = stars.filter((p) => p.isPlanet);

  planets.forEach((planet) => {
    planetsContainer.innerHTML += `
    <div onclick='calculateMass("${planet.englishName}", "${
      planet.mass.massValue
    }", "${planet.mass.massExponent}")'
     class="planetCard">
    <h2>${planet.englishName}</h2>
    <p>${planet.moons ? planet.moons.length : 0}</p>
  </div>
    `;
  });
}


const nome = 'jorge'

// Com delay aóos pausa na digitação do usuário 
nome.addEventListener('change', (event) => {
  console.log(event.target.value);

    // Ou seja
    event.target === nome
})

// Simultaneamente com a digitação do usuário 
nome.addEventListener('input', (event) => {
  console.log(event.target.value);

    // Ou seja
    event.target === nome
})

// Outro jeito de ver os 2 acima
// Porém aqui usamos direto quem disparou o evento
nome.addEventListener('input', () => {
  console.log(nome.value);
})

nome.addEventListener('change', () => {
  console.log(nome.value);
})