/* Desenvolva aqui a rotina */
const valorBase = document.querySelector("#valor_base");
const valorTransporte = document.querySelector("#valor_transporte");
const valorAlimentacao = document.querySelector("#valor_alimentacao");
const valorReceita = document.querySelector("#valor_receita");
const valorAutomovel = document.querySelector("#valor_automovel");
const faltas = document.querySelector("#faltas");
const valorDescontos = document.querySelector("#valor_descontos");
const valorTotal = document.querySelector("#valor_total");
const calcular = document.querySelector("#btn_calcular");

let soma = 0;
let soma2 = 0;

calcular.setAttribute("onclick", "calculo(); calculoAutomatico()");

// Exercício 1
function calculo() {
  valorBase.addEventListener("change", () => {});
  valorTransporte.addEventListener("change", () => {});
  valorAlimentacao.addEventListener("change", () => {});

  soma =
    Number(valorBase.value) +
    Number(valorAlimentacao.value) +
    Number(valorTransporte.value);

  valorReceita.value = soma;

  valorAutomovel.addEventListener("change", () => {});
  faltas.addEventListener("change", () => {});

  soma2 = Number(valorAutomovel.value) + Number(faltas.value);

  valorDescontos.value = soma2;
  valorTotal.value = soma - soma2;
}

//Exercício 2
function calculoAutomatico() {
  const td = document.querySelectorAll("input[type=number]");
  td.forEach((element) => {
    element.addEventListener("blur", (e) => {
      console.log(e.target.value);
      calculo(e);
    });
  });
}
