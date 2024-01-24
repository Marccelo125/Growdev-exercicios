const formNewUser = document.getElementById('form-new-user');
const nameInputRegister = document.getElementById('name');
const emailInputRegister = document.getElementById('email');
const passwordInputRegister = document.getElementById('password');
const passwordInputRegisterRep = document.getElementById('password-rep');

formNewUser.addEventListener('submit', async (e) => {
  e.preventDefault(); // Impedir comportamento padrão do submit

  const nameValue = nameInputRegister.value.trim();
  const emailValue = emailInputRegister.value.trim();
  const passwordValue = passwordInputRegister.value.trim();
  const passwordRepValue = passwordInputRegisterRep.value.trim()

  if (!nameValue || !isValidEmail(emailValue) || !passwordValue || passwordValue.length < 5) {
    setAlertModal("Verifique os campos e tente novamente", 'danger');
    
    if (passwordRepValue != passwordValue) {
      setAlertModalWarning("As senhas devem ser iguais", 'warning');
      return;
    }
    return;
  }



  const newUser = {
    name: nameValue,
    email: emailValue,
    password: passwordValue,
  };

  try {
    const response = await api.post('/users/signup', newUser);

    if (response.status === 201) {
      location.href = "listar-recados.html";
    }
  } catch (error) {
    console.log('Erro ao cadastrar usuário', error);
  }
  e.target.reset();
});

function isValidEmail(email) {
  return email.includes('@') && email.length > 5;
}
