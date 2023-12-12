const buttonRegister = document.querySelector(".btn-submit");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const password = document.getElementById("password");
const avatar = document.getElementById("avatar");

buttonRegister.addEventListener("click", async (event) => {
  event.preventDefault();
  await registerUser();
});

async function registerUser() {
  try {
    const response = await api.get("/users");
    const users = response.data;

    if (localStorage.getItem("usuario")) {
      location.href = "logged.html";
    }

    const button = document.querySelector(".btn-submit");
    button.addEventListener("click", () => {
      console.log(users);
      let existe = false;

      const emailContainer = email.parentElement;
      const emailError = document.createElement("small");
      emailContainer.appendChild(emailError);

      users.forEach((user) => {
        if (user.login === email.value) {
          emailContainer.classList.add("error");
          emailError.textContent = "Este email já existe";
          existe = true;
        }
      });
      if (existe === false) {
        const newUser = {
          name: `${nome.value}`,
          avatar: `${avatar.value}`,
          password: `${password.value}`,
          login: `${email.value}`,
        };
        localStorage.setItem("usuario", JSON.stringify(newUser));
        createNewUser(newUser);
      }
    });
  } catch (error) {
    console.error(`Um erro inesperado ocorreu: ${error}`);
    console.log("Tente novamente");
  }
}

async function createNewUser(newUser) {
  try {
    const response = await api.post("/users", newUser);

    if (response.status === 201) {
      alert("Usuário cadastrado com sucesso!");

      email.value = "";
      password.value = "";
      nome.value = "";
      avatar.value = "";

      location.href = "logged.html";
    }
  } catch (error) {
    console.log("Erro ao cadastrar usuário", error);
  }
}

registerUser();
