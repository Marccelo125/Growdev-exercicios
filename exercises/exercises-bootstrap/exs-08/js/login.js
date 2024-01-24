const formLogin = document.getElementById("form-login");
const emailInput = document.getElementById("email-login");
const passwordInput = document.getElementById("password-login");

formLogin.addEventListener("submit", (e) => {
  e.preventDefault();

  if (passwordInput.value.length < 5 || emailInput.value.length < 5) {
    setAlert("Verifique os campos e tente novamente", "danger");
    return;
  }

  const data = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  if (emailInput.value < 5 && passwordInput.value.length > 5) {
    login(data);
  }
});

async function login(data) {
  try {
    const response = await api.post("/users/login", data);

    if (response.status === 200) {
      const userData = response.data;

      localStorage.setItem("userId", userData.userId);
      location.href = "listar-recados.html";
    }
  } catch (error) {
    setAlert("Falha de login, verifique suas credências!", "danger");
  }
}
