// Exercício 01
// Código usando IF simplificado (bom para quando o if tem pouca função)
function exercise01(notas, metodo) {
  // Desconstrução do array
  const [nota1, nota2, nota3] = notas

  if (metodo === 'A')
      return (nota1 + nota2 + nota3) / 3

  if (metodo === 'P')
      return (nota1 * 5 + nota2 * 3 + nota3 * 2) / 10

  else null
}

// Exercício 02
function exercise02(numero) {
  return numero % 2 !== 0
}


// Exercício 03
function exercise03(numero) {
  if (numero === 2) return true
  if (numero % 2 === 0) return false

  for (let i = 3; i * i <= numero; i += 2) {
      if (numero % i === 0) return false
  }
  return true
}

// Exercício 4
function exercise04() {
  function converterTempo(segundos) {
    const horas = Math.floor(segundos / 3600)
    segundos %= 3600
    const minutos = Math.floor(segundos / 60)
    segundos %= 60
    return `${horas}: ${minutos} ${segundos}`
  }
  const tempoSegundos = 3672
  
  console.log(converterTempo(tempoSegundos))
}

// Exercício 5
function exercise05() {
  function valorPerfeito(valor) {
    if (valor <= 1) return false;

    let somaDivisores = 0;

    for (let i = 1; i < valor; i++){
      if (valor % i === 0) somaDivisores += i;
    }
    return somaDivisores === valor;
  }
  console.log(valorPerfeito(10));
}

// Exercício 6
function exercise06() {
  let nome = prompt("Digite seu nome:")
  nome ? alert(`Olá, ${nome}!! Bem vindo ao nosso site`) 
  : alert("Invasor")
}

// Exercício 7
function exercise07() {
  let aplicacao = "Growdev"
  function mostrarMensagem() {
    console.log(`Acesso à aplicação ${aplicacao}`);
    alert(`Acesso à aplicação ${aplicacao}`)
  }
}

// Exercício 8
function exercise08() {
  function mostrarDobro(num) {
    alert(`O dobro do número ${num} é ${num * 2}`);
  }
  mostrarDobro(5);
}

// Exercício 9
function exercise09() {
  function calcularMedia(nota1, nota2, nota3, nome) {
    alert(`${nome}, sua média é ${(nota1 + nota2 + nota3) / 3}`);
    console.log(`Nota 1: ${nota1}, Nota 2: ${nota2}, Nota 3: ${nota3}`)
  }

  calcularMedia(80, 90.9, 100, "Bruno");
}

let selecionarExercicio = Number(prompt("Digite o Exercício que deseja testar:\n1. Média aritimetica e ponderada\n2. Verdadeiro/Falso - Impar\n3. Verificar se é primo\n4. Conversor para Hora : Min : Seg\n5. Número Perfeito\n6. Função acessoAoSite()\n7. Função mostrarMensagem()\n8. Função mostrarDobro(num)\n9. Função calcularMedia()\n0. Sair"))

switch (selecionarExercicio) {
    case 0:
        break
    case 1:
        exercise01()
        break
    case 2:
        exercise02()
        break
    case 3:
        exercise03()
        break
    case 4:
        exercise04()
        break
    case 5:
        exercise05()
        break
    case 6:
        exercise06()
        break
    case 7:
        exercise07()
        break
    case 8:
        exercise08()
        break
    case 9:
        exercise09()
        break
    default:
        document.write(`Digite um número até de 1 até 9`)
}