// function fetchUsers() {
//   axios
//     .get("https://regres.in/api/users")
//     .then((response) => {
//       const users = response.data.data;
//       console.log(users);
//     })
//     .catch((error) => {
//       console.error(`Erro ao buscar usuários: ${error}`);
//     });
// }

function consultarCep() {
  const cep = Number(prompt("Digite o seu CEP:"));
  axios
    .get(`https://viacep.com.br/ws/${cep}/json`)
    .then((resposta) => {
      const cepUsuario = resposta.data;

      console.log(
        `
          CEP: ${cepUsuario.cep}\n
          Logradouro: ${cepUsuario.logradouro}\n
          Complemento: ${cepUsuario.complemento}\n
          Bairro: ${cepUsuario.bairro}\n
          Localidade: ${cepUsuario.localidade}\n 
          UF: ${cepUsuario.uf}`
      );
    })
    .catch((error) => {
      console.log(`Erro ao buscar o CEP ${cep}\n${error}`);
    });
}

consultarCep();
