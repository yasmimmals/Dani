let vendas = [
    { produto: "Notebook", categoria: "Informática", valor: 3500, quantidade: 2 },
    { produto: "Mouse", categoria: "Informática", valor: 80, quantidade: 5 },
    { produto: "Camiseta", categoria: "Moda", valor: 50, quantidade: 10 },
    { produto: "Tênis", categoria: "Moda", valor: 250, quantidade: 4 },
    { produto: "Livro", categoria: "Educação", valor: 40, quantidade: 7 },
    { produto: "Tablet", categoria: "Informática", valor: 1500, quantidade: 1 }
];
let totais = {}
let maior = 0
let categoriMaior = ""

const lista = vendas.forEach(function (ele, ind) {
    let valorCategotia = ele.valor * ele.quantidade

    console.log(valorCategotia)

    if (!totais[ele.categoria]) {
        totais[ele.categoria] = 0
    }
    totais[ele.categoria] += valorCategotia



    if (totais[ele.categoria] > maior) {
        maior = totais[ele.categoria]
        categoriMaior = ele.categoria
    }
})
    const soma = vendas.reduce((acumulador, atual) => {
        return acumulador + (atual.valor * atual.quantidade)
    }, 0)
    console.log(`a soma total do dos items é ${soma}`)
    console.log(` A categoria com o maior valor é ${categoriMaior} (R$ ${maior})`)