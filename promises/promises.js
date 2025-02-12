const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        numero = parseInt(Math.random() * 10);
        resolve(numero)
    })
    }, 2000)
  

    promise.then((response) => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
    .finally(() => {
        console.log("Tudo certo!")
    })

     // async await

     // async await é uma forma melhorada de escrever as promises

     