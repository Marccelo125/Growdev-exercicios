function apiPlanetas() {
  axios
    .get("https://api.le-systeme-solaire.net/rest/bodies")
    .then((result) => {
      //1
      console.log(`1. Consuma a API:`);
      const allPlanets = result.data.bodies;

      //2
      console.log(`2. Filtre os Planetas:`);
      const planets = allPlanets.filter((planet) => planet.isPlanet === true);
      console.log(planets);

      //3
      console.log(`3. Encontre a Terra:`);
      const findEarth = planets.find(
        (planet) => planet.englishName === "Earth"
      );
      console.log(findEarth);

      //4
      console.log(`4. Verifique Condições com some:`);
      const hasMoon = planets.some((planet) => planet.moons === null);
      console.log(hasMoon);

      //5
      console.log(`5. Transforme os Dados com map:`);
      const planetNames = planets.map((planet) => planet.englishName);
      console.log(planetNames);

      //6
      console.log("6. Classificação por Tamanho: ");
      const classTamanho = planets.sort ((a, b) => b.meanRadius - a.meanRadius).map((planetas) => planetas.englishName);
      console.log(classTamanho);

      //7
      console.log(`7. Informações Concatenadas:`);
      const jointPlanets = planetNames.join(", ")
      console.log(jointPlanets);

      //8
      console.log(`8. Sistema Solar Compacto:`);
      let shortPlannetsName = planets.sort((a, b) => a.meanRadius - b.meanRadius).slice(0, 5);
      let shortPlannetsMass = planets.reduce((acc, planet) => acc + planet.mass.massValue, 0);
      
      console.log(shortPlannetsName);
      console.log(shortPlannetsMass);
      
      //9
      console.log(`9. Luas e Desidade:`);
      const moonsDensity = planets.filter(planet => planet.moons && planet.moons.length > 2 && planet.density > 1)
      console.log(moonsDensity);
      
      //10
      console.log(`10. Ordem de descobrimento:`);
      const discoverOrder = 0
    })
    .catch((err) => {
      console.log(err);
    });
}
apiPlanetas();
