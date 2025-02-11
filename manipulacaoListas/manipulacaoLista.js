// FOREACH

const lista = [1,3,5,7,4,24,56];

lista.forEach(value => {
    console.log(value);
});

// FILTER

// O FILTER TRAZ UMA LISTA NOVA CONFORME A CONDIÇÃO DA LISTA

listaFiltrada = lista.filter((element, i) => {
    return element <= 24;
})

console.log(listaFiltrada);

// MAP pega todos os valores do array e atribui uma função em um novo array, basicamente manipula o resultado dos dados em um novo objeto de listas.


listaMap = lista.map(value => {
    return value + 100
})

console.log(listaMap)


// REDUCE

// o reduce pega os valores anteriores e o atual e faz alguma operação lógica, trazendo o resultado final

listareduzida = lista.reduce((anterior, atual)=> {
    return anterior + atual;
});


console.log(listareduzida);


// JOIN separa o array com caracteres

console.log(lista.join(';'));

// concatenando funções

listaJoin = lista.filter((e) => e >= 10)
                 .map((e) => `<li>${e}</li>`)
                 .join('')

console.log(listaJoin)