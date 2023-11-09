// Dado uma lista de números, multiplique todos por 3 e imprima no console
function praticeExtra01() {
  let arrayNumeros = [1, 2, 3, 4, 5]

  arrayNumeros.forEach((num) => {
      num *= 3
      console.log(num);
  })
}

// Com um array de números mostre apenas os maiores ou iguais á 18
function praticeExtra02() {
  let idades = [12, 16, 18, 22, 35, 48]
  let maiorIdade = []

  idades.forEach((num) => {
      if (num >= 18) {
          maiorIdade.push(num)
      }
  })
  console.log(`Array de Idades: ${idades}`);
  console.log(`Maiores de idade: ${maiorIdade}`);
}

// Dado os precos de alguns produtos, encontre o que custa menos de 50 e imprima no console
function praticeExtra03() {
  const produtos = [{
    nome: 'TV 4K Samsung NEO QLED',
    preco: 2500
}, {
  nome: 'Playstation 5',
  preco: 3899
}, {
  nome: 'Camiseta (Promoção)',
  preco: 50
}, {
  nome: 'Xbox Series X',
  preco: 3500
}]

  const achar50 = produtos.find((produto) => produto.preco === 50)
  const indexAchar50 = produtos.findIndex((produto) => produto.preco === 50)
  console.log(`O item com valor 50: ${achar50.nome}, ele está na posição: ${indexAchar50} do seu array`);
}

// De um array de nomes imprima no console o índice do maior nome
function praticeExtra04() {
  const arrayNomes = ['Jorge', 'Maria', 'Paulo', 'Andre', 'Marcelo']

  const nomeGrande = arrayNomes.findIndex((nome) => nome.length >= 6)
  console.log(`${arrayNomes[nomeGrande]} é o maior nome do seu array e ele se encontra no índice: ${nomeGrande}, `);
}