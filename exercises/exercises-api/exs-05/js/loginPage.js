const button = document.querySelector(".btn-submit");
const email = document.getElementById("email");
const password = document.getElementById("password");
const loginError = document.createElement("small");
const emailContainer = email.parentElement;
const passwordContainer = password.parentElement;

button.addEventListener("click", async (event) => {
  event.preventDefault();
  await loginUser();
});

if (localStorage.getItem("usuario")) {
  location.href = "logged.html";
}

async function loginUser() {
  try {
    const response = await api.get("/users");
    const users = await response.data;

    users.forEach((user) => {
      if (user.login === email.value && user.password === password.value) {
        location.href = "logged.html";
        const newUserLocal = {
          name: `${user.name}`,
          avatar: `${user.avatar}`,
          password: `${user.password}`,
          login: `${user.login}`,
        };
        localStorage.setItem("usuario", JSON.stringify(newUserLocal));
      } else {
        emailContainer.appendChild(loginError);
        passwordContainer.appendChild(loginError);

        loginError.innerText = "Dados inválidos, Verifique e Tente Novamente";
        emailContainer.classList.add("error");
        passwordContainer.classList.add("error");
      }
    });
  } catch (error) {
    console.error(`Um erro inesperado ocorreu: ${error}`);
    console.log("Tente novamente");
  }
}
