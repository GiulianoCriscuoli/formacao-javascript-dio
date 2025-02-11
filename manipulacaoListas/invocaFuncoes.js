const pessoa = {
    nome: "Giuliano"
}

function gritar(prefixo) {
    console.log(prefixo, this.nome);
}

gritar.apply(pessoa, ['Olá']);
gritar.call(pessoa, 'Olá');
