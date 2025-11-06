// a diferença do filter para o map é que retorna um novo array com a mesma quantidade de elementos ou menor, dependendo da condição que for passada no filtro
// é util para filtrar dados, para filtrar temos uma condição
// também tem return quando tem function, quando tem => não tem return
// ex:
//let numeros = [1, 2, 3, 4, 5, 6];
// let pares = numeros.filter(function(num) {
//     return num % 2 === 0;
// });
// console.log(pares); // [2, 4, 6]
// outro exemplo com arrow function
// let nomes = ["Ana", "Lucas", "Tiago", "Iza"];
// let longos = nomes.filter(nome => nome.length > 4);
// console.log(longos); // ["Lucas", "Tiago"]
// se eu precisse da posição do nome eu colocaria assim:
// let nomes = ["Ana", "Lucas", "Tiago", "Iza"];
// let longos = nomes.filter((nome, posição) => nome.length > 4);
// console.log(longos); // ["Lucas", "Tiago"]


let idades = [12, 17, 25, 15, 34, 60, 8];
let maiores = idades.filter(idades => idades >= 18);
console.log(maiores)