// Escreva uma função que encontre o número inteiro único entre um conjunto de números inteiros
lista = [2, 4, 4, 3, 5, 2, 3, 8]; //5 neste caso

function listarAparicoesUnicas(lista) {
  const catalogo = [];
  const duplicadas = [];

  for (const num of lista) {
    catalogo.includes(num) ? duplicadas.push(num) : catalogo.push(num);
  }

  const saida = [];
  for (const num of catalogo) {
    duplicadas.includes(num) ? null : saida.push(num);
  }
  return saida;
}

console.log(listarAparicoesUnicas(lista));