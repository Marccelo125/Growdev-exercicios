let api = axios.create({
  baseURL: "https://rickandmortyapi.com/api/",
});

async function fetchCharacter(status) {
  try {
    const response = await api.get(`character?status=${status}`);
    const character = response.data.results; // Axios sempre retorna em Data.
    console.log(character);
  } catch (error) {
    console.log(`Erro: ${error}`);
  } finally {
    console.log(`Finalizou!`);
  }
}

async function findCharacterByName(name) {
  try {
    const response = await api.get(`character?name=${name}`);
    console.log(response.data.results);
  } catch (error) {
    console.log("Falhou!");
  } finally {
    console.log("Finalizou");
  }
}

// const name = prompt("Digite o nome a ser encontrado: ")
// findCharacterByName(name)

async function listEpisode(season) {
  try {
    const response = await api.get(`episode?episode=S0${season}`);
    const result = response.data.results;
    result.forEach((episodioName) =>
      console.log(`Episodio: ${episodioName.name}`)
    );
  } catch (error) {
    console.log(`Está temporada não existe!`);
  } finally {
    console.log("Finalizou");
  }
}

listEpisode(Number(prompt(`Digite o número da temporada:`)));

async function episodeDetails(episode) {
  try {
    const response = await api.get(`episode/${episode}`);
    const result = response.data;
    console.log(`Episode: ${result.episode} | Name: ${result.name}`);
  } catch (error) {
    console.log(`Episódio ${episode} não encontrado!`);
  } finally {
    console.log("Finalizou");
  }
}

// episodeDetails(prompt(`Digite o ID do episódio: `));


// END POINTS
// {
//   "characters": "https://rickandmortyapi.com/api/character",
//   "locations": "https://rickandmortyapi.com/api/location",
//   "episodes": "https://rickandmortyapi.com/api/episode"
// }