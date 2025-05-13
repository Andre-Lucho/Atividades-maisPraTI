const prompt = require('prompt-sync')({ sigint: true });

// Lista de Exercícios 1 - Estudando as estruturas básicas

// Exercício 01:
// Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

function numerosInteiros() {
  let userInput = Number(
    prompt(
      'Verificação de números pares ou ímpares!\nDigite um número inteiro: ',
    ),
  );

  let numberIsInteger;

  if (isNaN(userInput)) {
    console.log(
      'Você digitou um valor diferente de numeral.\nDigite um valor válido.\nSaindo...',
    );
  } else if (!Number.isInteger(userInput)) {
    console.log(
      'O número digitado não é um inteiro!\nDigite um valor válido.\nSaindo...',
    );
  } else {
    numberIsInteger = userInput;

    if (numberIsInteger % 2 === 0) {
      console.log('O número digitado é um número par\nSaindo...');
    } else {
      console.log('O número digitado é um número ímpar\nSaindo...');
    }
  }
}

// Exercício 02:
// Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido,
// utilizando uma estrutura de controle if-else.

// crianças --> 1 - 11 anos
// adolescente --> 12 - 17 anos
// adulto --> 18 - 64 anos
// idoso --> acima de 65 até 130

function faixaEtaria() {
  let age = Number(prompt('Verificação de faixa etária! Digite sua idade: '));

  if (isNaN(age)) {
    console.log(
      'Você digitou outro caractere a não ser um numeral! Digite novamente ',
    );
  } else {
    if (age > 1 && age <= 11) {
      console.log('Sua idade se enquadra na faixa etária de Crianças');
    } else if (age > 11 && age <= 17) {
      console.log('Sua idade se enquadra na faixa etária de Adolescentes');
    } else if (age > 17 && age <= 64) {
      console.log('Sua idade se enquadra na faixa etária de Adultos');
    } else if (age > 64 && age <= 130) {
      console.log('Sua idade se enquadra na faixa etária de Idosos');
    } else {
      console.log(
        'Sua idade não se enquadra em nenhuma das faixa etária definidas',
      );
    }
  }
}

// Exercício 03:
// Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else.

// Aprovado --> 8 - 10
// Recuperação --> 7 - 5
// Reprovado --> <=5

function passingGrade() {
  let grade = Number(prompt('Verificação de aprovação! Digite sua nota: '));

  if (isNaN(grade)) {
    console.log(
      'Você digitou outro caractere a não ser um numeral! Digite novamente ',
    );
  } else {
    if (grade > 7 && grade <= 10) {
      console.log('Você foi Aprovado!');
    } else if (grade > 5 && grade <= 7) {
      console.log('Você está em Recuperação!');
    } else if (grade <= 5) {
      console.log('Você foi Reprovado!');
    } else {
      console.log(
        'Sua idade não se enquadra em nenhuma das faixa etária definidas',
      );
    }
  }
}

// Exercício 04:
// Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

function interactiveMenu() {
  let inputNumber;

  /* 
  1) Utilizando While:
  ---------------------------

  let userInput = prompt(
    'Menu Interativo! Digite uma opção:\n1. Opção 01\n2. Opção 02\n3. Opção 03\nPara sair, digite "sair"',
  );

  while (userInput) {
    if (userInput.toLowerCase() === 'sair') {
      console.log('Saindo do sistema...');
      break;
    } else {
      inputNumber = Number(userInput);

      switch (inputNumber) {
        case 1:
          console.log('Você digitou a opção 1');
          break;
        case 2:
          console.log('Você digitou a opção 2');
          break;
        case 3:
          console.log('Você digitou a opção 3');
          break;
        default:
          console.log('Você digitou uma opção inválida');
          break;
      }
    }
    userInput = false;
  }
 */

  /*

  2) Utilizando Do...While:
    ---------------------------  */

  do {
    userInput = prompt(
      'Menu Interativo! Digite uma opção:\n1. Opção 01\n2. Opção 02\n3. Opção 03\nPara sair, digite "sair"',
    );

    if (userInput.toLowerCase() === 'sair') {
      console.log('Saindo do sistema...');
      break;
    } else {
      inputNumber = Number(userInput);

      switch (inputNumber) {
        case 1:
          console.log('Você digitou a opção 1');
          break;
        case 2:
          console.log('Você digitou a opção 2');
          break;
        case 3:
          console.log('Você digitou a opção 3');
          break;
        default:
          console.log('Você digitou uma opção inválida'); //
          break;
      }
    }
  } while (inputNumber);
}

// Exercício 05:
//Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa
// e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

/* 
IMC = peso / altura * altura

Tabela de referência do IMC:
--------------------------------------------------------
Abaixo do peso: IMC menor que 18,5
Peso ideal: IMC entre 18,5 e 24,9
Sobrepeso: IMC entre 25 e 29,9
Obesidade: IMC igual ou maior que 30
*/

function imcCalculator() {
  let userweight = Number(prompt('Calculadora IMC\nDigite seu peso atual: '));
  let userheigh = Number(prompt('Digite sua altura: '));

  let imc = userweight / userheigh ** 2;
  let correctedIMC = imc.toFixed(1);

  console.log(`Seu valor de IMC é ${correctedIMC}`);

  if (correctedIMC < 18.5) {
    return ' XX Você se enquadra na categoria "Abaixo do peso"';
  } else if (correctedIMC >= 18.5 && correctedIMC < 24.9) {
    return 'Você está no seu peso ideal!';
  } else if (correctedIMC >= 25 && correctedIMC < 29.9) {
    return 'Você se enquadra na categoria "Sobrepeso"';
  } else if (correctedIMC >= 30) {
    return 'Você se enquadra na categoria "Obesidade"';
  }
}

// Exercício 06:
// Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo.
// Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.

function triangleCheck() {
  let sideA = Number(
    prompt('Verificação de Triângulos!\nDigite um valor para o lado A: '),
  );
  let sideB = Number(
    prompt('Verificação de Triângulos!\nDigite um valor para o lado B: '),
  );
  let sideC = Number(
    prompt('Verificação de Triângulos!\nDigite um valor para o lado C: '),
  );

  const aB = sideA == sideB;
  const aC = sideA == sideC;
  const bC = sideB == sideC;

  if (sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA) {
    console.log('Os valores fornecidos podem formar um triângulo');
    switch (true) {
      case (aB || aC || bC) && (!aB || !aC || !bC):
        console.log(
          'O triângulo formado com os lados fornecidos forma um triângulo isósceles',
        );
        break;

      case !aB && !aC && !bC:
        console.log(
          'O triângulo formado com os lados fornecidos forma um triângulo escaleno',
        );
        break;
      case aB && aC && bC:
        console.log(
          'O triângulo formado com os lados fornecidos forma um triângulo equilátero',
        );
        break;
    }
  } else {
    console.log('Os valores fornecidos não formam um triângulo');
  }
}

