function pratice01() {
    let matriz = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
    
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            console.log(`For: ${matriz[i][j]}`);
        }
    }
    
    for (let linha of matriz) {
        for (let item of linha) {
            console.log(`For of: ${item}`);
        }
    }
}

function pratice02() {
    const brasilCampeao = [1958, 1962, 1970, 1994, 2002]

    for (anoCampeao of brasilCampeao) {
        console.log(`O Brasil ganhou a copa de: ${anoCampeao}`)
    }
}

// Crie um programa que permita ao usuário inserir as notas de alunos (de 0 a 10) em uma disciplina. O programa deve
// continuar pedindo as notas até que o usuário indique que não deseja mais inserir notas. Em seguida, o programa deve
// calcular a média das notas e informar se o aluno foi aprovado (média maior ou igual a 7) ou reprovado.

function pratice03() {
    let notasAlunos = []
    let desejaContinuar = true

    while (desejaContinuar) {
        let adicionarNota = parseFloat(prompt("Digite a nota do aluno (0 á 10):"))
        
        if (isNaN(adicionarNota) || adicionarNota < 0 || adicionarNota > 10) {
            alert("Nota inválida. As notas devem estar no intervalo de 0 a 10.");
        } else {
            notasAlunos.push(adicionarNota)
            console.log(`A nota: ${adicionarNota.toFixed(2)}. Foi adicionada com sucesso`);
            desejaContinuar = confirm("Você deseja adicionar outra nota?")        
        }
    }
    if (notasAlunos.length >= 1) {
        let desejaCalcularMedia = confirm("Você deseja calcular á média destas notas?")

        while (desejaCalcularMedia) {
            let soma = 0
            for (nota of notasAlunos) {
                soma += nota;
            }
            let media = soma / notasAlunos.length;

            console.log("Notas inseridas: " + notasAlunos.join(", "));
            console.log("Média das notas: " + media.toFixed(2));
            
            if (media >= 7) {
                console.log("Aluno APROVADO!");
            } else {
                console.log("Aluno REPROVADO.");
            }
            desejaCalcularMedia = false
        }
    } else {
        console.log("Nenhuma nota válida foi inserida.");
    }
    console.log("Obrigado, Volte sempre!");
}

// Criar um array e percorrê-lo utilizando o loop for
// a. Crie um array com o nome "nomes" e adicione 4 nomes de
// pessoas que você conhece
// b. Utilize o loop for para percorrer o array e exibir os nomes na
// tela

function exercise01() {
    const nomes = ["Marcelo", "Paulo", "Roberto", "Eduardo"]

    console.log("Utilizando For:");
    for (let i = 0; i < nomes.length; i++) {{
            console.log(`${i + 1}. ${nomes[i]}`);
        }
    }
}

// Criar um array e percorrê-lo utilizando o loop for of
// a. Crie um array com o nome "numeros" e adicione 5 números de
// sua escolha
// b. Utilize o loop for of para percorrer o array e exibir a soma dos
// números na tela

function exercise02() {
    const numeros = [1, 2, 3, 4, 5]
    let soma = 0

    for (let numero of numeros) {
        soma += numero
    }
    console.log(`Números recebidos: ${numeros}\nResultado da soma: ${soma}`);
}

// Utilizar os métodos push, pop, unshift e shift para manipular um
// array
// a. Crie um array com o nome "frutas" e adicione 3 tipos de frutas
// de sua escolha
// b. Utilize o método push para adicionar uma fruta no final do
// array
// c. Utilize o método pop para remover a última fruta do array
// d. Utilize o método unshift para adicionar uma fruta no início do
// array
// e. Utilize o método shift para remover a primeira fruta do array
// f. Exiba o array resultante na tela

function exercise03() {
    let frutas = ["Maça Verde", "Ameixa", "Pêssego"]

    console.log("Usando PUSH:");
    frutas.push("Morango");
    console.log(frutas);

    console.log("Usando POP:");
    frutas.pop();
    console.log(frutas);

    console.log("Usando UNSHIFT:");
    frutas.unshift("Banana");
    console.log(frutas);

    console.log("Usando SHIFT:");
    frutas.shift()
    console.log(frutas);
}

let selecionarExercicio = Number(prompt("Digite o Exercício que deseja testar:\n1. Mostrar Nomes\n2. Somar Números\n3. Métodos (push, pop, unshift, shift)\n0. Sair"))

switch (selecionarExercicio) {
    case 0:
        break
    case 1:
        exercise01()
        break;
    case 2:
        exercise02()
        break;
    case 3:
        exercise03()
        break;
    default:
        document.write(`Digite um número até de 1 até 3`)
}