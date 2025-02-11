

// o proto funciona como uma espécie de herança

const pessoa = {
    genero: "Masculino"
}

const giuliano = {
    idade: 28,
    genero: "Muito masculino", // neste caso é a sobrescrita de propriedade
    __proto__: pessoa
}

console.log(giuliano.genero)


// classes em javascript com prototype e sem

// antes era feito desta forma com prototype

// function Pessoa(nome, idade) {
//     this.nome = nome;
//     this.idade = idade;
// }

// Pessoa.prototype.falar = function() {
//     console.log(`Eu sou ${nome} e tenho ${idade}`);
// }


// está forma foi reformulada para parecer com outras linguagens que utilizam classes, mas é o memso que o exemplo acima

class Pessoa {
    constructor(nome, idade) {

        this.nome = nome;
        this.idade = idade;
    }

    falar() {
        console.log(`Eu sou ${nome} e tenho ${idade}`);
    }
}

teste = new Pessoa("Giuliano", 28)
teste.falar()