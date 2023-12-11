const formRegister = document.getElementById("form-edit-message");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const password = document.getElementById("password");
const avatar = document.getElementById("avatar");

async function registerUser() {
  try {
    const response = await api.get("/users");
    const users = response.data;

    const button = document.querySelector(".btn-submit");
    button.addEventListener("click", () => {
      console.log(users);
      let existe = false

      users.forEach((user) => {
        if (user.login === email.value) {
          console.error("JORGE");
          email.classList.add("form-control.error");
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
          localStorage.setItem('usuário', JSON.stringify(newUser));
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

      location.href = "login.html";
    }
  } catch (error) {
    console.log("Erro ao cadastrar usuário", error);
  }
}

registerUser();
