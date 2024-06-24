const funcoes = require('./funcoesAux');

console.log(funcoes);

// object destructuring 

const { gets, print, entradasDeDados } = require('./funcoesAux');

var valor = [];

for (let i = 0; i < entradasDeDados.length; i++) {
    const numeroSorteado = gets();
    if(numeroSorteado > maiorValor) {
        var maiorValor = numeroSorteado;
    }
}

var valorPar = 0;
var valorImpar = 0;

for (let i = 0; i < entradasDeDados.length; i++) {

    if(entradasDeDados[i] > valorPar && entradasDeDados[i] % 2 === 0) {
        valorPar = entradasDeDados[i];
    } else {

        if(entradasDeDados[i] > valorImpar) {
            
            valorImpar = entradasDeDados[i];
        }
    }
}

print(maiorValor);
print(valorPar);
print(valorImpar);

const pessoa = {

    nome: 'Giuliano'
}

var {nome} = pessoa; 

// é quivalente a:

var nome = pessoa.nome;