const prompt = require('prompt-sync')({ sigint: true });

/* 
Lista de Exercícios 2
---------------------------------------

Seção 1: Estruturas de Controle Avançadas
------------------------------------------------------------------------------

1 - Validação de Datas:
---------------------------------------
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
      'O(s) parâmetro(s) passados tem valor diferente de numeral.\nDigite valores válidos.\nSaindo...',
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

/*
2 - Jogo de Adivinhação
---------------------------------------
Escreva  um  script  que  gere um número aleatório de 1 a 100 e peça ao usuário para  adivinhar.
Use  while  para  repetir  até  acertar,  contando tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado. */

function guessNumber() {
  let userInput;
  let attempts = 0;
  const secretNumber = Math.round(Math.random() * 100 + 1);

  console.log('Bem-vindo ao Jogo: Adivinhação do Número Secreto!');

  while (secretNumber !== userInput) {
    userInput = Number(prompt('Escolha um número de 1 a 100 e digite: '));
    if (isNaN(userInput)) {
      console.log(
        'Você digitou um valor diferente de um numeral.\nDigite um valor válido...',
      );
      continue;
    }
    if (userInput < 1 || userInput > 100 || !Number.isInteger(userInput)) {
      console.log(
        'Por favor, digite um número inteiro no intervalo entre 1 e 100.',
      );
      continue;
    }

    attempts++;
    if (secretNumber === userInput) {
      console.log(
        `Você acertou o número sorteado pelo PC: ${secretNumber}! Parabéns!\nVocê precisou de ${attempts} tentativas!`,
      );
    } else {
      if (userInput < secretNumber) {
        console.log(
          `O número que você digitou ${userInput} é MUITO BAIXO! Tente novamente um número MAIS ALTO.`,
        );
      } else {
        console.log(
          `O número que você digitou (${userInput}) é MUITO ALTO! Tente novamente um número MAIS BAIXO.`,
        );
      }
      console.log(`Numero de tentativas até agora: ${attempts}.`);
    }
  }
  console.log('Fim do jogo!');
}

/* 
3 - Palavras Únicas
---------------------------------------
Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair todas as palavras únicas e exibi-las em um array. */

function singleWords(str) {
  if (!isNaN(str)) {
    console.log(
      'Você digitou algum valor diferente de uma string.\nDigite um valor válido...',
    );
    return;
  }

  let wordsArr = str.split(' ');
  let singleWords = [];
  let word = '';

  for (let i = 0; i < wordsArr.length; i++) {
    word = wordsArr[i];

    if (!singleWords.includes(word)) {
      singleWords.push(word);
    }
  }
  return singleWords;
}

/* 
Seção 2: Funções e Recursão
------------------------------------------------------------------------------

4 - Fatorial Recursivo
---------------------------------------
Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando um Error, e n === 0 retornando 1. */

function fatorial(n) {
  if (n < 0) {
    throw new Error(
      'Essa função não calcula o fatorial de um número negativo! \nEscolha um número positivo para o calculo.',
    );
  }

  try {
    if (n === 0) {
      return 1;
    } else {
      return n * fatorial(n - 1);
    }
  } catch (error) {
    console.log('Erro: ', error.messege);
  }
}

/*
5- Debounce​
---------------------------------------
Crie function debounce(fn, delay) que receba uma função fn e um delay em ms, retornando uma nova função que só executa fn se não for
chamada novamente dentro do intervalo. */

function debounce(fn, delay) {
  let timer = null;

  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      fn.aply(this, args);
    }, delay);
  };

  // Função principal que quero que tenha eu tempo de execução e re-execução controlados:
  // Ex.
  function mainFunction() {
    // console.log('Buscando por: ', texto);
  }

  // Função 'debounced' da função 'mainFunction'
  let mainFunctionDebounced = debounce(mainFunction, 1000);

  // Aplicando a função debounced:
  // --------------------------------------------------
  // Ex.
  // document.getElementById('nomeDoID').addEventListener('input', (event) => {
  //   mainFunctionDebounced(event.target.value);
  // });
}

/*
6. Memoization​
---------------------------------------
Implemente function memoize(fn) que armazene em cache chamadas anteriores de fn (por argumentos), retornando resultados instantâneos em
repetidas invocações. */

function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

//  Exemplo com recursividade:
// Função principal
function mainFunction(n) {
  // condicional --> caso base
  if (n < x) return n;
  // caso recursivo
  return mainFunction(n); // ...
  // --> função mainFunction aplicada recursivamente
}

// Função memoize da função mainFunction
const memoizedMainFunction = memoize(function mainFunction(n) {
  memoizedMainFunction(n); //...
  // --> por exemplo a função memoizedMainFunction aplicada recursivamente
});

// ------------------------------------------------------------------------ //

// Exemplo aplicado a Sequência de Fibonacci:
function fibonacci(n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoizedFibonacci = memoize(function fibonacci(n) {
  if (n < 2) return n;
  return memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2);
});

/*
Seção 3: Arrays e Objetos Complexos
------------------------------------------------------------------------------

7. Mapeamento e Ordenação​
---------------------------------------
Dado um array produtos = [{ nome, preco }, …], crie uma função que retorne um novo array apenas com os nomes, 
ordenados por preço crescente, usando map, sort. */

let product = [
  { nome: 'Computador', preco: 'R$3000' },
  { nome: 'Celular', preco: 'R$1500' },
  { nome: 'Carro', preco: 'R$15000' },
];

function priceOrder(arr) {
  let newProduct = arr.slice();
  const regexp = /[R$']/gi;

  const newProdOrder = newProduct
    .map((prd) => {
      const price = Number(prd.preco.replace(regexp, ''));
      return { ...prd, preco: price };
    })
    .sort((a, b) => a.preco - b.preco);
  const newNameReange = newProdOrder.map((pr) => pr.nome);

  return newNameReange;
}

/*
8. Agrupamento por Propriedade​
---------------------------------------
Em vendas = [{ cliente, total }, …], use reduce para gerar um objeto onde cada chave é um cliente e o valor é a soma de todos os seus total. */

let vendas = [
  {
    cliente: 'André',
    compras: [
      { camisa: 'Polo-Azul', preco: 'R$50' },
      { bermuda: 'Adidas-Verde', preco: 'R$100' },
      { tenis: 'NikeAir', preco: 'R$200' },
    ],
  },
  {
    cliente: 'João',
    compras: [
      { camisa: 'Polo-Vermelha', preco: 'R$65' },
      { calça: 'Social-002', preco: 'R$80' },
      { sapato: 'preto', preco: 'R$320' },
    ],
  },
  {
    cliente: 'Sofia',
    compras: [
      { blusa: 'Rosa002', preco: 'R$74' },
      { bijuteria: '0232', preco: 'R$60' },
    ],
  },
  {
    cliente: 'Renata',
    compras: [
      { capaCelular: 'Rosa002', preco: 'R$24' },
      { enfeite: '032', preco: 'R$15' },
      { caderno: 'Tilibra55', preco: 'R$40' },
    ],
  },
];

function salesReduce(arr) {
  let newSalesArr = arr.slice();
  const regexp = /[R$']/gi;

  const sales = newSalesArr.map((sale) => {
    const price = sale.compras.map((item) =>
      Number(item.preco.replace(regexp, '')),
    );
    const total = price.reduce((acc, preco) => {
      return acc + preco;
    }, 0);
    return `Cliente: ${sale.cliente} - Total da compra: R$ ${total.toFixed(2)}`;
  });
  return sales;
}

/*
9. Conversão Entre Formatos​
---------------------------------------
Escreva duas funções:
1)​ paresParaObjeto(pares) recebe um array de pares [ [chave, valor], … ] e retorna o objeto equivalente.
2) objetoParaPares(obj) faz o inverso, retornando um array de pares. */

// 1)

let listaArray = [
  ['camisa', 'Polo-Azul'],
  ['bermuda', 'Adidas-Verde'],
  ['tenis', 'NikeAir'],
];

let listaObjeto = [
  { camisa: 'Polo-Azul' },
  { bermuda: 'Adidas-Verde' },
  { tenis: 'NikeAir' },
];

// (1.a) Com .map()
function paresParaObjetoMap(pares) {
  let newArr = pares.map((item) => {
    let key = item[0];
    let value = item[1];
    return { [key]: value };
  });
  return console.log(newArr);
}

// (1.b) com for...of:
function paresParaObjetoFor(pares) {
  let newArr = [];

  for (let item of pares) {
    let key = item[0];
    let value = item[1];

    const newObject = { [key]: value };
    newArr.push(newObject);
  }
  console.log(newArr);
}

// (1.c) Com .reduce()
function paresParaObjetoReduce(pares) {
  let newArr = pares.reduce((acc, item) => {
    let key = item[0];
    let value = item[1];
    const newObject = { [key]: value };
    acc.push(newObject);
    return acc;
  }, []);
  return console.log(newArr);
}

// 2)

// 2.a) Com .map()
function objetoParaParesMap(obj) {
  let newArr = obj.map((item) => {
    const arr = Object.entries(item)[0];
    return arr;
  });
  return console.log(newArr);
}

// 2.b) Com for...of

function objetoParaParesFor(obj) {
  let newArr = [];
  for (const item of obj) {
    const arr = Object.entries(item)[0];
    newArr.push(arr);
  }
  console.log(newArr);
}

// 2.c) Com .reduce()
function objetoParaParesReduce(obj) {
  let newArr = obj.reduce((acc, item) => {
    const arr = Object.entries(item)[0];
    acc.push(arr);
    return acc;
  }, []);
  return console.log(newArr);
}

/* Seção 1 
----------------- */

/*Exercício 1 - Validação de Datas --> Indique valores para o dia, mês e ano dentro do parênteses. */
// ehDataValida(dia, mes, ano)

/* Exercício 2 - Jogo de Adivinhação */
// guessNumber();

/* Exercício 3 - Palavras Únicas --> Indique uma string dentro dos parênteses. */
// singleWords('string')

/* Seção 2 
----------------- */

/* Exercício 4 - Fatorial Recursivo --> Indique um número para cálculo do seu fatorial dentro dos parênteses. */
// fatorial(n)

/* Exercício 5 - Debounce​ --> Indique a função a se fazer o debounce e seu tempo de delay dentro dos parênteses. */
// debounce(fn, delay)

/* Exercício 6 - Memoize --> Indique a função a fazer o memoize dentro dos parênteses. */
// memoize(fn)

/* Exemplo do exercício: */
// console.log(memoizedFibonacci(1000));

/*Seção 3
----------------- */

/* Exercício 7 -  Mapeamento e Ordenação​ --> Indique o array a fazer o mapeamento e ordenação dentro dos parênteses. */
// priceOrder(arr)

/* Exercício 8 - Agrupamento por Propriedade​ --> Indique o array a fazer o agrupamento, reduzindo a um array com apenas uma chave(nome) e o valor total somado da segunda chave (total da compra) dentro dos parênteses. */
// salesReduce(arr)

/* Exercício 9 - Conversão Entre Formatos​ */

/* 1 - Indique o array a tranformar em objeto (dentro dos parênteses) em uma das opções abaixo. */
//paresParaObjetoMap(pares)
//paresParaObjetoFor(pares)
// paresParaObjetoReduce(pares)

/* 2- Indique o objeto a tranformar em array (dentro dos parênteses) em uma das opções abaixo. */
// objetoParaParesMap(obj)
// objetoParaParesFor(obj)
// objetoParaParesReduce(obj);
