// A diferença entre functions e arrow functions é que arrow functions não tem o contexto this


// ISTO NÃO FUNCIONA 

const teste2 = () => {

    console.log(this)
}

// PARA FUNCIONAR É NECESSÁRIO DECLARAR EXPLIECITAMENTE

const teste1 = function teste1() {

    console.log(this)
}