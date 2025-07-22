const prompt = require('prompt-sync')({ sigint: true });

// Lista de Exercícios 1 - Estudando as estruturas básicas

// Exercício 01:
// Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

function integers() {
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

function ageRange() {
  let age = Number(prompt('Verificação de faixa etária! Digite sua idade: '));

  if (isNaN(age)) {
    console.log(
      'Você digitou um valor diferentes de um numeral! Digite novamente... ',
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

function grade() {
  let grade = Number(prompt('Verificação de aprovação! Digite sua nota: '));

  if (isNaN(grade)) {
    console.log(
      'Você digitou um valor diferentes de um numeral! Digite novamente... ',
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

  if (isNaN(userweight) || isNaN(userheigh)) {
    console.log(
      'Você digitou um ou mais valores diferentes de um numeral.\nDigite um valor válido.\nSaindo...',
    );
  } else {
    let imc = userweight / userheigh ** 2;
    let correctedIMC = imc.toFixed(1);

    console.log(`Seu valor de IMC é ${correctedIMC}`);

    if (correctedIMC < 18.5) {
      console.log('Você se enquadra na categoria "Abaixo do peso"');
    } else if (correctedIMC >= 18.5 && correctedIMC < 24.9) {
      console.log('Você está no seu peso ideal!');
    } else if (correctedIMC >= 25 && correctedIMC < 29.9) {
      console.log('Você se enquadra na categoria "Sobrepeso"');
    } else if (correctedIMC >= 30) {
      console.log('Você se enquadra na categoria "Obesidade"');
    }
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

  if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
    console.log(
      'Você digitou um valor diferente de um numeral.\nDigite um valor válido.\nSaindo...',
    );
  } else {
    const aB = sideA == sideB;
    const aC = sideA == sideC;
    const bC = sideB == sideC;

    if (
      sideA + sideB > sideC &&
      sideA + sideC > sideB &&
      sideB + sideC > sideA
    ) {
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
}

// Exercício 07:
// As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze.
// Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

function buyingApples() {
  let apples = Number(prompt('Digite a quantidade de maças compradas: '));

  if (isNaN(apples)) {
    console.log(
      'Você digitou um valor diferente de numeral.\nDigite um valor válido.\nSaindo...',
    );
  } else if (!Number.isInteger(apples)) {
    console.log(
      'O número digitado não é um inteiro!\nDigite um valor válido.\nSaindo...',
    );
  } else {
    apples <= 12
      ? console.log(`O valor total da compra é: ${(apples * 0.3).toFixed(2)}`)
      : console.log(`O valor total da compra é: ${(apples * 0.25).toFixed(2)}`);
  }
}

// Exercício 08:
// Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

function orderingNumbers() {
  let numbers = [];

  let number1 = Number(prompt('Digite o primeiro número: '));
  numbers.push(number1);
  let number2 = Number(prompt('Digite o segundo número: '));
  numbers.push(number2);

  const verification = numbers.some((elem) => isNaN(elem));

  if (verification) {
    console.log(
      'Você digitou outro caractere a não ser um numeral! Digite novamente ',
    );
  } else {
    numbers.sort((a, b) => a - b).forEach((num) => console.log(num));
  }
}

// Exercício 09:
// Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop for.

function countdown() {
  for (let index = 10; index >= 1; index--) {
    console.log(index);
  }
}

// Exercício 10:
// Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

function writingANumber() {
  let number = Number(prompt('Digite um número: '));

  if (isNaN(number)) {
    console.log(
      'Você digitou um valor diferente de numeral.\nDigite um valor válido.\nSaindo...',
    );
  } else if (!Number.isInteger(number)) {
    console.log(
      'O número digitado não é um inteiro!\nDigite um valor válido.\nSaindo...',
    );
  } else {
    for (let index = 0; index < 10; index++) {
      console.log(number);
    }
  }
}

// Exercício 11:
// Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

function sum() {
  let userInput = 0;
  let numbers = [];
  let sum = 0;

  do {
    userInput = Number(prompt('Digite cinco números para processar a soma: '));
    numbers.push(userInput);
  } while (numbers.length < 5);

  const verification = numbers.some((elem) => isNaN(elem));

  if (verification) {
    console.log(
      'Você digitou outro caractere a não ser um numeral! Digite novamente ',
    );
  } else {
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    console.log(`O Valor total da soma é: ${sum}`);
  }
}

// Exercício 12:
// Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

function multiplicationTable() {
  let userInput = Number(
    prompt('Insira um número inteiro de 1 a 10 para calcular a sua tabuada: '),
  );

  if (isNaN(userInput)) {
    console.log(
      'Você digitou um valor diferente de numeral.\nDigite um valor válido.\nSaindo...',
    );
  } else if (!Number.isInteger(userInput)) {
    console.log(
      'O número digitado não é um inteiro!\nDigite um valor válido.\nSaindo...',
    );
  } else {
    for (let i = 0; i <= 10; i++) {
      console.log(`${userInput} * ${i} = ${userInput * i}`);
    }
  }
}

// Exercício 13.
// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

// Com métodos de Array -> diferente do feito em aula:

function average() {
  let userInput;
  let numbers = [];

  do {
    userInput = Number(prompt('Digite a nota para cáculo da média: '));
    numbers.push(userInput);
  } while (userInput !== 0);

  numbers.pop();
  const verification = numbers.some((elem) => isNaN(elem));

  if (verification) {
    console.log(
      'Você digitou outro caractere a não ser um numeral! Digite novamente ',
    );
  } else {
    let sum = numbers.reduce((acc, num) => acc + num);

    let average1 = sum / numbers.length;
    console.log(`A média final é: ${average1}`);
  }
}

// Exercício 14:
// Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

function fatorial() {
  let userInput = Number(
    prompt('Insira um número para calcular o seu fatorial: '),
  );
  let result = 1;

  if (isNaN(userInput)) {
    console.log(
      'Você digitou um valor diferente de um numeral.\nDigite um valor válido.\nSaindo...',
    );
  } else if (!Number.isInteger(userInput)) {
    console.log(
      'O número digitado não é um inteiro!\nDigite um valor válido.\nSaindo...',
    );
  } else {
    for (let i = 1; i <= userInput; i++) {
      result *= i;
    }
    console.log(result);
  }
}

// Exercício 15:
// Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

function sequenciaFibonacci() {
  let a = 0;
  let b = 1;
  let temp;
  console.log(a, b);

  for (let i = 3; i <= 10; i++) {
    temp = a + b;
    console.log(temp);
    a = b;
    b = temp;
  }
}

const executarExercicios = (nomeDaFuncao) => {
  typeof nomeDaFuncao == 'function'
    ? nomeDaFuncao()
    : console.log(
        'Você inseriu um nome inválido para a função que deseja executar!!\nInsira novamente o nome correto da função correspondente ao exercício desejado',
      );
};

// Digitar abaixo (entre os parênteses) nome da função que se quer executar sem os parênteses:
executarExercicios();
