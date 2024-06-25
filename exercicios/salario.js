// calcular saçário, valor bruto - percentual + adicional dos benefícios

// 0 a 1100 até 5%
// 1101 até 2500 10%
// maior que 2500 15%

// var salarioBruto = 2000;
// var beneficio = 100;

// if (salarioBruto <= 1100) {
//     total = (salarioBruto + beneficio);
//     total -= ( 5 / 100 ) * total;
    
// } else if (salarioBruto > 1100 && salarioBruto <= 2500) {
//     total = (salarioBruto + beneficio);
//     total -= ( 10 / 100 ) * total;

// } else {
//     total = (salarioBruto + beneficio);
//     total -= ( 15 / 100 ) * total;

// }

var salarioBruto = 1330;
var beneficio = 100;

function calcularPorcentagem(valor) {
    
    if (valor <= 1100) {
        return (5 / 100) * salarioBruto;

    } else if (valor > 1100 && valor <= 2500) {
       return ( 10 / 100 ) * salarioBruto; 

    } else {
        return ( 15 / 100 ) * salarioBruto;

    }
}
 
function retornaSoma(valor, valor2) {
    return valor + valor2;
}

retornaSalario = () => {

    total = retornaSoma(salarioBruto, beneficio) - calcularPorcentagem(salarioBruto);

    return total;
}

console.log(`Salário bruto é ${retornaSalario()}`);