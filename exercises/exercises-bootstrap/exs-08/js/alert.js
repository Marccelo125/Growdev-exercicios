function setAlert(message, type) {
  const alertContainer = document.getElementById("alertLogin");
  alertContainer.innerHTML = `
  <div class="alert alert-${type} alert-dismissible" role="alert">
    <strong>${message}</strong> verifique erros de digitação.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  `;

  setTimeout(() => {
    alertContainer.innerHTML = "";
  }, 5000);
}

function setAlertModal(message, type) {
  const alertModal = document.getElementById("alertModal");
  alertModal.innerHTML = `
  <div class="alert alert-${type} alert-dismissible fade show mt-4" role="alert" >
    <strong>${message}</strong> Verifique os campos!
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
}
