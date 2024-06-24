/* calcular o valor de uma viagem */

/* preço do combustível */
/* gasto médio do combustível por km*/
/* distância em km da viagem */


const precoCombustivel = 5.79;
const kmPorLitros = 12;
const distanciaKM = 1500;

const litrosConsumidos = distanciaKM / kmPorLitros;

valorViagem = litrosConsumidos * precoCombustivel;

console.log(valorViagem.toFixed(2));
console.log("================================================================");

/* Calcular o valor da viagem. Variáveis: preço do etanol, gasolina, tipo de combustível, gasto médio por KM e distância em KM */

const etanol = 5.6;
const gasolina = 4;
const tipoCombustivel = "etanol";

const KMlitros = 10;
const distKM = 1400;

litrosTotais = distKM / KMlitros;

if (tipoCombustivel === "gasolina") {
    total = litrosTotais * gasolina;

    console.log(total + " gasolina");

} else if (tipoCombustivel === "etanol") {
    total = litrosTotais * etanol;

    console.log(total + " etanol");
} else {

    console.log("Nenhum combustível válido!");
}


console.log("================================================================");

// exercício média d ealuno: fórumula (nota 1 + nota 2 + nota 3) / 3

nota1 = 8;
nota2 = 7;
nota3 = 7;

notaFinal = (nota1 + nota2 + nota3) / 3;

console.log(notaFinal.toFixed(1))

if (notaFinal < 5) {

    console.log("Reprovado");
} else if (notaFinal >= 5 && notaFinal <= 7) {

    console.log("Recuperação");
} else {

    console.log("Aprovado");
}

console.log("================================================================");

// Cálculo IMC

peso = 154;
altura = 1.80;

imc = peso / Math.pow(altura, 2);

console.log(imc.toFixed(1));

if (imc < 18.5) {

    console.log("Abaixo do peso");
} else if (imc > 18.5 && imc <= 25) {

    console.log("normal");
} else if (imc >= 25 && imc <= 30) {

    console.log("Acima do peso");
} else if (imc > 30 && imc <= 40) {

    console.log("Obeso");
} else {

    console.log("Acima do peso");
}

console.log("================================================================");


// 3) Calcular o valor de um produto, considerando o preço normal de etiqueta e forma de pagamento 
// débito, 10% de desconto, dinheiro ou pix 15% e desconto, 2 vezes preço normal sem juros, acima de duas vezes 10%



produto = 300;
formaPagamento = "Crédito";
parcela = 3;

valorParcela = (produto / parcela);

if (formaPagamento === "Débito") {

    desconto = (10 / 100) * produto;
    valorProduto = produto - desconto;

    console.log("Valor da compra: " + valorProduto + " reais");

} else if (formaPagamento === "Dinheiro" || formaPagamento === "PIX") {

    desconto = (15 / 100) * produto;
    valorProduto = produto - desconto;

    console.log("Valor da compra: " + valorProduto + " reais");

} else if (parcela == 2 && formaPagamento === "Crédito") {

    valorProduto = valorParcela * parcela;

    console.log("Valor da parcela: " + valorParcela + " reais");
    console.log("Valor da compra: " + valorProduto + " reais");

} else if (parcela >= 3 && formaPagamento === "Crédito") {

    juros = produto * ( 10 / 100 );

    valorParcela = ( juros / parcela ) + valorParcela;
    valorProduto = valorParcela * parcela;

    console.log("Valor da parcela: " + valorParcela + " reais");
    console.log("Valor da compra: " + valorProduto + " reais");

}