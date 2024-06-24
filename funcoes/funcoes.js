function incrementarJuros(valor, juros) {

    valorAcrescimo = (juros / 100) * valor;

    return valor + valorAcrescimo;

}

console.log(incrementarJuros(1000, 20));

console.log("=====================================");

function calcularIMC(peso, altura) {

    return imc = peso / Math.pow(altura, 2)

}

function definicaoIMC(imc) {

    if (imc <= 25) {

        return 'Normal';

    } else {

        return 'Acima';
    }
}

// função imediata que executa apenas uma vez, também conhecida como função não nomeada
// Esse tipo de função será lida imediatamente, não precisando de uma invocação para executar a açao dentro dela

(() => {

    peso = 82.4;
    altura = 1.80;

    const imc = calcularIMC(peso, altura);
    console.log(definicaoIMC(imc))

})();

console.log("=======================================");

function escrevaMeuNome(nome) {
    return nome;
}

function verfificaIdade(idade) {

    if (idade <= 18) {

        console.log(escrevaMeuNome("Giuliano") + " é menor de idade");

    } else {
        console.log(escrevaMeuNome("Giuliano") + " é maior de idade");
    }
}

verfificaIdade(27);


console.log("==========================================");

// 3) Calcular o valor de um produto, considerando o preço normal de etiqueta e forma de pagamento 
// débito, 10% de desconto, dinheiro ou pix 15% e desconto, 2 vezes preço normal sem juros, acima de duas vezes 10%

// 1 - débito, 2 - dinheiro ou pix, 3 - crédito

function calculaJuros(parcela) {

    valorParcela = 0;
    juros = 0;

    if (parcela === 2) {

        valorParcela = valor / parcela;

    } else if (parcela >= 3) {

        juros = (10 / 100) * valor;

        valorParcela = (valor / parcela) + juros / parcela;
    }

    return [juros, valorParcela];
}

function calculaValorProduto(valor, formaPagamento) {

    if (formaPagamento === 1) {

        desconto = (10 / 100) * valor;
        return valorCompra = valor - desconto;

    } else if (formaPagamento === 2) {

        desconto = (15 / 100) * valor;
        return valorCompra = valor - desconto;

    } else if (formaPagamento >= 3) {

        jurosCalculado = calculaJuros(3);
        return valorCompra = valor + jurosCalculado[0];
    }
}

(() => {

    valor = 100;
    formaPagamento = 3;

    valorCompra = calculaValorProduto(valor, formaPagamento);

    console.log("O valor da compra é: " + valorCompra);

    if (formaPagamento === 3) console.log("O valor da parcela é: " + jurosCalculado[1]);

})()