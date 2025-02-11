var x = 10;
var y = '12';


// resultado = -2. Isso ocorre pela coerção dos dados, 
// como ele não está concatenando, ele fará essa conversão da string para inteiro

console.log(x - y ) 


console.log(!!""); // conversão de booleano, negação da negação
console.log(!!"1"); // como há um valor e está negando a negação então é uma verdade, logo é true

// null é ausência de valor e não inexistência de valor;
// null é um valor nulo

// undefined é quando não existisse um valoe, ele nem é declarado
// nulo ausência de valor e undefined inexistência de declaração da variável, ela nem existe um valor ou chave.

const x = Symbol('1'); // o symbol cria um "valor único", mesmo criando o mesmo symbol e atribuindo a outra
                       // variável ele continuaria sendo único
                       // serve para atribuir valores únicos a objetos por exemplo, tornando ele imutável