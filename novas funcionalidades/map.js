// // cria um novo vetor e produz como resultado um novo vetor com o mesmo tamanho. Diferente do forEach
// // no map usamos o return 
// // ex: let novoArray = arrayOriginal.map(function(elemento, índice) {
//     // retorno de cada novo elemento
// });
// outro exemplo é: 
// let numeros = [1, 2, 3, 4, 5];
// let dobrados = numeros.map(function(num) {
//     return num * 2;
// });

// console.log(dobrados); // [2, 4, 6, 8, 10]
// quando tem => é um arrow function e não usaremos o return
//ex: let nomes = ["ana", "joão", "carla"];
// let nomesMaiusculos = nomes.map(nome => nome.toUpperCase());
// console.log(nomesMaiusculos); // ["ANA", "JOÃO", "CARLA"]

//Enunciado:
// Você recebeu uma lista com os preços de produtos em dólares. Converta todos os preços para reais, considerando a cotação de R$ 5.00.
let precosUSD = [10, 25.50, 8, 100, 35.25];
let cotacao = 5.00;
let brasil = precosUSD.map(preco => preco * 5.00.toFixed(2));
console.log(brasil);
