const entradasDeDados = [5,40,3,5,67, 4, 10, 80, 75]
var i = 0;

function gets() {
    valor = entradasDeDados[i];
    i++;

    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print, entradasDeDados };