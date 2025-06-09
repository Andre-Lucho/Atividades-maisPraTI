const prompt = require('prompt-sync')({ sigint: true });

// Lista de Exercícios 2

/* Seção 1: Estruturas de Controle Avançadas

01 - Validação de Datas:
Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores formarem  uma  data  real  (meses  de  28–31  dias,  ano  bissexto  para fevereiro)
e false caso contrário. */

function ehDataValida(dia, mes, ano) {
  function ehBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
  }

  if (
    !Number.isInteger(dia) ||
    !Number.isInteger(mes) ||
    !Number.isInteger(ano)
  ) {
    console.log(
      'o(s) parâmetro(s) passados tem valor diferente de numeral.\nDigite valores válidos.\nSaindo...',
    );
    return;
  }

  if (dia < 1 || dia > 31) {
    console.log('false');
    return;
  }
  if (mes < 1 || mes > 12) {
    console.log('false');
    return;
  }

  if (ano < 1970) {
    console.log('false');
    return;
  }

  let day = dia.toString().padStart(2, '0');
  let month = mes.toString().padStart(2, '0');
  let year = ano.toString().padStart(2, '0');

  if (ehBissexto(ano)) {
    console.log(
      `a data fornecida é: ${day}/${month}/${year}. Esse ano foi um ano bissexto`,
    );
  } else {
    console.log(`a data fornecida é: ${day}/${month}/${year}`);
  }

  return true;
}

/*2. Jogo de Adivinhação
// Escreva  um  script  que  gere um número aleatório de 1 a 100 e peça ao usuário,  para  adivinhar.
// Use  while  para  repetir  até  acertar,  contando tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado. */

function guessNumber() {
  let userInput = 0;
  let number = 1;

  while (number !== userInput) {
    userInput = Number(prompt('Escolha um nuúmero de 1 a 100 e digite: '));

    if (isNaN(userInput)) {
      console.log(
        'Você digitou um valor diferente de um numeral.\nDigite um valor válido...',
      );
      return;
    }

    if (userInput < 1 || userInput > 100 || !Number.isInteger(userInput)) {
      console.log('Por favor, digite um número inteiro entre 1 e 100.');
      return;
    }

    number = Math.round(Math.random() * 100 + 1);

    if (number === userInput) {
      console.log(
        `Você acertou o número sorteado pelo PC: ${number} Parabéns!`,
      );
    } else {
      console.log(`Você não acertou o número sorteado! Tente novamente`);
    }
  }
  console.log('Fim do jogo!');
}

/* 3. Palavras Únicas
Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair todas as palavras únicas e exibi-las em um array. */

// Seção 2: Funções e Recursão

/* 4. Fatorial Recursivo
Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando um Error, e n === 0 retornando 1. */

// const executarExercicios = (nomeDaFuncao) => {
//   typeof nomeDaFuncao == 'function'
//     ? nomeDaFuncao()
//     : console.log(
//         'Você inseriu um nome inválido para a função que deseja executar!!\nInsira novamente o nome correto da função correspondente ao exercício desejado',
//       );
// };
// qual é o erro?

// Digitar abaixo (entre os parênteses) nome da função que se quer executar sem os parênteses:
