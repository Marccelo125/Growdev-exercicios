// Adiciona um evento de envio ao formulário
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const endereco = document.getElementById("endereco").value;
  const cidade = document.getElementById("cidade").value;
  const estado = document.getElementById("estado").value;

  const cargoSelecionado = document.querySelector(
    'input[name="cargo"]:checked'
  );
  const cargo = cargoSelecionado ? cargoSelecionado.id : null;

  const areasInteresseSelecionadas = document.querySelectorAll(
    'input[name="area-interesse[]"]:checked'
  );
  const areasInteresse = Array.from(areasInteresseSelecionadas).map(
    (area) => area.value
  );

  const miniCurriculo = document.getElementById("mini-curriculo").value;

  const dadosUsuario = {
    nome: nome,
    endereco: endereco,
    cidade: cidade,
    estado: estado,
    cargo: cargo,
    areasInteresse: areasInteresse,
    miniCurriculo: miniCurriculo,
  };

  console.log(`
    Dados preenchidos pelo usuário:
    Nome: ${dadosUsuario.nome}
    Endereço: ${dadosUsuario.endereco}
    Estado: ${dadosUsuario.estado}
    Cargo: ${dadosUsuario.cargo}
    Areas de Interesse: ${dadosUsuario.areasInteresse.join(" ")}
    Minicurriculo: ${dadosUsuario.miniCurriculo}
    `);
});
