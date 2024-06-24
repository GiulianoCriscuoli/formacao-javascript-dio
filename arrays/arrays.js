const alunos = ["Cesar", "Ricardo"];

// adicionando no array

alunos.push("Giuliano")

console.log(alunos)

// remove o último pop

alunos.pop()

console.log(alunos)

// remove o primeiro 

alunos.shift()

console.log(alunos)

console.log("==============================================");

let nome = "Giuliano";

for (let index = 0; index < nome.length; index++) {
    console.log(nome[index])
    
}

console.log("==============================================");

var notas = [10, 10, 10];
var soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
    media = soma / notas.length;
    
}

console.log(media);

console.log("==============================================");


var numero = 9;
 tabuada = [];

for (let i = 0; i <= 10; i++) {
    tabuada[i] = numero * i;
}

console.log(tabuada);


console.log("==============================================");


var numeros = [0,3,2,1,4,5,6,7,8,9,10];
var numerosPares = [];

for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] % 2 === 0){
        numerosPares[i] = numeros[i];
    }
}

console.log(numerosPares);

var numerosParesMap = numeros.map((value, index) => {

    pares = value % 2 === 0 ? value : null;
    return pares;
    
}).filter(value  => value !== null)

console.log(numerosParesMap);


var numerosParesFilter = numeros.filter( value =>  value % 2 === 0 );

console.log(numerosParesFilter);

console.log("===========================");

var menorNumeroImpar = null;

for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] % 2 !== 0 && menorNumeroImpar === null) {
        menorNumeroImpar = numeros[i];

    } else if(numeros[i] % 2 !== 0 && numeros[i] < menorNumeroImpar) {
        menorNumeroImpar = numeros[i];
    }
}

console.log(menorNumeroImpar);