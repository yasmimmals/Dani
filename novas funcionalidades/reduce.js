// o reduce é uma função acumuladora, ou seja, ele vai reduzir o array a um único valor
// exemplos de uso do reduce:
// let numeros = [10, 20, 30, 40];

// let soma = numeros.reduce(function(acumulador, atual) {
//     return acumulador + atual;
// }, 0); // 0 é o valor inicial do acumulador

// console.log(soma); // 100

//exemplo com arrow function:
// let numeros = [1, 2, 3, 4, 5];
// let total = numeros.reduce((acc, num) => acc + num, 0);
// console.log(total); // 15
let vendas = [150, 300, 50, 450, 100];
let total = vendas.reduce((acumulador, venda) => acumulador + venda, 0);
console.log(`${total}`)