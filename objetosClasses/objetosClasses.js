const pessoa = {

    nome: 'Giuliano',
    idade: 27,
    descrever: function()  {

        console.log(`O meu nome é ${this.nome} e tenho ${this.idade} anos`);
    }

};

pessoa['nome'] = 'Cesar';

pessoa.descrever();


console.log("=========================================");

class Pessoa {

    nome;
    idade;

    constructor (nome, idade) {

        this.nome = nome;
        this.idade = idade;
    }

    descrever () {

        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade}`);
    }
}

giuliano = new Pessoa('Giuliano', 27);
julio    = new Pessoa('Julio', 58);
giuliano.descrever();

console.log("====================================");

function comparaIdade(p1, p2) {

    if(p1.idade1 > p2.idade2) {

        return `${p1.nome} é mais velho que ${p2.nome}` ;
    } else {
        return `${p2.nome} é mais velho que ${p1.nome}`
    }
}

giuliano = new Pessoa('Giuliano', 27);
julio    = new Pessoa('Julio', 58);

console.log(comparaIdade(giuliano, julio));

console.log("====================================");

class Carro {

    marca;
    cor;
    gastoMedioPorKm;

    constructor (marca, cor, gastoMedioPorKm) {

        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularValorPercurso (preco, distancia) {

        return distancia * this.gastoMedioPorKm * preco;

    }
}

renault = new Carro('Renault', 'Preto', 1/12)

console.log(renault.calcularValorPercurso(70, 5));


 console.log("=====================================");

 class Paciente {

    altura;
    peso;

    constructor(altura, peso) {
        this.altura = altura;
        this.peso = peso;      
    }   

    calcularIMC = () => {
        return  this.peso / (this.altura * this.altura);
    }

    classificarIMC = () => {

        let imc = this.calcularIMC();

        if(imc < 19) {
           return "Magra";
        }

        else if (imc > 19 && imc <= 25) {
           return "Normal";
        }

        else {
           return "Obesa";
        }
    }
 }

 jose = new Paciente(1.70, 70.0);

 console.log(`Seu imc é ${jose.calcularIMC().toFixed(2)} e a sua classificação é: ${jose.classificarIMC()}`);